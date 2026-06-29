import { useState } from 'react';
import { SERVICES } from '../data';

export default function Servicios() {
  const [expanded, setExpanded] = useState(-1);

  function toggle(i) {
    setExpanded(expanded === i ? -1 : i);
  }

  return (
    <section id="servicios" className="ak-section-pad" style={{ background: '#F3F4F6', padding: '100px 0' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>

        <div data-reveal="" style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 50px' }}>
          <span style={{ fontSize: '13px', fontWeight: 600, letterSpacing: '.16em', textTransform: 'uppercase', color: '#C9A84C' }}>Servicios</span>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 'clamp(28px, 3.4vw, 42px)', lineHeight: 1.16, letterSpacing: '-.02em', color: '#15234F', margin: '12px 0 0' }}>
            Soluciones concretas, no teoría.
          </h2>
          <p style={{ fontSize: '17px', lineHeight: 1.7, color: '#5A6273', margin: '16px 0 0' }}>
            Seis servicios definidos. Cada uno con un objetivo claro, lo que incluye y lo que no — para que sepas exactamente qué estás contratando.
          </p>
        </div>

        <div
          data-stagger=""
          className="ak-grid-services"
          style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '22px' }}
        >
          {SERVICES.map((s, i) => {
            const open = expanded === i;
            return (
              <div key={i} className="ak-stagger-item ak-card-service" style={{ '--i': i, background: '#FFFFFF', border: '1px solid #E7E9EE', borderRadius: '14px', padding: '30px 28px', display: 'flex', flexDirection: 'column', transition: 'transform .25s ease, box-shadow .25s ease, border-color .25s ease' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <span style={{ width: '46px', height: '46px', borderRadius: '50%', border: '2px solid #C9A84C', color: '#B8923A', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: '18px' }}>
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>
                <h3 style={{ fontFamily: 'Inter', fontWeight: 700, fontSize: '18.5px', lineHeight: 1.3, color: '#15234F', margin: '20px 0 0' }}>{s.title}</h3>
                <p style={{ fontSize: '14px', lineHeight: 1.62, color: '#6B7280', margin: '11px 0 0' }}>{s.ayuda}</p>
                <button
                  onClick={() => toggle(i)}
                  className="ak-link-toggle"
                  style={{ marginTop: '18px', alignSelf: 'flex-start', background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'Inter', fontSize: '13.5px', fontWeight: 600, color: '#1B2D6B', padding: 0, display: 'inline-flex', alignItems: 'center', gap: '6px' }}
                >
                  {open ? 'Ver menos' : 'Ver más'}
                  <span style={{ display: 'inline-block', transition: 'transform .25s ease', transform: open ? 'rotate(180deg)' : 'rotate(0deg)' }}>▾</span>
                </button>
                {open && (
                  <div style={{ marginTop: '16px', borderTop: '1px solid #EDEFF3', paddingTop: '16px' }}>
                    <span style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase', color: '#1B8A5B' }}>Incluye</span>
                    <ul style={{ listStyle: 'none', padding: 0, margin: '8px 0 0' }}>
                      {s.incluye.map((item, j) => (
                        <li key={j} style={{ display: 'flex', gap: '8px', fontSize: '13px', lineHeight: 1.5, color: '#444B59', marginBottom: '6px' }}>
                          <span style={{ color: '#C9A84C', fontWeight: 700 }}>✓</span>{item}
                        </li>
                      ))}
                    </ul>
                    <span style={{ display: 'block', marginTop: '12px', fontSize: '11px', fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase', color: '#B0566B' }}>No incluye</span>
                    <p style={{ fontSize: '13px', lineHeight: 1.55, color: '#8A91A0', margin: '8px 0 0' }}>{s.noIncluye}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div data-reveal="" style={{ textAlign: 'center', marginTop: '46px' }}>
          <a href="#contacto" className="ak-btn-dark" style={{ display: 'inline-flex', alignItems: 'center', gap: '9px', background: '#15234F', color: '#FFFFFF', fontWeight: 600, fontSize: '15.5px', padding: '15px 28px', borderRadius: '8px', textDecoration: 'none', transition: 'transform .2s ease, background .2s ease' }}>
            ¿No sabes por dónde empezar? Hablemos →
          </a>
        </div>

      </div>
    </section>
  );
}
