import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ToothAnatomy from './components/ToothAnatomy';
import SelectiveRemoval from './components/SelectiveRemoval';
import MythBusters from './components/MythBusters';
import Benefits from './components/Benefits';
import Timeline from './components/Timeline';
import Faq from './components/Faq';
import ScienceSection from './components/ScienceSection';
import SurveyCta from './components/SurveyCta';
import AboutProject from './components/AboutProject';
import Footer from './components/Footer';
import FloatingCta from './components/FloatingCta';
import ReferencesModal from './components/ReferencesModal';
import QrCodeModal from './components/QrCodeModal';

export default function App() {
  const [isReferencesModalOpen, setIsReferencesModalOpen] = useState(false);
  const [isQrModalOpen, setIsQrModalOpen] = useState(false);

  const handleOpenReferences = () => setIsReferencesModalOpen(true);
  const handleOpenQr = () => setIsQrModalOpen(true);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col selection:bg-clinic-500 selection:text-white">
      {/* Pinned Header with Reading Progress */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 1. Hero */}
        <Hero />

        {/* 2. O que é cárie? (Contextualização e camadas) */}
        <ToothAnatomy />

        {/* 3. O que é a Remoção Seletiva? (Analogia e simulador comparativo) */}
        <SelectiveRemoval />

        {/* 4. Mitos vs. Verdades (Cards 3D interativos) */}
        <MythBusters />

        {/* 5. Por que é indicada em cáries profundas? (Benefícios) */}
        <Benefits />

        {/* 6. Como funciona o tratamento (Linha do tempo) */}
        <Timeline />

        {/* 7. Perguntas Frequentes (FAQ Accordion) */}
        <Faq />

        {/* 8. Baseado em Ciência (Resumo de estudos e referências) */}
        <ScienceSection onOpenReferences={handleOpenReferences} />

        {/* 9. Chamada para o Formulário (CTA de destaque) */}
        <SurveyCta />

        {/* 10. Sobre Nós / Sobre o Projeto (FADIPA Extensão 2026) */}
        <AboutProject />
      </main>

      {/* 11. Rodapé */}
      <Footer
        onOpenReferences={handleOpenReferences}
        onOpenQr={handleOpenQr}
      />

      {/* Smart Bottom Floating CTA (aparece após rolar a página) */}
      <FloatingCta />

      {/* Modals */}
      <ReferencesModal
        isOpen={isReferencesModalOpen}
        onClose={() => setIsReferencesModalOpen(false)}
      />

      <QrCodeModal
        isOpen={isQrModalOpen}
        onClose={() => setIsQrModalOpen(false)}
      />
    </div>
  );
}
