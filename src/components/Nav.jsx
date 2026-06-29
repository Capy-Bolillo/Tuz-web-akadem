import { useState } from 'react';
import emblemPng from '@assets/emblem.png';

const NAV_LINKS = [
  { href: '#inicio', label: 'Inicio' },
  { href: '#nosotros', label: 'Nosotros' },
  { href: '#servicios', label: 'Servicios' },
  { href: '#testimonios', label: 'Testimonios' },
];

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  function close() { setIsOpen(false); }

  return (
    <>
      <nav style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100, background: 'rgba(255,255,255,.92)', backdropFilter: 'blur(10px)', borderBottom: '1px solid #ECEEF2', boxShadow: '0 1px 12px rgba(15,29,74,.05)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '14px 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '24px' }}>
          <a href="#inicio" onClick={close} style={{ display: 'flex', alignItems: 'center', gap: '11px', textDecoration: 'none' }}>
            <img src={emblemPng} alt="AKADEM" style={{ height: '38px', width: 'auto', display: 'block' }} />
            <span style={{ fontFamily: 'Inter', fontWeight: 700, fontSize: '22px', letterSpacing: '.18em', color: '#1B2D6B' }}>
              AKA<span style={{ color: '#C9A84C' }}>·</span>DEM
            </span>
          </a>

          {/* Desktop links */}
          <div className="ak-nav-links-desktop">
            {NAV_LINKS.map(({ href, label }) => (
              <a key={href} href={href} className="ak-nav-link" style={{ fontSize: '14.5px', fontWeight: 500, color: '#3A4254', textDecoration: 'none', letterSpacing: '.01em' }}>
                {label}
              </a>
            ))}
            <a href="#contacto" className="ak-nav-cta" style={{ fontSize: '14px', fontWeight: 600, color: '#1B2D6B', textDecoration: 'none', padding: '9px 18px', border: '1.5px solid #1B2D6B', borderRadius: '8px', letterSpacing: '.01em', transition: 'all .2s ease' }}>
              Contacto
            </a>
          </div>

          {/* Hamburger */}
          <button className="ak-hamburger-btn" onClick={() => setIsOpen(!isOpen)} aria-label="Menú">
            {isOpen ? (
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                <line x1="2" y1="2" x2="20" y2="20" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
                <line x1="20" y1="2" x2="2" y2="20" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
              </svg>
            ) : (
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                <rect y="3" width="22" height="2.5" rx="1.25" fill="currentColor"/>
                <rect y="10" width="22" height="2.5" rx="1.25" fill="currentColor"/>
                <rect y="17" width="22" height="2.5" rx="1.25" fill="currentColor"/>
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div className={`ak-mobile-menu${isOpen ? ' open' : ''}`}>
        {NAV_LINKS.map(({ href, label }) => (
          <a key={href} href={href} className="ak-mobile-link" onClick={close}>{label}</a>
        ))}
        <a href="#contacto" className="ak-mobile-cta" onClick={close}>Contacto →</a>
      </div>
    </>
  );
}
