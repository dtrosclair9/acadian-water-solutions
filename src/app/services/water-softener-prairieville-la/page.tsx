import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import JsonLd from '@/components/JsonLd'
import PageHero from '@/components/PageHero'
import Faq from '@/components/Faq'
import CtaSection from '@/components/CtaSection'
import { BASE_URL, ogImage, pageUrl, site } from '@/lib/site'

const PATH = '/services/water-softener-prairieville-la'

export const metadata: Metadata = {
  title: { absolute: 'Water Softener Installation in Prairieville, LA' },
  description:
    'Building or buying new in Prairieville? We finish the softener loop in your garage and stop scale from wrecking a tankless heater. Free test, free install.',
  alternates: { canonical: pageUrl(PATH) },
  openGraph: {
    title: 'Water Softener Installation in Prairieville, LA | Acadian Water Solutions',
    description:
      'Water softener installation for Prairieville new construction and existing homes. Softener loops finished, tankless heaters protected. Free water test.',
    url: pageUrl(PATH),
    siteName: site.name,
    images: [ogImage],
    locale: 'en_US',
    type: 'website',
  },
}

const faqs = [
  {
    q: 'My new build has a softener loop. What is that?',
    a: 'A softener loop is a short piece of pipe the builder roughed in, usually in the garage. It lets a water softener connect without cutting into your plumbing later. It is the cheapest, cleanest spot you will ever have to install one. Hooking a softener to a loop is usually a quick single visit, and installation is free with the system.',
  },
  {
    q: 'Do tankless water heaters really need a softener?',
    a: 'Scale is the main enemy of a tankless water heater. Every time water runs through it, minerals bake onto the heat exchanger. Many Prairieville new builds come with a tankless unit standard. A softener stops that scale from forming in the first place, instead of cleaning it out after the damage is done. It protects your dishwasher, fixtures, and glass shower doors the same way.',
  },
  {
    q: 'What does a water softener cost in Prairieville?',
    a: 'The Complete Home Package pairs a softener with drinking-water filtration for $4,950 installed. Package pricing can save up to 40% versus buying each system on its own. A softener by itself costs less. We quote from your free in-home water test, so it is sized to how hard your water really is, and installation is free either way.',
  },
  {
    q: 'Is installation different for new construction versus an older home?',
    a: 'Only the plumbing part changes. A new build with a softener loop is the fastest install we do, because the connection point is already there. In an older Prairieville home we tie into the main line, which is routine work we do in the same visit. Installation is free with the system either way, and we walk you through the settings and salt before we leave.',
  },
]

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': `${pageUrl(PATH)}#service`,
  name: 'Water Softener Installation in Prairieville, LA',
  serviceType: 'Water softener installation and scale protection',
  description:
    'Water softener installation for Prairieville, Louisiana homes, including new-construction softener loop hookups and tankless water heater scale protection, with free water testing and free installation.',
  url: pageUrl(PATH),
  provider: { '@id': `${BASE_URL}/#business` },
  areaServed: [
    { '@type': 'City', name: 'Prairieville, LA' },
    { '@type': 'City', name: 'Geismar, LA' },
    { '@type': 'City', name: 'Gonzales, LA' },
    { '@type': 'City', name: 'St. Amant, LA' },
  ],
}

