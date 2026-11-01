import JsonLd from '@/components/JsonLd'

export type FaqItem = { q: string; a: string }

type FaqProps = {
  items: FaqItem[]
  title?: string
  label?: string
  dark?: boolean
}

// Question-led FAQs with FAQPage schema. The first sentence of each answer
// is the direct answer (AI Overviews pull it); the rest expands.
export default function Faq({ items, title = 'Frequently Asked Questions', label = 'FAQs', dark = false }: FaqProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  }

  return (
    <section className={`section-padding ${dark ? 'bg-ink' : 'bg-mist'}`}>
      <JsonLd data={schema} />
      <div className="container-wide max-w-4xl">
        <p className={`section-label ${dark ? 'text-accent-light' : ''}`}>{label}</p>
        <h2 className={`text-3xl md:text-4xl font-semibold mt-3 ${dark ? 'text-white' : ''}`}>{title}</h2>
        <span className="waterline mt-5" aria-hidden="true" />
        {/* Full-width rows with horizontal dividers — no individual rounded
            containers, no shadows. The whole row is the control. */}
        <div className={`mt-10 border-t ${dark ? 'border-white/20' : 'border-ink/15'}`}>
          {items.map((f) => (
            <details
              key={f.q}
              className={`group border-b ${dark ? 'border-white/20' : 'border-ink/15'}`}
            >
              <summary
                className={`cursor-pointer list-none flex items-start justify-between gap-4 py-6 min-h-[44px] ${
                  dark ? 'text-white' : 'text-ink'
                }`}
              >
                <h3 className="text-[19px] md:text-xl font-semibold">{f.q}</h3>
                <span
                  aria-hidden="true"
                  className={`mt-1 shrink-0 text-2xl leading-none transition-transform duration-[180ms] group-open:rotate-45 ${
                    dark ? 'text-accent-light' : 'text-primary'
                  }`}
                >
                  +
                </span>
              </summary>
              <p className={`pb-6 -mt-1 leading-relaxed ${dark ? 'text-white/85' : 'text-ink/80'}`}>{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
