import { useState } from 'react'
import { business } from '../../content/site'
import Field from '../ui/Field'

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function validate(values) {
  const errors = {}
  if (!values.name.trim()) errors.name = 'Please enter your name.'
  if (!values.email.trim()) {
    errors.email = 'Please enter your email.'
  } else if (!EMAIL_PATTERN.test(values.email)) {
    errors.email = 'Please enter a valid email address.'
  }
  if (!values.message.trim()) errors.message = 'Please add a short message.'
  return errors
}

// There is no backend to receive this form, so instead of faking a "sent"
// state, submitting builds a pre-filled WhatsApp message — the one channel
// that's actually confirmed working. This keeps the form honest rather than
// pretending an email was delivered.
function buildWhatsAppMessage({ name, email, message }) {
  const text = `Hi Kingsukh Guest House, my name is ${name} (${email}). ${message}`
  return `${business.whatsappHref}?text=${encodeURIComponent(text)}`
}

export default function Contact() {
  const [values, setValues] = useState({ name: '', email: '', message: '' })
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // idle | sent

  const handleChange = (field) => (e) => {
    setValues((v) => ({ ...v, [field]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const nextErrors = validate(values)
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length > 0) return

    window.open(buildWhatsAppMessage(values), '_blank', 'noopener,noreferrer')
    setStatus('sent')
  }

  return (
    <section id="contact" className="bg-paper-dim py-20 sm:py-28">
      <div className="content-container grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
        <div className="lg:col-span-5">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-clay-600">
            Contact
          </span>
          <h2 className="font-display text-3xl sm:text-4xl leading-[1.15] text-forest-950 mt-3">
            Get in touch
          </h2>
          <p className="mt-4 text-ink-soft leading-relaxed max-w-sm">
            WhatsApp is the fastest way to reach us. You're welcome to call or
            email as well.
          </p>

          <dl className="mt-8 space-y-4 text-sm">
            <div>
              <dt className="text-ink-soft/70 uppercase tracking-wide text-xs mb-1">Phone</dt>
              <dd>
                <a href={business.phoneHref} className="text-forest-900 hover:text-clay-600 font-medium">
                  {business.phoneDisplay}
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-ink-soft/70 uppercase tracking-wide text-xs mb-1">Email</dt>
              <dd>
                <a href={business.emailHref} className="text-forest-900 hover:text-clay-600 font-medium break-all">
                  {business.email}
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-ink-soft/70 uppercase tracking-wide text-xs mb-1">Address</dt>
              <dd className="text-ink-soft">{business.addressLines.join(', ')}</dd>
            </div>
          </dl>
        </div>

        <div className="lg:col-span-7">
          {status === 'sent' ? (
            <div className="border border-forest-700/30 bg-forest-700/5 p-8 text-center">
              <p className="font-display text-xl text-forest-950">WhatsApp is opening in a new tab</p>
              <p className="mt-2 text-sm text-ink-soft">
                Your message has been prefilled — just hit send there to reach us directly.
              </p>
              <button
                type="button"
                onClick={() => setStatus('idle')}
                className="mt-5 text-sm font-medium text-forest-800 hover:text-clay-600"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <Field
                  id="name"
                  label="Your name"
                  value={values.name}
                  onChange={handleChange('name')}
                  error={errors.name}
                  autoComplete="name"
                />
                <Field
                  id="email"
                  label="Email address"
                  type="email"
                  value={values.email}
                  onChange={handleChange('email')}
                  error={errors.email}
                  autoComplete="email"
                />
              </div>
              <Field
                id="message"
                label="Message"
                as="textarea"
                value={values.message}
                onChange={handleChange('message')}
                error={errors.message}
                placeholder="Dates, number of guests, or any questions about the rooms"
              />
              <p className="text-xs text-ink-soft/70">
                This opens a prefilled WhatsApp message to {business.phoneDisplay} — there's no
                separate email inbox behind this form.
              </p>
              <button
                type="submit"
                className="inline-flex items-center justify-center px-7 py-3.5 text-sm font-medium bg-clay-600 text-paper hover:bg-clay-700 transition-colors min-h-11"
              >
                Send via WhatsApp
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
