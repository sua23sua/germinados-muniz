import { useState, useEffect } from 'react'

const links = [
  { href: '#cualidades', label: 'Producto' },
  { href: '#catalogo',   label: 'Variedades' },
  { href: '#hosteleria', label: 'Restaurantes' },
  { href: '#recetas',    label: 'Recetas' },
  { href: '#contacto',   label: 'Contacto' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen]         = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  const close = () => setOpen(false)

  return (
    <>
      <nav className={`fixed top-0 inset-x-0 z-50 h-16 px-4 md:px-8 flex items-center justify-between transition-all duration-300 ${
        scrolled ? 'bg-crema/95 backdrop-blur-md shadow-sm' : ''
      }`}>
        <a href="#" className="font-serif text-xl text-musgo tracking-tight z-10">
          Germinados Muñiz
        </a>

        {/* Desktop */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map(l => (
            <li key={l.href}>
              <a href={l.href} className="text-sm font-medium text-musgo hover:opacity-60 transition-opacity">
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a href="#contacto" className="btn-primary !py-2 !px-5 text-xs rounded-full">
              Muestra gratis
            </a>
          </li>
        </ul>

        {/* Hamburger */}
        <button
          className="md:hidden z-10 p-2 flex flex-col gap-[5px]"
          onClick={() => setOpen(v => !v)}
          aria-label="Menú"
        >
          <span className={`block w-6 h-0.5 bg-musgo rounded transition-transform duration-300 ${open ? 'translate-y-[7px] rotate-45' : ''}`} />
          <span className={`block w-6 h-0.5 bg-musgo rounded transition-opacity duration-300 ${open ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-0.5 bg-musgo rounded transition-transform duration-300 ${open ? '-translate-y-[7px] -rotate-45' : ''}`} />
        </button>
      </nav>

      {/* Mobile menu */}
      <div className={`fixed inset-0 z-40 bg-crema flex flex-col items-center justify-center gap-8 transition-transform duration-300 ${
        open ? 'translate-x-0' : 'translate-x-full'
      }`}>
        {links.map(l => (
          <a
            key={l.href}
            href={l.href}
            onClick={close}
            className="font-serif text-3xl text-musgo"
          >
            {l.label}
          </a>
        ))}
        <a href="#contacto" onClick={close} className="btn-primary mt-4 text-base px-8 py-4">
          Solicitar muestra gratuita
        </a>
      </div>
    </>
  )
}
