# Muhammad Ageng Zayem Wahid | Backend & Cloud Developer Portfolio

[![Next.js](https://img.shields.io/badge/Next.js-16.2.6-black?style=flat&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.2.4-20232A?style=flat&logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?style=flat&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38B2AC?style=flat&logo=tailwind-css)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-orange.svg)](LICENSE)

Website portofolio interaktif personal modern dan profesional yang menyajikan rekam jejak teknis, arsitektur backend, implementasi cloud computing di Google Cloud Platform, serta proyek perangkat lunak dari **Muhammad Ageng Zayem Wahid, S.Kom.**

* **Live Platform:** [porto-ageng.vercel.app](https://porto-ageng.vercel.app)
* **GitHub Profile:** [github.com/agengwahid](https://github.com/agengwahid)
* **LinkedIn:** [linkedin.com/in/ageng14](https://linkedin.com/in/ageng14)
* **Direct Contact:** [agngwahid123@gmail.com](mailto:agngwahid123@gmail.com)

---

## Ringkasan Rekam Jejak

* **Lulusan S1 Informatika (Akselerasi 3.5 Tahun):** Universitas Ahmad Dahlan (UAD) dengan IPK **3.91 / 4.00** (Predikat Cum Laude).
* **Alumnus Bangkit Academy 2024:** Cohort Cloud Computing yang diselenggarakan oleh Google, GoTo, dan Traveloka.
* **Pengalaman Asisten Laboratorium Komputer (2 Tahun):** Membimbing lebih dari 100 mahasiswa strata satu (S1) pada mata kuliah Logika Pemrograman, Algoritma Pemrograman, dan Sistem Operasi.
* **Fokus Rekayasa Teknis:** Perancangan RESTful API performa tinggi (Node.js, Express, Laravel), arsitektur serverless di Google Cloud Platform (Cloud Run, Firestore, Compute Engine), serta perancangan skema database teroptimasi.

---

## Fitur Utama & Antarmuka Sistem

Portofolio ini mengimplementasikan antarmuka modern bertema dark mode presisi (*Obsidian Ink* `#070709` dan aksen *Warm Ember Orange*) dengan standar performa web teroptimasi:

1. **Latar Animasi Partikel & Ambient Ember (HTML5 Canvas)**
   * Efek pencahayaan dinamis dan partikel bara api (*embers*) yang bergerak asinkron tanpa membebani GPU/CPU.
2. **Indikator Navigasi Telemetri Scroll Ganda**
   * Rel navigasi samping kiri dan kanan yang merekam progres gulir dokumen secara presisi.
3. **Hero & Status Ketersediaan Kerja (Availability Telemetry)**
   * Lencana status ketersediaan kerja real-time (*Available for Work: Remote / On-Site*), ringkasan metrik akademik terverifikasi, dan tautan unduh Curriculum Vitae (PDF).
4. **Matriks Keahlian Teknis Berdasarkan 4 Pilar Arsitektur**
   * **Backend Architecture & APIs:** Node.js, Express.js, PHP, Laravel, RESTful API, MVC Pattern, Async/Await.
   * **Cloud Infrastructure & Serverless:** Google Cloud Platform, Cloud Run, Compute Engine, Cloud Storage, VPC, Linux Shell.
   * **Database Architecture & Data Persistence:** Skema relasional MySQL terindeks, Firestore NoSQL, integritas transaksi ACID.
   * **DevOps, Tooling & Kepemimpinan Teknis:** Git & GitHub, Postman, alur CI/CD, asistensi praktikum lab komputer.
5. **Katalog Proyek & Implementasi Sistem Nyata**
   * Dokumentasi kasus nyata mencakup peran arsitektur, stack teknologi, solusi masalah teknis, serta tautan ke repositori kode sumber.
6. **Arsip Sertifikasi & Verifikasi Kredensial Resmi**
   * Filter kategori (Program Bangkit, Dicoding, Kampus UAD, Organisasi HMIF) dengan modal pratinjau gambar beresolusi tinggi.
7. **Formulir Kontak Profesional Langsung**
   * Formulir rekrutmen dengan generator subject dan body email otomatis langsung ke klien email pengguna, dilengkapi tombol salin email sekali-klik.
8. **Standar Aksesibilitas & Responsif Mobile**
   * Target sentuh minimal 44-48px untuk navigasi mobile.
   * Kontras teks tinggi yang memenuhi standar aksesibilitas WCAG.
   * Penanganan zoom aman pada iOS Safari (`text-base` pada kolom input formulir).

---

## Proyek Pilihan (Featured Projects)

| Kategori | Proyek | Peran | Tech Stack | Ringkasan Sistem |
| :--- | :--- | :--- | :--- | :--- |
| **CAPSTONE · CLOUD** | **DermaScan** | Backend & Cloud Engineer | Node.js, Express.js, Google Cloud Run, Firestore | Endpoint API perantara aplikasi mobile dengan model inferensi machine learning deteksi penyakit kulit di GCP. |
| **PRODUCTION** | **Student Grade Management** | Fullstack Web Developer | Laravel, PHP, MySQL, Tailwind CSS | Sistem penilaian akademik SMK Negeri 1 Lebong dengan autentikasi berbasis peran (Role-Based Access Control). |
| **CLIENT PROJECT** | **Kost Panjie Portal** | Fullstack Web Developer | PHP, MySQL, JavaScript, CSS | Platform pencatatan sewa kamar, kontrak penghuni, dan pembukuan keuangan bulanan terintegrasi. |
| **PERSONAL PROJECT** | **Developer Portfolio** | Frontend & Web Architect | Next.js 16, TypeScript, Tailwind CSS v4 | Website portofolio interaktif berkecepatan tinggi dengan telemetri scroll ganda dan arsitektur komponen modular. |

---

## Tech Stack & Dependensi

* **Frontend Framework:** Next.js 16.2.6 (App Router)
* **Library UI:** React 19.2.4, React DOM 19.2.4
* **Bahasa:** TypeScript 5.x
* **Styling & CSS:** Tailwind CSS v4, Modern PostCSS, Vanilla CSS Canvas animations
* **Linter & Code Quality:** ESLint 9, Next.js ESLint Configuration

---

## Struktur Direktori

```text
porto-ageng/
├── app/
│   ├── favicon.ico
│   ├── globals.css              # Variabel CSS tema Obsidian, scrollbar kustom, utilitas
│   ├── layout.tsx               # Root layout, metadata SEO, konfigurasi viewport
│   └── page.tsx                 # Halaman utama merangkum seluruh seksi portofolio
├── components/
│   ├── About.tsx                # Kronologi pendidikan, asistensi lab, dan organisasi
│   ├── Certificates.tsx         # Tab sertifikasi, filter kategori, dan modal dokumen
│   ├── Contact.tsx              # Formulir kontak terintegrasi dan salin alamat email
│   ├── KuramaBackground.tsx     # Kanvas HTML5 animasi pencahayaan dinamis dan partikel
│   ├── Projects.tsx             # Kartu proyek dengan dokumentasi arsitektur dan link GitHub
│   ├── ScrollKunai.tsx          # Tombol floating kembali ke atas (Back to Top)
│   ├── SideNinjaScrollRails.tsx # Rel telemetri scroll ganda
│   ├── Skills.tsx               # Grid keahlian teknis berdasarkan 4 pilar arsitektur
│   ├── layout/
│   │   ├── Footer.tsx           # Footer halaman, hak cipta, dan navigasi pintas
│   │   └── Navbar.tsx           # Navigasi utama dengan status indikator ketersediaan
│   └── sections/
│       └── Hero.tsx             # Bagian hero utama dengan foto, metrik akademik, dan CTA
├── data/
│   ├── certificates.ts          # Dataset riwayat sertifikasi resmi
│   └── projects.ts              # Dataset detail studi kasus proyek
├── public/
│   ├── certificates/            # Berkas pindaian sertifikat fisik dan digital
│   ├── projects/                # Visual representasi proyek dan infografis sistem
│   ├── ageng.jpg                # Foto profil utama
│   └── cv.pdf                   # Dokumen Curriculum Vitae resmi
├── package.json
├── tsconfig.json
└── README.md
```

---

## Panduan Instalasi Lokal

### 1. Prasyarat Sistem
* [Node.js](https://nodejs.org/) versi 20.x atau lebih baru
* Package manager `npm` (atau `pnpm` / `yarn` / `bun`)

### 2. Kloning Repositori
```bash
git clone https://github.com/agengwahid/porto-ageng.git
cd porto-ageng
```

### 3. Pasang Dependensi
```bash
npm install
```

### 4. Jalankan Server Pengembangan
```bash
npm run dev
```

Buka peramban di [http://localhost:3000](http://localhost:3000) untuk melihat situs portofolio.

### 5. Kompilasi Produksi (Production Build)
Untuk memverifikasi keabsahan build sebelum deployment:
```bash
npm run build
npm run start
```

---

## Kontak & Profil Profesional

* **Nama:** Muhammad Ageng Zayem Wahid, S.Kom.
* **Email:** [agngwahid123@gmail.com](mailto:agngwahid123@gmail.com)
* **GitHub:** [https://github.com/agengwahid](https://github.com/agengwahid)
* **LinkedIn:** [https://linkedin.com/in/ageng14](https://linkedin.com/in/ageng14)
* **Website:** [https://porto-ageng.vercel.app](https://porto-ageng.vercel.app)
