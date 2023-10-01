import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Undangan Pernikahan Online - Andaring",
  description:
    "Buat undangan pernikahan digital Anda yang elegan, modern, & ramah lingkungan. Ciptakan momen kebahagian Anda bersama Andaring. Hemat kertas, hemat uang & tanpa repot!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
