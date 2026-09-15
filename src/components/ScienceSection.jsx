import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, BookOpen, ExternalLink, CheckCircle, Award } from 'lucide-react';
import { SCIENTIFIC_STUDIES } from '../constants';

export default function ScienceSection({ onOpenReferences }) {
  return (
    <section id="ciencia" className="py-24 bg-white scroll-mt-20 border-t border-slate-100">
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
            <GraduationCap className="w-3.5 h-3.5" />
            Rigor Acadêmico
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            Baseado em Ciência, Comprovado na Prática
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            "Pesquisas recentes acompanharam pacientes por até 5 anos e confirmaram: a técnica é segura,
            mantém a polpa viva em mais de 90% dos casos e é o padrão-ouro na Odontologia contemporânea."
          </p>
        </motion.div>

        {/* 4 Studies Highlights Grid with Staggered Scroll Entry */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {SCIENTIFIC_STUDIES.map((study, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: idx * 0.1, ease: "easeOut" }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="bg-slate-50 hover:bg-white rounded-3xl p-6 border border-slate-200/90 shadow-xs hover:shadow-md hover:border-clinic-200 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold text-clinic-700 bg-clinic-100/80 px-2.5 py-1 rounded-full">
                    {study.authors} ({study.year})
                  </span>
                  <span className="text-[11px] font-medium text-slate-400">
                    {study.journal.split('/')[0]}
                  </span>
                </div>
                <h3 className="font-bold text-slate-900 text-sm sm:text-base leading-snug mb-2.5">
                  {study.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                  {study.keyFinding}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-200/70 text-xs italic text-slate-500 bg-white/70 p-3 rounded-xl">
                "{study.quote}"
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modal Opener Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-center"
        >
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={onOpenReferences}
            className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white text-xs sm:text-sm font-semibold px-6 py-3.5 rounded-xl shadow-sm hover:shadow-md transition-all"
          >
            <BookOpen className="w-4 h-4 text-dental-400" />
            <span>Ver referências científicas completas</span>
            <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
          </motion.button>
          <p className="text-xs text-slate-400 mt-2 font-medium">
            Abre modal detalhado com citações formais e periódicos indexados
          </p>
        </motion.div>
      </div>
    </section>
  );
}
