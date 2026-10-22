import type { Metadata } from "next";
import { Syne, Instrument_Serif, Manrope } from "next/font/google";
import "./globals.css";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

const instrument = Instrument_Serif({
  variable: "--font-instrument",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SALT | No Brand Stays Bland",
  description:
    "SALT is a CreaTech brand consulting and advertising studio that builds brands to grow businesses. No fluff. Real impact.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${syne.variable} ${instrument.variable} ${manrope.variable} antialiased`}
    >
      <body>{children}</body>
    </html>
  );
}
