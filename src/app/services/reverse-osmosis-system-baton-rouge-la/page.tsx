import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import JsonLd from '@/components/JsonLd'
import PageHero from '@/components/PageHero'
import Faq from '@/components/Faq'
import CtaSection from '@/components/CtaSection'
import { BASE_URL, ogImage, pageUrl, site } from '@/lib/site'

const PATH = '/services/reverse-osmosis-system-baton-rouge-la'

export const metadata: Metadata = {
  title: { absolute: 'Reverse Osmosis Water Systems in Baton Rouge, LA' },
  description:
    'Tired of buying bottled water? A reverse osmosis filter at your kitchen sink gives you bottled-water quality on tap. For Baton Rouge homes. Free water test.',
  alternates: { canonical: pageUrl(PATH) },
  openGraph: {
    title: 'Reverse Osmosis Drinking Water Systems in Baton Rouge, LA | Acadian Water Solutions',
    description:
      'Tired of buying bottled water? A reverse osmosis filter at your kitchen sink gives you bottled-water quality on tap. For Baton Rouge homes. Free water test.',
    url: pageUrl(PATH),
    siteName: site.name,
    images: [ogImage],
    locale: 'en_US',
    type: 'website',
  },
}

const faqs = [
  {
    q: 'What does a reverse osmosis system remove?',
    a: 'Reverse osmosis strips water down to nearly pure water by pushing it through a very fine filter. That filter blocks not just particles but dissolved minerals too. So it takes out the chlorine and leftover tastes that a basic filter misses, along with a wide range of dissolved minerals. The result at the faucet is the cleanest water you can get in a home. Bottling plants run the same process.',
  },
  {
    q: 'What is the difference between tankless and tank-style RO?',
    a: 'Tank-style RO stores water in a big tank under your sink and pours from it. Tankless RO makes water on demand instead. We install tankless systems because they free up the cabinet space a tank eats up. They also give stronger flow at the faucet, and no water sits in storage. Tank systems still work fine. But once people see the slim tankless unit next to the old bulky one, the choice makes itself.',
  },
  {
    q: 'How much does a reverse osmosis system cost?',
    a: 'Reverse osmosis is the most affordable system we install. It is included in our Complete Home Package at $4,950 installed, where package pricing saves you up to 40% versus buying each system on its own. On its own, we quote it after the free water test, so it fits your water and your sink. Installation is free with your system either way.',
  },
  {
    q: 'Does reverse osmosis waste water?',
    a: 'Every reverse osmosis system sends some water to the drain. Rinsing the blocked minerals off the filter is how it works. Old tank systems were truly wasteful at this. The modern tankless units we install send far less water to the drain per gallon made. And for a faucet that only supplies drinking and cooking water, the total is small for a home.',
  },
  {
    q: 'How often do RO filters need to be changed?',
    a: 'Usually about once a year for the main filter set, and we confirm the exact schedule at install. On the tankless units we install, a filter change is a quick twist out and twist in. No wrenches, no crawling through the cabinet. Your use and your incoming water set the real pace, which is one more thing the free water test tells us up front.',
  },
  {
    q: 'What does the alkaline remineralization stage do?',
    a: 'It adds a measured blend of healthy minerals back into the water after the filter. Pure reverse osmosis water is very clean, but it tastes flat to some people. The alkaline stage brings back the crisp, mineral-water taste many people like. It is an optional add-on, and tasting the difference at the faucet is the only test that matters.',
  },
]

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': `${pageUrl(PATH)}#service`,
  name: 'Reverse Osmosis Drinking Water Systems',
  serviceType: 'Tankless reverse osmosis drinking water system installation',
  description:
    'Tankless reverse osmosis drinking water systems with optional alkaline remineralization, installed at the kitchen sink for homes across the greater Baton Rouge area.',
  url: pageUrl(PATH),
  provider: { '@id': `${BASE_URL}/#business` },
  areaServed: [
    { '@type': 'City', name: 'Baton Rouge, LA' },
    { '@type': 'City', name: 'Zachary, LA' },
    { '@type': 'City', name: 'Prairieville, LA' },
    { '@type': 'City', name: 'Gonzales, LA' },
    { '@type': 'City', name: 'Denham Springs, LA' },
  ],
}

