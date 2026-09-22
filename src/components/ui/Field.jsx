/**
 * Labeled form field. A real <label> associated via htmlFor/id — not a floating
 * span with no semantic link, which was one of the accessibility failures found
 * on the original site.
 */
export default function Field({ id, label, type = 'text', as = 'input', error, ...rest }) {
  const Tag = as
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className="text-sm font-medium text-forest-950">
        {label}
      </label>
      <Tag
        id={id}
        name={id}
        type={as === 'input' ? type : undefined}
        aria-invalid={error ? 'true' : 'false'}
        aria-describedby={error ? `${id}-error` : undefined}
        className={`w-full border bg-paper px-4 py-3 text-sm text-ink placeholder:text-ink-soft/50 transition-colors focus:border-forest-700 ${
          error ? 'border-clay-600' : 'border-line'
        } ${as === 'textarea' ? 'min-h-32 resize-y' : 'min-h-11'}`}
        {...rest}
      />
      {error && (
        <p id={`${id}-error`} className="text-xs text-clay-700">
          {error}
        </p>
      )}
    </div>
  )
}
