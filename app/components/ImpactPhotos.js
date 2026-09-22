import { WhatsAppButton } from "./WhatsApp";

export default function ImpactPhotos() {
  return (
    <section className="section" style={{ paddingTop: 0 }}>
      <div className="wrap">
        <div className="impact-grid">
          <img src="/images/alerta-ladrao.jpg" alt="Eles estão preparados e você? Proteja seu veículo com a Fullraster" />
          <img src="/images/protecao-familia.jpg" alt="Proteja sua família com o rastreamento Fullraster" />
        </div>
        <p className="impact-note">Sem burocracia e com mensalidades que cabem no seu bolso</p>
        <div className="cta-center" id="cotacao">
          <WhatsAppButton label="Faça uma cotação" className="btn btn-orange" />
        </div>
      </div>
    </section>
  );
}
