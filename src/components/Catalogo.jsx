const variedades = [
  {
    emoji: '🫛',
    nombre: 'Guisante',
    sabor: 'Dulce y tierno',
    descripcion:
      'El más versátil del catálogo. Su sabor dulce y suave encaja en cremas, risottos, ensaladas y cualquier plato que pida un toque vegetal fresco sin estridencias.',
    perfil: 'Sabor suave',
    usos: ['Cremas', 'Risottos', 'Ensaladas', 'Tapas'],
    bg: 'from-[#e8f5d4] to-[#c8e8a0]',
    nutricion: 'Rico en vitaminas A, C y K',
  },
  {
    emoji: '🌻',
    nombre: 'Girasol',
    sabor: 'Crujiente con sabor a nuez',
    descripcion:
      'Textura firme y mordisco satisfactorio. Su sabor recuerda al fruto seco y da cuerpo a tartares, ensaladas y tostas. El preferido de quien busca textura en el plato.',
    perfil: 'Textura crujiente',
    usos: ['Tartares', 'Ensaladas', 'Tostas', 'Pastas'],
    bg: 'from-[#fff8d4] to-[#fde68a]',
    nutricion: 'Rico en vitamina E y grasas saludables',
  },
  {
    emoji: '🥦',
    nombre: 'Brócoli',
    sabor: 'Suave y rico en sulforafano',
    descripcion:
      'Sabor limpio y mineral con un ligero fondo vegetal. Contiene sulforafano, uno de los compuestos más estudiados por sus propiedades. El favorito de los chefs que buscan nutrición real.',
    perfil: 'Alta nutrición',
    usos: ['Cremas', 'Pescados', 'Huevos', 'Brunch'],
    bg: 'from-[#d4f0e0] to-[#a0dcbc]',
    nutricion: 'Alto en sulforafano y vitamina C',
  },
  {
    emoji: '🌶️',
    nombre: 'Rábano Rojo',
    sabor: 'Picante y visualmente impactante',
    descripcion:
      'Color rojo vivo que transforma cualquier presentación. Su toque picante activa el paladar y contrasta con sabores grasos o suaves. El que nadie espera y todos recuerdan.',
    perfil: 'Carácter picante',
    usos: ['Hamburguesas', 'Carnes', 'Tacos', 'Tostas'],
    bg: 'from-[#fde4e4] to-[#f9a8a8]',
    nutricion: 'Rico en antioxidantes y vitamina C',
  },
]

export default function Catalogo() {
  return (
    <section id="catalogo" className="bg-crema px-6 py-20 md:px-12 lg:px-20">
      <div className="eyebrow">Catálogo</div>
      <h2 className="section-title">
        Cuatro variedades,{' '}
        <span className="italic text-musgo">una sola cosecha semanal</span>
      </h2>
      <p className="section-sub">
        Seleccionadas por su sabor, color y lo que aportan al plato. Cada semana, frescas y vivas.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
        {variedades.map(v => (
          <div
            key={v.nombre}
            className="bg-white rounded-2xl overflow-hidden border border-musgo/10 flex flex-col hover:-translate-y-1 hover:shadow-lg transition-all duration-250"
          >
            {/* Imagen */}
            <div className={`bg-gradient-to-br ${v.bg} h-36 flex items-center justify-center text-6xl`}>
              {v.emoji}
            </div>

            {/* Cuerpo */}
            <div className="p-5 flex flex-col flex-1">
              <div className="flex items-start justify-between mb-2">
                <h3 className="font-serif text-xl text-corteza">{v.nombre}</h3>
                <span className="bg-niebla text-musgo text-[10px] font-bold px-2 py-1 rounded-full whitespace-nowrap">
                  {v.perfil}
                </span>
              </div>

              <p className="text-hoja font-semibold text-sm mb-3 italic">{v.sabor}</p>
              <p className="text-tierra/70 text-sm leading-relaxed flex-1">{v.descripcion}</p>

              {/* Nutrición */}
              <div className="mt-4 text-xs text-musgo/80 bg-caliza rounded-lg px-3 py-2">
                🔬 {v.nutricion}
              </div>

              {/* Usos */}
              <div className="mt-3 flex flex-wrap gap-1.5">
                {v.usos.map(u => (
                  <span key={u} className="text-[10px] font-semibold text-tierra/70 border border-tierra/20 px-2 py-0.5 rounded-full">
                    {u}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Strip de mezclas */}
      <div className="mt-8 bg-musgo rounded-2xl p-6 md:p-8 grid grid-cols-2 md:grid-cols-4 gap-5">
        {[
          { nombre: 'Mix Clásico',       precio: '2,50 €', desc: 'Equilibrado y versátil para el día a día.' },
          { nombre: 'Mix Picante',        precio: '2,80 €', desc: 'Rábano y mostaza. Para platos con carácter.' },
          { nombre: 'Mix Premium Visual', precio: '4,50 €', desc: 'Colores vivos para presentaciones de impacto.' },
          { nombre: 'Mix Km 0 Asturiano',precio: '3,20 €', desc: 'Identidad local en cada envase.' },
        ].map(m => (
          <div key={m.nombre}>
            <h4 className="font-serif text-white text-base mb-1">{m.nombre}</h4>
            <p className="text-white/60 text-xs leading-relaxed mb-2">{m.desc}</p>
            <span className="inline-block bg-white/10 text-brote text-xs font-bold px-2.5 py-1 rounded-full">
              desde {m.precio}
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}
