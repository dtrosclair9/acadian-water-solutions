import type { Metadata } from 'next'
import Link from 'next/link'
import JsonLd from '@/components/JsonLd'
import PageHero from '@/components/PageHero'
import Faq from '@/components/Faq'
import CtaSection from '@/components/CtaSection'
import { BASE_URL, ogImage, pageUrl, site } from '@/lib/site'

const PATH = '/services/pool-fill-water-treatment-thibodaux-la'

export const metadata: Metadata = {
  title: { absolute: 'Pool Fill Water Treatment in Thibodaux & Lafourche LA' },
  description:
    'Thibodaux pools fill from Bayou Lafourche, and that water changes through the year. We test your fill water and treat the minerals behind scale and drift.',
  alternates: { canonical: pageUrl(PATH) },
  openGraph: {
    title: 'Pool Fill Water Treatment in Thibodaux, LA | Acadian Water Solutions',
    description:
      'Thibodaux pools fill from Bayou Lafourche, and that water changes through the year. We test your fill water and treat the minerals behind scale and drift.',
    url: pageUrl(PATH),
    siteName: site.name,
    images: [ogImage],
    locale: 'en_US',
    type: 'website',
  },
}

const faqs = [
  {
    q: 'Why does my pool chemistry keep drifting?',
    a: 'Because the water filling it is not the same water all year. Thibodaux is supplied from Bayou Lafourche, which is surface water rather than a deep aquifer. The USGS has documented that saltwater periodically intrudes into Bayou Lafourche and the Intracoastal Waterway, raising specific conductance, hardness, and concentrations of calcium, magnesium, sodium, chloride and sulfate. A pool filled from a river gets a moving target in a way a pool filled from an aquifer does not. Testing the tap water alongside the pool is what shows you which way it is moving.',
  },
  {
    q: 'Should I fill my pool through my water softener?',
    a: 'No. The National Plasterers Council advises that pool fill water sit above 200 parts per million of calcium hardness, and that soft water or reverse osmosis water be bypassed when filling. Water low in calcium pulls calcium out of the plaster instead, which can cause discolouration, a weakened cement binder and a shorter service life for the finish. Filling a whole pool through a residential softener will also exhaust the resin bed. If your hose bib or autofill sits on the treated side of a softener, it should be moved or bypassed.',
  },
  {
    q: 'Is the water in Thibodaux hard?',
    a: 'It is harder than Baton Rouge, which draws from a soft deep aquifer, but this is not Texas-grade hard water. Thibodaux is unusual in that two different utilities serve one town, the city system and Lafourche Parish Water District No. 1, so the answer can differ by address. We would rather measure the water at your tap than quote you a parish-wide number, particularly when the figures in circulation mostly come from companies selling softeners.',
  },
  {
    q: 'Does my pool stain from iron here like the wells do up in Livingston?',
    a: 'Usually not, and this is the main difference between the two markets we serve. Private household wells are effectively absent in Lafourche and Terrebonne because the alluvial aquifer carries saltwater, so almost everyone is on the parish supply. Iron staining from well fill water is a Baton Rouge area problem. Down here the story is minerals in treated surface water, scale at the waterline, and chemistry that will not sit still.',
  },
  {
    q: 'Is there something wrong with the water?',
    a: 'No. This is about minerals and plaster, not safety. The utilities serving this area treat and report on their water under state and federal rules. Meeting a drinking water standard and being the ideal water to fill a swimming pool are two different questions, and the second one is simply not something a water system is designed around.',
  },
  {
    q: 'Do you service pools or sell chemicals?',
    a: 'No. We do not clean pools, balance them, sell chemicals or remove staining that is already on the surface. We work on the water supply that feeds the pool. Your local pool store will test your pool water for free. What usually goes untested is the water going into it.',
  },
]

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': `${pageUrl(PATH)}#service`,
  name: 'Pool Fill Water Treatment',
  serviceType: 'Pool fill water testing and mineral treatment',
  description:
    'Testing and treatment of the household water supply that fills and tops off a swimming pool, for homes on treated Bayou Lafourche surface water around Thibodaux and Lafourche Parish.',
  url: pageUrl(PATH),
  provider: { '@id': `${BASE_URL}/#business` },
  areaServed: [
    { '@type': 'AdministrativeArea', name: 'Lafourche Parish, LA' },
    { '@type': 'AdministrativeArea', name: 'Terrebonne Parish, LA' },
  ],
}

