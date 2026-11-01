import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import JsonLd from '@/components/JsonLd'
import PageHero from '@/components/PageHero'
import Faq from '@/components/Faq'
import CtaSection from '@/components/CtaSection'
import { BASE_URL, ogImage, pageUrl, site } from '@/lib/site'

const PATH = '/services/water-filtration-gonzales-la'

export const metadata: Metadata = {
  title: { absolute: 'Water Filtration in Gonzales, LA | City & Well Water' },
  description:
    'Gonzales homes split between two utilities and private wells. Straight answers and whole-house filtration for chlorine taste, iron, and well water. Free test.',
  alternates: { canonical: pageUrl(PATH) },
  openGraph: {
    title: 'Water Filtration in Gonzales, LA | Acadian Water Solutions',
    description:
      'Whole-house water filtration for Gonzales, St. Amant & Geismar. Straight answers on city water, well iron, and what filtration actually solves. Free test.',
    url: pageUrl(PATH),
    siteName: site.name,
    images: [ogImage],
    locale: 'en_US',
    type: 'website',
  },
}

const faqs = [
  {
    q: 'How do I know what is in my Gonzales water?',
    a: 'You test it. Plenty of Gonzales homeowners wonder what is really in their tap water. The honest answer is that you cannot know by looking, guessing, or reading a utility-wide report. Chlorine from cleaning the water, the byproducts it leaves, grit from the lines, how hard the water is, and whatever the pipes in an older home add are all invisible in a clear glass. We do not guess, we test, right at your faucet and for free. On a private well, the test also checks for the iron and manganese that show up across the parish.',
  },
  {
    q: 'What about iron in Ascension Parish wells?',
    a: 'Iron is the known, recurring problem in local well water. USGS studies of Ascension Parish groundwater flag iron and manganese as the standout concerns in the Norco aquifer, which feeds hundreds of home wells across the parish. If your home is on a well and you see orange stains in tubs and toilets or dark streaks in laundry, that is the pattern. It is treatable with the right gear, sized to your test numbers.',
  },
  {
    q: 'What does water filtration cost in Gonzales?',
    a: 'The Complete Home Package is $4,950 installed, and package pricing can save up to 40% versus buying each system on its own. Single systems cost less. A well home usually needs different gear than a home on city water. The free in-home water test comes first, so the quote matches what is really in your water, and installation is free either way.',
  },
  {
    q: 'Do you cover St. Amant and Geismar too?',
    a: 'Yes. Gonzales, St. Amant, Geismar, and the roads between them are all regular service area. That stretch includes plenty of the well homes where iron treatment matters most. The free water test travels anywhere in Ascension Parish at no charge.',
  },
]

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': `${pageUrl(PATH)}#service`,
  name: 'Water Filtration in Gonzales, LA',
  serviceType: 'Whole-house water filtration and well water treatment',
  description:
    'Whole-house water filtration for Gonzales, Louisiana homes on municipal water and private wells, covering chlorine taste, sediment, and USGS-documented iron in Ascension Parish well water.',
  url: pageUrl(PATH),
  provider: { '@id': `${BASE_URL}/#business` },
  areaServed: [
    { '@type': 'City', name: 'Gonzales, LA' },
    { '@type': 'City', name: 'St. Amant, LA' },
    { '@type': 'City', name: 'Geismar, LA' },
    { '@type': 'City', name: 'Prairieville, LA' },
  ],
}

