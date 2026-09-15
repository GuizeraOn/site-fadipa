import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Users, Heart, Award, Sparkles, Building2 } from 'lucide-react';
import { PROJECT_CONFIG } from '../constants';

export default function AboutProject() {
  const teamMembers = [
    {
      name: "Acadêmicos de Odontologia",
      role: "Autores & Pesquisadores do Projeto",
      period: "FADIPA • Graduação em Odontologia",
      tag: "Discentes",
      avatarBg: "bg-clinic-500",
      description: "Grupo de discentes dedicado à investigação e divulgação da Odontologia Minimamente Invasiva junto à comunidade."
    },
    {
      name: "Corpo Docente Orientador",
      role: "Supervisão Científica e Metodológica",
      period: "FADIPA • Departamento de Odontologia",
      tag: "Docência",
      avatarBg: "bg-dental-500",
      description: "Orientação e validação das evidências clínicas de acordo com os protocolos contemporâneos nacionais e internacionais."
    },
    {
      name: "Comunidade & Pacientes",
      role: "Público-Alvo da Ação de Extensão",
      period: "Ipatinga & Região do Vale do Aço",
      tag: "Comunidade",
      avatarBg: "bg-emerald-500",
      description: "Cidadãos e participantes dos eventos de extensão universitária recebendo orientação preventiva e científica."
    }
  ];

  return (
    <section id="sobre" className="py-24 bg-white scroll-mt-20 border-t border-slate-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with Scroll Animation */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-clinic-50 text-clinic-700 border border-clinic-200/80 mb-3">
            <GraduationCap className="w-3.5 h-3.5" />
            Extensão Universitária
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            Sobre o Projeto "{PROJECT_CONFIG.name}"
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Uma iniciativa acadêmica da <strong className="text-slate-900">{PROJECT_CONFIG.institutionFull}</strong> voltada
            a democratizar o acesso ao conhecimento odontológico baseado em evidências.
          </p>
        </motion.div>

        {/* Core Mission Banner with Scroll Entry */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="bg-gradient-to-r from-clinic-50 via-dental-50/50 to-white rounded-3xl p-6 sm:p-8 border border-clinic-200/80 shadow-xs mb-14"
        >
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="w-14 h-14 rounded-2xl bg-clinic-600 text-white flex items-center justify-center shrink-0 shadow-sm shadow-clinic-600/30">
              <Heart className="w-7 h-7" />
            </div>
            <div className="text-left flex-1">
              <span className="text-xs font-bold uppercase tracking-wider text-clinic-700">
                Nossa Motivação
              </span>
              <blockquote className="text-base sm:text-lg font-bold text-slate-900 mt-1 italic leading-snug">
                "Acreditamos que o melhor dente é sempre o seu dente natural. Levar essa ciência da universidade para a vida das pessoas é o que nos move."
              </blockquote>
              <p className="text-xs sm:text-sm text-slate-600 mt-2">
                Objetivo do projeto: desmistificar que toda cárie profunda exige canal ou mutilação dental,
                fortalecendo a autonomia e tranquilidade do paciente no consultório.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Team & Institutional Cards with Staggered Scroll */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {teamMembers.map((member, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: idx * 0.1, ease: "easeOut" }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="bg-slate-50 rounded-3xl p-6 border border-slate-200/90 shadow-xs hover:shadow-sm hover:border-clinic-200 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 rounded-2xl ${member.avatarBg} text-white flex items-center justify-center font-bold text-lg shadow-xs`}>
                    {member.name.charAt(0)}
                  </div>
                  <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-white text-slate-600 border border-slate-200">
                    {member.tag}
                  </span>
                </div>

                <h3 className="font-bold text-slate-900 text-base mb-1">
                  {member.name}
                </h3>
                <div className="text-xs font-semibold text-clinic-600 mb-2">
                  {member.role}
                </div>
                <div className="text-xs text-slate-500 font-medium mb-3">
                  {member.period}
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {member.description}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-slate-200/70 text-[11px] text-slate-400 flex items-center gap-1">
                <Building2 className="w-3.5 h-3.5" />
                <span>{PROJECT_CONFIG.institution} • {PROJECT_CONFIG.year}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
