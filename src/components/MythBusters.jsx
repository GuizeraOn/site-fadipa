import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { RotateCw, HelpCircle, CheckCircle2, AlertCircle, Sparkles } from 'lucide-react';
import { MYTHS_AND_TRUTHS } from '../constants';

export default function MythBusters() {
  const [flippedCards, setFlippedCards] = useState({});

  const toggleCard = (id) => {
    setFlippedCards((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <section id="mitos-verdades" className="py-24 bg-white scroll-mt-20 border-t border-slate-100">
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
            <HelpCircle className="w-3.5 h-3.5" />
            Desmistificando
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            Mitos vs. Verdades
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Muita informação desatualizada ainda circula sobre o tratamento de cáries.
            Toque ou clique nos cards abaixo para descobrir a verdade respaldada pela ciência!
          </p>
          <div className="mt-3.5 inline-flex items-center gap-2 text-xs font-medium text-clinic-600 bg-clinic-50/70 px-3.5 py-1.5 rounded-full border border-clinic-100">
            <RotateCw className="w-3.5 h-3.5 animate-spin" style={{ animationDuration: '6s' }} />
            <span>Toque no card para ver a resposta científica</span>
          </div>
        </motion.div>

        {/* 3D Flip Cards Grid with Staggered Scroll Entrance */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {MYTHS_AND_TRUTHS.map((item, idx) => {
            const isFlipped = !!flippedCards[item.id];
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.45, delay: idx * 0.1, ease: "easeOut" }}
                whileHover={{ scale: 1.015, transition: { duration: 0.2 } }}
                onClick={() => toggleCard(item.id)}
                className="perspective-1000 cursor-pointer h-72 sm:h-64 select-none group"
              >
                <div
                  className={`relative w-full h-full transition-transform duration-500 transform-style-3d ${
                    isFlipped ? 'rotate-y-180' : ''
                  }`}
                >
                  {/* FRONT: The Myth */}
                  <div className="absolute inset-0 backface-hidden bg-gradient-to-b from-white to-slate-50 rounded-3xl p-6 sm:p-7 border-2 border-slate-200 group-hover:border-clinic-300 shadow-xs flex flex-col justify-between transition-colors">
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-rose-100 text-rose-800 border border-rose-200">
                          <AlertCircle className="w-3.5 h-3.5" />
                          MITO #{item.id}
                        </span>
                        <span className="text-xs text-slate-400 font-medium flex items-center gap-1 group-hover:text-clinic-600 transition-colors">
                          <RotateCw className="w-3.5 h-3.5" /> Toque para virar
                        </span>
                      </div>
                      <h3 className="text-lg sm:text-xl font-bold text-slate-900 leading-snug">
                        "{item.myth}"
                      </h3>
                    </div>

                    <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                      <span>Será que isso é verdade?</span>
                      <span className="font-semibold text-clinic-600 group-hover:underline">
                        Ver resposta →
                      </span>
                    </div>
                  </div>

                  {/* BACK: The Truth */}
                  <div className="absolute inset-0 backface-hidden rotate-y-180 bg-gradient-to-b from-dental-50/90 to-white rounded-3xl p-6 sm:p-7 border-2 border-dental-300 shadow-md flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-dental-100 text-dental-800 border border-dental-200">
                          <CheckCircle2 className="w-3.5 h-3.5 text-dental-700" />
                          VERDADE CIENTÍFICA
                        </span>
                        <span className="text-xs text-dental-700 font-medium flex items-center gap-1">
                          <RotateCw className="w-3.5 h-3.5" /> Voltar
                        </span>
                      </div>
                      <p className="text-slate-700 text-xs sm:text-sm leading-relaxed">
                        {item.truth}
                      </p>
                    </div>

                    <div className="mt-3 p-2.5 bg-dental-100/60 rounded-xl border border-dental-200/80 text-[11px] sm:text-xs font-semibold text-dental-900 flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-dental-600 shrink-0" />
                      <span>{item.highlight}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
