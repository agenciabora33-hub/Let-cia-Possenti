import React from 'react';
import { Shield, Sparkles, UserCheck, Scale, Compass, Check } from 'lucide-react';
import { getWhatsAppUrl } from '../utils/whatsapp';

export const WhyChooseUs: React.FC = () => {
  const differentiators = [
    {
      title: 'Atendimento Direto com a Advogada',
      description: 'Seu processo não é terceirizado para estagiários ou assistentes. Cada estratégia e cada documento são elaborados diretamente pela Dra. Letícia Possenti.',
      icon: UserCheck
    },
    {
      title: 'Equilíbrio entre Firmeza e Empatia',
      description: 'Sensibilidade para acolher as dores familiares somada ao rigor implacável na defesa do seu patrimônio e dos seus filhos.',
      icon: Scale
    },
    {
      title: 'Advocacia Preventiva e Resolutiva',
      description: 'Priorizamos soluções rápidas em cartório e acordos justos para diminuir anos de desgaste emocional e economizar custos judiciais.',
      icon: Compass
    },
    {
      title: 'Sigilo Absoluto e Discrição na Serra Gaúcha',
      description: 'Resguardo total da intimidade de famílias e empresários locais, garantindo tranquilidade em todas as etapas do processo.',
      icon: Shield
    }
  ];

  return (
    <section className="py-20 lg:py-28 bg-[#111827] text-white relative overflow-hidden">
      {/* Ambient gold glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#C5A059]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Proposition */}
          <div className="lg:col-span-5 space-y-6">
            <div className="text-xs uppercase tracking-wider text-[#C5A059] font-semibold flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Diferenciais de Excelência</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight leading-tight text-balance">
              Por que confiar sua causa à Dra. Letícia Possenti?
            </h2>

            <p className="text-sm sm:text-base text-neutral-300 font-light leading-relaxed">
              O direito de família e as sucessões lidam com os bens mais preciosos da sua existência: seus filhos, suas conquistas acumuladas ao longo de uma vida e a paz de espírito necessária para recomeçar.
            </p>

            <div className="p-6 rounded-lg bg-neutral-900/80 border border-[#C5A059]/30">
              <span className="font-serif text-lg text-white font-medium block mb-2">
                Compromisso com o Cliente:
              </span>
              <ul className="space-y-2 text-xs text-neutral-300">
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-[#C5A059]" />
                  <span>Comunicação transparente em linguagem clara e acessível</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-[#C5A059]" />
                  <span>Atualizações constantes sobre o andamento processual</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-[#C5A059]" />
                  <span>Atendimento presencial em Caxias do Sul e online para todo o Brasil</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-[#C5A059]" />
                  <span>Ambiente acolhedor e seguro para você e seus familiares</span>
                </li>
              </ul>
            </div>

            <div>
              <a
                href={getWhatsAppUrl('Olá, Dra. Letícia! Gostaria de conversar sobre um assunto confidencial.')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#C5A059] hover:bg-[#d4af37] text-[#111827] font-semibold text-xs uppercase tracking-wider rounded transition-all shadow-lg active:scale-[0.99]"
              >
                <span>Agendar Atendimento Especializado</span>
              </a>
            </div>
          </div>

          {/* Right Column: 4 Pillars */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {differentiators.map((diff, index) => {
              const Icon = diff.icon;
              return (
                <div
                  key={index}
                  className="p-6 rounded-xl bg-neutral-900/60 border border-neutral-800 hover:border-[#C5A059]/40 transition-colors"
                >
                  <div className="w-10 h-10 rounded bg-[#1f2937] border border-[#C5A059]/30 flex items-center justify-center text-[#C5A059] mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-serif text-lg font-semibold text-white mb-2">
                    {diff.title}
                  </h3>
                  <p className="text-xs text-neutral-400 leading-relaxed font-light">
                    {diff.description}
                  </p>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
};
