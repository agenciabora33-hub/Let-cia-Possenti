import React from 'react';
import { ShieldCheck, HeartHandshake, Scale, Award, ArrowRight } from 'lucide-react';
import { getWhatsAppUrl } from '../utils/whatsapp';

export const AuthoritySection: React.FC = () => {
  return (
    <section id="sobre" className="py-20 lg:py-28 bg-white border-b border-neutral-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs uppercase tracking-wider text-[#C5A059] font-semibold mb-2">
            Autoridade & Posicionamento
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#111827] font-medium tracking-tight text-balance">
            Técnica jurídica refinada aliada à profunda empatia humana.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-neutral-600 font-light leading-relaxed">
            Conflitos familiares e transmissões patrimoniais não são meros números de processos. Envolvem histórias de vida, laços afetivos e o futuro de filhos e herdeiros. Nossa atuação em Caxias do Sul é pautada pela condução serena, discreta e intransigente na garantia dos seus direitos.
          </p>
        </div>

        {/* 4 Architectural Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          <div className="p-8 rounded-lg bg-[#F9FAFB] border border-neutral-200/70 hover:border-[#C5A059]/40 transition-colors">
            <div className="w-12 h-12 rounded bg-white border border-[#C5A059]/30 flex items-center justify-center text-[#C5A059] mb-6 shadow-sm">
              <HeartHandshake className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-xl font-semibold text-[#111827] mb-2">
              Atendimento Humanizado
            </h3>
            <p className="text-sm text-neutral-600 leading-relaxed">
              Compreensão das angústias emocionais de momentos de ruptura, inventários e diagnósticos médicos atípicos, acolhendo sem julgamentos.
            </p>
          </div>

          <div className="p-8 rounded-lg bg-[#F9FAFB] border border-neutral-200/70 hover:border-[#C5A059]/40 transition-colors">
            <div className="w-12 h-12 rounded bg-white border border-[#C5A059]/30 flex items-center justify-center text-[#C5A059] mb-6 shadow-sm">
              <Scale className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-xl font-semibold text-[#111827] mb-2">
              Rigor Técnico & Partilha Justa
            </h3>
            <p className="text-sm text-neutral-600 leading-relaxed">
              Auditoria patrimonial meticulosa de imóveis, contas, participações societárias e regimes de bens para evitar prejuízos invisíveis.
            </p>
          </div>

          <div className="p-8 rounded-lg bg-[#F9FAFB] border border-neutral-200/70 hover:border-[#C5A059]/40 transition-colors">
            <div className="w-12 h-12 rounded bg-white border border-[#C5A059]/30 flex items-center justify-center text-[#C5A059] mb-6 shadow-sm">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-xl font-semibold text-[#111827] mb-2">
              Discrição & Sigilo Inviolável
            </h3>
            <p className="text-sm text-neutral-600 leading-relaxed">
              Proteção rigorosa da privacidade da sua família e negócios familiares em todos os âmbitos, seja presencialmente ou por videoconferência.
            </p>
          </div>

          <div className="p-8 rounded-lg bg-[#F9FAFB] border border-neutral-200/70 hover:border-[#C5A059]/40 transition-colors">
            <div className="w-12 h-12 rounded bg-white border border-[#C5A059]/30 flex items-center justify-center text-[#C5A059] mb-6 shadow-sm">
              <Award className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-xl font-semibold text-[#111827] mb-2">
              Defesa Especializada TEA / PCD
            </h3>
            <p className="text-sm text-neutral-600 leading-relaxed">
              Atuação combativa com liminares de urgência contra planos de saúde e SUS para liberação integral de terapias ABA, medicamentos e LOAS.
            </p>
          </div>

        </div>

        {/* Lawyer Bio Spotlight Box */}
        <div className="mt-16 bg-[#111827] rounded-xl text-white p-8 sm:p-12 border border-[#C5A059]/20 shadow-xl relative overflow-hidden">
          <div className="absolute right-0 top-0 w-80 h-80 bg-[#C5A059]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-wider text-[#C5A059] font-medium">
                <span>Perfil Profissional</span>
                <span className="text-neutral-500">·</span>
                <span>Inscrita na OAB/RS</span>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl text-white font-medium">
                Dra. Letícia Possenti
              </h3>
              <p className="text-sm sm:text-base text-neutral-300 leading-relaxed font-light">
                Advogada graduada com foco contínuo nas transformações do Direito das Famílias e Sucessões. Atua em Caxias do Sul e em toda a Serra Gaúcha orientando indivíduos e famílias em seus momentos mais delicados, garantindo que suas decisões sejam fundamentadas na melhor estratégia processual e na preservação da dignidade mútua.
              </p>
              <div className="pt-2 flex flex-wrap items-center gap-4 text-xs text-neutral-400">
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059]" />
                  Membro atuante na defesa dos direitos de famílias
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059]" />
                  Atendimento Presencial em Caxias do Sul e Online para todo o Brasil
                </span>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col items-start lg:items-end justify-center">
              <a
                href={getWhatsAppUrl('Olá, Dra. Letícia! Li sobre seu perfil e gostaria de conversar sobre meu caso.')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-[#C5A059] hover:bg-[#d4af37] text-[#111827] font-semibold text-xs uppercase tracking-wider rounded transition-all shadow-md active:scale-[0.99]"
              >
                <span>Falar Diretamente com a Dra. Letícia</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <span className="text-xs text-neutral-400 mt-2">
                Resposta rápida e com acolhimento
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
