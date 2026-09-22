export default function AppDownload() {
  return (
    <section className="section">
      <div className="wrap split align-top">
        <div>
          <h3>Faça o download do APP</h3>
          <div className="app-badges">
            <a href="#" aria-label="Disponível no Google Play">
              <img src="/images/googleplay-badge.svg" alt="Disponível no Google Play" />
            </a>
            <a href="#" aria-label="Disponível na App Store">
              <img src="/images/appstore-badge.svg" alt="Disponível na App Store" />
            </a>
          </div>
        </div>
        <div className="split-photo constrain">
          <img src="/images/app-hand.jpg" alt="Aplicativo Fullraster no celular" />
        </div>
      </div>
    </section>
  );
}
