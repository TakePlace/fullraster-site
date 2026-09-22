import Header from "./components/Header";
import Hero from "./components/Hero";
import Banner24h from "./components/Banner24h";
import QuemSomos from "./components/QuemSomos";
import Monitoramento from "./components/Monitoramento";
import Bloqueio from "./components/Bloqueio";
import AppDownload from "./components/AppDownload";
import ImpactPhotos from "./components/ImpactPhotos";
import Cotacao from "./components/Cotacao";
import Footer from "./components/Footer";
import { WhatsAppFloat } from "./components/WhatsApp";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Banner24h />
      <QuemSomos />
      <Monitoramento />
      <Bloqueio />
      <AppDownload />
      <ImpactPhotos />
      <Cotacao />
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
