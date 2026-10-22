"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";
import { RoomEnvironment } from "three/examples/jsm/environments/RoomEnvironment.js";
import gsap from "gsap";
import type { MouseProxy } from "./CustomCursor";
import { SCROLL_SETTINGS } from "@/config/scroll";

/**
 * The SALT stone — a faceted orange salt crystal that drops in from the top of the
 * page, floats, and then travels with the reader from the header down to the footer.
 *
 * Its path is driven by elements marked with `data-stone="x y scale"` in the page:
 *   x, y  → position in viewport units (-1 = left/bottom edge, 1 = right/top edge)
 *   scale → size multiplier
 *   flags (optional, comma separated):
 *     front → the stone settles facing the viewer here instead of rotating
 *     exit  → on the way to this spot the stone slips out of the screen edge
 *             and glides back in
 * When a marked section is centred on screen, the stone sits at that spot.
 */

type Anchor = { at: number; x: number; y: number; s: number; front: number; exit: boolean };

const smooth = (t: number) => t * t * (3 - 2 * t);

function hash(x: number, y: number, z: number) {
  const s = Math.sin(x * 127.1 + y * 311.7 + z * 74.7) * 43758.5453;
  return s - Math.floor(s);
}

function buildStoneGeometry() {
  const geo = new THREE.IcosahedronGeometry(1, 1).toNonIndexed();
  const pos = geo.attributes.position as THREE.BufferAttribute;
  const v = new THREE.Vector3();
  for (let i = 0; i < pos.count; i++) {
    v.fromBufferAttribute(pos, i);
    // Consistent per-corner jitter → irregular facets without cracks
    const key = v.clone().multiplyScalar(1000).round();
    const n = hash(key.x, key.y, key.z);
    v.multiplyScalar(0.9 + n * 0.2);
    // Egg / gem silhouette: rounded top, pointed bottom (like the logo)
    v.y *= 1.32;
    const taper = v.y < 0 ? 1 + (v.y / 1.32) * 0.42 : 1 - (v.y / 1.32) * 0.12;
    v.x *= taper;
    v.z *= taper * 0.92;
    pos.setXYZ(i, v.x, v.y, v.z);
  }
  geo.computeVertexNormals();
  return geo;
}

function makeSpeckleTexture() {
  const c = document.createElement("canvas");
  c.width = c.height = 256;
  const ctx = c.getContext("2d")!;
  ctx.fillStyle = "#f0641a";
  ctx.fillRect(0, 0, 256, 256);
  for (let i = 0; i < 2600; i++) {
    const x = Math.random() * 256;
    const y = Math.random() * 256;
    const r = Math.random() * 1.6 + 0.3;
    const light = Math.random() > 0.7;
    ctx.fillStyle = light
      ? `rgba(255,214,170,${0.2 + Math.random() * 0.35})`
      : `rgba(190,60,5,${0.25 + Math.random() * 0.4})`;
    ctx.beginPath();
    ctx.arc(x, y, r, 0, Math.PI * 2);
    ctx.fill();
  }
  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
  tex.repeat.set(2, 2);
  return tex;
}

function makeGlowTexture() {
  const c = document.createElement("canvas");
  c.width = c.height = 128;
  const ctx = c.getContext("2d")!;
  const g = ctx.createRadialGradient(64, 64, 0, 64, 64, 64);
  g.addColorStop(0, "rgba(255,140,60,0.55)");
  g.addColorStop(0.4, "rgba(255,120,40,0.18)");
  g.addColorStop(1, "rgba(255,120,40,0)");
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, 128, 128);
  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
}

