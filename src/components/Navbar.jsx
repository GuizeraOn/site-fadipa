import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, BookOpen, Sparkles, ExternalLink } from 'lucide-react';
import { PROJECT_CONFIG } from '../constants';

export default function Navbar() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const progress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(progress);
      }
      setIsScrolled(window.scrollY > 30);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: "O que é Cárie?", href: "#o-que-e-carie" },
    { label: "Remoção Seletiva", href: "#remocao-seletiva" },
    { label: "Mitos & Verdades", href: "#mitos-verdades" },
    { label: "Benefícios", href: "#beneficios" },
    { label: "Como Funciona", href: "#como-funciona" },
    { label: "Perguntas Frequentes", href: "#faq" },
    { label: "Ciência", href: "#ciencia" },
    { label: "Sobre o Projeto", href: "#sobre" },
  ];

  return (
    <>
      {/* Top Reading Progress Bar */}
      <div className="fixed top-0 left-0 right-0 h-1.5 bg-slate-200/50 z-50">
        <div
          className="h-full bg-gradient-to-r from-clinic-600 via-dental-500 to-clinic-500 transition-all duration-150 ease-out shadow-sm"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Main Header */}
      <header
        className={`fixed top-1.5 left-0 right-0 z-40 transition-all duration-200 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200/80 py-2.5'
            : 'bg-white/80 backdrop-blur-sm py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo & Brand */}
          <a
            href="#"
            className="flex items-center gap-2.5 group focus:outline-none focus-visible:ring-2 focus-visible:ring-clinic-500 rounded-lg p-1"
          >
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-clinic-600 to-dental-500 flex items-center justify-center text-white shadow-sm shadow-clinic-500/30 group-hover:scale-105 transition-transform">
              <span className="text-xl select-none">🦷</span>
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-extrabold text-base sm:text-lg tracking-tight text-slate-900 group-hover:text-clinic-700 transition-colors">
                  {PROJECT_CONFIG.name}
                </span>
                <span className="hidden sm:inline-block text-[10px] uppercase font-bold tracking-wider px-1.5 py-0.5 rounded bg-clinic-100 text-clinic-800 border border-clinic-200">
                  FADIPA
                </span>
              </div>
              <p className="text-[11px] text-slate-500 hidden md:block">
                Cárie: Menos é Mais
              </p>
            </div>
          </a>

          {/* Reading Time Badge & Desktop Nav */}
          <nav className="hidden xl:flex items-center gap-5 text-sm font-medium text-slate-600">
            {navLinks.slice(0, 5).map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-clinic-600 transition-colors py-1"
              >
                {link.label}
              </a>
            ))}
            <div className="relative group">
              <button className="flex items-center gap-1 hover:text-clinic-600 py-1">
                Mais
                <span className="text-[10px] text-slate-400">▾</span>
              </button>
              <div className="absolute top-full right-0 pt-2 hidden group-hover:block group-focus-within:block w-48 animate-in fade-in">
                <div className="bg-white rounded-xl shadow-lg border border-slate-200 p-2 space-y-1">
                  {navLinks.slice(5).map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      className="block px-3 py-1.5 text-xs text-slate-700 hover:bg-clinic-50 hover:text-clinic-700 rounded-lg transition-colors"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </nav>

          {/* Action CTAs */}
          <div className="flex items-center gap-3">
            {/* Reading Time Pill */}
            <div className="hidden sm:flex items-center gap-1.5 text-xs font-medium text-slate-500 bg-slate-100/80 px-2.5 py-1.5 rounded-full border border-slate-200/70">
              <span className="animate-pulse text-dental-600">⏱️</span>
              <span>{PROJECT_CONFIG.readingTime}</span>
            </div>

            {/* Direct Form Link */}
            <a
              href={PROJECT_CONFIG.formsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-clinic-600 to-dental-600 hover:from-clinic-700 hover:to-dental-700 text-white text-xs sm:text-sm font-semibold px-3.5 sm:px-4 py-2 rounded-xl shadow-sm shadow-clinic-600/20 hover:shadow-md transition-all active:scale-95"
            >
              <span>Questionário</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2 rounded-lg text-slate-600 hover:bg-slate-100 transition-colors"
              aria-label="Abrir menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
          <div className="xl:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-2 mt-2 shadow-lg animate-in slide-in-from-top-2">
            <div className="flex items-center gap-2 pb-2 mb-2 border-b border-slate-100 text-xs text-slate-500 font-medium">
              <span>⏱️ {PROJECT_CONFIG.readingTime}</span>
              <span>•</span>
              <span>Extensão FADIPA 2026</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 text-sm text-slate-700 hover:bg-clinic-50 hover:text-clinic-700 rounded-lg transition-colors font-medium"
                >
                  {link.label}
                </a>
              ))}
            </div>
            <div className="pt-3">
              <a
                href={PROJECT_CONFIG.formsUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 bg-clinic-600 hover:bg-clinic-700 text-white font-semibold text-sm py-2.5 rounded-xl shadow-sm transition-colors"
              >
                <span>Responder Questionário de Opinião</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
