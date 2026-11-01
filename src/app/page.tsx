import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import JsonLd from '@/components/JsonLd'
import HeroSchematic from '@/components/HeroSchematic'
import Faq from '@/components/Faq'
import CtaSection from '@/components/CtaSection'
import SampleReport from '@/components/SampleReport'
import SystemSpec from '@/components/SystemSpec'
import WaterSymptomChecker from '@/components/WaterSymptomChecker'
import { BASE_URL, ogImage, site, cityPages } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Water Filtration in Baton Rouge, LA | Acadian Water',
  description:
    'Whole-house filtration, water softeners, reverse osmosis & well water treatment for the Baton Rouge area. Start with a free in-home water test.',
  alternates: { canonical: BASE_URL },
  other: {
    'geo.region': 'US-LA',
    'geo.placename': 'Baton Rouge',
    'geo.position': `${site.geo.lat};${site.geo.lng}`,
    ICBM: `${site.geo.lat}, ${site.geo.lng}`,
  },
  openGraph: {
    title: 'Acadian Water Solutions | Water Filtration in Baton Rouge, LA',
    description:
      'Whole-house filtration, water softeners, reverse osmosis & well water treatment for the Baton Rouge area. Start with a free in-home water test.',
    url: BASE_URL,
    siteName: site.name,
    images: [ogImage],
    locale: 'en_US',
    type: 'website',
  },
}


// Four-step sequence, section 6. Copy by Codex.
const steps = [
  {
    name: 'Test',
    text: 'Start with a free in-home water test. See the results on the spot, with no obligation to buy.',
  },
  {
    name: 'Written recommendation',
    text: 'Review the recommended equipment and an itemized written quote. The lifetime warranty comes in writing with the quote, before installation is scheduled.',
  },
  {
    name: 'Installation',
    text: 'The selected equipment is connected at the agreed location. Installation is free with every system. Acadian Water Solutions is insured.',
  },
  {
    name: 'Verification',
    text: 'We check connections for leaks and confirm system operation. Treatment checks focus on the issue the equipment was selected to address; they are not a complete water-safety assessment.',
  },
]

// Section 7. Seven FAQs, copy by Codex.
const homeFaqs = [
  {
    q: 'What does the free water test cover?',
    a: 'The free in-home water test checks hardness, iron, chlorine and more, with results on the spot. There is no obligation to buy. It helps guide equipment recommendations. It is not a full laboratory analysis or a declaration that water is safe to drink. Concerns about bacteria or contaminants outside its scope require separate testing.',
  },
  {
    q: 'Does city water need the same treatment as well water?',
    a: 'No. Baton Rouge city water comes from the deep Southern Hills Aquifer, and chlorine is added to protect the water supply. Meeting safety standards does not mean everyone will like the taste, and your home\u2019s own plumbing can affect water at the tap. Treatment cannot repair aging pipes. Private wells need their own testing. Iron or sulfur odor may call for treatment that a city-water home does not need.',
  },
  {
    q: 'What does a system cost installed?',
    a: 'The Complete Home Package includes a softener, tankless reverse osmosis and an alkaline filter for $4,950 installed. Single systems cost less than the package, priced after the test. Installation is free with every system. Additional well water treatment is separate from the package. Your itemized quote is in writing before installation is scheduled, and consumables and any chargeable service are ongoing costs.',
  },
  {
    q: 'Will treatment affect my water pressure?',
    a: 'It can. Equipment sizing and condition affect flow through a treatment system. Your starting pressure and the amount of water used at once both matter when selecting equipment. An undersized system or neglected maintenance can restrict flow.',
  },
  {
    q: 'What does my home need for installation?',
    a: 'Accessible plumbing and enough space for the selected equipment, including room for maintenance. Drain and power requirements vary by system. Whole-house equipment connects near the incoming water line, and reverse osmosis equipment usually goes under the kitchen sink. The location and connection requirements need to be checked before scheduling installation.',
  },
  {
    q: 'What upkeep will I need to handle?',
    a: 'A softener needs salt replenished. Filtration and reverse osmosis equipment need replacement filters, and the reverse osmosis membrane also needs periodic replacement. Follow the maintenance requirements for the selected equipment. Your water conditions and usage affect replacement needs and ongoing costs.',
  },
  {
    q: 'What does the lifetime warranty cover, and how does service work?',
    a: 'The lifetime warranty is put in writing with the quote. Read those terms for what is covered, any exclusions and maintenance requirements. Do not assume every part or service visit is included. Contact us if the equipment needs attention. Any service charge depends on the work needed and the written warranty coverage.',
  },
]

