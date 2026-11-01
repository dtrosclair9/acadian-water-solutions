import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import JsonLd from '@/components/JsonLd'
import PageHero from '@/components/PageHero'
import CtaSection from '@/components/CtaSection'
import { BASE_URL, ogImage, pageUrl, site, services, cityPages } from '@/lib/site'

const PATH = '/services'

export const metadata: Metadata = {
  title: { absolute: 'Water Treatment Services in Baton Rouge, LA' },
  description:
    'Whole-house water filtration, softeners, reverse osmosis, well water treatment & free testing for the Baton Rouge area. Complete package $4,950 installed.',
  alternates: { canonical: pageUrl(PATH) },
  openGraph: {
    title: 'Water Treatment Services in Baton Rouge, LA | Acadian Water Solutions',
    description:
      'Whole-house filtration, water softeners, reverse osmosis, well water treatment & free in-home testing for the greater Baton Rouge area.',
    url: pageUrl(PATH),
    siteName: site.name,
    images: [ogImage],
    locale: 'en_US',
    type: 'website',
  },
}

const itemListSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  '@id': `${pageUrl(PATH)}#services`,
  name: 'Water Treatment Services in Baton Rouge, LA',
  description:
    'Water treatment services offered by Acadian Water Solutions in the greater Baton Rouge area: whole-house filtration, water softeners, reverse osmosis drinking water, well water treatment, and free in-home water testing.',
  url: pageUrl(PATH),
  itemListElement: services.map((s, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: s.name,
    url: pageUrl(`/services/${s.slug}`),
  })),
}

export default function ServicesIndexPage() {
  return (
    <>
      <JsonLd data={itemListSchema} />
      <PageHero
        title="Water Treatment Services in Baton Rouge"
        intro="We handle whole-house filtration, water softeners, reverse osmosis drinking water, and well water treatment across the Baton Rouge area. Every job starts the same way. We test your water at home for free, then tell you straight what it needs."
        crumbs={[
          { name: 'Home', href: '/' },
          { name: 'Services', href: PATH },
        ]}
        image="/images/hero-home.jpg"
        imageAlt="Acadian Water Solutions water softener, tankless reverse osmosis system, and water testing kit"
      />

      {/* Intro: the honest-testing positioning */}
      <section className="section-padding bg-white">
        <div className="container-wide max-w-4xl">
          <p className="section-label">How we work</p>
          <h2 className="text-3xl md:text-4xl font-semibold mt-3">
            The test comes first. The equipment comes second.
          </h2>
          <span className="waterline mt-5" aria-hidden="true" />
          <p className="mt-7 text-lg leading-relaxed text-zinc-600">
            Most water companies lead with a product. Then they work backward to a
            reason you need it. We do the opposite. First we test your water at your own
            tap. We check hardness, iron, chlorine, TDS, and pH, all for free. Then we
            walk you through what each number means. You only hear about a system your
            water actually needs.
          </p>
          <p className="mt-5 text-lg leading-relaxed text-zinc-600">
            When your water does need help, the test shows which system fits. City water
            in Baton Rouge is one problem. Harder groundwater out in the parishes is
            another. Private wells around Walker and Prairieville are a third. Each one
            needs a different fix. That is why we test before we quote.
          </p>
        </div>
      </section>

      {/* Service cards */}
      <section className="section-padding bg-mist">
        <div className="container-wide">
          <p className="section-label">The services</p>
          <h2 className="text-3xl md:text-4xl font-semibold mt-3">
            Five ways we fix Baton Rouge water
          </h2>
          <span className="waterline mt-5" aria-hidden="true" />
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="group rounded-[4px] bg-white hover:shadow-lg transition-shadow overflow-hidden"
              >
                <div className="aspect-[16/9] overflow-hidden bg-mist">
                  <Image
                    src={s.image}
                    alt={s.imageAlt}
                    width={800}
                    height={450}
                    className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-300"
                  />
                </div>
                <div className="p-7">
                  <h3 className="text-2xl font-semibold group-hover:text-primary transition-colors">
                    {s.name}
                  </h3>
                  <p className="mt-3 leading-relaxed text-zinc-600">{s.short}</p>
                  <p className="mt-5 text-sm font-semibold text-primary">
                    {s.name} details →
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Complete Home Package banner */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="rounded-[4px] bg-ink px-8 py-14 md:px-16 md:py-16 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <p className="section-label text-accent-light">Best value</p>
              <h2 className="text-3xl md:text-4xl font-semibold mt-3 text-white">
                The Complete Home Package
              </h2>
              <span className="waterline mt-5" aria-hidden="true" />
              <p className="mt-6 text-lg leading-relaxed text-zinc-300">
                You get a high-efficiency water softener, tankless reverse osmosis
                drinking water, and alkaline filtration in one bundle. The price is
                $4,950 installed. Buying each part on its own costs more, so the bundle
                can save you up to 40%. Install is free, and the equipment carries a
                lifetime warranty.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link href="/contact" className="btn-splash">
                  Get package pricing
                </Link>
                <a
                  href={`tel:${site.phoneRaw}`}
                  className="border-2 border-white text-white font-bold px-6 py-3.5 rounded-[2px] hover:bg-white hover:text-ink transition-colors inline-block"
                >
                  Call {site.phoneDisplay}
                </a>
              </div>
            </div>
            <div>
              <p className="text-5xl md:text-6xl font-semibold text-white">
                $4,950
              </p>
              <p className="mt-2 text-zinc-300">installed, whole home</p>
              <ul className="mt-6 space-y-3">
                {[
                  'Save up to 40% versus separate systems',
                  'Free professional installation',
                  'Lifetime warranty, in writing',
                  'Sized from your free water test',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-zinc-200">
                    <span
                      className="mt-1.5 w-2.5 h-2.5 rounded-full bg-splash shrink-0"
                      aria-hidden="true"
                    />
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* City pages */}
      <section className="section-padding bg-mist">
        <div className="container-wide max-w-4xl">
          <p className="section-label">Where we work</p>
          <h2 className="text-3xl md:text-4xl font-semibold mt-3">
            Water treatment near you
          </h2>
          <span className="waterline mt-5" aria-hidden="true" />
          <p className="mt-7 leading-relaxed text-zinc-600">
            We install and service systems across East Baton Rouge, Livingston,
            Ascension, and West Baton Rouge Parish. Live in one of these towns? We wrote
            a page just for your water:
          </p>
          <ul className="mt-7 grid grid-cols-1 sm:grid-cols-2 gap-3">
            {cityPages.map((c) => (
              <li key={c.slug}>
                <Link
                  href={`/services/${c.slug}`}
                  className="text-primary font-semibold hover:text-primary-dark transition-colors"
                >
                  {c.service} in {c.city} →
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaSection
        title="Not sure which system you need?"
        body="That is what the free water test is for. We test at your tap and explain the results on the spot. Then we tell you which of these services fits your water, and which ones you can skip."
      />
    </>
  )
}
