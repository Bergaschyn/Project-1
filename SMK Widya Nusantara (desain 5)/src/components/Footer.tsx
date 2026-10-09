import { useState } from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  ArrowUp,
  Facebook,
  Instagram,
  Youtube,
} from "lucide-react";
import SPMBForm from "./SPMBForm";

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "Profil Sekolah", href: "#profil" },
  { label: "Kompetensi Keahlian", href: "#jurusan" },
  { label: "Fasilitas", href: "#fasilitas" },
  { label: "Galeri", href: "#galeri" },
  { label: "Berita", href: "#berita" },
  { label: "Pendaftaran Online", href: "#SPMB", isSPMB: true },
];

const jurusanLinks = [
  { label: "TKJ - Teknik Jaringan Komputer", short: "TJKT" },
  { label: "TO - Teknik Otomotif", short: "TO" },
  { label: "AKL - Akuntansi Keuangan Lembaga", short: "AKL" },
  { label: "MPLB - Manajemen Perkantoran", short: "MPLB" },
];

const socialLinks = [
  {
    icon: Facebook,
    color: "hover:bg-blue-600",
    href: "https://www.facebook.com/share/1BCLpZpFwR/",
    label: "Facebook",
  },
  {
    icon: Instagram,
    color: "hover:bg-pink-600",
    href: "https://www.instagram.com/smkwidyanusantara_official?igsh=OTlub2J5aHQzY3Np",
    label: "Instagram",
  },
  {
    icon: Youtube,
    color: "hover:bg-red-600",
    href: "https://youtube.com/@smkwidyanusantara-ni3gc?si=R0S2JIIq4pqAYOY8",
    label: "YouTube",
  },
];

interface FooterProps {
  onOpenJurusanDetail?: (short: string) => void;
}

