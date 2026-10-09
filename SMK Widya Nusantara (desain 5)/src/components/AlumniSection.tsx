import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "../hooks/useInView";
import {
  Briefcase,
  GraduationCap,
  MapPin,
  Star,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Award,
  Users,
  TrendingUp,
  Building2,
} from "lucide-react";

interface Alumni {
  id: number;
  name: string;
  jurusan: string;
  angkatan: string;
  foto: string;
  pekerjaan: string;
  perusahaan: string;
  lokasi: string;
  quote: string;
  kategori: "kerja" | "kuliah" | "wirausaha";
  logo?: string;
}

const alumniData: Alumni[] = [
  {
    id: 1,
    name: "Bergas Cahyo Nuswantoro",
    jurusan: "TJKT",
    angkatan: "2023",
    foto: "",
    pekerjaan: "Informatika",
    perusahaan: "Universitas Singaperbangsa Karawang",
    lokasi: "Karawang, Jawa Barat",
    quote:
      "SMK Widya Nusantara benar-benar mempersiapkan saya untuk dunia kerja. Praktik jaringan yang intensif bikin saya langsung siap kerja setelah lulus.",
    kategori: "kuliah",
  },
  {
    id: 2,
    name: "Dzihni Chalish Clarine",
    jurusan: "AKL",
    angkatan: "2024",
    foto: "",
    pekerjaan: "Keuangan Dan Perbankan",
    perusahaan: "Politeknik Negeri Jakarta",
    lokasi: "Jakarta",
    quote:
      "Saya belajar di SMK Widya Nusantara, Guru guru di SMK Widya nusantara sangat berkompeten sehingga saya dapat menyerap berbagai ilmu yang diberikan",
    kategori: "kuliah",
  },
  {
    id: 3,
    name: "Siti Rofidah",
    jurusan: "AKL",
    angkatan: "2023",
    foto: "",
    pekerjaan: "Manajemen Agrabisnis",
    perusahaan: "Sekolah Vokasi Institut Pertanian Bogor",
    lokasi: "Bogor, Jawa Barat",
    quote:
      "Selama saya sekolah di SMK Widya Nusantara itu sangat menyenangkan dan banyak pengalaman yang saya ambil. Materi dan praktik yang diajarkan oleh guru sangat berguna dan Bermanfaat",
    kategori: "kuliah",
  },
  {
    id: 4,
    name: "Adza Maulana",
    jurusan: "TJKT",
    angkatan: "2023",
    foto: "",
    pekerjaan: "Ilmu Politik",
    perusahaan: "Universitas Jendral Sudirman",
    lokasi: "Purwokerto, Jawa Tengah",
    quote:
      "Selama saya menempuh pendidikan di SMK Widya Nusantara, saya mendapatkan ilmu pengatahuan yang luar biasa dari para guru yang baik dan asik",
    kategori: "kuliah",
  },
  {
    id: 5,
    name: "Adhitya Akbar Lesmana",
    jurusan: "TO",
    angkatan: "2024",
    foto: "",
    pekerjaan: "PT. Jasamarga TollRoad Operator",
    perusahaan: "Monitoring",
    lokasi: "Jakarta, DKI Jakarta",
    quote:
      "Terima kasih untuk SMK Widya Nusantara Karena berkat sekolah SMK WIdya Nusantara saya di terima di PT. Jasamarga TollRoad Operator. Semoga Widya Nusantara Kedepannya semakin berjaya dan dapat mencetak generasi penerus bangsa yang luar biasa",
    kategori: "kerja",
  },
  {
    id: 6,
    name: "Resian Afdhol",
    jurusan: "TJKT",
    angkatan: "2024",
    foto: "",
    pekerjaan: "TNI",
    perusahaan: "Bintara",
    lokasi: "Bekasi, Jawa Barat",
    quote:
      "Saya sangat Bersyukur sekali bisa menempuh pendidikan di SMK Widya Nusantara selama 3 tahun dan dibimbing oleh guru guru yang baik, berkualitas, dan sabar",
    kategori: "kerja",
  },
  {
    id: 7,
    name: "Endardi Aditya",
    jurusan: "TO",
    angkatan: "2024",
    foto: "",
    pekerjaan: "Produksi",
    perusahaan: "PT Chemco Harapan Nusantara",
    lokasi: "Cikarang",
    quote:
      "Dengan seluruh fasilitas dan pengajar yang ahli, saya mendapatkan ilmu yang benar benar bermanfaat",
    kategori: "kerja",
  },
];

