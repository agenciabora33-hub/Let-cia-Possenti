import React from 'react';
import {
  MessageCircle,
  Calendar,
  FileText,
  Download,
  ExternalLink,
  Globe,
  Sparkles,
  Scale,
  HeartHandshake,
  Coins
} from 'lucide-react';
import {
  getWhatsAppUrl,
  GOOGLE_MAPS_LINK,
  INSTAGRAM_LINK,
  TIKTOK_LINK,
  FACEBOOK_LINK,
  WHATSAPP_PHONE_DISPLAY
} from '../utils/whatsapp';
import { downloadVCard } from '../utils/vcard';
import { InstagramIcon, TikTokIcon, FacebookIcon, GoogleMapsPinIcon } from '../components/SocialIcons';

interface BioLinkPageProps {
  onNavigate: (path: string) => void;
}

export const BioLinkPage: React.FC<BioLinkPageProps> = ({ onNavigate }) => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#111827] via-[#1a2333] to-[#111827] text-white py-12 px-4 flex flex-col justify-between">
      <div className="max-w-md w-full mx-auto space-y-6">
        
        {/* Profile Card */}
        <div className="text-center space-y-3">
          <div className="relative inline-block">
            <div className="w-28 h-28 mx-auto rounded-full p-1 bg-gradient-to-tr from-[#C5A059] via-white/50 to-[#D4AF37] shadow-xl">
              <img
                src="https://i.ibb.co/kVdW3dYG/watermarked-img-15853591358428785044.jpg"
                alt="Dra. Letícia Possenti"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center rounded-full"
                onError={(e) => {
                  const target = e.currentTarget;
                  if (!target.src.includes('dra_leticia_possenti')) {
                    target.src = '/images/dra_leticia_possenti.jpg';
                  }
                }}
              />
            </div>
            <span className="absolute bottom-1 right-2 w-4 h-4 bg-emerald-500 border-2 border-[#111827] rounded-full" />
          </div>

          <div>
            <h1 className="font-serif text-2xl font-bold text-white tracking-tight flex items-center justify-center gap-1.5">
              <span>Dra. Letícia Possenti</span>
              <Sparkles className="w-4 h-4 text-[#C5A059]" />
            </h1>
            <p className="text-xs uppercase tracking-wider text-[#C5A059] font-medium mt-0.5">
              Advogada · OAB/RS
            </p>
            <p className="text-xs text-neutral-300 max-w-xs mx-auto mt-2 font-light leading-relaxed">
              Direito de Família, Sucessões, Inventários e Proteção Jurídica Especializada (TEA / PCD) em Caxias do Sul - RS.
            </p>
          </div>

          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 text-[11px] text-neutral-200 border border-white/10">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Presencial em Caxias do Sul · Online para todo o Brasil</span>
          </div>

          {/* Social Quick-Access Icons Bar */}
          <div className="flex items-center justify-center gap-3 pt-2">
            <a
              href={INSTAGRAM_LINK}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram @letipossenti"
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#C5A059] hover:text-[#111827] flex items-center justify-center transition-all border border-white/10"
              title="Instagram @letipossenti"
            >
              <InstagramIcon className="w-4 h-4" />
            </a>

            <a
              href={TIKTOK_LINK}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok @advogada.letipossenti"
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#C5A059] hover:text-[#111827] flex items-center justify-center transition-all border border-white/10"
              title="TikTok @advogada.letipossenti"
            >
              <TikTokIcon className="w-4 h-4" />
            </a>

            <a
              href={FACEBOOK_LINK}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Página no Facebook"
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#C5A059] hover:text-[#111827] flex items-center justify-center transition-all border border-white/10"
              title="Facebook"
            >
              <FacebookIcon className="w-4 h-4" />
            </a>

            <a
              href={GOOGLE_MAPS_LINK}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Google Maps Caxias do Sul"
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#C5A059] hover:text-[#111827] flex items-center justify-center transition-all border border-white/10"
              title="Google Maps"
            >
              <GoogleMapsPinIcon className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Action Links Stack */}
        <div className="space-y-3 pt-2">
          
          {/* Primary High-Priority CTA: WhatsApp */}
          <a
            href={getWhatsAppUrl('Olá, Dra. Letícia! Vim através das suas redes sociais e gostaria de orientação jurídica.')}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full p-4 rounded-xl bg-gradient-to-r from-[#25D366] to-[#20bd5a] hover:brightness-105 text-white font-semibold text-sm flex items-center justify-between shadow-lg transition-all active:scale-[0.98] group"
          >
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center">
                <MessageCircle className="w-5 h-5 fill-white text-emerald-600" />
              </div>
              <div className="text-left">
                <span className="block leading-tight font-bold">Falar no WhatsApp Agora</span>
                <span className="text-[11px] opacity-90 font-normal">Canal prioritário de agendamento</span>
              </div>
            </div>
            <ExternalLink className="w-4 h-4 opacity-80 group-hover:translate-x-0.5 transition-transform" />
          </a>

          {/* VCard Download: Salvar Contato */}
          <button
            onClick={downloadVCard}
            className="w-full p-3.5 rounded-xl bg-white/10 hover:bg-white/15 border border-[#C5A059]/40 text-neutral-100 text-xs font-semibold uppercase tracking-wider flex items-center justify-between transition-all active:scale-[0.98]"
          >
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-[#C5A059]/20 flex items-center justify-center text-[#C5A059]">
                <Download className="w-4 h-4" />
              </div>
              <span className="text-left">Salvar Contato no Celular (VCard)</span>
            </div>
            <span className="text-[11px] text-[#C5A059] font-normal lowercase">.vcf</span>
          </button>

          {/* Agendar Consulta */}
          <button
            onClick={() => onNavigate('/contato')}
            className="w-full p-3.5 rounded-xl bg-[#1f2937] hover:bg-[#283548] border border-white/10 text-neutral-100 text-xs font-semibold uppercase tracking-wider flex items-center justify-between transition-all active:scale-[0.98]"
          >
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-neutral-800 flex items-center justify-center text-[#C5A059]">
                <Calendar className="w-4 h-4" />
              </div>
              <span className="text-left">Agendar Consulta Presencial ou Online</span>
            </div>
            <ExternalLink className="w-4 h-4 text-neutral-400" />
          </button>

          {/* Redes Sociais Individuais */}
          <a
            href={INSTAGRAM_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full p-3.5 rounded-xl bg-[#1f2937] hover:bg-[#283548] border border-white/10 text-neutral-100 text-xs font-medium flex items-center justify-between transition-all active:scale-[0.98]"
          >
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-neutral-800 flex items-center justify-center text-[#C5A059]">
                <InstagramIcon className="w-4 h-4" />
              </div>
              <div className="text-left">
                <span className="block font-semibold">Instagram Oficial</span>
                <span className="text-[11px] text-neutral-400">@letipossenti</span>
              </div>
            </div>
            <ExternalLink className="w-4 h-4 text-neutral-400" />
          </a>

          <a
            href={TIKTOK_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full p-3.5 rounded-xl bg-[#1f2937] hover:bg-[#283548] border border-white/10 text-neutral-100 text-xs font-medium flex items-center justify-between transition-all active:scale-[0.98]"
          >
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-neutral-800 flex items-center justify-center text-[#C5A059]">
                <TikTokIcon className="w-4 h-4" />
              </div>
              <div className="text-left">
                <span className="block font-semibold">TikTok Oficial</span>
                <span className="text-[11px] text-neutral-400">@advogada.letipossenti</span>
              </div>
            </div>
            <ExternalLink className="w-4 h-4 text-neutral-400" />
          </a>

          <a
            href={FACEBOOK_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full p-3.5 rounded-xl bg-[#1f2937] hover:bg-[#283548] border border-white/10 text-neutral-100 text-xs font-medium flex items-center justify-between transition-all active:scale-[0.98]"
          >
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-neutral-800 flex items-center justify-center text-[#C5A059]">
                <FacebookIcon className="w-4 h-4" />
              </div>
              <div className="text-left">
                <span className="block font-semibold">Página Oficial no Facebook</span>
                <span className="text-[11px] text-neutral-400">Direito de Família e Sucessões</span>
              </div>
            </div>
            <ExternalLink className="w-4 h-4 text-neutral-400" />
          </a>

          {/* Serviços em Destaque */}
          <button
            onClick={() => onNavigate('/servicos/divorcio-e-partilha')}
            className="w-full p-3.5 rounded-xl bg-[#1f2937] hover:bg-[#283548] border border-white/10 text-neutral-100 text-xs font-medium flex items-center justify-between transition-all active:scale-[0.98]"
          >
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-neutral-800 flex items-center justify-center text-[#C5A059]">
                <Scale className="w-4 h-4" />
              </div>
              <div className="text-left">
                <span className="block font-semibold">Divórcio & Partilha de Bens</span>
                <span className="text-[11px] text-neutral-400">Consensual em cartório ou contencioso</span>
              </div>
            </div>
            <span className="text-neutral-400 text-xs">→</span>
          </button>

          <button
            onClick={() => onNavigate('/pensao-alimenticia')}
            className="w-full p-3.5 rounded-xl bg-[#1f2937] hover:bg-[#283548] border border-[#C5A059]/40 text-neutral-100 text-xs font-medium flex items-center justify-between transition-all active:scale-[0.98]"
          >
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-neutral-800 flex items-center justify-center text-[#C5A059]">
                <Coins className="w-4 h-4" />
              </div>
              <div className="text-left">
                <span className="block font-semibold text-[#F4EDE0]">Pensão Alimentícia & Execução</span>
                <span className="text-[11px] text-[#C5A059]">Fixação urgente, cobrança e revisão no Fórum</span>
              </div>
            </div>
            <span className="text-[#C5A059] text-xs">→</span>
          </button>

          <button
            onClick={() => onNavigate('/servicos/inventario-e-sucessoes')}
            className="w-full p-3.5 rounded-xl bg-[#1f2937] hover:bg-[#283548] border border-white/10 text-neutral-100 text-xs font-medium flex items-center justify-between transition-all active:scale-[0.98]"
          >
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-neutral-800 flex items-center justify-center text-[#C5A059]">
                <FileText className="w-4 h-4" />
              </div>
              <div className="text-left">
                <span className="block font-semibold">Inventário & Herança</span>
                <span className="text-[11px] text-neutral-400">Processo rápido em tabelionato em Caxias</span>
              </div>
            </div>
            <span className="text-neutral-400 text-xs">→</span>
          </button>

          <button
            onClick={() => onNavigate('/servicos/direitos-tea-e-apoio-especializado')}
            className="w-full p-3.5 rounded-xl bg-[#1f2937] hover:bg-[#283548] border border-white/10 text-neutral-100 text-xs font-medium flex items-center justify-between transition-all active:scale-[0.98]"
          >
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-neutral-800 flex items-center justify-center text-[#C5A059]">
                <HeartHandshake className="w-4 h-4" />
              </div>
              <div className="text-left">
                <span className="block font-semibold">Direitos TEA (Autismo) & Planos</span>
                <span className="text-[11px] text-neutral-400">Liminares para terapias ABA e BPC/LOAS</span>
              </div>
            </div>
            <span className="text-neutral-400 text-xs">→</span>
          </button>

          {/* Localização no Google Maps */}
          <a
            href={GOOGLE_MAPS_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full p-3.5 rounded-xl bg-[#1f2937] hover:bg-[#283548] border border-white/10 text-neutral-100 text-xs font-medium flex items-center justify-between transition-all active:scale-[0.98]"
          >
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-neutral-800 flex items-center justify-center text-[#C5A059]">
                <GoogleMapsPinIcon className="w-4 h-4" />
              </div>
              <div className="text-left">
                <span className="block font-semibold">Como Chegar pelo Google Maps</span>
                <span className="text-[11px] text-neutral-400">Rua Os Dezoito do Forte · Caxias do Sul</span>
              </div>
            </div>
            <ExternalLink className="w-4 h-4 text-neutral-400" />
          </a>

          {/* Site Completo */}
          <button
            onClick={() => onNavigate('/')}
            className="w-full p-3.5 rounded-xl bg-white text-[#111827] hover:bg-neutral-100 text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-md active:scale-[0.98]"
          >
            <Globe className="w-4 h-4 text-[#C5A059]" />
            <span>Acessar Site Institucional Completo</span>
          </button>

          {/* Google Search Profile Badge */}
          <div className="pt-2 flex justify-center">
            <a
              href="https://profile.google.com/@KZyHAkbAW4vFHDH48"
              aria-label="Find us on Google Search"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block hover:opacity-90 transition-opacity"
            >
              <img src="/google-search-badge.svg" alt="Google Search" className="h-10 w-auto" />
            </a>
          </div>

        </div>

        {/* Contact info info-strip */}
        <div className="text-center text-xs text-neutral-400 pt-2 space-y-1">
          <p>Telefone: {WHATSAPP_PHONE_DISPLAY}</p>
          <p>Atendimento Presencial em Caxias do Sul e Online para todo o Brasil</p>
          <div className="flex items-center justify-center gap-3 pt-2 text-[11px] text-neutral-400">
            <button onClick={() => onNavigate('/privacidade')} className="hover:text-[#C5A059] transition-colors">
              Privacidade (LGPD)
            </button>
            <span>·</span>
            <button onClick={() => onNavigate('/termos')} className="hover:text-[#C5A059] transition-colors">
              Termos de Uso
            </button>
          </div>
        </div>

      </div>

      {/* Mandatory Signature - PRD Section 7 */}
      <div className="text-center text-xs text-neutral-400 pt-8 mt-6 border-t border-white/10 max-w-md mx-auto w-full">
        <p className="text-[11px]">
          Desenvolvido com excelência por{' '}
          <a
            href="https://bora-digital-strategy.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#C5A059] hover:underline font-medium"
          >
            Bora Digital Strategy
          </a>{' '}
          — Posicionamento Local e Estratégias Digitais de Alta Performance.
        </p>
      </div>
    </div>
  );
};
