/**
 * ============================================================
 * PUSAT DATA WEBSITE - 297 Transport Berkah Jaya Mitra Abadi
 * ============================================================
 * File ini adalah SATU-SATUNYA sumber data untuk seluruh website.
 * Untuk memperbarui konten (teks, nomor kontak, rute, dll),
 * cukup edit file ini saja. Tidak perlu menyentuh file komponen manapun.
 *
 * Panduan edit:
 *  - Teks biasa     : ganti nilai string langsung
 *  - Nomor WhatsApp : format tanpa tanda +, contoh: "6281234567890"
 *  - Icon           : nama icon dari lucide-react (https://lucide.dev/icons/)
 *  - Gambar         : path relatif dari folder /public, atau URL eksternal
 * ============================================================
 */

const siteData = {
  // ── INFORMASI PERUSAHAAN ────────────────────────────────────
  company: {
    name: "297 Transport Berkah Jaya Mitra Abadi", // Nama lengkap perusahaan
    shortName: "297 Transport", // Nama singkat (navbar/footer)
    tagline: "Perjalanan Nyaman, Harga Terjangkau", // Tagline utama di Hero
    subTagline:
      "Agen travel bus terpercaya untuk perjalanan antar kota, antar provinsi, dan wisata group. Armada AC modern, pengemudi berpengalaman, dan layanan 24 jam siap mengantar Anda ke tujuan.",
    logo: "/logo.jpeg", // Path logo dari folder /public
    yearFounded: 2014, // Tahun berdiri perusahaan
  },

  // ── KONTAK ──────────────────────────────────────────────────
  contact: {
    address: "Jl. Terminal Raya No. 297, Kecamatan Cakung, Jakarta Timur 13910",
    phone: "+62 812-9700-2970", // Nomor telepon yang ditampilkan
    whatsapp: "6281297002970", // Nomor WhatsApp (tanpa + dan spasi) untuk link wa.me
    email: "info@297transport.co.id",
    operationalHours: "Senin – Minggu, 06.00 – 22.00 WIB",
    // Untuk embed Google Maps: buka maps.google.com → bagikan → Sematkan peta → salin URL src iframe
    mapEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.521260322283!2d106.8195613!3d-6.2087634!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMTInMzEuNiJTIDEwNsKwNDknMTAuNCJF!5e0!3m2!1sid!2sid!4v1620000000000!5m2!1sid!2sid",
  },

  // ── MEDIA SOSIAL ────────────────────────────────────────────
  socialMedia: {
    instagram: "https://instagram.com/297transport", // Ganti dengan URL Instagram asli
    facebook: "https://facebook.com/297transport", // Ganti dengan URL Facebook asli
    linkedin: "#", // Ganti dengan URL LinkedIn asli (atau hapus)
    youtube: "#", // Ganti dengan URL YouTube asli (atau hapus)
  },

  // ── ANGKA STATISTIK / PENCAPAIAN ────────────────────────────
  stats: [
    { id: 1, value: "10+", label: "Tahun Pengalaman", icon: "Award" },
    { id: 2, value: "50.000+", label: "Penumpang Terlayani", icon: "Users" },
    { id: 3, value: "20+", label: "Armada Bus & Hiace", icon: "Bus" },
    { id: 4, value: "30+", label: "Rute Perjalanan", icon: "MapPin" },
  ],

  // ── TENTANG PERUSAHAAN ──────────────────────────────────────
  about: {
    title: "Tentang Kami",
    headline: "Agen Travel Bus Pilihan Keluarga Indonesia",
    paragraphs: [
      "297 Transport Berkah Jaya Mitra Abadi berdiri sejak 2014 sebagai agen travel bus yang mengutamakan kenyamanan, keamanan, dan ketepatan waktu bagi setiap penumpang.",
      "Kami melayani berbagai kebutuhan perjalanan: tiket bus reguler antar kota antar provinsi (AKAP), carter/sewa bus untuk rombongan, hingga paket wisata group ke berbagai destinasi populer di Indonesia.",
      "Dengan armada modern ber-AC, pengemudi profesional bersertifikat, dan layanan pelanggan yang responsif 7 hari seminggu, kami berkomitmen menjadikan setiap perjalanan Anda menyenangkan.",
    ],
    image: "https://placehold.co/600x450/1F2937/F59E0B?text=297+Travel+Bus",
  },

  // ── KEUNGGULAN PERUSAHAAN ────────────────────────────────────
  advantages: [
    {
      id: 1,
      title: "Armada Ber-AC & Nyaman",
      description:
        "Seluruh bus dan hiace kami dilengkapi AC, kursi reclining, dan hiburan dalam perjalanan untuk kenyamanan maksimal.",
      icon: "Wind",
    },
    {
      id: 2,
      title: "Pengemudi Bersertifikat",
      description:
        "Semua pengemudi kami memiliki SIM B1/B2 aktif, rekam jejak bersih, dan terlatih standar keselamatan penumpang.",
      icon: "ShieldCheck",
    },
    {
      id: 3,
      title: "Harga Transparan",
      description:
        "Tidak ada biaya tersembunyi. Harga yang kami berikan sudah termasuk asuransi perjalanan dan fasilitas standar.",
      icon: "BadgeDollarSign",
    },
    {
      id: 4,
      title: "Berangkat Tepat Waktu",
      description:
        "Kami menjaga jadwal keberangkatan dengan disiplin. Penumpang tidak perlu khawatir tertinggal atau terlambat sampai.",
      icon: "Clock",
    },
    {
      id: 5,
      title: "Layanan 7 Hari Seminggu",
      description:
        "Tim kami siap melayani pemesanan dan pertanyaan Anda setiap hari, termasuk hari libur nasional.",
      icon: "Headphones",
    },
    {
      id: 6,
      title: "Pemesanan Mudah via WA",
      description:
        "Pesan tiket atau carter bus cukup via WhatsApp, tanpa aplikasi tambahan. Konfirmasi cepat dan praktis.",
      icon: "MessageCircle",
    },
  ],

  // ── LAYANAN ──────────────────────────────────────────────────
  services: [
    {
      id: 1,
      title: "Tiket Bus Reguler AKAP",
      description:
        "Tersedia tiket bus antar kota antar provinsi (AKAP) dengan berbagai pilihan kelas: ekonomi, bisnis, dan eksekutif. Berangkat setiap hari.",
      icon: "TicketCheck",
    },
    {
      id: 2,
      title: "Carter / Sewa Bus Rombongan",
      description:
        "Sewa bus full-day atau point-to-point untuk perjalanan rombongan: reuni, gathering kantor, piknik sekolah, ziarah, dan acara keluarga.",
      icon: "Users",
    },
    {
      id: 3,
      title: "Paket Wisata Group",
      description:
        "Paket wisata all-inclusive untuk destinasi populer: Bali, Yogyakarta, Bromo, Bandung, dan banyak lagi. Termasuk transport, hotel, dan pemandu.",
      icon: "MapPinned",
    },
    {
      id: 4,
      title: "Antar-Jemput Bandara/Stasiun",
      description:
        "Layanan shuttle door-to-door dari/ke bandara dan stasiun kereta api. Cocok untuk perjalanan bisnis maupun keluarga.",
      icon: "PlaneTakeoff",
    },
    {
      id: 5,
      title: "Sewa Hiace / Elf",
      description:
        "Kendaraan minibus Hiace dan Elf tersedia untuk group kecil (7–15 orang). Ideal untuk perjalanan singkat antar kota dengan fleksibilitas tinggi.",
      icon: "Car",
    },
    {
      id: 6,
      title: "Perjalanan Ibadah & Ziarah",
      description:
        "Paket perjalanan ibadah ke berbagai tujuan religi: Masjid-masjid bersejarah, pesantren, hingga perjalanan Umroh perdana dari Jakarta.",
      icon: "Heart",
    },
  ],

  // ── RUTE POPULER (menggantikan 'Armada') ────────────────────
  // Setiap item mewakili satu rute/trayek unggulan
  routes: [
    {
      id: 1,
      from: "Jakarta",
      to: "Yogyakarta",
      duration: "~8 Jam",
      departureTime: "18.00, 19.00, 20.00 WIB",
      price: "Mulai Rp 180.000",
      busClass: "Ekonomi AC / Bisnis / Eksekutif",
      image:
        "https://placehold.co/400x240/374151/F59E0B?text=Jakarta+%E2%86%92+Yogyakarta",
    },
    {
      id: 2,
      from: "Jakarta",
      to: "Surabaya",
      duration: "~12 Jam",
      departureTime: "17.00, 18.00, 19.00, 20.00 WIB",
      price: "Mulai Rp 220.000",
      busClass: "Bisnis / Eksekutif / Super Eksekutif",
      image:
        "https://placehold.co/400x240/374151/F59E0B?text=Jakarta+%E2%86%92+Surabaya",
    },
    {
      id: 3,
      from: "Jakarta",
      to: "Bandung",
      duration: "~3 Jam",
      departureTime: "07.00 – 22.00 (setiap jam)",
      price: "Mulai Rp 75.000",
      busClass: "Ekonomi AC / Bisnis",
      image:
        "https://placehold.co/400x240/374151/F59E0B?text=Jakarta+%E2%86%92+Bandung",
    },
    {
      id: 4,
      from: "Jakarta",
      to: "Semarang",
      duration: "~6 Jam",
      departureTime: "18.00, 19.00, 21.00 WIB",
      price: "Mulai Rp 150.000",
      busClass: "Ekonomi AC / Eksekutif",
      image:
        "https://placehold.co/400x240/374151/F59E0B?text=Jakarta+%E2%86%92+Semarang",
    },
    {
      id: 5,
      from: "Jakarta",
      to: "Malang",
      duration: "~14 Jam",
      departureTime: "17.00, 18.00, 19.00 WIB",
      price: "Mulai Rp 250.000",
      busClass: "Bisnis / Eksekutif",
      image:
        "https://placehold.co/400x240/374151/F59E0B?text=Jakarta+%E2%86%92+Malang",
    },
    {
      id: 6,
      from: "Jakarta",
      to: "Bali",
      duration: "~24 Jam",
      departureTime: "16.00, 17.00 WIB",
      price: "Mulai Rp 350.000",
      busClass: "Eksekutif / Super Eksekutif",
      image:
        "https://placehold.co/400x240/374151/F59E0B?text=Jakarta+%E2%86%92+Bali",
    },
  ],

  // ── TESTIMONI PENUMPANG ──────────────────────────────────────
  testimonials: [
    {
      id: 1,
      name: "Dewi Rahmawati",
      company: "Pelanggan Rute Jakarta–Yogyakarta",
      position: "Pegawai Swasta",
      message:
        "Sudah 5 kali pakai 297 Transport untuk pulang kampung ke Jogja. Busnya bersih, AC dingin, pengemudi sopan dan hati-hati. Harganya juga bersaing dibanding agen lain. Pasti balik lagi!",
      rating: 5,
      photo: "https://placehold.co/80x80/F59E0B/1F2937?text=DR",
    },
    {
      id: 2,
      name: "Bapak Hendra Gunawan",
      company: "Koordinator Gathering PT Astra",
      position: "HR Manager",
      message:
        "Kami carter 3 bus untuk gathering karyawan ke Bandung. Pelayanan sangat profesional, bus datang tepat waktu, dan koordinasinya mudah banget via WhatsApp. Tim 297 sangat responsif.",
      rating: 5,
      photo: "https://placehold.co/80x80/F59E0B/1F2937?text=HG",
    },
    {
      id: 3,
      name: "Ustaz Mujibur Rahman",
      company: "Majelis Taklim Al-Hikmah",
      position: "Pembimbing Ziarah",
      message:
        "Kami rutin pakai 297 Transport untuk perjalanan ziarah wali. Pengemudinya sabar, tahu jalur, dan tidak pernah telat. Sangat direkomendasikan untuk rombongan ibadah.",
      rating: 5,
      photo: "https://placehold.co/80x80/F59E0B/1F2937?text=MR",
    },
    {
      id: 4,
      name: "Siti Nurhaliza",
      company: "Pelanggan Rute Jakarta–Surabaya",
      position: "Mahasiswi",
      message:
        "Pertama kali naik bus jauh sendiri, tapi merasa aman dan nyaman dengan 297 Transport. Ada nomor darurat yang bisa dihubungi selama perjalanan. Sangat rekomendasikan untuk solo traveler!",
      rating: 5,
      photo: "https://placehold.co/80x80/F59E0B/1F2937?text=SN",
    },
  ],

  // ── SECTION CTA (CALL TO ACTION) ─────────────────────────────
  cta: {
    headline: "Mau Pesan Tiket atau Carter Bus?",
    subheadline:
      "Hubungi kami sekarang untuk cek ketersediaan kursi, harga terbaik, dan konfirmasi tiket instan. Gratis konsultasi, tanpa biaya tambahan.",
    buttonText: "Pesan Tiket via WhatsApp Sekarang",
    // Pesan default yang muncul di WhatsApp saat tombol diklik
    whatsappMessage:
      "Halo 297 Transport, saya ingin memesan tiket / carter bus. Mohon informasi ketersediaan dan harganya.",
  },

  // ── NAVIGASI ─────────────────────────────────────────────────
  navigation: [
    { label: "Beranda", href: "/", icon: "Home" },
    { label: "Tentang", href: "/tentang", icon: "Info" },
    { label: "Layanan", href: "/layanan", icon: "Briefcase" },
    { label: "Rute", href: "/rute", icon: "MapPin" },
    { label: "Testimoni", href: "/testimoni", icon: "Star" },
    { label: "Kontak", href: "/kontak", icon: "Phone" },
  ],

  // ── FORM KONTAK ───────────────────────────────────────────────
  contactForm: {
    // Aksi form: "whatsapp" (redirect ke WA) atau "mailto" (buka email client)
    action: "whatsapp",
    // Subjek email default jika action = "mailto"
    emailSubject: "Pertanyaan Layanan 297 Transport",
  },
};

export default siteData;
