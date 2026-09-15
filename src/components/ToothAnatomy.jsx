import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Layers, Activity, AlertCircle, Info, Zap } from 'lucide-react';

export default function ToothAnatomy() {
  const [activeLayer, setActiveLayer] = useState('dentina');

  const layersData = {
    esmalte: {
      name: "Esmalte Dental",
      badge: "Camada Externa • 96% Mineral",
      color: "border-sky-300 bg-sky-50 text-sky-900",
      accent: "bg-sky-500",
      description:
        "É a camada mais externa e o tecido mais duro de todo o corpo humano. Não possui células vivas nem nervos. No início, a cárie causa apenas mancha branca desmineralizada que ainda pode ser revertida com flúor e escovação.",
      tip: "Quando a cárie está só no esmalte, não dói e não precisa de broca!"
    },
    dentina: {
      name: "Dentina (Onde a mágica acontece)",
      badge: "Camada Média • Rica em Colágeno",
      color: "border-amber-300 bg-amber-50 text-amber-900",
      accent: "bg-amber-500",
      description:
        "Fica logo abaixo do esmalte. É viva, porosa e possui milhares de túbulos microscópicos conectados ao nervo. Aqui a cárie se divide em duas: a camada infectada (amolecida, cheia de bactérias) e a camada afetada (mais profunda, que ainda pode ser salva).",
      tip: "É aqui que a Remoção Seletiva atua: preservando a dentina afetada sadia!"
    },
    polpa: {
      name: "Polpa Dental (O Coração do Dente)",
      badge: "Camada Interna • Nervos e Vasos",
      color: "border-rose-300 bg-rose-50 text-rose-900",
      accent: "bg-rose-500",
      description:
        "O núcleo vital do dente, contendo terminações nervosas e suprimento sanguíneo. Se uma cárie profunda perfurar a polpa ou se o dentista desgastar demais agressivamente, a polpa inflama e quase sempre exige o tratamento de canal.",
      tip: "O objetivo de ouro da Odontologia Moderna é manter essa polpa viva!"
    }
  };

  return (
    <section id="o-que-e-carie" className="py-24 bg-white scroll-mt-20 border-t border-slate-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Scroll Animation */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-clinic-50 text-clinic-700 border border-clinic-200/80 mb-3">
            <Info className="w-3.5 h-3.5" />
            Entendendo do Início
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            O que é a cárie, afinal?
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Muita gente imagina a cárie como um "bichinho" que come o dente. Na realidade, ela é um{' '}
            <strong className="text-slate-900 font-semibold">desequilíbrio químico e biológico</strong>:
            bactérias presentes na boca aproveitam restos de açúcar da nossa alimentação e
            produzem ácidos que dissolvem os minerais do dente.
          </p>
        </motion.div>

        {/* 2-Column Explanatory Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: Conceptual Breakdown with Staggered Scroll Entry */}
          <div className="lg:col-span-5 space-y-4">
            {[
              {
                num: 1,
                bg: "bg-clinic-600",
                title: "Biofilme + Açúcar Frequente",
                desc: "As bactérias naturais da saliva formam uma película nos dentes. Ao ingerirmos açúcares com frequência, elas fermentam e liberam ácido contínuo."
              },
              {
                num: 2,
                bg: "bg-dental-600",
                title: "Perda de Minerais (Desmineralização)",
                desc: "O ácido dissolve os cristais de cálcio e fósforo. Se não for contido, a estrutura superficial amolece e forma uma cavidade."
              },
              {
                num: 3,
                bg: "bg-amber-500",
                title: "A Proximidade com o Nervo (O Risco)",
                desc: "Conforme a cárie aprofunda na dentina, ela se aproxima perigosamente da polpa. É exatamente nesse ponto crítico que a decisão do tratamento muda tudo!"
              }
            ].map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -25 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.45, delay: idx * 0.1, ease: "easeOut" }}
                whileHover={{ x: 4, transition: { duration: 0.2 } }}
                className="bg-slate-50 border border-slate-200/90 rounded-2xl p-5 shadow-xs transition-colors hover:border-clinic-200"
              >
                <h3 className="font-bold text-slate-900 text-base mb-2 flex items-center gap-2">
                  <span className={`w-6 h-6 rounded-lg ${step.bg} text-white flex items-center justify-center text-xs font-bold`}>
                    {step.num}
                  </span>
                  {step.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Right Column: Interactive Tooth Anatomy Viewer with Scroll Fade */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="lg:col-span-7 bg-gradient-to-br from-slate-50 to-clinic-50/40 rounded-3xl border border-slate-200/80 p-6 sm:p-8 shadow-xs"
          >
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-200/70">
              <div className="flex items-center gap-2">
                <Layers className="w-5 h-5 text-clinic-600" />
                <span className="font-bold text-slate-900 text-sm sm:text-base">
                  Anatomia Interativa: As 3 Camadas
                </span>
              </div>
              <span className="text-xs text-slate-500 bg-white px-2.5 py-1 rounded-full border border-slate-200 font-medium">
                Toque nas camadas
              </span>
            </div>

            {/* Layer Selection Buttons */}
            <div className="grid grid-cols-3 gap-2 mb-6">
              {[
                { id: 'esmalte', label: '1. Esmalte', activeClass: 'bg-sky-600 text-white border-sky-600' },
                { id: 'dentina', label: '2. Dentina ⭐', activeClass: 'bg-amber-600 text-white border-amber-600' },
                { id: 'polpa', label: '3. Polpa (Nervo)', activeClass: 'bg-rose-600 text-white border-rose-600' }
              ].map((btn) => (
                <button
                  key={btn.id}
                  onClick={() => setActiveLayer(btn.id)}
                  className={`py-2.5 px-3 rounded-xl text-xs sm:text-sm font-semibold transition-all border ${
                    activeLayer === btn.id
                      ? `${btn.activeClass} shadow-sm scale-[1.02]`
                      : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
                  }`}
                >
                  {btn.label}
                </button>
              ))}
            </div>

            {/* Schematic Visual Box with AnimatePresence */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs mb-4 min-h-[220px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeLayer}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.25 }}
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      {layersData[activeLayer].badge}
                    </span>
                    <span className={`w-3 h-3 rounded-full ${layersData[activeLayer].accent}`} />
                  </div>
                  <h4 className="text-lg font-bold text-slate-900 mb-2">
                    {layersData[activeLayer].name}
                  </h4>
                  <p className="text-slate-600 text-sm leading-relaxed mb-4">
                    {layersData[activeLayer].description}
                  </p>
                  <div className={`p-3 rounded-xl text-xs font-medium border flex items-center gap-2 ${layersData[activeLayer].color}`}>
                    <Zap className="w-4 h-4 shrink-0" />
                    <span>{layersData[activeLayer].tip}</span>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Depth Insight Note */}
            <div className="text-xs text-slate-500 text-center font-medium">
              💡 <strong>Regra de ouro:</strong> Quanto mais profunda a cavidade, mais perigoso é "raspar tudo".
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
