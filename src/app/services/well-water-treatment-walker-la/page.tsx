import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import JsonLd from '@/components/JsonLd'
import PageHero from '@/components/PageHero'
import Faq from '@/components/Faq'
import CtaSection from '@/components/CtaSection'
import { BASE_URL, ogImage, pageUrl, site } from '@/lib/site'

const PATH = '/services/well-water-treatment-walker-la'

export const metadata: Metadata = {
  title: { absolute: 'Well Water Treatment in Walker, LA | Iron & Sulfur' },
  description:
    'Orange stains and a rotten-egg smell from your Walker well? We pull out the iron and sulfur. Free well water test, free install across Livingston Parish.',
  alternates: { canonical: pageUrl(PATH) },
  openGraph: {
    title: 'Well Water Treatment in Walker, LA | Acadian Water Solutions',
    description:
      'Iron & sulfur removal for private wells in Walker, Watson & Holden. Free well water testing and free installation.',
    url: pageUrl(PATH),
    siteName: site.name,
    images: [ogImage],
    locale: 'en_US',
    type: 'website',
  },
}

const faqs = [
  {
    q: 'Why is well water around Walker so high in iron?',
    a: 'The shallow aquifers under Livingston Parish run high in dissolved iron and manganese. USGS groundwater studies of the parish have documented that pattern. Wells around Walker, Watson, and Holden draw from exactly that water. Orange staining shows up in almost every well home here that has no filter. It is a geology problem, and it has an equipment fix.',
  },
  {
    q: 'Do you actually come out to Walker, or just Baton Rouge?',
    a: 'Walker and the well belt around it are core service area for us, not an afterthought. Most of the wells we treat are in Livingston Parish. The drive from Baton Rouge is part of every well quote at no charge, and so is the free in-home water test.',
  },
  {
    q: 'My neighbor has a filter and still gets stains. Why?',
    a: 'Usually the system was a plain softener or an undersized single tank, not gear matched to the real iron level. Iron heavy enough to stain will overwhelm a system that was never sized for it. We test first, then build the system around your numbers. That is the difference between managing the iron and getting rid of it.',
  },
  {
    q: 'How fast can a well system be installed in Walker?',
    a: 'Once your test is done and the system is picked, installation is usually a single visit at your well line. It is free with the system, and we check the iron and sulfur at your tap before we leave.',
  },
]

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': `${pageUrl(PATH)}#service`,
  name: 'Well Water Treatment in Walker, LA',
  serviceType: 'Well water iron and sulfur removal',
  description:
    'Dual-tank well water treatment for iron, manganese, and hydrogen sulfide for private wells in Walker, Watson, and Holden, Louisiana.',
  url: pageUrl(PATH),
  provider: { '@id': `${BASE_URL}/#business` },
  areaServed: [
    { '@type': 'City', name: 'Walker, LA' },
    { '@type': 'City', name: 'Watson, LA' },
    { '@type': 'City', name: 'Holden, LA' },
  ],
}

export default function WalkerWellPage() {
  return (
    <>
      <JsonLd data={serviceSchema} />
      <PageHero
        title="Well Water Treatment in Walker, Louisiana"
        intro="Walker sits in the middle of the Livingston Parish well belt. Out here, private wells run orange with iron and the shower smells like rotten eggs. We test Walker wells for free and build two-tank systems around what your well actually pulls up."
        crumbs={[
          { name: 'Home', href: '/' },
          { name: 'Services', href: '/services' },
          { name: 'Well Water Treatment in Walker', href: PATH },
        ]}
        image="/images/service-well.jpg"
        imageAlt="Dual tank iron and sulfur well water system installed for Walker Louisiana homes"
      />

      {/* Local context — what makes Walker water Walker's */}
      <section className="section-padding bg-white">
        <div className="container-wide max-w-4xl">
          <p className="section-label">Walker &amp; the well belt</p>
          <h2 className="text-3xl md:text-4xl font-semibold mt-3">
            Why Walker wells stain orange and smell like sulfur
          </h2>
          <span className="waterline mt-5" aria-hidden="true" />
          <p className="mt-7 leading-relaxed text-zinc-600">
            Between Walker, Watson, and Holden, most homes sit outside any city water
            system and pull from private wells. USGS groundwater studies of Livingston
            Parish keep finding iron and manganese above the recommended limits in the
            local aquifers. That is the orange ring in your tub and the dark streaks in
            your washer. It will not clear up on its own, because it is in the ground
            itself.
          </p>
          <p className="mt-5 leading-relaxed text-zinc-600">
            That rotten-egg smell rides along in many of the same wells. It is a sulfur
            gas. It is usually harmless, but it is hard to live with once it takes over
            a hot shower. The good news: both problems are fully treatable. The right
            system turns the iron and sulfur into bits a filter can catch, sized to the
            numbers from your well. Put it at the well line and the smell and stains
            leave every tap at once.
          </p>
          <p className="mt-5 leading-relaxed text-zinc-600">
            Walker grew fast, so plenty of newer subdivisions mix well homes and
            city-water homes street by street. Not sure which one you have? The free
            test answers that too, along with exactly what is in your water either way.
          </p>
        </div>
      </section>

      {/* What we install locally */}
      <section className="section-padding bg-mist">
        <div className="container-wide grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="section-label">The fix</p>
            <h2 className="text-3xl md:text-4xl font-semibold mt-3">
              Dual-tank well systems for Livingston Parish water
            </h2>
            <span className="waterline mt-5" aria-hidden="true" />
            <ul className="mt-8 space-y-4">
              {[
                'Free in-home well test for iron, sulfur, and how hard the water is',
                'A stage that turns dissolved iron and sulfur into bits a filter can catch',
                'A filter tank with media matched to your test results',
                'Grit protection for your pump, pressure tank, and plumbing',
                'Free installation at the well line, one visit for most homes',
                'Lifetime warranty and after-install support from the same local team',
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
            <div className="mt-9 flex flex-wrap gap-4">
              <Link href="/contact" className="btn-splash">Book a free Walker well test</Link>
              <a href={`tel:${site.phoneRaw}`} className="btn-outline-ink">
                Call {site.phoneDisplay}
              </a>
            </div>
          </div>
          <Image
            src="/images/service-testing.jpg"
            alt="Well water test kit comparing iron-tinted and treated clear water samples in Walker Louisiana"
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
            Also serving Watson, Holden &amp; Denham Springs
          </h2>
          <span className="waterline mt-5" aria-hidden="true" />
          <p className="mt-7 leading-relaxed text-zinc-600">
            The same Livingston Parish groundwater runs under Watson and Holden, and we
            treat wells across all of it. Closer to Denham Springs, homes on city water
            face a different problem: the parish&apos;s known brown-water events. That
            calls for a filter instead of well gear, and it has its own page.
          </p>
          <p className="mt-4">
            <Link
              href="/services/water-filtration-denham-springs-la"
              className="text-primary font-semibold hover:text-primary-dark transition-colors"
            >
              Water filtration in Denham Springs →
            </Link>
          </p>
        </div>
      </section>

      <Faq items={faqs} title="Walker well water questions" />
      <CtaSection
        title="Get your Walker well tested for free"
        body="We drive out, test right at your tap, and hand you the numbers with a straight answer. No pressure, no sales script."
      />
    </>
  )
}
