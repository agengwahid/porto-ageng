import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Muhammad Ageng Zayem Wahid | Backend & Cloud Developer",
  description:
    "Portfolio of Muhammad Ageng Zayem Wahid, an Informatics graduate (GPA 3.91/4.00) from Universitas Ahmad Dahlan and Bangkit Cloud Computing alumnus specializing in backend APIs and cloud systems.",
  keywords: [
    "Muhammad Ageng Zayem Wahid",
    "Backend Developer",
    "Cloud Computing",
    "Google Cloud Platform",
    "Laravel",
    "Node.js",
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
      <body className="min-h-full flex flex-col bg-[#090b10] text-zinc-100 selection:bg-sky-500/30 selection:text-sky-200">
        {children}
      </body>
    </html>
  );
}

