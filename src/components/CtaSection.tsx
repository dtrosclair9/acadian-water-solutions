import Link from 'next/link'
import { site } from '@/lib/site'

type CtaSectionProps = {
  title?: string
  body?: string
}

// Split color block: white section holding a rounded splash-gradient card.
export default function CtaSection({
  title = 'Find out what is actually in your water',
  body = 'We test your water right at your tap and show you exactly what is in it, on the spot. No charge, and no pressure to buy anything.',
}: CtaSectionProps) {
  return (
    <section className="section-padding bg-white">
      <div className="container-wide">
        <div className="rounded-[4px] bg-splash px-8 py-14 md:px-16 md:py-16 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-white">{title}</h2>
          <p className="mt-5 text-lg text-white/90 max-w-2xl mx-auto leading-relaxed">{body}</p>
          <div className="mt-9 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="bg-white text-ink font-bold px-7 py-3.5 rounded-[2px] hover:bg-zinc-100 transition-colors inline-block"
            >
              Book your free water test
            </Link>
            <a
              href={`tel:${site.phoneRaw}`}
              className="border-2 border-white text-white font-bold px-7 py-3.5 rounded-[2px] hover:bg-white hover:text-ink transition-colors inline-block"
            >
              Call {site.phoneDisplay}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
