import { IconPin } from "./Icons";

export default function QuemSomos() {
  return (
    <section className="section" style={{ paddingTop: 0 }} id="quem-somos">
      <div className="wrap">
        <h2 className="outline-title" style={{ marginBottom: 40 }}>
          Quem Somos
        </h2>
        <div className="quemsomos-box">
          <div className="quemsomos-icon">
            <IconPin />
          </div>
          <p>
            A Fullraster Rastreamento nasceu no início de 2003 na Grande Porto Alegre e atende
            mais de trezentos clientes em todo o Estado do Rio Grande do Sul. Nosso objetivo é
            garantir mais segurança para você, sua família ou empresa através do nosso
            especializado serviço de rastreamento.
          </p>
          <p>
            Com a crescente violência urbana, fica impossível ter apenas um seguro para o
            veículo, pois com ele podemos recuperar o valor do bem, mas infelizmente em casos de
            assaltos ou sequestros a maior vítima pode ser qualquer um de nós.
          </p>
        </div>
      </div>
    </section>
  );
}