export default function PrairievilleSoftenerPage() {
  return (
    <>
      <JsonLd data={serviceSchema} />
      <PageHero
        title="Water Softener Installation in Prairieville, Louisiana"
        intro="Prairieville is where the Baton Rouge metro is building. Most of those new homes come with a tankless water heater and a softener loop already roughed into the garage. We finish that loop, size the softener to your water, and protect the new house from day one."
        crumbs={[
          { name: 'Home', href: '/' },
          { name: 'Services', href: '/services' },
          { name: 'Water Softeners in Prairieville', href: PATH },
        ]}
        image="/images/service-softener.jpg"
        imageAlt="Water softener system with brine tank installed for a new construction Prairieville Louisiana home"
      />

      {/* Local context — what makes Prairieville water Prairieville's */}
      <section className="section-padding bg-white">
        <div className="container-wide max-w-4xl">
          <p className="section-label">Prairieville &amp; the growth corridor</p>
          <h2 className="text-3xl md:text-4xl font-semibold mt-3">
            New subdivisions, new appliances, and the loop in your garage
          </h2>
          <span className="waterline mt-5" aria-hidden="true" />
          <p className="mt-7 leading-relaxed text-zinc-600">
            Prairieville has grown faster than almost anywhere in the metro. Drive the
            new streets off Highway 42 and Highway 73 and you see it: subdivision after
            subdivision of new homes. Most come with a tankless water heater and a
            softener loop. Builders rough in the loop because they know the softener
            belongs there. They just leave the softener itself to you.
          </p>
          <p className="mt-5 leading-relaxed text-zinc-600">
            That makes the choice easy for a new homeowner. Your most expensive
            appliances, the tankless heater, the dishwasher, the washer, are all brand
            new today. Scale is what wears them out. A softener on the loop means those
            appliances only ever see soft water. You are not fixing a problem later.
            You are stopping it in the first month, when protection is worth the most.
          </p>
          <p className="mt-5 leading-relaxed text-zinc-600">
            Water in Ascension Parish is a mixed bag. Most Prairieville subdivisions
            run on community systems like Parish Utilities. Homes near the parish edges
            and older acreage lots can be on private wells, where iron shows up too.
            The free in-home test measures how hard your water is and checks for iron
            before we suggest anything. That way the system fits your address, not an
            average.
          </p>
        </div>
      </section>

      {/* What we install locally */}
      <section className="section-padding bg-mist">
        <div className="container-wide grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="section-label">The fix</p>
            <h2 className="text-3xl md:text-4xl font-semibold mt-3">
              Softeners sized for Prairieville homes
            </h2>
            <span className="waterline mt-5" aria-hidden="true" />
            <ul className="mt-8 space-y-4">
              {[
                'Free in-home water test for iron, chlorine, and how hard the water is',
                'Softener loop hookup for new homes, main-line tie-in for older ones',
                'High-efficiency softener sized to your home and your test numbers',
                'Scale protection for tankless heaters, dishwashers, and fixtures',
                'Free installation, usually one visit',
                'Lifetime warranty on your system, in writing',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span
                    className="mt-1.5 w-2.5 h-2.5 rounded-full bg-splash shrink-0"
                    aria-hidden="true"
                  />
                  <span className="leading-relaxed text-zinc-700">{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 leading-relaxed text-zinc-600">
              The full gear rundown lives on our{' '}
              <Link
                href="/services/water-softener-installation-baton-rouge-la"
                className="text-primary font-semibold hover:text-primary-dark transition-colors"
              >
                water softener installation
              </Link>{' '}
              page. This page is about getting one into a Prairieville garage the
              week you close.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <Link href="/contact" className="btn-splash">Book a free Prairieville water test</Link>
              <a href={`tel:${site.phoneRaw}`} className="btn-outline-ink">
                Call {site.phoneDisplay}
              </a>
            </div>
          </div>
          <Image
            src="/images/lifestyle-home.jpg"
            alt="New brick home in a Prairieville Louisiana subdivision protected by a water softener system"
            width={2000}
            height={1116}
            className="w-full h-auto rounded-[4px]"
          />
        </div>
      </section>

      {/* Nearby */}
      <section className="section-padding bg-white">
        <div className="container-wide max-w-4xl">
          <p className="section-label">Nearby</p>
          <h2 className="text-3xl md:text-4xl font-semibold mt-3">
            Also serving Geismar, Dutchtown &amp; Gonzales
          </h2>
          <span className="waterline mt-5" aria-hidden="true" />
          <p className="mt-7 leading-relaxed text-zinc-600">
            The same growth runs down the corridor through Geismar and Dutchtown, and
            we install softeners across all of it. In Gonzales the water changes. Homes
            there split between two city providers and private wells, so filtration is
            the bigger question. That page covers it.
          </p>
          <p className="mt-4">
            <Link
              href="/services/water-filtration-gonzales-la"
              className="text-primary font-semibold hover:text-primary-dark transition-colors"
            >
              Water filtration in Gonzales →
            </Link>
          </p>
        </div>
      </section>

      <Faq items={faqs} title="Prairieville water softener questions" />
      <CtaSection
        title="Get your Prairieville water tested for free"
        body="We test how hard your water is right at your tap and show you the numbers on the spot. Then we size the softener to what your water actually measures. New build or twenty years in, the test comes first."
      />
    </>
  )
}
