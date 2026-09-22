import images from '../../content/images'
import { about } from '../../content/site'

export default function About() {
  return (
    <section id="about" className="content-container py-20 sm:py-28">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
        <div className="lg:col-span-5 relative">
          <div className="aspect-[4/5] overflow-hidden">
            <img
              src={images['property-exterior']}
              alt="Kingsukh Guest House building and entrance gate"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
          <div className="hidden sm:block absolute -bottom-8 -right-8 w-40 aspect-[4/5] overflow-hidden border-4 border-paper shadow-lg">
            <img
              src={images['garden-flower']}
              alt="A flower in the guest house garden"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
        </div>

        <div className="lg:col-span-7 lg:pl-8">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-clay-600">
            About the Guest House
          </span>
          <h2 className="font-display text-3xl sm:text-4xl leading-[1.15] text-forest-950 mt-3">
            Built for people who came for the hills
          </h2>
          <div className="mt-6 space-y-5 max-w-xl">
            {about.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 24)} className="text-ink-soft leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
