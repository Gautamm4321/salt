import type { Metadata } from "next";
import "./globals.css";

// Fonts follow the SALT Brand Bible (Helvetica Neue + Times New Roman) — see globals.css.

export const metadata: Metadata = {
  title: "SALT | No Brand Stays Bland",
  description:
    "SALT is a CreaTech brand consulting and advertising studio that builds brands to grow businesses. No fluff. Real impact.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
