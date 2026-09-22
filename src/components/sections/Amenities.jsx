import { amenities } from '../../content/site'
import SectionHeading from '../ui/SectionHeading'

const ICONS = {
  'High-Class Security': (
    <path d="M12 3l7 3v5c0 4.5-3 8-7 9-4-1-7-4.5-7-9V6l7-3z" />
  ),
  '24-Hour Room Service': (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.5V12l3 2" />
    </>
  ),
  Restaurant: (
    <>
      <path d="M6 3v7a2 2 0 0 0 2 2v9" />
      <path d="M6 3v5M9 3v5" />
      <path d="M17 3c-1.5 0-2.5 1.5-2.5 4s1 4 2.5 4v10" />
    </>
  ),
  'Tourist Guide Support': (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M15 9l-2 5-5 2 2-5 5-2z" />
    </>
  ),
}

function Icon({ title }) {
  return (
    <svg
      width="26"
      height="26"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {ICONS[title]}
    </svg>
  )
}

export default function Amenities() {
  return (
    <section id="amenities" className="content-container py-20 sm:py-28">
      <SectionHeading
        eyebrow="Amenities"
        title="What's included in your stay"
      />

      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-10">
        {amenities.map((item) => (
          <div key={item.title} className="flex flex-col gap-3">
            <div className="text-forest-700">
              <Icon title={item.title} />
            </div>
            <h3 className="font-medium text-forest-950">{item.title}</h3>
            <p className="text-sm text-ink-soft leading-relaxed">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
