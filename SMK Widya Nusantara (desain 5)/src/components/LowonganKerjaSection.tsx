import { useMemo, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

type Tipe = "Penuh waktu" | "Magang" | "Kontrak";

interface Lowongan {
  id: number;
  posisi: string;
  perusahaan: string;
  lokasi: string;
  tipe: Tipe;
  jurusan: string[];
  batas: string; // YYYY-MM-DD
  deskripsi: string;
  persyaratan: string[];
  kontak: string; // link WhatsApp, mailto:, atau form lamaran
}

// Ganti dengan data dari API/backend
const LOWONGAN: Lowongan[] = [
  {
    id: 1,
    posisi: "Teknisi Jaringan",
    perusahaan: "PT Maju Jaya Teknologi",
    lokasi: "Bekasi Timur",
    tipe: "Penuh waktu",
    jurusan: ["TKJ"],
    batas: "2026-11-20",
    deskripsi:
      "Memasang, mengonfigurasi, dan merawat jaringan LAN/WLAN di kantor klien area Jabodetabek.",
    persyaratan: [
      "Lulusan SMK jurusan TKJ",
      "Memahami dasar Mikrotik dan konfigurasi router",
      "Bersedia mobile ke lokasi klien",
      "Memiliki SIM C",
    ],
    kontak: "mailto:hrd@contoh.co.id?subject=Lamaran%20Teknisi%20Jaringan",
  },
  {
    id: 2,
    posisi: "Staf Administrasi Perkantoran",
    perusahaan: "CV Sentosa Abadi",
    lokasi: "Rawalumbu, Bekasi",
    tipe: "Kontrak",
    jurusan: ["MPLB"],
    batas: "2026-11-05",
    deskripsi:
      "Mengelola arsip, surat-menyurat, dan input data harian di kantor pusat.",
    persyaratan: [
      "Lulusan SMK jurusan MPLB",
      "Mahir Microsoft Word dan Excel",
      "Teliti dan rapi dalam mengarsip",
    ],
    kontak: "https://wa.me/6281234567890?text=Halo%2C%20saya%20ingin%20melamar",
  },
  {
    id: 3,
    posisi: "Magang IT Support",
    perusahaan: "PT Nusa Digital Solusi",
    lokasi: "Cikarang",
    tipe: "Magang",
    jurusan: ["TKJ"],
    batas: "2026-10-31",
    deskripsi:
      "Membantu tim IT menangani troubleshooting perangkat, instalasi software, dan inventaris aset.",
    persyaratan: [
      "Siswa/lulusan TKJ",
      "Mampu instalasi OS dan perakitan PC",
      "Durasi magang 3–6 bulan",
    ],
    kontak: "mailto:karir@contoh.co.id?subject=Lamaran%20Magang%20IT%20Support",
  },
  {
    id: 4,
    posisi: "Operator Produksi",
    perusahaan: "PT Aneka Karya Mandiri",
    lokasi: "Kawasan Industri MM2100",
    tipe: "Penuh waktu",
    jurusan: ["TKJ", "MPLB"],
    batas: "2026-10-12",
    deskripsi:
      "Mengoperasikan mesin lini produksi dengan sistem shift sesuai SOP perusahaan.",
    persyaratan: [
      "Lulusan SMK semua jurusan",
      "Sehat jasmani dan bersedia kerja shift",
      "Maksimal usia 24 tahun",
    ],
    kontak: "https://wa.me/6281234567891?text=Halo%2C%20saya%20ingin%20melamar",
  },
  {
    id: 5,
    posisi: "Admin Gudang",
    perusahaan: "PT Logistik Prima",
    lokasi: "Bekasi Barat",
    tipe: "Kontrak",
    jurusan: ["MPLB"],
    batas: "2026-09-30",
    deskripsi:
      "Mencatat barang masuk dan keluar serta menyusun laporan stok mingguan.",
    persyaratan: ["Lulusan SMK MPLB", "Menguasai Excel dasar"],
    kontak: "mailto:hrd@contoh.co.id?subject=Lamaran%20Admin%20Gudang",
  },
];

const FILTER_TIPE: Array<"Semua" | Tipe> = ["Semua", "Penuh waktu", "Magang", "Kontrak"];

function sisaHari(batas: string): number {
  const akhir = new Date(`${batas}T23:59:59`).getTime();
  return Math.ceil((akhir - Date.now()) / 86_400_000);
}

function labelBatas(batas: string) {
  const sisa = sisaHari(batas);
  if (sisa < 0) return { teks: "Sudah ditutup", tutup: true, mendesak: false };
  if (sisa === 0) return { teks: "Terakhir hari ini", tutup: false, mendesak: true };
  return { teks: `${sisa} hari lagi`, tutup: false, mendesak: sisa <= 7 };
}

function formatTanggal(batas: string): string {
  return new Date(`${batas}T00:00:00`).toLocaleDateString("id-ID", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

const inisial = (nama: string) =>
  nama
    .replace(/^(PT|CV)\s+/i, "")
    .split(" ")
    .slice(0, 2)
    .map((k) => k[0])
    .join("")
    .toUpperCase();

const IconCari = () => (
  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
    <circle cx="11" cy="11" r="7" />
    <path d="m20 20-3.5-3.5" />
  </svg>
);

const IconLokasi = () => (
  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M12 21s7-6.2 7-11a7 7 0 1 0-14 0c0 4.8 7 11 7 11Z" />
    <circle cx="12" cy="10" r="2.5" />
  </svg>
);

const IconPanah = ({ buka }: { buka: boolean }) => (
  <svg
    viewBox="0 0 24 24"
    className={`h-5 w-5 transition-transform duration-200 ${buka ? "rotate-180" : ""}`}
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="m6 9 6 6 6-6" />
  </svg>
);

export default function LowonganKerjaSection() {
  const [kata, setKata] = useState("");
  const [tipe, setTipe] = useState<"Semua" | Tipe>("Semua");
  const [terbuka, setTerbuka] = useState<number | null>(null);
  const kurangiGerak = useReducedMotion();

  const daftar = useMemo(() => {
    const q = kata.trim().toLowerCase();
    return LOWONGAN.filter((l) => {
      const cocokTipe = tipe === "Semua" || l.tipe === tipe;
      const cocokKata =
        !q ||
        [l.posisi, l.perusahaan, l.lokasi, ...l.jurusan].join(" ").toLowerCase().includes(q);
      return cocokTipe && cocokKata;
    }).sort((a, b) => {
      const sa = sisaHari(a.batas);
      const sb = sisaHari(b.batas);
      if (sa < 0 !== sb < 0) return sa < 0 ? 1 : -1;
      return sa - sb;
    });
  }, [kata, tipe]);

  const jumlahBuka = LOWONGAN.filter((l) => sisaHari(l.batas) >= 0).length;

  return (
    <section id="lowongan" className="bg-slate-50 py-20 sm:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-[#0f2240] sm:text-4xl">
            Lowongan kerja untuk lulusan dan siswa
          </h2>
          <p className="mt-3 text-base leading-relaxed text-slate-600">
            {jumlahBuka} lowongan dari mitra industri dan alumni sedang dibuka. Pilih lowongan,
            baca persyaratannya, lalu lamar langsung lewat kontak yang tertera.
          </p>
        </div>

        <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <label className="relative block w-full sm:max-w-xs">
            <span className="sr-only">Cari lowongan</span>
            <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
              <IconCari />
            </span>
            <input
              type="search"
              value={kata}
              onChange={(e) => setKata(e.target.value)}
              placeholder="Cari posisi, perusahaan, lokasi"
              className="w-full rounded-full border border-slate-200 bg-white py-2.5 pl-10 pr-4 text-sm text-slate-800 placeholder:text-slate-400 focus:border-[#d4af37] focus:outline-none focus:ring-2 focus:ring-[#d4af37]/40"
            />
          </label>

          <div className="flex flex-wrap gap-2" role="group" aria-label="Filter tipe pekerjaan">
            {FILTER_TIPE.map((f) => {
              const aktif = tipe === f;
              return (
                <button
                  key={f}
                  type="button"
                  onClick={() => setTipe(f)}
                  aria-pressed={aktif}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#d4af37] focus-visible:ring-offset-2 ${
                    aktif
                      ? "bg-[#0f2240] text-white"
                      : "bg-white text-slate-600 ring-1 ring-slate-200 hover:text-[#0f2240]"
                  }`}
                >
                  {f}
                </button>
              );
            })}
          </div>
        </div>

        {daftar.length === 0 ? (
          <div className="mt-8 rounded-2xl border border-dashed border-slate-300 bg-white px-6 py-12 text-center">
            <p className="font-semibold text-[#0f2240]">Lowongan tidak ditemukan</p>
            <p className="mt-1 text-sm text-slate-500">
              Coba kata kunci lain atau ubah filter tipe pekerjaan.
            </p>
            <button
              type="button"
              onClick={() => {
                setKata("");
                setTipe("Semua");
              }}
              className="mt-5 rounded-full bg-[#d4af37] px-5 py-2 text-sm font-semibold text-[#0f2240] hover:brightness-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0f2240] focus-visible:ring-offset-2"
            >
              Reset pencarian
            </button>
          </div>
        ) : (
          <ul className="mt-8 divide-y divide-slate-200 overflow-hidden rounded-2xl border border-slate-200 bg-white">
            {daftar.map((l) => {
              const buka = terbuka === l.id;
              const status = labelBatas(l.batas);
              const panelId = `lowongan-${l.id}`;

              return (
                <li key={l.id} className={status.tutup ? "bg-slate-50/70" : ""}>
                  <button
                    type="button"
                    onClick={() => setTerbuka(buka ? null : l.id)}
                    aria-expanded={buka}
                    aria-controls={panelId}
                    className="flex w-full items-start gap-4 px-4 py-5 text-left transition-colors hover:bg-slate-50 focus:outline-none focus-visible:bg-slate-50 focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#d4af37] sm:px-6"
                  >
                    <span
                      className={`mt-0.5 flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-sm font-bold ${
                        status.tutup ? "bg-slate-200 text-slate-500" : "bg-[#0f2240] text-[#d4af37]"
                      }`}
                      aria-hidden="true"
                    >
                      {inisial(l.perusahaan)}
                    </span>

                    <span className="min-w-0 flex-1">
                      <span
                        className={`block text-base font-semibold ${
                          status.tutup ? "text-slate-500" : "text-[#0f2240]"
                        }`}
                      >
                        {l.posisi}
                      </span>
                      <span className="mt-0.5 block text-sm text-slate-600">{l.perusahaan}</span>

                      <span className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-slate-500">
                        <span className="inline-flex items-center gap-1">
                          <IconLokasi />
                          {l.lokasi}
                        </span>
                        <span className="rounded-md bg-slate-100 px-2 py-0.5 text-xs font-medium text-slate-700">
                          {l.tipe}
                        </span>
                        {l.jurusan.map((j) => (
                          <span
                            key={j}
                            className="rounded-md bg-[#d4af37]/15 px-2 py-0.5 text-xs font-medium text-[#7a5f0b]"
                          >
                            {j}
                          </span>
                        ))}
                      </span>
                    </span>

                    <span className="flex shrink-0 flex-col items-end gap-2 text-right">
                      <span
                        className={`text-sm font-medium ${
                          status.tutup
                            ? "text-slate-400"
                            : status.mendesak
                            ? "text-red-600"
                            : "text-slate-700"
                        }`}
                      >
                        {status.teks}
                      </span>
                      <span className="text-slate-400">
                        <IconPanah buka={buka} />
                      </span>
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {buka && (
                      <motion.div
                        id={panelId}
                        key="detail"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: kurangiGerak ? 0 : 0.25, ease: "easeOut" }}
                        className="overflow-hidden"
                      >
                        <div className="border-t border-slate-100 px-4 pb-6 pt-5 sm:pl-[5.25rem] sm:pr-6">
                          <p className="max-w-prose text-sm leading-relaxed text-slate-700">
                            {l.deskripsi}
                          </p>

                          <h3 className="mt-5 text-sm font-semibold text-[#0f2240]">Persyaratan</h3>
                          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-slate-700">
                            {l.persyaratan.map((p) => (
                              <li key={p}>{p}</li>
                            ))}
                          </ul>

                          <div className="mt-6 flex flex-wrap items-center gap-4">
                            {status.tutup ? (
                              <span className="rounded-full bg-slate-200 px-5 py-2.5 text-sm font-semibold text-slate-500">
                                Lowongan ditutup
                              </span>
                            ) : (
                              <a
                                href={l.kontak}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="rounded-full bg-[#d4af37] px-5 py-2.5 text-sm font-semibold text-[#0f2240] transition hover:brightness-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0f2240] focus-visible:ring-offset-2"
                              >
                                Lamar sekarang
                              </a>
                            )}
                            <span className="text-sm text-slate-500">
                              Batas pendaftaran {formatTanggal(l.batas)}
                            </span>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </section>
  );
}