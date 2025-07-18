import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "satuwaktu.",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}
