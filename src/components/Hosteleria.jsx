const ventajas = [
  {
    icon: '📦',
    title: 'Entrega semanal garantizada',
    body: 'Coordinamos el reparto con la cosecha. Siempre sabes cuándo llega y qué tanda estás recibiendo. Tu cocina no espera.',
  },
  {
    icon: '♻️',
    title: 'Tuppers reutilizables',
    body: 'Envases de 1L y 2L reutilizables que eliminan residuos de plástico de un solo uso. Sostenibilidad real, no marketing.',
  },
  {
    icon: '🏷️',
    title: 'Trazabilidad completa',
    body: 'Código de lote, fecha de cosecha y consumo preferente en cada envase. Todo lo que necesita tu cocina para cumplir normativa.',
  },
  {
    icon: '💬',
    title: 'Trato directo con el productor',
    body: 'Sin intermediarios. Hablas con quien los cultiva. Ajustamos variedades, cantidades y frecuencia a tu carta.',
  },
]

const pasos = [
  { n: '1', title: 'Cuéntanos tu cocina',       body: 'Escríbenos con tu carta y volumen estimado. Te asesoramos sobre qué variedades encajan mejor.' },
  { n: '2', title: 'Recibes una muestra fría',   body: 'Te mandamos una selección para que la pruebes en tu cocina. Gratis, sin compromiso.' },
  { n: '3', title: 'Entrega semanal acordada',   body: 'Fijamos cantidades y fechas. Cada semana, producto fresco con código de lote.' },
]

export default function Hosteleria() {
  return (
    <section id="hosteleria" className="bg-gradient-to-br from-corteza to-musgo px-6 py-20 md:px-12 lg:px-20">
      <div className="eyebrow !text-brote [&::before]:bg-brote">Suministro profesional</div>
      <h2 className="section-title !text-white">
        Diseñado para{' '}
        <span className="italic text-brote">cocinas exigentes</span>
      </h2>
      <p className="section-sub !text-white/60">
        Entrega semanal en tuppers reutilizables, trazabilidad completa y contacto directo
        con el productor. Sin sorpresas, sin excusas.
      </p>

      {/* Ventajas */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 mb-12">
        {ventajas.map(v => (
          <div key={v.title} className="bg-white/8 border border-white/10 rounded-2xl p-5">
            <div className="text-2xl mb-3">{v.icon}</div>
            <h4 className="text-white font-semibold text-sm mb-2">{v.title}</h4>
            <p className="text-white/55 text-sm leading-relaxed">{v.body}</p>
          </div>
        ))}
      </div>

      {/* Cómo funciona */}
      <div className="bg-white/6 border border-white/10 rounded-2xl p-6 md:p-8 mb-10">
        <h3 className="font-serif text-white text-xl mb-6">Así de sencillo</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pasos.map(p => (
            <div key={p.n} className="flex gap-4 items-start">
              <div className="w-10 h-10 rounded-full bg-brote text-corteza font-bold flex items-center justify-center flex-shrink-0 text-lg">
                {p.n}
              </div>
              <div>
                <h4 className="text-white font-semibold text-sm mb-1">{p.title}</h4>
                <p className="text-white/55 text-sm leading-relaxed">{p.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Banner */}
      <div className="bg-brote rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <h3 className="font-serif text-corteza text-2xl mb-1">
            Solicita tu muestra gratuita
          </h3>
          <p className="text-corteza/70 text-sm">
            Prueba en tu cocina antes de comprometerte. Sin coste, sin compromiso.
          </p>
        </div>
        <a
          href="#contacto"
          className="flex-shrink-0 bg-musgo text-white font-bold px-8 py-4 rounded-xl text-sm hover:bg-corteza transition-colors min-h-[52px] flex items-center gap-2"
        >
          Quiero una muestra →
        </a>
      </div>
    </section>
  )
}
