import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Muhammad Ageng Zayem Wahid | Backend & Cloud Developer Portfolio",
  description:
    "Portfolio of Muhammad Ageng Zayem Wahid: Backend & Cloud Developer (S1 Informatika IPK 3.91, Bangkit Cloud Computing Alumnus). Focused on high-performance RESTful APIs, Google Cloud Platform infrastructure, and scalable web systems.",
  keywords: [
    "Muhammad Ageng Zayem Wahid",
    "Backend Developer",
    "Cloud Engineer",
    "Software Engineer",
    "Google Cloud Platform",
    "Node.js",
    "Express.js",
    "Laravel",
    "MySQL",
    "Informatics Portfolio",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased dark">
      <body className="min-h-full flex flex-col bg-[#090a0f] text-zinc-100 selection:bg-orange-500/30 selection:text-orange-200">
        {children}
      </body>
    </html>
  );
}


