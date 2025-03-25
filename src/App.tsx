import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import CTA from './components/CTA';
import Footer from './components/Footer';
import ScrollHandler from './components/ScrollHandler';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Support from './pages/Support';

function App() {
  return (
    <Router>
      <div className="min-h-screen font-['Montserrat'] flex flex-col">
        <Header />
        <ScrollHandler />
        <main>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Hero id="accueil" />
                  <Features id="fonctionnalites" />
                  <CTA id="telechargements" />
                </>
              }
            />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/support" element={<Support />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;