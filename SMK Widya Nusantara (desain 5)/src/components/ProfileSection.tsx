import { motion } from "framer-motion";
import { Award, Users, Factory, Handshake } from "lucide-react";
import { useInView } from "../hooks/useInView";

const highlights = [
  { icon: Award, label: "Akreditasi A", desc: "Terakreditasi Unggul" },
  {
    icon: Users,
    label: "Guru Profesional",
    desc: "Tenaga Pendidik Bersertifikat",
  },
  {
    icon: Factory,
    label: "Teaching Factory",
    desc: "Pembelajaran Berbasis Industri",
  },
  { icon: Handshake, label: "Kerja Sama Industri", desc: "20+ Mitra Industri" },
];

const values = [
  {
    title: "Disiplin",
    desc: "Membentuk karakter siswa yang tertib dan bertanggung jawab",
    color: "from-royal-500 to-royal-400",
  },
  {
    title: "Kompetensi",
    desc: "Menguasai keahlian sesuai standar industri nasional",
    color: "from-gold-500 to-gold-400",
  },
  {
    title: "Integritas",
    desc: "Menjunjung tinggi kejujuran dan etika profesional",
    color: "from-emerald-500 to-emerald-400",
  },
  {
    title: "Teknologi",
    desc: "Melek digital dan siap menghadapi revolusi industri 4.0",
    color: "from-purple-500 to-purple-400",
  },
];