export default function GonzalesFiltrationPage() {
  return (
    <>
      <JsonLd data={serviceSchema} />
      <PageHero
        title="Water Filtration in Gonzales, Louisiana"
        intro="Gonzales water depends on your address. Two city providers serve different parts of town, and the parish edges run on private wells. We test first, tell you straight which one you have, and only then talk gear."
        crumbs={[
          { name: 'Home', href: '/' },
          { name: 'Services', href: '/services' },
          { name: 'Water Filtration in Gonzales', href: PATH },
        ]}
        image="/images/lifestyle-home.jpg"
        imageAlt="South Louisiana brick home in Gonzales served by whole house water filtration"
      />

      {/* Local context — what makes Gonzales water Gonzales' */}
      <section className="section-padding bg-white">
        <div className="container-wide max-w-4xl">
          <p className="section-label">Gonzales water, honestly</p>
          <h2 className="text-3xl md:text-4xl font-semibold mt-3">
            Two utilities, a well belt, and one honest answer
          </h2>
          <span className="waterline mt-5" aria-hidden="true" />
          <p className="mt-7 leading-relaxed text-zinc-600">
            Ask two neighbors in Gonzales about their water and you can get two
            different answers. They may literally have different water. Depending on
            the address, homes here run on the city&apos;s own utility or on the parish
            system, each with its own wells and treatment. Ride out toward St. Amant or
            the acreage past the interstate and a third kind shows up: private wells
            pulling straight from the ground.
          </p>
          <p className="mt-5 leading-relaxed text-zinc-600">
            Plenty of Gonzales families wonder what is really coming out of their tap.
            It is a fair question, and no one can settle it by looking or guessing.
            City water still reaches your home carrying the chlorine used to clean it,
            the byproducts that come with it, grit from the lines, and whatever the
            pipes in an older home add. None of that shows up in a clear glass. We do
            not guess, we test. A reading at your own faucet trades the rumor for a
            real number.
          </p>
          <p className="mt-5 leading-relaxed text-zinc-600">
            The wells are a different story. USGS studies of Ascension Parish
            groundwater flag iron and manganese as the main concerns in the Norco
            aquifer, which feeds hundreds of home wells across the parish. Well homes
            around Gonzales see it as orange tub rings and stained laundry. That needs
            real treatment gear, not a pitcher filter. Either way, the free test tells
            you which water you have before you spend a dollar.
          </p>
        </div>
      </section>

      {/* What we install locally */}
      <section className="section-padding bg-mist">
        <div className="container-wide grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="section-label">The fix</p>
            <h2 className="text-3xl md:text-4xl font-semibold mt-3">
              Filtration matched to your side of Gonzales
            </h2>
            <span className="waterline mt-5" aria-hidden="true" />
            <ul className="mt-8 space-y-4">
              {[
                'Free in-home water test for iron, chlorine, and how hard the water is, right at your tap',
                'Whole-house carbon filter for chlorine taste and smell on city water',
                'Grit filter that protects water heaters, fixtures, and appliances',
                'Iron and manganese treatment for well homes at the parish edges',
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
              City-water homes can dig deeper on the{' '}
              <Link
                href="/services/whole-house-water-filtration-baton-rouge-la"
                className="text-primary font-semibold hover:text-primary-dark transition-colors"
              >
                whole-house water filtration
              </Link>{' '}
              page; well homes should start with{' '}
              <Link
                href="/services/well-water-treatment-baton-rouge-la"
                className="text-primary font-semibold hover:text-primary-dark transition-colors"
              >
                well water treatment
              </Link>
              .
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <Link href="/contact" className="btn-splash">Book a free Gonzales water test</Link>
              <a href={`tel:${site.phoneRaw}`} className="btn-outline-ink">
                Call {site.phoneDisplay}
              </a>
            </div>
          </div>
          <Image
            src="/images/service-whole-house.jpg"
            alt="Whole house water filtration tank system installed for a Gonzales Louisiana home"
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
            Also serving St. Amant, Geismar &amp; Prairieville
          </h2>
          <span className="waterline mt-5" aria-hidden="true" />
          <p className="mt-7 leading-relaxed text-zinc-600">
            St. Amant and Geismar get the same test-first coverage as Gonzales, wells
            included. Up the corridor in Prairieville, the story is new construction:
            softener loops in new garages and tankless heaters that need scale
            protection from day one. That page covers it.
          </p>
          <p className="mt-4">
            <Link
              href="/services/water-softener-prairieville-la"
              className="text-primary font-semibold hover:text-primary-dark transition-colors"
            >
              Water softener installation in Prairieville →
            </Link>
          </p>
        </div>
      </section>

      <Faq items={faqs} title="Gonzales water filtration questions" />
      <CtaSection
        title="Get your Gonzales water tested for free"
        body="City utility, parish system, or private well, we test at your tap and show you the numbers on the spot. You cannot see what is in your water, so stop wondering and measure it. We do not guess, we test."
      />
    </>
  )
}
