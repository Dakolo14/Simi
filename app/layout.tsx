import type { Metadata, Viewport } from "next";
import { Geist_Mono, Instrument_Serif } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument",
  subsets: ["latin"],
  weight: "400",
  style: ["italic", "normal"],
});

export const metadata: Metadata = {
  title: "Simeon Omamogho | Multidisciplinary Creative",
  description:
    "Simeon Omamogho is a multidisciplinary creative alchemist blending graphic design, motion, and digital art to craft immersive visual experiences.",
  generator: "v0.app",
  icons: {
    icon: [
      { url: "/images/favicon/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/images/favicon/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    shortcut: "/images/favicon/favicon.ico",
    apple: "/images/favicon/apple-touch-icon.png",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistMono.variable} ${instrumentSerif.variable} antialiased`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
