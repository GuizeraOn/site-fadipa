import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ShieldAlert, Syringe, CheckCircle2, HeartPulse, Coins, Check } from 'lucide-react';
import { BENEFITS } from '../constants';

const iconMap = {
  Sparkles: Sparkles,
  ShieldAlert: ShieldAlert,
  Syringe: Syringe,
  CheckCircle2: CheckCircle2,
  HeartPulse: HeartPulse,
  Coins: Coins,
};

export default function Benefits() {
  return (
    <section id="beneficios" className="py-24 bg-slate-50 scroll-mt-20 border-t border-slate-200/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Scroll Animation */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-clinic-100 text-clinic-900 border border-clinic-200/80 mb-3">
            <Check className="w-3.5 h-3.5 text-clinic-600" />
            Vantagens Clínicas
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            Por que é a técnica ideal em cáries profundas?
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Ao contrário da antiga cultura do "desgaste excessivo", a Odontologia Minimamente
            Invasiva entrega benefícios diretos para a sua saúde e qualidade de vida.
          </p>
        </motion.div>

        {/* 6 Benefit Cards with Staggered Scroll Animation */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {BENEFITS.map((item, idx) => {
            const IconComponent = iconMap[item.icon] || Sparkles;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.45, delay: idx * 0.08, ease: "easeOut" }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-xs hover:shadow-md hover:border-clinic-300 transition-all group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-clinic-50 group-hover:bg-clinic-600 border border-clinic-100 group-hover:border-clinic-600 text-clinic-600 group-hover:text-white flex items-center justify-center transition-colors shadow-inner">
                      <IconComponent className="w-6 h-6 transition-transform group-hover:scale-110" />
                    </div>
                    <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-slate-100 text-slate-600 border border-slate-200/80">
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-clinic-700 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-xs font-semibold text-dental-700">
                  <Check className="w-3.5 h-3.5 text-dental-600" />
                  <span>Benefício direto comprovado</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
