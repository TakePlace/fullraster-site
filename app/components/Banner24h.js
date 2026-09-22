import { IconFamily, IconHandshake, IconPlant } from "./Icons";

const COLS = [
  {
    Icon: IconFamily,
    title: "Para você e sua Família",
    desc: "Rastreamento de automóveis, motocicletas, barcos.",
  },
  {
    Icon: IconHandshake,
    title: "Para seu Negócio",
    desc: "Rastreamento de frotas, todos os tipos de veículos.",
  },
  {
    Icon: IconPlant,
    title: "Para o Agronegócio",
    desc: "Rastreamento de máquinas agrícolas, aeronaves...",
  },
];

export default function Banner24h() {
  return (
    <section className="banner24" id="rastreador">
      <div className="wrap">
        <h2 className="outline-title">24 Horas por dia</h2>
        <p className="lede">Há 20 anos proporcionando segurança com serviço especializado de rastreamento</p>

        <div className="cols3">
          {COLS.map((c) => (
            <div key={c.title}>
              <div className="col-icon">
                <c.Icon />
              </div>
              <h3>{c.title}</h3>
              <p>{c.desc}</p>
              <a className="btn btn-outline" href="#cotacao" style={{ fontSize: "0.8rem", padding: "10px 20px" }}>
                Quero mais informações
              </a>
            </div>
          ))}
        </div>

        <div className="photo-grid">
          <div className="pg-vans">
            <img src="/images/grid-01.jpg" alt="Frota de vans rastreadas Fullraster" />
          </div>
          <div className="pg-truckmoto">
            <img src="/images/grid-02.jpg" alt="Caminhão rastreado" />
            <img src="/images/grid-03.jpg" alt="Motocicleta rastreada" />
          </div>
          <div className="pg-car">
            <img src="/images/grid-04.jpg" alt="Automóvel rastreado" />
          </div>
          <div className="pg-boat">
            <img src="/images/grid-05.jpg" alt="Lancha rastreada" />
          </div>
          <div className="pg-tractor">
            <img src="/images/grid-06.jpg" alt="Máquina agrícola rastreada" />
          </div>
          <div className="pg-mappair">
            <img src="/images/grid-07.jpg" alt="Mapa de rastreamento em tempo real" />
            <img src="/images/grid-08.jpg" alt="Aeronave rastreada" />
          </div>
        </div>
      </div>
    </section>
  );
}
