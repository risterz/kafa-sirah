import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800", "900"], // Extra bold weights for cartoon style
  variable: "--font-nunito",
});

export const metadata: Metadata = {
  title: "Sirah KAFA - Dunia Sirah",
  description: "Belajar Sirah Nabi dengan cara yang menyeronokkan!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ms">
      <body className={`${nunito.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
