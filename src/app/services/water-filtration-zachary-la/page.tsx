import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import JsonLd from '@/components/JsonLd'
import PageHero from '@/components/PageHero'
import Faq from '@/components/Faq'
import CtaSection from '@/components/CtaSection'
import { BASE_URL, ogImage, pageUrl, site } from '@/lib/site'

const PATH = '/services/water-filtration-zachary-la'

export const metadata: Metadata = {
  title: { absolute: 'Water Filtration in Zachary, LA | Drinking Water' },
  description:
    'You cannot see what is in your water. Reverse osmosis at the sink for the kids, plus chlorine and grit removal for Zachary homes. Free in-home water test.',
  alternates: { canonical: pageUrl(PATH) },
  openGraph: {
    title: 'Water Filtration in Zachary, LA | Acadian Water Solutions',
    description:
      'Water filtration for Zachary families: reverse osmosis drinking water at the sink, chlorine taste removal, and appliance protection. Free in-home test.',
    url: pageUrl(PATH),
    siteName: site.name,
    images: [ogImage],
    locale: 'en_US',
    type: 'website',
  },
}

const faqs = [
  {
    q: 'What is actually in Zachary tap water?',
    a: 'More than you can see in the glass. City water reaches your Zachary tap carrying the chlorine added to clean it, the byproducts that come with it, and whatever grit the lines shed along the way. In older homes, the aging pipes can add to it. The area typically has decent source water, but that is a starting point, not a guarantee of what reaches your glass. The only way to know your numbers is the free in-home test.',
  },
  {
    q: 'What is the best system for kids’ drinking water?',
    a: 'A reverse osmosis system at the kitchen sink. It polishes the water your family drinks and cooks with down to bottled-water quality, without the bottles. Filling cups and school water bottles comes from the best tap in the house. It installs under the sink, and the free water test confirms what it is starting from.',
  },
  {
    q: 'What does water filtration cost in Zachary?',
    a: 'The Complete Home Package is $4,950 installed, and package pricing can save up to 40% versus buying each system on its own. A reverse osmosis system on its own costs much less than the package. The free in-home water test comes first, so we quote only the gear your water and your goals actually call for, and installation is free either way.',
  },
  {
    q: 'Do you serve Central and Baker too?',
    a: 'Yes. Zachary, Central, and Baker are all regular service area, along with the rural roads in between. Central in particular mixes city-water homes with private wells, and well homes need different gear than anything on this page. The free test sorts that out at your tap before anyone talks systems.',
  },
]

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': `${pageUrl(PATH)}#service`,
  name: 'Water Filtration in Zachary, LA',
  serviceType: 'Drinking water filtration and reverse osmosis installation',
  description:
    'Water filtration for Zachary, Louisiana families: reverse osmosis drinking water at the kitchen sink, whole-house chlorine and sediment filtration, and appliance protection for newer builds.',
  url: pageUrl(PATH),
  provider: { '@id': `${BASE_URL}/#business` },
  areaServed: [
    { '@type': 'City', name: 'Zachary, LA' },
    { '@type': 'City', name: 'Central, LA' },
    { '@type': 'City', name: 'Baker, LA' },
  ],
}

