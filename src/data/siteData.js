/**
 * ============================================================
 * PUSAT DATA WEBSITE - 297 Transport Berkah Jaya Mitra Abadi
 * ============================================================
 * File ini adalah SATU-SATUNYA sumber data untuk seluruh website.
 * Untuk memperbarui konten cukup edit file ini saja.
 *
 * Panduan edit:
 *  - Teks biasa     : ganti nilai string langsung
 *  - Nomor WhatsApp : format tanpa tanda +, contoh: "6281234567890"
 *  - Icon           : nama icon dari lucide-react (https://lucide.dev/icons/)
 *  - Gambar         : path dari /public atau URL eksternal
 * ============================================================
 */

const siteData = {
  // ── INFORMASI PERUSAHAAN ────────────────────────────────────
  company: {
    name: "297 Transport Berkah Jaya Mitra Abadi",
    shortName: "297 Transport",
    tagline: "Liburan Seru Dimulai dari Sini",
    subTagline:
      "Sewa Hiace dan Bus Pariwisata terpercaya untuk perjalanan wisata, gathering, ziarah, dan acara spesial Anda. Armada terawat, pengemudi berpengalaman, harga terbaik.",
    logo: "/logo.jpeg",
    yearFounded: 2014,
  },

  // ── KONTAK ──────────────────────────────────────────────────
  contact: {
    address: "Jl. Terminal Raya No. 297, Kecamatan Cakung, Jakarta Timur 13910",
    phone: "+62 812-9700-2970",
    whatsapp: "6281297002970", // Tanpa + dan spasi
    email: "info@297transport.co.id",
    operationalHours: "Senin – Minggu, 06.00 – 22.00 WIB",
    mapEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.521260322283!2d106.8195613!3d-6.2087634!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMTInMzEuNiJTIDEwNsKwNDknMTAuNCJF!5e0!3m2!1sid!2sid!4v1620000000000!5m2!1sid!2sid",
  },

  // ── MEDIA SOSIAL ────────────────────────────────────────────
  socialMedia: {
    instagram: "https://instagram.com/297transport",
    facebook: "https://facebook.com/297transport",
    linkedin: "#",
    youtube: "#",
  },

  // ── ANGKA STATISTIK / PENCAPAIAN ────────────────────────────
  stats: [
    { id: 1, value: "10+", label: "Tahun Pengalaman", icon: "Award" },
    { id: 2, value: "5.000+", label: "Wisatawan Terlayani", icon: "Users" },
    { id: 3, value: "20+", label: "Unit Armada", icon: "Bus" },
    { id: 4, value: "100%", label: "Pelanggan Puas", icon: "ThumbsUp" },
  ],

  // ── TENTANG PERUSAHAAN ──────────────────────────────────────
  about: {
    title: "Tentang Kami",
    headline: "Spesialis Sewa Kendaraan Pariwisata",
    paragraphs: [
      "297 Transport Berkah Jaya Mitra Abadi adalah penyedia jasa sewa kendaraan pariwisata yang berpengalaman sejak 2014. Kami fokus melayani kebutuhan transportasi wisata untuk individu, keluarga, komunitas, perusahaan, dan instansi.",
      "Armada kami terdiri dari Hiace Pariwisata dan Bus Pariwisata dalam berbagai kapasitas — semua terawat, ber-AC, dan siap membawa Anda ke destinasi impian dengan aman dan nyaman.",
      "Kami percaya bahwa perjalanan yang menyenangkan dimulai dari kendaraan yang tepat dan pengemudi yang berpengalaman. Itulah mengapa setiap unit armada kami dirawat secara berkala dan setiap pengemudi kami terlatih profesional.",
    ],
    image:
      "https://placehold.co/600x450/1F2937/F59E0B?text=Armada+Pariwisata+297",
  },

  // ── KEUNGGULAN PERUSAHAAN ────────────────────────────────────
  advantages: [
    {
      id: 1,
      title: "Armada Pariwisata Terawat",
      description:
        "Seluruh Hiace dan Bus Pariwisata kami dirawat rutin, bersih, dan dilengkapi AC dingin, audio system, dan fasilitas nyaman.",
      icon: "Bus",
    },
    {
      id: 2,
      title: "Pengemudi Profesional & Ramah",
      description:
        "Pengemudi kami berpengalaman, hafal rute wisata, memiliki SIM B1/B2 aktif, dan siap menemani perjalanan Anda dengan aman.",
      icon: "ShieldCheck",
    },
    {
      id: 3,
      title: "Harga Bersaing & Transparan",
      description:
        "Tarif kompetitif tanpa biaya tersembunyi. Dapatkan penawaran terbaik dengan menghubungi tim kami langsung via WhatsApp.",
      icon: "BadgeDollarSign",
    },
    {
      id: 4,
      title: "Tepat Waktu & Terpercaya",
      description:
        "Kami menghargai waktu Anda. Kendaraan selalu tiba sesuai jadwal sehingga perjalanan wisata Anda berjalan sesuai rencana.",
      icon: "Clock",
    },
    {
      id: 5,
      title: "Layanan 7 Hari Nonstop",
      description:
        "Kami siap melayani pemesanan dan pertanyaan setiap hari termasuk hari libur. Respon cepat via WhatsApp.",
      icon: "Headphones",
    },
    {
      id: 6,
      title: "Berpengalaman 10+ Tahun",
      description:
        "Dengan lebih dari satu dekade pengalaman di industri pariwisata, kami memahami kebutuhan setiap pelanggan dengan baik.",
      icon: "Award",
    },
  ],

  // ── LAYANAN ──────────────────────────────────────────────────
  services: [
    {
      id: 1,
      title: "Sewa Hiace Pariwisata",
      description:
        "Hiace premium ber-AC untuk group kecil 8–14 orang. Cocok untuk wisata keluarga, city tour, perjalanan semi-privat, dan transfer antar kota.",
      icon: "Car",
    },
    {
      id: 2,
      title: "Sewa Bus Pariwisata",
      description:
        "Bus pariwisata kapasitas 27–59 kursi untuk rombongan besar. Dilengkapi AC, audio/video, dan bagasi luas. Ideal untuk gathering, piknik, dan study tour.",
      icon: "Bus",
    },
    {
      id: 3,
      title: "Wisata Group & Study Tour",
      description:
        "Paket transportasi wisata group untuk sekolah, kampus, instansi, dan komunitas ke berbagai destinasi: Bali, Yogya, Bromo, Bandung, dan banyak lagi.",
      icon: "MapPinned",
    },
    {
      id: 4,
      title: "Gathering & Outing Perusahaan",
      description:
        "Solusi transportasi untuk gathering karyawan, team building, dan outing perusahaan. Kami siap menangani armada multipel untuk group besar sekaligus.",
      icon: "Briefcase",
    },
    {
      id: 5,
      title: "Perjalanan Ziarah & Religi",
      description:
        "Kendaraan nyaman untuk perjalanan ziarah wali, pesantren, dan destinasi religi lainnya. Pengemudi kami paham rute dan ramah untuk semua usia.",
      icon: "Heart",
    },
    {
      id: 6,
      title: "Antar-Jemput Bandara & Event",
      description:
        "Layanan shuttle dan antar-jemput untuk event pernikahan, bandara, stasiun, dan acara formal lainnya dengan kendaraan bersih dan tepat waktu.",
      icon: "PlaneTakeoff",
    },
  ],

  // ── ARMADA ───────────────────────────────────────────────────
  // Fokus utama website — tampilkan detail lengkap setiap unit
  fleet: [
    {
      id: 1,
      name: "Hiace Premio",
      type: "Hiace Pariwisata",
      capacity: "14 Kursi",
      transmission: "Otomatis",
      features: [
        "Full AC",
        "Kursi Captain",
        "Audio System",
        "USB Charger",
        "Kaca Film",
      ],
      description:
        "Hiace Premio generasi terbaru dengan interior premium. Kapasitas 14 penumpang dengan kursi captain yang lega dan nyaman untuk perjalanan wisata eksklusif.",
      priceInfo: "Harga mulai dari Rp 850.000/hari",
      badge: "Terpopuler",
      badgeColor: "amber",
      image: "https://placehold.co/480x300/1F2937/F59E0B?text=Hiace+Premio",
    },
    {
      id: 2,
      name: "Hiace Commuter",
      type: "Hiace Pariwisata",
      capacity: "14 Kursi",
      transmission: "Manual",
      features: ["Full AC", "Kursi Tegak", "Audio System", "Bagasi Luas"],
      description:
        "Hiace Commuter andalan untuk perjalanan grup kecil yang ekonomis. Kabin lega, AC dingin, dan pengemudi berpengalaman siap menemani liburan Anda.",
      priceInfo: "Harga mulai dari Rp 700.000/hari",
      badge: "Ekonomis",
      badgeColor: "green",
      image: "https://placehold.co/480x300/1F2937/F59E0B?text=Hiace+Commuter",
    },
    {
      id: 3,
      name: "Isuzu Elf Long",
      type: "Minibus Pariwisata",
      capacity: "16 Kursi",
      transmission: "Manual",
      features: ["Full AC", "Kursi Nyaman", "Audio System", "Bagasi Luas"],
      description:
        "Elf Long dengan kapasitas 16 penumpang, pilihan tepat untuk grup sedang yang ingin perjalanan lebih fleksibel dan terjangkau.",
      priceInfo: "Harga mulai dari Rp 650.000/hari",
      badge: null,
      badgeColor: null,
      image: "https://placehold.co/480x300/1F2937/F59E0B?text=Isuzu+Elf+Long",
    },
    {
      id: 4,
      name: "Bus Medium 27 Seat",
      type: "Bus Pariwisata",
      capacity: "27 Kursi",
      transmission: "Manual",
      features: [
        "Full AC",
        "Reclining Seat",
        "Audio/Video",
        "Mikrofon",
        "Bagasi Bawah",
      ],
      description:
        "Bus medium ideal untuk rombongan 20–27 orang. Dilengkapi layar hiburan, sound system, dan bagasi bawah yang lapang untuk koper dan perlengkapan wisata.",
      priceInfo: "Harga mulai dari Rp 1.500.000/hari",
      badge: null,
      badgeColor: null,
      image: "https://placehold.co/480x300/1F2937/F59E0B?text=Bus+Medium+27",
    },
    {
      id: 5,
      name: "Bus Besar 40 Seat",
      type: "Bus Pariwisata",
      capacity: "40 Kursi",
      transmission: "Otomatis",
      features: [
        "Full AC",
        "Reclining Seat",
        "Audio/Video",
        "Mikrofon",
        "Toilet",
        "Bagasi Bawah",
      ],
      description:
        "Bus besar 40 kursi dengan fasilitas lengkap termasuk toilet onboard. Cocok untuk gathering besar, study tour, dan perjalanan wisata jarak jauh.",
      priceInfo: "Harga mulai dari Rp 2.200.000/hari",
      badge: "Paling Lengkap",
      badgeColor: "blue",
      image: "https://placehold.co/480x300/1F2937/F59E0B?text=Bus+Besar+40",
    },
    {
      id: 6,
      name: "Bus Besar 59 Seat",
      type: "Bus Pariwisata",
      capacity: "59 Kursi",
      transmission: "Otomatis",
      features: [
        "Full AC",
        "Reclining Seat",
        "Audio/Video",
        "Mikrofon",
        "Toilet",
        "Bagasi Bawah",
        "Asuransi",
      ],
      description:
        "Armada terbesar kami — bus 59 kursi super eksekutif untuk rombongan besar. Fasilitas premium, ruang kabin ekstra lega, dan pengemudi berpengalaman.",
      priceInfo: "Harga mulai dari Rp 3.000.000/hari",
      badge: "Super Eksekutif",
      badgeColor: "amber",
      image:
        "https://placehold.co/480x300/1F2937/F59E0B?text=Bus+59+Super+Exec",
    },
  ],

  // ── DESTINASI WISATA POPULER ─────────────────────────────────
  // Destinasi yang sering dilayani — untuk menginspirasi calon pelanggan
  destinations: [
    {
      id: 1,
      name: "Yogyakarta",
      highlight: "Keraton, Borobudur, Prambanan, Malioboro",
      duration: "2–3 Hari",
      image: "https://placehold.co/400x260/374151/F59E0B?text=Yogyakarta",
    },
    {
      id: 2,
      name: "Bali",
      highlight: "Tanah Lot, Ubud, Seminyak, Bedugul",
      duration: "3–5 Hari",
      image: "https://placehold.co/400x260/374151/F59E0B?text=Bali",
    },
    {
      id: 3,
      name: "Bromo",
      highlight: "Sunrise Bromo, Savana, Pasir Berbisik",
      duration: "2 Hari",
      image: "https://placehold.co/400x260/374151/F59E0B?text=Bromo",
    },
    {
      id: 4,
      name: "Bandung",
      highlight: "Kawah Putih, Lembang, Factory Outlet",
      duration: "1–2 Hari",
      image: "https://placehold.co/400x260/374151/F59E0B?text=Bandung",
    },
    {
      id: 5,
      name: "Malang & Batu",
      highlight: "Coban Rondo, Jatim Park, Gunung Bromo",
      duration: "2–3 Hari",
      image: "https://placehold.co/400x260/374151/F59E0B?text=Malang+Batu",
    },
    {
      id: 6,
      name: "Lombok",
      highlight: "Gili Trawangan, Pantai Kuta, Rinjani",
      duration: "3–4 Hari",
      image: "https://placehold.co/400x260/374151/F59E0B?text=Lombok",
    },
  ],

  // ── TESTIMONI PELANGGAN ──────────────────────────────────────
  testimonials: [
    {
      id: 1,
      name: "Ibu Ratna Sari",
      company: "Wisata Keluarga ke Yogyakarta",
      position: "Pelanggan Setia",
      message:
        "Kami sewa Hiace Premio untuk liburan keluarga 12 orang ke Jogja. Mobilnya bersih banget, AC super dingin, dan Pak Sopirnya sabar dan tahu banyak spot foto bagus. Recommended banget untuk wisata keluarga!",
      rating: 5,
      photo: "https://placehold.co/80x80/F59E0B/1F2937?text=RS",
    },
    {
      id: 2,
      name: "Bapak Doni Firmansyah",
      company: "Gathering Karyawan PT Indofood",
      position: "Manager HR",
      message:
        "Kami booking 4 unit Bus 40 Seat untuk gathering 160 karyawan ke Bandung. Semua bus datang tepat waktu, kondisi prima. Tim 297 Transport sangat koordinatif dan profesional. Pasti kami pakai lagi tahun depan!",
      rating: 5,
      photo: "https://placehold.co/80x80/F59E0B/1F2937?text=DF",
    },
    {
      id: 3,
      name: "Ustaz Ahmad Fauzi",
      company: "Majelis Taklim Nurul Hikmah",
      position: "Ketua Rombongan",
      message:
        "Sudah 3 kali pakai 297 Transport untuk perjalanan ziarah wali bersama 45 jamaah. Busnya nyaman, pengemudi sopan dan tahu jalur, tidak pernah ada masalah. Insya Allah akan terus kami percayakan.",
      rating: 5,
      photo: "https://placehold.co/80x80/F59E0B/1F2937?text=AF",
    },
    {
      id: 4,
      name: "Bu Dewi Kurniawati",
      company: "Study Tour SMAN 5 Jakarta",
      position: "Guru Pembimbing",
      message:
        "Study tour ke Bromo dengan 3 bus untuk 120 siswa. Semua berjalan lancar, bus tepat waktu jemput di sekolah. Siswa-siswi senang sekali. Terima kasih 297 Transport atas pelayanan yang luar biasa!",
      rating: 5,
      photo: "https://placehold.co/80x80/F59E0B/1F2937?text=DK",
    },
  ],

  // ── CTA ──────────────────────────────────────────────────────
  cta: {
    headline: "Rencanakan Wisata Anda Sekarang",
    subheadline:
      "Konsultasikan kebutuhan armada wisata Anda — kami bantu pilih kendaraan yang tepat, sesuai jumlah rombongan dan budget Anda. Gratis konsultasi!",
    buttonText: "Konsultasi Gratis via WhatsApp",
    whatsappMessage:
      "Halo 297 Transport, saya ingin konsultasi sewa kendaraan pariwisata. Mohon informasi armada dan harganya.",
  },

  // ── NAVIGASI ─────────────────────────────────────────────────
  navigation: [
    { label: "Beranda", href: "/", icon: "Home" },
    { label: "Tentang", href: "/tentang", icon: "Info" },
    { label: "Layanan", href: "/layanan", icon: "Briefcase" },
    { label: "Armada", href: "/armada", icon: "Bus" },
    { label: "Testimoni", href: "/testimoni", icon: "Star" },
    { label: "Kontak", href: "/kontak", icon: "Phone" },
  ],

  // ── FORM KONTAK ───────────────────────────────────────────────
  contactForm: {
    action: "whatsapp", // "whatsapp" atau "mailto"
    emailSubject: "Pertanyaan Sewa Kendaraan Pariwisata 297 Transport",
  },
};

export default siteData;
