import { VALORES, TEAM } from '../data';

const director = TEAM[0];
const departments = TEAM.slice(1);

function OrgChart() {
  return (
    <div data-stagger="" className="org-chart">

      {/* ── Director ── */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
        <div
          className="ak-stagger-item"
          style={{ '--i': 0, width: '100%', maxWidth: '520px' }}
        >
          <div className="org-director-card" style={{
            background: 'linear-gradient(135deg, #0F1D4A 0%, #1B2D6B 100%)',
            borderRadius: '16px',
            padding: '24px 32px',
            display: 'flex',
            alignItems: 'center',
            gap: '24px',
            border: '1px solid rgba(201,168,76,.38)',
            boxShadow: '0 24px 56px rgba(15,29,74,.3), 0 0 0 1px rgba(201,168,76,.1) inset',
          }}>
            <div
              className="org-director-avatar org-director-photo"
              style={{ borderRadius: '14px', padding: '3px', background: 'linear-gradient(135deg, #C9A84C, #E0C878)', flexShrink: 0 }}
            >
              <div style={{ width: '100%', height: '100%', borderRadius: '12px', background: '#0F1D4A', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                {director.img
                  ? <img src={director.img} alt={director.name} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 15%' }} />
                  : <span style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: '32px', color: '#C9A84C' }}>{director.initials}</span>
                }
              </div>
            </div>
            <div className="org-director-text" style={{ minWidth: 0 }}>
              <span style={{ fontSize: '10px', fontWeight: 700, letterSpacing: '.14em', textTransform: 'uppercase', color: '#C9A84C' }}>
                {director.tag}
              </span>
              <h4 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: '18px', color: '#FFFFFF', margin: '4px 0 5px', lineHeight: 1.2 }}>
                {director.name}
              </h4>
              <p style={{ fontSize: '12.5px', lineHeight: 1.5, color: '#8A9BC0', margin: 0 }}>{director.role}</p>
            </div>
          </div>
        </div>

        {/* Trunk line from director down to h-bar */}
        <div className="org-trunk-line" />
      </div>

      {/* ── Branch system ── */}
      <div className="org-branch-system">
        {/* Horizontal connector bar */}
        <div className="org-h-bar" />

        {/* Department columns */}
        <div className="org-depts">
          {departments.map((m, i) => {
            const isVacant = m.name === 'Vacante';
            return (
              <div key={i} className="org-dept-col" style={{ '--bi': i }}>
                {/* Vertical drop from h-bar to card */}
                <div className="org-branch-drop" />

                <div
                  className="ak-stagger-item org-dept-card"
                  style={{ '--i': i + 1, opacity: isVacant ? undefined : undefined }}
                >
                  {/* Foto */}
                  <div className="org-member-photo" style={{
                    width: '100%',
                    borderRadius: '10px',
                    padding: '3px',
                    background: m.ring,
                    opacity: isVacant ? 0.5 : 1,
                  }}>
                    <div style={{
                      width: '100%',
                      height: '100%',
                      borderRadius: '8px',
                      background: isVacant ? '#F0F2F5' : '#F6F7FA',
                      overflow: 'hidden',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                      {m.img
                        ? <img src={m.img} alt={m.name} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 15%' }} />
                        : <span style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: '24px', color: m.initColor }}>{m.initials}</span>
                      }
                    </div>
                  </div>

                  {/* Tag */}
                  <span style={{
                    display: 'block',
                    fontSize: '9.5px',
                    fontWeight: 700,
                    letterSpacing: '.1em',
                    textTransform: 'uppercase',
                    color: isVacant ? '#B0B8C4' : '#B8923A',
                    marginTop: '10px',
                  }}>
                    {m.tag}
                  </span>

                  {/* Name */}
                  <h4 style={{
                    fontSize: '13px',
                    fontWeight: 700,
                    color: isVacant ? '#A0A8B4' : '#15234F',
                    margin: '4px 0 0',
                    lineHeight: 1.3,
                  }}>
                    {m.name}
                  </h4>

                  {/* Role / vacant label */}
                  {isVacant ? (
                    <p style={{ fontSize: '11px', color: '#B8C0CC', margin: '5px 0 0', fontStyle: 'italic' }}>
                      Posición abierta
                    </p>
                  ) : (
                    <p style={{ fontSize: '11.5px', lineHeight: 1.5, color: '#6B7280', margin: '6px 0 0' }}>
                      {m.role}
                    </p>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

    </div>
  );
}

export default function Nosotros() {
  return (
    <section id="nosotros" className="ak-section-pad" style={{ background: '#FFFFFF', padding: '100px 0' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>

        <div data-reveal="" style={{ textAlign: 'center', maxWidth: '760px', margin: '0 auto' }}>
          <span style={{ fontSize: '13px', fontWeight: 600, letterSpacing: '.16em', textTransform: 'uppercase', color: '#C9A84C' }}>Nosotros</span>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 'clamp(28px, 3.4vw, 42px)', lineHeight: 1.16, letterSpacing: '-.02em', color: '#15234F', margin: '12px 0 0' }}>
            No solo hablamos de mejora. La vivimos desde adentro.
          </h2>
          <p style={{ fontSize: '17px', lineHeight: 1.75, color: '#5A6273', margin: '18px 0 0' }}>
En <strong style={{ color: '#1B2D6B' }}>AKADEM</strong> somos una consultoría organizacional especializada en fortalecer la estructura, gestión y desarrollo de instituciones educativas y empresas. Nuestro objetivo es impulsar el crecimiento institucional mediante estrategias que optimicen procesos, mejoren la organización interna y potencien su posicionamiento.
          </p>
        </div>

        {/* Misión / Visión */}
        <div
          data-reveal=""
          className="ak-grid-mv"
          style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '22px', marginTop: '54px' }}
        >
          <div style={{ background: '#15234F', color: '#FFFFFF', borderRadius: '16px', padding: '38px', position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', top: '-30px', right: '-30px', width: '130px', height: '130px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(201,168,76,.22), transparent 70%)' }} />
            <span style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '.14em', textTransform: 'uppercase', color: '#D8BC6A' }}>Misión</span>
            <p style={{ fontSize: '16px', lineHeight: 1.72, color: '#D5DAE9', margin: '14px 0 0' }}>
              Brindar servicios especializados de consultoría a escuelas y centros educativos, con estrategias y herramientas que mejoren su organización interna, optimicen sus procesos administrativos y pedagógicos, y fortalezcan su imagen y competitividad en el sector.
            </p>
          </div>
          <div style={{ background: '#F6F7FA', color: '#15234F', borderRadius: '16px', padding: '38px', border: '1px solid #ECEEF2' }}>
            <span style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '.14em', textTransform: 'uppercase', color: '#C9A84C' }}>Visión</span>
            <p style={{ fontSize: '16px', lineHeight: 1.72, color: '#4B5365', margin: '14px 0 0' }}>
              Ser una consultoría reconocida por impulsar la transformación de las escuelas y centros educativos, fortaleciendo su organización, innovación y crecimiento para que ofrezcan servicios de calidad y se mantengan competitivas en el sector educativo.
            </p>
          </div>
        </div>

        {/* Valores */}
        <div data-reveal="" style={{ marginTop: '64px' }}>
          <h3 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 600, fontSize: '26px', color: '#15234F', textAlign: 'center', margin: '0 0 6px' }}>
            Nuestros valores
          </h3>
          <p style={{ textAlign: 'center', color: '#8A91A0', fontSize: '14.5px', margin: '0 0 32px' }}>
            Lo que sostiene cada recomendación que hacemos.
          </p>
          <div
            data-stagger=""
            className="ak-grid-values"
            style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '16px' }}
          >
            {VALORES.map((v, i) => (
              <div key={v.n} className="ak-stagger-item ak-card-value" style={{ '--i': i, background: '#FFFFFF', border: '1px solid #ECEEF2', borderRadius: '12px', padding: '24px 20px', transition: 'transform .25s ease, box-shadow .25s ease, border-color .25s ease' }}>
                <div style={{ width: '38px', height: '38px', borderRadius: '9px', background: 'rgba(201,168,76,.14)', color: '#B8923A', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: '17px' }}>
                  {v.n}
                </div>
                <h4 style={{ fontSize: '16px', fontWeight: 700, color: '#15234F', margin: '16px 0 6px' }}>{v.title}</h4>
                <p style={{ fontSize: '13px', lineHeight: 1.6, color: '#6B7280', margin: 0 }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Organigrama */}
        <div data-reveal="" style={{ marginTop: '72px' }}>
          <div style={{ textAlign: 'center', marginBottom: '8px' }}>
            <h3 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 600, fontSize: '26px', color: '#15234F', margin: '0 0 6px' }}>
              El equipo
            </h3>
            <p style={{ color: '#8A91A0', fontSize: '14.5px', margin: 0 }}>
              Estructura organizacional de AKADEM.
            </p>
          </div>
          <OrgChart />
          <p style={{ textAlign: 'center', fontSize: '13px', color: '#9AA1AE', margin: '36px 0 0' }}>
            Un proyecto académico de la Licenciatura en Pedagogía del Tecnológico Universitario de Playacar (TUP).
          </p>
        </div>

      </div>
    </section>
  );
}