const stats = [
  { icon: Users, value: "500+", label: "Alumni Aktif", color: "text-blue-400" },
  {
    icon: Briefcase,
    value: "85%",
    label: "Langsung Kerja",
    color: "text-emerald-400",
  },
  {
    icon: GraduationCap,
    value: "15%",
    label: "Lanjut Kuliah",
    color: "text-yellow-400",
  },
  {
    icon: TrendingUp,
    value: "5%",
    label: "Wirausaha",
    color: "text-purple-400",
  },
];

const filters = [
  { key: "semua", label: "Semua" },
  { key: "kerja", label: "Bekerja" },
  { key: "kuliah", label: "Kuliah" },
  { key: "wirausaha", label: "Wirausaha" },
];

const jurusanColors: Record<string, string> = {
  TJKT: "bg-blue-500/20 text-blue-300 border-blue-500/30",
  TO: "bg-orange-500/20 text-orange-300 border-orange-500/30",
  AKL: "bg-emerald-500/20 text-emerald-300 border-emerald-500/30",
  MPLB: "bg-purple-500/20 text-purple-300 border-purple-500/30",
};

const kategoriColors: Record<string, string> = {
  kerja: "bg-emerald-500/20 text-emerald-300",
  kuliah: "bg-blue-500/20 text-blue-300",
  wirausaha: "bg-yellow-500/20 text-yellow-300",
};

const kategoriLabels: Record<string, string> = {
  kerja: "Bekerja",
  kuliah: "Kuliah",
  wirausaha: "Wirausaha",
};

const ITEMS_PER_PAGE = 6;

