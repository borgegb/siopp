import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Siopp",
  description: "Kampanjepris på internett og TV fra Telenor. Bestill nå!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-[#fafafc]">
        <main className="w-full">{children}</main> {/* Ensure full width */}
        <Toaster />
      </body>
    </html>
  );
}
