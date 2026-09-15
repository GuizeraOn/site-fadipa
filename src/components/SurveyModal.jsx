import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, CheckCircle2, MessageSquare, Send, Sparkles, Edit3 } from 'lucide-react';
import { PROJECT_CONFIG } from '../constants';

export default function SurveyModal({ isOpen, onClose }) {
  const [formUrl, setFormUrl] = useState(PROJECT_CONFIG.formsUrl);
  const [isEditingUrl, setIsEditingUrl] = useState(false);
  const [submittedInline, setSubmittedInline] = useState(false);

  // Quick inline interactive responses state
  const [answers, setAnswers] = useState({
    understood: '',
    confidence: '',
    canalOpinion: '',
    feedback: '',
  });

  const handleSubmitInline = (e) => {
    e.preventDefault();
    setSubmittedInline(true);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop with fade animation */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm"
          />

          {/* Modal Container with spring scale & slide */}
          <motion.div
            initial={{ opacity: 0, scale: 0.93, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ type: "spring", damping: 25, stiffness: 320 }}
            className="relative bg-white w-full max-w-2xl rounded-3xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[90vh] z-10"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="p-5 sm:p-6 border-b border-slate-100 flex items-center justify-between bg-gradient-to-r from-clinic-50 via-white to-dental-50">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-clinic-600 text-white flex items-center justify-center shadow-xs">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-extrabold text-slate-900 text-base sm:text-lg">
                    Questionário de Opinião — FADIPA
                  </h3>
                  <p className="text-xs text-slate-500">
                    Avaliação da percepção pública sobre a Remoção Seletiva
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

            {/* Body */}
            <div className="p-5 sm:p-6 overflow-y-auto space-y-6">
              {/* Main Google Forms CTA Banner */}
              <div className="bg-slate-900 text-white p-5 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-36 h-36 bg-dental-500/10 rounded-full blur-2xl pointer-events-none" />
                <div>
                  <span className="text-xs font-bold text-dental-300 uppercase tracking-wider">
                    Formulário Oficial
                  </span>
                  <h4 className="text-base font-bold text-white mt-0.5">
                    Responder no Google Forms
                  </h4>
                  <p className="text-xs text-slate-300 mt-1">
                    Acesse o formulário oficial da pesquisa para registrar suas respostas no banco de dados da FADIPA.
                  </p>
                </div>

                <a
                  href={formUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shrink-0 inline-flex items-center gap-2 bg-dental-400 hover:bg-dental-300 text-slate-950 font-bold text-sm px-5 py-3 rounded-xl transition-all shadow-md active:scale-95 hover:shadow-dental-400/20"
                >
                  <span>Abrir Formulário</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>

              {/* Optional Form URL configuration for group members */}
              <div className="bg-slate-50 border border-slate-200 p-3 rounded-xl text-xs text-slate-600 flex items-center justify-between gap-2">
                <span className="truncate">
                  <strong>Link configurado:</strong> {formUrl}
                </span>
                <button
                  onClick={() => setIsEditingUrl(!isEditingUrl)}
                  className="inline-flex items-center gap-1 text-clinic-600 font-semibold hover:underline shrink-0"
                >
                  <Edit3 className="w-3.5 h-3.5" />
                  <span>{isEditingUrl ? 'Salvar' : 'Alterar link'}</span>
                </button>
              </div>

              {isEditingUrl && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="p-3 bg-white border border-clinic-300 rounded-xl space-y-2 overflow-hidden"
                >
                  <label className="text-xs font-bold text-slate-700">
                    Cole o link do seu Google Forms do projeto:
                  </label>
                  <div className="flex gap-2">
                    <input
                      type="url"
                      value={formUrl}
                      onChange={(e) => setFormUrl(e.target.value)}
                      placeholder="https://docs.google.com/forms/d/..."
                      className="flex-1 text-xs border border-slate-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-clinic-500"
                    />
                    <button
                      onClick={() => setIsEditingUrl(false)}
                      className="bg-clinic-600 text-white text-xs font-bold px-3 py-2 rounded-lg hover:bg-clinic-700 transition-colors"
                    >
                      Salvar
                    </button>
                  </div>
                </motion.div>
              )}

              {/* Quick Interactive Questions Preview (Can be answered right here) */}
              <div className="border-t border-slate-200 pt-5">
                <h4 className="text-sm font-bold text-slate-900 mb-1 flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-clinic-600" />
                  Ou deixe seu feedback rápido aqui:
                </h4>
                <p className="text-xs text-slate-500 mb-4">
                  Queremos saber como foi sua experiência ao ler o conteúdo do site.
                </p>

                {submittedInline ? (
                  <motion.div
                    initial={{ scale: 0.95, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="bg-emerald-50 border border-emerald-200 rounded-2xl p-5 text-center text-emerald-900 space-y-2"
                  >
                    <CheckCircle2 className="w-8 h-8 text-emerald-600 mx-auto" />
                    <h5 className="font-bold text-base">Muito obrigado pela sua opinião!</h5>
                    <p className="text-xs text-emerald-700">
                      Sua resposta ajuda a aprimorar nosso projeto de extensão em Odontologia.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmitInline} className="space-y-4">
                    {/* Question 1 */}
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5">
                        1. Você já conhecia a técnica da Remoção Seletiva antes de ler este site?
                      </label>
                      <div className="grid grid-cols-2 gap-2 text-xs">
                        {['Sim, já conhecia', 'Não, nunca tinha ouvido falar'].map((opt) => (
                          <button
                            type="button"
                            key={opt}
                            onClick={() => setAnswers({ ...answers, understood: opt })}
                            className={`p-2.5 rounded-xl border text-left font-medium transition-all ${
                              answers.understood === opt
                                ? 'border-clinic-600 bg-clinic-50 text-clinic-900 font-bold shadow-xs'
                                : 'border-slate-200 bg-white hover:bg-slate-50 text-slate-600'
                            }`}
                          >
                            {opt}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Question 2 */}
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5">
                        2. As explicações e analogias (como a da maçã) foram claras e fáceis de entender?
                      </label>
                      <div className="grid grid-cols-3 gap-2 text-xs">
                        {['Muito claras ⭐', 'Razoáveis', 'Ainda tenho dúvidas'].map((opt) => (
                          <button
                            type="button"
                            key={opt}
                            onClick={() => setAnswers({ ...answers, confidence: opt })}
                            className={`p-2.5 rounded-xl border text-center font-medium transition-all ${
                              answers.confidence === opt
                                ? 'border-clinic-600 bg-clinic-50 text-clinic-900 font-bold shadow-xs'
                                : 'border-slate-200 bg-white hover:bg-slate-50 text-slate-600'
                            }`}
                          >
                            {opt}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Optional Message */}
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5">
                        3. Tem algum comentário ou pergunta para os estudantes da FADIPA?
                      </label>
                      <textarea
                        rows={2}
                        value={answers.feedback}
                        onChange={(e) => setAnswers({ ...answers, feedback: e.target.value })}
                        placeholder="Escreva aqui sua impressão ou pergunta sobre cárie..."
                        className="w-full text-xs border border-slate-200 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-clinic-500"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full flex items-center justify-center gap-2 bg-clinic-600 hover:bg-clinic-700 text-white font-bold text-xs py-3 rounded-xl shadow-sm hover:shadow transition-all active:scale-[0.99]"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>Enviar Opinião Rápida</span>
                    </button>
                  </form>
                )}
              </div>
            </div>

            {/* Footer */}
            <div className="p-4 border-t border-slate-100 bg-slate-50 flex items-center justify-between">
              <span className="text-xs text-slate-400">
                FADIPA • Projeto de Extensão 2025
              </span>
              <button
                onClick={onClose}
                className="text-xs font-semibold text-slate-600 hover:text-slate-900 px-3 py-1 rounded-lg hover:bg-slate-200/50 transition-colors"
              >
                Fechar
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
