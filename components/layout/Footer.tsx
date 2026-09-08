export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-gray-800 py-8 px-6 text-center text-gray-500 text-sm">
      © {year} Muhammad Ageng Zayem Wahid. Built with Next.js & Tailwind CSS.
    </footer>
  );
}
