import type { Metadata } from "next";
import "./globals.css";

// Fonts follow the SALT Brand Bible (Times New Roman + Helvetica Neue) — see globals.css.

export const metadata: Metadata = {
  title: "SALT | No Brand Stays Bland — CreaTech Brand Consulting & Advertising",
  description:
    "SALT is a CreaTech brand consulting and advertising studio that builds brands to grow businesses. We find the human truth already inside your brand — and make it matter.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Marks JS as available so the gentle reveals can start hidden */}
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
