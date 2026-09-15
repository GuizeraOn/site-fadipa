import React from 'react';
import { motion } from 'framer-motion';
import { Search, Scissors, ShieldCheck, CalendarCheck, Clock, CheckCircle } from 'lucide-react';
import { TIMELINE_STEPS } from '../constants';

const iconMap = {
  Search: Search,
  Scissors: Scissors,
  ShieldCheck: ShieldCheck,
  CalendarCheck: CalendarCheck,
};

export default function Timeline() {
  return (
    <section id="como-funciona" className="py-24 bg-white scroll-mt-20 border-t border-slate-100">
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
            <Clock className="w-3.5 h-3.5" />
            Passo a Passo
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            Como funciona o tratamento na prática?
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Uma linha do tempo simples para entender cada etapa realizada no consultório odontológico.
          </p>
        </motion.div>

        {/* Timeline Grid / Flow */}
        <div className="relative">
          {/* Connecting Line (Desktop) with Animation */}
          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            whileInView={{ scaleX: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeInOut" }}
            className="hidden lg:block absolute top-1/2 left-8 right-8 h-0.5 bg-gradient-to-r from-clinic-200 via-dental-300 to-clinic-200 -translate-y-12 z-0 origin-left"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
            {TIMELINE_STEPS.map((item, idx) => {
              const IconComponent = iconMap[item.icon] || Search;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.45, delay: idx * 0.1, ease: "easeOut" }}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                  className="bg-slate-50 hover:bg-white rounded-3xl p-6 border border-slate-200/90 shadow-xs hover:shadow-md hover:border-clinic-300 transition-all flex flex-col justify-between"
                >
                  <div>
                    {/* Step Number & Icon */}
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-12 h-12 rounded-2xl bg-white border border-slate-200 flex items-center justify-center text-clinic-600 shadow-xs font-extrabold text-base">
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <span className="text-2xl font-black text-slate-300 tracking-wider">
                        {item.step}
                      </span>
                    </div>

                    <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-2.5">
                      {item.title}
                    </h3>
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4">
                      {item.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-slate-200/70 text-[11px] font-semibold text-clinic-700 flex items-center gap-1.5">
                    <CheckCircle className="w-3.5 h-3.5 text-clinic-600 shrink-0" />
                    <span>{item.highlight}</span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Reassurance Banner with Smooth Entrance */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 bg-dental-50/70 border border-dental-200 rounded-2xl p-5 text-center max-w-2xl mx-auto text-xs sm:text-sm text-dental-900 shadow-xs"
        >
          ✨ <strong>Sem sofrimento:</strong> O procedimento é rápido, indolor sob anestesia local moderna e com recuperação muito mais tranquila do que um tratamento invasivo!
        </motion.div>
      </div>
    </section>
  );
}
