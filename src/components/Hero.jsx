import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, ShieldCheck, HeartPulse, Sparkles, AlertCircle, CheckCircle2 } from 'lucide-react';
import { PROJECT_CONFIG } from '../constants';

export default function Hero({ onOpenSurvey }) {
  return (
    <section className="relative pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden bg-gradient-to-b from-clinic-50/70 via-white to-slate-50">
      {/* Dynamic Background Floating Blur Blobs */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 pointer-events-none overflow-hidden opacity-50">
        <motion.div
          animate={{ scale: [1, 1.1, 1], x: [0, 15, 0], y: [0, -10, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-10 left-10 w-72 h-72 bg-clinic-200/70 rounded-full mix-blend-multiply filter blur-3xl"
        />
        <motion.div
          animate={{ scale: [1, 1.15, 1], x: [0, -20, 0], y: [0, 15, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-10 right-10 w-80 h-80 bg-dental-200/70 rounded-full mix-blend-multiply filter blur-3xl"
        />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
        {/* Animated Top Badges */}
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="inline-flex flex-wrap items-center justify-center gap-2 mb-6"
        >
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-clinic-100/90 text-clinic-900 border border-clinic-200 shadow-xs">
            <span className="w-2 h-2 rounded-full bg-clinic-600 animate-ping" />
            Odontologia Baseada em Evidências
          </span>
          <span className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-medium bg-dental-50 text-dental-800 border border-dental-200">
            <Sparkles className="w-3.5 h-3.5 text-dental-600" />
            Projeto de Extensão FADIPA 2025
          </span>
        </motion.div>

        {/* Main Headline with Smooth Reveal */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.15] mb-6"
        >
          Você sabia que nem sempre é preciso remover{' '}
          <span className="bg-gradient-to-r from-clinic-600 to-dental-600 bg-clip-text text-transparent underline decoration-clinic-300/40 decoration-wavy">
            toda a cárie
          </span>{' '}
          do seu dente?
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="max-w-3xl mx-auto text-base sm:text-xl text-slate-600 leading-relaxed font-normal mb-8"
        >
          Descubra como a Odontologia contemporânea trata cáries profundas de forma
          mais <strong className="text-slate-900 font-semibold">conservadora</strong>, preservando a vida do dente e reduzindo drasticamente
          o risco de precisar de um tratamento de canal.
        </motion.p>

        {/* CTA Buttons with Hover Spring */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3.5 mb-16"
        >
          <motion.a
            href="#o-que-e-carie"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-clinic-600 hover:bg-clinic-700 text-white font-semibold px-6 py-3.5 rounded-xl shadow-md shadow-clinic-600/25 transition-colors group text-sm sm:text-base"
          >
            <span>Entenda em 3 minutos</span>
            {/* Continuously floating bouncy arrow */}
            <motion.div
              animate={{ y: [0, 4, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <ArrowDown className="w-4 h-4" />
            </motion.div>
          </motion.a>

          <motion.button
            onClick={onOpenSurvey}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-slate-700 font-semibold px-6 py-3.5 rounded-xl border border-slate-300/90 shadow-xs hover:border-slate-400 transition-colors text-sm sm:text-base"
          >
            <span>Responder Questionário</span>
            <span className="text-xs bg-dental-100 text-dental-800 px-2 py-0.5 rounded-full font-bold">
              Opine!
            </span>
          </motion.button>
        </motion.div>

        {/* 3 Scientific Badges with Staggered Fade Up */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 text-left max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            className="bg-white/95 backdrop-blur-xs p-4 rounded-2xl border border-slate-200/80 shadow-xs hover:border-clinic-300 hover:shadow-md transition-all flex items-start gap-3"
          >
            <div className="w-10 h-10 rounded-xl bg-clinic-50 border border-clinic-100 flex items-center justify-center text-clinic-600 shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                Sobrevida Pulpar
              </div>
              <div className="font-bold text-slate-900 text-sm">
                +90% de sucesso
              </div>
              <div className="text-xs text-slate-500 mt-0.5">
                Polpa mantida viva em estudos de 5 anos (Jardim et al.)
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            className="bg-white/95 backdrop-blur-xs p-4 rounded-2xl border border-slate-200/80 shadow-xs hover:border-dental-300 hover:shadow-md transition-all flex items-start gap-3"
          >
            <div className="w-10 h-10 rounded-xl bg-dental-50 border border-dental-100 flex items-center justify-center text-dental-600 shrink-0">
              <HeartPulse className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                Menos Invasivo
              </div>
              <div className="font-bold text-slate-900 text-sm">
                -77% risco de perfuração
              </div>
              <div className="text-xs text-slate-500 mt-0.5">
                Redução drástica na necessidade de canal (Miotti et al.)
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            className="bg-white/95 backdrop-blur-xs p-4 rounded-2xl border border-slate-200/80 shadow-xs hover:border-emerald-300 hover:shadow-md transition-all flex items-start gap-3"
          >
            <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600 shrink-0">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                Biológico & Seguro
              </div>
              <div className="font-bold text-slate-900 text-sm">
                Consenso Internacional
              </div>
              <div className="text-xs text-slate-500 mt-0.5">
                Recomendado pelos maiores centros de pesquisa do mundo
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
