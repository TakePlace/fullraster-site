export default function Bloqueio() {
  return (
    <section className="section" style={{ paddingTop: 0 }}>
      <div className="wrap split">
        <div className="split-photo circle constrain">
          <img src="/images/bloqueio.jpg" alt="Bloqueio de veículo Fullraster" />
        </div>
        <div>
          <h3 style={{ marginBottom: 20 }}>Bloqueio</h3>
          <p style={{ marginBottom: 16 }}>
            Ao bloquear o veículo, ele perde praticamente todas as suas funcionalidades (de modo
            geral, somente a localização ficará ativa). O bloqueador da Fullraster corta ou
            libera o fluxo de energia e dá uma série de comandos. O sistema é ligado na bomba de
            combustível que interrompe a liberação do fluxo de combustível.
          </p>
          <p>
            O bloqueio pode ser realizado por você mesmo ou pela central de segurança da
            Fullraster.
          </p>
        </div>
      </div>
    </section>
  );
}
