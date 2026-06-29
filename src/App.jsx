import { useReveal } from './hooks/useReveal';
import Nav from './components/Nav';
import Hero from './components/Hero';
import Nosotros from './components/Nosotros';
import Servicios from './components/Servicios';
import Testimonios from './components/Testimonios';
import Contacto from './components/Contacto';
import Footer from './components/Footer';

export default function App() {
  useReveal();

  return (
    <div style={{ overflowX: 'hidden' }}>
      <Nav />
      <Hero />
      <Nosotros />
      <Servicios />
      <Testimonios />
      <Contacto />
      <Footer />
    </div>
  );
}
