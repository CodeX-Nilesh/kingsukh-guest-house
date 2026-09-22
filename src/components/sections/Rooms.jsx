import images from '../../content/images'
import { business, rooms } from '../../content/site'
import SectionHeading from '../ui/SectionHeading'

export default function Rooms() {
  return (
    <section id="rooms" className="bg-forest-950 py-20 sm:py-28">
      <div className="content-container">
        <SectionHeading
          tone="light"
          eyebrow="Rooms"
          title="Two room types, kept simple"
          description="Both rooms are straightforward and comfortable — a clean place to rest between days spent in the hills."
        />

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-px bg-forest-800/60">
          {rooms.map((room) => (
            <article key={room.id} className="bg-forest-950 flex flex-col sm:flex-row md:flex-col lg:flex-row">
              <div className="sm:w-2/5 md:w-full lg:w-2/5 aspect-[4/3] sm:aspect-auto md:aspect-[4/3] lg:aspect-auto overflow-hidden">
                <img
                  src={images[room.image]}
                  alt={room.name}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>

              <div className="flex flex-1 flex-col justify-between p-6 sm:p-8">
                <div>
                  <h3 className="font-display text-2xl text-paper">{room.name}</h3>
                  <p className="mt-3 text-paper/70 leading-relaxed text-[0.95rem]">
                    {room.description}
                  </p>
                </div>

                <div className="mt-8 flex items-end justify-between gap-4">
                  <div>
                    <p className="text-xs uppercase tracking-wide text-paper/50">{room.priceLabel}</p>
                    <p className="font-display text-2xl text-paper mt-0.5">
                      {room.price}
                      <span className="text-sm font-sans text-paper/60">{room.priceUnit}</span>
                    </p>
                  </div>
                  <a
                    href={business.whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-5 py-3 text-sm font-medium bg-clay-600 text-paper hover:bg-clay-700 transition-colors min-h-11 whitespace-nowrap"
                  >
                    Check Availability
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
