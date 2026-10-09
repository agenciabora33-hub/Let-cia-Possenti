import React from 'react';
import { ShieldCheck, ArrowLeft, Scale, AlertCircle } from 'lucide-react';
import { OFFICE_ADDRESS, EMAIL_CONTACT, WHATSAPP_PHONE_DISPLAY } from '../utils/whatsapp';

interface TermsPageProps {
  onNavigate: (path: string) => void;
}

export const TermsPage: React.FC<TermsPageProps> = ({ onNavigate }) => {
  return (
    <div className="bg-[#F9FAFB] py-16 lg:py-24 text-neutral-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs uppercase font-medium text-neutral-500 mb-6">
          <button onClick={() => onNavigate('/')} className="hover:text-[#C5A059] transition-colors">
            Início
          </button>
          <span>/</span>
          <span className="text-[#C5A059] font-semibold">Termos de Uso e Avisos Legais</span>
        </div>

        {/* Header */}
        <div className="bg-white p-8 sm:p-10 rounded-2xl border border-neutral-200/90 shadow-sm mb-10">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-wider text-[#C5A059] font-semibold mb-3">
            <Scale className="w-4 h-4" />
            <span>Código de Ética da OAB & Diretrizes de Plataformas de Anúncios</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl text-[#111827] font-medium tracking-tight">
            Termos de Uso & Avisos Regulatórios
          </h1>
          <p className="mt-3 text-sm text-neutral-600 font-light leading-relaxed">
            Regras de navegação, conformidade ética com o Provimento nº 205/2021 do Conselho Federal da OAB e avisos legais sobre serviços de publicidade.
          </p>
        </div>

        {/* Content Body */}
        <div className="bg-white p-8 sm:p-10 rounded-2xl border border-neutral-200/90 shadow-sm space-y-8 text-sm leading-relaxed text-neutral-700">
          
          <section className="space-y-3">
            <h2 className="font-serif text-xl font-semibold text-[#111827]">
              1. Caráter Informativo e Não Vinculante (Provimento 205/2021 OAB)
            </h2>
            <p>
              O conteúdo deste site possui caráter estritamente educativo, institucional e informativo. Os textos, simuladores preliminares e respostas a perguntas frequentes não constituem consultoria jurídica vinculante nem substituem a análise formal de documentos por um advogado regularmente inscrito na OAB.
            </p>
            <p className="text-neutral-600">
              A advocacia brasileira proíbe a promessa de resultado de causa ganha, uma vez que toda decisão judicial depende da apreciação soberana do Poder Judiciário e das particularidades de cada caso concreto.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-xl font-semibold text-[#111827]">
              2. Modalidades de Atendimento
            </h2>
            <p>
              A <strong>Dra. Letícia Possenti</strong> presta assessoria jurídica nas seguintes modalidades oficiais:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
              <div className="p-4 rounded-xl bg-[#F9FAFB] border border-neutral-200">
                <span className="font-serif text-base font-semibold text-[#111827] block mb-1">
                  Atendimento Presencial em Caxias do Sul - RS
                </span>
                <p className="text-xs text-neutral-600">
                  Realizado em sede física ({OFFICE_ADDRESS}), mediante agendamento prévio individualizado para garantia de sigilo e conforto.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#F9FAFB] border border-neutral-200">
                <span className="font-serif text-base font-semibold text-[#111827] block mb-1">
                  Atendimento Online para todo o Brasil
                </span>
                <p className="text-xs text-neutral-600">
                  Realizado por videoconferência criptografada e peticionamento eletrônico em tribunais de todo o país (e-Proc, PJe, Projudi).
                </p>
              </div>
            </div>
          </section>

          {/* Meta Ads & Google Ads Mandatory Disclaimer */}
          <section className="space-y-3 p-5 rounded-xl bg-neutral-50 border border-neutral-200">
            <h2 className="font-serif text-lg font-semibold text-[#111827] flex items-center gap-2">
              <AlertCircle className="w-4 h-4 text-[#C5A059]" />
              <span>3. Isenção de Responsabilidade sobre Plataformas de Terceiros (Google & Meta)</span>
            </h2>
            <p className="text-xs text-neutral-600 leading-relaxed">
              <strong>Aviso de Propriedade Intelectual & Isenção de Vínculo:</strong> Este site não é afiliado, associado, autorizado, endossado ou de qualquer forma oficialmente conectado ao <em>Google LLC</em> ou à <em>Meta Platforms, Inc.</em> (proprietária do Facebook e Instagram).
            </p>
            <p className="text-xs text-neutral-600 leading-relaxed">
              As marcas "Google", "Google Ads", "Meta", "Facebook" e "Instagram" são marcas comerciais registradas de seus respectivos proprietários. Todos os anúncios eventualmente veiculados em tais plataformas seguem rigorosamente as Políticas de Publicidade aplicáveis e as regras do Código de Ética e Disciplina da OAB.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-xl font-semibold text-[#111827]">
              4. Contato Institucional
            </h2>
            <p>
              Para esclarecimentos sobre estes Termos de Uso:
            </p>
            <p className="text-xs text-neutral-600 font-mono">
              E-mail: {EMAIL_CONTACT} · Telefone: {WHATSAPP_PHONE_DISPLAY} · Caxias do Sul - RS
            </p>
          </section>

        </div>

        {/* Back Button */}
        <div className="mt-8 flex justify-center">
          <button
            onClick={() => onNavigate('/')}
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#111827] hover:bg-[#1f2937] text-white text-xs uppercase font-semibold tracking-wider rounded border border-[#C5A059] transition-colors"
          >
            <ArrowLeft className="w-4 h-4 text-[#C5A059]" />
            <span>Voltar à Página Principal</span>
          </button>
        </div>

      </div>
    </div>
  );
};
