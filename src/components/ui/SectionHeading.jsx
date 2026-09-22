/**
 * Consistent section heading pattern: small eyebrow label + display heading.
 * Reused across sections instead of each one inventing its own heading markup.
 *
 * tone="light" is for use on dark section backgrounds (e.g. the Rooms section) —
 * it swaps the title/description colors so they stay readable, since the default
 * tone assumes a light/paper background.
 */
export default function SectionHeading({ eyebrow, title, description, align = 'left', tone = 'dark' }) {
  const alignment = align === 'center' ? 'items-center text-center mx-auto' : 'items-start text-left'
  const titleColor = tone === 'light' ? 'text-paper' : 'text-forest-950'
  const descriptionColor = tone === 'light' ? 'text-paper/70' : 'text-ink-soft'
  const eyebrowColor = tone === 'light' ? 'text-clay-500' : 'text-clay-600'

  return (
    <div className={`flex flex-col gap-3 max-w-2xl ${alignment}`}>
      {eyebrow && (
        <span className={`text-xs font-semibold uppercase tracking-[0.18em] ${eyebrowColor}`}>
          {eyebrow}
        </span>
      )}
      <h2 className={`font-display text-3xl sm:text-4xl leading-[1.15] ${titleColor}`}>
        {title}
      </h2>
      {description && (
        <p className={`text-base leading-relaxed ${descriptionColor}`}>{description}</p>
      )}
    </div>
  )
}
