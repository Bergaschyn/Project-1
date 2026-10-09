import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { useState } from "react";

export default function WhatsAppButton() {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 2.5, type: "spring", stiffness: 200 }}
      className="fixed bottom-6 right-6 z-50"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <a
        href="https://wa.me/6285117018005?text=Halo%2C%20saya%20ingin%20bertanya%20tentang%20SMK%20Widya%20Nusantara%20Bekasi"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-3 group"
      >
        <AnimatePresence>
          {hovered && (
            <motion.span
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 10 }}
              className="bg-white text-navy-900 px-4 py-2 rounded-full text-sm font-semibold shadow-lg whitespace-nowrap"
            >
              Chat WhatsApp
            </motion.span>
          )}
        </AnimatePresence>
        <div className="w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg shadow-[#25D366]/30 hover:shadow-[#25D366]/50 transition-all duration-300 hover:scale-110">
          <MessageCircle className="w-6 h-6 text-white" fill="white" />
        </div>
      </a>
    </motion.div>
  );
}
