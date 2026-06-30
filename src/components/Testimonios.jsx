import { TESTIMONIALS } from '../data';

const CASE_COLS = [
  { label: 'Problema', text: 'Comentarios negativos de padres por la atención y la comunicación, afectando la imagen y la captación de alumnos.' },
  { label: 'Intervención', text: 'Diagnóstico integral, encuesta a padres, guía de entrevista al personal y propuesta completa de servicios.' },
  { label: 'Resultado esperado', text: 'Mejor calidad de servicio, comunicación más clara y una experiencia de atención que retiene familias.' },
];

const RULE_GOLD  = { height: '1px', background: '#C9A84C', opacity: .7 };
const RULE_MUTED = { height: '1px', background: 'rgba(255,255,255,.10)' };

export default function Testimonios() {
  return (
    <section
      id="testimonios"
      className="ak-section-pad"
      style={{
        background: '#15234F',
        color: '#FFFFFF',
        padding: '100px 0',
        backgroundImage: 'radial-gradient(rgba(255,255,255,.05) 1px, transparent 1px)',
        backgroundSize: '28px 28px',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>

        {/* Encabezado */}
        <div data-reveal="" style={{ maxWidth: '680px', margin: '0 0 64px' }}>
          <span style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '.18em', textTransform: 'uppercase', color: '#D8BC6A' }}>
            Casos de estudio
          </span>
          <h2 style={{
            fontFamily: "'Playfair Display', serif",
            fontWeight: 700,
            fontSize: 'clamp(30px, 3.6vw, 48px)',
            lineHeight: 1.1,
            letterSpacing: '-.025em',
            margin: '14px 0 0',
          }}>
            El diagnóstico<br />precede al consejo.
          </h2>
        </div>

        {/* Caso activo: St. Patrick */}
        <div data-reveal="">
          <div style={RULE_GOLD} />
          <div className="ak-caso-activo" style={{ padding: '36px 0 32px', display: 'grid', gridTemplateColumns: '1fr auto', alignItems: 'flex-start', gap: '24px' }}>
            <div>
              <span style={{ fontSize: '10.5px', fontWeight: 700, letterSpacing: '.18em', textTransform: 'uppercase', color: '#D8BC6A', display: 'block', marginBottom: '12px' }}>
                Caso activo
              </span>
              <h3 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 'clamp(22px, 2.4vw, 32px)', margin: 0, lineHeight: 1.15 }}>
                Colegio St. Patrick
              </h3>
            </div>
            <p style={{ fontSize: '13px', color: '#6B7490', margin: 0, textAlign: 'right', lineHeight: 1.6 }}>
              Institución privada de nivel básico<br />Playa del Carmen, Q. Roo
            </p>
          </div>

          <div className="ak-grid-case-inner" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 0, paddingBottom: '40px' }}>
            {CASE_COLS.map((col, idx) => (
              <div
                key={col.label}
                className="ak-case-col"
                style={{
                  padding: idx === 0 ? '0 28px 0 0' : '0 28px',
                  borderLeft: idx === 0 ? 'none' : '1px solid rgba(255,255,255,.12)',
                }}
              >
                <span style={{ fontSize: '10px', fontWeight: 700, letterSpacing: '.14em', textTransform: 'uppercase', color: '#D8BC6A', display: 'block', marginBottom: '10px' }}>
                  {col.label}
                </span>
                <p style={{ fontSize: '13.5px', lineHeight: 1.7, color: '#C5CDE2', margin: 0 }}>{col.text}</p>
              </div>
            ))}
          </div>
          <div style={RULE_MUTED} />
        </div>

        {/* Filas editoriales */}
        <div data-stagger="">
          {TESTIMONIALS.map((t, i) => (
            <div key={i} className="ak-stagger-item">
              <div className="ak-case-row-grid" style={{ padding: '40px 0' }}>

                {/* Columna izquierda: índice + categoría + institución */}
                <div>
                  <span style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '.18em', textTransform: 'uppercase', color: '#C9A84C', display: 'block' }}>
                    {'0' + (i + 1)} · {t.tag}
                  </span>
                  <span style={{ fontSize: '12px', color: '#505A75', display: 'block', marginTop: '8px', lineHeight: 1.5 }}>
                    {t.school}
                  </span>
                </div>

                {/* Columna derecha: titular + cuerpo + impacto */}
                <div>
                  <h3 style={{
                    fontFamily: "'Playfair Display', serif",
                    fontWeight: 700,
                    fontSize: 'clamp(17px, 1.6vw, 21px)',
                    color: '#FFFFFF',
                    margin: '0 0 14px',
                    lineHeight: 1.35,
                    letterSpacing: '-.01em',
                    maxWidth: '54ch',
                  }}>
                    {t.headline}
                  </h3>
                  <p style={{ fontSize: '14px', color: '#A8B2CC', lineHeight: 1.75, margin: '0 0 20px', maxWidth: '65ch' }}>
                    {t.body}
                  </p>
                  <p style={{ fontSize: '12px', color: '#5C6680', margin: 0, letterSpacing: '.01em' }}>
                    {t.impact.join(' · ')}
                  </p>
                </div>

              </div>
              <div style={RULE_MUTED} />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
