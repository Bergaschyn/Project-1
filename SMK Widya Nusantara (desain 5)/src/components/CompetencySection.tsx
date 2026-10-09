import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Monitor,
  Car,
  Calculator,
  Briefcase,
  ArrowRight,
  CheckCircle2,
  X,
  Users,
  Clock,
  Award,
  Instagram,
} from "lucide-react";
import { useInView } from "../hooks/useInView";

export interface Competency {
  icon: React.ElementType;
  title: string;
  short: string;
  description: string;
  careers: string[];
  color: string;
  image: string;
  objectPosition: string;
  fullDescription: string;
  subjects: string[];
  partners: string[];
  duration: string;
  certification: string;
  waNumber: string;
  waMessage: string;
  instagram: string;
}

export const competencies: Competency[] = [
  {
    icon: Monitor,
    title: "Teknik Jaringan Komputer dan Telekomunikasi",
    short: "TJKT",
    description:
      "Mempelajari instalasi, konfigurasi, dan manajemen jaringan komputer serta sistem telekomunikasi modern sesuai standar industri.",
    careers: [
      "Network Engineer",
      "IT Support",
      "System Administrator",
      "Cybersecurity Analyst",
    ],
    color: "from-blue-500 to-cyan-500",
    image: "/images/Jurusan/TKJ.JPG",
    objectPosition: "center center",
    fullDescription:
      "Kompetensi Keahlian Teknik Jaringan Komputer dan Telekomunikasi (TJKT) mempersiapkan siswa untuk menjadi tenaga ahli di bidang teknologi informasi dan jaringan. Siswa akan mempelajari cara merancang, membangun, mengkonfigurasi, dan memelihara infrastruktur jaringan komputer mulai dari skala kecil hingga enterprise. Kurikulum dirancang berdasarkan kebutuhan industri IT terkini dengan pendekatan Teaching Factory yang memberikan pengalaman kerja nyata.",
    subjects: [
      "Instalasi Jaringan LAN/WAN",
      "Konfigurasi Router & Switch",
      "Administrasi Server Linux & Windows",
      "Keamanan Jaringan (Cybersecurity)",
      "Cloud Computing & Virtualisasi",
      "Pemrograman Dasar & Web",
    ],
    partners: [
      "PT. Telkom Indonesia",
      "Cisco Networking Academy",
      "Microsoft Imagine Academy",
      "CompTIA",
    ],
    duration: "3 Tahun",
    certification: "MikroTik MTCNA, Cisco CCNA, CompTIA Network+",
    waNumber: "6285117018005",
    waMessage:
      "Halo, saya tertarik mendaftar di jurusan TJKT (Teknik Jaringan Komputer dan Telekomunikasi) SMK Widya Nusantara. Mohon informasi lebih lanjut mengenai pendaftaran. Terima kasih.",
    instagram: "https://www.instagram.com/tkjwinus_official1?igsh=dGN0dnl0OTQ2OXA=", // ← ganti link
  },
  {
    icon: Car,
    title: "Teknik Otomotif",
    short: "TO",
    description:
      "Menguasai teknologi perawatan, perbaikan, dan modifikasi kendaraan bermotor dengan peralatan dan standar industri terkini.",
    careers: [
      "Mechanic",
      "Service Advisor",
      "Quality Inspector",
      "Automotive Technician",
    ],
    color: "from-red-500 to-orange-500",
    image: "/images/Jurusan/TO.JPG",
    objectPosition: "center center",
    fullDescription:
      "Kompetensi Keahlian Teknik Otomotif (TO) membekali siswa dengan pengetahuan dan keterampilan di bidang perawatan, perbaikan, dan modifikasi kendaraan bermotor roda dua dan empat. Dengan bengkel berstandar industri dan peralatan diagnostik modern, siswa mendapatkan pengalaman hands-on yang langsung applicable di dunia kerja. Program ini juga mencakup teknologi kendaraan hybrid dan listrik sebagai persiapan masa depan.",
    subjects: [
      "Perawatan & Perbaikan Engine",
      "Sistem Kelistrikan Kendaraan",
      "Teknologi Injeksi & ECU",
      "Chasis & Suspensi",
      "Teknologi Kendaraan Hybrid",
      "Manajemen Bengkel Otomotif",
    ],
    partners: [
      "Astra International",
      "Toyota Indonesia",
      "Honda Motor",
      "Suzuki Indonesia",
    ],
    duration: "3 Tahun",
    certification: "Sertifikasi BNSP Otomotif, TOYOTA Certification",
    waNumber: "6285117018005",
    waMessage:
      "Halo, saya tertarik mendaftar di jurusan TO (Teknik Otomotif) SMK Widya Nusantara. Mohon informasi lebih lanjut mengenai pendaftaran. Terima kasih.",
    instagram: "https://www.instagram.com/tbsmsmkwinus?igsh=ZWZpeHhmeXpxbWxk", // ← ganti link
  },
  {
    icon: Calculator,
    title: "Akuntansi Keuangan Lembaga",
    short: "AKL",
    description:
      "Mengembangkan keahlian pengelolaan keuangan, pembukuan, dan pelaporan keuangan lembaga sesuai standar akuntansi nasional.",
    careers: ["Akuntan", "Staff Keuangan", "Tax Consultant", "Auditor"],
    color: "from-emerald-500 to-teal-500",
    image: "/images/Jurusan/AKL.JPG",
    objectPosition: "center 35%",
    fullDescription:
      "Kompetensi Keahlian Akuntansi Keuangan Lembaga (AKL) mempersiapkan siswa menjadi tenaga profesional di bidang akuntansi dan keuangan. Siswa akan menguasai prinsip-prinsip akuntansi, penyusunan laporan keuangan, perpajakan, dan penggunaan software akuntansi modern. Program ini dirancang agar lulusan dapat langsung bekerja di perusahaan, kantor akuntan publik, atau lembaga keuangan.",
    subjects: [
      "Akuntansi Dasar & Lanjutan",
      "Akuntansi Keuangan Lembaga",
      "Perpajakan",
      "Aplikasi Perkantoran & MYOB",
      "Audit & Pengendalian Internal",
      "Dasar-Dasar Bisnis & Kewirausahaan",
    ],
    partners: [
      "Kantor Akuntan Publik Big4",
      "Bank BRI",
      "Direktorat Jenderal Pajak",
      "IKPI",
    ],
    duration: "3 Tahun",
    certification: "Sertifikasi BNSP Akuntansi, MYOB Certification",
    waNumber: "6285117018005",
    waMessage:
      "Halo, saya tertarik mendaftar di jurusan AKL (Akuntansi Keuangan Lembaga) SMK Widya Nusantara. Mohon informasi lebih lanjut mengenai pendaftaran. Terima kasih.",
    instagram: "https://www.instagram.com/akuntansiwinusofficial?igsh=MTBiMDMwOWZlZ2x5ag==", // ← ganti link
  },
  {
    icon: Briefcase,
    title: "Manajemen Perkantoran dan Layanan Bisnis",
    short: "MPLB",
    description:
      "Membekali siswa dengan keterampilan manajemen perkantoran modern, administrasi, dan layanan bisnis profesional.",
    careers: [
      "Sekretaris",
      "Admin Officer",
      "Office Manager",
      "Business Assistant",
    ],
    color: "from-purple-500 to-pink-500",
    image: "/images/Jurusan/MPLB.JPG",
    objectPosition: "center 43%",
    fullDescription:
      "Kompetensi Keahlian Manajemen Perkantoran dan Layanan Bisnis (MPLB) mencetak siswa menjadi tenaga administrasi dan manajemen perkantoran yang profesional. Siswa akan menguasai keterampilan kearsipan, korespondensi, manajemen rapat, event management, serta penggunaan teknologi perkantoran modern. Lulusan siap bekerja di berbagai sektor industri sebagai sekretaris, admin, atau office manager.",
    subjects: [
      "Kearsipan & Korespondensi",
      "Manajemen Perkantoran",
      "Teknologi Informasi Perkantoran",
      "Komunikasi Bisnis",
      "Manajemen Rapat & Event",
      "Pelayanan Pelanggan & Public Relations",
    ],
    partners: [
      "Astra International",
      "Sekretaris Profesional Indonesia",
      "Perhumas",
      "Various Corporate Partners",
    ],
    duration: "3 Tahun",
    certification: "Sertifikasi BNSP Administrasi Perkantoran, ICDL",
    waNumber: "6285117018005",
    waMessage:
      "Halo, saya tertarik mendaftar di jurusan MPLB (Manajemen Perkantoran dan Layanan Bisnis) SMK Widya Nusantara. Mohon informasi lebih lanjut mengenai pendaftaran. Terima kasih.",
    instagram: "https://www.instagram.com/perkantoran_smk_winus?igsh=dnNwaXhpYzZ6Z3Rh", // ← ganti link
  },
];