// Section 4. Three equipment categories, each naming its limits. Copy by Codex.
const options = [
  {
    name: 'Whole-house filtration',
    href: '/services/whole-house-water-filtration-baton-rouge-la',
    image: '/images/product-whole-house.png',
    alt: 'Whole-house water filtration tank installed by Acadian Water Solutions',
    forWhat: 'For chlorine taste or sediment affecting water throughout the home. The filter must be selected for what you want to reduce.',
    limit: 'A sediment filter and a chlorine filter do different jobs. Standard filtration does not soften hard water, and a filter cannot remove something that enters the water farther along your plumbing.',
  },
  {
    name: 'Water softeners',
    href: '/services/water-softener-installation-baton-rouge-la',
    image: '/images/product-softener.png',
    alt: 'Water softener and brine tank installed by Acadian Water Solutions',
    forWhat: 'For hard-water scale on fixtures and surfaces. A softener removes the hardness minerals that cause buildup.',
    limit: 'Softening alone does not disinfect water, and it should not be assumed to handle a well\u2019s iron or sulfur problem. Treatment must match the water and the equipment\u2019s capabilities.',
  },
  {
    name: 'Reverse osmosis drinking water',
    href: '/services/reverse-osmosis-system-baton-rouge-la',
    image: '/images/product-ro.png',
    alt: 'Tankless reverse osmosis drinking water system by Acadian Water Solutions',
    forWhat: 'For treating water at a drinking-water tap. Reverse osmosis reduces dissolved substances, with specific reductions depending on the system.',
    limit: 'It treats the water delivered through that system, not every tap in the house. Filters and the membrane need replacement according to the equipment\u2019s requirements.',
  },
]

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': `${BASE_URL}/#business`,
  name: site.name,
  url: BASE_URL,
  telephone: site.phoneRaw,
  email: site.email,
  image: `${BASE_URL}/images/og-image.jpg`,
  logo: `${BASE_URL}/images/logo-full.jpg`,
  description:
    'Water treatment company in Baton Rouge, Louisiana. Whole-house water filtration, water softeners, reverse osmosis drinking water, well water treatment, and free in-home water testing.',
  address: {
    '@type': 'PostalAddress',
    addressLocality: site.city,
    addressRegion: site.state,
    addressCountry: 'US',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: site.geo.lat,
    longitude: site.geo.lng,
  },
  areaServed: site.areaServed.map((c) => ({ '@type': 'City', name: `${c}, LA` })),
  priceRange: '$$',
}

const webSiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${BASE_URL}/#website`,
  url: BASE_URL,
  name: site.name,
  publisher: { '@id': `${BASE_URL}/#business` },
}

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How Acadian Water Solutions treats your water',
  description:
    'From a free in-home water test to a professionally installed, supported water treatment system in the greater Baton Rouge area.',
  step: steps.map((s, i) => ({
    '@type': 'HowToStep',
    position: i + 1,
    name: s.name,
    text: s.text,
  })),
}

