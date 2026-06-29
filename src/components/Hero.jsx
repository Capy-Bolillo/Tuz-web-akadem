import akademPng from '@assets/akadem.png';

export default function Hero() {
  return (
    <section
      id="inicio"
      className="ak-hero-section"
      style={{
        position: 'relative',
        background: '#15234F',
        color: '#FFFFFF',
        padding: '152px 0 96px',
        backgroundImage: 'radial-gradient(rgba(255,255,255,.06) 1.1px, transparent 1.1px)',
        backgroundSize: '26px 26px',
      }}
    >
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(110deg, #15234F 0%, #15234F 52%, #1B2D6B 100%)' }} />
      <div
        className="ak-grid-hero"
        style={{ position: 'relative', maxWidth: '1200px', margin: '0 auto', padding: '0 24px', display: 'grid', gridTemplateColumns: '1.18fr .82fr', gap: '56px', alignItems: 'center' }}
      >
        <div>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', fontSize: '12.5px', fontWeight: 600, letterSpacing: '.14em', textTransform: 'uppercase', color: '#D8BC6A', background: 'rgba(201,168,76,.12)', border: '1px solid rgba(201,168,76,.34)', padding: '7px 14px', borderRadius: '100px' }}>
            Consultoría educativa · Quintana Roo
          </span>
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 'clamp(36px, 4.6vw, 60px)', lineHeight: 1.08, letterSpacing: '-.02em', margin: '22px 0 0', maxWidth: '16ch' }}>
            Consultoría organizacional especializada en educación
          </h1>
          <span style={{ display: 'block', width: '168px', height: '4px', background: '#C9A84C', borderRadius: '2px', marginTop: '24px', transformOrigin: 'left', animation: 'ak-draw .9s .35s cubic-bezier(.16,1,.3,1) both' }} />
          <p style={{ fontSize: 'clamp(16px, 1.5vw, 19px)', lineHeight: 1.72, color: '#C8CEE0', margin: '28px 0 0', maxWidth: '52ch' }}>
            Transformamos la experiencia de tu institución educativa: mejoramos la comunicación, la atención y la imagen para que tu colegio crezca.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '14px', marginTop: '36px' }}>
            <a href="#contacto" className="ak-btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '9px', background: '#C9A84C', color: '#15234F', fontWeight: 700, fontSize: '15.5px', padding: '15px 26px', borderRadius: '8px', textDecoration: 'none', boxShadow: '0 10px 26px rgba(201,168,76,.28)', transition: 'transform .2s ease, box-shadow .2s ease, background .2s ease' }}>
              Solicita tu diagnóstico gratuito →
            </a>
            <a href="#servicios" className="ak-btn-secondary" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: '#FFFFFF', fontWeight: 600, fontSize: '15.5px', padding: '15px 24px', borderRadius: '8px', textDecoration: 'none', border: '1.5px solid rgba(255,255,255,.28)', transition: 'all .2s ease' }}>
              Conoce nuestros servicios
            </a>
          </div>
          <div style={{ display: 'flex', gap: '30px', marginTop: '44px', flexWrap: 'wrap' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '3px' }}>
              <span style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: '26px', color: '#D8BC6A' }}>6</span>
              <span style={{ fontSize: '13px', color: '#AFB7CE' }}>servicios especializados</span>
            </div>
            <div className="ak-stats-divider" style={{ width: '1px', background: 'rgba(255,255,255,.16)' }} />
            <div style={{ display: 'flex', flexDirection: 'column', gap: '3px' }}>
              <span style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: '26px', color: '#D8BC6A' }}>100%</span>
              <span style={{ fontSize: '13px', color: '#AFB7CE' }}>enfocados en educación</span>
            </div>
            <div className="ak-stats-divider" style={{ width: '1px', background: 'rgba(255,255,255,.16)' }} />
            <div style={{ display: 'flex', flexDirection: 'column', gap: '3px' }}>
              <span style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: '26px', color: '#D8BC6A' }}>St.P</span>
              <span style={{ fontSize: '13px', color: '#AFB7CE' }}>primer caso activo</span>
            </div>
          </div>
        </div>

        <div className="ak-hero-image-col" style={{ position: 'relative' }}>
          <div style={{ position: 'relative', borderRadius: '16px', overflow: 'hidden', aspectRatio: '4/5', boxShadow: '0 30px 60px rgba(0,0,0,.38)', border: '1.5px solid rgba(255,255,255,.12)' }}>
            <img
              src={akademPng}
              alt="Campus AKADEM"
              style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top', display: 'block' }}
            />
            {/* Gradient overlay — bottom fade to blend with dark section */}
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(15,29,74,.55) 0%, transparent 55%)' }} />
          </div>

          {/* Floating card */}
          <div style={{ position: 'absolute', bottom: '-22px', left: '-26px', background: '#FFFFFF', color: '#15234F', borderRadius: '12px', padding: '16px 18px', boxShadow: '0 18px 40px rgba(0,0,0,.22)', maxWidth: '240px', animation: 'ak-float 6s ease-in-out infinite' }}>
            <span style={{ display: 'block', fontSize: '10.5px', fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase', color: '#C9A84C' }}>Primer caso</span>
            <span style={{ display: 'block', fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: '17px', marginTop: '3px' }}>Colegio St. Patrick</span>
            <span style={{ display: 'block', fontSize: '12.5px', color: '#6B7280', marginTop: '2px' }}>Playa del Carmen, Q. Roo</span>
          </div>
        </div>
      </div>
    </section>
  );
}
