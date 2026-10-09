import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Calendar,
  ArrowRight,
  Tag,
  X,
  Clock,
  Share2,
  ChevronUp,
} from "lucide-react";
import { useInView } from "../hooks/useInView";

interface NewsItem {
  title: string;
  excerpt: string;
  date: string;
  category: string;
  color: string;
  image: string;
  fullContent: string[];
  author: string;
}

const newsItems: NewsItem[] = [
  {
    title: "Pendaftaran SPMB Telah Dibuka",
    excerpt:
      "SMK Widya Nusantara membuka Sistem Penerimaan Murid Baru (SPMB) untuk tahun ajaran 2026/2027. Segera daftarkan diri Anda!",
    date: "15 Januari 2025",
    category: "SPMB",
    color: "from-gold-500 to-gold-400",
    image: "/images/Berita/Pendaftaran1.png",
    author: "Tim Humas SMK WNB",
    fullContent: [
      "SMK Widya Nusantara dengan bangga mengumumkan Sistem Penerimaan Murid Baru (SPMB) untuk tahun ajaran 2026/2027.",
      "Tahun ini, SMK Widya Nusantara membuka pendaftaran untuk 4 kompetensi keahlian: Teknik Jaringan Komputer dan Telekomunikasi (TJKT), Teknik Otomotif (TO), Akuntansi Keuangan Lembaga (AKL), dan Manajemen Perkantoran dan Layanan Bisnis (MPLB).",
      "Calon peserta didik dapat mendaftar secara online melalui website resmi sekolah atau datang langsung ke lokasi pendaftaran di sekolah. Syarat pendaftaran meliputi ijazah/SKL SMP, akta kelahiran, kartu keluarga, dan pas foto terbaru.",
      "Untuk informasi lebih lanjut, silakan hubungi panitia SPMB di nomor 0812-1382-0630 atau email smk.winus.bekasi@gmail.com.",
    ],
  },
  {
    title: "Paskribra SMK Widya Nusantara Juara 2 LKKB Alfityan",
    excerpt:
      "siswa dan siswi SMK Widya Nusantara meraih juara 2 dalam Lomba Kompetensi Kepemudaan (LKKB) Alfityan tingkat Provinsi Jawa Barat.",
    date: "10 Januari 2025",
    category: "Prestasi",
    color: "from-emerald-500 to-emerald-400",
    image: "/images/Berita/PASKIBRA1.jpg",
    author: "Tim Humas SMK WNB",
    fullContent: [
      "Tim Paskibra SMK Widya Nusantara berhasil meraih prestasi gemilang dengan meraih Juara 2 dalam Lomba Kompetensi Kepemudaan (LKKB) Alfityan tingkat Provinsi Jawa Barat yang diselenggarakan pada 10 Januari 2025 di Bandung.",
      "Tim yang beranggota 10 siswa ini berhasil mengalahkan 20 tim dari berbagai sekolah di Jawa Barat dengan penampilan yang memukau dan teknik yang solid.",
      'Kepala Sekolah Endang Lestari, S.Pd.,Gr menyampaikan apresiasi tinggi atas prestasi ini. "Ini adalah bukti bahwa kurikulum berbasis industri yang kami terapkan mampu menghasilkan lulusan yang kompeten dan berdaya saing tinggi," ujarnya.',
      "Dengan prestasi ini, tim Paskibra SMK Widya Nusantara berhak mewakili Jawa Barat dalam kompetisi tingkat nasional yang akan diselenggarakan pada pertengahan tahun 2025.",
    ],
  },
  {
    title: "Festival Teknologi & Inovasi WINFEST 2025",
    excerpt:
      "SMK Widya Nusantara bekerja sama dengan Fruit Tea menyelenggarakan Festival Teknologi & Inovasi WINFEST 2025 yang diikuti oleh seluruh siswa kelas XII.",
    date: "5 Januari 2025",
    category: "Event",
    color: "from-royal-500 to-royal-400",
    image: "/images/Berita/WINFEST.JPG",
    author: "Tim Humas SMK WNB",
    fullContent: [
      "SMK Widya Nusantara bekerja sama dengan Fruit Tea menyelenggarakan Festival Teknologi & Inovasi WINFEST 2025 yang diikuti oleh seluruh siswa kelas XII. Acara berlangsung di Aula Sekolah pada Sabtu, 5 Januari 2025.",
      "Festival ini menghadirkan narasumber dari Fruit Tea yang membahas tentang perkembangan teknologi digital, Internet of Things (IoT), Cloud Computing, dan Artificial Intelligence serta dampaknya terhadap dunia kerja.",
      "Kegiatan ini merupakan bagian dari program Hubungan Industri yang bertujuan untuk memperluas wawasan siswa tentang perkembangan teknologi terkini dan kebutuhan industri di masa depan.",
      "Selain festival, Fruit Tea juga menawarkan program magang dan rekrutmen langsung bagi siswa yang memenuhi kualifikasi. Ini menjadi peluang emas bagi siswa untuk memulai karier di perusahaan telekomunikasi terbesar di Indonesia.",
    ],
  },
  {
    title: "SMK Widya Nusantara Mengunjungi Ajinomoto Indonesia",
    excerpt:
      "SMK Widya Nusantara mengunjungi kantor pusat Ajinomoto Indonesia untuk menjalin kerja sama dalam program Praktek Kerja Lapangan.",
    date: "28 Desember 2024",
    category: "Industri",
    color: "from-purple-500 to-purple-400",
    image: "/images/Berita/KUNJUS.JPG",
    author: "Tim Humas SMK WNB",
    fullContent: [
      "SMK Widya Nusantara melakukan kunjungan ke kantor pusat Ajinomoto Indonesia di Jakarta pada 28 Desember 2024. Kunjungan ini bertujuan untuk menjalin kerja sama dalam program Praktek Kerja Lapangan (PKL) bagi siswa jurusan Teknik Otomotif dan Manajemen Perkantoran.",
      "Kerja sama ini mencakup program Praktek Kerja Lapangan (PKL) bagi siswa Teknik Otomotif dan Manajemen Perkantoran, program guest teaching dari praktisi industri, serta kesempatan rekrutmen langsung bagi lulusan terbaik.",
      "Melalui kerja sama ini, siswa akan mendapatkan pengalaman kerja langsung di bengkel dan kantor Ajinomoto Indonesia yang berstandar internasional.",
      "Ajinomoto Indonesia juga berkomitmen untuk menyediakan peralatan praktik dan pelatihan bagi guru produktif agar materi pembelajaran selalu sesuai dengan perkembangan teknologi terkini.",
    ],
  },
  {
    title: "Pentas Drama Siswa Baru 2024",
    excerpt:
      "SMK Widya Nusantara menggelar pentas drama yang menampilkan bakat akting siswa baru tahun ajaran 2024/2025.",
    date: "20 Desember 2024",
    category: "Event",
    color: "from-royal-500 to-royal-400",
    image: "/images/Berita/DRAMA-P5.JPG",
    author: "Tim Humas SMK WNB",
    fullContent: [
      "SMK Widya Nusantara menggelar pentas drama yang menampilkan bakat akting siswa baru tahun ajaran 2024/2025. Acara ini berlangsung di Aula Sekolah pada Jumat, 20 Desember 2024.",
      "Program ini mencakup dasar-dasar Dramatika, teknik akting, improvisasi, dan produksi pentas. Siswa dibimbing oleh guru seni dan praktisi teater profesional selama 3 bulan persiapan.",
      "Pentas drama ini menjadi ajang bagi siswa untuk mengekspresikan kreativitas, membangun rasa percaya diri, dan mengembangkan kemampuan komunikasi",
      "Selain itu, acara ini juga menjadi momen untuk mempererat hubungan antar siswa baru dan memperkenalkan mereka pada budaya sekolah yang penuh semangat dan kolaboratif.",
    ],
  },
  {
    title: "AKL Dan MPLB Visit Campus",
    excerpt:
      "visiting campus oleh siswa jurusan Akuntansi Keuangan Lembaga (AKL) dan Manajemen Perkantoran dan Layanan Bisnis (MPLB) untuk mengenal fasilitas dan program sekolah.",
    date: "15 Desember 2024",
    category: "Prestasi",
    color: "from-emerald-500 to-emerald-400",
    image: "/images/Berita/VISIT-CAMPUS.JPG",
    author: "Tim Humas SMK WNB",
    fullContent: [
      "Siswa jurusan Akuntansi Keuangan Lembaga (AKL) dan Manajemen Perkantoran dan Layanan Bisnis (MPLB) SMK Widya Nusantara melakukan kunjungan ke kampus untuk mengenal fasilitas, program pembelajaran, dan peluang karier di bidang akuntansi dan manajemen.",
      "Kegiatan ini melibatkan Kurang Lebih 60 siswa yang dibagi menjadi beberapa kelompok untuk mengikuti sesi presentasi, tur laboratorium komputer, dan simulasi praktik akuntansi menggunakan software terkini.",
      "Keberhasilan ini tak lepas dari program intensif yang diadakan sekolah selama 3 bulan sebelum Visit Campus berlangsung.",
      "Siswa juga mendapatkan kesempatan untuk berdiskusi langsung dengan guru produktif dan alumni yang telah sukses berkarier di perusahaan ternama.",
    ],
  },
  {
    title:
      "Hari Guru Nasional 2024: Apresiasi dan Penghargaan untuk Guru Berprestasi",
    excerpt:
      "SMK Widya Nusantara memperingati Hari Guru Nasional dengan memberikan penghargaan kepada guru berprestasi yang telah memberikan kontribusi luar biasa dalam dunia pendidikan.",
    date: "10 Desember 2024",
    category: "Event",
    color: "from-amber-500 to-yellow-500",
    image: "/images/Berita/HARI-GURU.JPG ",
    author: "Tim Humas SMK WNB",
    fullContent: [
      "SMK Widya Nusantara memperingati Hari Guru Nasional 2024 dengan memberikan penghargaan kepada guru berprestasi yang telah memberikan kontribusi luar biasa dalam dunia pendidikan. Acara ini berlangsung di Aula Sekolah pada Selasa, 10 Desember 2024.",
      "Setiap guru yang menerima penghargaan dipilih berdasarkan dedikasi, inovasi dalam pembelajaran, dan dampak positif yang mereka berikan kepada siswa selama tahun ajaran 2025/2026.",
      "Penghargaan ini diberikan dalam beberapa kategori, termasuk Guru Inspiratif, Guru Inovatif, dan Guru Teladan. Setiap penerima penghargaan menerima sertifikat, plakat, dan hadiah menarik sebagai bentuk apresiasi atas dedikasi mereka.",
      "Acara ini juga diisi dengan penampilan seni dari siswa, sesi berbagi pengalaman mengajar, dan pesan inspiratif dari Kepala Sekolah untuk memotivasi seluruh guru dalam meningkatkan kualitas pendidikan di SMK Widya Nusantara.",
    ],
  },
  {
    title: "Hari Pahlawan : semua siswa memakai baju pahlawan",
    excerpt:
      "SMK Widya Nusantara memperingati Hari Pahlawan dengan mengadakan kegiatan mengenang jasa pahlawan dan menanamkan nilai-nilai kepahlawanan kepada siswa.",
    date: "5 Desember 2024",
    category: "Event",
    color: "from-purple-500 to-purple-400",
    image: "/images/Berita/HARI-PAHLAWAN.jpg",
    author: "Tim Humas SMK WNB",
    fullContent: [
      "SMK Widya Nusantara memperingati Hari Pahlawan dengan mengadakan kegiatan mengenang jasa pahlawan dan menanamkan nilai-nilai kepahlawanan kepada siswa. Acara ini berlangsung di halaman sekolah pada Kamis, 5 Desember 2024.",
      "Kegiatan ini meliputi upacara bendera, pembacaan teks Pancasila, dan penampilan drama singkat yang menceritakan perjuangan pahlawan nasional. Siswa juga mengenakan kost",
      "um pahlawan untuk menambah semarak peringatan Hari Pahlawan.",
      "Selain itu, sekolah juga mengadakan lomba menulis esai tentang pahlawan lokal dan nasional, serta lomba menggambar poster bertema kepahlawanan. Pemenang lomba mendapatkan hadiah menarik dan sertifikat penghargaan.",
    ],
  },
  {
    title: "MPLS 2024: Sambut Siswa Baru dengan Semangat dan Kreativitas",
    excerpt:
      "SMK Widya Nusantara menyambut siswa baru tahun ajaran 2024/2025 dengan Masa Pengenalan Lingkungan Sekolah (MPLS) yang penuh semangat dan kreativitas.",
    date: "28 November 2024",
    category: "Event",
    color: "from-emerald-500 to-emerald-400",
    image: "/images/Berita/PLDS.jpg",
    author: "Tim Humas SMK WNB",
    fullContent: [
      "SMK Widya Nusantara menyambut siswa baru tahun ajaran 2024/2025 dengan Masa Pengenalan Lingkungan Sekolah (MPLS) yang penuh semangat dan kreativitas. Acara ini berlangsung selama 3 hari, mulai 28 November hingga 30 November 2024.",
      "MPLS diisi dengan berbagai kegiatan menarik seperti orientasi sekolah, pengenalan fasilitas, ice breaking games, dan workshop kreativitas yang dipandu oleh guru dan kakak kelas.",
      "Kegiatan ini bertujuan untuk membantu siswa baru beradaptasi dengan lingkungan sekolah, membangun rasa komunitas, dan memperkenalkan nilai-nilai karakter yang menjadi bagian dari budaya sekolah.",
      "Selain itu, siswa juga mendapatkan kesempatan untuk berinteraksi dengan teman-teman sekelas dan guru secara lebih dekat, sehingga menciptakan ikatan yang kuat sejak awal tahun ajaran.",
    ],
  },
  {
    title: "maulid nabi 2024: semua siswa memakai baju muslim",
    excerpt:
      "SMK Widya Nusantara memperingati Maulid Nabi Muhammad SAW dengan mengadakan kegiatan keagamaan dan sosial yang melibatkan seluruh siswa dan guru.",
    date: "20 November 2024",
    category: "Event",
    color: "from-gold-500 to-gold-400",
    image: "/images/Berita/MAULID-NABI.JPG",
    author: "Tim Humas SMK WNB",
    fullContent: [
      "SMK Widya Nusantara memperingati Maulid Nabi Muhammad SAW dengan mengadakan kegiatan keagamaan dan sosial yang melibatkan seluruh siswa dan guru. Acara ini berlangsung di masjid sekolah pada Rabu, 20 November 2024.",
      "Kegiatan ini meliputi pembacaan shalawat, ceramah agama, dan doa bersama yang dipimpin oleh ustadz dari luar sekolah. Siswa juga mengenakan pakaian muslim untuk menambah khidmat peringatan Maulid Nabi.",
      "Selain itu, sekolah juga mengadakan kegiatan sosial berupa penggalangan dana untuk membantu anak-anak yatim dan dhuafa di sekitar lingkungan sekolah. Hasil penggalangan dana ini akan disalurkan melalui yayasan sosial yang bekerja sama dengan sekolah.",
      "Acara ini bertujuan untuk menanamkan nilai-nilai keagamaan, kepedulian sosial, dan memperkuat rasa kebersamaan di antara siswa dan guru.",
    ],
  },
  {
    title: "17 agustus 2024: Upacara Bendera dan Lomba Meriah",
    excerpt:
      "SMK Widya Nusantara memperingati Hari Kemerdekaan Republik Indonesia ke-79 dengan mengadakan upacara bendera dan berbagai lomba yang meriah bagi seluruh siswa.",
    date: "25 November 2024",
    category: "Event",
    color: "from-royal-500 to-royal-400",
    image: "/images/Berita/17AN.JPG",
    author: "Tim Humas SMK WNB",
    fullContent: [
      "SMK Widya Nusantara memperingati Hari Kemerdekaan Republik Indonesia ke-79 dengan mengadakan upacara bendera dan berbagai lomba yang meriah bagi seluruh siswa. Acara ini berlangsung di lapangan sekolah pada Minggu, 25 November 2024.",
      "Upacara bendera diikuti oleh seluruh siswa, guru, dan staf sekolah dengan khidmat. Setelah upacara, berbagai lomba tradisional seperti tarik tambang, balap karung, dan lomba makan kerupuk diadakan.",
      "Selain itu, sekolah juga mengadakan lomba kreativitas seperti lomba poster kemerdekaan dan lomba menyanyi lagu nasional. Pemenang lomba mendapatkan hadiah menarik dan sertifikat penghargaan.",
      "Acara ini bertujuan untuk menumbuhkan rasa cinta tanah air, semangat kebersamaan, dan kreativitas di kalangan siswa, serta mempererat hubungan antara siswa, guru, dan staf sekolah.",
    ],
  },
  {
    title: "Sekolah Akreditasi A: SMK Widya Nusantara Raih Prestasi Tertinggi",
    excerpt:
      "SMK Widya Nusantara berhasil meraih akreditasi A dari Badan Akreditasi Nasional Sekolah/Madrasah (BAN-S/M) sebagai pengakuan atas kualitas pendidikan yang unggul.",
    date: "15 November 2024",
    category: "Event",
    color: "from-royal-500 to-royal-400",
    image: "/images/Berita/Akreditasi-A.png",
    author: "Tim Humas SMK WNB",
    fullContent: [
      "SMK Widya Nusantara berhasil meraih akreditasi A dari Badan Akreditasi Nasional Sekolah/Madrasah (BAN-S/M) sebagai pengakuan atas kualitas pendidikan yang unggul.",
      "Akreditasi ini merupakan penghargaan bagi prestasi sekolah dalam berbagai aspek, termasuk mutu pendidikan, infrastruktur, dan kesejahteraan siswa.",
      "Kepala Sekolah menyampaikan apresiasi kepada seluruh komunitas sekolah atas kerja keras dan dedikasi yang telah dicapai.",
      "Akreditasi A ini diharapkan dapat meningkatkan reputasi sekolah dan memberikan motivasi bagi siswa dan guru untuk terus berprestasi.",
    ],
  },
];

