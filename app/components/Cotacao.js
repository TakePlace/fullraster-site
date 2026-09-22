import CotacaoForm from "./CotacaoForm";
import { IconHeadset, IconClipboard, IconCalendar, IconShieldCheck } from "./Icons";

const STEPS = [
  { Icon: IconHeadset, title: "Identificação", desc: "Receba a ligação do nosso especialista" },
  { Icon: IconClipboard, title: "Dados", desc: "Confirme os dados do veículo" },
  { Icon: IconCalendar, title: "Agendamento", desc: "Escolha local e data" },
  { Icon: IconShieldCheck, title: "Seu veículo rastreado", desc: "Acompanhe em tempo real" },
];

export default function Cotacao() {
  return (
    <section className="cotacao">
      <div className="wrap">
        <h2>É fácil e rápido:</h2>
        <CotacaoForm />
        <div className="steps4">
          {STEPS.map((s) => (
            <div key={s.title}>
              <div className="step-icon">
                <s.Icon />
              </div>
              <h3 style={{ color: "#010066" }}>{s.title}</h3>
              <p style={{ color: "#6a6d8a" }}>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