export default function ZacharyFiltrationPage() {
  return (
    <>
      <JsonLd data={serviceSchema} />
      <PageHero
        title="Water Filtration in Zachary, Louisiana"
        intro="Families move to Zachary for the schools, and the water questions follow. What are the kids drinking and bathing in? Why does the tap taste like chlorine? How do you protect the appliances in a newer home? You cannot see chlorine, grit, or what old pipes add in a clear glass. The only way to know what is in your water is to test it, and the in-home test is free."
        crumbs={[
          { name: 'Home', href: '/' },
          { name: 'Services', href: '/services' },
          { name: 'Water Filtration in Zachary', href: PATH },
        ]}
        image="/images/lifestyle-glass.jpg"
        imageAlt="Clear glass of filtered drinking water in a Zachary Louisiana family kitchen"
      />

      {/* Local context — what makes Zachary water Zachary's */}
      <section className="section-padding bg-white">
        <div className="container-wide max-w-4xl">
          <p className="section-label">Zachary water, honestly</p>
          <h2 className="text-3xl md:text-4xl font-semibold mt-3">
            What is in the water your kids drink and bathe in?
          </h2>
          <span className="waterline mt-5" aria-hidden="true" />
          <p className="mt-7 leading-relaxed text-zinc-600">
            The area typically has decent source water, but that is a starting point,
            not a guarantee of what reaches your glass. Between the treatment plant and
            your kitchen, the water picks up chlorine used to clean it, the byproducts
            that come with it, and grit from the lines. In an older home, the aging
            pipes add to it. None of that shows up in a clear glass. That is exactly
            why families here ask us to test before they decide.
          </p>
          <p className="mt-5 leading-relaxed text-zinc-600">
            The sink is where it matters most. When the kids fill water bottles for
            school, parents want that tap to be the best water in the house. A reverse
            osmosis system under the kitchen sink delivers it: clean, crisp drinking
            water with no pantry full of plastic bottles. The chlorine taste that
            follows city water through the pipes is the complaint most people want
            gone, and a carbon filter takes it out at the tap or across the whole
            house.
          </p>
          <p className="mt-5 leading-relaxed text-zinc-600">
            The other Zachary pattern is newer homes. Subdivisions like Americana
            filled up with recent builds and recent appliances. A filter plus a
            softener is how a tankless heater and a new dishwasher stay new. Hard-water
            minerals leave scale over years of hot-water cycles, so protecting a house
            full of new gear is more a when than an if. A free hardness test tells you
            where your home stands.
          </p>
        </div>
      </section>

      {/* What we install locally */}
      <section className="section-padding bg-mist">
        <div className="container-wide grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="section-label">The fix</p>
            <h2 className="text-3xl md:text-4xl font-semibold mt-3">
              Drinking water first, whole house when it earns it
            </h2>
            <span className="waterline mt-5" aria-hidden="true" />
            <ul className="mt-8 space-y-4">
              {[
                'Free in-home water test for chlorine, iron, and how hard the water is, right at your tap',
                'Tankless reverse osmosis at the kitchen sink for drinking and cooking water',
                'Whole-house carbon filter for chlorine taste and smell in every shower',
                'Scale protection for tankless heaters and appliances in newer homes',
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
              The drinking-water setup most Zachary families start with is covered in
              depth on the{' '}
              <Link
                href="/services/reverse-osmosis-system-baton-rouge-la"
                className="text-primary font-semibold hover:text-primary-dark transition-colors"
              >
                reverse osmosis drinking water
              </Link>{' '}
              page.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <Link href="/contact" className="btn-splash">Book a free Zachary water test</Link>
              <a href={`tel:${site.phoneRaw}`} className="btn-outline-ink">
                Call {site.phoneDisplay}
              </a>
            </div>
          </div>
          <Image
            src="/images/service-ro.jpg"
            alt="Tankless reverse osmosis drinking water system at a kitchen sink in Zachary Louisiana"
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
            Also serving Central, Baker &amp; northern East Baton Rouge
          </h2>
          <span className="waterline mt-5" aria-hidden="true" />
          <p className="mt-7 leading-relaxed text-zinc-600">
            Central and Baker get the same test-first treatment as Zachary. The rural
            parts of northern East Baton Rouge Parish also hold private wells, and well
            water is its own world: iron stains and a sulfur smell instead of chlorine
            taste. We treat wells across the region, and the deepest local write-up
            lives on our Walker page.
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

      <Faq items={faqs} title="Zachary water filtration questions" />
      <CtaSection
        title="Get your Zachary water tested for free"
        body="We test at your kitchen tap and show you the numbers on the spot, so you know what is really in the water your family drinks and bathes in. You cannot see it in the glass, so the only way to know is to measure it. The test is free."
      />
    </>
  )
}