interface Props {
  openJurusanShort?: string | null;
  onJurusanOpened?: () => void;
}

export default function CompetencySection({
  openJurusanShort,
  onJurusanOpened,
}: Props) {
  const [selectedJurusan, setSelectedJurusan] = useState<Competency | null>(
    null,
  );
  const { ref, isInView } = useInView(0.1);

  useEffect(() => {
    if (openJurusanShort) {
      const found = competencies.find((c) => c.short === openJurusanShort);
      if (found) setSelectedJurusan(found);
      onJurusanOpened?.();
    }
  }, [openJurusanShort]);

  const handleDaftar = (comp: Competency) => {
    const encodedMessage = encodeURIComponent(comp.waMessage);
    const waUrl = `https://wa.me/${comp.waNumber}?text=${encodedMessage}`;
    window.open(waUrl, "_blank");
  };

  return (
    <section
      id="jurusan"
      className="relative py-16 sm:py-20 lg:py-28 bg-white overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-navy-200 to-transparent" />
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-royal-500/5 rounded-full blur-3xl" />

      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-royal-500/10 text-royal-500 font-inter font-semibold text-xs sm:text-sm rounded-full mb-4">
            Kompetensi Keahlian
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-poppins font-bold text-navy-900 mb-3 sm:mb-4">
            Jurusan Unggulan
          </h2>
          <p className="text-gray-500 font-inter max-w-2xl mx-auto text-sm sm:text-base">
            Empat kompetensi keahlian yang dirancang untuk mempersiapkan siswa
            menjadi tenaga profesional siap kerja
          </p>
          <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-royal-500 to-gold-500 mx-auto rounded-full mt-4 sm:mt-6" />
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
          {competencies.map((comp, i) => (
            <motion.div
              key={comp.short}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.15 }}
              className="group relative rounded-2xl sm:rounded-3xl overflow-hidden border border-gray-100 hover:border-royal-500/20 bg-white hover:shadow-2xl hover:shadow-royal-500/10 transition-all duration-500"
            >
              <div className={`h-1 sm:h-1.5 bg-gradient-to-r ${comp.color}`} />

              <div className="p-5 sm:p-6 lg:p-8">
                <div className="flex items-start gap-3 sm:gap-5 mb-4 sm:mb-6">
                  <div
                    className={`w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-br ${comp.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 flex-shrink-0`}
                  >
                    <comp.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <span
                      className={`inline-block px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full text-[10px] sm:text-xs font-inter font-bold text-white bg-gradient-to-r ${comp.color} mb-1.5 sm:mb-2`}
                    >
                      {comp.short}
                    </span>
                    <h3 className="font-poppins font-bold text-navy-900 text-sm sm:text-base lg:text-lg leading-tight">
                      {comp.title}
                    </h3>
                  </div>
                </div>

                <p className="font-inter text-gray-600 text-xs sm:text-sm leading-relaxed mb-4 sm:mb-6 line-clamp-3">
                  {comp.description}
                </p>

                {/* Prospek Karier */}
                <div className="mb-4 sm:mb-6">
                  <p className="font-poppins font-semibold text-navy-900 text-xs sm:text-sm mb-2 sm:mb-3">
                    Prospek Karier:
                  </p>
                  <div className="grid grid-cols-2 gap-1.5 sm:gap-2">
                    {comp.careers.map((career) => (
                      <div
                        key={career}
                        className="flex items-center gap-1.5 sm:gap-2"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0 text-emerald-500" />
                        <span className="font-inter text-gray-500 text-[10px] sm:text-xs">
                          {career}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between pt-4 sm:pt-6 border-t border-gray-100">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <span className="inline-flex items-center gap-1 sm:gap-1.5 px-2.5 sm:px-3 py-1 sm:py-1.5 bg-emerald-50 text-emerald-600 text-[10px] sm:text-xs font-inter font-semibold rounded-full">
                      <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
                      Industri Ready
                    </span>

                    {/* Tombol Instagram */}
                    <a
                      href={comp.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="inline-flex items-center gap-1 sm:gap-1.5 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full text-[10px] sm:text-xs font-inter font-semibold text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 hover:shadow-md hover:shadow-pink-500/30 transition-all duration-300"
                    >
                      <Instagram className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                      Instagram
                    </a>
                  </div>

                  <button
                    onClick={() => setSelectedJurusan(comp)}
                    className="flex items-center gap-1 sm:gap-1.5 text-royal-500 font-inter font-semibold text-xs sm:text-sm group-hover:gap-2 sm:group-hover:gap-2.5 transition-all duration-300 hover:text-royal-600"
                  >
                    Detail
                    <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Detail Modal */}
      <AnimatePresence>
        {selectedJurusan && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[200] bg-black/70 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4"
            onClick={() => setSelectedJurusan(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 30 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 30 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-2xl sm:rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header Image */}
              <div className="relative h-56 sm:h-72 lg:h-80 overflow-hidden flex-shrink-0">
                <img
                  src={selectedJurusan.image}
                  alt={selectedJurusan.title}
                  className="w-full h-full object-cover"
                  style={{ objectPosition: selectedJurusan.objectPosition }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900/80 via-navy-900/30 to-transparent" />
                <button
                  onClick={() => setSelectedJurusan(null)}
                  className="absolute top-3 right-3 sm:top-4 sm:right-4 w-9 h-9 sm:w-10 sm:h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-white/40 transition-colors"
                >
                  <X className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                </button>
                <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6">
                  <span
                    className={`inline-block px-3 py-1 rounded-full text-xs font-inter font-bold text-white bg-gradient-to-r ${selectedJurusan.color} mb-2`}
                  >
                    {selectedJurusan.short}
                  </span>
                  <h3 className="text-white font-poppins font-bold text-lg sm:text-xl lg:text-2xl leading-tight">
                    {selectedJurusan.title}
                  </h3>
                </div>
              </div>

              {/* Content */}
              <div className="p-4 sm:p-6 lg:p-8">
                {/* Quick Info */}
                <div className="grid grid-cols-3 gap-3 sm:gap-4 mb-6">
                  <div className="text-center p-3 sm:p-4 rounded-xl bg-gray-50">
                    <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-royal-500 mx-auto mb-1.5" />
                    <p className="font-poppins font-bold text-navy-900 text-xs sm:text-sm">
                      {selectedJurusan.duration}
                    </p>
                    <p className="font-inter text-gray-500 text-[10px] sm:text-xs">
                      Durasi
                    </p>
                  </div>
                  <div className="text-center p-3 sm:p-4 rounded-xl bg-gray-50">
                    <Award className="w-4 h-4 sm:w-5 sm:h-5 text-gold-500 mx-auto mb-1.5" />
                    <p className="font-poppins font-bold text-navy-900 text-[10px] sm:text-xs leading-tight">
                      {selectedJurusan.certification.split(",")[0]}
                    </p>
                    <p className="font-inter text-gray-500 text-[10px] sm:text-xs">
                      Sertifikasi
                    </p>
                  </div>
                  <div className="text-center p-3 sm:p-4 rounded-xl bg-gray-50">
                    <Users className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-500 mx-auto mb-1.5" />
                    <p className="font-poppins font-bold text-navy-900 text-xs sm:text-sm">
                      {selectedJurusan.partners.length}+
                    </p>
                    <p className="font-inter text-gray-500 text-[10px] sm:text-xs">
                      Mitra Industri
                    </p>
                  </div>
                </div>

                {/* Description */}
                <div className="mb-6">
                  <h4 className="font-poppins font-bold text-navy-900 text-sm sm:text-base mb-2">
                    Deskripsi Program
                  </h4>
                  <p className="font-inter text-gray-600 text-xs sm:text-sm leading-relaxed">
                    {selectedJurusan.fullDescription}
                  </p>
                </div>

                {/* Mata Pelajaran */}
                <div className="mb-6">
                  <h4 className="font-poppins font-bold text-navy-900 text-sm sm:text-base mb-3">
                    Mata Pelajaran Produktif
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {selectedJurusan.subjects.map((subject) => (
                      <div
                        key={subject}
                        className="flex items-center gap-2 p-2 sm:p-2.5 rounded-lg bg-gray-50"
                      >
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                        <span className="font-inter text-gray-700 text-xs sm:text-sm">
                          {subject}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Mitra Industri */}
                <div className="mb-6">
                  <h4 className="font-poppins font-bold text-navy-900 text-sm sm:text-base mb-3">
                    Mitra Industri
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedJurusan.partners.map((partner) => (
                      <span
                        key={partner}
                        className="px-3 py-1.5 bg-royal-500/10 text-royal-500 font-inter font-medium text-xs sm:text-sm rounded-full"
                      >
                        {partner}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Prospek Karier */}
                <div className="mb-6">
                  <h4 className="font-poppins font-bold text-navy-900 text-sm sm:text-base mb-3">
                    Prospek Karier
                  </h4>
                  <div className="grid grid-cols-2 gap-2">
                    {selectedJurusan.careers.map((career) => (
                      <div key={career} className="flex items-center gap-2">
                        <div
                          className={`w-2 h-2 rounded-full bg-gradient-to-r ${selectedJurusan.color}`}
                        />
                        <span className="font-inter text-gray-700 text-xs sm:text-sm">
                          {career}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <div className="pt-4 sm:pt-6 border-t border-gray-100 flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={() => handleDaftar(selectedJurusan)}
                    className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-gold-500 to-gold-400 text-navy-900 font-poppins font-bold text-sm rounded-full hover:shadow-lg hover:shadow-gold-500/30 transition-all duration-300"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-4 h-4"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    Daftar Jurusan {selectedJurusan.short}
                  </button>

                  {/* Tombol Instagram di modal */}
                  <a
                    href={selectedJurusan.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-poppins font-bold text-sm rounded-full hover:shadow-lg hover:shadow-pink-500/30 transition-all duration-300"
                  >
                    <Instagram className="w-4 h-4" />
                    Instagram
                  </a>

                  <button
                    onClick={() => setSelectedJurusan(null)}
                    className="px-6 py-3 bg-gray-100 text-gray-700 font-poppins font-semibold text-sm rounded-full hover:bg-gray-200 transition-colors"
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
