import React from 'react';
import { ArrowRight, Shield, Award, MapPin, CheckCircle2 } from 'lucide-react';
import { getWhatsAppUrl } from '../utils/whatsapp';

interface HeroProps {
  onNavigate: (path: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-[#F9FAFB] to-[#F3F4F6] pt-12 pb-20 lg:pt-16 lg:pb-28 border-b border-neutral-200/60">
      {/* Subtle luxury ambient glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#C5A059]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-[#111827]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Magnetic Value Proposition */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Unboxed Metadata Trust Marker (Strictly No Pills) */}
            <div className="flex flex-wrap items-center gap-2 text-xs uppercase tracking-wider text-neutral-600 font-semibold">
              <span className="text-[#C5A059] font-bold">Direito de Família & Sucessões</span>
              <span aria-hidden="true" className="text-neutral-400">·</span>
              <span className="text-[#111827]">Presencial em Caxias do Sul</span>
              <span aria-hidden="true" className="text-neutral-400">·</span>
              <span>Online para todo o Brasil</span>
            </div>

            {/* Main Headline - Balanced & Impactful */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#111827] font-medium leading-[1.12] tracking-tight text-balance">
              Advocacia estratégica e humanizada em Direito de Família e Sucessões.
            </h1>

            {/* Sub-headline / Copy */}
            <p className="text-base sm:text-lg text-neutral-600 leading-relaxed max-w-2xl font-light">
              Protegemos seu patrimônio e a harmonia de quem você ama com <strong>atendimento presencial em Caxias do Sul</strong> e <strong>atendimento online para todo o Brasil</strong>. Atuação especializada em divórcios, inventários ágeis em cartório, guarda e direitos TEA.
            </p>

            {/* Concrete Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs sm:text-sm text-neutral-700 font-medium">
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#C5A059] shrink-0" />
                <span>Inventários céleres em cartório</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#C5A059] shrink-0" />
                <span>Partilha estratégica sem desgaste</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#C5A059] shrink-0" />
                <span>Planos parentais & guarda consciente</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#C5A059] shrink-0" />
                <span>Acesso garantido a terapias TEA (ABA)</span>
              </div>
            </div>

            {/* CTAs Restraint - Maximum 1 Primary */}
            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href={getWhatsAppUrl('Olá, Dra. Letícia Possenti! Gostaria de agendar uma consulta para orientação em Caxias do Sul.')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-7 py-4 text-sm font-semibold uppercase tracking-wider text-white bg-[#111827] hover:bg-[#1f2937] active:scale-[0.99] rounded border border-[#C5A059]/60 shadow-lg hover:shadow-xl transition-all whitespace-nowrap"
              >
                <span>Falar com a Dra. Letícia</span>
                <ArrowRight className="w-4 h-4 text-[#C5A059]" />
              </a>

              <button
                onClick={() => onNavigate('/servicos')}
                className="inline-flex items-center justify-center gap-2 px-6 py-4 text-sm font-semibold text-neutral-800 hover:text-[#C5A059] bg-white hover:bg-neutral-50 border border-neutral-300 rounded shadow-sm transition-all whitespace-nowrap"
              >
                <span>Conhecer Especialidades</span>
              </button>
            </div>

            {/* Trust and Local Accreditation Footer Strip */}
            <div className="pt-6 border-t border-neutral-200/80 flex flex-wrap items-center gap-6 text-xs text-neutral-500">
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-[#C5A059]" />
                <span>Sigilo Profissional OAB/RS</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-[#C5A059]" />
                <span>Advocacia Preventiva e Contenciosa</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#C5A059]" />
                <span>Presencial em Caxias do Sul · Online para todo o Brasil</span>
              </div>
            </div>

          </div>

          {/* Right Column: High-Fidelity Editorial Visual Asset */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Outer decorative gold hairline frame */}
              <div className="absolute -inset-2.5 rounded-2xl border border-[#C5A059]/25 transform rotate-1 hidden sm:block pointer-events-none" />
              
              <div className="relative rounded-xl overflow-hidden bg-white shadow-2xl border border-neutral-200">
                {/* Lawyer Portrait */}
                <div className="relative aspect-[4/5] sm:aspect-[3/4] bg-neutral-900 overflow-hidden">
                  <img
                    src="https://i.ibb.co/kVdW3dYG/watermarked-img-15853591358428785044.jpg"
                    alt="watermarked-img-15853591358428785044"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center filter brightness-[0.98] transition-transform duration-700 hover:scale-105"
                    onError={(e) => {
                      const target = e.currentTarget;
                      if (!target.src.includes('dra_leticia_possenti')) {
                        target.src = '/images/dra_leticia_possenti.jpg';
                      }
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111827]/90 via-[#111827]/20 to-transparent" />
                  
                  {/* Floating card anchor on portrait */}
                  <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-4 rounded border border-[#C5A059]/30 shadow-lg">
                    <div className="flex items-start justify-between">
                      <div>
                        <span className="font-serif text-lg font-bold text-[#111827] block">
                          Dra. Letícia Possenti
                        </span>
                        <span className="text-xs text-[#C5A059] font-medium tracking-wide uppercase">
                          OAB/RS · Advocacia Humanizada
                        </span>
                      </div>
                      <span className="inline-flex items-center gap-1.5 text-[11px] font-medium text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                        Disponível
                      </span>
                    </div>
                    <p className="mt-2 text-xs text-neutral-600 line-clamp-2">
                      "O Direito não deve agravar dores, mas restabelecer a segurança e o respeito que cada família merece."
                    </p>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
