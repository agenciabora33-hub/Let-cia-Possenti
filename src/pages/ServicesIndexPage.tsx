import React from 'react';
import { servicesData } from '../data/servicesData';
import { ArrowRight, Check, Scale, FileText, HeartHandshake, ShieldCheck, Coins } from 'lucide-react';
import { getWhatsAppUrl, getServiceWhatsAppUrl } from '../utils/whatsapp';

import divorcioImg from '../assets/images/divorcio_partilha_bens_1791555645234.jpg';
import sucessoesImg from '../assets/images/sucessoes_patrimonio_1791386831317.jpg';
import guardaImg from '../assets/images/guarda_infancia_protegida_1791555656534.jpg';
import teaImg from '../assets/images/family_care_specialized_1791386814944.jpg';
import pensaoImg from '../assets/images/pensao_alimenticia_apoio_1791579205311.jpg';

const SERVICE_INDEX_VISUALS: Record<string, { src: string; fallback: string; alt: string; tag: string }> = {
  'divorcio-e-partilha': {
    src: divorcioImg,
    fallback: '/images/divorcio_partilha_bens_1791555645234.jpg',
    alt: 'Divórcio consensual e partilha estratégica de patrimônio matrimonial',
    tag: 'Direito de Família'
  },
  'pensao-alimenticia': {
    src: pensaoImg,
    fallback: '/images/pensao_alimenticia_apoio_1791579205311.jpg',
    alt: 'Pensão alimentícia, fixação e cobrança sob rito de prisão ou penhora em Caxias do Sul',
    tag: 'Direito de Família'
  },
  'inventario-e-sucessoes': {
    src: sucessoesImg,
    fallback: '/images/sucessoes_patrimonio_1791386831317.jpg',
    alt: 'Inventário em cartório e planejamento sucessório com economia fiscal',
    tag: 'Direito Sucessório'
  },
  'guarda-e-convivencia': {
    src: guardaImg,
    fallback: '/images/guarda_infancia_protegida_1791555656534.jpg',
    alt: 'Guarda compartilhada e convivência familiar preservando os filhos',
    tag: 'Proteção à Infância'
  },
  'direitos-tea-e-apoio-especializado': {
    src: teaImg,
    fallback: '/images/family_care_specialized_1791386814944.jpg',
    alt: 'Direitos da pessoa autista com cobertura de terapias ABA',
    tag: 'Neurodiversidade'
  }
};

interface ServicesIndexPageProps {
  onNavigate: (path: string) => void;
}

