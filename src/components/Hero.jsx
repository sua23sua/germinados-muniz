export default function Hero() {
  return (
    <section className="min-h-svh grid grid-cols-1 md:grid-cols-2 pt-16">
      {/* Contenido */}
      <div className="flex flex-col justify-center px-6 py-12 md:px-12 lg:px-20">
        <div className="eyebrow">Grado, Asturias · Km 0 · &lt;24h</div>

        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-corteza leading-[1.1] mb-6">
          Germinados Muñiz:{' '}
          <span className="italic text-musgo">
            Frescura de Asturias
          </span>{' '}
          en cada bocado
        </h1>

        <p className="text-tierra/70 text-lg leading-relaxed max-w-md mb-8">
          Microgreens de alta densidad nutricional cultivados de forma artesanal en Grado,
          Asturias. Del cultivo a tu cocina en menos de 24 horas.
        </p>

        <div className="flex flex-wrap gap-3">
          <a href="#catalogo" className="btn-primary">
            Ver variedades
          </a>
          <a href="#hosteleria" className="btn-outline">
            Para restaurantes
          </a>
        </div>

        {/* Badges */}
        <div className="mt-10 flex flex-wrap gap-3">
          {['🌱 Km 0 real', '⚡ Hasta 40× más nutrientes', '📦 Entrega semanal', '🤝 Trato directo'].map(b => (
            <span key={b} className="bg-niebla text-musgo text-xs font-semibold px-3 py-1.5 rounded-full">
              {b}
            </span>
          ))}
        </div>
      </div>

      {/* Visual */}
      <div className="relative min-h-[280px] md:min-h-full bg-gradient-to-br from-musgo via-hoja to-brote flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_60%,rgba(255,255,255,0.15),transparent_60%)]" />
        <div className="relative z-10 text-center">
          <span className="float block text-[clamp(5rem,14vw,10rem)] drop-shadow-2xl select-none">🌱</span>
          <p className="text-white/70 text-xs font-semibold tracking-[0.18em] uppercase mt-4">
            Cosecha semanal · Asturias
          </p>
        </div>
      </div>
    </section>
  )
}
