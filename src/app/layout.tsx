import type { Metadata } from "next";
import { Geist, Geist_Mono, Outfit } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-luxury",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "NEXUS_MASTER | Cubelogs Super Admin",
  description: "Advanced command center for Cubelogs SaaS orchestration.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${outfit.variable} min-h-screen font-sans bg-slate-50`}
      >
        <div className="fixed inset-0 bg-[radial-gradient(at_top_right,rgba(37,99,235,0.05),transparent_50%)] -z-10" />
        <div className="fixed inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] -z-10 opacity-30" />
        {children}
      </body>
    </html>
  );
}