export const ServicesIndexPage: React.FC<ServicesIndexPageProps> = ({ onNavigate }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Scale':
        return <Scale className="w-6 h-6 text-[#C5A059]" />;
      case 'FileText':
        return <FileText className="w-6 h-6 text-[#C5A059]" />;
      case 'HeartHandshake':
        return <HeartHandshake className="w-6 h-6 text-[#C5A059]" />;
      case 'Coins':
        return <Coins className="w-6 h-6 text-[#C5A059]" />;
      case 'ShieldCheck':
      default:
        return <ShieldCheck className="w-6 h-6 text-[#C5A059]" />;
    }
  };

  return (
    <div className="py-16 lg:py-24 bg-[#F9FAFB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb & Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 text-xs uppercase font-medium text-neutral-500 mb-3">
            <button onClick={() => onNavigate('/')} className="hover:text-[#C5A059]">
              Início
            </button>
            <span>/</span>
            <span className="text-[#C5A059] font-semibold">Áreas de Atuação</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl text-[#111827] font-medium tracking-tight">
            Especialidades Jurídicas Estratégicas
          </h1>
          <p className="mt-4 text-base sm:text-lg text-neutral-600 font-light leading-relaxed">
            Advocacia consultiva e contenciosa especializada em causas de família, partilhas patrimoniais, inventários em cartório e tutela dos direitos de neurodivergentes. Atendimento presencial em Caxias do Sul e online para todo o Brasil.
          </p>
        </div>

        {/* Services Full List with Visual Portrayals */}
        <div className="space-y-12">
          {servicesData.map((service, index) => {
            const visual = SERVICE_INDEX_VISUALS[service.id];
            const formattedIndex = `0${index + 1}`;

            return (
              <div
                key={service.id}
                className="bg-white rounded-2xl border border-neutral-200/90 overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                {/* Visual Top Banner for each service */}
                {visual && (
                  <div className="relative h-48 sm:h-56 w-full overflow-hidden bg-neutral-900 border-b border-neutral-100">
                    <img
                      src={visual.src}
                      alt={visual.alt}
                      className="w-full h-full object-cover filter brightness-[0.90]"
                      onError={(e) => {
                        e.currentTarget.src = visual.fallback;
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent" />
                    <div className="absolute bottom-4 left-6 right-6 flex items-center justify-between text-white text-xs">
                      <div className="flex items-center gap-2">
                        <span className="text-[#C5A059] font-mono font-bold text-sm">{formattedIndex}.</span>
                        <span className="font-semibold uppercase tracking-wider text-xs">{service.badge}</span>
                      </div>
                      <span className="text-[11px] text-neutral-300 font-light bg-black/40 backdrop-blur-sm px-2.5 py-1 rounded border border-white/10">
                        {visual.tag}
                      </span>
                    </div>
                  </div>
                )}

                <div className="p-8 sm:p-12">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                    
                    <div className="lg:col-span-8 space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-lg bg-[#F9FAFB] border border-[#C5A059]/30 flex items-center justify-center">
                          {getIcon(service.iconName)}
                        </div>
                        <div>
                          <span className="text-xs font-mono text-neutral-400 block">
                            {formattedIndex} · {service.badge}
                          </span>
                          <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-[#111827]">
                            {service.title}
                          </h2>
                        </div>
                      </div>

                      <p className="text-sm sm:text-base text-neutral-600 leading-relaxed font-light">
                        {service.longDescription}
                      </p>

                      <div>
                        <h4 className="text-xs uppercase font-semibold text-neutral-900 tracking-wider mb-2">
                          Destaques e Benefícios da Condução do Caso:
                        </h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {service.benefits.map((b, bIdx) => (
                            <div key={bIdx} className="text-xs text-neutral-700 flex items-start gap-2">
                              <Check className="w-3.5 h-3.5 text-[#C5A059] shrink-0 mt-0.5" />
                              <span>{b}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="lg:col-span-4 bg-[#F9FAFB] p-6 rounded-xl border border-neutral-200/80 flex flex-col justify-between h-full space-y-6">
                      <div>
                        <span className="text-xs uppercase font-semibold text-[#C5A059] tracking-wider block mb-1">
                          Para quem é indicada:
                        </span>
                        <p className="text-xs text-neutral-600 leading-relaxed">
                          {service.targetAudience}
                        </p>
                      </div>

                      <div className="space-y-2.5">
                        <button
                          onClick={() => onNavigate(`/servicos/${service.slug}`)}
                          className="w-full py-3 bg-[#111827] hover:bg-[#1f2937] text-white text-xs font-semibold uppercase tracking-wider rounded border border-[#C5A059] transition-colors flex items-center justify-center gap-2"
                        >
                          <span>Ver Página Completa & Etapas</span>
                          <ArrowRight className="w-3.5 h-3.5 text-[#C5A059]" />
                        </button>

                        <a
                          href={getServiceWhatsAppUrl(service.title)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full py-3 bg-white hover:bg-neutral-50 text-neutral-800 text-xs font-semibold uppercase tracking-wider rounded border border-neutral-300 transition-colors text-center block"
                        >
                          Consultar sobre esta Área
                        </a>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Global CTA Box */}
        <div className="mt-16 bg-[#111827] text-white p-8 sm:p-12 rounded-2xl border border-[#C5A059]/30 text-center max-w-3xl mx-auto space-y-4">
          <h3 className="font-serif text-2xl sm:text-3xl font-medium">
            Precisa de auxílio em uma questão com características mistas?
          </h3>
          <p className="text-sm text-neutral-300 font-light max-w-xl mx-auto">
            Muitas situações envolvem divórcio conjunto com partilha de herança familiar ou guarda de filho neurodivergente com pedidos de saúde. Conte com assessoria unificada e personalizada com atendimento presencial em Caxias do Sul e online para todo o Brasil.
          </p>
          <div className="pt-2">
            <a
              href={getWhatsAppUrl('Olá, Dra. Letícia! Tenho um caso complexo e gostaria de conversar.')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#C5A059] hover:bg-[#d4af37] text-[#111827] font-semibold text-xs uppercase tracking-wider rounded transition-colors shadow-lg"
            >
              <span>Conversar com a Dra. Letícia</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};