export default function ProfileSection() {
  const { ref, isInView } = useInView(0.1);

  return (
    <section
      id="profil"
      className="relative py-16 sm:py-20 lg:py-28 bg-white overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-navy-200 to-transparent" />
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-royal-500/5 rounded-full blur-3xl" />
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gold-500/5 rounded-full blur-3xl" />

      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-royal-500/10 text-royal-500 font-inter font-semibold text-xs sm:text-sm rounded-full mb-4">
            Profil Sekolah
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-poppins font-bold text-navy-900 mb-4">
            Mengenal Lebih Dekat
          </h2>
          <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-royal-500 to-gold-500 mx-auto rounded-full" />
        </motion.div>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center mb-14 sm:mb-20">
          {/* Left - Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl shadow-navy-900/10">
              <img
                src="/images/Sejarah & Visi Misi.jpg"
                alt="Gedung SMK Widya Nusantara"
                className="w-full h-[280px] sm:h-[360px] lg:h-[480px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-900/30 to-transparent" />
            </div>
            <div className="absolute -bottom-3 sm:-bottom-4 -right-3 sm:-right-4 w-24 sm:w-32 h-24 sm:h-32 bg-gradient-to-br from-royal-500 to-royal-600 rounded-2xl -z-10" />
            <div className="absolute -top-3 sm:-top-4 -left-3 sm:-left-4 w-16 sm:w-24 h-16 sm:h-24 bg-gradient-to-br from-gold-500/20 to-gold-400/20 rounded-2xl -z-10" />
            <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 glass-card rounded-xl sm:rounded-2xl px-3 sm:px-5 py-2 sm:py-3">
              <p className="text-white font-poppins font-bold text-sm sm:text-lg">
                Akreditasi A
              </p>
              <p className="text-white/70 text-xs sm:text-sm font-inter">
                BAN-S/M
              </p>
            </div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-poppins font-bold text-navy-900 mb-4 sm:mb-6">
              Sejarah & Visi Misi
            </h3>
            <p className="text-gray-600 font-inter leading-relaxed text-sm sm:text-base mb-4 sm:mb-6">
              SMK Widya Nusantara didirikan dengan tekad kuat untuk mencetak
              sumber daya manusia yang unggul dan berkarakter. Sejak awal
              berdiri, sekolah kami berkomitmen menjadi pusat pendidikan
              kejuruan terdepan di wilayah Bekasi dan sekitarnya.
            </p>
            <p className="text-gray-600 font-inter leading-relaxed text-sm sm:text-base mb-6 sm:mb-8">
              Dengan kurikulum berbasis industri, fasilitas modern, dan tenaga
              pendidik profesional, kami mempersiapkan siswa untuk menjadi
              tenaga kerja terampil yang siap berkontribusi dalam dunia industri
              dan teknologi.
            </p>

            {/* Visi */}
            <div className="mb-4 sm:mb-6 p-4 sm:p-5 rounded-xl sm:rounded-2xl bg-navy-900 text-white">
              <h4 className="font-poppins font-semibold text-gold-400 mb-2 text-sm sm:text-base">
                Visi
              </h4>
              <p className="font-inter text-white/80 text-xs sm:text-sm leading-relaxed">
                Terwujudnya sekolah kejuruan yang menghasilkan lulusan berkarakter, kompeten, profesional, berwawasan lingkungan dan siap menghadapi tantangan dunia kerja global​.
              </p>
            </div>

            {/* Misi */}
            <div className="p-4 sm:p-5 rounded-xl sm:rounded-2xl bg-gradient-to-br from-royal-500/10 to-royal-400/5 border border-royal-500/10">
              <h4 className="font-poppins font-semibold text-royal-500 mb-2 text-sm sm:text-base">
                Misi
              </h4>
              <ul className="font-inter text-gray-600 text-xs sm:text-sm space-y-1.5">
                <li className="flex items-start gap-2">
                  <span className="text-royal-500 mt-1">•</span>Membiasakan aktivitas keagamaan dan penanaman budi​
    pekerti untuk membentuk karakter religius pada siswa  ​
    yang berintegritas​.
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-royal-500 mt-1">•</span>Membimbing dan memfasilitasi siswa meraih prestasi  ​
    optimal di bidang akademik, non akademik, maupun​
    kejuruan melalui pengembangan bakat, minat dan potensi​
    siswa.​
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-royal-500 mt-1">•</span>Membentuk karakter warga sekolah yang peduli terhadap lingkungan
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-royal-500 mt-1">•</span>Memfasilitasi guru dan tenaga kependidikan untuk​
    mengikuti pelatihan, sertifikasi kompetensi dan Pendidikan​
    berkelanjutan guna meningkatkan kualitas pembelajaran ​
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-royal-500 mt-1">•</span>Meningkatkan kapasitas manajemen sekolah dalam​
    membangun jejaring Kerja sama (Link and Match) dengan​
    Dunia Usaha dan Dunia Industri (DUDI) untuk penyaluran​
    Prakerin dan keterserapan lulusan​
                </li>
              </ul>
            </div>
          </motion.div>
        </div>

        {/* Values */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6 mb-10 sm:mb-16">
          {values.map((val, i) => (
            <motion.div
              key={val.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.6 + i * 0.1 }}
              className="group p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-white border border-gray-100 hover:border-royal-500/20 shadow-sm hover:shadow-xl hover:shadow-royal-500/5 transition-all duration-500 hover:-translate-y-1"
            >
              <div
                className={`w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-gradient-to-br ${val.color} flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300`}
              >
                <span className="text-white font-poppins font-bold text-base sm:text-lg">
                  {val.title[0]}
                </span>
              </div>
              <h4 className="font-poppins font-bold text-navy-900 text-sm sm:text-lg mb-1 sm:mb-2">
                {val.title}
              </h4>
              <p className="font-inter text-gray-500 text-xs sm:text-sm leading-relaxed">
                {val.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Highlight Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
          {highlights.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.8 + i * 0.1 }}
              className="glass-card-light rounded-xl sm:rounded-2xl p-4 sm:p-5 text-center hover:shadow-xl hover:shadow-royal-500/5 transition-all duration-500 group border border-white/50"
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 mx-auto mb-2 sm:mb-3 rounded-xl sm:rounded-2xl bg-gradient-to-br from-navy-700 to-navy-800 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-navy-900/20">
                <item.icon className="w-5 h-5 sm:w-6 sm:h-6 text-gold-400" />
              </div>
              <p className="font-poppins font-bold text-navy-900 text-xs sm:text-sm">
                {item.label}
              </p>
              <p className="font-inter text-gray-500 text-[10px] sm:text-xs mt-0.5 sm:mt-1">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
