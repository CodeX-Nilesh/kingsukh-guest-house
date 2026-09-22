import { useCallback, useEffect, useState } from 'react'
import images from '../../content/images'
import { gallery } from '../../content/site'
import SectionHeading from '../ui/SectionHeading'

// Deliberate varied spans so the grid reads as an editorial layout rather than
// a uniform block of identical tiles.
const SPANS = [
  'sm:col-span-2 sm:row-span-2',
  'sm:col-span-1 sm:row-span-1',
  'sm:col-span-1 sm:row-span-1',
  'sm:col-span-1 sm:row-span-2',
  'sm:col-span-1 sm:row-span-1',
  'sm:col-span-1 sm:row-span-1',
  'sm:col-span-2 sm:row-span-1',
  'sm:col-span-1 sm:row-span-1',
]

export default function Gallery() {
  const [activeIndex, setActiveIndex] = useState(null)

  const close = useCallback(() => setActiveIndex(null), [])
  const showPrev = useCallback(
    () => setActiveIndex((i) => (i === null ? i : (i - 1 + gallery.length) % gallery.length)),
    []
  )
  const showNext = useCallback(
    () => setActiveIndex((i) => (i === null ? i : (i + 1) % gallery.length)),
    []
  )

  useEffect(() => {
    if (activeIndex === null) return
    const onKey = (e) => {
      if (e.key === 'Escape') close()
      if (e.key === 'ArrowLeft') showPrev()
      if (e.key === 'ArrowRight') showNext()
    }
    document.addEventListener('keydown', onKey)
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = prevOverflow
    }
  }, [activeIndex, close, showPrev, showNext])

  return (
    <section id="gallery" className="content-container py-20 sm:py-28">
      <SectionHeading
        eyebrow="Gallery"
        title="The property and the hills around it"
      />

      <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 auto-rows-[140px] sm:auto-rows-[160px] gap-3">
        {gallery.map((item, index) => (
          <button
            key={item.image}
            type="button"
            onClick={() => setActiveIndex(index)}
            className={`group relative overflow-hidden focus-visible:z-10 ${SPANS[index % SPANS.length]}`}
            aria-label={`View larger image: ${item.alt}`}
          >
            <img
              src={images[item.image]}
              alt={item.alt}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
            />
            <span className="absolute inset-0 bg-forest-950/0 group-hover:bg-forest-950/15 transition-colors duration-300" />
          </button>
        ))}
      </div>

      {activeIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Image viewer"
          className="fixed inset-0 z-[60] flex items-center justify-center bg-forest-950/95 p-4 sm:p-8"
          onClick={close}
        >
          <button
            type="button"
            onClick={close}
            aria-label="Close image viewer"
            className="absolute top-4 right-4 sm:top-6 sm:right-6 inline-flex h-11 w-11 items-center justify-center text-paper hover:text-paper/70"
          >
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
              <line x1="5" y1="5" x2="19" y2="19" />
              <line x1="19" y1="5" x2="5" y2="19" />
            </svg>
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation()
              showPrev()
            }}
            aria-label="Previous image"
            className="absolute left-2 sm:left-6 inline-flex h-11 w-11 items-center justify-center text-paper hover:text-paper/70"
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
              <path d="M15 5l-7 7 7 7" />
            </svg>
          </button>

          <figure
            className="max-w-4xl max-h-[80vh] flex flex-col items-center gap-3"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={images[gallery[activeIndex].image]}
              alt={gallery[activeIndex].alt}
              className="max-h-[70vh] w-auto object-contain"
            />
            <figcaption className="text-paper/70 text-sm text-center">
              {gallery[activeIndex].alt}
            </figcaption>
          </figure>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation()
              showNext()
            }}
            aria-label="Next image"
            className="absolute right-2 sm:right-6 inline-flex h-11 w-11 items-center justify-center text-paper hover:text-paper/70"
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
              <path d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      )}
    </section>
  )
}
