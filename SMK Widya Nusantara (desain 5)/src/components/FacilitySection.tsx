import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "../hooks/useInView";
import Lightbox from "yet-another-react-lightbox";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";

const facilities = [
  {
    title: "Lab Komputer",
    desc: "Dilengkapi 40+ unit PC spesifikasi tinggi, jaringan fiber optic, dan software industri",
    color: "from-blue-500 to-cyan-500",
    image: "/images/Fasilitas/TJKT.jpg",
  },
  {
    title: "Bengkel Otomotif",
    desc: "Fasilitas bengkel modern dengan peralatan standar industri dan kendaraan praktik",
    color: "from-red-500 to-orange-500",
    image: "/images/Fasilitas/Ruang-TO.JPG",
  },
  {
    title: "Ruangan Manajemen",
    desc: "Ruang manajemen dan administrasi sekolah yang nyaman, bersih, dan ber-AC",
    color: "from-purple-500 to-pink-500",
    image: "/images/Fasilitas/MLPB.jpg",
  },
  {
    title: "Bank Mini Akutansi",
    desc: "Ruang akuntansi modern dengan fasilitas komputer, software akuntansi, dan peralatan pendukung",
    color: "from-emerald-500 to-teal-500",
    image: "/images/Fasilitas/Ruang-AKL.jpg",
  },
  {
    title: "Mushola",
    desc: "Mushola bersih dan nyaman untuk ibadah, dilengkapi tempat wudhu",
    color: "from-amber-500 to-yellow-500",
    image: "/images/Fasilitas/Mushalla.jpeg",
  },
  {
    title: "Lapangan Olahraga",
    desc: "Lapangan basket, futsal, dan voli untuk kegiatan olahraga dan upacara",
    color: "from-green-500 to-lime-500",
    image: "/images/Fasilitas/Lapangan1.png",
  },
  {
    title: "Ruang Pendaftaran",
    desc: "Ruang pendaftaran nyaman dengan sistem administrasi digital untuk calon siswa",
    color: "from-indigo-500 to-violet-500",
    image: "/images/Fasilitas/Pendaftaran.png",
  },
  {
    title: "Area Kantin & Cafeteria",
    desc: "Area makan bersih dan nyaman dengan menu sehat, dilengkapi fasilitas Wi-Fi",
    color: "from-sky-500 to-blue-500",
    image: "/images/Fasilitas/Kantin.png",
  },
];

export default function FacilitySection() {
  const { ref, isInView } = useInView(0.1);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const slides = facilities.map((f) => ({
    src: f.image,
  }));

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  return (
    <section
      id="fasilitas"
      className="relative py-16 sm:py-20 lg:py-28 bg-gradient-navy overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold-500/30 to-transparent" />
      <div className="absolute -top-40 -left-40 w-80 h-80 bg-royal-500/5 rounded-full blur-3xl" />
      <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-gold-500/5 rounded-full blur-3xl" />

      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-gold-500/10 text-gold-400 font-inter font-semibold text-xs sm:text-sm rounded-full mb-4">
            Fasilitas
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-poppins font-bold text-white mb-3 sm:mb-4">
            Fasilitas Unggulan
          </h2>
          <p className="text-white/60 font-inter max-w-2xl mx-auto text-sm sm:text-base">
            Fasilitas modern dan lengkap untuk mendukung proses pembelajaran
            berkualitas
          </p>
          <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-gold-500 to-gold-400 mx-auto rounded-full mt-4 sm:mt-6" />
        </motion.div>

        {/* Grid with Images */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-5">
          {facilities.map((facility, i) => (
            <motion.div
              key={facility.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 + i * 0.07 }}
              className="group relative rounded-xl sm:rounded-2xl overflow-hidden cursor-pointer"
              onClick={() => openLightbox(i)}
            >
              {/* Image */}
              <div className="relative h-40 sm:h-52 lg:h-60 xl:h-64 overflow-hidden">
                <img
                  src={facility.image}
                  alt={facility.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-navy-950/40 to-navy-950/10 group-hover:from-navy-950/95 group-hover:via-navy-950/50 transition-all duration-500" />

                {/* Top color bar */}
                <div
                  className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${facility.color}`}
                />

                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-3 sm:p-5">
                  <h3 className="font-poppins font-bold text-white text-sm sm:text-lg mb-1 sm:mb-2">
                    {facility.title}
                  </h3>
                  <p className="font-inter text-white/50 text-[10px] sm:text-sm leading-relaxed line-clamp-2 group-hover:text-white/70 transition-colors duration-300">
                    {facility.desc}
                  </p>
                </div>

                {/* Hover icon */}
                <div
                  className={`absolute top-3 sm:top-4 right-3 sm:right-4 w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-gradient-to-br ${facility.color} flex items-center justify-center shadow-lg opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300`}
                >
                  <svg
                    className="w-4 h-4 sm:w-5 sm:h-5 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                    />
                  </svg>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Feature highlight */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-8 sm:mt-12 grid grid-cols-3 gap-3 sm:gap-5"
        >
          {[
            { value: "40+", label: "Unit Komputer", sub: "Spesifikasi Tinggi" },
            { value: "100%", label: "Ruang Ber-AC", sub: "Nyaman & Sejuk" },
            { value: "24/7", label: "Akses Internet", sub: "Fiber Optic" },
          ].map((item) => (
            <div
              key={item.label}
              className="glass-card rounded-xl sm:rounded-2xl p-4 sm:p-6 text-center"
            >
              <p className="text-2xl sm:text-3xl font-poppins font-bold text-gradient-gold">
                {item.value}
              </p>
              <p className="font-poppins font-semibold text-white text-xs sm:text-base mt-1">
                {item.label}
              </p>
              <p className="font-inter text-white/50 text-[10px] sm:text-sm">
                {item.sub}
              </p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Lightbox — hanya Thumbnails, tanpa Zoom/Slideshow/Captions */}
      <Lightbox
        open={lightboxOpen}
        close={() => setLightboxOpen(false)}
        index={lightboxIndex}
        slides={slides}
        plugins={[Thumbnails]}
        thumbnails={{
          position: "bottom",
          width: 80,
          height: 60,
          border: 2,
          borderRadius: 8,
          padding: 4,
          gap: 8,
        }}
        styles={{
          container: { backgroundColor: "rgba(3, 7, 30, 0.95)" },
          thumbnail: { borderColor: "rgba(255,255,255,0.15)" },
        }}
        carousel={{
          finite: false,
          preload: 2,
        }}
      />
    </section>
  );
}
