import type { Metadata } from 'next'
import Link from 'next/link'
import JsonLd from '@/components/JsonLd'
import PageHero from '@/components/PageHero'
import Faq from '@/components/Faq'
import CtaSection from '@/components/CtaSection'
import { BASE_URL, ogImage, pageUrl, site } from '@/lib/site'

const PATH = '/services/pool-fill-water-treatment-baton-rouge-la'

export const metadata: Metadata = {
  title: { absolute: 'Pool Fill Water Treatment in Baton Rouge & Livingston LA' },
  description:
    'Brown stains or scale in your pool? The cause is often the water filling it. Acadian tests your pool and your tap water across the Baton Rouge area.',
  alternates: { canonical: pageUrl(PATH) },
  openGraph: {
    title: 'Pool Fill Water Treatment in Baton Rouge, LA | Acadian Water Solutions',
    description:
      'Brown stains or scale in your pool? The cause is often the water filling it. Acadian tests your pool and your tap water across the Baton Rouge area.',
    url: pageUrl(PATH),
    siteName: site.name,
    images: [ogImage],
    locale: 'en_US',
    type: 'website',
  },
}

/** Stain colour is the fastest diagnostic a pool owner can run themselves. */
const stains = [
  {
    colour: 'Brown or orange-brown',
    cause: 'Iron',
    detail:
      'The most common well-fill problem. Chlorine turns dissolved iron into rust, which settles on the plaster. Staining is generally reported from around 0.2 parts per million, and wells often run well above that.',
  },
  {
    colour: 'Water turns brown right after you shock it',
    cause: 'Iron, confirmed',
    detail:
      'Clear water that goes iced-tea brown the moment chlorine hits it is close to a signature for iron. The chlorine oxidised it all at once.',
  },
  {
    colour: 'Black, grey or purple-black',
    cause: 'Manganese',
    detail:
      'Iron’s lesser-known cousin, common in the same Livingston and Ascension groundwater. It stains darker and is removed the same way, provided the system is sized for it.',
  },
  {
    colour: 'White crust at the waterline',
    cause: 'Scale',
    detail:
      'Calcium coming out of solution and depositing on tile and equipment. On a heater it acts as insulation. The Department of Energy puts roughly one-sixteenth of an inch of scale at about a 12% loss of heat transfer efficiency.',
  },
]

const faqs = [
  {
    q: 'Why is my pool water brown?',
    a: 'Usually iron in the water that filled it. A pool concentrates whatever the fill water carries, because water evaporates and minerals stay behind. Chlorine then turns dissolved iron into rust, which stains plaster and can turn the whole pool a tea colour right after you shock it. Staining is generally reported from around 0.2 parts per million of iron, and private wells frequently run several times that. Testing the tap water is what tells you whether that is your cause.',
  },
  {
    q: 'Should I fill my pool through my water softener?',
    a: 'No. Softened water is the wrong water for a pool. The National Plasterers Council advises that fill water sit above 200 parts per million of calcium hardness, and that soft water or reverse osmosis water be bypassed when filling. Water low in calcium pulls calcium out of the plaster itself, which can cause discolouration, a weakened cement binder and a shorter service life for the finish. Filling an entire pool through a residential softener will also exhaust the resin bed. If your hose bib or autofill line sits on the treated side of a softener, it should be moved or bypassed.',
  },
  {
    q: 'Can you remove iron from my water without softening it?',
    a: 'Yes, and that is the right approach for a pool home. Oxidising filter media handle iron, manganese and sulfur while leaving calcium hardness alone. That matters here because the softener that solves scale in the house is the wrong thing on a pool fill line. The two jobs need different equipment, so we test before recommending anything.',
  },
  {
    q: 'Do you clean pools or sell pool chemicals?',
    a: 'No. We do not service pools, remove existing stains, or sell chemicals. We work on the water supply feeding the pool. If your pool already has staining, a pool professional handles the surface, and we deal with the source so it does not come back. Your pool store will test your pool water for free. What generally goes untested is the water going into it.',
  },
  {
    q: 'Is Baton Rouge tap water hard or soft for a pool?',
    a: 'The Baton Rouge area draws from the deep Southern Hills aquifer, which the USGS describes as primarily soft sodium bicarbonate water. For a house that is good news. For a pool it is worth measuring, because water low in calcium is the kind that can go looking for calcium in the plaster. Published figures vary and most of the ones claiming the water is hard come from companies selling softeners, so we would rather measure yours than quote a number at you.',
  },
  {
    q: 'What does the test cost?',
    a: 'The in-home water test is free and there is no obligation to buy. We test the tap water that fills the pool and can look at a pool sample alongside it for comparison. If your water does not need treatment we will tell you that.',
  },
]

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': `${pageUrl(PATH)}#service`,
  name: 'Pool Fill Water Treatment',
  serviceType: 'Pool fill water testing and iron, manganese and sulfur treatment',
  description:
    'Testing and treatment of the household water supply that fills and tops off a swimming pool, including iron, manganese and sulfur removal for well-fed pools in the greater Baton Rouge area.',
  url: pageUrl(PATH),
  provider: { '@id': `${BASE_URL}/#business` },
  areaServed: [
    { '@type': 'AdministrativeArea', name: 'East Baton Rouge Parish, LA' },
    { '@type': 'AdministrativeArea', name: 'Livingston Parish, LA' },
    { '@type': 'AdministrativeArea', name: 'Ascension Parish, LA' },
    { '@type': 'AdministrativeArea', name: 'West Baton Rouge Parish, LA' },
  ],
}

