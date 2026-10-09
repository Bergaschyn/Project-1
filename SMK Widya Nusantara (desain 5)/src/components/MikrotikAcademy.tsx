import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp, Award, BookOpen, Users, Wifi } from "lucide-react";

const kurikulumModul = [
  {
    id: 1,
    title: "Modul-1 Introduction",
    desc: "Pengenalan MikroTik RouterOS, fitur dasar, instalasi, dan antarmuka Winbox/WebFig.",
    rincian: [
      "About MikroTik",
      "First time accessing the router",
      "RouterOS command line interface (CLI)",
      "RouterOS CLI principles",
      "Initial configuration (Internet access)",
      "Upgrading RouterOS",
      "Router identity",
      "Manage RouterOS logins",
      "Manage RouterOS services",
      "Managing configuration backups",
      "Resetting a RouterOS device",
      "Reinstalling a RouterOS device (Netinstall)",
      "RouterOS license evels",
    ],
  },
  {
    id: 2,
    title: "Modul-2 DHCP",
    desc: "Konfigurasi DHCP Server dan Client, manajemen IP address dinamis di jaringan.",
    rincian: [
      "DHCP server and client",
      "Address Resolution Protocol (ARP)",
      "Konfigurasi DHCP Client",
      "DHCP Lease & static lease",
      "DHCP relay agent",
    ],
  },
  {
    id: 3,
    title: "Modul-3 Bridging",
    desc: "Konsep bridging, konfigurasi bridge interface, dan penerapan pada jaringan lokal.",
    rincian: [
      "Bridging overview",
      "Bridge wireless networks",
      "Bridge ports & VLAN filtering",
      "Spanning Tree Protocol (STP/RSTP)",
      "Transparent bridge & wireless bridge",
    ],
  },
  {
    id: 4,
    title: "Modul-4 Routing",
    desc: "Static routing, dynamic routing, dan manajemen tabel routing di MikroTik.",
    rincian: [
      "Routing overview",
      "Static routing",
      "Dynamic routing: OSPF & RIP",
      "Policy-based routing",
      "Route failover & load balancing",
    ],
  },
  {
    id: 5,
    title: "Modul-5 Wireless",
    desc: "Konfigurasi access point, station, security wireless, dan manajemen frekuensi.",
    rincian: [
      "Standar IEEE 802.11 a/b/g/n/ac",
      "Mode AP, Station, Bridge",
      "Security: WPA2, WPA3",
      "Wireless scan & site survey",
      "Manajemen frekuensi & channel",
    ],
  },
  {
    id: 6,
    title: "Modul-6 Firewall",
    desc: "Konsep firewall, filter rules, NAT, mangle, dan keamanan jaringan dasar.",
    rincian: [
      "Konsep firewall & chain (input/forward/output)",
      "Filter rules: accept, drop, reject",
      "NAT: masquerade, src-nat, dst-nat",
      "Mangle & packet marking",
      "Connection tracking & state",
    ],
  },
  {
    id: 7,
    title: "Modul-7 QoS",
    desc: "Quality of Service, bandwidth management, queue tree, dan simple queue.",
    rincian: [
      "Konsep QoS & bandwidth management",
      "Simple Queue untuk per-user limit",
      "Queue Tree & parent queue",
      "PCQ (Per Connection Queue)",
      "Burst & priority management",
    ],
  },
  {
    id: 8,
    title: "Modul-8 Tunnels",
    desc: "Konfigurasi VPN, PPPoE, PPTP, L2TP, dan tunnel management.",
    rincian: [
      "Konsep tunneling & enkripsi",
      "Konfigurasi PPPoE Server & Client",
      "PPTP & L2TP VPN",
      "IPSec dasar",
      "EoIP & GRE tunnel",
    ],
  },
  {
    id: 9,
    title: "Modul-9 Misc",
    desc: "Tool tambahan MikroTik: monitoring, scripting, scheduler, dan backup konfigurasi.",
    rincian: [
      "The Dude & monitoring jaringan",
      "Scripting & scheduler otomasi",
      "Backup & restore konfigurasi",
      "SNMP & logging",
      "Netwatch & email notification",
    ],
  },
];

