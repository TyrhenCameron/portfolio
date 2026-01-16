import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

import Menu from "@/components/menu/Menu";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Profile Website",
  description: "by Tyrhen from watching Codegrid",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Menu />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
