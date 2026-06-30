import { RESENAS } from '../data';

function Stars({ count }) {
  return (
    <div style={{ display: 'flex', gap: '3px', marginBottom: '16px' }}>
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} width="14" height="14" viewBox="0 0 14 14" fill="#C9A84C" aria-hidden="true">
          <path d="M7 1l1.545 3.13L12 4.635l-2.5 2.436.59 3.44L7 8.885l-3.09 1.626.59-3.44L2 4.635l3.455-.505z" />
        </svg>
      ))}
    </div>
  );
}

export default function Resenas() {
  return (
    <section
      id="resenas"
      style={{
        background: '#FFFFFF',
        padding: '100px 0',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>

        {/* Encabezado */}
        <div data-reveal="" style={{ maxWidth: '600px', margin: '0 auto 64px', textAlign: 'center' }}>
          <span style={{
            fontSize: '11px',
            fontWeight: 700,
            letterSpacing: '.18em',
            textTransform: 'uppercase',
            color: '#C9A84C',
          }}>
            Reseñas
          </span>
          <h2 style={{
            fontFamily: "'Playfair Display', serif",
            fontWeight: 700,
            fontSize: 'clamp(28px, 3.2vw, 44px)',
            lineHeight: 1.1,
            letterSpacing: '-.025em',
            color: '#15234F',
            margin: '14px 0 0',
          }}>
            Lo que dicen quienes<br />ya trabajaron con nosotros.
          </h2>
        </div>

        {/* Grid de reseñas */}
        <div
          className="ak-resenas-grid"
          data-stagger=""
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '24px',
          }}
        >
          {RESENAS.map((r, i) => (
            <div
              key={i}
              className="ak-stagger-item ak-resena-card"
              style={{
                background: '#F7F8FB',
                border: '1px solid #E8EAF0',
                borderRadius: '12px',
                padding: '32px 28px',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <Stars count={r.stars} />

              <p style={{
                fontSize: '14.5px',
                lineHeight: 1.75,
                color: '#3A4460',
                margin: '0 0 24px',
                flexGrow: 1,
              }}>
                "{r.quote}"
              </p>

              <div style={{ borderTop: '1px solid #E0E3EC', paddingTop: '16px' }}>
                <span style={{
                  display: 'block',
                  fontSize: '13px',
                  fontWeight: 600,
                  color: '#15234F',
                }}>
                  {r.author}
                </span>
                <span style={{
                  display: 'block',
                  fontSize: '11.5px',
                  color: '#8B97B8',
                  marginTop: '3px',
                  letterSpacing: '.01em',
                }}>
                  {r.org}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