const INITIAL_COUNT = 4;

const shareOptions = [
  {
    platform: "whatsapp",
    label: "WhatsApp",
    icon: (
      <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current text-green-500">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    ),
    color: "hover:bg-green-50",
  },
  {
    platform: "facebook",
    label: "Facebook",
    icon: (
      <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current text-blue-600">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
    color: "hover:bg-blue-50",
  },
  {
    platform: "twitter",
    label: "Twitter / X",
    icon: (
      <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current text-gray-900">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
    color: "hover:bg-gray-100",
  },
  {
    platform: "copy",
    label: "Salin Link",
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="w-4 h-4 stroke-current text-gray-500"
        fill="none"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71" />
        <path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71" />
      </svg>
    ),
    color: "hover:bg-gray-50",
  },
];

export default function NewsSection() {
  const [selectedNews, setSelectedNews] = useState<NewsItem | null>(null);
  const [showAll, setShowAll] = useState(false);
  const [showShareMenu, setShowShareMenu] = useState(false);
  const [copied, setCopied] = useState(false);
  const { ref, isInView } = useInView(0.1);

  const visibleNews = showAll ? newsItems : newsItems.slice(0, INITIAL_COUNT);

  const closeModal = () => {
    setSelectedNews(null);
    setShowShareMenu(false);
    setCopied(false);
  };

  const handleShare = (platform: string) => {
    const url = encodeURIComponent(window.location.href);
    const title = encodeURIComponent(selectedNews?.title ?? "");

    const links: Record<string, string> = {
      whatsapp: `https://wa.me/?text=${title}%0A${url}`,
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${url}`,
      twitter: `https://twitter.com/intent/tweet?text=${title}&url=${url}`,
    };

    if (platform === "copy") {
      navigator.clipboard.writeText(window.location.href).then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      });
      return;
    }

    window.open(links[platform], "_blank", "noopener,noreferrer");
    setShowShareMenu(false);
  };

  return (
    <section
      id="berita"
      className="relative py-16 sm:py-20 lg:py-28 bg-gray-50 overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-navy-200 to-transparent" />

      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-royal-500/10 text-royal-500 font-inter font-semibold text-xs sm:text-sm rounded-full mb-4">
            Berita & Informasi
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-poppins font-bold text-navy-900 mb-4">
            Berita Terkini
          </h2>
          <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-royal-500 to-gold-500 mx-auto rounded-full" />
        </motion.div>

        {/* News Grid */}
        <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
          <AnimatePresence mode="popLayout">
            {visibleNews.map((news, i) => (
              <motion.article
                key={news.title}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{
                  duration: 0.4,
                  delay: i < INITIAL_COUNT ? 0 : (i - INITIAL_COUNT) * 0.08,
                }}
                className="group bg-white rounded-xl sm:rounded-2xl overflow-hidden border border-gray-100 hover:border-royal-500/20 shadow-sm hover:shadow-xl hover:shadow-royal-500/5 transition-all duration-500 hover:-translate-y-1 cursor-pointer"
                onClick={() => setSelectedNews(news)}
              >
                {/* Image */}
                <div className="relative h-36 sm:h-48 overflow-hidden">
                  <img
                    src={news.image}
                    alt={news.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-900/40 to-transparent" />
                  <div className="absolute top-3 left-3">
                    <span
                      className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] sm:text-xs font-inter font-bold text-white bg-gradient-to-r ${news.color}`}
                    >
                      <Tag className="w-3 h-3" />
                      {news.category}
                    </span>
                  </div>
                </div>

                <div className="p-4 sm:p-6">
                  {/* Date */}
                  <div className="flex items-center gap-2 mb-2 sm:mb-3">
                    <Calendar className="w-3.5 h-3.5 text-gray-400" />
                    <span className="text-gray-400 font-inter text-xs">
                      {news.date}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-poppins font-bold text-navy-900 text-sm sm:text-base lg:text-lg mb-2 sm:mb-3 group-hover:text-royal-500 transition-colors duration-300 line-clamp-2">
                    {news.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="font-inter text-gray-500 text-xs sm:text-sm leading-relaxed mb-4 line-clamp-2">
                    {news.excerpt}
                  </p>

                  {/* Read More */}
                  <div className="flex items-center gap-1.5 text-royal-500 font-inter font-semibold text-xs sm:text-sm group-hover:gap-2.5 transition-all duration-300">
                    Baca Selengkapnya
                    <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>

        {/* Load More / Collapse Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="text-center mt-8 sm:mt-12"
        >
          <button
            onClick={() => setShowAll((prev) => !prev)}
            className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-3.5 bg-navy-900 text-white font-poppins font-semibold text-xs sm:text-sm rounded-full hover:bg-navy-800 hover:shadow-lg hover:shadow-navy-900/20 transition-all duration-300 hover:scale-105"
          >
            {showAll ? (
              <>
                <ChevronUp className="w-4 h-4" />
                Tampilkan Lebih Sedikit
              </>
            ) : (
              <>
                Lihat Semua Berita
                <span className="inline-flex items-center justify-center w-5 h-5 bg-white/20 rounded-full text-[10px] font-bold">
                  {newsItems.length - INITIAL_COUNT}
                </span>
              </>
            )}
          </button>
        </motion.div>
      </div>

      {/* News Detail Modal */}
      <AnimatePresence>
        {selectedNews && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[200] bg-black/70 backdrop-blur-sm flex items-start sm:items-center justify-center p-3 sm:p-4 overflow-y-auto"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 30 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 30 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-2xl sm:rounded-3xl max-w-2xl w-full my-4 sm:my-0 overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header Image — tampil penuh tanpa crop */}
              <div className="relative overflow-hidden bg-navy-900">
                <img
                  src={selectedNews.image}
                  alt={selectedNews.title}
                  className="w-full h-auto object-contain max-h-[70vh]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900/50 via-transparent to-transparent pointer-events-none" />
                <button
                  onClick={closeModal}
                  className="absolute top-3 right-3 sm:top-4 sm:right-4 w-9 h-9 sm:w-10 sm:h-10 bg-black/30 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-black/50 transition-colors"
                >
                  <X className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                </button>
                <div className="absolute bottom-3 left-4 sm:left-6">
                  <span
                    className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-inter font-bold text-white bg-gradient-to-r ${selectedNews.color}`}
                  >
                    <Tag className="w-3 h-3" />
                    {selectedNews.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-4 sm:p-6 lg:p-8">
                {/* Meta */}
                <div className="flex items-center gap-4 mb-4 sm:mb-6 text-xs sm:text-sm text-gray-500 font-inter">
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5" />
                    {selectedNews.date}
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5" />5 min baca
                  </div>

                  {/* Share Button with Dropdown */}
                  <div className="relative">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setShowShareMenu((prev) => !prev);
                      }}
                      className="flex items-center gap-1.5 hover:text-royal-500 transition-colors"
                    >
                      <Share2 className="w-3.5 h-3.5" />
                      Bagikan
                    </button>

                    <AnimatePresence>
                      {showShareMenu && (
                        <>
                          {/* Backdrop to close dropdown */}
                          <div
                            className="fixed inset-0 z-10"
                            onClick={(e) => {
                              e.stopPropagation();
                              setShowShareMenu(false);
                            }}
                          />
                          <motion.div
                            initial={{ opacity: 0, y: -8, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: -8, scale: 0.95 }}
                            transition={{ duration: 0.15 }}
                            className="absolute left-0 top-7 bg-white border border-gray-100 rounded-xl shadow-xl z-20 overflow-hidden min-w-[160px]"
                          >
                            {shareOptions.map(
                              ({ platform, label, icon, color }) => (
                                <button
                                  key={platform}
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    handleShare(platform);
                                  }}
                                  className={`w-full flex items-center gap-3 px-4 py-2.5 text-left text-sm font-inter text-gray-600 transition-colors ${color}`}
                                >
                                  {icon}
                                  {platform === "copy" && copied
                                    ? "Tersalin!"
                                    : label}
                                </button>
                              ),
                            )}
                          </motion.div>
                        </>
                      )}
                    </AnimatePresence>
                  </div>
                </div>

                {/* Title */}
                <h2 className="font-poppins font-bold text-navy-900 text-lg sm:text-xl lg:text-2xl mb-4 sm:mb-6 leading-tight">
                  {selectedNews.title}
                </h2>

                {/* Full Content */}
                <div className="space-y-3 sm:space-y-4">
                  {selectedNews.fullContent.map((paragraph, i) => (
                    <p
                      key={i}
                      className="font-inter text-gray-600 text-xs sm:text-sm lg:text-base leading-relaxed"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>

                {/* Author */}
                <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-gray-100 flex items-center gap-3">
                  <div
                    className={`w-10 h-10 rounded-full bg-gradient-to-r ${selectedNews.color} flex items-center justify-center`}
                  >
                    <span className="text-white font-poppins font-bold text-sm">
                      {selectedNews.author[0]}
                    </span>
                  </div>
                  <div>
                    <p className="font-poppins font-semibold text-navy-900 text-sm">
                      {selectedNews.author}
                    </p>
                    <p className="font-inter text-gray-500 text-xs">
                      SMK Widya Nusantara
                    </p>
                  </div>
                </div>

                {/* Close Button */}
                <div className="mt-4 sm:mt-6">
                  <button
                    onClick={closeModal}
                    className="w-full px-6 py-3 bg-navy-900 text-white font-poppins font-semibold text-sm rounded-full hover:bg-navy-800 transition-colors"
                  >
                    Tutup
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
