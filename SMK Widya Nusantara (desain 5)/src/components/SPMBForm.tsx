import { useEffect, useRef, useState } from "react";
import type { ChangeEvent, FormEvent } from "react";

/**
 * SPMBForm.tsx
 * Modal formulir pendaftaran SPMB Online SMK Widya Nusantara.
 *
 * Cara pakai:
 *   <SPMBForm open={spmbOpen} onClose={() => setSpmbOpen(false)} />
 *
 * Data dikirim ke: POST {VITE_API_URL}/spmb  (JSON)
 * Isi VITE_API_URL di file .env, contoh: VITE_API_URL=http://localhost:8000/api
 */

interface SPMBFormProps {
  open: boolean;
  onClose: () => void;
}

// Sesuaikan daftar jurusan dengan yang ada di sekolah
const JURUSAN = [
  "Teknik Jaringan Komputer dan Telekomunikasi (TJKT)",
  "Teknik Otomotif (TO)",
  "Akuntansi dan Keuangan Lembaga (AKL)",
  "Manajemen Perkantoran dan Layanan Bisnis (MPLB)",
];

interface FormData {
  namaLengkap: string;
  nisn: string;
  jenisKelamin: string;
  tempatLahir: string;
  tanggalLahir: string;
  asalSekolah: string;
  alamat: string;
  namaOrangTua: string;
  noWaOrangTua: string;
  email: string;
  jurusanPilihan1: string;
  jurusanPilihan2: string;
}

type FormErrors = Partial<Record<keyof FormData, string>>;

const INITIAL: FormData = {
  namaLengkap: "",
  nisn: "",
  jenisKelamin: "",
  tempatLahir: "",
  tanggalLahir: "",
  asalSekolah: "",
  alamat: "",
  namaOrangTua: "",
  noWaOrangTua: "",
  email: "",
  jurusanPilihan1: "",
  jurusanPilihan2: "",
};

const API_URL = import.meta.env.VITE_API_URL as string | undefined;

function validate(d: FormData): FormErrors {
  const e: FormErrors = {};
  if (d.namaLengkap.trim().length < 3) e.namaLengkap = "Isi nama lengkap sesuai ijazah.";
  if (!/^\d{10}$/.test(d.nisn)) e.nisn = "NISN harus 10 digit angka.";
  if (!d.jenisKelamin) e.jenisKelamin = "Pilih jenis kelamin.";
  if (!d.tempatLahir.trim()) e.tempatLahir = "Isi tempat lahir.";
  if (!d.tanggalLahir) e.tanggalLahir = "Isi tanggal lahir.";
  if (!d.asalSekolah.trim()) e.asalSekolah = "Isi nama SMP/MTs asal.";
  if (d.alamat.trim().length < 10) e.alamat = "Isi alamat lengkap.";
  if (!d.namaOrangTua.trim()) e.namaOrangTua = "Isi nama orang tua/wali.";
  if (!/^(08|628)\d{8,12}$/.test(d.noWaOrangTua.replace(/[\s-]/g, "")))
    e.noWaOrangTua = "Nomor WA tidak valid. Contoh: 081234567890.";
  if (d.email && !/^\S+@\S+\.\S+$/.test(d.email)) e.email = "Format email tidak valid.";
  if (!d.jurusanPilihan1) e.jurusanPilihan1 = "Pilih jurusan pilihan pertama.";
  if (d.jurusanPilihan2 && d.jurusanPilihan2 === d.jurusanPilihan1)
    e.jurusanPilihan2 = "Pilihan kedua harus berbeda dari pilihan pertama.";
  return e;
}

