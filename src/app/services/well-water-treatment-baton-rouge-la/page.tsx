import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import JsonLd from '@/components/JsonLd'
import PageHero from '@/components/PageHero'
import Faq from '@/components/Faq'
import CtaSection from '@/components/CtaSection'
import { BASE_URL, ogImage, pageUrl, site } from '@/lib/site'

const PATH = '/services/well-water-treatment-baton-rouge-la'

export const metadata: Metadata = {
  title: { absolute: 'Well Water Treatment in Baton Rouge, LA | Iron & Sulfur' },
  description:
    'Orange stains and a rotten-egg smell? That is well water. We remove iron and sulfur from private wells near Baton Rouge. Free testing and free install.',
  alternates: { canonical: pageUrl(PATH) },
  openGraph: {
    title: 'Well Water Treatment in Baton Rouge, LA | Acadian Water Solutions',
    description:
      'Orange stains and a rotten-egg smell? That is well water. We remove iron and sulfur from private wells near Baton Rouge. Free testing and free install.',
    url: pageUrl(PATH),
    siteName: site.name,
    images: [ogImage],
    locale: 'en_US',
    type: 'website',
  },
}

const faqs = [
  {
    q: 'Why does my well water smell like rotten eggs?',
    a: 'That rotten-egg smell is sulfur gas, and it is one of the most common well water complaints in Livingston and Ascension Parish. It forms naturally underground and escapes the moment you open a tap. The smell hits hardest in a hot shower. A dedicated sulfur filter traps the gas before it reaches your plumbing, so the odor is gone at every faucet.',
  },
  {
    q: 'What causes orange or brown stains on my tubs and laundry?',
    a: 'Those orange and brown stains are iron in your well water, turning to rust when it meets the air. Even in small amounts, iron stains fixtures, dulls laundry, and leaves rings in toilets. Iron is the most common well water problem in our area. The right iron filter removes it before it ever reaches a fixture.',
  },
  {
    q: 'How much does a well water treatment system cost in the Baton Rouge area?',
    a: 'We quote well systems from your actual water test, not a flat menu. A little iron and a lot of iron need different gear. Installation is free with your system. And package pricing can save you up to 40% when you combine well treatment with a softener or a drinking-water filter. The free test comes first, so the quote fits what your well really needs.',
  },
  {
    q: 'Will a regular water softener fix iron and sulfur?',
    a: 'Not reliably, and this is the most expensive mistake well owners make. A softener can catch a trace of iron. But real iron or any sulfur will clog up a softener and leave the real problem untreated. Wells with iron or sulfur need a dedicated filter ahead of any softener. That is exactly what our two-tank well systems do.',
  },
  {
    q: 'How do I know what is actually in my well water?',
    a: 'Test it, because no one checks a private well but the owner. Our free in-home test covers iron, how hard the water is, pH, dissolved solids, and sulfur. We explain the results on the spot. A well can also change over time, so it is worth retesting every couple of years, even after treatment.',
  },
  {
    q: 'Do you service wells outside Baton Rouge?',
    a: 'Yes. Most of the wells we treat are outside the city, across Livingston Parish around Walker, Watson, and Holden, and through Ascension Parish around Prairieville, St. Amant, and Geismar. If you are anywhere in the greater Baton Rouge area, you are in our service area.',
  },
  {
    q: 'Is well water with iron or sulfur dangerous to drink?',
    a: 'Iron and sulfur at the levels typical in local wells mostly affect taste, smell, and staining, not your health. Still, a well that has changed color or smell deserves a full test. The same conditions can come with other issues, like bacteria, that do matter for health. So treat the nuisance, but check the safety.',
  },
]

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': `${pageUrl(PATH)}#service`,
  name: 'Well Water Treatment',
  serviceType: 'Well water treatment and iron and sulfur removal',
  description:
    'Dual-tank well water treatment systems removing iron, manganese, hydrogen sulfide, and sediment for private wells in the greater Baton Rouge area.',
  url: pageUrl(PATH),
  provider: { '@id': `${BASE_URL}/#business` },
  areaServed: [
    { '@type': 'AdministrativeArea', name: 'Livingston Parish, LA' },
    { '@type': 'AdministrativeArea', name: 'Ascension Parish, LA' },
    { '@type': 'AdministrativeArea', name: 'East Baton Rouge Parish, LA' },
  ],
}

