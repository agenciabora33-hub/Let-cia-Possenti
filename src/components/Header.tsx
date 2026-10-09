import React, { useState } from 'react';
import { Menu, X, Phone, MessageCircle } from 'lucide-react';
import { getWhatsAppUrl, WHATSAPP_PHONE_DISPLAY } from '../utils/whatsapp';

interface HeaderProps {
  currentPath: string;
  onNavigate: (path: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ currentPath, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (path: string) => {
    onNavigate(path);
    setMobileMenuOpen(false);
  };

  return (
    <>
      {/* Discreet Local Trust Bar */}
      <div className="bg-[#111827] text-xs text-neutral-300 py-1.5 px-4 sm:px-8 border-b border-neutral-800">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#C5A059]" />
            <span className="font-medium text-white">Atendimento Presencial em Caxias do Sul</span>
            <span className="text-neutral-500">·</span>
            <span className="text-neutral-300">Online para todo o Brasil</span>
          </div>
          <div className="flex items-center gap-4 text-neutral-300">
            <a
              href={`tel:+5554996534554`}
              className="hover:text-[#D4AF37] transition-colors flex items-center gap-1.5"
            >
              <Phone className="w-3 h-3 text-[#C5A059]" />
              <span className="font-mono">{WHATSAPP_PHONE_DISPLAY}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Top Bar - Strictly 3 Zones */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-neutral-200/80 transition-shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          
          {/* Zone 1: Single Text Element Wordmark */}
          <button
            onClick={() => handleNavClick('/')}
            className="text-left group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C5A059]"
          >
            <span className="font-serif text-2xl sm:text-3xl font-semibold tracking-tight text-[#111827] group-hover:text-[#C5A059] transition-colors">
              Letícia Possenti
            </span>
          </button>

          {/* Zone 2: 4-6 Clean Text Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-700">
            <button
              onClick={() => handleNavClick('/')}
              className={`hover:text-[#C5A059] transition-colors pb-0.5 ${
                currentPath === '/' ? 'text-[#111827] font-semibold border-b-2 border-[#C5A059]' : ''
              }`}
            >
              Início
            </button>
            <button
              onClick={() => handleNavClick('/servicos')}
              className={`hover:text-[#C5A059] transition-colors pb-0.5 ${
                currentPath.startsWith('/servicos') ? 'text-[#111827] font-semibold border-b-2 border-[#C5A059]' : ''
              }`}
            >
              Áreas de Atuação
            </button>
            <button
              onClick={() => {
                handleNavClick('/');
                setTimeout(() => {
                  document.getElementById('sobre')?.scrollIntoView({ behavior: 'smooth' });
                }, 50);
              }}
              className="hover:text-[#C5A059] transition-colors"
            >
              A Advogada
            </button>
            <button
              onClick={() => {
                handleNavClick('/');
                setTimeout(() => {
                  document.getElementById('simulador')?.scrollIntoView({ behavior: 'smooth' });
                }, 50);
              }}
              className="hover:text-[#C5A059] transition-colors"
            >
              Simulador Jurídico
            </button>
            <button
              onClick={() => {
                handleNavClick('/');
                setTimeout(() => {
                  document.getElementById('duvidas')?.scrollIntoView({ behavior: 'smooth' });
                }, 50);
              }}
              className="hover:text-[#C5A059] transition-colors"
            >
              Dúvidas
            </button>
            <button
              onClick={() => handleNavClick('/contato')}
              className={`hover:text-[#C5A059] transition-colors pb-0.5 ${
                currentPath === '/contato' ? 'text-[#111827] font-semibold border-b-2 border-[#C5A059]' : ''
              }`}
            >
              Contato
            </button>
          </nav>

          {/* Zone 3: 1-2 Primary Actions */}
          <div className="flex items-center gap-3">
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#111827] hover:bg-[#1f2937] active:scale-[0.99] rounded border border-[#C5A059]/40 shadow-sm transition-all whitespace-nowrap"
            >
              <MessageCircle className="w-3.5 h-3.5 text-[#C5A059]" />
              <span>Agendar Consulta</span>
            </a>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
              className="md:hidden p-2 text-neutral-700 hover:text-[#111827] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C5A059]"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-b border-neutral-200 px-6 py-6 shadow-xl space-y-4">
            <div className="flex flex-col space-y-3 text-base font-medium text-neutral-800">
              <button
                onClick={() => handleNavClick('/')}
                className="text-left py-2 hover:text-[#C5A059] border-b border-neutral-100"
              >
                Início
              </button>
              <button
                onClick={() => handleNavClick('/servicos')}
                className="text-left py-2 hover:text-[#C5A059] border-b border-neutral-100"
              >
                Áreas de Atuação
              </button>
              <button
                onClick={() => {
                  handleNavClick('/');
                  setTimeout(() => {
                    document.getElementById('sobre')?.scrollIntoView({ behavior: 'smooth' });
                  }, 50);
                }}
                className="text-left py-2 hover:text-[#C5A059] border-b border-neutral-100"
              >
                A Advogada & Escritório
              </button>
              <button
                onClick={() => {
                  handleNavClick('/');
                  setTimeout(() => {
                    document.getElementById('simulador')?.scrollIntoView({ behavior: 'smooth' });
                  }, 50);
                }}
                className="text-left py-2 hover:text-[#C5A059] border-b border-neutral-100"
              >
                Simulador Jurídico & Triagem
              </button>
              <button
                onClick={() => {
                  handleNavClick('/');
                  setTimeout(() => {
                    document.getElementById('duvidas')?.scrollIntoView({ behavior: 'smooth' });
                  }, 50);
                }}
                className="text-left py-2 hover:text-[#C5A059] border-b border-neutral-100"
              >
                Dúvidas Frequentes (FAQ)
              </button>
              <button
                onClick={() => handleNavClick('/contato')}
                className="text-left py-2 hover:text-[#C5A059] border-b border-neutral-100"
              >
                Contato & Localização
              </button>
              <button
                onClick={() => handleNavClick('/bio')}
                className="text-left py-2 text-[#C5A059] font-medium"
              >
                Hub de Links Instagram / Bio →
              </button>
            </div>

            <div className="pt-2">
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold uppercase tracking-wider text-white bg-[#111827] rounded border border-[#C5A059]"
              >
                <MessageCircle className="w-4 h-4 text-[#C5A059]" />
                <span>Falar no WhatsApp Agora</span>
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
