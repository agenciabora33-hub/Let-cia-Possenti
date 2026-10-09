import { getTrackingParams, trackAdConversion } from './analytics';

export const WHATSAPP_PHONE = '5554996534554';
export const WHATSAPP_PHONE_DISPLAY = '(54) 99653-4554';
export const EMAIL_CONTACT = 'contato@leticiapossenti.com.br';
export const OFFICE_ADDRESS = 'Rua Os Dezoito do Forte, Caxias do Sul - RS, CEP 95000-000';

// Format of Service Delivery
export const ATENDIMENTO_LABEL = 'Atendimento Presencial em Caxias do Sul e Online para todo o Brasil';

// Social Links & Google Maps / Profile
export const GOOGLE_MAPS_LINK = 'https://maps.app.goo.gl/KZyHAkbAW4vFHDH48';
export const GOOGLE_PROFILE_LINK = 'https://profile.google.com/@KZyHAkbAW4vFHDH48';
export const INSTAGRAM_LINK = 'https://www.instagram.com/letipossenti/';
export const TIKTOK_LINK = 'https://www.tiktok.com/@advogada.letipossenti';
export const FACEBOOK_LINK =
  'https://www.facebook.com/p/Let%C3%ADcia-Possenti-Advogada-de-Fam%C3%ADlia-e-Sucess%C3%B5es-100093875472090/';

export function getWhatsAppUrl(message?: string): string {
  const defaultText =
    'Olá, Dra. Letícia Possenti! Gostaria de agendar uma consulta para orientação jurídica especializada.';
  
  // Track conversion for Meta Ads & Google Ads
  trackAdConversion('Contact', { type: 'whatsapp_click' });

  // Append campaign origin if present to facilitate attribution
  const tracking = getTrackingParams();
  let finalMessage = message || defaultText;

  if (tracking.utm_source || tracking.gclid || tracking.fbclid) {
    const origin = tracking.utm_source
      ? `[Origem: ${tracking.utm_source}]`
      : tracking.gclid
      ? '[Origem: Google Ads]'
      : '[Origem: Meta Ads]';
    finalMessage = `${finalMessage}\n\n${origin}`;
  }

  const encoded = encodeURIComponent(finalMessage);
  return `https://wa.me/${WHATSAPP_PHONE}?text=${encoded}`;
}

export function getServiceWhatsAppUrl(serviceTitle: string): string {
  const text = `Olá, Dra. Letícia Possenti! Acessei seu site e gostaria de orientação jurídica referente a: *${serviceTitle}*. Como podemos agendar?`;
  return getWhatsAppUrl(text);
}
