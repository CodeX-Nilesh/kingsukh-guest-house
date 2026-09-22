import images from '../../content/images'
import { whyStay } from '../../content/site'

export default function WhyStay() {
  return (
    <section className="bg-paper-dim py-20 sm:py-28">
      <div className="content-container grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
        <div className="lg:col-span-5">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-clay-600">
            Why Stay Here
          </span>
          <h2 className="font-display text-3xl sm:text-4xl leading-[1.15] text-forest-950 mt-3">
            What the hills give you here
          </h2>
          <div className="mt-8 aspect-[4/3] overflow-hidden">
            <img
              src={images['reception']}
              alt="Reception area of Kingsukh Guest House"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
        </div>

        <div className="lg:col-span-7">
          <dl className="divide-y divide-line">
            {whyStay.map((item, i) => (
              <div key={item.title} className="py-6 first:pt-0 flex gap-6">
                <span className="font-display text-2xl text-clay-600/70 w-10 shrink-0">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div>
                  <dt className="font-medium text-forest-950 text-lg">{item.title}</dt>
                  <dd className="mt-2 text-ink-soft leading-relaxed">{item.body}</dd>
                </div>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}
