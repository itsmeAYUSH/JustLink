import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "JustLink • The Visual Bookmark Manager Built for Speed & Privacy",
  description:
    "Save URLs in one click, preserve rich OpenGraph metadata, search with web syntax, and protect private collections with 4-digit PIN locked vaults.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="min-h-screen bg-[#090a0d] text-[#f4f4f6] selection:bg-teal-500/20 selection:text-teal-200 antialiased">
        {children}
      </body>
    </html>
  );
}
