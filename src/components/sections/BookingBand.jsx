import images from '../../content/images'
import { business } from '../../content/site'

export default function BookingBand() {
  return (
    <section className="relative py-24 sm:py-28 overflow-hidden">
      <img
        src={images['garden-flower']}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-forest-950/80" />

      <div className="relative content-container text-center flex flex-col items-center">
        <h2 className="font-display text-3xl sm:text-4xl text-paper max-w-xl leading-[1.2]">
          Ready to plan your stay?
        </h2>
        <p className="mt-4 text-paper/75 max-w-md">
          Message us on WhatsApp for the fastest reply, or call directly.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a
            href={business.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-7 py-3.5 text-sm font-medium bg-clay-600 text-paper hover:bg-clay-700 transition-colors min-h-11"
          >
            Book on WhatsApp
          </a>
          <a
            href={business.phoneHref}
            className="inline-flex items-center justify-center px-7 py-3.5 text-sm font-medium border border-paper/50 text-paper hover:bg-paper/10 transition-colors min-h-11"
          >
            Call {business.phoneDisplay}
          </a>
        </div>
      </div>
    </section>
  )
}
