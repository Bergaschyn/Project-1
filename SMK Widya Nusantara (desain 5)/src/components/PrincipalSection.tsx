import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { useInView } from "../hooks/useInView";

export default function PrincipalSection() {
  const { ref, isInView } = useInView(0.1);

  return (
    <section
      id="sambutan"
      className="relative py-16 sm:py-20 lg:py-28 bg-gradient-navy overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold-500/30 to-transparent" />
      <div className="absolute top-20 right-10 w-72 h-72 bg-royal-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-72 h-72 bg-gold-500/5 rounded-full blur-3xl" />

      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-gold-500/10 text-gold-400 font-inter font-semibold text-xs sm:text-sm rounded-full mb-4">
            Sambutan
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-poppins font-bold text-white mb-4">
            Sambutan Kepala Sekolah
          </h2>
          <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-gold-500 to-gold-400 mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-16 items-center">
          {/* Left - Photo */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2 flex justify-center"
          >
            <div className="relative">
              <div className="relative w-56 sm:w-64 lg:w-72 h-72 sm:h-80 lg:h-96 xl:h-[440px] rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl shadow-black/30">
                <img
                  src="/images/Pimpinan/Kepala-Sekolah.png"
                  alt="Kepala Sekolah SMK Widya Nusantara"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900/60 via-transparent to-transparent" />
              </div>
              <div className="absolute -inset-2 sm:-inset-3 rounded-2xl sm:rounded-3xl border-2 border-gold-500/20 -z-10" />
              <div className="absolute -inset-4 sm:-inset-6 rounded-2xl sm:rounded-3xl border border-gold-500/10 -z-20" />
              <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6 glass-card rounded-xl sm:rounded-2xl p-3 sm:p-4">
                <p className="text-white font-poppins font-bold text-xs sm:text-base">
                  Endang Lestari, S.Pd.,Gr
                </p>
                <p className="text-gold-400 font-inter text-xs sm:text-sm">
                  Kepala Sekolah
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:col-span-3"
          >
            <div className="mb-4 sm:mb-6">
              <Quote className="w-8 sm:w-12 h-8 sm:h-12 text-gold-500/30" />
            </div>

            <div className="space-y-3 sm:space-y-5 font-inter text-white/80 leading-relaxed text-sm sm:text-base lg:text-lg">
              <p>Assalamu'alaikum Warahmatullahi Wabarakatuh,</p>
              <p>
                Puji syukur kita panjatkan kehadirat Allah SWT atas segala
                rahmat dan karunia-Nya. SMK Widya Nusantara berkomitmen
                menciptakan lulusan yang kompeten, berkarakter, serta mampu
                bersaing di dunia industri dan teknologi modern.
              </p>
              <p>
                Kami percaya bahwa pendidikan kejuruan bukan sekadar transfer
                ilmu, melainkan proses pembentukan karakter dan pemberdayaan
                potensi setiap peserta didik. Dengan kurikulum berbasis
                industri, fasilitas modern, dan tenaga pendidik profesional,
                kami terus berinovasi untuk memberikan yang terbaik.
              </p>
              <p>
                Melalui kerja sama strategis dengan dunia usaha dan dunia
                industri, kami memastikan setiap lulusan memiliki kompetensi
                yang dibutuhkan pasar kerja, serta mentalitas yang tangguh dan
                adaptif terhadap perkembangan zaman.
              </p>
            </div>

            <div className="mt-6 sm:mt-10 pt-6 sm:pt-8 border-t border-white/10">
              <p className="text-white/50 font-inter text-xs sm:text-sm mb-1">
                Hormat saya,
              </p>
              <p className="font-poppins font-bold text-white text-lg sm:text-xl">
                Endang Lestari, S.Pd.,Gr
              </p>
              <p className="text-gold-400 font-inter text-xs sm:text-sm">
                Kepala SMK Widya Nusantara
              </p>
            </div>

            <div className="mt-6 sm:mt-8 p-4 sm:p-5 rounded-xl sm:rounded-2xl bg-white/5 border border-white/5">
              <p className="font-inter text-white/60 text-xs sm:text-sm italic leading-relaxed">
                "Pendidikan adalah paspor menuju masa depan, karena hari esok
                adalah milik mereka yang mempersiapkannya hari ini."
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