export default function PoolFillWaterThibodauxPage() {
  return (
    <>
      <JsonLd data={serviceSchema} />
      <PageHero
        title="Pool Fill Water Treatment in Thibodaux, Louisiana"
        intro="Your pool is filled and topped off from the same line that feeds your house, and around here that line traces back to Bayou Lafourche. Surface water is not the same from month to month, which is why pool chemistry down the bayou so often refuses to sit still. We test the water going in."
        crumbs={[
          { name: 'Home', href: '/' },
          { name: 'Services', href: '/services' },
          { name: 'Pool Fill Water Treatment', href: PATH },
        ]}
        image="/images/service-whole-house.jpg"
        imageAlt="Whole house filtration tank treating pool fill water for a Thibodaux area home"
      />

      {/* The local story — this is what makes the page different, not the city name */}
      <section className="section-padding bg-white">
        <div className="container-wide max-w-4xl">
          <p className="section-label">Where your water comes from</p>
          <h2 className="text-3xl md:text-4xl font-bold mt-3 tracking-[-0.015em]">
            Your pool is filled from a bayou, not an aquifer.
          </h2>
          <span className="waterline mt-5" aria-hidden="true" />
          <p className="mt-7 text-lg leading-relaxed text-zinc-600">
            Bayou Lafourche is dammed off from the Mississippi and pumped in at
            Donaldsonville, and it supplies drinking water to more than 300,000 people
            across four parishes. Thibodaux is unusual even within that: two separate
            utilities serve one town, the city&apos;s own plant and Lafourche Parish
            Water District No. 1. Which one feeds your house depends on your address.
          </p>
          <p className="mt-5 text-lg leading-relaxed text-zinc-600">
            None of that is a problem for drinking water. It matters for a pool because
            surface water changes. An aquifer delivers roughly the same water in March
            and September. A bayou does not.
          </p>
        </div>
      </section>

      {/* Question-led, direct answer first */}
      <section className="section-padding bg-mist">
        <div className="container-wide max-w-4xl">
          <p className="section-label">The drift</p>
          <h2 className="text-3xl md:text-4xl font-bold mt-3 tracking-[-0.015em]">
            Why does my pool chemistry keep drifting?
          </h2>
          <span className="waterline mt-5" aria-hidden="true" />
          <p className="mt-7 text-lg leading-relaxed text-zinc-600">
            Because the water you are topping off with is not constant. The USGS has
            documented that saltwater periodically intrudes into Bayou Lafourche and
            the Intracoastal Waterway, raising conductance, hardness, and the
            concentrations of calcium, magnesium, sodium, chloride and sulfate.
          </p>
          <p className="mt-5 leading-relaxed text-zinc-600">
            A pool concentrates all of it. Water evaporates and minerals stay, so every
            top-off through a dry spell leaves a little more behind than the one before.
            That is why a pool here can be balanced in spring and fighting you by late
            summer without anything about the pool itself having changed.
          </p>
          <div className="mt-10 space-y-7">
            <div className="border-l-2 border-primary pl-5">
              <h3 className="text-xl font-bold">Scale at the waterline</h3>
              <p className="mt-2 leading-relaxed text-zinc-600">
                The white crust on tile is calcium coming out of solution. Mineral-rich
                top-off water gives you less margin before it starts.
              </p>
            </div>
            <div className="border-l-2 border-primary pl-5">
              <h3 className="text-xl font-bold">Scale inside the heater</h3>
              <p className="mt-2 leading-relaxed text-zinc-600">
                On a heat exchanger, scale behaves like insulation. The Department of
                Energy puts roughly one-sixteenth of an inch at about a 12% loss of
                heat transfer efficiency, and it shortens the life of the unit.
              </p>
            </div>
            <div className="border-l-2 border-primary pl-5">
              <h3 className="text-xl font-bold">Chemistry that will not hold</h3>
              <p className="mt-2 leading-relaxed text-zinc-600">
                Balance is a moving target when the water you add keeps changing.
                Knowing what your fill water is actually carrying is what turns that
                from guesswork into arithmetic.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bypass warning */}
      <section className="section-padding bg-ink">
        <div className="container-wide max-w-4xl">
          <p className="section-label text-accent-light">Read this before you buy anything</p>
          <h2 className="text-3xl md:text-4xl font-bold mt-3 text-white tracking-[-0.015em]">
            A water softener should not fill your pool.
          </h2>
          <span className="waterline mt-5" aria-hidden="true" />
          <p className="mt-7 text-lg leading-relaxed text-zinc-300">
            If harder water is your complaint, a softener is a reasonable answer for
            the house. It is the wrong water for the pool, and this is the part most
            people selling water equipment leave out.
          </p>
          <p className="mt-5 leading-relaxed text-zinc-300">
            The National Plasterers Council advises that pool fill water sit above 200
            parts per million of calcium hardness, and that soft water and reverse
            osmosis water be bypassed when filling. Water that low in calcium pulls it
            out of the plaster instead. The damage ranges from discolouration to a
            weakened cement binder and a shorter service life for the finish.
          </p>
          <p className="mt-5 leading-relaxed text-zinc-300">
            So in a pool home the first thing worth checking is the plumbing, not the
            equipment: whether the hose bib or autofill sits on the treated side. If it
            does, it should be moved or bypassed.
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <Link href="/contact" className="btn-splash">
              Book a free water test
            </Link>
            <Link
              href="/services/water-softener-installation-baton-rouge-la"
              className="border-2 border-white text-white font-bold px-6 py-3.5 rounded-[2px] hover:bg-white hover:text-ink transition-colors inline-block"
            >
              How softeners work
            </Link>
          </div>
        </div>
      </section>

      {/* Scope */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <p className="section-label">What we actually do</p>
          <h2 className="text-3xl md:text-4xl font-bold mt-3 tracking-[-0.015em]">
            We treat the supply, not the pool.
          </h2>
          <span className="waterline mt-5" aria-hidden="true" />
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
              <h3 className="text-xl font-bold">What is included</h3>
              <ul className="mt-4 space-y-3 text-[15px] leading-relaxed text-zinc-600">
                {[
                  'A free in-home test of the tap water that fills your pool',
                  'A look at a pool sample beside it, so you can compare the two',
                  'Filtration on the house supply where the test calls for it',
                  'Checking whether your fill line sits on the treated or untreated side of existing equipment',
                  'An itemized written quote before anything is scheduled',
                ].map((x) => (
                  <li key={x} className="flex gap-3">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-accent shrink-0" aria-hidden="true" />
                    {x}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold">What we do not do</h3>
              <ul className="mt-4 space-y-3 text-[15px] leading-relaxed text-zinc-600">
                {[
                  'Pool cleaning or weekly pool service',
                  'Selling pool chemicals or balancing your pool',
                  'Removing staining or scale already on the surface',
                  'Resurfacing, repairs or equipment work on the pool itself',
                ].map((x) => (
                  <li key={x} className="flex gap-3">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-zinc-300 shrink-0" aria-hidden="true" />
                    {x}
                  </li>
                ))}
              </ul>
              <p className="mt-5 text-[15px] leading-relaxed text-zinc-600">
                Pool builders and pool service companies handle the pool. We handle the
                water going into it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service area */}
      <section className="section-padding bg-mist">
        <div className="container-wide max-w-4xl">
          <p className="section-label">Where we work</p>
          <h2 className="text-3xl md:text-4xl font-bold mt-3 tracking-[-0.015em]">
            Serving pool homes across the bayou parishes
          </h2>
          <span className="waterline mt-5" aria-hidden="true" />
          <p className="mt-7 leading-relaxed text-zinc-600">
            Thibodaux, Raceland, Lockport and Larose in Lafourche Parish. Houma, Bayou
            Cane, Gray, Schriever, Bourg and Chauvin in Terrebonne Parish. Most of this
            area draws from the same bayou, so the fill water story is broadly the same
            whichever side of the parish line you are on.
          </p>
          <p className="mt-6 leading-relaxed text-zinc-600">
            Up around Baton Rouge the water arrives from a deep aquifer instead, and
            private wells change the picture again.{' '}
            <Link
              href="/services/pool-fill-water-treatment-baton-rouge-la"
              className="font-bold text-primary underline underline-offset-2"
            >
              Pool fill water treatment in Baton Rouge
            </Link>
          </p>
        </div>
      </section>

      <Faq items={faqs} title="Thibodaux pool water questions, answered" />
      <CtaSection
        title="Find out what is filling your pool"
        body="One short visit. We test the tap water that fills your pool, look at a pool sample beside it, and tell you whether the water is your problem. Free, and no obligation to buy."
      />
    </>
  )
}
