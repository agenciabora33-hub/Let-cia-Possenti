import React from 'react';
import { ShieldCheck, ArrowLeft, Lock, FileText, CheckCircle2 } from 'lucide-react';
import { OFFICE_ADDRESS, EMAIL_CONTACT, WHATSAPP_PHONE_DISPLAY } from '../utils/whatsapp';

interface PrivacyPolicyPageProps {
  onNavigate: (path: string) => void;
}

export const PrivacyPolicyPage: React.FC<PrivacyPolicyPageProps> = ({ onNavigate }) => {
  return (
    <div className="bg-[#F9FAFB] py-16 lg:py-24 text-neutral-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs uppercase font-medium text-neutral-500 mb-6">
          <button onClick={() => onNavigate('/')} className="hover:text-[#C5A059] transition-colors">
            Início
          </button>
          <span>/</span>
          <span className="text-[#C5A059] font-semibold">Política de Privacidade</span>
        </div>

        {/* Header */}
        <div className="bg-white p-8 sm:p-10 rounded-2xl border border-neutral-200/90 shadow-sm mb-10">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-wider text-[#C5A059] font-semibold mb-3">
            <ShieldCheck className="w-4 h-4" />
            <span>Conformidade com a LGPD (Lei nº 13.709/2018) & Diretrizes de Publicidade</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl text-[#111827] font-medium tracking-tight">
            Política de Privacidade e Proteção de Dados
          </h1>
          <p className="mt-3 text-sm text-neutral-600 font-light leading-relaxed">
            A <strong>Dra. Letícia Possenti — Advocacia</strong> preza pelo mais elevado padrão de ética, sigilo profissional e transparência no tratamento de dados pessoais de clientes e visitantes em todo o Brasil.
          </p>
          <div className="mt-4 pt-4 border-t border-neutral-100 flex flex-wrap gap-4 text-xs text-neutral-500">
            <span>Última atualização: Outubro de 2026</span>
            <span>·</span>
            <span>Controlador: Dra. Letícia Possenti (OAB/RS)</span>
            <span>·</span>
            <span>Sede: Caxias do Sul - RS</span>
          </div>
        </div>

        {/* Content Body */}
        <div className="bg-white p-8 sm:p-10 rounded-2xl border border-neutral-200/90 shadow-sm space-y-8 text-sm leading-relaxed text-neutral-700">
          
          <section className="space-y-3">
            <h2 className="font-serif text-xl font-semibold text-[#111827] flex items-center gap-2">
              <Lock className="w-5 h-5 text-[#C5A059]" />
              <span>1. Sigilo Profissional da Advocacia & Controlador dos Dados</span>
            </h2>
            <p>
              O escritório <strong>Letícia Possenti Advocacia</strong>, com sede física em {OFFICE_ADDRESS}, atua sob as prerrogativas inegociáveis do <em>Estatuto da Advocacia e da OAB (Lei Federal nº 8.906/1994)</em>. Todas as comunicações, dados e documentos compartilhados por clientes — seja no <strong>atendimento presencial em Caxias do Sul</strong> ou no <strong>atendimento online para todo o Brasil</strong> — são resguardados pelo sigilo profissional inviolável garantido por lei.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-xl font-semibold text-[#111827] flex items-center gap-2">
              <FileText className="w-5 h-5 text-[#C5A059]" />
              <span>2. Dados Coletados e Finalidade</span>
            </h2>
            <p>
              Coletamos apenas as informações estritamente necessárias para a prestação de orientações jurídicas e agendamento de consultas:
            </p>
            <ul className="space-y-2 list-disc list-inside text-neutral-600">
              <li><strong>Dados de identificação e contato:</strong> Nome completo, telefone/WhatsApp, e-mail e cidade de residência (fornecidos voluntariamente no formulário de contato ou via WhatsApp).</li>
              <li><strong>Informações do caso (opcional):</strong> Resumo da demanda jurídica (Direito de Família, Divórcio, Inventário, Guarda ou Direitos TEA) para direcionamento adequado do diagnóstico preliminar.</li>
              <li><strong>Dados de navegação e técnicos:</strong> Endereço IP aproximado, tipo de dispositivo, tempo de permanência e parâmetros de campanha (UTM), utilizados para garantir a estabilidade do site e avaliar a eficácia de nossas comunicações institucionais.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-xl font-semibold text-[#111827] flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-[#C5A059]" />
              <span>3. Tecnologias de Anúncios e Rastreamento (Google Ads & Meta Ads)</span>
            </h2>
            <p>
              Este site pode utilizar ferramentas de mensuração de tráfego e conversão, como o <strong>Google Analytics / Google Ads</strong> e o <strong>Meta Pixel (Facebook/Instagram Ads)</strong>. Essas ferramentas operam de acordo com as seguintes diretrizes:
            </p>
            <ul className="space-y-2 list-disc list-inside text-neutral-600">
              <li>Os identificadores de campanhas (como <em>gclid</em> ou <em>fbclid</em>) servem exclusivamente para mensurar o volume de contatos gerados por anúncios educativos e institucionais.</li>
              <li><strong>Não comercializamos, não alugamos e não compartilhamos</strong> listas de dados com terceiros para fins de marketing ou revenda.</li>
              <li>O visitante pode, a qualquer tempo, desativar cookies através das configurações de seu navegador ou no banner de consentimento inicial.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-xl font-semibold text-[#111827]">
              4. Direitos do Titular de Dados (Art. 18 da LGPD)
            </h2>
            <p>
              Em conformidade com a Lei Geral de Proteção de Dados Pessoais (LGPD - Lei nº 13.709/2018), você possui o direito de:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              <div className="p-3 rounded-lg bg-[#F9FAFB] border border-neutral-200">
                <strong>Confirmação e Acesso:</strong> Confirmar a existência de tratamento e acessar seus dados.
              </div>
              <div className="p-3 rounded-lg bg-[#F9FAFB] border border-neutral-200">
                <strong>Correção:</strong> Solicitar a atualização de dados incompletos ou inexatos.
              </div>
              <div className="p-3 rounded-lg bg-[#F9FAFB] border border-neutral-200">
                <strong>Eliminação:</strong> Exigir a exclusão de dados tratados mediante consentimento (respeitados os prazos legais de guarda documental previstos na legislação brasileira).
              </div>
              <div className="p-3 rounded-lg bg-[#F9FAFB] border border-neutral-200">
                <strong>Revogação:</strong> Revogar o consentimento a qualquer momento de forma simplificada.
              </div>
            </div>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-xl font-semibold text-[#111827]">
              5. Canal do Encarregado de Proteção de Dados (DPO)
            </h2>
            <p>
              Para esclarecer qualquer dúvida sobre o tratamento de seus dados ou exercer seus direitos de titular, entre em contato direto pelo canal oficial:
            </p>
            <div className="p-4 rounded-lg bg-[#F4EDE0]/60 border border-[#C5A059]/30 text-xs sm:text-sm text-neutral-800 space-y-1">
              <p><strong>Encarregado / Responsável:</strong> Dra. Letícia Possenti</p>
              <p><strong>E-mail institucional:</strong> {EMAIL_CONTACT}</p>
              <p><strong>Telefone / WhatsApp:</strong> {WHATSAPP_PHONE_DISPLAY}</p>
              <p><strong>Endereço:</strong> {OFFICE_ADDRESS}</p>
            </div>
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
