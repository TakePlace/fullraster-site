const LINKS = [
  { href: "#rastreador", label: "Rastreador" },
  { href: "#monitoramento", label: "Monitoramento" },
  { href: "#quem-somos", label: "Quem Somos" },
  { href: "#contato", label: "Contato" },
];

export default function Header() {
  return (
    <header>
      <div className="nav">
        <a className="nav-logo" href="#top">
          <img src="/images/logo.png" alt="Fullraster Rastreamento de Veículos" />
        </a>
        <ul className="nav-links">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a href={l.href}>{l.label}</a>
            </li>
          ))}
        </ul>
        <div className="nav-cta">
          <a className="btn btn-orange" href="#area-cliente">
            Área do Cliente
          </a>
        </div>
      </div>
    </header>
  );
}
