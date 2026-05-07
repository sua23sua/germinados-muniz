import { useState } from 'react'

const recetas = {
  Primeros: [
    {
      emoji: '🥣',
      nombre: 'Crema de verduras con brócoli y girasol',
      desc: 'Crema suave de calabacín y zanahoria rematada con brotes de brócoli y una lluvia de girasol crujiente. El contraste de texturas lo cambia todo.',
      microgreens: ['Brócoli', 'Girasol'],
      dificultad: 'Fácil',
    },
    {
      emoji: '🥗',
      nombre: 'Ensalada de quinoa con guisante y rábano',
      desc: 'Quinoa templada, aguacate, pepino y una generosa cama de guisante con rábano rojo. Nutritiva, colorida y lista en 15 minutos.',
      microgreens: ['Guisante', 'Rábano Rojo'],
      dificultad: 'Fácil',
    },
    {
      emoji: '🍲',
      nombre: 'Gazpacho verde con brotes de brócoli',
      desc: 'Versión verde del gazpacho clásico con pepino, menta y espinacas. Los brotes de brócoli al servir añaden frescor mineral y nutrición extra.',
      microgreens: ['Brócoli'],
      dificultad: 'Fácil',
    },
    {
      emoji: '🫙',
      nombre: 'Ensalada tibia de lentejas con girasol',
      desc: 'Lentejas beluga templadas con vinagreta de mostaza antigua. Los brotes de girasol aportan crujiente y contrastan con la textura de la legumbre.',
      microgreens: ['Girasol', 'Guisante'],
      dificultad: 'Media',
    },
    {
      emoji: '🍜',
      nombre: 'Sopa miso con brotes de guisante',
      desc: 'Caldo de miso con tofu sedoso, alga wakame y setas shiitake. Los brotes de guisante flotan en la superficie aportando color y dulzor vegetal.',
      microgreens: ['Guisante'],
      dificultad: 'Fácil',
    },
  ],
  Segundos: [
    {
      emoji: '🐟',
      nombre: 'Merluza a la plancha con rábano y aliño cítrico',
      desc: 'Merluza marcada a fuego vivo, aliñada con zumo de limón y aceite de oliva. Los brotes de rábano picante activan el paladar y dan carácter al conjunto.',
      microgreens: ['Rábano Rojo', 'Brócoli'],
      dificultad: 'Fácil',
    },
    {
      emoji: '🐠',
      nombre: 'Salmón con brotes de girasol y aliño cítrico',
      desc: 'Salmón en costra de sésamo, acompañado de crema de aguacate y una generosa cama de girasol con ralladura de naranja. Plato de restaurante en casa.',
      microgreens: ['Girasol', 'Guisante'],
      dificultad: 'Media',
    },
    {
      emoji: '🥩',
      nombre: 'Solomillo con reducción de vino y Mix Km 0',
      desc: 'Solomillo al punto con reducción de vino tinto y chalotas. El Mix Km 0 asturiano sobre la carne cuenta una historia de origen que los comensales recuerdan.',
      microgreens: ['Mix Km 0', 'Rábano Rojo'],
      dificultad: 'Media',
    },
    {
      emoji: '🍔',
      nombre: 'Hamburguesa gourmet con rábano y mostaza',
      desc: 'Hamburguesa de ternera asturiana con queso curado, cebolla caramelizada y una montaña de rábano rojo. El picante equilibra la grasa y eleva el bocado.',
      microgreens: ['Rábano Rojo'],
      dificultad: 'Fácil',
    },
    {
      emoji: '🍗',
      nombre: 'Pollo al romero con brócoli y limón',
      desc: 'Muslos de pollo asados lentamente con romero fresco y ajo. Terminados con brotes de brócoli y ralladura de limón para refrescar el plato caliente.',
      microgreens: ['Brócoli', 'Guisante'],
      dificultad: 'Fácil',
    },
  ],
  Tapas: [
    {
      emoji: '🥖',
      nombre: 'Tosta de salmón ahumado con girasol',
      desc: 'Pan de masa madre tostado, queso crema, salmón ahumado y una capa de girasol crujiente. La tosta que convierte cualquier aperitivo en algo especial.',
      microgreens: ['Girasol'],
      dificultad: 'Muy fácil',
    },
    {
      emoji: '🥑',
      nombre: 'Tosta de aguacate con rábano rojo',
      desc: 'Aguacate aplastado con sal, limón y un chorro de aceite. El rábano rojo encima añade el picante y el color que le faltaba al clásico avocado toast.',
      microgreens: ['Rábano Rojo'],
      dificultad: 'Muy fácil',
    },
    {
      emoji: '🍳',
      nombre: 'Tortilla española con brotes de guisante',
      desc: 'Tortilla jugosa de patata y cebolla. Cuando sale a la mesa, una generosa capa de guisante la convierte en plato de bistró sin perder la esencia del bar.',
      microgreens: ['Guisante'],
      dificultad: 'Media',
    },
    {
      emoji: '🧀',
      nombre: 'Blini con queso crema y brócoli',
      desc: 'Miniblinís esponjosos con queso crema de hierbas y brotes de brócoli. Un bocado elegante para aperitivos de restaurante o eventos privados.',
      microgreens: ['Brócoli'],
      dificultad: 'Media',
    },
    {
      emoji: '🥩',
      nombre: 'Montadito de jamón con Mix Clásico',
      desc: 'Pan de pueblo con jamón ibérico, tomate rallado y Mix Clásico de microgreens. El contraste entre el salado del jamón y el frescor vegetal es perfecto.',
      microgreens: ['Mix Clásico'],
      dificultad: 'Muy fácil',
    },
  ],
}

