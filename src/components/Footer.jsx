const links = [
  { href: '#cualidades', label: 'Producto' },
  { href: '#catalogo',   label: 'Variedades' },
  { href: '#hosteleria', label: 'Restaurantes' },
  { href: '#recetas',    label: 'Recetas' },
  { href: '#contacto',   label: 'Contacto' },
]

export default function Footer() {
  return (
    <footer className="bg-corteza text-white/50 px-6 py-10 md:px-12 text-center">
      <span className="font-serif text-2xl text-white block mb-1">Germinados Muñiz</span>
      <p className="text-sm mb-5">
        <strong className="text-white/80">Microgreens frescos de Asturias</strong>
        {' · '}Producción artesanal en Grado
      </p>

      <div className="flex justify-center flex-wrap gap-x-6 gap-y-2 mb-6">
        {links.map(l => (
          <a key={l.href} href={l.href} className="text-sm text-white/50 hover:text-white/90 transition-colors">
            {l.label}
          </a>
        ))}
      </div>

      <p className="text-xs">© 2026 Germinados Muñiz · Todos los derechos reservados</p>
    </footer>
  )
}