export default function Footer({ onOpenJurusanDetail }: FooterProps) {
  const [spmbOpen, setSpmbOpen] = useState(false);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
  const handleClick = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer id="kontak" className="relative bg-navy-950 overflow-hidden">
      <div className="h-1 bg-gradient-to-r from-royal-500 via-gold-500 to-royal-500" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-8 mb-12">
          {/* School Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0 }}
            className="col-span-2 lg:col-span-1"
          >
            <div className="flex items-center gap-3 mb-4 sm:mb-6">
              <img
                src="/images/Logo-Winus.jpeg"
                alt="Logo SMK Widya Nusantara"
                className="w-10 h-10 sm:w-12 sm:h-12 object-contain"
              />
              <div>
                <p className="text-white font-poppins font-bold text-xs sm:text-sm">
                  SMK Widya Nusantara
                </p>
                <p className="text-navy-300 text-[10px] sm:text-xs font-inter">
                  Bekasi
                </p>
              </div>
            </div>
            <p className="font-inter text-white/50 text-xs sm:text-sm leading-relaxed mb-4 sm:mb-6">
              Membangun generasi unggul, berkarakter, dan siap menghadapi dunia
              industri modern melalui pendidikan kejuruan berkualitas.
            </p>
            <div className="flex gap-2 sm:gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className={`w-9 h-9 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/50 ${social.color} hover:text-white hover:border-white/20 transition-all duration-300`}
                >
                  <social.icon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="font-poppins font-bold text-white text-xs sm:text-sm mb-4 sm:mb-5 flex items-center gap-2">
              <div className="w-1 h-4 sm:h-5 bg-gradient-to-b from-royal-500 to-gold-500 rounded-full" />
              Quick Links
            </h4>
            <ul className="space-y-2 sm:space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  {link.isSPMB ? (
                    <button
                      type="button"
                      onClick={() => setSpmbOpen(true)}
                      className="font-inter text-white/50 text-xs sm:text-sm hover:text-gold-400 transition-colors duration-200 hover:translate-x-1 inline-block text-left"
                    >
                      {link.label}
                    </button>
                  ) : (
                    <a
                      href={link.href}
                      onClick={(e) => {
                        e.preventDefault();
                        handleClick(link.href);
                      }}
                      className="font-inter text-white/50 text-xs sm:text-sm hover:text-gold-400 transition-colors duration-200 hover:translate-x-1 inline-block"
                    >
                      {link.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Jurusan — sekarang klikable */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="font-poppins font-bold text-white text-xs sm:text-sm mb-4 sm:mb-5 flex items-center gap-2">
              <div className="w-1 h-4 sm:h-5 bg-gradient-to-b from-royal-500 to-gold-500 rounded-full" />
              Kompetensi Keahlian
            </h4>
            <ul className="space-y-2 sm:space-y-2.5">
              {jurusanLinks.map((jurusan) => (
                <li key={jurusan.short}>
                  <button
                    onClick={() => onOpenJurusanDetail?.(jurusan.short)}
                    className="font-inter text-white/50 text-xs sm:text-sm hover:text-gold-400 transition-colors duration-200 hover:translate-x-1 inline-block text-left"
                  >
                    {jurusan.label}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="col-span-2 lg:col-span-1"
          >
            <h4 className="font-poppins font-bold text-white text-xs sm:text-sm mb-4 sm:mb-5 flex items-center gap-2">
              <div className="w-1 h-4 sm:h-5 bg-gradient-to-b from-royal-500 to-gold-500 rounded-full" />
              Hubungi Kami
            </h4>
            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-start gap-2.5 sm:gap-3">
                <MapPin className="w-4 h-4 text-gold-400 flex-shrink-0 mt-0.5" />
                <p className="font-inter text-white/50 text-xs sm:text-sm leading-relaxed">
                  Jl. Tri Satya No. 47, Perum Bumi Bekasi Baru, Kecamatan
                  Rawalumbu, Kota Bekasi, Jawa Barat 17116.
                </p>
              </div>
              <div className="flex items-center gap-2.5 sm:gap-3">
                <Phone className="w-4 h-4 text-gold-400 flex-shrink-0" />
                <p className="font-inter text-white/50 text-xs sm:text-sm">
                  +62 851-1701-8005 (ibu Dwi Meutia,S.Pd.)
                </p>
              </div>
              <div className="flex items-center gap-2.5 sm:gap-3">
                <Mail className="w-4 h-4 text-gold-400 flex-shrink-0" />
                <p className="font-inter text-white/50 text-xs sm:text-sm">
                  smk.winus.bekasi@gmail.com
                </p>
              </div>
              <div className="flex items-center gap-2.5 sm:gap-3">
                <Clock className="w-4 h-4 text-gold-400 flex-shrink-0" />
                <p className="font-inter text-white/50 text-xs sm:text-sm">
                  Senin - Sabtu: 07.00 - 15.00 WIB
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Google Maps Embed */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-10 sm:mb-12 rounded-xl sm:rounded-2xl overflow-hidden border border-white/5"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.8972785954797!2d106.996343174751!3d-6.277234293711574!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e698de6976a8cff%3A0xd3a437d634ed7d72!2sSMK%20WIDYA%20NUSANTARA!5e0!3m2!1sid!2sid!4v1781661561757!5m2!1sid!2sid"
            width="100%"
            height="200"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Lokasi SMK Widya Nusantara"
            className="w-full"
          />
        </motion.div>

        {/* Bottom Bar */}
        <div className="pt-6 sm:pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
          <p className="font-inter text-white/30 text-xs sm:text-sm text-center sm:text-left">
            © 2026 SMK Widya Nusantara. By Bergas Cahyo Nuswantoro. All rights
            reserved.
          </p>
          <button
            onClick={scrollToTop}
            className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:bg-royal-500 hover:border-royal-500 transition-all duration-300 hover:-translate-y-1"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Formulir SPMB */}
      <SPMBForm open={spmbOpen} onClose={() => setSpmbOpen(false)} />
    </footer>
  );
}