export default function AlumniSection() {
  const [activeFilter, setActiveFilter] = useState("semua");
  const [currentPage, setCurrentPage] = useState(0);
  const [activeTestimoni, setActiveTestimoni] = useState(0);
  const { ref, isInView } = useInView(0.1);

  const filtered =
    activeFilter === "semua"
      ? alumniData
      : alumniData.filter((a) => a.kategori === activeFilter);

  const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE);
  const paged = filtered.slice(
    currentPage * ITEMS_PER_PAGE,
    (currentPage + 1) * ITEMS_PER_PAGE
  );

  const handleFilter = (key: string) => {
    setActiveFilter(key);
    setCurrentPage(0);
  };

  const featuredTestimoni = alumniData.filter((a) => a.quote);

  return (
    <section
      id="alumni"
      className="relative bg-[#0d1b2e] overflow-hidden"
    >
      {/* ── Gradient TOP (fade in dari section sebelumnya) ── */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-white/5 to-transparent pointer-events-none z-10" />

      {/* ── Decorative background blobs ── */}
      <div className="absolute top-20 left-0 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-40 right-0 w-80 h-80 bg-indigo-600/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-900/10 rounded-full blur-3xl pointer-events-none" />

      <div ref={ref} className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 lg:py-36">

        {/* ── Section Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 sm:mb-20"
        >
          <span className="inline-block px-4 py-1.5 bg-blue-500/10 border border-blue-500/20 text-blue-300 font-semibold text-xs sm:text-sm rounded-full mb-4 tracking-wide uppercase">
            Alumni
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-5 leading-tight">
            Jejak Sukses{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
              Alumni Kami
            </span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base lg:text-lg max-w-2xl mx-auto leading-relaxed">
            Ribuan alumni SMK Widya Nusantara telah membuktikan diri di dunia
            industri, kampus terbaik, dan membangun usaha sendiri.
          </p>
          <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 mx-auto rounded-full mt-6" />
        </motion.div>

        {/* ── Stats ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-16 sm:mb-20"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.2 + i * 0.08 }}
              className="bg-white/5 border border-white/10 rounded-2xl p-5 sm:p-6 text-center backdrop-blur-sm hover:bg-white/8 hover:border-white/20 transition-all duration-300"
            >
              <stat.icon className={`w-6 h-6 sm:w-7 sm:h-7 mx-auto mb-3 ${stat.color}`} />
              <p className={`text-2xl sm:text-3xl font-bold ${stat.color} mb-1`}>
                {stat.value}
              </p>
              <p className="text-gray-400 text-xs sm:text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* ── Testimoni Carousel ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-16 sm:mb-20"
        >
          <div className="relative bg-gradient-to-br from-blue-900/40 to-indigo-900/30 border border-blue-500/20 rounded-3xl p-6 sm:p-10 overflow-hidden">
            {/* quote decoration */}
            <div className="absolute top-4 right-6 text-[120px] leading-none text-blue-500/10 font-serif select-none pointer-events-none">
              "
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeTestimoni}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.35 }}
                className="relative z-10"
              >
                <p className="text-white/90 text-base sm:text-lg lg:text-xl leading-relaxed mb-6 italic max-w-3xl">
                  "{featuredTestimoni[activeTestimoni]?.quote}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-lg">
                      {featuredTestimoni[activeTestimoni]?.name[0]}
                    </span>
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm sm:text-base">
                      {featuredTestimoni[activeTestimoni]?.name}
                    </p>
                    <p className="text-blue-300 text-xs sm:text-sm">
                      {featuredTestimoni[activeTestimoni]?.pekerjaan} ·{" "}
                      {featuredTestimoni[activeTestimoni]?.perusahaan}
                    </p>
                    <div className="flex items-center gap-2 mt-1">
                      <span
                        className={`text-[10px] px-2 py-0.5 rounded-full border ${jurusanColors[featuredTestimoni[activeTestimoni]?.jurusan]}`}
                      >
                        {featuredTestimoni[activeTestimoni]?.jurusan}
                      </span>
                      <span className="text-gray-400 text-[10px]">
                        Angkatan {featuredTestimoni[activeTestimoni]?.angkatan}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* nav */}
            <div className="flex items-center justify-between mt-6">
              <div className="flex gap-2">
                {featuredTestimoni.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveTestimoni(i)}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      i === activeTestimoni
                        ? "w-6 bg-blue-400"
                        : "w-1.5 bg-white/20 hover:bg-white/40"
                    }`}
                  />
                ))}
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() =>
                    setActiveTestimoni((prev) =>
                      prev === 0 ? featuredTestimoni.length - 1 : prev - 1
                    )
                  }
                  className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 border border-white/10 flex items-center justify-center transition-colors"
                >
                  <ChevronLeft className="w-4 h-4 text-white" />
                </button>
                <button
                  onClick={() =>
                    setActiveTestimoni((prev) =>
                      prev === featuredTestimoni.length - 1 ? 0 : prev + 1
                    )
                  }
                  className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 border border-white/10 flex items-center justify-center transition-colors"
                >
                  <ChevronRight className="w-4 h-4 text-white" />
                </button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ── Filter ── */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-10"
        >
          {filters.map((f) => (
            <button
              key={f.key}
              onClick={() => handleFilter(f.key)}
              className={`px-5 py-2 rounded-full text-xs sm:text-sm font-semibold border transition-all duration-300 ${
                activeFilter === f.key
                  ? "bg-blue-500 text-white border-blue-500 shadow-lg shadow-blue-500/25"
                  : "bg-white/5 text-gray-300 border-white/10 hover:bg-white/10 hover:border-white/20"
              }`}
            >
              {f.label}
            </button>
          ))}
        </motion.div>

        {/* ── Alumni Cards Grid ── */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-10">
          <AnimatePresence mode="popLayout">
            {paged.map((alumni, i) => (
              <motion.div
                key={alumni.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35, delay: i * 0.06 }}
                className="group bg-white/5 border border-white/10 rounded-2xl p-5 sm:p-6 hover:bg-white/8 hover:border-blue-500/30 hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-400 hover:-translate-y-1"
              >
                {/* Header */}
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center flex-shrink-0 shadow-lg">
                    <span className="text-white font-bold text-lg sm:text-xl">
                      {alumni.name[0]}
                    </span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-white font-semibold text-sm sm:text-base truncate group-hover:text-blue-300 transition-colors">
                      {alumni.name}
                    </h3>
                    <div className="flex flex-wrap gap-1.5 mt-1.5">
                      <span
                        className={`text-[10px] px-2 py-0.5 rounded-full border ${jurusanColors[alumni.jurusan]}`}
                      >
                        {alumni.jurusan}
                      </span>
                      <span
                        className={`text-[10px] px-2 py-0.5 rounded-full ${kategoriColors[alumni.kategori]}`}
                      >
                        {kategoriLabels[alumni.kategori]}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Info */}
                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-gray-400 text-xs sm:text-sm">
                    <Briefcase className="w-3.5 h-3.5 flex-shrink-0 text-blue-400" />
                    <span className="truncate">{alumni.pekerjaan}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-400 text-xs sm:text-sm">
                    <Building2 className="w-3.5 h-3.5 flex-shrink-0 text-cyan-400" />
                    <span className="truncate">{alumni.perusahaan}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-400 text-xs sm:text-sm">
                    <MapPin className="w-3.5 h-3.5 flex-shrink-0 text-indigo-400" />
                    <span className="truncate">{alumni.lokasi}</span>
                  </div>
                </div>

                {/* Quote */}
                <p className="text-gray-500 text-xs leading-relaxed line-clamp-2 italic border-t border-white/5 pt-3">
                  "{alumni.quote}"
                </p>

                {/* Angkatan */}
                <div className="mt-3 flex items-center justify-between">
                  <span className="text-gray-500 text-[10px]">
                    Angkatan {alumni.angkatan}
                  </span>
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-3 h-3 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* ── Pagination ── */}
        {totalPages > 1 && (
          <div className="flex justify-center gap-2 mb-16">
            <button
              onClick={() => setCurrentPage((p) => Math.max(0, p - 1))}
              disabled={currentPage === 0}
              className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white disabled:opacity-30 hover:bg-white/10 transition-colors"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            {[...Array(totalPages)].map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentPage(i)}
                className={`w-9 h-9 rounded-full text-sm font-semibold transition-all duration-300 ${
                  currentPage === i
                    ? "bg-blue-500 text-white shadow-lg shadow-blue-500/30"
                    : "bg-white/5 border border-white/10 text-gray-400 hover:bg-white/10"
                }`}
              >
                {i + 1}
              </button>
            ))}
            <button
              onClick={() =>
                setCurrentPage((p) => Math.min(totalPages - 1, p + 1))
              }
              disabled={currentPage === totalPages - 1}
              className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white disabled:opacity-30 hover:bg-white/10 transition-colors"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        )}

        {/* ── CTA Banner ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="relative bg-gradient-to-r from-blue-700/50 via-indigo-700/50 to-blue-700/50 border border-blue-500/30 rounded-3xl p-8 sm:p-12 text-center overflow-hidden"
        >
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(59,130,246,0.15)_0%,_transparent_70%)] pointer-events-none" />
          <Award className="w-10 h-10 sm:w-12 sm:h-12 text-yellow-400 mx-auto mb-4" />
          <h3 className="text-white font-bold text-xl sm:text-2xl lg:text-3xl mb-3">
            Bergabunglah & Raih Masa Depanmu
          </h3>
          <p className="text-blue-200/80 text-sm sm:text-base max-w-xl mx-auto mb-7">
            Jadilah bagian dari ribuan alumni SMK Widya Nusantara yang telah
            sukses di dunia industri dan perguruan tinggi terbaik.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
          </div>
        </motion.div>
      </div>

      {/* ── Gradient BOTTOM (fade ke section berikutnya) ── */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#0a1628]/80 to-transparent pointer-events-none z-10" />
    </section>
  );
}