export default function HomePage() {
  return (
    <>
      <JsonLd data={[localBusinessSchema, webSiteSchema, howToSchema]} />

      {/* Hero — 55/45 split: copy left, treatment schematic right.
          The illustration replaces a photo deliberately: we have no completed
          installs to photograph, and a generated one would undercut the whole
          "we show you real information" strategy this page is built on. */}
      {/* "Inside the System": the cutaway is the hero, not a lifestyle photo.
          Copy is unchanged — only the presentation differs. */}
      <section className="bg-white">
        <div className="container-wide pt-14 pb-14 md:pt-14 md:pb-14 lg:pt-16 lg:pb-[88px]">
          <div className="grid grid-cols-1 md:grid-cols-[55fr_45fr] lg:grid-cols-12 gap-8 md:gap-6 lg:gap-6 items-center">
            <div className="lg:col-span-7">
              <p className="section-label">Baton Rouge · Thibodaux · Houma &amp; surrounding areas</p>
              <h1 className="mt-5 max-w-[660px]">
                Water treatment for Baton Rouge and Thibodaux homes.
              </h1>
              {/* Two markets, two different water problems. The subhead names
                  both rather than committing the company to the well-water
                  story, which only applies around Baton Rouge. */}
              <p className="mt-6 text-ink/80 leading-relaxed">
                Iron stains, a chlorine smell, scale on the fixtures, or water
                you do not like drinking? Start with a free water test. We
                install filtration, softeners and drinking-water systems across
                the Baton Rouge area and the bayou parishes.
              </p>
              <div className="mt-7 flex flex-col sm:flex-row flex-wrap gap-4">
                <Link href="/contact" className="btn-splash w-full sm:w-auto">
                  Book a free water test
                </Link>
                <a href="#pricing" className="btn-outline-ink w-full sm:w-auto">
                  See installed pricing
                </a>
              </div>
              <p className="mt-6 text-sm text-ink/70">
                Free installation · Lifetime warranty · Insured
              </p>
            </div>
            <div className="lg:col-span-5 lg:order-last flex justify-center">
              <Image
                src="/images/product-well.png"
                alt="Cut-away view of an Acadian Water Solutions dual-tank well water system showing the iron filter and softener media inside"
                width={919}
                height={1400}
                className="w-auto h-[320px] md:h-[380px] lg:h-[500px]"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2 — symptom picker. Voice rule 1: name the problem and the next step. */}
      <section className="section-padding bg-mist">
        <div className="container-wide max-w-5xl">
          <p className="section-label">Start here</p>
          <h2 className="text-3xl md:text-4xl font-bold mt-3 tracking-[-0.015em]">
            Most water problems show up the same few ways.
          </h2>
          <span className="waterline mt-5" aria-hidden="true" />
          <p className="mt-6 text-lg leading-relaxed text-zinc-600 max-w-2xl">
            Orange stains, a rotten egg smell, scale on the shower head. Each one
            usually points somewhere specific. Pick what you are seeing and this
            will tell you the usual cause.
          </p>
          <div className="mt-9">
            <WaterSymptomChecker />
          </div>
        </div>
      </section>

      {/* 3 — replaces the reviews block */}
      <section className="section-padding bg-white">
        <div className="container-wide grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="section-label">Before you commit</p>
            <h2 className="text-3xl md:text-4xl font-bold mt-3 tracking-[-0.015em]">
              See what you get before you buy.
            </h2>
            <span className="waterline mt-5" aria-hidden="true" />
            <p className="mt-6 text-lg leading-relaxed text-zinc-600">
              The free in-home water test gives you results on the spot. If you
              decide to consider treatment, your quote is itemized and in writing
              before any installation is scheduled.
            </p>
            <h3 className="mt-8 text-xl font-bold">Results you can see</h3>
            <p className="mt-2.5 leading-relaxed text-zinc-600">
              The test checks hardness, iron, chlorine and more. The results help
              identify what treatment could address. They do not establish that
              your water is safe to drink or replace a full laboratory analysis.
            </p>
            <h3 className="mt-6 text-xl font-bold">A price you can review</h3>
            <p className="mt-2.5 leading-relaxed text-zinc-600">
              Your quote identifies the recommended equipment and its cost.
              Installation is free with every system. The lifetime warranty is put
              in writing with the quote.
            </p>
            <Link href="/contact" className="btn-splash mt-8">
              Request my free water test
            </Link>
          </div>
          <SampleReport />
        </div>
      </section>

      {/* 4 — the differentiating service */}
      <section className="section-padding bg-ink">
        <div className="container-wide grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="section-label text-accent-light">Private well water</p>
            <h2 className="text-3xl md:text-4xl font-bold mt-3 text-white tracking-[-0.015em]">
              Well water needs its own treatment plan.
            </h2>
            <span className="waterline mt-5" aria-hidden="true" />
            <p className="mt-6 text-lg leading-relaxed text-zinc-300">
              If your well water leaves iron stains or smells like sulfur, start
              with a test. Acadian Water Solutions provides well water treatment
              for homes in Livingston and Ascension parishes.
            </p>
            <p className="mt-4 leading-relaxed text-zinc-300">
              Iron removal and sulfur odor treatment depend on what testing finds.
              Sediment may need separate filtration. One filter may not address
              everything in your water.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-ink/65">
              Private well owners are responsible for arranging their own water
              testing. The free in-home test helps with treatment decisions. It
              does not replace laboratory testing for bacteria and other
              contaminants.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/services/well-water-treatment-baton-rouge-la" className="btn-splash">
                Explore well water treatment
              </Link>
              <Link
                href="/services/well-water-treatment-walker-la"
                className="border-2 border-white text-white font-bold px-6 py-3.5 rounded-[2px] hover:bg-white hover:text-ink transition-colors inline-block"
              >
                Well water in Walker
              </Link>
            </div>
          </div>
          <Image
            src="/images/service-well.jpg"
            alt="Dual tank well water iron and sulfur treatment system by Acadian Water Solutions"
            width={2000}
            height={1116}
            className="w-full h-auto rounded-[4px]"
          />
        </div>
      </section>

      {/* 5 — equipment categories, each with its limits stated */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <p className="section-label">Treatment options</p>
          <h2 className="text-3xl md:text-4xl font-bold mt-3 tracking-[-0.015em]">
            Find the treatment that fits.
          </h2>
          <span className="waterline mt-5" aria-hidden="true" />
          <p className="mt-6 text-lg leading-relaxed text-zinc-600 max-w-2xl">
            Choose equipment for a problem your water actually has. You may need
            one system, or more than one working together.
          </p>
          {/* Open product columns, not cards: thin vertical rules, aligned
              equipment bases, no boxes or shadows. Stacks to full-width rows
              with horizontal dividers below lg. */}
          <div className="mt-12 grid grid-cols-1 lg:grid-cols-3">
            {options.map((o, i) => (
              <article
                key={o.name}
                className={`flex flex-col sm:flex-row lg:flex-col gap-6 sm:gap-8 lg:gap-0 py-8 lg:py-0 lg:px-8 first:lg:pl-0 last:lg:pr-0
                  ${i > 0 ? 'border-t border-ink/15 lg:border-t-0 lg:border-l lg:border-ink/15' : ''}`}
              >
                <div className="flex items-end justify-center shrink-0 h-[220px] lg:h-[280px] sm:w-[180px] lg:w-full">
                  <Image
                    src={o.image}
                    alt={o.alt}
                    width={900}
                    height={1400}
                    className="max-h-full w-auto object-contain"
                  />
                </div>
                <div className="flex flex-col flex-1 lg:mt-7">
                  <h3>{o.name}</h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-ink/80">{o.forWhat}</p>
                  <p className="mt-3 text-[14px] leading-relaxed text-ink/65">{o.limit}</p>
                  <Link
                    href={o.href}
                    className="mt-5 text-[15px] font-semibold text-primary underline underline-offset-2"
                  >
                    Explore {o.name.toLowerCase()}
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 6 — the one substantial navy section: cost */}
      <section id="pricing" className="section-padding bg-ink scroll-mt-24">
        <div className="container-wide">
          <p className="section-label text-accent-light">Pricing and upkeep</p>
          <h2 className="text-3xl md:text-4xl font-bold mt-3 text-white tracking-[-0.015em]">
            Equipment. Installation. Ongoing costs.
          </h2>
          <span className="waterline mt-5" aria-hidden="true" />

          <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="rounded-[4px] bg-white p-8">
              <h3 className="text-xl font-bold">Complete Home Package</h3>
              <p className="mt-3 text-4xl font-extrabold text-ink tabular-nums">$4,950</p>
              <p className="text-[15px] text-ink/70 font-semibold">installed</p>
              <p className="mt-4 leading-relaxed text-zinc-600">
                Softener, tankless reverse osmosis and an alkaline filter. Package
                pricing can save you up to 40% versus buying the systems
                separately. Actual savings depend on the systems compared.
              </p>
              <h4 className="mt-6 text-[13px] font-semibold uppercase tracking-[0.07em] text-ink/70">
                What the package includes
              </h4>
              <ul className="mt-3 space-y-2 text-[15px] text-zinc-700">
                {['Water softener', 'Tankless reverse osmosis', 'Alkaline filter', 'Free installation'].map((x) => (
                  <li key={x} className="flex gap-3">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-accent shrink-0" aria-hidden="true" />
                    {x}
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-[15px] leading-relaxed text-zinc-600">
                Lifetime warranty, put in writing with the quote.
              </p>
              <p className="mt-3 text-[14px] leading-relaxed text-ink/70">
                The package does not include a dedicated iron or sulfur treatment
                system. If your well needs additional treatment equipment, it is
                quoted separately.
              </p>
            </div>

            <div className="grid gap-5 content-start">
              <div className="rounded-[4px] border border-white/20 p-7">
                <h3 className="text-lg font-bold text-white">Need a single system?</h3>
                <p className="mt-2.5 leading-relaxed text-zinc-300 text-[15px]">
                  Single systems cost less than the package. Price after the test.
                  Installation is free with every system.
                </p>
              </div>
              <div className="rounded-[4px] border border-white/20 p-7">
                <h3 className="text-lg font-bold text-white">Consumables</h3>
                <p className="mt-2.5 leading-relaxed text-zinc-300 text-[15px]">
                  Softener salt and replacement filters are ongoing costs,
                  separate from the equipment price. Replacement needs depend on
                  your water use and the equipment selected. Ask about the cost of
                  replacements before choosing a system.
                </p>
              </div>
              <div className="rounded-[4px] border border-white/20 p-7">
                <h3 className="text-lg font-bold text-white">Service</h3>
                <p className="mt-2.5 leading-relaxed text-zinc-300 text-[15px]">
                  Service costs are separate from consumables. Any charge depends
                  on the work needed and the written warranty coverage. The
                  lifetime warranty&apos;s written terms determine what is covered.
                </p>
              </div>
              <Link href="/contact" className="btn-splash text-center">
                Request my free water test
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 7 — replaces the install gallery */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <p className="section-label">Inside your home</p>
          <h2 className="text-3xl md:text-4xl font-bold mt-3 tracking-[-0.015em]">
            Know what goes into your home.
          </h2>
          <span className="waterline mt-5" aria-hidden="true" />
          <p className="mt-6 text-lg leading-relaxed text-zinc-600 max-w-2xl">
            Equipment needs room to operate and room for maintenance. The location
            depends on your plumbing and the system selected.
          </p>

          {/* Layout first (where it goes), then the spec detail (what is inside).
              The schematic moved here from the hero when the hero became a photo. */}
          <div className="mt-12 rounded-[4px] bg-mist p-6 sm:p-10">
            <HeroSchematic className="w-full h-auto max-w-3xl mx-auto" />
          </div>

          <div className="mt-12">
            <SystemSpec />
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-bold">Whole-house equipment</h3>
              <p className="mt-2.5 text-[15px] leading-relaxed text-zinc-600">
                Filtration connects to the incoming water line. A softener also
                needs space for its salt tank, with access for refilling it. The
                footprint depends on the equipment. Leave room to reach controls
                and replace parts.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold">Drinking-water equipment</h3>
              <p className="mt-2.5 text-[15px] leading-relaxed text-zinc-600">
                Reverse osmosis equipment usually goes under the kitchen sink.
                Tankless equipment has no separate storage tank, but it still takes
                up cabinet space and needs access for filter changes.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold">Connections and access</h3>
              <p className="mt-2.5 text-[15px] leading-relaxed text-zinc-600">
                The installation location needs accessible plumbing. Drain
                connections and electrical requirements depend on the equipment
                selected. Those requirements need to be checked before
                installation is scheduled.
              </p>
            </div>
          </div>

          <ol className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((s, i) => (
              <li key={s.name} className="rounded-[4px] bg-mist p-7">
                <span className="w-10 h-10 rounded-[2px] bg-primary text-white font-bold flex items-center justify-center">
                  {i + 1}
                </span>
                <h3 className="text-lg font-bold mt-5">{s.name}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-zinc-600">{s.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <Faq items={homeFaqs} title="Questions before you book." />

      {/* 9 — service area */}
      <section className="section-padding bg-mist">
        <div className="container-wide grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="section-label">Where we work</p>
            <h2 className="text-3xl md:text-4xl font-bold mt-3 tracking-[-0.015em]">
              Serving the greater Baton Rouge area
            </h2>
            <span className="waterline mt-5" aria-hidden="true" />
            <dl className="mt-7 space-y-3 text-[15px]">
              {[
                ['East Baton Rouge Parish', 'Baton Rouge, Zachary, Central and Baker'],
                ['Livingston Parish', 'Denham Springs, Walker and Watson'],
                ['Ascension Parish', 'Prairieville, Gonzales, St. Amant and Geismar'],
                ['West Baton Rouge Parish', 'Port Allen'],
              ].map(([parish, cities]) => (
                <div key={parish} className="flex flex-col sm:flex-row sm:gap-3">
                  <dt className="font-bold text-ink sm:w-56 shrink-0">{parish}</dt>
                  <dd className="text-zinc-600">{cities}</dd>
                </div>
              ))}
            </dl>
            <ul className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {cityPages.map((c) => (
                <li key={c.slug}>
                  <Link
                    href={`/services/${c.slug}`}
                    className="text-primary font-semibold underline underline-offset-2 hover:text-primary-dark transition-colors"
                  >
                    {c.service} in {c.city}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <Image
            src="/images/lifestyle-home.jpg"
            alt="South Louisiana brick home with live oak in the greater Baton Rouge area"
            width={2000}
            height={1116}
            className="w-full h-auto rounded-[4px]"
          />
        </div>
      </section>

      <CtaSection />
    </>
  )
}
