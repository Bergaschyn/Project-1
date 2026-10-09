import { motion, AnimatePresence } from "framer-motion";
import { X, Monitor, Car, Calculator, Briefcase, ArrowRight } from "lucide-react";

const jurusanList = [
  {
    icon: Monitor,
    short: "TJKT",
    title: "Teknik Jaringan Komputer dan Telekomunikasi",
    color: "from-blue-500 to-cyan-500",
    desc: "Jaringan, IT Support, Cybersecurity",
  },
  {
    icon: Car,
    short: "TO",
    title: "Teknik Otomotif",
    color: "from-red-500 to-orange-500",
    desc: "Mekanik, Teknisi Kendaraan",
  },
  {
    icon: Calculator,
    short: "AKL",
    title: "Akuntansi Keuangan Lembaga",
    color: "from-emerald-500 to-teal-500",
    desc: "Akuntan, Staff Keuangan, Auditor",
  },
  {
    icon: Briefcase,
    short: "MPLB",
    title: "Manajemen Perkantoran dan Layanan Bisnis",
    color: "from-purple-500 to-pink-500",
    desc: "Sekretaris, Admin Officer",
  },
];

interface Props {
  isOpen: boolean;
  onClose: () => void;
  onSelectJurusan: (short: string) => void;
}

export default function JelajahiJurusanPanel({ isOpen, onClose, onSelectJurusan }: Props) {
  return (
    <AnimatePresence>
      {isOpen && [
        <motion.div
          key="backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[150] bg-black/40 backdrop-blur-sm"
          onClick={onClose}
        />,

        <motion.div
          key="panel"
          initial={{ x: "100%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: "100%", opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="fixed top-0 right-0 h-full z-[160] w-full max-w-sm bg-white shadow-2xl flex flex-col"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100">
            <div>
              <p className="text-xs font-inter text-gray-400 uppercase tracking-widest mb-0.5">
                Kompetensi Keahlian
              </p>
              <h3 className="font-poppins font-bold text-navy-900 text-lg">
                Pilih Jurusan
              </h3>
            </div>
            <button
              onClick={onClose}
              className="w-9 h-9 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
            >
              <X className="w-4 h-4 text-gray-600" />
            </button>
          </div>

          {/* List */}
          <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3">
            {jurusanList.map((j, i) => (
              <motion.button
                key={j.short}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.05 * i, duration: 0.25 }}
                onClick={() => {
                  onSelectJurusan(j.short);
                  onClose();
                }}
                className="w-full text-left group flex items-center gap-4 p-4 rounded-2xl border border-gray-100 hover:border-royal-500/30 hover:shadow-lg hover:shadow-royal-500/10 bg-white transition-all duration-300"
              >
                {/* Icon */}
                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-br ${j.color} flex items-center justify-center flex-shrink-0 shadow-md group-hover:scale-110 transition-transform duration-300`}
                >
                  <j.icon className="w-6 h-6 text-white" />
                </div>

                {/* Text */}
                <div className="flex-1 min-w-0">
                  <span
                    className={`inline-block px-2 py-0.5 rounded-full text-[10px] font-inter font-bold text-white bg-gradient-to-r ${j.color} mb-1`}
                  >
                    {j.short}
                  </span>
                  <p className="font-poppins font-semibold text-navy-900 text-sm leading-snug line-clamp-2">
                    {j.title}
                  </p>
                  <p className="font-inter text-gray-400 text-xs mt-0.5">
                    {j.desc}
                  </p>
                </div>

                {/* Arrow */}
                <ArrowRight className="w-4 h-4 text-gray-300 group-hover:text-royal-500 group-hover:translate-x-1 transition-all duration-300 flex-shrink-0" />
              </motion.button>
            ))}
          </div>

          {/* Footer */}
          <div className="px-6 py-4 border-t border-gray-100 bg-gray-50">
            <p className="text-xs font-inter text-gray-400 text-center">
              Klik jurusan untuk melihat detail lengkap
            </p>
          </div>
        </motion.div>,
      ]}
    </AnimatePresence>
  );
}
