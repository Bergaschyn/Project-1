import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  BookOpen,
  Instagram,
  Linkedin,
  Mail,
  X,
  GraduationCap,
  Briefcase,
} from "lucide-react";

type Category = "semua" | "kepala" | "produktif" | "umum" | "staff";

interface Teacher {
  name: string;
  role: string;
  subject: string;
  category: Category[];
  photo: string;
  color: string;
  bio: string;
  education?: string[];
  experience?: string[];
  instagram: string;
  linkedin: string;
  email: string;
}

const teachers: Teacher[] = [
  // ===== KEPALA / PIMPINAN =====
  {
    name: "Endang Lestari, S.Pd.,Gr",
    role: "Kepala Sekolah",
    subject: "Pimpinan & Manajemen Sekolah",
    category: ["semua", "kepala"],
    photo: "/images/Pimpinan/Kepala-Sekolah.png",
    color: "from-gold-500 to-gold-400",
    bio: "Memimpin SMK Widya Nusantara sejak 2026 dengan fokus pada peningkatan kualitas pembelajaran, penguatan budaya disiplin, serta perluasan kerja sama dengan dunia industri agar lulusan semakin siap bersaing di dunia kerja.",
    instagram: "https://instagram.com/",
    linkedin: "https://linkedin.com/in/",
    email: "ahmad.sudrajat@widyanusantara.sch.id",
  },
  {
    name: "Muhammad Afdal, S.Kom.,Gr.",
    role: "Wakil Kepala Sekolah Kurikulum",
    subject: "Manajemen Kurikulum",
    category: ["semua", "kepala"],
    photo: "/images/Pimpinan/Guru-Hubungan-Industri.png",
    color: "from-royal-500 to-royal-400",
    bio: "Bertanggung jawab atas perencanaan, evaluasi, dan pengembangan kurikulum sekolah agar selalu selaras dengan kebutuhan dunia industri terkini, sekaligus memastikan setiap mata pelajaran diajarkan secara efektif dan relevan.",
    instagram: "https://instagram.com/",
    linkedin: "https://linkedin.com/in/",
    email: "siti.nurhaliza@widyanusantara.sch.id",
  },
  {
    name: "Fauziah Suciani, S.Pd.,Gr.",
    role: "Wakil Kepala Sekolah Kesiswaan",
    subject: "Manajemen Kesiswaan",
    category: ["semua", "kepala"],
    photo: "/images/GuruUmum/Guru-Umum3.png",
    color: "from-royal-500 to-royal-400",
    bio: "Mengelola pembinaan karakter, kedisiplinan, serta kegiatan ekstrakurikuler siswa di lingkungan sekolah, dengan tujuan membentuk siswa yang tidak hanya unggul secara akademik tetapi juga memiliki sikap dan etika yang baik.",
    instagram: "https://instagram.com/",
    linkedin: "https://linkedin.com/in/",
    email: "bambang.hermanto@widyanusantara.sch.id",
  },
  {
    name: "Nurhan, S.T.,Gr.",
    role: "Staff Hubungan Industri",
    subject: "Kerja Sama Industri & PKL",
    category: ["semua", "kepala"],
    photo: "/images/GuruProduktif/Guru-TO4.png",
    color: "from-royal-500 to-royal-400",
    bio: "Membangun dan menjaga kerja sama dengan berbagai mitra industri untuk program Praktik Kerja Lapangan (PKL) serta penyaluran kerja lulusan, agar siswa memiliki pengalaman nyata dan peluang karier yang lebih luas setelah lulus.",
    instagram: "https://instagram.com/",
    linkedin: "https://linkedin.com/in/",
    email: "rina.wulandari@widyanusantara.sch.id",
  },

  // ===== PRODUKTIF =====
  {
    name: "Mohammad Siraji, S.Kom.,Gr.",
    role: "Kepala Jurusan TJKT",
    subject: "Teknik Jaringan Komputer dan Telekomunikasi",
    category: ["semua", "produktif"],
    photo: "/images/GuruProduktif/Guru-TKJ3.png",
    color: "from-emerald-500 to-emerald-400",
    bio: "Mengembangkan kompetensi siswa di bidang jaringan komputer, server, dan keamanan sistem informasi melalui pembelajaran berbasis praktik agar siswa siap menghadapi kebutuhan industri teknologi informasi yang terus berkembang.",
    instagram: "https://instagram.com/",
    linkedin: "https://linkedin.com/in/",
    email: "agus.prasetyo@widyanusantara.sch.id",
  },
  {
    name: "Usman Mustaqim, S.T.",
    role: "Kepala Jurusan TO",
    subject: "Teknik Otomotif",
    category: ["semua", "produktif"],
    photo: "/images/GuruProduktif/Guru-TO3.png",
    color: "from-emerald-500 to-emerald-400",
    bio: "Membimbing siswa dalam praktik perbaikan dan perawatan kendaraan bermotor sesuai standar industri otomotif, sekaligus menanamkan ketelitian dan keselamatan kerja sebagai bekal penting di dunia kerja bengkel maupun manufaktur.",
    instagram: "https://instagram.com/",
    linkedin: "https://linkedin.com/in/",
    email: "dedi.kurniawan@widyanusantara.sch.id",
  },
  {
    name: "Novita Sari H. S.E.,M.Si.,Gr.",
    role: "Kepala Jurusan AKL",
    subject: "Akuntansi Keuangan Lembaga",
    category: ["semua", "produktif"],
    photo: "/images/GuruProduktif/Guru-AKL4.png",
    color: "from-emerald-500 to-emerald-400",
    bio: "Memastikan kurikulum akuntansi selaras dengan praktik keuangan modern dan kebutuhan dunia kerja, sehingga siswa terbiasa menggunakan sistem pencatatan keuangan yang digunakan di lembaga maupun perusahaan saat ini.",
    instagram: "https://instagram.com/",
    linkedin: "https://linkedin.com/in/",
    email: "yuni.astuti@widyanusantara.sch.id",
  },
  {
    name: "Ayu Sekar Wangi, S.Pd.,Gr.",
    role: "Kepala Jurusan MPLB",
    subject: "Manajemen Perkantoran",
    category: ["semua", "produktif"],
    photo: "/images/GuruProduktif/Guru-MPLB1.png",
    color: "from-emerald-500 to-emerald-400",
    bio: "Mengajarkan administrasi perkantoran modern, kearsipan digital, dan tata kelola layanan bisnis, agar siswa terampil dalam mengelola dokumen dan komunikasi kerja sesuai standar perkantoran masa kini.",
    instagram: "https://instagram.com/",
    linkedin: "https://linkedin.com/in/",
    email: "sri.mulyani@widyanusantara.sch.id",
  },
  {
    name: "Purwoto Heri, S.T.,Gr.",
    role: "Guru Produktif",
    subject: "Pemrograman & Jaringan",
    category: ["semua", "produktif"],
    photo: "/images/GuruProduktif/Guru-TKJ1.png",
    color: "from-purple-500 to-purple-400",
    bio: "Mengajar pemrograman web, basis data, dan jaringan komputer dengan pendekatan project-based learning, sehingga siswa belajar langsung melalui proyek nyata yang relevan dengan kebutuhan industri teknologi.",
    instagram: "https://instagram.com/",
    linkedin: "https://linkedin.com/in/",
    email: "ahmad.fauzi@widyanusantara.sch.id",
  },
  {
    name: "Hasri Akbar, S.Kom.,Gr.",
    role: "Guru Produktif",
    subject: "Pemrograman & Jaringan",
    category: ["semua", "produktif"],
    photo: "/images/GuruProduktif/Guru-TKJ5.png",
    color: "from-purple-500 to-purple-400",
    bio: "Mengajar pemrograman web, basis data, dan jaringan komputer dengan pendekatan project-based learning, sehingga siswa belajar langsung melalui proyek nyata yang relevan dengan kebutuhan industri teknologi.",
    instagram: "https://instagram.com/",
    linkedin: "https://linkedin.com/in/",
    email: "ahmad.fauzi@widyanusantara.sch.id",
  },
  {
    name: "Nana Supriatna, S.T.,Gr.",
    role: "Guru Produktif",
    subject: "Pemrograman & Jaringan",
    category: ["semua", "produktif"],
    photo: "/images/GuruProduktif/Guru-TKJ2.png",
    color: "from-purple-500 to-purple-400",
    bio: "Mengajar pemrograman web, basis data, dan jaringan komputer dengan pendekatan project-based learning, sehingga siswa belajar langsung melalui proyek nyata yang relevan dengan kebutuhan industri teknologi.",
    instagram: "https://instagram.com/",
    linkedin: "https://linkedin.com/in/",
    email: "ahmad.fauzi@widyanusantara.sch.id",
  },
  {
    name: "Alamsyah, S.Kom.,Gr.",
    role: "Guru Produktif",
    subject: "Pemrograman & Jaringan",
    category: ["semua", "produktif"],
    photo: "/images/GuruProduktif/Guru-TKJ4.png",
    color: "from-purple-500 to-purple-400",
    bio: "Mengajar pemrograman web, basis data, dan jaringan komputer dengan pendekatan project-based learning, sehingga siswa belajar langsung melalui proyek nyata yang relevan dengan kebutuhan industri teknologi.",
    instagram: "https://instagram.com/",
    linkedin: "https://linkedin.com/in/",
    email: "ahmad.fauzi@widyanusantara.sch.id",
  },
  {
    name: "Depina Ayuna Prima, S.Pd.,Gr.",
    role: "Guru Produktif",
    subject: "MPLB",
    category: ["semua", "produktif"],
    photo: "/images/GuruProduktif/Guru-MPLB2.png",
    color: "from-purple-500 to-purple-400",
    bio: "Mengajar kearsipan, administrasi perkantoran, dan layanan bisnis dengan pendekatan praktik langsung, sehingga siswa terbiasa mengelola dokumen, korespondensi, dan pelayanan pelanggan sesuai standar dunia kerja.",
    instagram: "https://instagram.com/",
    linkedin: "https://linkedin.com/in/",
    email: "ahmad.fauzi@widyanusantara.sch.id",
  },
  {
    name: "Varid Kristianto, S.Pd.,Gr.",
    role: "Guru Produktif",
    subject: "MPLB",
    category: ["semua", "produktif"],
    photo: "/images/GuruProduktif/Guru-MPLB3.png",
    color: "from-purple-500 to-purple-400",
    bio: "Mengajar kearsipan, administrasi perkantoran, dan layanan bisnis dengan pendekatan praktik langsung, sehingga siswa terbiasa mengelola dokumen, korespondensi, dan pelayanan pelanggan sesuai standar dunia kerja.",
    instagram: "https://instagram.com/",
    linkedin: "https://linkedin.com/in/",
    email: "ahmad.fauzi@widyanusantara.sch.id",
  },
  {
    name: "Vitria ekayani S.Pd.,Gr",
    role: "Guru Produktif",
    subject: "MPLB",
    category: ["semua", "produktif"],
    photo: "/images/GuruProduktif/Guru-MPLB4.png",
    color: "from-purple-500 to-purple-400",
    bio: "Mengajar kearsipan, administrasi perkantoran, dan layanan bisnis dengan pendekatan praktik langsung, sehingga siswa terbiasa mengelola dokumen, korespondensi, dan pelayanan pelanggan sesuai standar dunia kerja.",
    instagram: "https://instagram.com/",
    linkedin: "https://linkedin.com/in/",
    email: "ahmad.fauzi@widyanusantara.sch.id",
  },
  {
    name: "Ari Setyiowati, S.Pd.,Gr.",
    role: "Guru Produktif",
    subject: "AKL",
    category: ["semua", "produktif"],
    photo: "/images/GuruProduktif/Guru-AKL1.png",
    color: "from-purple-500 to-purple-400",
    bio: "Mengajar akuntansi dasar, pengelolaan keuangan, dan perpajakan dengan pendekatan studi kasus nyata, sehingga siswa mampu menyusun laporan keuangan secara akurat dan siap terjun di dunia perbankan maupun industri.",
    instagram: "https://instagram.com/",
    linkedin: "https://linkedin.com/in/",
    email: "ahmad.fauzi@widyanusantara.sch.id",
  },
  {
    name: "Muhammad Ibnu S.Pd.,Gr.",
    role: "Guru Produktif",
    subject: "AKL",
    category: ["semua", "produktif"],
    photo: "/images/GuruProduktif/Guru-AKL2.png",
    color: "from-purple-500 to-purple-400",
    bio: "Mengajar akuntansi dasar, pengelolaan keuangan, dan perpajakan dengan pendekatan studi kasus nyata, sehingga siswa mampu menyusun laporan keuangan secara akurat dan siap terjun di dunia perbankan maupun industri.",
    instagram: "https://instagram.com/",
    linkedin: "https://linkedin.com/in/",
    email: "ahmad.fauzi@widyanusantara.sch.id",
  },
  {
    name: "Wuryatni, S.E.,Gr.",
    role: "Guru Produktif",
    subject: "AKL",
    category: ["semua", "produktif"],
    photo: "/images/GuruProduktif/Guru-AKL3.png",
    color: "from-purple-500 to-purple-400",
    bio: "Mengajar akuntansi dasar, pengelolaan keuangan, dan perpajakan dengan pendekatan studi kasus nyata, sehingga siswa mampu menyusun laporan keuangan secara akurat dan siap terjun di dunia perbankan maupun industri.",
    instagram: "https://instagram.com/",
    linkedin: "https://linkedin.com/in/",
    email: "ahmad.fauzi@widyanusantara.sch.id",
  },
  {
    name: "Fahri Fauzi,S.T.,Gr.",
    role: "Guru Produktif",
    subject: "Teknik Otomotif",
    category: ["semua", "produktif"],
    photo: "/images/GuruProduktif/Guru-TO1.png",
    color: "from-purple-500 to-purple-400",
    bio: "Mengajar perawatan dan perbaikan kendaraan, kelistrikan otomotif, serta sistem mesin dengan pendekatan praktik langsung di bengkel, sehingga siswa terampil menangani kendaraan sesuai standar industri otomotif.",
    instagram: "https://instagram.com/",
    linkedin: "https://linkedin.com/in/",
    email: "ahmad.fauzi@widyanusantara.sch.id",
  },
  {
    name: "M. Arief Shobari, A.Md.",
    role: "Guru Produktif",
    subject: "Teknik Otomotif",
    category: ["semua", "produktif"],
    photo: "/images/GuruProduktif/Guru-TO2.png",
    color: "from-purple-500 to-purple-400",
    bio: "Mengajar perawatan dan perbaikan kendaraan, kelistrikan otomotif, serta sistem mesin dengan pendekatan praktik langsung di bengkel, sehingga siswa terampil menangani kendaraan sesuai standar industri otomotif.",
    instagram: "https://instagram.com/",
    linkedin: "https://linkedin.com/in/",
    email: "ahmad.fauzi@widyanusantara.sch.id",
  },

  // ===== UMUM =====
  {
    name: "Eko Agus Saputro, S.Si.",
    role: "Guru Umum",
    subject: "Matematika",
    category: ["semua", "umum"],
    photo: "/images/GuruUmum/Guru-Umum.png",
    color: "from-orange-500 to-orange-400",
    bio: "Mengajar Matematika dengan fokus pada kemampuan literasi dan komunikasi efektif siswa, sehingga konsep-konsep matematika lebih mudah dipahami dan diterapkan dalam konteks kehidupan maupun kejuruan.",
    instagram: "https://instagram.com/",
    linkedin: "https://linkedin.com/in/",
    email: "eko.agus@widyanusantara.sch.id",
  },
  {
    name: "Dwi Meutia Sari, S.Pd.,Gr.",
    role: "Guru Umum",
    subject: "Bahasa Indonesia",
    category: ["semua", "umum"],
    photo: "/images/Pimpinan/Guru-Kurikulum.png",
    color: "from-orange-500 to-orange-400",
    bio: "Mengajar Bahasa Indonesia dengan fokus pada kemampuan literasi dan komunikasi efektif siswa, sehingga konsep-konsep Bahasa lebih mudah dipahami dan diterapkan dalam konteks kehidupan maupun kejuruan.",
    instagram: "https://instagram.com/",
    linkedin: "https://linkedin.com/in/",
    email: "eko.agus@widyanusantara.sch.id",
  },
  {
    name: "M. Syahbanu Zhari, S.Pd.,Gr.",
    role: "Guru Umum",
    subject: "Olahraga",
    category: ["semua", "umum"],
    photo: "/images/Pimpinan/Guru-Kesiswaan.png",
    color: "from-orange-500 to-orange-400",
    bio: "Mengajar Olahraga dengan fokus pada kemampuan literasi dan komunikasi efektif siswa, sehingga konsep-konsep Olahraga lebih mudah dipahami dan diterapkan dalam konteks kehidupan maupun kejuruan.",
    instagram: "https://instagram.com/",
    linkedin: "https://linkedin.com/in/",
    email: "eko.agus@widyanusantara.sch.id",
  },
  {
    name: "Hanna Mariana, A.Md.",
    role: "Guru Umum",
    subject: "Bahasa China",
    category: ["semua", "umum"],
    photo: "/images/GuruUmum/Guru-Umum1.png",
    color: "from-orange-500 to-orange-400",
    bio: "Mengajar Bahasa China dengan pendekatan yang aplikatif dan komunikatif, membantu siswa membangun kepercayaan diri berbahasa asing sebagai bekal tambahan menghadapi peluang kerja di berbagai sektor industri.",
    instagram: "https://instagram.com/",
    linkedin: "https://linkedin.com/in/",
    email: "hanna.mariana@widyanusantara.sch.id",
  },
  {
    name: "Siti Maulida Fitriani S.Pd.,Gr.",
    role: "Guru Umum",
    subject: "BP/BK",
    category: ["semua", "umum"],
    photo: "/images/GuruUmum/Guru-Umum5.png",
    color: "from-orange-500 to-orange-400",
    bio: "Memberikan layanan bimbingan dan konseling untuk membantu siswa mengenali potensi diri, mengatasi masalah pribadi maupun akademik, serta merencanakan masa depan dengan lebih matang.",
    instagram: "https://instagram.com/",
    linkedin: "https://linkedin.com/in/",
    email: "siti.maulida@widyanusantara.sch.id",
  },
  {
    name: "Wilda Kamalia, S.Pd.,Gr.",
    role: "Guru Umum",
    subject: "BP/BK",
    category: ["semua", "umum"],
    photo: "/images/GuruUmum/Guru-Umum6.png",
    color: "from-orange-500 to-orange-400",
    bio: "Mendampingi siswa dalam menghadapi tantangan pribadi, sosial, maupun akademik melalui layanan konseling yang suportif, sekaligus membantu siswa menyusun rencana karier ke depan.",
    instagram: "https://instagram.com/",
    linkedin: "https://linkedin.com/in/",
    email: "wilda.kamalia@widyanusantara.sch.id",
  },
  {
    name: "Nur Vidya Yuliani, S.Pd.,Gr.",
    role: "Guru Umum",
    subject: "OlahRaga",
    category: ["semua", "umum"],
    photo: "/images/GuruUmum/Guru-Umum7.png",
    color: "from-orange-500 to-orange-400",
    bio: "Membina kebugaran jasmani dan jiwa sportivitas siswa melalui kegiatan olahraga yang terstruktur, sekaligus menumbuhkan semangat kerja sama dan disiplin di luar ruang kelas.",
    instagram: "https://instagram.com/",
    linkedin: "https://linkedin.com/in/",
    email: "nur.vidya@widyanusantara.sch.id",
  },
  {
    name: "Rifka Alfiatin Z. S.Pd.,Gr.",
    role: "Guru Umum",
    subject: "Pendidikan Kewarganegaraan (PKN)",
    category: ["semua", "umum"],
    photo: "/images/GuruUmum/Guru-Umum8.png",
    color: "from-orange-500 to-orange-400",
    bio: "Mengajar Pendidikan Kewarganegaraan dengan pendekatan yang aplikatif, menumbuhkan kesadaran berbangsa dan bernegara serta sikap toleransi pada siswa di tengah keberagaman masyarakat.",
    instagram: "https://instagram.com/",
    linkedin: "https://linkedin.com/in/",
    email: "rifka.alfiatin@widyanusantara.sch.id",
  },
  {
    name: "Vista Sulaim Arrumma'iza. S.Pd.,Gr.",
    role: "Guru Umum",
    subject: "Bahasa Inggris",
    category: ["semua", "umum"],
    photo: "/images/GuruUmum/Guru-Umum9.png",
    color: "from-orange-500 to-orange-400",
    bio: "Mengajar Bahasa Inggris dengan pendekatan komunikatif dan aplikatif, membekali siswa kemampuan berbahasa asing yang dibutuhkan dalam dunia kerja maupun pendidikan lanjutan.",
    instagram: "https://instagram.com/",
    linkedin: "https://linkedin.com/in/",
    email: "vista.sulaim@widyanusantara.sch.id",
  },
  {
    name: "Rizky Syaputra. S.Pd.",
    role: "Guru Umum",
    subject: "Bahasa Inggris",
    category: ["semua", "umum"],
    photo: "/images/GuruUmum/Guru-Umum10.png",
    color: "from-orange-500 to-orange-400",
    bio: "Mengajar Bahasa Inggris dengan suasana kelas yang interaktif, mendorong siswa untuk lebih aktif berbicara dan percaya diri menggunakan bahasa Inggris dalam situasi sehari-hari maupun dunia kerja.",
    instagram: "https://instagram.com/",
    linkedin: "https://linkedin.com/in/",
    email: "rizky.syaputra@widyanusantara.sch.id",
  },
  {
    name: "Ririn Arianti. S.Pd.,Gr",
    role: "Guru Umum",
    subject: "Bahasa Indonesia",
    category: ["semua", "umum"],
    photo: "/images/GuruUmum/Guru-Umum11.png",
    color: "from-orange-500 to-orange-400",
    bio: "Mengajar Bahasa Indonesia dengan pendekatan yang aplikatif, melatih kemampuan berbahasa, menulis, dan berkomunikasi siswa secara baik dan benar sesuai konteks formal maupun profesional.",
    instagram: "https://instagram.com/",
    linkedin: "https://linkedin.com/in/",
    email: "ririn.arianti@widyanusantara.sch.id",
  },
  {
    name: "Hani M Hidayatullah, S.Pd.,Gr.",
    role: "Guru Umum",
    subject: "Ilmu Pengetahuan Alam dan Sosial (IPAS)",
    category: ["semua", "umum"],
    photo: "/images/GuruUmum/Guru-Umum13.png",
    color: "from-orange-500 to-orange-400",
    bio: "Mengajar Ilmu Pengetahuan Alam dan Sosial dengan pendekatan kontekstual, membantu siswa memahami fenomena alam dan dinamika sosial yang relevan dengan kehidupan sehari-hari.",
    instagram: "https://instagram.com/",
    linkedin: "https://linkedin.com/in/",
    email: "hani.hidayatullah@widyanusantara.sch.id",
  },
  {
    name: "Heru Ichwansyah, S.Pd.,Gr.",
    role: "Guru Umum",
    subject: "Matematika",
    category: ["semua", "umum"],
    photo: "/images/GuruUmum/Guru-Umum14.png",
    color: "from-orange-500 to-orange-400",
    bio: "Mengajar Matematika dengan pendekatan yang aplikatif, membantu siswa memahami konsep berhitung dan logika secara bertahap agar lebih siap menghadapi tantangan akademik maupun praktik kejuruan.",
    instagram: "https://instagram.com/",
    linkedin: "https://linkedin.com/in/",
    email: "heru.ichwansyah@widyanusantara.sch.id",
  },
  {
    name: "Abdul Kholik, S.Pd.,Gr.",
    role: "Guru Umum",
    subject: "Agama Islam",
    category: ["semua", "umum"],
    photo: "/images/GuruUmum/Guru-Umum15.png",
    color: "from-orange-500 to-orange-400",
    bio: "Mengajar Pendidikan Agama Islam dengan pendekatan yang aplikatif, menanamkan nilai-nilai keimanan, akhlak mulia, dan kepribadian yang baik sebagai bekal hidup siswa.",
    instagram: "https://instagram.com/",
    linkedin: "https://linkedin.com/in/",
    email: "abdul.kholik@widyanusantara.sch.id",
  },
  {
    name: "H. Solihadin.",
    role: "Guru Umum",
    subject: "Bahasa Sunda",
    category: ["semua", "umum"],
    photo: "/images/GuruUmum/Guru-Umum2.png",
    color: "from-orange-500 to-orange-400",
    bio: "Mengajar Bahasa Sunda dengan penekanan pada kemampuan komunikasi untuk dunia kerja dan industri, sekaligus melestarikan budaya dan kearifan lokal Jawa Barat di kalangan generasi muda.",
    instagram: "https://instagram.com/",
    linkedin: "https://linkedin.com/in/",
    email: "h.solihadin@widyanusantara.sch.id",
  },
  {
    name: "Lusi Suqilma A.C, S.Pd.,Gr.",
    role: "Guru Umum",
    subject: "Matematika",
    category: ["semua", "umum"],
    photo: "/images/GuruUmum/Guru-Umum4.png",
    color: "from-orange-500 to-orange-400",
    bio: "Mengajar Matematika dengan penekanan pada kemampuan komunikasi untuk dunia kerja dan industri, sambil membangun pola pikir analitis siswa dalam menyelesaikan masalah secara sistematis.",
    instagram: "https://instagram.com/",
    linkedin: "https://linkedin.com/in/",
    email: "lusi.suqilma@widyanusantara.sch.id",
  },
  {
    name: "Nirwan Maulana, S.Pd.,Gr.",
    role: "Guru Umum",
    subject: "Agama Islam",
    category: ["semua", "umum"],
    photo: "/images/GuruUmum/Guru-Umum16.png",
    color: "from-orange-500 to-orange-400",
    bio: "Mengajar Agama Islam dengan penekanan pada pemahaman nilai-nilai keislaman, mendampingi siswa membangun karakter yang religius, jujur, dan berakhlak baik dalam kehidupan sehari-hari.",
    instagram: "https://instagram.com/",
    linkedin: "https://linkedin.com/in/",
    email: "nirwan.maulana@widyanusantara.sch.id",
  },

  // ===== STAFF =====
  {
    name: "Asih Andriani",
    role: "Staff Tata Usaha",
    subject: "Keuangan",
    category: ["semua", "staff"],
    photo: "/images/Staff/Staff.png",
    color: "from-slate-500 to-slate-400",
    bio: "Bertanggung jawab atas pengelolaan keuangan sekolah, termasuk pencatatan transaksi, penyusunan laporan, serta memastikan setiap proses keuangan berjalan tertib dan akuntabel.",
    instagram: "https://instagram.com/",
    linkedin: "https://linkedin.com/in/",
    email: "hendra.wijaya@widyanusantara.sch.id",
  },
  {
    name: "Romdoni.",
    role: "Staff Tata Usaha",
    subject: "Caraka",
    category: ["semua", "staff"],
    photo: "/images/Staff/Staff1.png",
    color: "from-slate-500 to-slate-400",
    bio: "Bertanggung jawab atas kebersihan, keamanan, dan kenyamanan lingkungan sekolah sehari-hari, sehingga seluruh kegiatan belajar mengajar dapat berjalan dengan tenang dan kondusif.",
    instagram: "https://instagram.com/",
    linkedin: "https://linkedin.com/in/",
    email: "lestari.ningrum@widyanusantara.sch.id",
  },
  {
    name: "Sulthan Farhan, D.P. S.Kom.",
    role: "Staff Tata Usaha",
    subject: "Administrasi Sekolah",
    category: ["semua", "staff"],
    photo: "/images/Staff/Staff2.png",
    color: "from-slate-500 to-slate-400",
    bio: "Mengelola administrasi umum, surat-menyurat, dan kebutuhan operasional sekolah sehari-hari, sehingga proses administratif berjalan tertib dan mendukung kelancaran kegiatan sekolah.",
    instagram: "https://instagram.com/",
    linkedin: "https://linkedin.com/in/",
    email: "sulthan.farhan@widyanusantara.sch.id",
  },
  {
    name: "Dwi Haris Setiawan.",
    role: "Staff Tata Usaha",
    subject: "Administrasi Sekolah",
    category: ["semua", "staff"],
    photo: "/images/Staff/Staff3.png",
    color: "from-slate-500 to-slate-400",
    bio: "Membantu pengelolaan dokumen dan arsip sekolah serta mendukung kebutuhan operasional harian agar layanan administrasi kepada siswa, guru, dan orang tua tetap berjalan lancar.",
    instagram: "https://instagram.com/",
    linkedin: "https://linkedin.com/in/",
    email: "dwi.haris@widyanusantara.sch.id",
  },
];

