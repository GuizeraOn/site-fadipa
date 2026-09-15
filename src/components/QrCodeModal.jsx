import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, QrCode, Smartphone, Copy, Check } from 'lucide-react';

export default function QrCodeModal({ isOpen, onClose }) {
  const [copied, setCopied] = useState(false);

  const currentUrl = typeof window !== 'undefined' ? window.location.href : 'https://sorriso-consciente.fadipa.edu.br';

  const handleCopy = () => {
    navigator.clipboard.writeText(currentUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.93, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ type: "spring", damping: 25, stiffness: 320 }}
            className="relative bg-white w-full max-w-md rounded-3xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col z-10 text-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="p-5 border-b border-slate-100 flex items-center justify-between bg-slate-50">
              <div className="flex items-center gap-2">
                <QrCode className="w-5 h-5 text-clinic-600" />
                <h3 className="font-bold text-slate-900 text-base">
                  Acesse pelo Celular no Evento
                </h3>
              </div>
              <button
                onClick={onClose}
                className="p-1.5 text-slate-400 hover:text-slate-700 rounded-lg hover:bg-slate-200/50 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* QR Body */}
            <div className="p-6 flex flex-col items-center">
              <div className="bg-clinic-50/50 p-4 rounded-3xl border-2 border-dashed border-clinic-200 mb-4">
                <div className="w-48 h-48 bg-white p-3 rounded-2xl shadow-inner flex items-center justify-center relative overflow-hidden">
                  <img
                    src={`https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=${encodeURIComponent(
                      currentUrl
                    )}`}
                    alt="QR Code para acesso mobile"
                    className="w-full h-full object-contain"
                    onError={(e) => {
                      e.target.style.display = 'none';
                    }}
                  />
                  <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none opacity-0 hover:opacity-100 transition-opacity bg-white/90">
                    <Smartphone className="w-8 h-8 text-clinic-600 mb-1" />
                    <span className="text-[11px] font-bold text-slate-700">Aponte a câmera</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-1.5 text-xs text-slate-600 font-medium mb-4">
                <Smartphone className="w-4 h-4 text-clinic-600" />
                <span>Aponte a câmera do celular para abrir o site e o questionário</span>
              </div>

              {/* Copy Link Input */}
              <div className="w-full flex items-center gap-2 p-1.5 bg-slate-50 rounded-xl border border-slate-200 text-xs">
                <span className="truncate text-slate-500 flex-1 px-2 text-left select-all font-mono">
                  {currentUrl}
                </span>
                <button
                  onClick={handleCopy}
                  className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-clinic-600 text-white font-semibold hover:bg-clinic-700 transition-colors shrink-0"
                >
                  {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? 'Copiado!' : 'Copiar'}</span>
                </button>
              </div>
            </div>

            {/* Footer */}
            <div className="p-4 border-t border-slate-100 bg-slate-50 flex items-center justify-center">
              <span className="text-xs text-slate-400 font-medium">
                FADIPA 2026 • Odontologia Sem Mitos
              </span>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
