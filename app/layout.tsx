import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NextJS blogs",
  description: "NextJS blogs website by Ajay Shukla",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className="flex gap-2 m-1">
          <h1 className="text-cyan-200">myNav</h1>
          <Link href={"/"} >Home</Link>
          <Link href={"/about"} >About</Link>
        </nav>
        {children}</body>
    </html>
  );
}
