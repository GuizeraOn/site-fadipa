import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, MessageSquareCheck, X } from 'lucide-react';
import { PROJECT_CONFIG } from '../constants';

export default function FloatingCta() {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = totalHeight > 0 ? (scrollY / totalHeight) * 100 : 0;

      if (progress > 30 && !isDismissed) {
        setIsVisible(true);
      } else if (progress <= 25 && !isDismissed) {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isDismissed]);

  return (
    <AnimatePresence>
      {isVisible && !isDismissed && (
        <motion.div
          initial={{ opacity: 0, y: 35, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 25, scale: 0.95 }}
          transition={{ type: "spring", stiffness: 350, damping: 25 }}
          className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-6 z-40 max-w-md"
        >
          <div className="bg-slate-900/95 backdrop-blur-md text-white p-3.5 sm:p-4 rounded-2xl shadow-2xl border border-slate-700/80 flex items-center justify-between gap-3">
            <div className="flex items-center gap-2.5 flex-1 min-w-0">
              <div className="w-8 h-8 rounded-xl bg-dental-400 text-slate-950 flex items-center justify-center shrink-0 shadow-xs font-bold">
                <MessageSquareCheck className="w-4 h-4" />
              </div>
              <div className="truncate">
                <div className="text-xs font-bold text-white truncate">
                  Gostou de saber disso?
                </div>
                <div className="text-[11px] text-slate-300 truncate">
                  Dê sua opinião no questionário rápido!
                </div>
              </div>
            </div>

            <div className="flex items-center gap-1.5 shrink-0">
              <motion.a
                href={PROJECT_CONFIG.formsUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-1 bg-gradient-to-r from-clinic-500 to-dental-400 hover:from-clinic-600 hover:to-dental-500 text-slate-950 font-extrabold text-xs px-3.5 py-2 rounded-xl transition-all shadow-sm"
              >
                <span>Responder</span>
                <ArrowRight className="w-3 h-3" />
              </motion.a>

              <button
                onClick={() => setIsDismissed(true)}
                className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
                aria-label="Fechar notificação flutuante"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
