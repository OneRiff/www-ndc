
import React from 'react';
import { 
  Globe, 
  Store, 
  School, 
  Layout, 
  RefreshCw, 
  Settings, 
  Zap, 
  ShieldCheck, 
  BarChart, 
  Headphones, 
  Search,
  MessageSquare,
  PenTool,
  Code,
  CheckCircle,
  Rocket
} from 'lucide-react';

export const COLORS = {
  blue: '#1f3c88',
  green: '#6fbf73',
  orange: '#f7941d',
};

export const SERVICES = [
  {
    title: "Website Company Profile",
    description: "Jasa pembuatan website company profile profesional untuk membangun kredibilitas bisnis Anda di mata klien.",
    icon: <Globe className="w-8 h-8 text-ndcBlue" />
  },
  {
    title: "Website UMKM & Bisnis",
    description: "Jasa pembuatan website UMKM yang responsif dan siap membantu bisnis kecil menengah berkembang lebih cepat.",
    icon: <Store className="w-8 h-8 text-ndcGreen" />
  },
  {
    title: "Website Sekolah & Instansi",
    description: "Solusi website khusus instansi dan sekolah dengan fitur lengkap dan pengelolaan data yang mudah.",
    icon: <School className="w-8 h-8 text-ndcBlue" />
  },
  {
    title: "Landing Page Konversi",
    description: "Jasa pembuatan landing page yang fokus pada konversi untuk campaign produk atau jasa Anda.",
    icon: <Layout className="w-8 h-8 text-ndcOrange" />
  },
  {
    title: "Redesign Website",
    description: "Layanan peremajaan tampilan website lama menjadi jasa website modern dan responsif masa kini.",
    icon: <RefreshCw className="w-8 h-8 text-ndcBlue" />
  },
  {
    title: "Maintenance & SEO Website",
    description: "Jasa pembuatan website SEO friendly lengkap dengan perawatan teknis agar tetap aman dan cepat.",
    icon: <Settings className="w-8 h-8 text-ndcGreen" />
  }
];

export const ADVANTAGES = [
  {
    title: "Desain Modern & Responsif",
    description: "Website tampil sempurna di semua perangkat (Mobile-First approach).",
    icon: <Layout className="w-6 h-6" />
  },
  {
    title: "SEO Friendly",
    description: "Optimasi teknis agar website Anda mudah ditemukan di hasil pencarian Google.",
    icon: <Search className="w-6 h-6" />
  },
  {
    title: "Website Cepat & Aman",
    description: "Performa loading secepat kilat dengan sistem keamanan berlapis.",
    icon: <Zap className="w-6 h-6" />
  },
  {
    title: "Harga Transparan",
    description: "Tidak ada biaya tersembunyi. Paket harga sesuai kebutuhan bisnis Anda.",
    icon: <BarChart className="w-6 h-6" />
  },
  {
    title: "Support After Sales",
    description: "Kami mendampingi Anda setelah website launching dengan dukungan teknis.",
    icon: <Headphones className="w-6 h-6" />
  },
  {
    title: "Sertifikat SSL Gratis",
    description: "Keamanan enkripsi data pengunjung terjamin dengan SSL premium.",
    icon: <ShieldCheck className="w-6 h-6" />
  }
];

export const PROCESS = [
  {
    title: "Konsultasi",
    desc: "Diskusi detail kebutuhan bisnis dan target audiens Anda.",
    icon: <MessageSquare />
  },
  {
    title: "Desain",
    desc: "Pembuatan mockup UI/UX yang modern dan intuitif.",
    icon: <PenTool />
  },
  {
    title: "Development",
    desc: "Proses pengkodean dengan teknologi web terbaru.",
    icon: <Code />
  },
  {
    title: "Testing",
    desc: "Pengecekan performa, bug, dan responsivitas.",
    icon: <CheckCircle />
  },
  {
    title: "Launching",
    desc: "Website siap online dan mulai mendatangkan trafik.",
    icon: <Rocket />
  }
];

export const FAQS = [
  {
    question: "Berapa biaya jasa pembuatan website di NDC?",
    answer: "Harga kami sangat fleksibel mulai dari paket UMKM hingga Enterprise. Kami menawarkan jasa website murah namun tetap mengedepankan kualitas profesional."
  },
  {
    question: "Berapa lama waktu pengerjaan website?",
    answer: "Untuk landing page biasanya 3-7 hari kerja, sedangkan website company profile atau instansi berkisar antara 10-21 hari kerja tergantung kompleksitas fitur."
  },
  {
    question: "Apakah website sudah termasuk SEO?",
    answer: "Ya, setiap paket sudah mencakup optimasi SEO Dasar (On-Page SEO) agar website Anda memiliki pondasi yang kuat di mesin pencari."
  },
  {
    question: "Apakah ada garansi setelah website selesai?",
    answer: "Tentu. Kami memberikan garansi maintenance teknis selama 1 tahun untuk memastikan website Anda berjalan normal tanpa gangguan."
  }
];