export default function PoolFillWaterBatonRougePage() {
  return (
    <>
      <JsonLd data={serviceSchema} />
      <PageHero
        title="Pool Fill Water Treatment in Baton Rouge, Louisiana"
        intro="Your pool is filled and topped off from the same line that feeds your house. Whatever is in that water ends up in the pool, and it stays there when the water evaporates. If you are fighting brown stains or scale, the cause is often upstream of the pool entirely. We test the water going in."
        crumbs={[
          { name: 'Home', href: '/' },
          { name: 'Services', href: '/services' },
          { name: 'Pool Fill Water Treatment', href: PATH },
        ]}
        image="/images/service-well.jpg"
        imageAlt="Dual tank iron and sulfur removal system that treats pool fill water for a Baton Rouge area home"
      />

      {/* The thesis, stated plainly up front */}
      <section className="section-padding bg-white">
        <div className="container-wide max-w-4xl">
          <p className="section-label">Where pool problems start</p>
          <h2 className="text-3xl md:text-4xl font-bold mt-3 tracking-[-0.015em]">
            A pool concentrates whatever fills it.
          </h2>
          <span className="waterline mt-5" aria-hidden="true" />
          <p className="mt-7 text-lg leading-relaxed text-zinc-600">
            Water evaporates. Minerals and metals do not. Every top-off adds a little
            more of whatever your tap carries, and none of it leaves. A pool on
            iron-bearing water slowly becomes an iron concentrator. The
              staining tends to get worse each season rather than better.
          </p>
          <p className="mt-5 text-lg leading-relaxed text-zinc-600">
            Testing the fill water is standard practice in the pool trade, not a
            novelty. It is simply a step most homeowners never get to, because the
            free testing offered at a pool store is testing the pool, not the tap.
          </p>
        </div>
      </section>

      {/* Question-led H2 with a direct first-sentence answer */}
      <section className="section-padding bg-mist">
        <div className="container-wide max-w-4xl">
          <p className="section-label">Read the colour</p>
          <h2 className="text-3xl md:text-4xl font-bold mt-3 tracking-[-0.015em]">
            Why is my pool water brown?
          </h2>
          <span className="waterline mt-5" aria-hidden="true" />
          <p className="mt-7 text-lg leading-relaxed text-zinc-600">
            Almost always iron in the water that filled it. What the stain looks like
            narrows the cause down quickly, and it is the fastest check you can run
            yourself before anyone comes out.
          </p>
          <dl className="mt-10 space-y-7">
            {stains.map((s) => (
              <div key={s.colour} className="border-l-2 border-primary pl-5">
                <dt className="text-xl font-bold">{s.colour}</dt>
                <dd className="mt-1">
                  <span className="text-[15px] font-bold text-primary">{s.cause}</span>
                  <p className="mt-2 leading-relaxed text-zinc-600">{s.detail}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* The bypass warning. Deliberately before anything we sell. */}
      <section className="section-padding bg-ink">
        <div className="container-wide max-w-4xl">
          <p className="section-label text-accent-light">Read this before you buy anything</p>
          <h2 className="text-3xl md:text-4xl font-bold mt-3 text-white tracking-[-0.015em]">
            A water softener should not fill your pool.
          </h2>
          <span className="waterline mt-5" aria-hidden="true" />
          <p className="mt-7 text-lg leading-relaxed text-zinc-300">
            This is the part most people selling water equipment leave out. A softener
            is the right answer for scale inside your house. It is the wrong water for
            a pool.
          </p>
          <p className="mt-5 leading-relaxed text-zinc-300">
            The National Plasterers Council advises that pool fill water sit above 200
            parts per million of calcium hardness, and that soft water and reverse
            osmosis water be bypassed when filling. Water that low in calcium does not
            stay low for long. It pulls calcium out of the plaster instead, and the
            damage ranges from discolouration to a weakened cement binder and a
            shorter service life for the finish.
          </p>
          <p className="mt-5 leading-relaxed text-zinc-300">
            So the first thing worth checking in a pool home is plumbing, not
            equipment: whether the hose bib or autofill line sits on the treated side
            of the softener. If it does, it should be moved or bypassed. That costs
            you a plumbing change, not a system.
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

      {/* What we do, and the honest limits */}
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
                  'A look at a pool sample alongside it, so you can compare the two',
                  'Iron, manganese and sulfur filtration on the house supply where the test calls for it',
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
                  'Removing staining that is already on the plaster',
                  'Resurfacing, repairs or equipment work on the pool itself',
                ].map((x) => (
                  <li key={x} className="flex gap-3">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-zinc-300 shrink-0" aria-hidden="true" />
                    {x}
                  </li>
                ))}
              </ul>
              <p className="mt-5 text-[15px] leading-relaxed text-zinc-600">
                If there is staining on the surface already, a pool professional deals
                with the plaster. We deal with the water so it does not come back.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Two tracks: city water vs well */}
      <section className="section-padding bg-mist">
        <div className="container-wide max-w-4xl">
          <p className="section-label">Two different starting points</p>
          <h2 className="text-3xl md:text-4xl font-bold mt-3 tracking-[-0.015em]">
            City water and well water are not the same problem.
          </h2>
          <span className="waterline mt-5" aria-hidden="true" />
          <div className="mt-10 space-y-8">
            <div>
              <h3 className="text-xl font-bold">On the public supply</h3>
              <p className="mt-3 leading-relaxed text-zinc-600">
                The Baton Rouge area draws from the deep Southern Hills aquifer, which
                the USGS describes as primarily soft sodium bicarbonate water. Soft
                water is easy on a house. On a pool it is worth measuring, because
                water low in calcium is exactly the kind that goes looking for calcium
                in the plaster. That is a reason to test before you fill, not a reason
                to panic.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold">On a private well</h3>
              <p className="mt-3 leading-relaxed text-zinc-600">
                Wells across Livingston and Ascension Parish commonly carry iron,
                manganese and sulfur. That is the classic brown-stain pool, and it is
                the case where treating the supply makes the most difference. The
                filtration that handles it removes iron and manganese without stripping
                the calcium the plaster needs.
              </p>
              <Link
                href="/services/well-water-treatment-baton-rouge-la"
                className="mt-3 inline-block text-[15px] font-bold text-primary underline underline-offset-2"
              >
                Well water treatment
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Service area */}
      <section className="section-padding bg-white">
        <div className="container-wide max-w-4xl">
          <p className="section-label">Where we work</p>
          <h2 className="text-3xl md:text-4xl font-bold mt-3 tracking-[-0.015em]">
            Serving pool homes across the Baton Rouge area
          </h2>
          <span className="waterline mt-5" aria-hidden="true" />
          <p className="mt-7 leading-relaxed text-zinc-600">
            Baton Rouge, Zachary, Central and Baker in East Baton Rouge Parish. Denham
            Springs, Walker and Watson in Livingston Parish. Prairieville, Gonzales,
            St. Amant and Geismar in Ascension Parish. Port Allen in West Baton Rouge
            Parish. If you are on a well in Livingston or Ascension and your pool
            stains, that is the combination we see most.
          </p>
          <p className="mt-6 leading-relaxed text-zinc-600">
            We also serve pool homes around Thibodaux and the bayou parishes, where the
            water arrives from a very different source.{' '}
            <Link
              href="/services/pool-fill-water-treatment-thibodaux-la"
              className="font-bold text-primary underline underline-offset-2"
            >
              Pool fill water treatment in Thibodaux
            </Link>
          </p>
        </div>
      </section>

      <Faq items={faqs} title="Pool fill water questions, answered" />
      <CtaSection
        title="Find out what is filling your pool"
        body="One short visit. We test the tap water that fills your pool, look at a pool sample beside it, and tell you whether the water is your problem. Free, and no obligation to buy."
      />
    </>
  )
}
