import React from "react";
import type { Metadata } from "next";
import { Instrument_Sans, Geist_Mono, Playfair_Display, PT_Serif } from "next/font/google";
import "./globals.css";

const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-instrument-sans",
});
const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});
const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});
const ptSerif = PT_Serif({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-pt-serif",
});

export const metadata: Metadata = {
  title: "Aditya Pareek | Laravel Developer",
  description:
    "Personal portfolio of Aditya Pareek - Laravel Developer at Axis Web Art building scalable web applications with PHP and Laravel.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${instrumentSans.variable} ${geistMono.variable} ${playfairDisplay.variable} ${ptSerif.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
