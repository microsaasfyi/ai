// Styles
import "@/styles/globals.css";

// Fonts
import { Inter } from "next/font/google";

// Types
import type { Metadata } from "next";

// Font
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "on road, so",
  description: ""
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
};