// Foto kegiatan kelas (bukan sertifikat)
const fotoKegiatan = [
  { src: "/images/mikrotik/KelasKegiatanMicrotik1.jpeg", alt: "Kegiatan Kelas Mikrotik 1" },
  { src: "/images/mikrotik/KelasKegiatanMicrotik2.jpeg", alt: "Kegiatan Kelas Mikrotik 2" },
  { src: "/images/mikrotik/KelasKegiatanMicrotik3.jpeg", alt: "Kegiatan Kelas Mikrotik 3" },
];

// Sertifikat MTCNA
const sertifikatList = [
  { src: "/images/mikrotik/sertifikat1.jpg", alt: "Sertifikat Hasri Akbar, S.Kom - Academy Trainer" },
];

export default function MikrotikAcademy() {
  const [openModul, setOpenModul] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-[#0a0f1e] text-white font-inter">

      {/* ── HERO ── */}
      <section className="relative pt-28 pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a0f1e] via-[#0d1a3a] to-[#0a0f1e]" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-600/10 rounded-full blur-3xl" />

        <div className="relative max-w-5xl mx-auto text-center">
          {/* Logos */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center gap-8 mb-10"
          >
            <img
              src="/images/Logo-Winus.jpeg"
              alt="Logo SMK Widya Nusantara"
              className="w-20 h-20 object-contain drop-shadow-lg"
            />
            <div className="w-px h-16 bg-white/20" />
            <img
              src="/images/mikrotik/mikrotik1.png"
              alt="MikroTik Academy"
              className="h-16 object-contain drop-shadow-lg"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-blue-500/15 border border-blue-400/30 text-blue-300 text-sm font-medium mb-5">
              Program Resmi MikroTik Certified Network Associate
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-poppins font-bold leading-tight mb-5">
              Selamat Datang di{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                Mikrotik Academy
              </span>
            </h1>
            <p className="text-white/60 text-base md:text-lg max-w-2xl mx-auto leading-relaxed mb-4">
              Selamat Datang Di Halaman Mikrotik Academy SMK Widya Nusantara.
            </p>
            <p className="text-white/50 text-sm md:text-base max-w-3xl mx-auto leading-relaxed">
              Program akademik MikroTik dirancang untuk institusi pendidikan seperti
              universitas/perguruan tinggi/sekolah teknologi, yang menawarkan pelatihan jaringan
              komputer berbasis MikroTik RouterOS sebagai sarana pembelajaran.
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 max-w-3xl mx-auto"
          >
            {[
              { icon: BookOpen, value: "9", label: "Modul MTCNA", color: "blue" },
              { icon: Award, value: "MTCNA", label: "Sertifikasi Resmi", color: "cyan" },
              { icon: Users, value: "100+", label: "Alumni Tersertifikasi", color: "blue" },
              { icon: Wifi, value: "RouterOS", label: "Platform Utama", color: "cyan" },
            ].map((stat, i) => (
              <div
                key={i}
                className="bg-white/5 border border-white/10 rounded-2xl p-4 text-center hover:bg-white/8 transition-colors"
              >
                <stat.icon className={`w-5 h-5 mx-auto mb-2 ${stat.color === "blue" ? "text-blue-400" : "text-cyan-400"}`} />
                <p className="text-white font-poppins font-bold text-lg">{stat.value}</p>
                <p className="text-white/50 text-xs mt-0.5">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── SAMBUTAN KEPALA SEKOLAH ── */}
      <section className="py-16 px-4 bg-white/[0.02] border-y border-white/5">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row items-center gap-10"
          >
            <div className="flex-shrink-0 text-center">
              <div className="w-44 h-52 rounded-2xl overflow-hidden border-2 border-blue-500/30 shadow-xl shadow-blue-900/20 mx-auto bg-gradient-to-br from-blue-900 to-[#0a0f1e] flex items-center justify-center">
                <img
                  src="/images/Pimpinan/Kepala-Sekolah.png"
                  alt="Endang Lestari, S.Pd.,Gr"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = "none";
                  }}
                />
              </div>
              <p className="mt-3 font-poppins font-bold text-sm text-white tracking-widest uppercase">
                Endang Lestari, S.Pd.,Gr
              </p>
              <p className="text-white/40 text-xs mt-1">Kepala Sekolah</p>
            </div>

            <div>
              <span className="text-blue-400 text-xs font-semibold uppercase tracking-widest">Sambutan</span>
              <h2 className="text-2xl md:text-3xl font-poppins font-bold mt-1 mb-4">
                Sambutan Kepala Sekolah
              </h2>
              <div className="space-y-3 text-white/60 text-sm md:text-base leading-relaxed">
                <p>
                  Kita panjatkan puji syukur kehadirat Allah SWT yang telah memberikan karunia dan
                  kenikmatan yang tak terhitung banyaknya, shalawat dan salam kepada Nabi Muhammad SAW
                  beserta sahabat‑sahabatnya.
                </p>
                <p>
                  <span className="text-white font-semibold">MikroTik ACADEMY</span> merupakan Program
                  Pendidikan di SMK Widya Nusantara yang bertujuan untuk dapat memajukan kualitas
                  pendidikan agar lulusan SMK Widya Nusantara memiliki skill yang baik dan dapat bersaing
                  di Dunia Industri kelak.
                </p>
                <p className="text-white/40 italic">Wassalamu'alaikum Wr. Wb.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── VIDEO ── */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8"
          >
            <span className="text-blue-400 text-xs font-semibold uppercase tracking-widest">Video Profil</span>
            <h2 className="text-2xl md:text-3xl font-poppins font-bold mt-1">
              SMK Widya Nusantara Bekerja Sama
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl overflow-hidden border border-blue-500/20 shadow-2xl shadow-blue-900/30"
          >
            <div className="relative aspect-video w-full bg-[#0d1a3a]">
            <video className="w-full h-full" controls>
            <source src="/images/mikrotik/Video.mp4" type="video/mp4" />
          Browser kamu tidak mendukung video.
          </video>
          </div>
          </motion.div>
        </div>
      </section>

      {/* ── KURIKULUM MTCNA ── */}
      <section className="py-16 px-4 bg-white/[0.02] border-y border-white/5">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="text-blue-400 text-xs font-semibold uppercase tracking-widest">Silabus</span>
            <h2 className="text-2xl md:text-3xl font-poppins font-bold mt-1 mb-3">
              Kurikulum MTCNA
            </h2>
            <p className="text-white/50 text-sm max-w-xl mx-auto">
              Klik setiap modul untuk melihat rincian materi yang akan dipelajari.
            </p>
          </motion.div>

          {/* Accordion modul dengan rincian */}
          <div className="grid md:grid-cols-2 gap-3">
            {kurikulumModul.map((modul, i) => (
              <motion.div
                key={modul.id}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
              >
                <div
                  className={`border rounded-xl overflow-hidden transition-all duration-200 ${
                    openModul === modul.id
                      ? "border-blue-500/50 bg-blue-900/20"
                      : "border-white/10 bg-white/5 hover:border-blue-500/30 hover:bg-white/8"
                  }`}
                >
                  {/* Header */}
                  <button
                    onClick={() => setOpenModul(openModul === modul.id ? null : modul.id)}
                    className="w-full text-left px-5 py-4 group"
                  >
                    <div className="flex items-center justify-between gap-3">
                      <div className="flex items-center gap-3">
                        <span
                          className={`flex-shrink-0 w-7 h-7 rounded-lg text-xs font-bold flex items-center justify-center transition-colors ${
                            openModul === modul.id
                              ? "bg-blue-500 text-white"
                              : "bg-blue-500/20 text-blue-400"
                          }`}
                        >
                          {modul.id}
                        </span>
                        <span
                          className={`font-poppins font-semibold text-sm transition-colors ${
                            openModul === modul.id ? "text-blue-300" : "text-white group-hover:text-blue-300"
                          }`}
                        >
                          {modul.title}
                        </span>
                      </div>
                      {openModul === modul.id ? (
                        <ChevronUp className="w-4 h-4 text-blue-400 flex-shrink-0" />
                      ) : (
                        <ChevronDown className="w-4 h-4 text-white/30 flex-shrink-0" />
                      )}
                    </div>
                    {/* Deskripsi singkat selalu tampil */}
                    <p className="mt-2 text-white/40 text-xs leading-relaxed pl-10">
                      {modul.desc}
                    </p>
                  </button>

                  {/* Rincian materi — muncul saat dibuka */}
                  <AnimatePresence>
                    {openModul === modul.id && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="px-5 pb-4 border-t border-blue-500/20">
                          <p className="text-blue-400 text-xs font-semibold uppercase tracking-wider mt-3 mb-2">
                            Materi yang dipelajari:
                          </p>
                          <ul className="space-y-1.5">
                            {modul.rincian.map((item, idx) => (
                              <li key={idx} className="flex items-start gap-2 text-white/60 text-sm">
                                <span className="mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-blue-400" />
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FOTO KEGIATAN ── */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10"
          >
            <span className="text-blue-400 text-xs font-semibold uppercase tracking-widest">Dokumentasi</span>
            <h2 className="text-2xl md:text-3xl font-poppins font-bold mt-1">
              Foto Kegiatan Kelas
            </h2>
            <p className="text-white/50 text-sm mt-2">
              Suasana belajar siswa SMK Widya Nusantara dalam program Mikrotik Academy.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {fotoKegiatan.map((foto, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                className="aspect-[4/3] rounded-xl overflow-hidden bg-white/5 border border-white/10 hover:border-blue-500/30 transition-all duration-300 group"
              >
                <img
                  src={foto.src}
                  alt={foto.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    const el = e.target as HTMLImageElement;
                    el.style.display = "none";
                    el.parentElement!.innerHTML = `
                      <div class="w-full h-full flex flex-col items-center justify-center gap-2">
                        <div class="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center">
                          <svg class="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                        </div>
                        <p class="text-white/30 text-xs text-center px-2">${foto.alt}</p>
                      </div>`;
                  }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERTIFIKAT ── */}
      <section className="py-16 px-4 bg-white/[0.02] border-y border-white/5">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10"
          >
            <span className="text-blue-400 text-xs font-semibold uppercase tracking-widest">Pencapaian</span>
            <h2 className="text-2xl md:text-3xl font-poppins font-bold mt-1">
              Sertifikat MTCNA
            </h2>
            <p className="text-white/50 text-sm mt-2">
              Bukti nyata keberhasilan siswa dan pengajar SMK Widya Nusantara dalam program Mikrotik Academy.
            </p>
          </motion.div>

          <div className="flex justify-center">
            {sertifikatList.map((sertif, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                className="w-full max-w-xs aspect-[4/3] rounded-xl overflow-hidden bg-white/5 border border-white/10 hover:border-blue-500/30 transition-all duration-300 group"
              >
                <img
                  src={sertif.src}
                  alt={sertif.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    const el = e.target as HTMLImageElement;
                    el.style.display = "none";
                    el.parentElement!.innerHTML = `
                      <div class="w-full h-full flex flex-col items-center justify-center gap-2">
                        <div class="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center">
                          <svg class="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                        </div>
                        <p class="text-white/30 text-xs text-center px-2">${sertif.alt}</p>
                      </div>`;
                  }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
