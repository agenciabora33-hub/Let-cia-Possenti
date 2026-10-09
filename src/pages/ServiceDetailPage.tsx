import React from 'react';
import { servicesData } from '../data/servicesData';
import { ArrowLeft, Check, FileCheck, HelpCircle, ArrowRight, MessageCircle, ShieldCheck } from 'lucide-react';
import { getServiceWhatsAppUrl, getWhatsAppUrl } from '../utils/whatsapp';
import divorcioImg from '../assets/images/divorcio_partilha_bens_1791555645234.jpg';
import sucessoesImg from '../assets/images/sucessoes_patrimonio_1791386831317.jpg';
import guardaImg from '../assets/images/guarda_infancia_protegida_1791555656534.jpg';
import teaImg from '../assets/images/family_care_specialized_1791386814944.jpg';

const SERVICE_HERO_IMAGES: Record<string, { src: string; fallback: string }> = {
  'divorcio-e-partilha': {
    src: divorcioImg,
    fallback: '/images/divorcio_partilha_bens_1791555645234.jpg',
  },
  'inventario-e-sucessoes': {
    src: sucessoesImg,
    fallback: '/images/sucessoes_patrimonio_1791386831317.jpg',
  },
  'guarda-e-convivencia': {
    src: guardaImg,
    fallback: '/images/guarda_infancia_protegida_1791555656534.jpg',
  },
  'direitos-tea-e-apoio-especializado': {
    src: teaImg,
    fallback: '/images/family_care_specialized_1791386814944.jpg',
  },
};

interface ServiceDetailPageProps {
  slug: string;
  onNavigate: (path: string) => void;
}