export default function StoneScene({ mouseProxy }: { mouseProxy: MouseProxy }) {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // ---------- Renderer / scene ----------
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: "high-performance" });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.75));
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 0.92;
    mount.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    const pmrem = new THREE.PMREMGenerator(renderer);
    const envTex = pmrem.fromScene(new RoomEnvironment(), 0.04).texture;
    scene.environmentIntensity = 0.55;
    scene.environment = envTex;

    const camera = new THREE.PerspectiveCamera(32, window.innerWidth / window.innerHeight, 0.1, 100);
    camera.position.set(0, 0, 12);

    scene.add(new THREE.HemisphereLight(0xfff3e0, 0xc9772f, 0.55));
    const key = new THREE.DirectionalLight(0xffffff, 2.4);
    key.position.set(4, 6, 6);
    scene.add(key);
    const rim = new THREE.DirectionalLight(0xff7a2a, 2.2);
    rim.position.set(-5, -2, -4);
    scene.add(rim);

    // ---------- Stone ----------
    const root = new THREE.Group(); // position / scale (scroll path)
    const spin = new THREE.Group(); // rotation (float + mouse)
    root.add(spin);
    scene.add(root);

    const geo = buildStoneGeometry();
    const speckle = makeSpeckleTexture();
    const stoneMat = new THREE.MeshPhysicalMaterial({
      color: 0xffffff,
      map: speckle,
      roughness: 0.38,
      metalness: 0,
      clearcoat: 1,
      clearcoatRoughness: 0.18,
      emissive: new THREE.Color(0xff5200),
      emissiveIntensity: 0.18,
      flatShading: true,
      transparent: true,
      opacity: 0.97,
    });
    const stone = new THREE.Mesh(geo, stoneMat);
    spin.add(stone);

    // Bright facet lines, like the crystal in the logo
    const edges = new THREE.LineSegments(
      new THREE.EdgesGeometry(geo, 1),
      new THREE.LineBasicMaterial({ color: 0xfff1e0, transparent: true, opacity: 0.55 })
    );
    edges.scale.setScalar(1.002);
    spin.add(edges);

    // Soft inner glow
    const glow = new THREE.Sprite(
      new THREE.SpriteMaterial({ map: makeGlowTexture(), transparent: true, depthWrite: false, blending: THREE.NormalBlending })
    );
    glow.scale.set(5.2, 5.2, 1);
    glow.position.z = -0.6;
    root.add(glow);

    // Floating salt grains orbiting the stone
    const grains = new THREE.Group();
    root.add(grains);
    const grainGeo = new THREE.OctahedronGeometry(0.05, 0);
    const grainMat = new THREE.MeshPhysicalMaterial({ color: 0xfff4e6, roughness: 0.2, clearcoat: 1, flatShading: true });
    const grainData: { m: THREE.Mesh; r: number; a: number; sp: number; y: number }[] = [];
    for (let i = 0; i < 26; i++) {
      const m = new THREE.Mesh(grainGeo, i % 4 === 0 ? stoneMat : grainMat);
      const d = { m, r: 1.7 + Math.random() * 1.3, a: Math.random() * Math.PI * 2, sp: 0.15 + Math.random() * 0.35, y: (Math.random() - 0.5) * 2.6 };
      m.scale.setScalar(0.6 + Math.random() * 1.6);
      grains.add(m);
      grainData.push(d);
    }

    // ---------- Scroll path ----------
    let anchors: Anchor[] = [];
    const readAnchors = () => {
      const maxScroll = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
      const mobile = window.innerWidth < 768;
      anchors = Array.from(document.querySelectorAll<HTMLElement>("[data-stone]"))
        .map((el) => {
          const parts = (el.dataset.stone || "0 0 1").trim().split(/\s+/);
          const [x, y, s] = parts.slice(0, 3).map(Number);
          const flags = (parts[3] || "").split(",");
          const front = flags.includes("front") ? 1 : 0;
          const exit = flags.includes("exit");
          const r = el.getBoundingClientRect();
          const top = r.top + window.scrollY;
          const at = Math.min(maxScroll, Math.max(0, top + r.height / 2 - window.innerHeight / 2));
          return mobile
            ? { at, x: x * 0.45, y: y * 0.9, s: s * 0.78, front, exit }
            : { at, x, y, s, front, exit };
        })
        .sort((a, b) => a.at - b.at);
      if (!anchors.length) anchors = [{ at: 0, x: 0, y: 0, s: 1, front: 1, exit: false }];
    };
    readAnchors();

    const sample = (scroll: number) => {
      if (scroll <= anchors[0].at) return anchors[0];
      const last = anchors[anchors.length - 1];
      if (scroll >= last.at) return last;
      for (let i = 0; i < anchors.length - 1; i++) {
        const a = anchors[i];
        const b = anchors[i + 1];
        if (scroll >= a.at && scroll <= b.at) {
          const u = (scroll - a.at) / Math.max(1, b.at - a.at);
          const t = smooth(u);
          let x = a.x + (b.x - a.x) * t;
          if (b.exit) {
            // Slide out past the screen edge, stay hidden briefly (~25% of the trip),
            // then glide back in from the same side to the next spot.
            const out = (a.x >= 0 ? 1 : -1) * 1.85;
            if (u < 0.38) x = a.x + (out - a.x) * smooth(u / 0.38);
            else if (u < 0.62) x = out;
            else x = out + (b.x - out) * smooth((u - 0.62) / 0.38);
          }
          return {
            at: scroll,
            x,
            y: a.y + (b.y - a.y) * t,
            s: a.s + (b.s - a.s) * t,
            front: a.front + (b.front - a.front) * t,
            exit: false,
          };
        }
      }
      return last;
    };

    const viewSize = () => {
      const h = 2 * Math.tan(THREE.MathUtils.degToRad(camera.fov / 2)) * camera.position.z;
      return { w: h * camera.aspect, h };
    };

    // ---------- Intro: drop in from above the header ----------
    const intro = { p: reduceMotion ? 1 : 0 };
    if (!reduceMotion) gsap.to(intro, { p: 1, duration: 2.4, delay: 0.3, ease: "elastic.out(1, 0.55)" });

    // ---------- Loop ----------
    const cur = { x: 0, y: 0, s: 1, front: 1 };
    let first = true;
    let lastScroll = window.scrollY;
    let spinVel = 0;
    let rotY = 0; // accumulated spin; blended toward a front-facing angle at "front" spots
    const clock = new THREE.Clock();

    const tick = () => {
      const t = clock.getElapsedTime();
      const scroll = window.scrollY;
      const target = sample(scroll);
      const { w, h } = viewSize();

      if (first) {
        cur.x = target.x; cur.y = target.y; cur.s = target.s; cur.front = target.front;
        first = false;
      }
      // Gentle easing → the stone glides behind the scroll instead of snapping to it
      const ease = SCROLL_SETTINGS.stoneFollow;
      cur.x += (target.x - cur.x) * ease;
      cur.y += (target.y - cur.y) * ease;
      cur.s += (target.s - cur.s) * ease;
      cur.front += (target.front - cur.front) * 0.04;

      // Scroll adds only a light extra spin (and none while facing front)
      spinVel += (scroll - lastScroll) * 0.00025 * (1 - cur.front);
      spinVel *= 0.9;
      lastScroll = scroll;

      const bob = reduceMotion ? 0 : Math.sin(t * 1.1) * 0.12;
      const dropOffset = (1 - intro.p) * (h * 0.75);

      root.position.set((cur.x * w) / 2, (cur.y * h) / 2 + bob + dropOffset, 0);
      const baseScale = Math.min(1.5, Math.max(0.95, h / 7.6));
      root.scale.setScalar(cur.s * baseScale * (0.6 + 0.4 * intro.p));

      const m = mouseProxy.current;
      rotY += (0.0045 + spinVel) * (1 - cur.front);
      const frontAngle = Math.round(rotY / (Math.PI * 2)) * Math.PI * 2;
      const sway = Math.sin(t * 0.9) * 0.18 * cur.front;
      spin.rotation.y = rotY + (frontAngle - rotY) * smooth(Math.min(1, cur.front)) + sway;
      spin.rotation.x += ((m.ny * 0.35 + Math.sin(t * 0.6) * 0.08) - spin.rotation.x) * 0.05;
      spin.rotation.z += ((-m.nx * 0.25 + Math.sin(t * 0.8) * 0.05) - spin.rotation.z) * 0.05;

      grains.rotation.y = t * 0.08;
      grainData.forEach((d, i) => {
        const a = d.a + t * d.sp;
        d.m.position.set(Math.cos(a) * d.r, d.y + Math.sin(t * 0.7 + i) * 0.15, Math.sin(a) * d.r * 0.6);
        d.m.rotation.x = t * d.sp * 2;
        d.m.rotation.y = t * d.sp * 3;
      });
      glow.material.opacity = 0.75 + Math.sin(t * 1.6) * 0.2;

      renderer.render(scene, camera);
    };
    gsap.ticker.add(tick);

    // ---------- Resize / layout changes ----------
    const onResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
      readAnchors();
    };
    window.addEventListener("resize", onResize);
    const ro = new ResizeObserver(() => readAnchors());
    ro.observe(document.body);
    // fonts/images can shift layout after load
    const late = window.setTimeout(readAnchors, 1200);

    return () => {
      gsap.ticker.remove(tick);
      window.removeEventListener("resize", onResize);
      window.clearTimeout(late);
      ro.disconnect();
      geo.dispose();
      grainGeo.dispose();
      speckle.dispose();
      stoneMat.dispose();
      grainMat.dispose();
      envTex.dispose();
      pmrem.dispose();
      renderer.dispose();
      mount.removeChild(renderer.domElement);
    };
  }, [mouseProxy]);

  return <div ref={mountRef} aria-hidden="true" className="pointer-events-none fixed inset-0 z-0" />;
}
