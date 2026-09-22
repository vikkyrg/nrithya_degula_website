import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutGuru from './components/AboutGuru';
import Awards from './components/Awards';
import Journey from './components/Journey';
import Workshop from './components/Workshop';
import NrityaSanje from './components/NrityaSanje';
import Offerings from './components/Offerings';
import Gallery from './components/Gallery';
import Branches from './components/Branches';
import Vision from './components/Vision';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="font-sans text-brand-dark bg-brand-light antialiased selection:bg-brand-gold selection:text-brand-dark overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <AboutGuru />
        <Awards />
        <Journey />
        <Workshop />
        <NrityaSanje />
        <Offerings />
        <Gallery />
        <Branches />
        <Vision />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