export const ServiceDetailPage: React.FC<ServiceDetailPageProps> = ({ slug, onNavigate }) => {
  const service = servicesData.find((s) => s.slug === slug);

  if (!service) {
    return (
      <div className="py-24 text-center max-w-lg mx-auto px-4">
        <h2 className="font-serif text-3xl font-bold text-[#111827]">Área de Atuação Não Encontrada</h2>
        <p className="text-neutral-600 mt-2 text-sm">
          A especialidade solicitada não foi localizada em nossa base de serviços.
        </p>
        <button
          onClick={() => onNavigate('/servicos')}
          className="mt-6 inline-flex items-center gap-2 px-6 py-2.5 bg-[#111827] text-white text-xs uppercase font-semibold tracking-wider rounded"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Voltar para Áreas de Atuação</span>
        </button>
      </div>
    );
  }

  const heroVisual = SERVICE_HERO_IMAGES[service.id] || {
    src: divorcioImg,
    fallback: '/images/divorcio_partilha_bens_1791555645234.jpg'
  };

  return (
    <div className="bg-[#F9FAFB] pb-24">
      {/* Hero Service Banner */}
      <div className="relative bg-[#111827] text-white py-16 lg:py-24 overflow-hidden border-b border-neutral-800">
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <img
            src={heroVisual.src}
            alt={service.title}
            className="w-full h-full object-cover filter blur-sm"
            onError={(e) => {
              e.currentTarget.src = heroVisual.fallback;
            }}
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#111827] via-[#111827]/90 to-transparent" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs font-medium text-neutral-400 mb-6">
            <button onClick={() => onNavigate('/')} className="hover:text-white transition-colors">
              Início
            </button>
            <span>/</span>
            <button onClick={() => onNavigate('/servicos')} className="hover:text-white transition-colors">
              Áreas de Atuação
            </button>
            <span>/</span>
            <span className="text-[#C5A059]">{service.title}</span>
          </div>

          <div className="max-w-3xl space-y-4">
            <div className="inline-block text-xs uppercase font-semibold tracking-wider text-[#C5A059]">
              {service.badge} · Caxias do Sul & Serra Gaúcha
            </div>
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-white leading-tight">
              {service.title}
            </h1>
            <p className="text-base sm:text-xl text-neutral-300 font-light leading-relaxed">
              {service.heroHeadline}
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href={getServiceWhatsAppUrl(service.title)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 bg-[#C5A059] hover:bg-[#d4af37] text-[#111827] font-semibold text-xs uppercase tracking-wider rounded transition-all shadow-lg whitespace-nowrap"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Agendar Consulta sobre {service.title}</span>
              </a>

              <button
                onClick={() => onNavigate('/servicos')}
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 bg-neutral-900/80 hover:bg-neutral-800 text-neutral-200 text-xs font-medium uppercase tracking-wider rounded border border-neutral-700 transition-colors whitespace-nowrap"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Ver Outras Especialidades</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Deep Content */}
          <div className="lg:col-span-8 space-y-16">
            
            {/* Overview Section */}
            <div className="bg-white p-8 sm:p-10 rounded-2xl border border-neutral-200/90 shadow-sm space-y-6">
              <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-[#111827]">
                Visão Geral e Atuação Estratégica
              </h2>
              <p className="text-neutral-700 leading-relaxed text-sm sm:text-base font-light">
                {service.longDescription}
              </p>

              <div className="pt-4 border-t border-neutral-100">
                <h3 className="text-xs uppercase font-semibold text-neutral-900 tracking-wider mb-4">
                  Vantagens & Salvaguardas Jurídicas:
                </h3>
                <div className="space-y-3">
                  {service.benefits.map((b, i) => (
                    <div key={i} className="flex items-start gap-3 text-xs sm:text-sm text-neutral-700">
                      <Check className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                      <span>{b}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Stages Step-by-Step (Clean Editorial 01, 02, 03) */}
            <div className="bg-white p-8 sm:p-10 rounded-2xl border border-neutral-200/90 shadow-sm space-y-8">
              <div>
                <span className="text-xs uppercase font-semibold text-[#C5A059] tracking-wider block mb-1">
                  Metodologia de Atuação
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-[#111827]">
                  Passo a Passo da Condução do Processo
                </h2>
              </div>

              <div className="space-y-6">
                {service.stages.map((stage, idx) => (
                  <div
                    key={idx}
                    className="p-6 rounded-xl bg-[#F9FAFB] border border-neutral-200/70 flex flex-col sm:flex-row gap-5 items-start"
                  >
                    <div className="w-12 h-12 rounded-lg bg-[#111827] text-[#C5A059] flex items-center justify-center font-mono font-bold text-lg shrink-0">
                      {stage.step}
                    </div>
                    <div>
                      <h3 className="font-serif text-lg font-semibold text-[#111827] mb-1">
                        {stage.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                        {stage.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Documents Required Checklist */}
            <div className="bg-white p-8 sm:p-10 rounded-2xl border border-neutral-200/90 shadow-sm space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded bg-[#F4EDE0] text-[#C5A059] flex items-center justify-center">
                  <FileCheck className="w-5 h-5 text-[#C5A059]" />
                </div>
                <div>
                  <h2 className="font-serif text-2xl font-semibold text-[#111827]">
                    Documentos Necessários para Iniciar
                  </h2>
                  <p className="text-xs text-neutral-500">
                    Apresente os itens disponíveis na primeira reunião; auxiliaremos na obtenção dos faltantes.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {service.documentsRequired.map((doc, dIdx) => (
                  <div
                    key={dIdx}
                    className="p-3 rounded-lg bg-[#F9FAFB] border border-neutral-200 text-xs text-neutral-700 flex items-start gap-2.5"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059] mt-1.5 shrink-0" />
                    <span>{doc}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Service-Specific FAQs */}
            <div className="bg-white p-8 sm:p-10 rounded-2xl border border-neutral-200/90 shadow-sm space-y-6">
              <div className="flex items-center gap-2 text-xs uppercase font-semibold text-[#C5A059] tracking-wider">
                <HelpCircle className="w-4 h-4" />
                <span>Perguntas Frequentes sobre {service.title}</span>
              </div>
              <h2 className="font-serif text-2xl font-semibold text-[#111827]">
                Dúvidas Mais Comuns dos Clientes
              </h2>

              <div className="space-y-4">
                {service.faqs.map((f, fIdx) => (
                  <div key={fIdx} className="p-5 rounded-xl bg-[#F9FAFB] border border-neutral-200">
                    <h3 className="font-serif text-base font-semibold text-[#111827] mb-2">
                      {f.question}
                    </h3>
                    <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-light">
                      {f.answer}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Sticky Consultation Box */}
          <div className="lg:col-span-4 sticky top-28 space-y-6">
            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-[#C5A059]/40 shadow-xl space-y-6">
              <div className="space-y-2">
                <span className="text-xs uppercase font-semibold text-[#C5A059] tracking-wider block">
                  Atendimento Especializado
                </span>
                <h3 className="font-serif text-2xl font-semibold text-[#111827]">
                  Inicie sua análise com a Dra. Letícia Possenti
                </h3>
                <p className="text-xs text-neutral-600 leading-relaxed font-light">
                  Agende um horário para diagnóstico reservado e receba direcionamento claro sobre prazos, custos e estratégias.
                </p>
              </div>

              <div className="space-y-3 pt-2">
                <a
                  href={getServiceWhatsAppUrl(service.title)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-3.5 bg-[#111827] hover:bg-[#1f2937] text-white text-xs font-semibold uppercase tracking-wider rounded border border-[#C5A059] transition-all shadow-md text-center"
                >
                  <MessageCircle className="w-4 h-4 text-[#C5A059]" />
                  <span>Falar sobre {service.title}</span>
                </a>

                <button
                  onClick={() => onNavigate('/contato')}
                  className="w-full inline-flex items-center justify-center gap-2 py-3 bg-white hover:bg-neutral-50 text-neutral-800 text-xs font-semibold uppercase tracking-wider rounded border border-neutral-300 transition-colors"
                >
                  <span>Formulário de Triagem</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

              <div className="pt-4 border-t border-neutral-100 space-y-2 text-xs text-neutral-500">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#C5A059]" />
                  <span>Sigilo garantido pelo Estatuto da OAB</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  <span>Atendimento Presencial em Caxias do Sul</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  <span>Atendimento Online em Todo o Brasil</span>
                </div>
              </div>
            </div>

            {/* Local Trust Banner */}
            <div className="bg-[#111827] text-white p-6 rounded-xl border border-neutral-800">
              <span className="text-xs font-mono text-[#C5A059] block mb-1">
                SEDE CAXIAS DO SUL - RS
              </span>
              <p className="text-xs text-neutral-300 font-light leading-relaxed">
                Rua Os Dezoito do Forte · Atendimento com agendamento prévio para assegurar total privacidade aos clientes.
              </p>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};
