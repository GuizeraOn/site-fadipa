import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, BookOpen, Heart, Sparkles, Building2, UserCheck, ShieldCheck } from 'lucide-react';
import { PROJECT_CONFIG, ADVISOR, STUDENTS, MOTIVATION_QUOTE } from '../constants';

export default function AboutProject() {
  return (
    <section
      id="sobre"
      className="py-24 bg-gradient-to-b from-slate-50 via-clinic-50/25 to-slate-100/80 scroll-mt-20 border-t border-slate-200/80 relative overflow-hidden"
    >
      {/* Subtle institutional ambient light */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-clinic-100/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* 10.1 — Cabeçalho da Seção */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-clinic-100 text-clinic-900 border border-clinic-200 shadow-xs mb-3">
            <span className="text-base">👥</span>
            <span>Quem fez esse projeto acontecer</span>
          </span>

          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-3">
            Projeto de Extensão — Popularizando a Ciência
          </h2>

          <div className="flex flex-wrap items-center justify-center gap-2 text-xs sm:text-sm text-slate-600 font-medium">
            <span className="font-semibold text-slate-800">
              Faculdade de Ipatinga (FADIPA)
            </span>
            <span className="text-slate-300">•</span>
            <span>Curso de Odontologia</span>
            <span className="text-slate-300">•</span>
            <span className="bg-clinic-50 text-clinic-700 px-2 py-0.5 rounded-md font-semibold border border-clinic-200">
              4º Período
            </span>
            <span className="text-slate-300">•</span>
            <span>Componente Curricular: <strong className="text-slate-800">Dentística</strong></span>
          </div>
        </motion.div>

        {/* 10.2 — Card da Orientadora (Destaque Separado no Topo com Hierarquia Institucional) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.55 }}
          className="max-w-2xl mx-auto mb-14"
        >
          <div className="relative bg-gradient-to-br from-slate-900 via-slate-900 to-clinic-950 text-white rounded-3xl p-6 sm:p-7 border-2 border-amber-400/70 shadow-xl overflow-hidden group">
            {/* Gold decorative accent glow */}
            <div className="absolute top-0 right-0 -mr-10 -mt-10 w-44 h-44 bg-amber-400/10 rounded-full blur-2xl pointer-events-none" />

            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5 text-center sm:text-left relative z-10">
              {/* Monogram Seal "ML" with Gold Rim */}
              <div className="relative shrink-0">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-tr from-amber-500 via-amber-400 to-yellow-300 text-slate-950 font-black text-xl sm:text-2xl flex items-center justify-center shadow-lg ring-4 ring-amber-400/20 group-hover:scale-105 transition-transform">
                  <span>{ADVISOR.initials}</span>
                </div>
                <div className="absolute -bottom-1 -right-1 bg-slate-900 rounded-full p-1 border border-amber-400 text-amber-300">
                  <Award className="w-4 h-4" />
                </div>
              </div>

              {/* Information */}
              <div className="flex-1 min-w-0">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-amber-400/15 text-amber-300 border border-amber-400/30 mb-2">
                  <GraduationCap className="w-3.5 h-3.5 text-amber-300" />
                  <span>{ADVISOR.category}</span>
                </div>

                <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight">
                  {ADVISOR.name}
                </h3>

                <p className="text-sm font-semibold text-clinic-300 mt-0.5">
                  {ADVISOR.role}
                </p>

                <div className="mt-3 pt-3 border-t border-slate-800 text-xs text-slate-300 flex flex-wrap items-center justify-center sm:justify-start gap-3">
                  <span className="flex items-center gap-1.5">
                    <BookOpen className="w-3.5 h-3.5 text-amber-400" />
                    <span>{ADVISOR.discipline}</span>
                  </span>
                  <span className="hidden sm:inline text-slate-600">•</span>
                  <span className="flex items-center gap-1.5 text-slate-400">
                    <Building2 className="w-3.5 h-3.5" />
                    <span>{ADVISOR.institution}</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Section Divider Subtitle */}
        <div className="text-center mb-8">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-400 bg-slate-200/60 px-3 py-1 rounded-full">
            Discentes Pesquisadores
          </span>
        </div>

        {/* 10.3 — Grid dos Discentes (Fotos Circulares / 4 Colunas no Desktop, 2 no Tablet, 1 no Mobile) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {STUDENTS.map((student, idx) => (
            <motion.div
              key={student.name}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: idx * 0.1, ease: "easeOut" }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-xs hover:shadow-lg hover:border-clinic-300 transition-all flex flex-col items-center text-center group"
            >
              {/* Circular Photo / Avatar with Identity Border */}
              <div className="relative mb-5">
                <div className={`w-24 h-24 rounded-full p-1 border-2 ${student.borderColor} bg-white shadow-md group-hover:scale-105 transition-transform flex items-center justify-center`}>
                  <div className={`w-full h-full rounded-full bg-gradient-to-tr ${student.accentColor} text-white font-extrabold text-2xl flex items-center justify-center shadow-inner select-none`}>
                    {student.initials}
                  </div>
                </div>
                <div className="absolute bottom-0 right-0 w-6 h-6 rounded-full bg-clinic-600 text-white flex items-center justify-center text-[10px] font-bold border-2 border-white shadow-xs">
                  🦷
                </div>
              </div>

              {/* Student Name */}
              <h3 className="font-extrabold text-slate-900 text-base sm:text-lg mb-1 group-hover:text-clinic-700 transition-colors">
                {student.name}
              </h3>

              {/* Role Badge */}
              <span className="inline-block text-xs font-semibold px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700 border border-slate-200/80 mb-2">
                {student.role}
              </span>

              {/* Course and Period */}
              <div className="text-xs text-slate-500 font-medium">
                {student.period}
              </div>

              {/* Bottom Card Footer */}
              <div className="mt-5 pt-3 border-t border-slate-100 w-full text-[11px] font-medium text-clinic-600 flex items-center justify-center gap-1">
                <UserCheck className="w-3.5 h-3.5" />
                <span>Extensão FADIPA 2026</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* 10.4 — Bloco de "Nossa Motivação" (Fecho Humanizado da Seção) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-3xl p-7 sm:p-9 border border-clinic-200/90 shadow-sm relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-48 h-48 bg-dental-50 rounded-full mix-blend-multiply filter blur-2xl opacity-60 pointer-events-none" />

          <div className="flex flex-col md:flex-row items-center gap-6 relative">
            <div className="w-14 h-14 rounded-2xl bg-clinic-600 text-white flex items-center justify-center shrink-0 shadow-md shadow-clinic-600/30">
              <Heart className="w-7 h-7" />
            </div>

            <div className="text-left flex-1">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs font-bold uppercase tracking-wider text-clinic-700 bg-clinic-50 px-2.5 py-0.5 rounded-full border border-clinic-100">
                  Nossa Motivação
                </span>
                <span className="text-xs text-slate-400">
                  • Popularizando a Ciência
                </span>
              </div>

              <blockquote className="text-sm sm:text-base text-slate-800 leading-relaxed font-medium italic">
                "{MOTIVATION_QUOTE}"
              </blockquote>

              <div className="mt-3 text-xs text-slate-500 flex items-center gap-1.5 font-semibold">
                <ShieldCheck className="w-3.5 h-3.5 text-dental-600" />
                <span>Odontologia Baseada em Evidências para toda a comunidade</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
