import emblemPng from '@assets/emblem.png';

const NAV_LINKS = [
  { href: '#inicio', label: 'Inicio' },
  { href: '#nosotros', label: 'Nosotros' },
  { href: '#servicios', label: 'Servicios' },
  { href: '#testimonios', label: 'Testimonios' },
  { href: '#contacto', label: 'Contacto' },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer style={{ background: '#0F1D4A', color: '#FFFFFF', padding: '64px 0 32px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
        <div
          className="ak-grid-footer-top"
          style={{ display: 'grid', gridTemplateColumns: '1.6fr 1fr 1fr', gap: '40px', paddingBottom: '40px', borderBottom: '1px solid rgba(255,255,255,.12)' }}
        >
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: '#FFFFFF', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <img src={emblemPng} alt="AKADEM" style={{ width: '32px' }} />
              </div>
              <span style={{ fontFamily: 'Inter', fontWeight: 700, fontSize: '24px', letterSpacing: '.18em' }}>
                AKA<span style={{ color: '#C9A84C' }}>·</span>DEM
              </span>
            </div>
            <p style={{ fontFamily: "'Playfair Display', serif", fontSize: '18px', color: '#D8BC6A', margin: '18px 0 0' }}>Decide hoy, construye tu futuro.</p>
            <p style={{ fontSize: '13.5px', lineHeight: 1.6, color: '#98A0BD', margin: '12px 0 0', maxWidth: '38ch' }}>
              Consultoría organizacional especializada en educación. Un proyecto académico de la Licenciatura en Pedagogía del TUP — Playa del Carmen, Q. Roo.
            </p>
          </div>
          <div>
            <span style={{ display: 'block', fontSize: '12px', fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase', color: '#8A93B2', marginBottom: '16px' }}>Navegación</span>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '11px' }}>
              {NAV_LINKS.map(({ href, label }) => (
                <a key={href} href={href} className="ak-footer-link" style={{ fontSize: '14px', color: '#C8CEE0', textDecoration: 'none' }}>{label}</a>
              ))}
            </div>
          </div>
          <div>
            <span style={{ display: 'block', fontSize: '12px', fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase', color: '#8A93B2', marginBottom: '16px' }}>Contacto</span>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '11px' }}>
              <span style={{ fontSize: '14px', color: '#C8CEE0' }}>Playa del Carmen, Q. Roo</span>
              <a href="mailto:akadem@email.com" className="ak-footer-link" style={{ fontSize: '14px', color: '#C8CEE0', textDecoration: 'none' }}>akadem@email.com</a>
              <a href="https://wa.me/" className="ak-footer-link" style={{ fontSize: '14px', color: '#C8CEE0', textDecoration: 'none' }}>WhatsApp</a>
            </div>
          </div>
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', justifyContent: 'space-between', alignItems: 'center', paddingTop: '24px' }}>
          <span style={{ fontSize: '12.5px', color: '#7A84A5' }}>© {year} AKADEM. Todos los derechos reservados.</span>
          <span style={{ fontSize: '12.5px', color: '#7A84A5' }}>Tecnológico Universitario de Playacar (TUP) · Licenciatura en Pedagogía</span>
        </div>
      </div>
    </footer>
  );
}
