import { WhatsAppButton } from "./WhatsApp";

export default function Hero() {
  return (
    <section className="hero" id="top">
      <img className="bg" src="/images/hero.jpg" alt="Rastreamento veicular Fullraster" />
      <div className="hero-content">
        <div className="hero-badge">
          <span className="hero-plus">+ DE</span>
        </div>
        <h1>100.000</h1>
        <p className="hero-sub">RASTREADORES INSTALADOS</p>
        <p className="lede">
          Há 20 anos proporcionando segurança com serviço especializado de rastreamento veicular
          em todo o Rio Grande do Sul.
        </p>
        <div className="hero-ctas">
          <WhatsAppButton label="Falar com um especialista" />
          <a className="btn btn-outline" href="#cotacao">
            Faça uma cotação
          </a>
        </div>
      </div>
    </section>
  );
}
