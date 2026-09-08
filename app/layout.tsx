import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Muhammad Ageng Zayem Wahid — Portfolio",
  description:
    "Portfolio of Muhammad Ageng Zayem Wahid, an Informatics graduate from Ahmad Dahlan University specializing in backend development, cloud computing, and web application development.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
