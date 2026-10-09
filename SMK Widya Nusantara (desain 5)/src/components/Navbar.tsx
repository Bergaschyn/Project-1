import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import SPMBForm from "./SPMBForm";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Profil", href: "#profil" },
  { label: "Sambutan", href: "#sambutan" },
  { label: "Guru", href: "#guru" },
  { label: "Jurusan", href: "#jurusan" },
  { label: "Fasilitas", href: "#fasilitas" },
  { label: "Galeri", href: "#galeri" },
  { label: "Berita", href: "#berita" },
  { label: "Alumni", href: "#alumni" },
  { label: "Kontak", href: "#kontak" },
  { label: "Mikrotik Academy", href: "/mikrotik-academy", isExternal: false },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [spmbOpen, setSpmbOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const onLowongan = location.pathname === "/lowongan";
  // Halaman lowongan berlatar terang, jadi navbar harus solid dari awal
  const solid = scrolled || onLowongan;

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen || spmbOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen, spmbOpen]);

  const openSPMB = () => {
    setMobileOpen(false);
    setSpmbOpen(true);
  };

  const handleClick = (href: string) => {
    setMobileOpen(false);
    if (href.startsWith("#")) {
      // Kalau sudah di halaman utama, langsung scroll
      if (location.pathname === "/") {
        const el = document.querySelector(href);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      } else {
        // Kalau di halaman lain (misal /lowongan), navigate ke / dulu
        // lalu scroll setelah halaman load
        navigate("/");
        setTimeout(() => {
          const el = document.querySelector(href);
          if (el) el.scrollIntoView({ behavior: "smooth" });
        }, 300);
      }
    } else {
      navigate(href);
      window.scrollTo(0, 0);
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
          solid
            ? "bg-navy-900/95 backdrop-blur-xl shadow-lg shadow-navy-950/50 border-b border-white/5"
            : "bg-transparent"
        }`}
      >
        <div className="w-full max-w-[1800px] mx-auto px-4 sm:px-6 xl:px-8 2xl:px-12">
          <div className="flex items-center justify-between gap-4 2xl:gap-8 h-16 lg:h-20">
            {/* Logo */}
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                handleClick("#home");
              }}
              className="flex items-center gap-3 group shrink-0"
            >
              <img
                src="/images/Logo-Winus.jpeg"
                alt="Logo SMK Widya Nusantara"
                className="w-10 h-10 object-contain"
              />
              <div className="block">
                <p className="text-white font-poppins font-semibold text-xs lg:text-sm leading-tight whitespace-nowrap">
                  SMK Widya Nusantara
                </p>
                <p className="text-navy-300 text-xs font-inter">Bekasi</p>
              </div>
            </a>

            {/* Desktop Links */}
            <div className="hidden xl:flex flex-1 items-center justify-center gap-0.5 2xl:gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleClick(link.href);
                  }}
                  className={`px-2 2xl:px-3 py-2 text-[11px] 2xl:text-xs font-inter font-medium transition-colors duration-200 rounded-lg hover:bg-white/5 whitespace-nowrap ${
                    link.label === "Mikrotik Academy"
                      ? "text-gold-400 hover:text-gold-300 font-semibold"
                      : "text-white/70 hover:text-white"
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Tombol Desktop */}
            <div className="hidden xl:flex shrink-0 items-center gap-2 2xl:gap-3">
              <a
                href="/lowongan"
                onClick={(e) => {
                  e.preventDefault();
                  handleClick("/lowongan");
                }}
                className={`px-4 2xl:px-5 py-2 2xl:py-2.5 border border-gold-400/60 text-gold-400 font-poppins font-semibold text-xs 2xl:text-sm rounded-full hover:bg-gold-400/10 hover:border-gold-400 transition-all duration-300 whitespace-nowrap ${
                  onLowongan ? "bg-gold-400/15 border-gold-400" : ""
                }`}
              >
                Lowongan Kerja
              </a>
              <button
                type="button"
                onClick={openSPMB}
                className="px-4 2xl:px-5 py-2 2xl:py-2.5 bg-gradient-to-r from-gold-500 to-gold-400 text-navy-900 font-poppins font-semibold text-xs 2xl:text-sm rounded-full hover:shadow-lg hover:shadow-gold-500/30 transition-all duration-300 hover:scale-105 whitespace-nowrap"
              >
                SPMB Online
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? "Tutup menu" : "Buka menu"}
              className="xl:hidden w-10 h-10 flex items-center justify-center text-white rounded-lg hover:bg-white/10 transition-colors"
            >
              {mobileOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[99] bg-navy-900/98 backdrop-blur-xl xl:hidden"
          >
            <div className="pt-24 px-6 pb-8 h-full overflow-y-auto">
              <div className="space-y-1">
                {navLinks.map((link, i) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    onClick={(e) => {
                      e.preventDefault();
                      handleClick(link.href);
                    }}
                    className={`block px-4 py-3 text-lg font-poppins font-medium hover:bg-white/5 rounded-xl transition-all duration-200 ${
                      link.label === "Mikrotik Academy"
                        ? "text-gold-400 hover:text-gold-300 font-semibold"
                        : "text-white/80 hover:text-white"
                    }`}
                  >
                    {link.label}
                  </motion.a>
                ))}
              </div>
              <div className="mt-8 pt-8 border-t border-white/10 space-y-3">
                <a
                  href="/lowongan"
                  onClick={(e) => {
                    e.preventDefault();
                    handleClick("/lowongan");
                  }}
                  className="block w-full text-center px-6 py-4 border border-gold-400/60 text-gold-400 font-poppins font-bold text-base rounded-2xl hover:bg-gold-400/10 transition-all duration-300"
                >
                  Lowongan Kerja
                </a>
                <button
                  type="button"
                  onClick={openSPMB}
                  className="block w-full text-center px-6 py-4 bg-gradient-to-r from-gold-500 to-gold-400 text-navy-900 font-poppins font-bold text-base rounded-2xl hover:shadow-lg hover:shadow-gold-500/30 transition-all duration-300"
                >
                  SPMB Online
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Formulir SPMB */}
      <SPMBForm open={spmbOpen} onClose={() => setSpmbOpen(false)} />
    </>
  );
}