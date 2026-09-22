import images from '../../content/images'
import { business } from '../../content/site'

export default function Hero() {
  return (
    <section id="home" className="relative h-[92vh] min-h-[560px] max-h-[820px] w-full overflow-hidden">
      <img
        src={images['nearby-baranti']}
        alt="Hills and lake near Baranti, close to Kingsukh Guest House"
        className="absolute inset-0 h-full w-full object-cover"
        fetchPriority="high"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-forest-950/80 via-forest-950/25 to-forest-950/45" />

      <div className="relative z-10 flex h-full flex-col justify-end">
        <div className="content-container pb-16 sm:pb-20 lg:pb-24">
          <p className="text-paper/85 text-sm font-medium tracking-[0.18em] uppercase mb-4">
            Manpur, Barhanti &middot; Purulia
          </p>
          <h1 className="font-display text-paper text-[2.5rem] leading-[1.1] sm:text-5xl lg:text-[3.4rem] max-w-2xl">
            Comfort and calm in the hills of Baranti
          </h1>
          <p className="mt-5 max-w-lg text-paper/85 text-base sm:text-lg leading-relaxed">
            A simple guest house near Baranti Hill and Baranti Lake — comfortable
            rooms, home-style food and a garden to unwind in after a day in the hills.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href={business.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-7 py-3.5 text-sm font-medium bg-clay-600 text-paper hover:bg-clay-700 transition-colors min-h-11"
            >
              Book on WhatsApp
            </a>
            <a
              href="#rooms"
              className="inline-flex items-center justify-center px-7 py-3.5 text-sm font-medium border border-paper/50 text-paper hover:bg-paper/10 transition-colors min-h-11"
            >
              View Rooms
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
