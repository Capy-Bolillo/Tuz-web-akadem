import { useState } from 'react';
import emblemPng from '@assets/emblem.png';
import { SERVICES } from '../data';

const WA_NUMBER = '529841157487';

const EMPTY = { nombre: '', institucion: '', correo: '', telefono: '', servicio: '', mensaje: '' };

export default function Contacto() {
  const [form, setForm] = useState(EMPTY);
  const [sent, setSent] = useState(false);

  function handleChange(e) {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    const lines = [
      '¡Hola, AKADEM! 👋 Me contacto desde su sitio web.',
      '',
      `*Nombre:* ${form.nombre}`,
      `*Institución:* ${form.institucion}`,
      `*Correo:* ${form.correo}`,
      form.telefono ? `*Teléfono:* ${form.telefono}` : null,
      `*Servicio de interés:* ${form.servicio}`,
      form.mensaje ? `\n*Mensaje:*\n${form.mensaje}` : null,
    ].filter(Boolean).join('\n');

    window.open(`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(lines)}`, '_blank');
    setSent(true);
  }

  return (
    <section id="contacto" className="ak-section-pad" style={{ background: '#FFFFFF', padding: '100px 0' }}>
      <div
        className="ak-grid-contact"
        style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px', display: 'grid', gridTemplateColumns: '1.05fr .95fr', gap: '56px', alignItems: 'start' }}
      >

        <div data-reveal="">
          <span style={{ fontSize: '13px', fontWeight: 600, letterSpacing: '.16em', textTransform: 'uppercase', color: '#C9A84C' }}>Contacto</span>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 'clamp(28px, 3.4vw, 42px)', lineHeight: 1.14, letterSpacing: '-.02em', color: '#15234F', margin: '12px 0 0' }}>
            ¿Tu institución necesita mejorar?
          </h2>
          <p style={{ fontSize: '17px', lineHeight: 1.7, color: '#5A6273', margin: '16px 0 34px' }}>
            Agenda una consulta inicial sin costo y descubre cómo AKADEM puede ayudarte.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
            <div style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
              <div style={{ width: '42px', height: '42px', borderRadius: '10px', background: 'rgba(27,45,107,.07)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <img src={emblemPng} alt="" style={{ width: '24px' }} />
              </div>
              <div>
                <span style={{ display: 'block', fontSize: '12px', fontWeight: 700, letterSpacing: '.08em', textTransform: 'uppercase', color: '#B8923A' }}>Ubicación</span>
                <span style={{ display: 'block', fontSize: '15px', color: '#2A3142', marginTop: '2px' }}>Playa del Carmen, Quintana Roo</span>
              </div>
            </div>
            <div style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
              <div style={{ width: '42px', height: '42px', borderRadius: '10px', background: 'rgba(27,45,107,.07)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, fontSize: '18px' }}>✉</div>
              <div>
                <span style={{ display: 'block', fontSize: '12px', fontWeight: 700, letterSpacing: '.08em', textTransform: 'uppercase', color: '#B8923A' }}>Correo</span>
                <a href="mailto:akadem@email.com" style={{ display: 'block', fontSize: '15px', color: '#2A3142', marginTop: '2px', textDecoration: 'none' }}>akadem@email.com</a>
              </div>
            </div>
            <div style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
              <div style={{ width: '42px', height: '42px', borderRadius: '10px', background: 'rgba(27,45,107,.07)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, fontSize: '18px' }}>✆</div>
              <div>
                <span style={{ display: 'block', fontSize: '12px', fontWeight: 700, letterSpacing: '.08em', textTransform: 'uppercase', color: '#B8923A' }}>WhatsApp</span>
                <a href={`https://wa.me/${WA_NUMBER}`} target="_blank" rel="noreferrer" style={{ display: 'block', fontSize: '15px', color: '#2A3142', marginTop: '2px', textDecoration: 'none' }}>+52 984 115 7487</a>
              </div>
            </div>
          </div>
        </div>

        <div data-reveal="" style={{ background: '#F6F7FA', border: '1px solid #ECEEF2', borderRadius: '18px', padding: '34px', boxShadow: '0 18px 44px rgba(27,45,107,.07)' }}>
          {sent ? (
            <div style={{ textAlign: 'center', padding: '40px 10px' }}>
              <div style={{ width: '64px', height: '64px', margin: '0 auto', borderRadius: '50%', background: 'rgba(201,168,76,.16)', color: '#B8923A', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '30px' }}>✓</div>
              <h3 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: '24px', color: '#15234F', margin: '20px 0 8px' }}>¡Mensaje enviado!</h3>
              <p style={{ fontSize: '15px', lineHeight: 1.6, color: '#5A6273', margin: 0 }}>Gracias por escribirnos. Te contactaremos muy pronto para agendar tu diagnóstico.</p>
              <button
                onClick={() => setSent(false)}
                className="ak-btn-reset"
                style={{ marginTop: '22px', background: 'none', border: '1.5px solid #1B2D6B', color: '#1B2D6B', fontWeight: 600, fontSize: '14px', padding: '11px 22px', borderRadius: '8px', cursor: 'pointer', transition: 'all .2s ease' }}
              >
                Enviar otro mensaje
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="ak-grid-form" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
                <label style={{ display: 'flex', flexDirection: 'column', gap: '6px', fontSize: '12.5px', fontWeight: 600, color: '#3A4254' }}>
                  Nombre completo
                  <input required name="nombre" value={form.nombre} onChange={handleChange} type="text" placeholder="Tu nombre" style={{ fontFamily: 'Inter', fontSize: '14.5px', padding: '11px 13px', border: '1.5px solid #E0E3EA', borderRadius: '8px', background: '#FFFFFF', color: '#1F2433', transition: 'all .15s ease' }} />
                </label>
                <label style={{ display: 'flex', flexDirection: 'column', gap: '6px', fontSize: '12.5px', fontWeight: 600, color: '#3A4254' }}>
                  Institución
                  <input required name="institucion" value={form.institucion} onChange={handleChange} type="text" placeholder="Nombre del colegio" style={{ fontFamily: 'Inter', fontSize: '14.5px', padding: '11px 13px', border: '1.5px solid #E0E3EA', borderRadius: '8px', background: '#FFFFFF', color: '#1F2433', transition: 'all .15s ease' }} />
                </label>
                <label style={{ display: 'flex', flexDirection: 'column', gap: '6px', fontSize: '12.5px', fontWeight: 600, color: '#3A4254' }}>
                  Correo electrónico
                  <input required name="correo" value={form.correo} onChange={handleChange} type="email" placeholder="correo@institucion.com" style={{ fontFamily: 'Inter', fontSize: '14.5px', padding: '11px 13px', border: '1.5px solid #E0E3EA', borderRadius: '8px', background: '#FFFFFF', color: '#1F2433', transition: 'all .15s ease' }} />
                </label>
                <label style={{ display: 'flex', flexDirection: 'column', gap: '6px', fontSize: '12.5px', fontWeight: 600, color: '#3A4254' }}>
                  Teléfono
                  <input name="telefono" value={form.telefono} onChange={handleChange} type="tel" placeholder="Opcional" style={{ fontFamily: 'Inter', fontSize: '14.5px', padding: '11px 13px', border: '1.5px solid #E0E3EA', borderRadius: '8px', background: '#FFFFFF', color: '#1F2433', transition: 'all .15s ease' }} />
                </label>
              </div>
              <label style={{ display: 'flex', flexDirection: 'column', gap: '6px', fontSize: '12.5px', fontWeight: 600, color: '#3A4254', marginTop: '14px' }}>
                ¿En qué área necesitas apoyo?
                <select required name="servicio" value={form.servicio} onChange={handleChange} style={{ fontFamily: 'Inter', fontSize: '14.5px', padding: '11px 13px', border: '1.5px solid #E0E3EA', borderRadius: '8px', background: '#FFFFFF', color: '#1F2433', transition: 'all .15s ease' }}>
                  <option value="">Selecciona un servicio…</option>
                  {SERVICES.map((s) => (
                    <option key={s.title} value={s.title}>{s.title}</option>
                  ))}
                  <option value="No estoy seguro">No estoy seguro / quiero orientación</option>
                </select>
              </label>
              <label style={{ display: 'flex', flexDirection: 'column', gap: '6px', fontSize: '12.5px', fontWeight: 600, color: '#3A4254', marginTop: '14px' }}>
                Mensaje
                <textarea rows={4} name="mensaje" value={form.mensaje} onChange={handleChange} placeholder="Cuéntanos brevemente qué está pasando en tu institución…" style={{ fontFamily: 'Inter', fontSize: '14.5px', padding: '11px 13px', border: '1.5px solid #E0E3EA', borderRadius: '8px', background: '#FFFFFF', color: '#1F2433', resize: 'vertical', transition: 'all .15s ease' }} />
              </label>
              <button
                type="submit"
                className="ak-btn-submit"
                style={{ width: '100%', marginTop: '20px', background: '#25D366', color: '#FFFFFF', fontFamily: 'Inter', fontWeight: 700, fontSize: '15.5px', padding: '15px', border: 'none', borderRadius: '8px', cursor: 'pointer', boxShadow: '0 10px 24px rgba(37,211,102,.28)', transition: 'transform .2s ease, background .2s ease', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                Enviar por WhatsApp
              </button>
            </form>
          )}
        </div>

      </div>
    </section>
  );
}
