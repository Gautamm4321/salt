/**
 * ============================================================
 *  SCROLL SETTINGS — change these numbers to tune the feel
 * ============================================================
 *
 * lerp            How quickly the page catches up to your scroll (0–1).
 *                 Lower = smoother / floatier, higher = snappier.
 *                 Good range: 0.04 (very silky) … 0.1 (quick).
 *
 * wheelMultiplier How far one mouse-wheel / trackpad flick moves the page.
 *                 Lower = slower scrolling. 1 = browser default distance.
 *
 * touchMultiplier Same as above, for phones / tablets.
 *
 * stoneFollow     How quickly the 3D stone follows the scroll (0–1).
 *                 Lower = the stone glides more lazily behind the page.
 *
 * anchorDuration  Seconds for the smooth jump when clicking a menu link.
 */
export const SCROLL_SETTINGS = {
  lerp: 0.055,
  wheelMultiplier: 0.75,
  touchMultiplier: 1.2,
  stoneFollow: 0.04,
  anchorDuration: 2,
};
