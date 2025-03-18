import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import CTA from './components/CTA';
import Footer from './components/Footer';
import ScrollHandler from './components/ScrollHandler';

function App() {
  return (
    <div className="min-h-screen font-['Montserrat']">
      <Header />
      <ScrollHandler />
      <Hero id="accueil" />
      <Features id="fonctionnalites" />
      <CTA id="telechargements" />
      <Footer />
    </div>
  );
}

export default App;