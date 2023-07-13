import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import NavBar from "@/components/NavBar/page";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Next JS App Init",
  description: "Next JS Application Init"
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