export const TESTIMONIALS = [
  {
    name: "Andi Saputra",
    role: "CEO",
    company: "Tech Startup",
    text: "Pelayanan sangat memuaskan, website saya sekarang muncul di halaman pertama Google. Recommended web developer profesional!"
  },
  {
    name: "Siti Aminah",
    role: "Owner",
    company: "UMKM Fashion",
    text: "Terima kasih NDC! Website jualan saya jadi lebih cantik dan penjualannya naik signifikan setelah punya landing page."
  },
  {
    name: "Budi Santoso",
    role: "Marketing Manager",
    company: "Hotel & Resort",
    text: "Timnya sangat responsif dan paham betul apa yang kami butuhkan. Jasa website terpercaya dengan harga yang kompetitif."
  },
  {
    name: "Rina Kurniawati",
    role: "Founder",
    company: "Beauty Clinic",
    text: "Desainnya modern dan profesional. Klien kami jadi lebih percaya setelah melihat website baru."
  },
  {
    name: "Ahmad Fauzi",
    role: "Owner",
    company: "Travel Agent",
    text: "Website kami jadi lebih cepat dan mobile friendly. Sangat membantu meningkatkan jumlah booking."
  },
  {
    name: "Dewi Lestari",
    role: "Digital Marketing",
    company: "Property Company",
    text: "Landing page yang dibuat NDC terbukti meningkatkan conversion rate iklan kami."
  },
  {
    name: "Rizky Pratama",
    role: "CEO",
    company: "Software House",
    text: "Struktur website rapi dan SEO friendly. Sangat cocok untuk kebutuhan bisnis digital."
  },
  {
    name: "Nur Aisyah",
    role: "Owner",
    company: "Catering Service",
    text: "Sekarang pelanggan lebih mudah melihat menu dan langsung menghubungi kami lewat website."
  },
  {
    name: "Hendra Wijaya",
    role: "Operations Manager",
    company: "Logistics Company",
    text: "Website company profile kami terlihat lebih profesional dan informatif."
  },
  {
    name: "Lina Marlina",
    role: "Entrepreneur",
    company: "Personal Brand",
    text: "Sangat puas dengan hasilnya. Desainnya sesuai dengan karakter brand saya."
  },
  {
    name: "Agus Salim",
    role: "Owner",
    company: "Bengkel Mobil",
    text: "Website simpel tapi jelas. Pelanggan jadi mudah menemukan lokasi dan layanan kami."
  },
  {
    name: "Maya Putri",
    role: "HR Manager",
    company: "Corporate Company",
    text: "Website karier yang dibuat sangat membantu proses rekrutmen kami."
  },
  {
    name: "Fajar Nugroho",
    role: "Founder",
    company: "Online Course",
    text: "Landing page kursus online kami terlihat profesional dan meningkatkan pendaftaran."
  },
  {
    name: "Sri Wahyuni",
    role: "Owner",
    company: "Wedding Organizer",
    text: "Klien kami langsung tertarik sejak melihat website. Terima kasih NDC!"
  },
  {
    name: "Yudi Hartono",
    role: "Sales Manager",
    company: "Distributor",
    text: "Website memudahkan tim sales menjelaskan produk ke klien."
  },
  {
    name: "Putra Aditya",
    role: "CTO",
    company: "Startup Digital",
    text: "Koding rapi dan performa website sangat cepat. Highly recommended."
  },
  {
    name: "Nabila Zahra",
    role: "Owner",
    company: "Skincare Brand",
    text: "Tampilan website elegan dan sesuai dengan target market kami."
  },
  {
    name: "Doni Prasetyo",
    role: "Founder",
    company: "Event Organizer",
    text: "Website membantu kami mendapatkan lebih banyak klien corporate."
  },
  {
    name: "Ratna Sari",
    role: "Marketing Lead",
    company: "E-commerce",
    text: "Optimasi SEO-nya terasa, traffic organik kami meningkat."
  },
  {
    name: "Bayu Setiawan",
    role: "Owner",
    company: "Coffee Shop",
    text: "Website simple tapi keren. Branding coffee shop kami jadi lebih kuat."
  }
]


export const PORTFOLIO = [
  {
    id: 1,
    title: "Bli Made Bali Driver",
    category: "UMKM Business",
    image: "./portofolio2.png",
    url: "https://www.blimadebalidriver.com/"
  },
  {
    id: 2,
    title: "Mount Batur Jeep Tour",
    category: "UMKM Business",
    image: "./portofolio.png",
    url: "https://www.mountbatursunrisetrekkingjeeptour.my.id/"
  },
  {
    id: 3,
    title: "Journey Tour Guide",
    category: "UMKM Business",
    image: "./portofolio3.png",
    url: "https://school-system-demo.ndc.id"
  },
  {
    id: 4,
    title: "Lensa Realita",
    category: "Media",
    image: "./portofolio4.png",
    url: "https://www.lensarealita.my.id/"
  },
  {
    id: 5,
    title: "Lombok Pure Travel",
    category: "UMKM Business",
    image: "./portofolio5.png",
    url: "https://lombokpuretravel.com/"
  }
]

