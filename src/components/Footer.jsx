import { business, nav } from '../content/site'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-forest-950 text-paper/80">
      <div className="content-container py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <p className="font-display text-lg text-paper">Kingsukh Guest House</p>
          <p className="mt-3 text-sm leading-relaxed max-w-xs">
            A guest house in Manpur, Barhanti, near Baranti Hill and Baranti Lake, Purulia.
          </p>
          <a
            href={business.instagramHref}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Kingsukh Guest House on Instagram"
            className="mt-4 inline-flex h-10 w-10 items-center justify-center border border-paper/25 hover:border-paper/60 transition-colors"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
              <rect x="3" y="3" width="18" height="18" rx="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17.2" cy="6.8" r="0.6" fill="currentColor" stroke="none" />
            </svg>
          </a>
        </div>

        <div>
          <p className="text-xs uppercase tracking-wide text-paper/50 mb-4">Navigate</p>
          <ul className="space-y-2.5 text-sm">
            {nav.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="hover:text-paper transition-colors">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs uppercase tracking-wide text-paper/50 mb-4">Contact</p>
          <ul className="space-y-2.5 text-sm">
            <li>
              <a href={business.phoneHref} className="hover:text-paper transition-colors">
                {business.phoneDisplay}
              </a>
            </li>
            <li>
              <a href={business.emailHref} className="hover:text-paper transition-colors break-all">
                {business.email}
              </a>
            </li>
            <li>
              <a
                href={business.mapHref}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-paper transition-colors"
              >
                Get directions
              </a>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-xs uppercase tracking-wide text-paper/50 mb-4">Address</p>
          <p className="text-sm leading-relaxed">{business.addressLines.join(', ')}</p>
          <a
            href={business.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium bg-clay-600 text-paper hover:bg-clay-700 transition-colors min-h-11"
          >
            Book on WhatsApp
          </a>
        </div>
      </div>

      <div className="border-t border-paper/10">
        <div className="content-container py-5 text-xs text-paper/50">
          &copy; {year} Kingsukh Guest House. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
