import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, BookOpen, Heart, Sparkles, Building2, UserCheck, ShieldCheck, Camera } from 'lucide-react';
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

            <div className="flex flex-row items-center sm:items-start gap-4 sm:gap-6 text-left relative z-10">
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

                <h3 className="text-lg sm:text-2xl font-black text-white tracking-tight">
                  {ADVISOR.name}
                </h3>

                <p className="text-xs sm:text-sm font-semibold text-clinic-300 mt-0.5">
                  {ADVISOR.role}
                </p>

                <div className="mt-3 pt-3 border-t border-slate-800 text-xs text-slate-300 flex flex-wrap items-center justify-start gap-2.5 sm:gap-3">
                  <span className="flex items-center gap-1.5">
                    <BookOpen className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                    <span>{ADVISOR.discipline}</span>
                  </span>
                  <span className="hidden sm:inline text-slate-600">•</span>
                  <span className="flex items-center gap-1.5 text-slate-400">
                    <Building2 className="w-3.5 h-3.5 shrink-0" />
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

        {/* 10.3 — Grid dos Discentes (Cards com Texto à Esquerda e Foto 3:4 em Destaque à Direita) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {STUDENTS.map((student, idx) => (
            <motion.div
              key={student.name}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: idx * 0.1, ease: "easeOut" }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="bg-white rounded-3xl p-4 sm:p-6 border border-slate-200/90 shadow-xs hover:shadow-md hover:border-clinic-300 transition-all flex flex-row items-stretch justify-between gap-3.5 sm:gap-5 group text-left"
            >
              {/* Left Side: Information aligned to left */}
              <div className="flex-1 min-w-0 flex flex-col justify-between">
                <div>
                  <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 mb-2">
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-bold bg-clinic-50 text-clinic-700 border border-clinic-200">
                      {student.role}
                    </span>
                    <span className="text-[11px] font-semibold text-slate-400">
                      4º Período
                    </span>
                  </div>

                  {/* Student Full Name */}
                  <h3 className="font-extrabold text-slate-900 text-base sm:text-lg md:text-xl leading-snug group-hover:text-clinic-700 transition-colors">
                    {student.name}
                  </h3>

                  {/* Academic Details */}
                  <div className="mt-1.5 sm:mt-2 space-y-0.5 sm:space-y-1 text-xs text-slate-500">
                    <p className="font-semibold text-slate-700">
                      {student.period}
                    </p>
                    <p className="text-slate-500">
                      Componente: <strong className="text-slate-700">Dentística</strong>
                    </p>
                    <p className="text-slate-400 text-[11px]">
                      Faculdade de Ipatinga (FADIPA)
                    </p>
                  </div>
                </div>

                {/* Bottom Card Tag */}
                <div className="mt-3 sm:mt-5 pt-2.5 sm:pt-3 border-t border-slate-100 flex items-center gap-1.5 text-[11px] font-medium text-clinic-600">
                  <UserCheck className="w-3.5 h-3.5 shrink-0" />
                  <span className="truncate">Projeto de Extensão 2026</span>
                </div>
              </div>

              {/* Right Side: Prominent 3:4 Portrait Photo */}
              <div
                className={`shrink-0 w-28 sm:w-36 aspect-[3/4] rounded-2xl overflow-hidden relative shadow-sm border-2 border-slate-200 group-hover:border-clinic-300 bg-gradient-to-b from-slate-100 via-slate-50 to-slate-200/90 flex flex-col items-center justify-center text-center transition-colors ${
                  student.photo ? '' : 'p-2.5 sm:p-3'
                }`}
              >
                {student.photo ? (
                  <div className="relative w-full h-full">
                    <img
                      src={student.photo}
                      alt={student.name}
                      className="w-full h-full object-cover object-center"
                      loading="lazy"
                    />
                    {/* Corner Tooth Stamp */}
                    <div className="absolute top-1.5 right-1.5 sm:top-2 sm:right-2 w-5 h-5 rounded-full bg-white/90 backdrop-blur-xs text-clinic-700 flex items-center justify-center text-[10px] shadow-xs border border-slate-200/80">
                      🦷
                    </div>
                  </div>
                ) : (
                  <div className="flex flex-col items-center justify-center text-center h-full w-full select-none">
                    {/* Camera / User Icon */}
                    <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-xl sm:rounded-2xl bg-white/90 border border-slate-200/90 shadow-xs flex items-center justify-center text-slate-400 group-hover:text-clinic-600 group-hover:scale-105 transition-all mb-1.5 sm:mb-2">
                      <Camera className="w-4 h-4 sm:w-5 sm:h-5" />
                    </div>

                    <span className="text-[11px] sm:text-xs font-bold text-slate-700 leading-tight">
                      Foto do Aluno
                    </span>
                    <span className="text-[9px] sm:text-[10px] font-mono font-medium text-slate-400 mt-1 px-1.5 py-0.5 rounded bg-white/80 border border-slate-200/80">
                      3:4
                    </span>

                    {/* Corner Tooth Stamp */}
                    <div className="absolute top-1.5 right-1.5 sm:top-2 sm:right-2 w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-white text-clinic-700 flex items-center justify-center text-[9px] sm:text-[10px] shadow-xs border border-slate-200">
                      🦷
                    </div>
                  </div>
                )}
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
