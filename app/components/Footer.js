import { PHONE_DISPLAY, PHONE_HREF, EMAIL, getFormattedWhatsAppNumber, getWhatsAppHref } from "../../lib/contact";
import { IconPhone, IconMail, IconFacebook, IconInstagram, WhatsAppIcon } from "./Icons";

export default function Footer() {
  return (
    <footer id="contato">
      <div className="brazil-badge" style={{ background: "var(--navy)" }}>
        <svg width="34" height="34" viewBox="0 0 34 34">
          <circle cx="17" cy="17" r="17" fill="#009c3b" />
          <polygon points="17,5 30,17 17,29 4,17" fill="#ffdf00" />
          <circle cx="17" cy="17" r="6.5" fill="#002776" />
        </svg>
        <span style={{ color: "var(--white)", fontWeight: 700, fontSize: "0.9rem", lineHeight: 1.2 }}>
          TODO O
          <br />
          BRASIL
        </span>
      </div>

      <div className="footer-band">
        <div className="wrap">
          <a href={PHONE_HREF}>
            <IconPhone />
            {PHONE_DISPLAY}
          </a>
          <a href={getWhatsAppHref()} target="_blank" rel="noopener noreferrer">
            <WhatsAppIcon style={{ width: 20, height: 20 }} />
            {getFormattedWhatsAppNumber()}
          </a>
          <a href={`mailto:${EMAIL}`}>
            <IconMail />
            {EMAIL}
          </a>
          <div className="footer-social">
            <a href="#" aria-label="Facebook">
              <IconFacebook />
            </a>
            <a href="#" aria-label="Instagram">
              <IconInstagram />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <img src="/images/logo.png" alt="Fullraster Rastreamento de Veículos" />
        <p>© {new Date().getFullYear()} Fullraster. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}
