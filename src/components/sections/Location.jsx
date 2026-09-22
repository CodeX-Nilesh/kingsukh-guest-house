import images from '../../content/images'
import { business, nearby } from '../../content/site'
import SectionHeading from '../ui/SectionHeading'

export default function Location() {
  return (
    <section id="location" className="content-container py-20 sm:py-28">
      <SectionHeading eyebrow="Location" title="Manpur, Barhanti, Purulia" />

      <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
        <div className="lg:col-span-5 flex flex-col justify-between">
          <div>
            <p className="text-ink-soft leading-relaxed">
              {business.addressLines.join(', ')}
            </p>
            <a
              href={business.mapHref}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-forest-800 hover:text-clay-600 transition-colors"
            >
              Get Directions
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M7 17L17 7M9 7h8v8" />
              </svg>
            </a>
          </div>

          <div className="mt-10">
            <h3 className="text-sm font-medium text-forest-950 mb-4 uppercase tracking-wide">
              Nearby
            </h3>
            <ul className="grid grid-cols-2 gap-3">
              {nearby.map((place) => (
                <li key={place.name} className="relative aspect-[4/3] overflow-hidden group">
                  <img
                    src={images[place.image]}
                    alt={place.name}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute inset-0 bg-gradient-to-t from-forest-950/75 via-forest-950/0 to-transparent" />
                  <span className="absolute bottom-2 left-2.5 right-2.5 text-paper text-sm font-medium leading-snug">
                    {place.name}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="lg:col-span-7 min-h-[320px] lg:min-h-0">
          <iframe
            title="Map showing the location of Kingsukh Guest House"
            src="https://www.google.com/maps?q=Kingsukh+Guest+House+Manpur+Barhanti&output=embed"
            className="h-full w-full min-h-[320px] border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  )
}