export default function SPMBForm({ open, onClose }: SPMBFormProps) {
  const [data, setData] = useState<FormData>(INITIAL);
  const [errors, setErrors] = useState<FormErrors>({});
  const [loading, setLoading] = useState(false);
  const [serverError, setServerError] = useState("");
  const [nomorDaftar, setNomorDaftar] = useState<string | null>(null);
  const dialogRef = useRef<HTMLDivElement>(null);

  // Tutup dengan Esc + kunci scroll body saat modal terbuka
  useEffect(() => {
    if (!open) return;
    const onKey = (ev: KeyboardEvent) => ev.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    dialogRef.current?.focus();
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open, onClose]);

  if (!open) return null;

  const handleChange = (
    ev: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = ev.target;
    setData((p) => ({ ...p, [name]: value }));
    if (errors[name as keyof FormData]) {
      setErrors((p) => ({ ...p, [name]: undefined }));
    }
  };

  const handleSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setServerError("");
    const found = validate(data);
    setErrors(found);
    if (Object.keys(found).length > 0) {
      const first = Object.keys(found)[0];
      dialogRef.current?.querySelector<HTMLElement>(`[name="${first}"]`)?.focus();
      return;
    }
    if (!API_URL) {
      setServerError("Alamat server belum diatur (VITE_API_URL). Hubungi admin sekolah.");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch(`${API_URL}/spmb`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json().catch(() => ({}));

      if (res.status === 422 && json.errors) {
        // Error validasi dari Laravel: { errors: { field: ["pesan"] } }
        const mapped: FormErrors = {};
        for (const key of Object.keys(json.errors)) {
          mapped[key as keyof FormData] = json.errors[key][0];
        }
        setErrors(mapped);
        setServerError("Ada data yang belum sesuai. Periksa kolom yang ditandai.");
        return;
      }
      if (!res.ok) throw new Error(json.message || "Gagal mengirim formulir.");

      setNomorDaftar(json.data?.nomor_pendaftaran ?? json.nomor_pendaftaran ?? "-");
      setData(INITIAL);
    } catch (err) {
      setServerError(
        err instanceof Error ? err.message : "Terjadi kesalahan. Coba lagi sebentar lagi."
      );
    } finally {
      setLoading(false);
    }
  };

  const handleClose = () => {
    setNomorDaftar(null);
    setServerError("");
    setErrors({});
    onClose();
  };

  const field = (name: keyof FormData) => ({
    name,
    value: data[name],
    onChange: handleChange,
    "aria-invalid": !!errors[name],
    "aria-describedby": errors[name] ? `err-${name}` : undefined,
    className: errors[name] ? "spmb-input spmb-input--error" : "spmb-input",
  });

  const err = (name: keyof FormData) =>
    errors[name] ? (
      <span id={`err-${name}`} className="spmb-error" role="alert">
        {errors[name]}
      </span>
    ) : null;

  return (
    <div className="spmb-overlay" onMouseDown={(e) => e.target === e.currentTarget && handleClose()}>
      <style>{css}</style>
      <div
        className="spmb-dialog"
        role="dialog"
        aria-modal="true"
        aria-labelledby="spmb-title"
        tabIndex={-1}
        ref={dialogRef}
      >
        <button type="button" className="spmb-close" onClick={handleClose} aria-label="Tutup formulir">
          ×
        </button>

        {nomorDaftar ? (
          <div className="spmb-success">
            <h2 id="spmb-title">Formulir terkirim</h2>
            <p>Terima kasih sudah mendaftar di SMK Widya Nusantara. Simpan nomor pendaftaran ini:</p>
            <div className="spmb-number">{nomorDaftar}</div>
            <p className="spmb-muted">
              Panitia akan menghubungi nomor WhatsApp orang tua/wali untuk informasi tahap berikutnya.
            </p>
            <button type="button" className="spmb-btn" onClick={handleClose}>
              Selesai
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} noValidate>
            <h2 id="spmb-title">Formulir SPMB Online</h2>
            <p className="spmb-muted">
              Isi data calon siswa dengan benar. Kolom bertanda * wajib diisi.
            </p>

            <fieldset>
              <legend>Data calon siswa</legend>

              <label className="spmb-field spmb-full">
                <span>Nama lengkap *</span>
                <input type="text" autoComplete="name" {...field("namaLengkap")} />
                {err("namaLengkap")}
              </label>

              <label className="spmb-field">
                <span>NISN *</span>
                <input type="text" inputMode="numeric" maxLength={10} {...field("nisn")} />
                {err("nisn")}
              </label>

              <label className="spmb-field">
                <span>Jenis kelamin *</span>
                <select {...field("jenisKelamin")}>
                  <option value="">Pilih</option>
                  <option value="L">Laki-laki</option>
                  <option value="P">Perempuan</option>
                </select>
                {err("jenisKelamin")}
              </label>

              <label className="spmb-field">
                <span>Tempat lahir *</span>
                <input type="text" {...field("tempatLahir")} />
                {err("tempatLahir")}
              </label>

              <label className="spmb-field">
                <span>Tanggal lahir *</span>
                <input type="date" {...field("tanggalLahir")} />
                {err("tanggalLahir")}
              </label>

              <label className="spmb-field spmb-full">
                <span>Asal SMP/MTs *</span>
                <input type="text" {...field("asalSekolah")} />
                {err("asalSekolah")}
              </label>

              <label className="spmb-field spmb-full">
                <span>Alamat lengkap *</span>
                <textarea rows={3} {...field("alamat")} />
                {err("alamat")}
              </label>
            </fieldset>

            <fieldset>
              <legend>Orang tua / wali</legend>

              <label className="spmb-field">
                <span>Nama orang tua/wali *</span>
                <input type="text" {...field("namaOrangTua")} />
                {err("namaOrangTua")}
              </label>

              <label className="spmb-field">
                <span>No. WhatsApp *</span>
                <input type="tel" inputMode="tel" placeholder="081234567890" {...field("noWaOrangTua")} />
                {err("noWaOrangTua")}
              </label>

              <label className="spmb-field spmb-full">
                <span>Email (opsional)</span>
                <input type="email" autoComplete="email" {...field("email")} />
                {err("email")}
              </label>
            </fieldset>

            <fieldset>
              <legend>Pilihan jurusan</legend>

              <label className="spmb-field">
                <span>Pilihan 1 *</span>
                <select {...field("jurusanPilihan1")}>
                  <option value="">Pilih jurusan</option>
                  {JURUSAN.map((j) => (
                    <option key={j} value={j}>
                      {j}
                    </option>
                  ))}
                </select>
                {err("jurusanPilihan1")}
              </label>

              <label className="spmb-field">
                <span>Pilihan 2 (opsional)</span>
                <select {...field("jurusanPilihan2")}>
                  <option value="">Tidak ada</option>
                  {JURUSAN.map((j) => (
                    <option key={j} value={j}>
                      {j}
                    </option>
                  ))}
                </select>
                {err("jurusanPilihan2")}
              </label>
            </fieldset>

            {serverError && (
              <div className="spmb-alert" role="alert">
                {serverError}
              </div>
            )}

            <div className="spmb-actions">
              <button type="button" className="spmb-btn spmb-btn--ghost" onClick={handleClose}>
                Batal
              </button>
              <button type="submit" className="spmb-btn" disabled={loading}>
                {loading ? "Mengirim…" : "Kirim pendaftaran"}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

const css = `
.spmb-overlay{
  --bg:#0f1a2b; --panel:#14233a; --line:#2a3a54; --text:#eef1f6;
  --muted:#9fb0c8; --gold:#e3b94a; --gold-ink:#1a1405; --danger:#ff8a80;
  position:fixed; inset:0; z-index:1000; display:flex; align-items:center; justify-content:center;
  padding:16px; background:rgba(5,10,18,.72); backdrop-filter:blur(4px);
}
.spmb-dialog{
  position:relative; width:100%; max-width:640px; max-height:92vh; overflow-y:auto;
  background:var(--panel); color:var(--text); border:1px solid var(--line);
  border-radius:16px; padding:28px; outline:none;
  font-family:'Poppins',system-ui,sans-serif;
}
.spmb-dialog h2{margin:0 0 4px; font-size:1.4rem; font-weight:600}
.spmb-muted{margin:0 0 20px; color:var(--muted); font-size:.9rem; line-height:1.5}
.spmb-close{
  position:absolute; top:12px; right:14px; width:36px; height:36px; border:0; border-radius:50%;
  background:transparent; color:var(--muted); font-size:1.6rem; line-height:1; cursor:pointer;
}
.spmb-close:hover{color:var(--text); background:var(--line)}
.spmb-dialog fieldset{
  display:grid; grid-template-columns:1fr 1fr; gap:14px; margin:0 0 18px;
  padding:16px; border:1px solid var(--line); border-radius:12px; min-width:0;
}
.spmb-dialog legend{padding:0 8px; color:var(--gold); font-size:.85rem; font-weight:500}
.spmb-field{display:flex; flex-direction:column; gap:6px; min-width:0}
.spmb-full{grid-column:1 / -1}
.spmb-field > span:first-child{font-size:.82rem; color:var(--muted)}
.spmb-input{
  width:100%; box-sizing:border-box; padding:10px 12px; border-radius:8px;
  border:1px solid var(--line); background:var(--bg); color:var(--text);
  font:inherit; font-size:.92rem; color-scheme:dark;
}
.spmb-input:focus{outline:2px solid var(--gold); outline-offset:1px; border-color:var(--gold)}
.spmb-input--error{border-color:var(--danger)}
textarea.spmb-input{resize:vertical}
.spmb-error{color:var(--danger); font-size:.78rem}
.spmb-alert{
  margin-bottom:16px; padding:10px 14px; border-radius:8px;
  border:1px solid var(--danger); color:var(--danger); font-size:.88rem;
}
.spmb-actions{display:flex; justify-content:flex-end; gap:10px}
.spmb-btn{
  padding:11px 22px; border:0; border-radius:999px; cursor:pointer;
  background:var(--gold); color:var(--gold-ink); font:inherit; font-weight:600; font-size:.92rem;
}
.spmb-btn:hover:not(:disabled){filter:brightness(1.08)}
.spmb-btn:disabled{opacity:.6; cursor:wait}
.spmb-btn--ghost{background:transparent; color:var(--text); border:1px solid var(--line)}
.spmb-success{text-align:center; padding:12px 0}
.spmb-number{
  margin:16px auto 20px; padding:14px 20px; display:inline-block;
  border:1px dashed var(--gold); border-radius:12px; color:var(--gold);
  font-size:1.4rem; font-weight:600; letter-spacing:.04em;
}
@media (max-width:560px){
  .spmb-dialog{padding:20px 16px}
  .spmb-dialog fieldset{grid-template-columns:1fr}
  .spmb-actions .spmb-btn{flex:1}
}
@media (prefers-reduced-motion:no-preference){
  .spmb-dialog{animation:spmb-in .18s ease-out}
  @keyframes spmb-in{from{opacity:0; transform:translateY(8px)}to{opacity:1; transform:none}}
}
`;