import React from 'react';
import { ArrowRight, QrCode, BookOpen, Heart, ExternalLink, ShieldCheck } from 'lucide-react';
import { PROJECT_CONFIG } from '../constants';

export default function Footer({ onOpenReferences, onOpenQr }) {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Pre-footer Survey Reminder Banner */}
        <div className="bg-gradient-to-r from-clinic-900 to-slate-800 rounded-3xl p-6 sm:p-8 border border-clinic-700/60 mb-16 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div>
            <span className="inline-block text-xs font-bold text-dental-400 uppercase tracking-wider mb-1">
              Última chance de participar!
            </span>
            <h3 className="text-xl sm:text-2xl font-black text-white">
              Ainda não respondeu ao questionário?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-xl">
              Sua resposta leva menos de 2 minutos e é anônima. Ajude a validar nosso projeto de extensão da FADIPA!
            </p>
          </div>
          <a
            href={PROJECT_CONFIG.formsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-2 bg-dental-400 hover:bg-dental-300 text-slate-950 font-bold px-6 py-3 rounded-xl transition-all shadow-lg active:scale-95 text-sm"
          >
            <span>Responder Agora</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* Main Footer Links & Info */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-slate-800">
          {/* Brand & Mission */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-clinic-500 to-dental-400 flex items-center justify-center text-white font-bold text-lg">
                🦷
              </div>
              <span className="text-lg font-black text-white tracking-tight">
                {PROJECT_CONFIG.name}
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              Iniciativa de popularização científica em Odontologia Minimamente Invasiva.
              Disseminando práticas conservadoras baseadas em evidências para preservar sorrisos saudáveis.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <button
                onClick={onOpenQr}
                className="inline-flex items-center gap-2 text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-white px-3.5 py-2 rounded-xl border border-slate-700 transition-colors"
              >
                <QrCode className="w-4 h-4 text-clinic-400" />
                <span>QR Code para Evento</span>
              </button>
              <button
                onClick={onOpenReferences}
                className="inline-flex items-center gap-2 text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-white px-3.5 py-2 rounded-xl border border-slate-700 transition-colors"
              >
                <BookOpen className="w-4 h-4 text-dental-400" />
                <span>Referências (ABNT)</span>
              </button>
            </div>
          </div>

          {/* Quick Summary of References (Formato Reduzido) */}
          <div className="md:col-span-4 space-y-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
              Referências Científicas em Destaque
            </h4>
            <ul className="text-xs space-y-2 text-slate-400">
              <li className="hover:text-white transition-colors">
                • <strong>Jardim PS et al. (2023)</strong> — Sobrevida pulpar em 5 anos.
              </li>
              <li className="hover:text-white transition-colors">
                • <strong>Petta TM et al. (2024)</strong> — Microbiologia e selamento dentinário.
              </li>
              <li className="hover:text-white transition-colors">
                • <strong>Miotti LL et al. (2023)</strong> — Revisão sistemática e metanálise.
              </li>
              <li className="hover:text-white transition-colors">
                • <strong>Barros MA et al. (2025)</strong> — Desfechos centrados no paciente.
              </li>
            </ul>
          </div>

          {/* Academic Info */}
          <div className="md:col-span-3 space-y-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
              Institucional
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              <strong>{PROJECT_CONFIG.institutionFull}</strong>
              <br />
              Curso de Odontologia
              <br />
              Projeto de Extensão Universitária {PROJECT_CONFIG.year}
              <br />
              Ipatinga / MG — Brasil
            </p>
          </div>
        </div>

        {/* Bottom Credits */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            © {PROJECT_CONFIG.year} {PROJECT_CONFIG.name} — Projeto de Extensão {PROJECT_CONFIG.institution}. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-1 text-slate-400">
            <span>Desenvolvido com rigor acadêmico</span>
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
            <span>para a comunidade</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
