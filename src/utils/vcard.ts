import { WHATSAPP_PHONE, WHATSAPP_PHONE_DISPLAY, EMAIL_CONTACT, OFFICE_ADDRESS } from './whatsapp';

export function downloadVCard(): void {
  const vcardData = [
    'BEGIN:VCARD',
    'VERSION:3.0',
    'FN:Dra. Letícia Possenti — Advogada',
    'N:Possenti;Letícia;;Dra.;',
    'ORG:Letícia Possenti Advocacia & Consultoria Jurídica',
    'TITLE:Advogada Especialista em Direito de Família e Sucessões',
    `TEL;TYPE=CELL,VOICE,WHATSAPP:+5554996534554`,
    `EMAIL;TYPE=INTERNET:${EMAIL_CONTACT}`,
    `ADR;TYPE=WORK:;;Rua Os Dezoito do Forte;Caxias do Sul;RS;95000-000;Brasil`,
    'URL:https://leticiapossenti.com.br',
    'NOTE:Especialista em Direito de Família, Sucessões, Divórcio, Inventário e Direitos TEA em Caxias do Sul - RS',
    'END:VCARD'
  ].join('\r\n');

  const blob = new Blob([vcardData], { type: 'text/vcard;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.setAttribute('download', 'Dra_Leticia_Possenti_Advogada.vcf');
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}
