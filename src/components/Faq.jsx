import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle, MessageSquareQuote, Sparkles } from 'lucide-react';
import { FAQ_ITEMS } from '../constants';

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(0); // first item opened by default

  const toggleFaq = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-24 bg-slate-50 scroll-mt-20 border-t border-slate-200/60 relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-clinic-100/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header with Scroll Animation */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="text-center mb-14"
        >
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-clinic-100 text-clinic-900 border border-clinic-200/80 mb-3 shadow-xs">
            <HelpCircle className="w-3.5 h-3.5 text-clinic-600" />
            Tire Suas Dúvidas
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            Perguntas Frequentes
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
            Respostas diretas, descomplicadas e fundamentadas para esclarecer tudo sobre a técnica.
          </p>
        </motion.div>

        {/* Accordion List with Staggered Scroll Entry */}
        <div className="space-y-3.5">
          {FAQ_ITEMS.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: idx * 0.08, ease: "easeOut" }}
                className={`bg-white rounded-2xl border transition-all duration-300 shadow-xs overflow-hidden ${
                  isOpen
                    ? 'border-clinic-400 ring-2 ring-clinic-500/10 shadow-md'
                    : 'border-slate-200/90 hover:border-slate-300'
                }`}
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 hover:bg-slate-50/70 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-clinic-500"
                  aria-expanded={isOpen}
                >
                  <span className="font-bold text-slate-900 text-sm sm:text-base pr-2 flex items-center gap-3">
                    <span
                      className={`w-7 h-7 rounded-xl text-xs flex items-center justify-center shrink-0 font-black transition-colors ${
                        isOpen
                          ? 'bg-clinic-600 text-white shadow-xs'
                          : 'bg-clinic-50 text-clinic-700'
                      }`}
                    >
                      {idx + 1}
                    </span>
                    {item.question}
                  </span>

                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                      isOpen ? 'bg-clinic-100 text-clinic-700' : 'bg-slate-100 text-slate-500'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </motion.div>
                </button>

                {/* Animated Accordion Expansion using AnimatePresence */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{
                        height: { duration: 0.35, ease: [0.04, 0.62, 0.23, 0.98] },
                        opacity: { duration: 0.25, ease: "easeInOut" }
                      }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 sm:px-6 pb-6 pt-1 text-slate-600 text-sm leading-relaxed border-t border-slate-100/90">
                        <div className="bg-slate-50/80 p-4 sm:p-5 rounded-2xl border border-slate-100 text-slate-700 space-y-2">
                          <p>{item.answer}</p>
                          <div className="pt-2 flex items-center gap-1.5 text-xs text-clinic-700 font-medium">
                            <Sparkles className="w-3.5 h-3.5 text-clinic-500" />
                            <span>Explicação baseada em protocolos clínicos modernos</span>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Helper */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="mt-8 text-center text-xs text-slate-500 flex items-center justify-center gap-1.5"
        >
          <MessageSquareQuote className="w-4 h-4 text-clinic-500" />
          <span>Ficou com alguma dúvida específica? Você pode compartilhá-la no formulário ao final!</span>
        </motion.div>
      </div>
    </section>
  );
}
