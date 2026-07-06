import React from "react";
import type { Metadata } from "next";
import { Instrument_Sans } from "next/font/google";
import "./globals.css";

const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-instrument-sans",
});

export const metadata: Metadata = {
  title: "Aditya Pareek | Full-Stack Software Engineer",
  description:
    "Resume of Aditya Pareek - Full-Stack Software Engineer building production web applications across e-commerce, SaaS, and AI-driven products.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${instrumentSans.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
