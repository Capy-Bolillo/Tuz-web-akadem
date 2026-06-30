import { CASOS } from '../data';

export default function Testimonios() {
  return (
    <section
      id="testimonios"
      style={{
        background: '#0F1C42',
        color: '#FFFFFF',
        padding: '100px 0',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>

        {/* Encabezado */}
        <div
          data-reveal=""
          style={{
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'space-between',
            marginBottom: '72px',
            gap: '24px',
            flexWrap: 'wrap',
          }}
        >
          <div>
            <span style={{
              fontSize: '11px',
              fontWeight: 700,
              letterSpacing: '.18em',
              textTransform: 'uppercase',
              color: '#C9A84C',
            }}>
              Casos de éxito
            </span>
            <h2 style={{
              fontFamily: "'Playfair Display', serif",
              fontWeight: 700,
              fontSize: 'clamp(30px, 3.6vw, 50px)',
              lineHeight: 1.05,
              letterSpacing: '-.03em',
              margin: '12px 0 0',
            }}>
              Resultados que<br />las familias notan.
            </h2>
          </div>
          <p style={{
            fontSize: '14px',
            lineHeight: 1.7,
            color: '#6B7899',
            maxWidth: '30ch',
            margin: 0,
            textAlign: 'right',
          }}>
            Cada intervención parte de un diagnóstico honesto y termina con impacto medible.
          </p>
        </div>

        {/* Filas editoriales */}
        <div data-stagger="">
          {CASOS.map((c, i) => (
            <div key={i} className="ak-stagger-item">
              {/* Línea superior */}
              <div style={{ height: '1px', background: i === 0 ? '#C9A84C' : 'rgba(255,255,255,.10)' }} />

              <div className="ak-caso-row" style={{
                display: 'grid',
                gridTemplateColumns: '140px 1fr 1fr',
                gap: '0 56px',
                padding: '52px 0',
                alignItems: 'start',
              }}>

                {/* Col 1: índice + tag + location */}
                <div>
                  <span style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: '13px',
                    fontWeight: 700,
                    color: 'rgba(201,168,76,.5)',
                    display: 'block',
                    marginBottom: '20px',
                    letterSpacing: '.04em',
                  }}>
                    {c.index}
                  </span>
                  <span style={{
                    fontSize: '10px',
                    fontWeight: 700,
                    letterSpacing: '.14em',
                    textTransform: 'uppercase',
                    color: '#C9A84C',
                    display: 'block',
                    lineHeight: 1.5,
                    marginBottom: '32px',
                  }}>
                    {c.tag}
                  </span>
                  <span style={{
                    fontSize: '11.5px',
                    color: '#3D4D6E',
                    display: 'block',
                    lineHeight: 1.55,
                  }}>
                    {c.location}
                  </span>
                </div>

                {/* Col 2: métrica protagonista */}
                <div style={{ borderLeft: '1px solid rgba(255,255,255,.08)', paddingLeft: '56px' }}>
                  <p style={{
                    fontFamily: "'Playfair Display', serif",
                    fontWeight: 700,
                    fontSize: 'clamp(48px, 5.5vw, 80px)',
                    lineHeight: 1,
                    letterSpacing: '-.04em',
                    color: '#FFFFFF',
                    margin: '0 0 12px',
                  }}>
                    {c.metric}
                  </p>
                  <p style={{
                    fontSize: '12px',
                    fontWeight: 600,
                    letterSpacing: '.06em',
                    textTransform: 'uppercase',
                    color: '#C9A84C',
                    margin: 0,
                  }}>
                    {c.metricLabel}
                  </p>
                </div>

                {/* Col 3: titular + cita */}
                <div style={{ borderLeft: '1px solid rgba(255,255,255,.08)', paddingLeft: '56px' }}>
                  <h3 style={{
                    fontFamily: "'Playfair Display', serif",
                    fontWeight: 700,
                    fontSize: 'clamp(17px, 1.6vw, 22px)',
                    lineHeight: 1.25,
                    letterSpacing: '-.02em',
                    color: '#FFFFFF',
                    margin: '0 0 20px',
                  }}>
                    {c.headline}
                  </h3>
                  <p style={{
                    fontSize: '14px',
                    lineHeight: 1.8,
                    color: '#7B89A8',
                    margin: 0,
                    fontStyle: 'italic',
                  }}>
                    "{c.quote}"
                  </p>
                </div>

              </div>
            </div>
          ))}

          {/* Línea de cierre */}
          <div style={{ height: '1px', background: 'rgba(255,255,255,.10)' }} />
        </div>

      </div>
    </section>
  );
}
