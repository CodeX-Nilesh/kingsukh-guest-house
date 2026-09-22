import { useEffect, useState } from 'react'
import { business, nav } from '../content/site'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close the mobile menu on Escape and lock body scroll while open.
  useEffect(() => {
    if (!isMenuOpen) return
    const onKey = (e) => e.key === 'Escape' && setIsMenuOpen(false)
    document.addEventListener('keydown', onKey)
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = prevOverflow
    }
  }, [isMenuOpen])

  const handleNavClick = () => setIsMenuOpen(false)

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        isScrolled || isMenuOpen ? 'bg-paper/95 backdrop-blur-sm shadow-[0_1px_0_0_var(--color-line)]' : 'bg-transparent'
      }`}
    >
      <div className="content-container flex h-16 sm:h-[4.5rem] items-center justify-between">
        <a
          href="#home"
          className={`font-display text-lg sm:text-xl tracking-wide transition-colors ${
            isScrolled || isMenuOpen ? 'text-forest-950' : 'text-paper'
          }`}
        >
          Kingsukh Guest House
        </a>

        <nav className="hidden lg:flex items-center gap-8">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`text-sm font-medium tracking-wide transition-colors relative py-1 after:absolute after:left-0 after:-bottom-0.5 after:h-px after:w-0 after:bg-current after:transition-all hover:after:w-full ${
                isScrolled ? 'text-ink-soft hover:text-forest-950' : 'text-paper/90 hover:text-paper'
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <a
            href={business.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium bg-clay-600 text-paper hover:bg-clay-700 transition-colors min-h-11"
          >
            Book on WhatsApp
          </a>
        </div>

        <button
          type="button"
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-nav"
          onClick={() => setIsMenuOpen((v) => !v)}
          className={`lg:hidden inline-flex h-11 w-11 items-center justify-center transition-colors ${
            isScrolled || isMenuOpen ? 'text-forest-950' : 'text-paper'
          }`}
        >
          <span className="sr-only">{isMenuOpen ? 'Close menu' : 'Open menu'}</span>
          {isMenuOpen ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
              <line x1="5" y1="5" x2="19" y2="19" />
              <line x1="19" y1="5" x2="5" y2="19" />
            </svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
              <line x1="3" y1="7" x2="21" y2="7" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="17" x2="21" y2="17" />
            </svg>
          )}
        </button>
      </div>

      <div
        id="mobile-nav"
        className={`lg:hidden overflow-hidden bg-paper transition-[max-height] duration-300 ease-in-out ${
          isMenuOpen ? 'max-h-[28rem] border-t border-line' : 'max-h-0'
        }`}
      >
        <nav className="content-container flex flex-col py-4">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={handleNavClick}
              className="py-3 text-base font-medium text-ink border-b border-line/70 last:border-none"
            >
              {item.label}
            </a>
          ))}
          <a
            href={business.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleNavClick}
            className="mt-4 inline-flex items-center justify-center px-5 py-3 text-sm font-medium bg-clay-600 text-paper min-h-11"
          >
            Book on WhatsApp
          </a>
        </nav>
      </div>
    </header>
  )
}
