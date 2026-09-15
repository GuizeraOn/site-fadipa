import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Apple, ShieldCheck, AlertTriangle, ArrowRight, Sparkles, Check, X } from 'lucide-react';

export default function SelectiveRemoval() {
  const [activeApproach, setActiveApproach] = useState('selective'); // 'selective' | 'aggressive'

  return (
    <section id="remocao-seletiva" className="py-24 bg-slate-50 scroll-mt-20 border-t border-slate-200/60 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Scroll Animation */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-dental-100 text-dental-900 border border-dental-200/80 mb-3">
            <Sparkles className="w-3.5 h-3.5 text-dental-600" />
            O Conceito Central
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            O que é a Remoção Seletiva?
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            É a prática de remover com precisão cirúrgica apenas a parte contaminada por bactérias ativas,
            preservando a camada interna saudável que protege o nervo do dente.
          </p>
        </motion.div>

        {/* The Fruit Analogy Card with Slide Up */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          whileHover={{ y: -3, transition: { duration: 0.2 } }}
          className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-sm mb-12 relative overflow-hidden group"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-dental-50 rounded-full mix-blend-multiply filter blur-2xl opacity-60 pointer-events-none" />
          <div className="flex flex-col md:flex-row items-center gap-6 relative">
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-dental-100 border border-dental-200 flex items-center justify-center text-dental-700 shrink-0 shadow-inner group-hover:scale-105 transition-transform">
              <Apple className="w-9 h-9 sm:w-11 sm:h-11 text-emerald-600" />
            </div>
            <div className="text-left flex-1">
              <span className="text-xs font-bold uppercase tracking-wider text-dental-700">
                A Analogia do Dia a Dia
              </span>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 mt-1 mb-2">
                "É como aparar uma maçã sem jogar a fruta inteira fora"
              </h3>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Imagine que você pegou uma fruta com uma pequena parte machucada na superfície.
                Você não joga a fruta inteira no lixo e nem arranca a polpa sadia do meio: você
                apenas apara a casca estragada e aproveita a fruta boa.
                Na Odontologia, a <strong className="text-slate-900">Remoção Seletiva</strong> faz a mesma coisa:
                limpa a contaminação superficial e preserva a polpa natural viva!
              </p>
            </div>
          </div>
        </motion.div>

        {/* Infectada vs Afetada: The 2 Dentin Types with Staggered Scroll */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-14">
          {/* Dentina Infectada */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5 }}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            className="bg-white rounded-2xl p-6 border-2 border-rose-200/80 shadow-xs relative"
          >
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold bg-rose-100 text-rose-800 mb-3">
              <X className="w-3.5 h-3.5" />
              Camada Externa (Deve ser Removida)
            </div>
            <h4 className="text-lg font-bold text-slate-900 mb-2">
              Dentina Infectada (Necrótica)
            </h4>
            <p className="text-slate-600 text-sm leading-relaxed mb-4">
              Tecido amolecido, desorganizado, sem estrutura colágena viável e lotado de bactérias vivas.
              Essa camada é totalmente removida nas bordas e no interior até onde for seguro.
            </p>
            <div className="text-xs font-semibold text-rose-700 bg-rose-50 p-2.5 rounded-xl border border-rose-100">
              ⚠️ Não tem capacidade de cicatrização e deve sair.
            </div>
          </motion.div>

          {/* Dentina Afetada */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5 }}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            className="bg-white rounded-2xl p-6 border-2 border-dental-300 shadow-xs relative"
          >
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold bg-dental-100 text-dental-800 mb-3">
              <Check className="w-3.5 h-3.5" />
              Camada do Fundo (Deve ser Preservada)
            </div>
            <h4 className="text-lg font-bold text-slate-900 mb-2">
              Dentina Afetada (Desmineralizada)
            </h4>
            <p className="text-slate-600 text-sm leading-relaxed mb-4">
              Tecido mais firme (consistência correosa). Suas fibras de colágeno continuam intactas e
              não há invasão de bactérias ativas. Serve como um "cobertor biológico" natural para a polpa.
            </p>
            <div className="text-xs font-semibold text-dental-700 bg-dental-50 p-2.5 rounded-xl border border-dental-100">
              🛡️ Remineraliza e protege o nervo quando bem selada!
            </div>
          </motion.div>
        </div>

        {/* Interactive Comparison Simulator with Animated Sliding Pill */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="bg-white rounded-3xl border border-slate-200/90 shadow-sm p-6 sm:p-8"
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-slate-100">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-clinic-600">
                Simulador Comparativo
              </span>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900">
                Compare as duas abordagens clínicas
              </h3>
            </div>

            {/* Framer Motion Layout Pill Toggle */}
            <div className="inline-flex p-1 rounded-xl bg-slate-100 border border-slate-200 text-xs font-semibold relative">
              <button
                onClick={() => setActiveApproach('selective')}
                className={`relative z-10 px-4 py-2 rounded-lg transition-colors ${
                  activeApproach === 'selective' ? 'text-white' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {activeApproach === 'selective' && (
                  <motion.div
                    layoutId="activePill"
                    className="absolute inset-0 bg-clinic-600 rounded-lg shadow-sm -z-10"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                ✨ Remoção Seletiva (Moderna)
              </button>

              <button
                onClick={() => setActiveApproach('aggressive')}
                className={`relative z-10 px-4 py-2 rounded-lg transition-colors ${
                  activeApproach === 'aggressive' ? 'text-white' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {activeApproach === 'aggressive' && (
                  <motion.div
                    layoutId="activePill"
                    className="absolute inset-0 bg-rose-600 rounded-lg shadow-sm -z-10"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                ⚠️ Remoção Total (Antiga)
              </button>
            </div>
          </div>

          {/* Dynamic Content Display with AnimatePresence */}
          <AnimatePresence mode="wait">
            {activeApproach === 'selective' ? (
              <motion.div
                key="selective"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center"
              >
                <div className="lg:col-span-7 space-y-3">
                  <div className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-dental-100 text-dental-800">
                    Abordagem Conservadora • Padrão-Ouro
                  </div>
                  <h4 className="text-xl font-bold text-slate-900">
                    Como funciona a Remoção Seletiva na prática:
                  </h4>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    O dentista limpa rigorosamente todas as paredes laterais até o tecido são.
                    No fundo da cavidade, bem próximo à polpa, ele deixa intencionalmente a dentina
                    afetada firme, evitando qualquer toque mecânico perigoso na polpa viva.
                  </p>
                  <div className="bg-dental-50/80 border border-dental-200 rounded-xl p-3.5 text-xs text-dental-900 space-y-1.5">
                    <div className="font-bold flex items-center gap-1.5 text-dental-800">
                      <ShieldCheck className="w-4 h-4 text-dental-600" />
                      Desfecho Clínico:
                    </div>
                    <p>
                      A restauração veda o oxigênio e a comida. O dente responde criando dentina reacional,
                      o nervo continua vivo, você não sente dor e economiza sem precisar de canal!
                    </p>
                  </div>
                </div>

                <div className="lg:col-span-5 bg-gradient-to-br from-dental-500/10 to-clinic-500/10 border border-dental-200 rounded-2xl p-5 text-center">
                  <div className="text-4xl mb-2">🦷✨</div>
                  <div className="text-sm font-bold text-slate-900">Dente Íntegro e Vivo</div>
                  <div className="text-xs text-emerald-600 font-semibold mt-1">
                    Polpa 100% Preservada
                  </div>
                  <div className="mt-4 pt-3 border-t border-dental-200/60 text-[11px] text-slate-500">
                    Vedamento hermético com material adesivo moderno
                  </div>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="aggressive"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center"
              >
                <div className="lg:col-span-7 space-y-3">
                  <div className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-rose-100 text-rose-800">
                    Abordagem Agressiva Antiga • Alto Risco
                  </div>
                  <h4 className="text-xl font-bold text-slate-900">
                    O problema de "raspar até o osso":
                  </h4>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Na tentativa de deixar todo o fundo completamente duro, a broca ou cureta
                    perfura a fina camada restante de dentina e atinge a câmara pulpar.
                    Ao expor o nervo ao ambiente bucal, o dente sangra e inflama irreversivelmente.
                  </p>
                  <div className="bg-rose-50 border border-rose-200 rounded-xl p-3.5 text-xs text-rose-900 space-y-1.5">
                    <div className="font-bold flex items-center gap-1.5 text-rose-800">
                      <AlertTriangle className="w-4 h-4 text-rose-600" />
                      Desfecho Desfavorável:
                    </div>
                    <p>
                      Exposição pulpar acidental em 20% a 40% dos casos. O dente precisa de tratamento
                      de canal imediato, enfraquece a estrutura e gera alto custo financeiro e biológico.
                    </p>
                  </div>
                </div>

                <div className="lg:col-span-5 bg-rose-50 border border-rose-200 rounded-2xl p-5 text-center">
                  <div className="text-4xl mb-2">🦷⚡</div>
                  <div className="text-sm font-bold text-slate-900">Exposição Pulpar Acidental</div>
                  <div className="text-xs text-rose-600 font-semibold mt-1">
                    Necessidade de Tratamento de Canal
                  </div>
                  <div className="mt-4 pt-3 border-t border-rose-200/60 text-[11px] text-slate-500">
                    Risco 4x maior de dor aguda e perda de vitalidade
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