export default function WellWaterPage() {
  return (
    <>
      <JsonLd data={serviceSchema} />
      <PageHero
        title="Well Water Treatment in Baton Rouge, Louisiana"
        intro="Orange stains in the tub. A rotten-egg smell in the shower. Grit in the water. That is what well water often brings around Livingston and Ascension Parish. A basic city-water filter will not fix it. We test your well for free, then build a system around what is really coming out of the ground."
        crumbs={[
          { name: 'Home', href: '/' },
          { name: 'Services', href: '/services' },
          { name: 'Well Water Treatment', href: PATH },
        ]}
        image="/images/service-well.jpg"
        imageAlt="Dual tank well water iron and sulfur removal system by Acadian Water Solutions"
      />

      {/* Symptom-led section — the content nobody local has */}
      <section className="section-padding bg-white">
        <div className="container-wide max-w-4xl">
          <p className="section-label">Know the signs</p>
          <h2 className="text-3xl md:text-4xl font-semibold mt-3">
            What your well water is telling you
          </h2>
          <span className="waterline mt-5" aria-hidden="true" />
          <div className="mt-10 space-y-8">
            <div>
              <h3 className="text-xl font-semibold">Rotten-egg smell in the shower</h3>
              <p className="mt-3 leading-relaxed text-zinc-600">
                That smell is sulfur gas, dissolved in the water deep underground. It
                escapes the moment the water hits the air. Hot water makes it worse, and the shower is
                  where most people finally decide to fix it.
                The right filter removes it for good.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">Orange stains in tubs, toilets, and laundry</h3>
              <p className="mt-3 leading-relaxed text-zinc-600">
                That is iron in your water, turning to rust when it meets the air. It
                shows up as rust rings, orange streaks under faucets, and dingy whites
                from the wash. An iron filter traps it in the tank instead of on your
                fixtures.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">Black slime or dark streaks</h3>
              <p className="mt-3 leading-relaxed text-zinc-600">
                This is usually manganese, iron&apos;s lesser-known cousin. It is
                common in the same Livingston and Ascension Parish groundwater. It
                stains darker than iron. We treat it the same way, as long as the
                system is sized for it from the start.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">Cloudy water or gritty sand</h3>
              <p className="mt-3 leading-relaxed text-zinc-600">
                This is sand and silt pulled up from underground. It wears out your
                fixtures, clogs faucet screens, and shortens the life of your pump. A
                grit filter ahead of the main tanks catches it first.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why us for wells */}
      <section className="section-padding bg-mist">
        <div className="container-wide">
          <p className="section-label">Why Acadian for well water</p>
          <h2 className="text-3xl md:text-4xl font-semibold mt-3">
            Built for wells, not adapted from city-water systems
          </h2>
          <span className="waterline mt-5" aria-hidden="true" />
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="rounded-[4px] bg-white p-8">
              <h3 className="text-xl font-semibold">Two-tank well systems</h3>
              <p className="mt-3 text-sm leading-relaxed text-zinc-600">
                We use two tanks, each with its own job. One removes the iron and
                sulfur. The next filters the water clean, before any of it reaches a
                softener or your plumbing. Trying to do both jobs in one tank is how
                well systems fail.
              </p>
            </div>
            <div className="rounded-[4px] bg-white p-8">
              <h3 className="text-xl font-semibold">The right filter for your water</h3>
              <p className="mt-3 text-sm leading-relaxed text-zinc-600">
                A little iron, a lot of iron, and a sulfur smell each need a different
                filter inside the tank. We size and load your system from your free
                water test, not from a catalog default.
              </p>
            </div>
            <div className="rounded-[4px] bg-white p-8">
              <h3 className="text-xl font-semibold">Built around your whole setup</h3>
              <p className="mt-3 text-sm leading-relaxed text-zinc-600">
                Well treatment has to work with your pump, your pressure tank, and
                your water flow. We design around the gear you already have. So clean
                water does not cost you water pressure.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What's included */}
      <section className="section-padding bg-white">
        <div className="container-wide grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="section-label">What&apos;s included</p>
            <h2 className="text-3xl md:text-4xl font-semibold mt-3">
              Every well water system includes
            </h2>
            <span className="waterline mt-5" aria-hidden="true" />
            <ul className="mt-8 space-y-4">
              {[
                'Free in-home well water test before any quote',
                'Two-tank iron and sulfur removal sized to your results',
                'A grit filter to protect the system and your plumbing',
                'Free professional install at your well line',
                'Lifetime warranty on your system, in writing',
                'Support after the install: checkups, questions, and adjustments',
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
          <Image
            src="/images/service-testing.jpg"
            alt="Acadian Water Solutions well water testing kit with sample vials showing iron-tinted and clear water"
            width={2000}
            height={1116}
            className="w-full h-auto rounded-[4px]"
          />
        </div>
      </section>

      {/* Service area callout */}
      <section className="section-padding bg-mist">
        <div className="container-wide max-w-4xl">
          <p className="section-label">Where the wells are</p>
          <h2 className="text-3xl md:text-4xl font-semibold mt-3">
            Serving well owners across the parishes
          </h2>
          <span className="waterline mt-5" aria-hidden="true" />
          <p className="mt-7 leading-relaxed text-zinc-600">
            Most of the wells we treat sit outside the city limits. That is across
            Livingston Parish in Walker, Watson, Holden, and the rural areas around
            Denham Springs. And it is through Ascension Parish in Prairieville, St.
            Amant, and Geismar. If your neighborhood is on a well, chances are your
            neighbors are fighting the same iron and sulfur you are.
          </p>
          <p className="mt-4">
            <Link
              href="/services/well-water-treatment-walker-la"
              className="text-primary font-semibold hover:text-primary-dark transition-colors"
            >
              Well water treatment in Walker →
            </Link>
          </p>
        </div>
      </section>

      <Faq items={faqs} title="Well water questions, answered" />
      <CtaSection
        title="Get your well tested for free"
        body="We test for iron, sulfur, how hard your water is, pH, and dissolved solids, right at your tap and explained on the spot. No charge, no pressure, and a straight answer about whether treatment is worth it for your well."
      />
    </>
  )
}
