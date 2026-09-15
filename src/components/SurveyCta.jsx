import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, CheckCircle2, Heart } from 'lucide-react';
import { PROJECT_CONFIG } from '../constants';

export default function SurveyCta({ onOpenSurvey }) {
  return (
    <section id="questionario" className="py-24 relative overflow-hidden bg-gradient-to-br from-clinic-900 via-clinic-800 to-dental-900 text-white scroll-mt-20">
      {/* Decorative Animated Glow Elements */}
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.3, 0.15] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 right-0 -mt-12 -mr-12 w-96 h-96 bg-dental-400 rounded-full blur-3xl pointer-events-none"
      />
      <motion.div
        animate={{ scale: [1, 1.25, 1], opacity: [0.15, 0.25, 0.15] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-0 left-0 -mb-12 -ml-12 w-96 h-96 bg-clinic-400 rounded-full blur-3xl pointer-events-none"
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-white/10 text-dental-300 border border-white/15 backdrop-blur-xs mb-6"
        >
          <Sparkles className="w-3.5 h-3.5 text-dental-300" />
          Sua Participação Faz a Diferença
        </motion.div>

        {/* Motivational Title */}
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="text-3xl sm:text-5xl font-black tracking-tight mb-6 leading-tight"
        >
          Agora que você já entendeu o assunto,{' '}
          <span className="bg-gradient-to-r from-dental-300 to-sky-200 bg-clip-text text-transparent">
            queremos saber sua opinião!
          </span>
        </motion.h2>

        {/* Context description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-clinic-100 text-base sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed font-normal"
        >
          Este formulário rápido é parte do nosso Projeto de Extensão da FADIPA.
          Leva menos de <strong>2 minutos</strong> e ajuda nossa equipe a avaliar a clareza da
          comunicação científica para a comunidade.
        </motion.p>

        {/* Big CTA Button with Bounce & Pulse */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10"
        >
          <motion.button
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.97 }}
            onClick={onOpenSurvey}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-gradient-to-r from-dental-400 to-clinic-400 hover:from-dental-300 hover:to-clinic-300 text-slate-950 text-base sm:text-lg font-black px-8 py-4 rounded-2xl shadow-xl shadow-dental-500/25 transition-all"
          >
            <span>Responder Questionário de Opinião</span>
            <ArrowRight className="w-5 h-5" />
          </motion.button>
        </motion.div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-xs text-clinic-200/90 font-medium"
        >
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-dental-400" />
            <span>100% Anônimo & Seguro</span>
          </div>
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-dental-400" />
            <span>Apenas 4 a 5 perguntas rápidas</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Heart className="w-4 h-4 text-rose-400" />
            <span>Contribuição científica para a saúde pública</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
