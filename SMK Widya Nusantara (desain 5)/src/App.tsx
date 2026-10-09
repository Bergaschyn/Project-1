import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import ProfileSection from "./components/ProfileSection";
import PrincipalSection from "./components/PrincipalSection";
import OrganizationSection from "./components/OrganizationSection";
import CompetencySection from "./components/CompetencySection";
import FacilitySection from "./components/FacilitySection";
import GallerySection from "./components/GallerySection";
import NewsSection from "./components/NewsSection";
import AlumniSection from "./components/AlumniSection";
import LowonganKerjaSection from "./components/LowonganKerjaSection";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import LoadingScreen from "./components/LoadingScreen";
import MikrotikAcademy from "./components/MikrotikAcademy";

function HomePage() {
  const [loading, setLoading] = useState(true);
  const [pendingJurusan, setPendingJurusan] = useState<string | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading && <LoadingScreen />}
      <div className="min-h-screen bg-white">
        <Navbar />
        <main>
          <HeroSection
            onOpenJurusanDetail={(short) => setPendingJurusan(short)}
          />
          <ProfileSection />
          <PrincipalSection />
          <OrganizationSection />
          <CompetencySection
            openJurusanShort={pendingJurusan}
            onJurusanOpened={() => setPendingJurusan(null)}
          />
          <FacilitySection />
          <GallerySection />
          <NewsSection />
          <AlumniSection />
        </main>
        <Footer onOpenJurusanDetail={(short) => setPendingJurusan(short)} />
        <WhatsAppButton />
      </div>
    </>
  );
}

function MikrotikPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <MikrotikAcademy />
      <WhatsAppButton />
    </div>
  );
}

function LowonganPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      <main className="pt-8 lg:pt-12">
        <LowonganKerjaSection />
      </main>
      <WhatsAppButton />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/mikrotik-academy" element={<MikrotikPage />} />
        <Route path="/lowongan" element={<LowonganPage />} />
      </Routes>
    </BrowserRouter>
  );
}