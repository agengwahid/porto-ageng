import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Muhammad Ageng Zayem Wahid | Shinobi Developer Portfolio & Jonin Architect",
  description:
    "Interactive portfolio of Muhammad Ageng Zayem Wahid: Backend & Cloud Developer (Informatics GPA 3.91, Bangkit Cloud Computing alumnus). Architecting resilient RESTful APIs, GCP infrastructure, and cyber-shinobi web systems.",
  keywords: [
    "Muhammad Ageng Zayem Wahid",
    "Shinobi Developer Portfolio",
    "Backend Developer",
    "Cloud Engineer",
    "Google Cloud Platform",
    "Node.js",
    "Laravel",
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


