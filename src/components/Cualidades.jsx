const stats = [
  { num: '40×',  label: 'más vitaminas que la planta adulta' },
  { num: '<24h', label: 'del cultivo a tu plato' },
  { num: 'Km 0', label: 'producción en Grado, Asturias' },
  { num: '100%', label: 'artesanal, sin pesticidas' },
]

const cards = [
  {
    icon: '⚡',
    title: 'Alta densidad nutricional',
    body: 'Los microgreens concentran entre 4 y 40 veces más vitaminas, minerales y antioxidantes que la planta adulta. Son el superalimento más accesible que existe, y caben en un tenedor.',
  },
  {
    icon: '📍',
    title: 'Frescura Km 0 garantizada',
    body: 'Cultivados en Grado y entregados en menos de 24 horas. Mientras la competencia online tarda días en enviarte el producto, el nuestro llega vivo. No hay comparación posible.',
  },
  {
    icon: '🎨',
    title: 'Color que transforma el plato',
    body: 'Verdes intensos, rojos vivos, amarillos brillantes. Los microgreens hacen que cualquier plato parezca diseñado por un chef con estrella, sin esfuerzo extra.',
  },
  {
    icon: '🥗',
    title: 'Sabor concentrado y auténtico',
    body: 'Un brote de rábano sabe más a rábano que el rábano mismo. Los aceites esenciales y aromas se concentran en los primeros días de vida. Es puro sabor en miniatura.',
  },
  {
    icon: '🔄',
    title: 'Disponibilidad continua',
    body: 'Sistema de cultivo escalonado que garantiza cosecha semanal durante todo el año. Sin temporadas ni esperas. Siempre fresco, siempre puntual.',
  },
  {
    icon: '🌿',
    title: 'Cultivo artesanal y limpio',
    body: 'Sustrato de fibra de coco, semillas de calidad y cuidado manual en cada bandeja. Sin pesticidas, sin aceleradores químicos. Solo tiempo, agua y dedicación.',
  },
]

export default function Cualidades() {
  return (
    <section id="cualidades" className="bg-caliza px-6 py-20 md:px-12 lg:px-20">
      {/* Stats strip */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-musgo/10 rounded-2xl overflow-hidden mb-16">
        {stats.map(s => (
          <div key={s.num} className="bg-musgo text-center py-6 px-4">
            <span className="font-serif text-3xl md:text-4xl text-brote block leading-none mb-1">{s.num}</span>
            <span className="text-white/60 text-xs">{s.label}</span>
          </div>
        ))}
      </div>

      <div className="eyebrow">¿Por qué microgreens?</div>
      <h2 className="section-title">
        Pequeños, pero{' '}
        <span className="italic text-musgo">increíblemente</span>{' '}
        poderosos
      </h2>
      <p className="section-sub">
        No son decoración ni tendencia. Los microgreens concentran lo mejor de la planta adulta
        en pocos días de vida. Nutrición real, sabor real, origen real.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {cards.map(c => (
          <div key={c.title} className="bg-white rounded-2xl p-6 border border-musgo/10 hover:shadow-md transition-shadow">
            <div className="text-3xl mb-4">{c.icon}</div>
            <h3 className="font-sans font-semibold text-musgo mb-2 text-base">{c.title}</h3>
            <p className="text-tierra/70 text-sm leading-relaxed">{c.body}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