export default function ReverseOsmosisPage() {
  return (
    <>
      <JsonLd data={serviceSchema} />
      <PageHero
        title="Reverse Osmosis Drinking Water Systems in Baton Rouge, Louisiana"
        intro="Tired of hauling home cases of bottled water? A reverse osmosis filter under your kitchen sink can end that. Reverse osmosis pushes water through a very fine filter that strips out almost everything. You get bottled-water quality right from the tap. Fill your glass, your coffee maker, and your pots straight from the faucet."
        crumbs={[
          { name: 'Home', href: '/' },
          { name: 'Services', href: '/services' },
          { name: 'Reverse Osmosis Drinking Water', href: PATH },
        ]}
        image="/images/service-ro.jpg"
        imageAlt="White tankless reverse osmosis drinking water system installed at a Baton Rouge kitchen sink"
      />

      {/* The bottled water case */}
      <section className="section-padding bg-white">
        <div className="container-wide max-w-4xl">
          <p className="section-label">Retire the bottled water</p>
          <h2 className="text-3xl md:text-4xl font-semibold mt-3">
            The water you buy in cases, made at your own sink
          </h2>
          <span className="waterline mt-5" aria-hidden="true" />
          <p className="mt-7 leading-relaxed text-zinc-600">
            If your home buys bottled water, you are already paying for reverse
            osmosis. Most bottled water is just city water run through a reverse
            osmosis filter, with a label added. A system under your own sink makes
            the same quality on demand. And the cases you stop hauling in pay toward
            the system month after month. No more running out mid-week. No more
            plastic piling up. No more warm bottles in the garage.
          </p>
          <div className="mt-10 space-y-8">
            <div>
              <h3 className="text-xl font-semibold">Drinking water your kids will actually choose</h3>
              <p className="mt-3 leading-relaxed text-zinc-600">
                When the tap tastes better than a sports drink, the fight is over.
                Families tell us the reverse osmosis faucet changes what everyone
                reaches for. From the toddler&apos;s sippy cup to the water bottles
                that head out for school and practice each morning.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">Coffee and cooking on a clean slate</h3>
              <p className="mt-3 leading-relaxed text-zinc-600">
                Coffee is mostly water. So are rice, beans, stock, and pasta.
                Chlorine and dissolved minerals flatten flavors that clean water lets
                through. Ever wonder why coffee at a cafe tastes better than the same
                beans at home? The water is a bigger part of the answer than the
                machine.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">An optional alkaline finish</h3>
              <p className="mt-3 leading-relaxed text-zinc-600">
                Reverse osmosis water is very clean, but it can taste flat to some
                people. The alkaline stage adds a few healthy minerals back in. That
                gives you the crisp taste of premium mineral water instead. It is a
                simple add-on, and you can pick it at install or add it later.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why tankless */}
      <section className="section-padding bg-mist">
        <div className="container-wide grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="section-label">Why tankless</p>
            <h2 className="text-3xl md:text-4xl font-semibold mt-3">
              Tankless RO: more cabinet space, stronger flow
            </h2>
            <span className="waterline mt-5" aria-hidden="true" />
            <p className="mt-7 leading-relaxed text-zinc-600">
              Older reverse osmosis setups fill the cabinet under your sink with a
              big tank and a tangle of filters. The tankless systems we install swap
              all that for one slim white unit. It makes water on demand. So you get
              stronger flow at the faucet, no stored water sitting in a tank, and
              room left for what the cabinet was meant to hold.
            </p>
            <p className="mt-4 leading-relaxed text-zinc-600">
              Filter changes twist out and back in by hand, no tools. And the free
              water test before we install confirms the system fits what comes into
              your home, whether that is city water in Baton Rouge or treated well
              water out in the parishes.
            </p>
          </div>
          <Image
            src="/images/lifestyle-glass.jpg"
            alt="Clear glass of reverse osmosis filtered drinking water in a Baton Rouge home"
            width={2000}
            height={1116}
            className="w-full h-auto rounded-[4px]"
          />
        </div>
      </section>

      {/* What's included */}
      <section className="section-padding bg-white">
        <div className="container-wide max-w-4xl">
          <p className="section-label">What&apos;s included</p>
          <h2 className="text-3xl md:text-4xl font-semibold mt-3">
            Every reverse osmosis installation includes
          </h2>
          <span className="waterline mt-5" aria-hidden="true" />
          <ul className="mt-8 space-y-4">
            {[
              'Free in-home water test before any quote',
              'A slim tankless RO unit with its own sink faucet',
              'An optional alkaline stage for a crisper taste',
              'Free professional install at your kitchen sink',
              'Lifetime warranty on your system, in writing',
              'A simple filter-change schedule explained at install',
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
        </div>
      </section>

      {/* Pairing + service area callout */}
      <section className="section-padding bg-mist">
        <div className="container-wide max-w-4xl">
          <p className="section-label">The full picture</p>
          <h2 className="text-3xl md:text-4xl font-semibold mt-3">
            RO handles the glass. What about the rest of the house?
          </h2>
          <span className="waterline mt-5" aria-hidden="true" />
          <p className="mt-7 leading-relaxed text-zinc-600">
            Reverse osmosis cleans one faucet: your kitchen sink. It leaves your
            showers, laundry, and water heater to whatever reaches the main line. So
            many homes pair a reverse osmosis unit with{' '}
            <Link
              href="/services/whole-house-water-filtration-baton-rouge-la"
              className="text-primary font-semibold hover:text-primary-dark transition-colors"
            >
              whole house water filtration
            </Link>{' '}
            and both jobs are covered. We install reverse osmosis systems across the
            metro. That includes family suburbs like Zachary, where drinking water
            for the kids is usually the reason people call.
          </p>
          <p className="mt-4">
            <Link
              href="/services/water-filtration-zachary-la"
              className="text-primary font-semibold hover:text-primary-dark transition-colors"
            >
              Water filtration in Zachary →
            </Link>
          </p>
          <p className="mt-6 leading-relaxed text-zinc-600">
            Curious what your tap water measures before anything goes in?{' '}
            <Link
              href="/contact"
              className="text-primary font-semibold hover:text-primary-dark transition-colors"
            >
              Book a free water test
            </Link>{' '}
            and taste the difference before you decide.
          </p>
        </div>
      </section>

      <Faq items={faqs} title="Reverse osmosis questions, answered" />
      <CtaSection
        title="Put bottled-water quality on tap"
        body="The free in-home water test shows you where your tap water starts and what a reverse osmosis system would take it to. Free installation, a lifetime warranty, and a faucet the whole house will fight over."
      />
    </>
  )
}
