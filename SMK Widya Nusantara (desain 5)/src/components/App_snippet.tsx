// Tambahkan state ini di App.tsx kamu
// (sesuaikan dengan struktur App.tsx yang sudah ada)

import { useState } from "react";

// Di dalam komponen App:
const [pendingJurusan, setPendingJurusan] = useState<string | null>(null);

// Lalu di JSX, pass props ke HeroSection dan CompetencySection:
/*
<HeroSection
  onOpenJurusanDetail={(short) => setPendingJurusan(short)}
/>

<CompetencySection
  openJurusanShort={pendingJurusan}
  onJurusanOpened={() => setPendingJurusan(null)}
/>
*/
