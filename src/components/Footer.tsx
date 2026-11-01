import Link from 'next/link'
import Image from 'next/image'
import { services, cityPages, site } from '@/lib/site'

export default function Footer() {
  return (
    <footer className="bg-mist text-ink/80 border-t-2 border-ink/20">
      {/* The waterline — the brand splash as the footer's top edge */}
      <div className="h-1.5 bg-splash" aria-hidden="true" />
      <div className="container-wide py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <Image
              src="/images/logo.png"
              alt="Acadian Water Solutions logo"
              width={600}
              height={159}
              className="h-14 w-auto mb-5"
            />
            <p className="text-sm leading-relaxed">
              Water filtration, softeners, reverse osmosis, and well water
              treatment for the greater Baton Rouge area. Every project starts
              with a free in-home water test.
            </p>
          </div>

          <div>
            <h2 className="text-ink font-sans text-[13px] font-semibold uppercase tracking-[0.07em] mb-4">
              Services
            </h2>
            <ul className="space-y-2.5">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services/${s.slug}`}
                    className="text-sm underline underline-offset-2 hover:text-primary"
                  >
                    {s.navLabel}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-ink font-sans text-[13px] font-semibold uppercase tracking-[0.07em] mb-4">
              Areas We Serve
            </h2>
            <ul className="space-y-2.5">
              {cityPages.map((c) => (
                <li key={c.slug}>
                  <Link
                    href={`/services/${c.slug}`}
                    className="text-sm underline underline-offset-2 hover:text-primary"
                  >
                    {c.service} in {c.city}
                  </Link>
                </li>
              ))}
              <li className="text-sm text-ink/65">
                Plus Baker, Port Allen, Watson, St. Amant, Geismar &amp; Central
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-ink font-sans text-[13px] font-semibold uppercase tracking-[0.07em] mb-4">
              Contact
            </h2>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href={`tel:${site.phoneRaw}`} className="underline underline-offset-2 hover:text-primary">
                  {site.phoneDisplay}
                </a>
              </li>
              <li>
                <a href={`mailto:${site.email}`} className="underline underline-offset-2 hover:text-primary">
                  {site.email}
                </a>
              </li>
              <li>
                {site.city}, {site.stateFull}
              </li>
              <li>
                <Link href="/contact" className="text-primary font-semibold underline underline-offset-2 hover:text-ink">
                  Book a free water test →
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-ink/15 mt-12 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-ink/70">
          <p>© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="underline underline-offset-2 hover:text-primary">Privacy Policy</Link>
            <Link href="/accessibility" className="underline underline-offset-2 hover:text-primary">Accessibility</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
