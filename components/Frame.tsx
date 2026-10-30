import type { ReactNode } from "react";

/**
 * One "frame" of the story: a full-screen moment holding a single idea.
 * align: "center" (default) for statements, "left" for longer text.
 */
export default function Frame({
  children,
  align = "center",
  className = "",
}: {
  children: ReactNode;
  align?: "center" | "left";
  className?: string;
}) {
  return (
    <section
      data-frame
      className={`flex min-h-svh items-center px-5 py-28 sm:px-10 ${align === "center" ? "justify-center text-center" : ""} ${className}`}
    >
      <div className={`w-full ${align === "center" ? "mx-auto max-w-[760px]" : "mx-auto max-w-[1200px]"}`}>{children}</div>
    </section>
  );
}
