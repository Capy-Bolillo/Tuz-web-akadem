import { TESTIMONIALS } from '../data';

const CASE_COLS = [
  { label: 'Problema', text: 'Comentarios negativos de padres por la atención y la comunicación, afectando la imagen y la captación de alumnos.' },
  { label: 'Intervención', text: 'Diagnóstico integral, encuesta a padres, guía de entrevista al personal y propuesta completa de servicios.' },
  { label: 'Resultado esperado', text: 'Mejor calidad de servicio, comunicación más clara y una experiencia de atención que retiene familias.' },
];

export default function Testimonios() {
  return (
    <section
      id="testimonios"
      className="ak-section-pad"
      style={{ background: '#15234F', color: '#FFFFFF', padding: '100px 0', backgroundImage: 'radial-gradient(rgba(255,255,255,.05) 1px, transparent 1px)', backgroundSize: '28px 28px' }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>

        <div data-reveal="" style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 44px' }}>
          <span style={{ fontSize: '13px', fontWeight: 600, letterSpacing: '.16em', textTransform: 'uppercase', color: '#D8BC6A' }}>Testimonios</span>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 'clamp(28px, 3.4vw, 42px)', lineHeight: 1.16, letterSpacing: '-.02em', margin: '12px 0 0' }}>
            La confianza se construye con resultados.
          </h2>
        </div>

        <div
          data-reveal=""
          className="ak-grid-case"
          style={{ background: 'rgba(255,255,255,.04)', border: '1px solid rgba(255,255,255,.12)', borderRadius: '18px', padding: '40px', display: 'grid', gridTemplateColumns: '.85fr 1.15fr', gap: '40px', alignItems: 'center' }}
        >
          <div>
            <span style={{ display: 'inline-block', fontSize: '11.5px', fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase', color: '#D8BC6A', background: 'rgba(201,168,76,.14)', border: '1px solid rgba(201,168,76,.32)', padding: '6px 13px', borderRadius: '100px' }}>
              Caso de estudio
            </span>
            <h3 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: '30px', margin: '18px 0 6px' }}>Colegio St. Patrick</h3>
            <p style={{ fontSize: '14.5px', color: '#AFB7CE', margin: 0 }}>Institución privada de nivel básico · Playa del Carmen, Q. Roo</p>
          </div>
          <div
            className="ak-grid-case-inner"
            style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 0 }}
          >
            {CASE_COLS.map((col) => (
              <div
                key={col.label}
                className="ak-case-col"
                style={{ padding: '0 22px', borderLeft: '1px solid rgba(255,255,255,.12)' }}
              >
                <span style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase', color: '#D8BC6A' }}>{col.label}</span>
                <p style={{ fontSize: '13.5px', lineHeight: 1.6, color: '#D5DAE9', margin: '10px 0 0' }}>{col.text}</p>
              </div>
            ))}
          </div>
        </div>

        <div
          data-reveal=""
          className="ak-grid-testimonials"
          style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px', marginTop: '24px' }}
        >
          {TESTIMONIALS.map((t, i) => (
            <div key={i} style={{ background: '#FFFFFF', color: '#15234F', borderRadius: '14px', padding: '28px', display: 'flex', flexDirection: 'column' }}>
              <span style={{ fontFamily: "'Playfair Display', serif", fontSize: '44px', lineHeight: .6, color: '#C9A84C' }}>&ldquo;</span>
              <p style={{ fontSize: '14.5px', lineHeight: 1.65, color: '#4B5365', margin: '14px 0 0', fontStyle: 'italic', flex: 1 }}>{t.quote}</p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginTop: '22px', paddingTop: '18px', borderTop: '1px solid #EDEFF3' }}>
                <div style={{ width: '42px', height: '42px', borderRadius: '50%', background: 'repeating-linear-gradient(135deg, #E7EAF1 0 6px, #DDE1EB 6px 12px)', flexShrink: 0 }} />
                <div>
                  <span style={{ display: 'block', fontSize: '14px', fontWeight: 700, color: '#15234F' }}>{t.name}</span>
                  <span style={{ display: 'block', fontSize: '12.5px', color: '#8A91A0' }}>{t.org}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <p data-reveal="" style={{ textAlign: 'center', fontSize: '13px', color: '#8A93B2', margin: '26px 0 0' }}>
          Espacios reservados para los testimonios de nuestras primeras instituciones aliadas.
        </p>

      </div>
    </section>
  );
}
