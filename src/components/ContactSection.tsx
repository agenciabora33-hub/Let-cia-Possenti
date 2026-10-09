import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, ShieldCheck, Navigation } from 'lucide-react';
import {
  WHATSAPP_PHONE_DISPLAY,
  EMAIL_CONTACT,
  OFFICE_ADDRESS,
  GOOGLE_MAPS_LINK,
  INSTAGRAM_LINK,
  TIKTOK_LINK,
  FACEBOOK_LINK,
  getWhatsAppUrl
} from '../utils/whatsapp';
import { InstagramIcon, TikTokIcon, FacebookIcon, GoogleMapsPinIcon } from './SocialIcons';
import { LeadSubmission } from '../types';
import { trackAdConversion } from '../utils/analytics';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<LeadSubmission>({
    nome: '',
    telefone: '',
    email: '',
    assunto: 'Divórcio & Partilha',
    urgencia: 'proximos_dias',
    mensagem: '',
    cidade: 'Caxias do Sul'
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Prepare contextual WhatsApp message for immediate client routing
    const text = `*Novo Contato via Site Institucional:*
👤 *Nome:* ${formData.nome}
📱 *Telefone:* ${formData.telefone}
✉️ *E-mail:* ${formData.email}
📍 *Cidade:* ${formData.cidade}
⚖️ *Assunto:* ${formData.assunto}
⏱️ *Urgência:* ${
      formData.urgencia === 'imediata'
        ? 'Urgência Imediata'
        : formData.urgencia === 'proximos_dias'
        ? 'Próximos Dias'
        : 'Orientação Preventiva'
    }
📝 *Mensagem:* ${formData.mensagem || 'Gostaria de agendar uma consulta.'}`;

    // Fire Meta Ads and Google Ads conversion
    trackAdConversion('Lead', {
      subject: formData.assunto,
      urgency: formData.urgencia,
      city: formData.cidade
    });

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      window.open(getWhatsAppUrl(text), '_blank');
    }, 600);
  };

  return (
    <section id="contato" className="py-20 lg:py-28 bg-white border-b border-neutral-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs uppercase tracking-wider text-[#C5A059] font-semibold mb-2">
            Agendamento & Triagem Confidencial
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#111827] font-medium tracking-tight text-balance">
            Atendimento Presencial em Caxias do Sul e Online para todo o Brasil.
          </h2>
          <p className="mt-3 text-base sm:text-lg text-neutral-600 font-light leading-relaxed">
            Preencha os dados abaixo para uma triagem preliminar com a Dra. Letícia Possenti. Atendemos com agendamento presencial em nosso escritório na Serra Gaúcha e com reuniões por videoconferência segura em qualquer estado do Brasil.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Form */}
          <div className="lg:col-span-7 bg-[#F9FAFB] p-8 sm:p-10 rounded-2xl border border-neutral-200 shadow-sm">
            {submitted ? (
              <div className="text-center py-12 space-y-4 animate-in fade-in">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-[#111827]">
                  Solicitação Enviada com Sucesso!
                </h3>
                <p className="text-sm text-neutral-600 max-w-md mx-auto leading-relaxed">
                  Os dados foram preparados para envio direto à Dra. Letícia Possenti no WhatsApp. Nossa equipe retornará com máxima discrição.
                </p>
                <div className="pt-4 flex justify-center gap-3">
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        nome: '',
                        telefone: '',
                        email: '',
                        assunto: 'Divórcio & Partilha',
                        urgencia: 'proximos_dias',
                        mensagem: '',
                        cidade: 'Caxias do Sul'
                      });
                    }}
                    className="px-5 py-2.5 text-xs font-semibold text-neutral-700 bg-white border border-neutral-300 rounded hover:bg-neutral-50 transition-colors"
                  >
                    Enviar Outra Mensagem
                  </button>
                  <a
                    href={getWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2.5 text-xs font-semibold text-white bg-[#111827] rounded hover:bg-[#1f2937] transition-colors"
                  >
                    Abrir WhatsApp Novamente
                  </a>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs uppercase font-semibold text-neutral-700 tracking-wider mb-1.5">
                      Nome Completo *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Seu nome completo"
                      value={formData.nome}
                      onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                      className="w-full px-4 py-2.5 bg-white border border-neutral-300 rounded text-sm text-neutral-800 placeholder-neutral-400 focus:outline-none focus:border-[#C5A059] focus:ring-1 focus:ring-[#C5A059]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase font-semibold text-neutral-700 tracking-wider mb-1.5">
                      Telefone / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="(54) 99999-9999"
                      value={formData.telefone}
                      onChange={(e) => setFormData({ ...formData, telefone: e.target.value })}
                      className="w-full px-4 py-2.5 bg-white border border-neutral-300 rounded text-sm text-neutral-800 placeholder-neutral-400 focus:outline-none focus:border-[#C5A059] focus:ring-1 focus:ring-[#C5A059]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs uppercase font-semibold text-neutral-700 tracking-wider mb-1.5">
                      E-mail para Contato
                    </label>
                    <input
                      type="email"
                      placeholder="seu.email@exemplo.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-2.5 bg-white border border-neutral-300 rounded text-sm text-neutral-800 placeholder-neutral-400 focus:outline-none focus:border-[#C5A059] focus:ring-1 focus:ring-[#C5A059]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase font-semibold text-neutral-700 tracking-wider mb-1.5">
                      Cidade de Residência
                    </label>
                    <input
                      type="text"
                      placeholder="Caxias do Sul - RS"
                      value={formData.cidade}
                      onChange={(e) => setFormData({ ...formData, cidade: e.target.value })}
                      className="w-full px-4 py-2.5 bg-white border border-neutral-300 rounded text-sm text-neutral-800 placeholder-neutral-400 focus:outline-none focus:border-[#C5A059] focus:ring-1 focus:ring-[#C5A059]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs uppercase font-semibold text-neutral-700 tracking-wider mb-1.5">
                      Área de Interesse *
                    </label>
                    <select
                      value={formData.assunto}
                      onChange={(e) => setFormData({ ...formData, assunto: e.target.value })}
                      className="w-full px-4 py-2.5 bg-white border border-neutral-300 rounded text-sm text-neutral-800 focus:outline-none focus:border-[#C5A059] focus:ring-1 focus:ring-[#C5A059]"
                    >
                      <option value="Divórcio & Partilha">Divórcio & Partilha de Bens</option>
                      <option value="Inventário em Cartório / Judicial">Inventário em Cartório / Judicial</option>
                      <option value="Planejamento Sucessório">Planejamento Sucessório & Doações</option>
                      <option value="Guarda e Regime de Convivência">Guarda & Regime de Convivência</option>
                      <option value="Direitos TEA & Liminar de Saúde">Direitos TEA (Autismo) & Cobertura de Saúde</option>
                      <option value="Pensão Alimentícia">Fixação ou Revisão de Pensão</option>
                      <option value="Outro Assunto">Outro Assunto</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs uppercase font-semibold text-neutral-700 tracking-wider mb-1.5">
                      Nível de Urgência
                    </label>
                    <select
                      value={formData.urgencia}
                      onChange={(e) => setFormData({ ...formData, urgencia: e.target.value as any })}
                      className="w-full px-4 py-2.5 bg-white border border-neutral-300 rounded text-sm text-neutral-800 focus:outline-none focus:border-[#C5A059] focus:ring-1 focus:ring-[#C5A059]"
                    >
                      <option value="imediata">Urgência Imediata (Liminar / Prazo Judicial)</option>
                      <option value="proximos_dias">Atendimento nos Próximos Dias</option>
                      <option value="orientacao_preventiva">Orientação Preventiva / Planejamento</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase font-semibold text-neutral-700 tracking-wider mb-1.5">
                    Resumo do Caso (Opcional & Confidencial)
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Conte brevemente o que aconteceu ou qual é o seu objetivo..."
                    value={formData.mensagem}
                    onChange={(e) => setFormData({ ...formData, mensagem: e.target.value })}
                    className="w-full px-4 py-2.5 bg-white border border-neutral-300 rounded text-sm text-neutral-800 placeholder-neutral-400 focus:outline-none focus:border-[#C5A059] focus:ring-1 focus:ring-[#C5A059]"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 bg-[#111827] hover:bg-[#1f2937] text-white font-semibold text-xs uppercase tracking-wider rounded border border-[#C5A059] shadow transition-all flex items-center justify-center gap-2 active:scale-[0.99]"
                  >
                    {isSubmitting ? (
                      <span>Processando envio seguro...</span>
                    ) : (
                      <>
                        <Send className="w-3.5 h-3.5 text-[#C5A059]" />
                        <span>Solicitar Triagem Confidencial via WhatsApp</span>
                      </>
                    )}
                  </button>
                </div>

                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-[11px] text-neutral-500 pt-1">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#C5A059] shrink-0" />
                    <span>Seus dados são protegidos por sigilo profissional da OAB e LGPD.</span>
                  </div>
                  <a href="/privacidade" className="text-[#C5A059] hover:underline font-medium">
                    Política de Privacidade
                  </a>
                </div>
              </form>
            )}
          </div>

          {/* Right Column: NAP & Local Location */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <h3 className="font-serif text-2xl font-semibold text-[#111827]">
                Sede em Caxias do Sul & Atendimento em Todo o Brasil
              </h3>
              <p className="text-sm text-neutral-600 leading-relaxed font-light">
                Atendimento presencial com agendamento prévio em Caxias do Sul e atendimento online seguro para clientes em qualquer região do Brasil.
              </p>
            </div>

            <div className="space-y-4 bg-[#F9FAFB] p-6 rounded-xl border border-neutral-200">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#C5A059] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs uppercase font-semibold text-neutral-900 tracking-wider">
                    Endereço Oficial:
                  </h4>
                  <p className="text-sm text-neutral-700 mt-0.5">
                    {OFFICE_ADDRESS}
                  </p>
                  <p className="text-xs text-neutral-500 mt-0.5">
                    Caxias do Sul - RS · Bairro Centro / Exposição
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#C5A059] shrink-0" />
                <div>
                  <h4 className="text-xs uppercase font-semibold text-neutral-900 tracking-wider">
                    Telefone & WhatsApp:
                  </h4>
                  <a
                    href={`tel:+5554996534554`}
                    className="text-sm font-mono font-medium text-neutral-900 hover:text-[#C5A059] transition-colors"
                  >
                    {WHATSAPP_PHONE_DISPLAY}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#C5A059] shrink-0" />
                <div>
                  <h4 className="text-xs uppercase font-semibold text-neutral-900 tracking-wider">
                    E-mail Institucional:
                  </h4>
                  <a
                    href={`mailto:${EMAIL_CONTACT}`}
                    className="text-sm text-neutral-700 hover:text-[#C5A059] transition-colors"
                  >
                    {EMAIL_CONTACT}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-[#C5A059] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs uppercase font-semibold text-neutral-900 tracking-wider">
                    Horário de Atendimento:
                  </h4>
                  <p className="text-sm text-neutral-700 mt-0.5">
                    Segunda a Sexta-feira: 08:30 às 18:30
                  </p>
                  <p className="text-xs text-neutral-500">
                    Reuniões presenciais e por videoconferência com horário reservado
                  </p>
                </div>
              </div>
            </div>

            {/* Google Maps Route Card */}
            <div className="bg-[#111827] text-white p-6 rounded-xl border border-[#C5A059]/30 space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-serif text-lg font-medium text-white">
                    Abrir no Google Maps
                  </h4>
                  <p className="text-xs text-neutral-400">
                    Navegue com GPS direto até o escritório em Caxias do Sul
                  </p>
                </div>
                <div className="w-9 h-9 rounded bg-[#1f2937] border border-[#C5A059]/40 flex items-center justify-center text-[#C5A059]">
                  <Navigation className="w-4 h-4" />
                </div>
              </div>

              <a
                href={GOOGLE_MAPS_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3 bg-[#C5A059] hover:bg-[#d4af37] text-[#111827] text-xs font-semibold uppercase tracking-wider rounded transition-colors"
              >
                <span>Traçar Rota no Google Maps</span>
              </a>
            </div>

            {/* Google Search Profile Verification */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 p-4 bg-[#F9FAFB] rounded-xl border border-neutral-200">
              <span className="text-xs text-neutral-600 font-medium text-center sm:text-left">
                Encontre o escritório e avaliações:
              </span>
              <a
                href="https://profile.google.com/@KZyHAkbAW4vFHDH48"
                aria-label="Find us on Google Search"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block hover:opacity-90 transition-opacity"
              >
                <img src="/path/to/google-search-badge.svg" alt="Google Search" className="h-9 w-auto" />
              </a>
            </div>

            {/* Redes Sociais Oficiais */}
            <div className="p-5 bg-white rounded-xl border border-neutral-200 space-y-3">
              <h4 className="text-xs uppercase font-semibold text-neutral-800 tracking-wider">
                Acompanhe nas Redes Sociais:
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs">
                <a
                  href={INSTAGRAM_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 p-2.5 rounded-lg border border-neutral-200 hover:border-[#C5A059] hover:bg-[#F9FAFB] text-neutral-800 font-medium transition-colors"
                >
                  <InstagramIcon className="w-4 h-4 text-[#C5A059]" />
                  <span>@letipossenti</span>
                </a>

                <a
                  href={TIKTOK_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 p-2.5 rounded-lg border border-neutral-200 hover:border-[#C5A059] hover:bg-[#F9FAFB] text-neutral-800 font-medium transition-colors"
                >
                  <TikTokIcon className="w-4 h-4 text-[#C5A059]" />
                  <span>@advogada.letipossenti</span>
                </a>

                <a
                  href={FACEBOOK_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 p-2.5 rounded-lg border border-neutral-200 hover:border-[#C5A059] hover:bg-[#F9FAFB] text-neutral-800 font-medium transition-colors"
                >
                  <FacebookIcon className="w-4 h-4 text-[#C5A059]" />
                  <span>Facebook</span>
                </a>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
