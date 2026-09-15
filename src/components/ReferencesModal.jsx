import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, BookOpen, ExternalLink, GraduationCap, FileText } from 'lucide-react';
import { SCIENTIFIC_STUDIES } from '../constants';

export default function ReferencesModal({ isOpen, onClose }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop with fade */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm"
          />

          {/* Modal Container with spring bounce */}
          <motion.div
            initial={{ opacity: 0, scale: 0.93, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ type: "spring", damping: 25, stiffness: 320 }}
            className="relative bg-white w-full max-w-3xl rounded-3xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[88vh] z-10"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="p-5 sm:p-6 border-b border-slate-100 flex items-center justify-between bg-slate-50/80">
              <div className="flex items-center gap-2.5">
                <div className="w-10 h-10 rounded-xl bg-clinic-100 text-clinic-700 flex items-center justify-center">
                  <BookOpen className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-lg">
                    Referências Científicas Formais
                  </h3>
                  <p className="text-xs text-slate-500">
                    Estudos clínicos de referência (2023–2025) sobre Remoção Seletiva
                  </p>
                </div>
              </div>
              <button
                onClick={onClose}
                className="p-2 text-slate-400 hover:text-slate-700 rounded-xl hover:bg-slate-200/50 transition-colors"
                aria-label="Fechar modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Content / Study List */}
            <div className="p-5 sm:p-6 overflow-y-auto space-y-6">
              <div className="bg-clinic-50/70 border border-clinic-100 rounded-2xl p-4 text-xs text-clinic-900">
                <strong>Nota Acadêmica:</strong> Todas as evidências reunidas neste projeto de extensão
                da FADIPA seguem os consensos internacionais da Federação Dentária Internacional (FDI)
                e da Associação Internacional de Pesquisa Odontológica (IADR).
              </div>

              <div className="space-y-4">
                {SCIENTIFIC_STUDIES.map((study, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.07, duration: 0.3 }}
                    className="bg-slate-50 rounded-2xl p-4 sm:p-5 border border-slate-200 text-left space-y-2 hover:border-clinic-300 transition-colors"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold px-2 py-0.5 rounded-md bg-clinic-100 text-clinic-800">
                        Artigo #{idx + 1}
                      </span>
                      <span className="text-xs font-semibold text-slate-500">
                        Ano: {study.year}
                      </span>
                    </div>

                    <h4 className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                      {study.title}
                    </h4>

                    <p className="text-xs text-slate-600 font-medium">
                      <strong>Autores:</strong> {study.authors}
                    </p>

                    <p className="text-xs text-slate-500">
                      <strong>Periódico / Fonte:</strong> <em>{study.journal}</em>
                    </p>

                    <div className="pt-2 border-t border-slate-200/60 text-xs text-slate-700">
                      <strong>Achado chave:</strong> {study.keyFinding}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Guidelines info */}
              <div className="p-4 bg-slate-100 rounded-2xl text-xs text-slate-600 space-y-1">
                <p className="font-semibold text-slate-800">Diretrizes Complementares:</p>
                <p>• Schwendicke, F. et al. (2016/2021). Managing carious lesions: consensus recommendations on carious tissue removal. <em>Advances in Dental Research</em>.</p>
                <p>• Innes, N. P. et al. (2019). Minimal Intervention Dentistry for managing caries. <em>British Dental Journal</em>.</p>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-4 border-t border-slate-100 bg-slate-50 flex items-center justify-end">
              <button
                onClick={onClose}
                className="bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold px-5 py-2.5 rounded-xl transition-colors"
              >
                Fechar Janela
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
