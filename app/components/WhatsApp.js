import { getWhatsAppHref } from "../../lib/contact";
import { WhatsAppIcon } from "./Icons";

export function WhatsAppButton({ label = "WhatsApp", className = "btn btn-wa", message }) {
  return (
    <a className={className} href={getWhatsAppHref(message)} target="_blank" rel="noopener noreferrer">
      <WhatsAppIcon className="wa-icon" />
      {label}
    </a>
  );
}

export function WhatsAppFloat() {
  return (
    <a
      className="wa-float"
      href={getWhatsAppHref()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
    >
      <WhatsAppIcon />
    </a>
  );
}
