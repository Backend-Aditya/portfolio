import React from "react";
import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import "./globals.css";

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
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
      <body className={`${geistMono.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