const cats = Object.keys(recetas)

export default function Recetas() {
  const [active, setActive] = useState('Primeros')

  return (
    <section id="recetas" className="bg-caliza px-6 py-20 md:px-12 lg:px-20">
      <div className="eyebrow">Recetario</div>
      <h2 className="section-title">
        15 recetas para{' '}
        <span className="italic text-musgo">inspirarte</span>
      </h2>
      <p className="section-sub">
        Los microgreens no son decoración. Son el ingrediente que cambia el sabor, la textura
        y la historia de un plato. Aquí tienes cómo usarlos.
      </p>

      {/* Tabs */}
      <div className="flex gap-2 mb-8 flex-wrap">
        {cats.map(c => (
          <button
            key={c}
            onClick={() => setActive(c)}
            className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all min-h-[44px] ${
              active === c
                ? 'bg-musgo text-white'
                : 'bg-white text-musgo border border-musgo/20 hover:bg-niebla'
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
        {recetas[active].map(r => (
          <div
            key={r.nombre}
            className="bg-white rounded-2xl overflow-hidden border border-musgo/8 hover:shadow-md transition-shadow flex flex-col"
          >
            <div className="px-5 pt-5 pb-3 flex gap-3 items-start">
              <span className="text-3xl flex-shrink-0">{r.emoji}</span>
              <div>
                <div className="text-[10px] font-bold tracking-widest uppercase text-hoja mb-1">
                  {active} · {r.dificultad}
                </div>
                <h3 className="font-serif text-corteza text-lg leading-tight">{r.nombre}</h3>
              </div>
            </div>

            <div className="px-5 pb-4 flex-1">
              <p className="text-tierra/70 text-sm leading-relaxed mb-4">{r.desc}</p>

              <div className="bg-caliza rounded-xl p-3">
                <p className="text-[10px] font-bold tracking-widest uppercase text-musgo mb-2">
                  Microgreens
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {r.microgreens.map(m => (
                    <span
                      key={m}
                      className="bg-niebla text-musgo text-xs font-semibold px-2.5 py-1 rounded-full"
                    >
                      {m}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