const filters: { label: string; value: Category }[] = [
  { label: "Semua", value: "semua" },
  { label: "Pimpinan", value: "kepala" },
  { label: "Produktif", value: "produktif" },
  { label: "Umum", value: "umum" },
  { label: "Staff", value: "staff" },
];

export default function OrganizationSection() {
  const [activeFilter, setActiveFilter] = useState<Category>("semua");
  const [selectedTeacher, setSelectedTeacher] = useState<Teacher | null>(null);

  const filtered = teachers.filter((t) => t.category.includes(activeFilter));

  return (
    <section
      id="guru"
      className="relative py-16 sm:py-20 lg:py-28 bg-gray-50 overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-navy-200 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-12"
        >
          <span className="inline-block px-4 py-1.5 bg-royal-500/10 text-royal-500 font-inter font-semibold text-xs sm:text-sm rounded-full mb-4">
            Tenaga Pendidik
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-poppins font-bold text-navy-900 mb-4">
            Struktur Organisasi & Guru
          </h2>
          <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-royal-500 to-gold-500 mx-auto rounded-full" />
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="flex flex-wrap justify-center gap-2 mb-8 sm:mb-12"
        >
          {filters.map((f) => (
            <button
              key={f.value}
              onClick={() => setActiveFilter(f.value)}
              className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-full font-inter font-medium text-xs sm:text-sm transition-all duration-300 ${
                activeFilter === f.value
                  ? "bg-navy-900 text-white shadow-lg shadow-navy-900/20"
                  : "bg-white text-gray-600 hover:bg-navy-900/5 border border-gray-200"
              }`}
            >
              {f.label}
            </button>
          ))}
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          layout
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-4 lg:gap-5"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((teacher, i) => (
              <motion.div
                key={`${teacher.name}-${i}`}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: i * 0.04 }}
                onClick={() => setSelectedTeacher(teacher)}
                className="group relative rounded-xl sm:rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-500 hover:-translate-y-1 cursor-pointer border border-gray-100 hover:border-blue-300/40"
              >
                {/* Photo — full card height */}
                <div className="relative h-52 sm:h-60 lg:h-64 overflow-hidden bg-gray-200">
                  <img
                    src={teacher.photo}
                    alt={teacher.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  {/* Default: subtle dark gradient bawah supaya badge terbaca */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent transition-opacity duration-400 group-hover:opacity-0" />

                  {/* Hover: biru gradient dari bawah ke atas */}
                  <div className="absolute bottom-0 left-0 right-0 h-2/3 bg-gradient-to-t from-blue-950/90 via-blue-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />

                  {/* Badge role — tampil default, hilang saat hover */}
                  <div className="absolute top-2 sm:top-3 left-2 sm:left-3 transition-all duration-300 group-hover:opacity-0 group-hover:-translate-y-1">
                    <span
                      className={`inline-block px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full text-[9px] sm:text-[10px] font-inter font-bold text-white bg-gradient-to-r ${teacher.color} shadow-sm`}
                    >
                      {teacher.role}
                    </span>
                  </div>

                  {/* Hover content — slide up dari bawah */}
                  <div className="absolute inset-0 flex flex-col justify-end p-3 sm:p-4 opacity-0 group-hover:opacity-100 translate-y-3 group-hover:translate-y-0 transition-all duration-400">
                    {/* Badge di hover */}
                    <span
                      className={`inline-block self-start px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full text-[9px] sm:text-[10px] font-inter font-bold text-white bg-gradient-to-r ${teacher.color} mb-2 shadow-sm`}
                    >
                      {teacher.role}
                    </span>

                    {/* Nama */}
                    <h4 className="font-poppins font-bold text-white text-xs sm:text-sm leading-tight mb-1 line-clamp-2 drop-shadow-md">
                      {teacher.name}
                    </h4>

                    {/* Subject */}
                    <p className="font-inter text-blue-100 text-[10px] sm:text-xs flex items-center gap-1 mb-3">
                      <BookOpen className="w-3 h-3 text-blue-200 flex-shrink-0" />
                      <span className="line-clamp-1">{teacher.subject}</span>
                    </p>

                    {/* Social icons */}
                    <div
                      className="flex gap-1.5"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <a
                        href={teacher.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-7 h-7 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/40 transition-colors"
                        title="Instagram"
                      >
                        <Instagram className="w-3.5 h-3.5 text-white" />
                      </a>
                      <a
                        href={teacher.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-7 h-7 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/40 transition-colors"
                        title="LinkedIn"
                      >
                        <Linkedin className="w-3.5 h-3.5 text-white" />
                      </a>
                    </div>
                  </div>
                </div>
                {/* ✅ Tidak ada div info di bawah — semua info ada di dalam foto saat hover */}
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Detail Modal */}
      <AnimatePresence>
        {selectedTeacher && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={() => setSelectedTeacher(null)}
            className="fixed inset-0 z-[200] flex items-center justify-center p-3 sm:p-4 bg-navy-950/70 backdrop-blur-sm"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-2xl sm:rounded-3xl overflow-hidden w-full max-w-lg sm:max-w-2xl max-h-[88vh] overflow-y-auto shadow-2xl"
            >
              {/* Header / Photo */}
              <div className="relative h-64 sm:h-80">
                <img
                  src={selectedTeacher.photo}
                  alt={selectedTeacher.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900/85 via-navy-900/30 to-transparent" />

                <button
                  onClick={() => setSelectedTeacher(null)}
                  className="absolute top-3 right-3 w-9 h-9 rounded-full bg-white/15 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="absolute bottom-3 sm:bottom-4 left-4 sm:left-6 right-4 sm:right-6">
                  <span
                    className={`inline-block px-2.5 sm:px-3 py-1 rounded-full text-[10px] sm:text-xs font-inter font-bold text-white bg-gradient-to-r ${selectedTeacher.color} mb-2`}
                  >
                    {selectedTeacher.role}
                  </span>
                  <h3 className="text-lg sm:text-2xl font-poppins font-bold text-white leading-tight">
                    {selectedTeacher.name}
                  </h3>
                  <p className="text-white/70 text-xs sm:text-sm font-inter mt-0.5">
                    {selectedTeacher.subject}
                  </p>
                </div>
              </div>

              {/* Body */}
              <div className="p-5 sm:p-8">
                <p className="font-inter text-gray-600 text-sm sm:text-base leading-relaxed mb-6">
                  {selectedTeacher.bio}
                </p>

                {/* Education */}
                {selectedTeacher.education &&
                  selectedTeacher.education.length > 0 && (
                    <div className="mb-6">
                      <h4 className="flex items-center gap-2 font-poppins font-bold text-navy-900 text-sm sm:text-base mb-3">
                        <GraduationCap className="w-4 h-4 sm:w-5 sm:h-5 text-royal-500" />
                        Pendidikan
                      </h4>
                      <ul className="space-y-2">
                        {selectedTeacher.education.map((edu) => (
                          <li
                            key={edu}
                            className="font-inter text-gray-600 text-xs sm:text-sm pl-3 border-l-2 border-royal-500/30"
                          >
                            {edu}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                {/* Experience */}
                {selectedTeacher.experience &&
                  selectedTeacher.experience.length > 0 && (
                    <div className="mb-6">
                      <h4 className="flex items-center gap-2 font-poppins font-bold text-navy-900 text-sm sm:text-base mb-3">
                        <Briefcase className="w-4 h-4 sm:w-5 sm:h-5 text-gold-500" />
                        Pengalaman
                      </h4>
                      <ul className="space-y-2">
                        {selectedTeacher.experience.map((exp) => (
                          <li
                            key={exp}
                            className="font-inter text-gray-600 text-xs sm:text-sm pl-3 border-l-2 border-gold-500/30"
                          >
                            {exp}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                {/* Kontak */}
                <div
                  className="flex items-center gap-2 sm:gap-3 pt-4 border-t border-gray-100"
                  onClick={(e) => e.stopPropagation()}
                >
                  <span className="font-inter text-xs sm:text-sm text-gray-500 mr-1">
                    Kontak:
                  </span>
                  <a
                    href={selectedTeacher.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-full bg-navy-900/5 hover:bg-gradient-to-br hover:from-purple-500 hover:to-pink-500 hover:text-white flex items-center justify-center text-navy-900 transition-all duration-300"
                    title="Instagram"
                  >
                    <Instagram className="w-4 h-4" />
                  </a>
                  <a
                    href={selectedTeacher.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-full bg-navy-900/5 hover:bg-blue-600 hover:text-white flex items-center justify-center text-navy-900 transition-all duration-300"
                    title="LinkedIn"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a
                    href={`mailto:${selectedTeacher.email}`}
                    className="w-9 h-9 rounded-full bg-navy-900/5 hover:bg-royal-500 hover:text-white flex items-center justify-center text-navy-900 transition-all duration-300"
                    title="Email"
                  >
                    <Mail className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
