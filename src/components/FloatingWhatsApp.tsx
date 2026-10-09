import React, { useState, useEffect } from 'react';
import { MessageCircle, X, ChevronRight, ShieldCheck } from 'lucide-react';
import { getWhatsAppUrl, WHATSAPP_PHONE_DISPLAY } from '../utils/whatsapp';

export const FloatingWhatsApp: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    // Show gentle tooltip after 4 seconds
    const timer = setTimeout(() => {
      setShowTooltip(true);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  const handleOpenWhatsApp = (customMessage?: string) => {
    window.open(getWhatsAppUrl(customMessage), '_blank');
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Quick Interactive Triage Drawer */}
      {isOpen && (
        <div className="mb-3 w-80 sm:w-96 bg-white rounded-lg shadow-2xl border border-[#C5A059]/30 overflow-hidden animate-in fade-in slide-in-from-bottom-3 duration-200">
          {/* Drawer Header */}
          <div className="bg-[#111827] text-white p-4 flex items-center justify-between border-b border-[#C5A059]/20">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-[#1f2937] border border-[#C5A059] flex items-center justify-center font-serif text-lg font-bold text-[#C5A059]">
                  LP
                </div>
                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-500 border-2 border-[#111827] rounded-full" />
              </div>
              <div>
                <h4 className="text-sm font-semibold tracking-wide">Dra. Letícia Possenti</h4>
                <p className="text-xs text-neutral-400 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Atendimento Online Ativo
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-neutral-400 hover:text-white p-1 rounded transition-colors"
              aria-label="Fechar"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Drawer Content */}
          <div className="p-4 bg-neutral-50/60 text-xs text-neutral-600 border-b border-neutral-100 flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#C5A059] shrink-0" />
            <span>Atendimento sigiloso conforme o Código de Ética da OAB/RS.</span>
          </div>

          <div className="p-4 space-y-2.5">
            <p className="text-xs font-medium text-neutral-700">
              Selecione o assunto prioritário para falar com o escritório:
            </p>

            <button
              onClick={() =>
                handleOpenWhatsApp(
                  'Olá, Dra. Letícia! Gostaria de agendar orientação sobre Divórcio e Partilha de Bens.'
                )
              }
              className="w-full text-left p-2.5 bg-white hover:bg-[#F4EDE0]/50 border border-neutral-200 rounded text-xs text-neutral-800 font-medium flex items-center justify-between transition-colors group"
            >
              <span>Divórcio & Partilha de Bens</span>
              <ChevronRight className="w-4 h-4 text-neutral-400 group-hover:text-[#C5A059] transition-transform group-hover:translate-x-0.5" />
            </button>

            <button
              onClick={() =>
                handleOpenWhatsApp(
                  'Olá, Dra. Letícia! Preciso de orientação jurídica sobre Inventário e Partilha de Herança.'
                )
              }
              className="w-full text-left p-2.5 bg-white hover:bg-[#F4EDE0]/50 border border-neutral-200 rounded text-xs text-neutral-800 font-medium flex items-center justify-between transition-colors group"
            >
              <span>Inventário em Cartório ou Judicial</span>
              <ChevronRight className="w-4 h-4 text-neutral-400 group-hover:text-[#C5A059] transition-transform group-hover:translate-x-0.5" />
            </button>

            <button
              onClick={() =>
                handleOpenWhatsApp(
                  'Olá, Dra. Letícia! Gostaria de falar sobre Direitos TEA e negativa de terapias pelo plano de saúde.'
                )
              }
              className="w-full text-left p-2.5 bg-white hover:bg-[#F4EDE0]/50 border border-neutral-200 rounded text-xs text-neutral-800 font-medium flex items-center justify-between transition-colors group"
            >
              <span>Direitos TEA (Autismo) & Saúde</span>
              <ChevronRight className="w-4 h-4 text-neutral-400 group-hover:text-[#C5A059] transition-transform group-hover:translate-x-0.5" />
            </button>

            <button
              onClick={() =>
                handleOpenWhatsApp(
                  'Olá, Dra. Letícia! Gostaria de agendar uma consulta presencial em Caxias do Sul.'
                )
              }
              className="w-full text-left p-2.5 bg-[#111827] text-white hover:bg-[#1f2937] rounded text-xs font-medium flex items-center justify-between transition-colors"
            >
              <div className="flex items-center gap-2">
                <MessageCircle className="w-3.5 h-3.5 text-[#C5A059]" />
                <span>Iniciar Conversa Geral ({WHATSAPP_PHONE_DISPLAY})</span>
              </div>
              <ChevronRight className="w-4 h-4 text-[#C5A059]" />
            </button>
          </div>
        </div>
      )}

      {/* Interactive Tooltip Banner */}
      {!isOpen && showTooltip && (
        <div className="mb-2 relative hidden sm:block">
          <div className="bg-[#111827] text-white text-xs py-1.5 px-3 rounded shadow-lg border border-[#C5A059]/40 flex items-center gap-2 whitespace-nowrap animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Fale com a Dra. Letícia agora</span>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setShowTooltip(false);
              }}
              className="text-neutral-400 hover:text-white ml-1"
            >
              ×
            </button>
          </div>
          {/* Arrow */}
          <div className="w-2 h-2 bg-[#111827] rotate-45 border-r border-b border-[#C5A059]/40 absolute right-5 -bottom-1" />
        </div>
      )}

      {/* Main Floating WhatsApp Pulse Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Falar no WhatsApp com a Dra. Letícia Possenti"
        className="relative group p-3.5 sm:p-4 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white shadow-xl hover:shadow-2xl transition-all duration-200 active:scale-95 focus:outline-none focus-visible:ring-4 focus-visible:ring-[#25D366]/40"
      >
        {/* Subtle breathing ripple */}
        <span className="absolute -inset-1 rounded-full bg-[#25D366]/30 animate-ping opacity-60 pointer-events-none" />
        
        <div className="relative flex items-center justify-center">
          <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7 fill-white text-[#25D366]" />
        </div>
      </button>
    </div>
  );
};
