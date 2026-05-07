import { useState } from 'react'

const info = [
  { icon: '📍', label: 'Dónde estamos',  value: 'Grado, Asturias' },
  { icon: '🗓️', label: 'En mercados',    value: 'Martes, viernes y domingos' },
  { icon: '📸', label: 'Instagram',      value: '@germinadosmuniz' },
  { icon: '💬', label: 'WhatsApp',       value: 'Escríbenos directamente' },
]

export default function Contacto() {
  const [sent, setSent] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    setSent(true)
    e.target.reset()
  }

  return (
    <section id="contacto" className="bg-crema px-6 py-20 md:px-12 lg:px-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-20 items-start">

        {/* Info */}
        <div>
          <div className="eyebrow">Hablemos</div>
          <h2 className="section-title">
            ¿Tienes una cocina que{' '}
            <span className="italic text-musgo">cuida el origen?</span>
          </h2>
          <p className="text-tierra/70 text-base leading-relaxed mb-8">
            Cuéntanos qué necesitas. Te mandamos una muestra sin compromiso para que
            decidas con el plato delante.
          </p>

          <div className="space-y-5 mb-10">
            {info.map(i => (
              <div key={i.label} className="flex gap-3 items-start">
                <div className="w-11 h-11 bg-niebla rounded-xl flex items-center justify-center text-lg flex-shrink-0">
                  {i.icon}
                </div>
                <div>
                  <strong className="block text-sm text-musgo font-semibold">{i.label}</strong>
                  <span className="text-sm text-tierra/70">{i.value}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Instagram CTA */}
          <a
            href="https://instagram.com/germinadosmuniz"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045] text-white font-semibold px-5 py-3 rounded-xl text-sm hover:opacity-90 transition-opacity"
          >
            <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
            Síguenos en Instagram
          </a>
        </div>

        {/* Formulario */}
        <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-6 md:p-8 border border-musgo/10 flex flex-col gap-4">
          <h3 className="font-serif text-corteza text-xl mb-1">Envíanos un mensaje</h3>

          {[
            { label: 'Nombre', type: 'text',  name: 'nombre', placeholder: 'Tu nombre o el del restaurante', required: true,  autoComplete: 'name' },
            { label: 'Email',  type: 'email', name: 'email',  placeholder: 'para responderte',              required: true,  autoComplete: 'email' },
            { label: 'Teléfono (opcional)', type: 'tel', name: 'tel', placeholder: 'si prefieres que te llamemos', required: false, autoComplete: 'tel' },
          ].map(f => (
            <div key={f.name}>
              <label className="block text-xs font-bold tracking-widest uppercase text-musgo mb-1.5">
                {f.label}
              </label>
              <input
                type={f.type}
                name={f.name}
                placeholder={f.placeholder}
                required={f.required}
                autoComplete={f.autoComplete}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl text-base font-sans focus:border-hoja focus:outline-none transition-colors bg-crema"
                style={{ fontSize: '1rem' }}
              />
            </div>
          ))}

          <div>
            <label className="block text-xs font-bold tracking-widest uppercase text-musgo mb-1.5">
              Eres
            </label>
            <select
              name="tipo"
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl text-base font-sans focus:border-hoja focus:outline-none transition-colors bg-crema appearance-none"
              style={{ fontSize: '1rem' }}
            >
              <option value="">Selecciona...</option>
              <option>Restaurante / Hostelería</option>
              <option>Frutería / Tienda local</option>
              <option>Particular</option>
              <option>Otro</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-bold tracking-widest uppercase text-musgo mb-1.5">
              Mensaje
            </label>
            <textarea
              name="mensaje"
              rows={4}
              placeholder="Cuéntanos qué variedades te interesan, qué volumen aproximado y con qué frecuencia..."
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl text-base font-sans focus:border-hoja focus:outline-none transition-colors bg-crema resize-y"
              style={{ fontSize: '1rem' }}
            />
          </div>

          <button
            type="submit"
            className="btn-primary w-full justify-center text-base py-4 mt-1"
          >
            Enviar mensaje
          </button>

          {sent && (
            <div className="bg-niebla text-musgo text-sm font-semibold text-center py-3 rounded-xl">
              ✓ Mensaje enviado. Te contactamos pronto.
            </div>
          )}
        </form>
      </div>
    </section>
  )
}
