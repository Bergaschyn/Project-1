import { useState } from "react";
import { motion } from "framer-motion";
import { Award, BookOpen, Building2, Users } from "lucide-react";
import JelajahiJurusanPanel from "./JelajahiJurusanPanel";
import SPMBForm from "./SPMBForm";

const stats = [
  {
    icon: Award,
    value: "A",
    label: "Akreditasi",
    color: "from-gold-500 to-gold-400",
  },
  {
    icon: BookOpen,
    value: "4",
    label: "Kompetensi Keahlian",
    color: "from-royal-500 to-royal-400",
  },
  {
    icon: Building2,
    value: "20+",
    label: "Mitra Industri",
    color: "from-emerald-500 to-emerald-400",
  },
  {
    icon: Users,
    value: "90%",
    label: "Lulusan Siap Kerja",
    color: "from-purple-500 to-purple-400",
  },
];

interface HeroSectionProps {
  onOpenJurusanDetail?: (short: string) => void;
}

export default function HeroSection({ onOpenJurusanDetail }: HeroSectionProps) {
  const [panelOpen, setPanelOpen] = useState(false);
  const [spmbOpen, setSpmbOpen] = useState(false);

  const handleSelectJurusan = (short: string) => {
    if (onOpenJurusanDetail) {
      onOpenJurusanDetail(short);
    }
  };

  return (
    <>
      <section
        id="home"
        className="relative min-h-screen flex items-center overflow-hidden"
      >
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/images/Footer.JPG"
            alt="SMK Widya Nusantara"
            className="w-full h-full object-cover"
          />
          <div className="hero-overlay absolute inset-0" />
        </div>

        {/* Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 -left-32 w-64 sm:w-96 h-64 sm:h-96 bg-royal-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 -right-32 w-64 sm:w-96 h-64 sm:h-96 bg-gold-500/10 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 sm:pt-36 lg:pt-28 pb-20 sm:pb-24 lg:pb-0 w-full min-h-screen flex items-center">
          <div className="max-w-3xl w-full">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/10 mb-6 sm:mb-8"
            >
              <div className="w-2 h-2 rounded-full bg-gold-500 animate-pulse" />
              <span className="text-xs sm:text-sm font-inter font-medium text-white/90">
                Pendaftaran Sistem Penerimaan Murid Baru 2025/2026
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-poppins font-bold text-white leading-[1.1] mb-4 sm:mb-6"
            >
              <span className="text-gradient-gold">SMK Widya Nusantara</span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-base sm:text-lg lg:text-xl text-white/70 font-inter leading-relaxed mb-8 sm:mb-10 max-w-2xl"
            >
              Membangun Generasi Unggul, Berkarakter, dan Siap Menghadapi Dunia
              Industri Modern
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-6 sm:mb-8"
            >
              {/* Tombol ini sekarang buka formulir SPMB, bukan ke WhatsApp */}
              <button
                type="button"
                onClick={() => setSpmbOpen(true)}
                className="px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-gold-500 to-gold-400 text-navy-900 font-poppins font-semibold text-sm sm:text-base rounded-full hover:shadow-lg hover:shadow-gold-500/30 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
              >
                Daftar Sekarang
                <svg
                  className="w-4 sm:w-5 h-4 sm:h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </button>

              {/* ← Tombol ini sekarang buka panel, bukan scroll */}
              <button
                onClick={() => setPanelOpen(true)}
                className="px-6 sm:px-8 py-3 sm:py-4 bg-white/10 backdrop-blur-md text-white font-poppins font-semibold text-sm sm:text-base rounded-full border border-white/20 hover:bg-white/20 hover:border-white/30 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
              >
                Jelajahi Jurusan
                <svg
                  className="w-4 sm:w-5 h-4 sm:h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4"
            >
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: false, amount: 0.3 }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  className="glass-card rounded-xl sm:rounded-2xl p-3 sm:p-4 text-center hover:bg-white/10 transition-all duration-300 group"
                >
                  <div
                    className={`w-8 h-8 sm:w-10 sm:h-10 mx-auto mb-1.5 sm:mb-2 rounded-lg sm:rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                  >
                    <stat.icon className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                  </div>
                  <p className="text-xl sm:text-2xl font-poppins font-bold text-white">
                    {stat.value}
                  </p>
                  <p className="text-[10px] sm:text-xs font-inter text-white/60 mt-0.5">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ delay: 0.5 }}
          className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-1.5"
          >
            <div className="w-1.5 h-3 rounded-full bg-white/60" />
          </motion.div>
        </motion.div>
      </section>

      {/* Panel Jelajahi Jurusan */}
      <JelajahiJurusanPanel
        isOpen={panelOpen}
        onClose={() => setPanelOpen(false)}
        onSelectJurusan={handleSelectJurusan}
      />

      {/* Formulir SPMB */}
      <SPMBForm open={spmbOpen} onClose={() => setSpmbOpen(false)} />
    </>
  );
}