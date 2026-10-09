import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn, ChevronLeft, ChevronRight } from "lucide-react";
import { useInView } from "../hooks/useInView";

const galleryItems = [
  {
    src: "/images/Galeri/TJKT1.jpg",
    title: "Kegiatan Praktikum TJKT",
    category: "Akademik",
  },
  {
    src: "/images/Galeri/TO2.jpg",
    title: "Praktik Siswa di Bengkel",
    category: "Praktik",
  },
  {
    src: "/images/Galeri/DHUHA-BERSAMA.jpeg",
    title: "Kegiatan Shalat Dhuha Bersama",
    category: "Keagamaan",
  },
  {
    src: "/images/Galeri/MPLS.JPG",
    title: "MPLS & Orientasi Siswa Baru",
    category: "Kegiatan",
  },
  {
    src: "/images/Galeri/DANCE.jpg",
    title: "Kegiatan Ekstrakurikuler Dance",
    category: "Ekstrakurikuler",
  },
  {
    src: "/images/Galeri/Gedung.jpg",
    title: "pemandangan gedung sekolah",
    category: "Fasilitas",
  },
  {
    src: "/images/Galeri/PASKIBRA.jpg",
    title: "Kegiatan Paskibra",
    category: "Ekstrakurikuler",
  },
  {
    src: "/images/Galeri/KEPUTRIAN.jpg",
    title: "Kegiatan Keputrian",
    category: "Ekstrakurikuler",
  },
];

const heights = [220, 300, 260, 240, 280, 220, 260, 300];

export default function GallerySection() {
  const [selected, setSelected] = useState<number | null>(null);
  const { ref, isInView } = useInView(0.1);

  const goNext = () => {
    if (selected !== null) {
      setSelected((selected + 1) % galleryItems.length);
    }
  };

  const goPrev = () => {
    if (selected !== null) {
      setSelected((selected - 1 + galleryItems.length) % galleryItems.length);
    }
  };

  return (
    <section
      id="galeri"
      className="relative py-16 sm:py-20 lg:py-28 bg-white overflow-hidden"
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
            Galeri
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-poppins font-bold text-navy-900 mb-3 sm:mb-4">
            Galeri Sekolah
          </h2>
          <p className="text-gray-500 font-inter max-w-2xl mx-auto text-sm sm:text-base">
            Dokumentasi kegiatan belajar, praktik, dan berbagai aktivitas di SMK
            Widya Nusantara
          </p>
          <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-royal-500 to-gold-500 mx-auto rounded-full mt-4 sm:mt-6" />
        </motion.div>

        {/* Masonry Grid */}
        <div className="columns-2 sm:columns-3 lg:columns-4 gap-3 sm:gap-4 space-y-3 sm:space-y-4">
          {galleryItems.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
              className="break-inside-avoid group relative rounded-xl sm:rounded-2xl overflow-hidden cursor-pointer shadow-sm hover:shadow-xl transition-shadow duration-500"
              onClick={() => setSelected(i)}
            >
              <img
                src={item.src}
                alt={item.title}
                className="w-full object-cover transition-transform duration-700 group-hover:scale-110"
                style={{ height: `${Math.round(heights[i] * 0.75)}px` }}
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-900/80 via-navy-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3 sm:p-5">
                <div>
                  <p className="text-white font-poppins font-semibold text-xs sm:text-sm">
                    {item.title}
                  </p>
                  <p className="text-white/60 font-inter text-[10px] sm:text-xs mt-0.5">
                    {item.category}
                  </p>
                </div>
                <ZoomIn className="w-4 h-4 sm:w-5 sm:h-5 text-white/60 ml-auto flex-shrink-0" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selected !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[200] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setSelected(null)}
          >
            {/* Close */}
            <button
              onClick={() => setSelected(null)}
              className="absolute top-4 right-4 sm:top-6 sm:right-6 w-10 h-10 sm:w-12 sm:h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors z-10"
            >
              <X className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
            </button>

            {/* Prev */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                goPrev();
              }}
              className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors z-10"
            >
              <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
            </button>

            {/* Next */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                goNext();
              }}
              className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors z-10"
            >
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
            </button>

            <motion.div
              key={selected}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="max-w-5xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={galleryItems[selected].src}
                alt={galleryItems[selected].title}
                className="w-full max-h-[70vh] sm:max-h-[80vh] object-contain rounded-lg sm:rounded-2xl"
              />
              <div className="text-center mt-3 sm:mt-4">
                <p className="text-white font-poppins font-semibold text-sm sm:text-base">
                  {galleryItems[selected].title}
                </p>
                <p className="text-white/50 font-inter text-xs sm:text-sm">
                  {galleryItems[selected].category}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
