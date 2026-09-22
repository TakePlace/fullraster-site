// ======= EDITE APENAS AQUI =======
export const WHATSAPP_NUMBER = "5551981240812"; // 51 98124.0812, formato 55 + DDD + número
export const WHATSAPP_MESSAGE = "Olá! Vim pelo site e gostaria de saber mais sobre o rastreamento.";
export const PHONE_DISPLAY = "51 3015.5253";
export const PHONE_HREF = "tel:+555130155253";
export const EMAIL = "contato@fullraster.com.br";
// ==================================

export function getWhatsAppHref(customMessage) {
  const msg = customMessage || WHATSAPP_MESSAGE;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
}

export function getFormattedWhatsAppNumber() {
  const local = WHATSAPP_NUMBER.replace(/^55/, "");
  const match = local.match(/(\d{2})(\d{4,5})(\d{4})/);
  if (!match) return WHATSAPP_NUMBER;
  return `${match[1]} ${match[2]}.${match[3]}`;
}
