import "./globals.css";

export const metadata = {
  title: "Fullraster — Rastreamento de Veículos há 20 anos",
  description:
    "Rastreamento veicular 24 horas por dia para você, sua família, seu negócio e seu agronegócio. Mais de 100.000 rastreadores instalados. Atendimento em todo o Rio Grande do Sul.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;0,500;0,600;0,700;0,800;1,600;1,700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
