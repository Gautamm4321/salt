/** Faint vertical column lines behind the page (editorial grid feel). */
export default function GridLines() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 hidden md:block">
      <div className="mx-auto grid h-full max-w-[1320px] grid-cols-6 px-10">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className={`border-l border-line/70 ${i === 5 ? "border-r" : ""}`} />
        ))}
      </div>
    </div>
  );
}
