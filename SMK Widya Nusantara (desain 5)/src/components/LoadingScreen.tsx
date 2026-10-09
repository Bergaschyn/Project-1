import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/Logo-Winus.jpeg";

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] bg-navy-900 flex items-center justify-center"
        >
          <div className="text-center">
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="mb-6 flex items-center justify-center"
            >
              <img
                src="/images/Logo-Winus.jpeg"
                alt="Logo SMK Widya Nusantara"
                className="w-28 h-28 mx-auto object-contain drop-shadow-lg"
              />
            </motion.div>
            <motion.h2
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-white font-poppins font-semibold text-lg tracking-wide"
            >
              SMK Widya Nusantara
            </motion.h2>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ delay: 0.7, duration: 1.2, ease: "easeInOut" }}
              className="h-0.5 bg-gradient-to-r from-transparent via-gold-500 to-transparent mt-6 mx-auto max-w-[120px]"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
