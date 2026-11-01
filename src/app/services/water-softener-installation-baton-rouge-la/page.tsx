import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import JsonLd from '@/components/JsonLd'
import PageHero from '@/components/PageHero'
import Faq from '@/components/Faq'
import CtaSection from '@/components/CtaSection'
import { BASE_URL, ogImage, pageUrl, site } from '@/lib/site'

const PATH = '/services/water-softener-installation-baton-rouge-la'

export const metadata: Metadata = {
  title: { absolute: 'Water Softener Installation in Baton Rouge, LA' },
  description:
    'Hard water spots dishes, dries your skin, and wears out water heaters. We install water softeners across the Baton Rouge area. Free water test comes first.',
  alternates: { canonical: pageUrl(PATH) },
  openGraph: {
    title: 'Water Softener Installation in Baton Rouge, LA | Acadian Water Solutions',
    description:
      'Hard water spots dishes, dries your skin, and wears out water heaters. We install water softeners across the Baton Rouge area. Free water test comes first.',
    url: pageUrl(PATH),
    siteName: site.name,
    images: [ogImage],
    locale: 'en_US',
    type: 'website',
  },
}

const faqs = [
  {
    q: 'Do I even need a water softener in Baton Rouge?',
    a: 'If any of these sound familiar, hard water is already at work. Your dishes come out spotted. Your faucets wear a white crust. Soap and shampoo will not lather. Your skin feels filmy after a shower. These are the signs people call us about most. Hard water also builds up inside a tankless water heater, the appliance most at risk. Every home is different, so the only way to know your number is to measure it. The free in-home test does that at your own tap.',
  },
  {
    q: 'How much does a water softener cost installed?',
    a: 'The price depends on how hard your water is and how big your home is. That is why the free water test comes before any quote. Our best value is the Complete Home Package at $4,950 installed. It pairs a softener with a chlorine filter and can save you up to 40% versus buying the pieces apart. Installation is free with every system either way.',
  },
  {
    q: 'Why do tankless water heaters need soft water?',
    a: 'Hard water leaves buildup on the part that heats the water, and that part is the whole heater. Builders put tankless heaters in almost every new home around here. Most makers call for softening to keep the unit running right. A softener stops the buildup before it reaches the heater. That is the biggest local reason to install one.',
  },
  {
    q: 'How much salt will a softener use?',
    a: 'That depends on how hard your water really is, which is one more reason to test first. We set the system to clean itself based on how much water you use, not a fixed timer. So it only runs when it needs to. That keeps both salt and water use low for a system sized the right way.',
  },
  {
    q: 'How long does installation take?',
    a: 'Most softeners go in on a single visit, and homes with a softener loop go even faster. We set the schedule when we quote the system. Installation is free, and we program the system to your test results before we leave.',
  },
  {
    q: 'What is the difference between a softener and a salt-free conditioner?',
    a: 'A softener pulls the hard minerals out of your water. A conditioner leaves them in but changes them so they build up less. Only a true softener gives you truly soft water: the slick rinse, better soap, and spot-free glasses. A conditioner suits homes that want less buildup without using salt. We install both and recommend whichever your test and your goals call for.',
  },
]

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': `${pageUrl(PATH)}#service`,
  name: 'Water Softener Installation',
  serviceType: 'Water softener installation and scale protection',
  description:
    'Professional water softener installation with chlorine filtration options, protecting tankless water heaters and plumbing across the greater Baton Rouge area.',
  url: pageUrl(PATH),
  provider: { '@id': `${BASE_URL}/#business` },
  areaServed: [
    { '@type': 'City', name: 'Baton Rouge, LA' },
    { '@type': 'City', name: 'Prairieville, LA' },
    { '@type': 'City', name: 'Gonzales, LA' },
    { '@type': 'City', name: 'Denham Springs, LA' },
    { '@type': 'City', name: 'Zachary, LA' },
  ],
}

export default function WaterSoftenerPage() {
  return (
    <>
      <JsonLd data={serviceSchema} />
      <PageHero
        title="Water Softener Installation in Baton Rouge, Louisiana"
        intro="Hard water leaves spots on your dishes and crust on your faucets. It dries out your skin and fills your water heater with buildup. You cannot see it in a glass, and every home is different. So we start with a free test at your tap to measure how hard your water is."
        crumbs={[
          { name: 'Home', href: '/' },
          { name: 'Services', href: '/services' },
          { name: 'Water Softeners', href: PATH },
        ]}
        image="/images/service-softener.jpg"
        imageAlt="Black tank water softener system with brine tank installed by Acadian Water Solutions in Baton Rouge"
      />

      {/* Honest local case for softening */}
      <section className="section-padding bg-white">
        <div className="container-wide max-w-4xl">
          <p className="section-label">Why hard water matters</p>
          <h2 className="text-3xl md:text-4xl font-semibold mt-3">
            What hard water does to your home and your body
          </h2>
          <span className="waterline mt-5" aria-hidden="true" />
          <p className="mt-7 leading-relaxed text-zinc-600">
            Hard water is minerals you cannot see in the glass. Those minerals do
            not stay in the water. They build up as a chalky crust on everything the
            water touches. They also change how your water feels on your skin and
            how it works with soap. Every home is different, so the only way to know
            your water is to test it. Here is what those minerals do while you are
            not looking.
          </p>
          <div className="mt-10 space-y-8">
            <div>
              <h3 className="text-xl font-semibold">It is wearing out your tankless water heater</h3>
              <p className="mt-3 leading-relaxed text-zinc-600">
                Builders put tankless water heaters in almost every new home around
                here. These heaters have one big enemy: buildup from hard water. A
                little collects on the part that heats the water every time you run
                hot water. Over time it makes the heater work harder and wear out
                early. This is the most expensive part of your plumbing to replace. A
                softener stops the buildup before it ever reaches the heater.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">It is spotting your dishes and crusting your fixtures</h3>
              <p className="mt-3 leading-relaxed text-zinc-600">
                White spots on your glasses. Chalky crust on faucets and shower
                heads. Film on your tile, and soap that will not lather. That is all
                hard water leaving its mark. These are the problems people call us
                about most. They show up long before anyone thinks to test the water.
                If your home is doing this, your water is trying to tell you
                something. Test it and find out.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">It is on your skin, your hair, and your laundry</h3>
              <p className="mt-3 leading-relaxed text-zinc-600">
                Hard water and soap mix into a film that clings to your skin. It
                dulls your hair and turns white laundry gray over time. A lot of
                people blame their soap or shampoo. The real problem is usually the
                water. A softener changes that. Soap works the way it should, colors
                stay bright, and your skin stops feeling filmy after a shower.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Flagship combo */}
      <section className="section-padding bg-mist">
        <div className="container-wide grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <Image
            src="/images/service-whole-house.jpg"
            alt="Black tank softener and chlorine filtration combination system for a Baton Rouge area home"
            width={2000}
            height={1116}
            className="w-full h-auto rounded-[4px]"
          />
          <div>
            <p className="section-label">The flagship</p>
            <h2 className="text-3xl md:text-4xl font-semibold mt-3">
              Soft water and clean-tasting water in one system
            </h2>
            <span className="waterline mt-5" aria-hidden="true" />
            <p className="mt-7 leading-relaxed text-zinc-600">
              Our most popular setup does two jobs in one tank. It softens your
              water and filters out the chlorine taste at the same time. So you get
              soft water and better-tasting water from a single system. It anchors
              our Complete Home Package at $4,950 installed. Buying the pieces apart
              costs more, so the package can save you up to 40%, and installation is
              free.
            </p>
            <p className="mt-4 leading-relaxed text-zinc-600">
              One system, one drain line, one thing to think about. For most homes
              on city water, that is the whole answer in a single tank.
            </p>
          </div>
        </div>
      </section>

      {/* New construction angle */}
      <section className="section-padding bg-white">
        <div className="container-wide max-w-4xl">
          <p className="section-label">New construction</p>
          <h2 className="text-3xl md:text-4xl font-semibold mt-3">
            Building in Prairieville or Gonzales? Your loop is waiting.
          </h2>
          <span className="waterline mt-5" aria-hidden="true" />
          <p className="mt-7 leading-relaxed text-zinc-600">
            Many new homes across Ascension Parish come with a softener loop. That
            is a spare hookup in the garage, built for a water softener. Most owners
            never learn what it is for. It means your home was ready for a softener
            from day one. The tankless heater on the wall next to it is the reason
            why. And it makes the install about as quick and clean as it gets. If
            you just closed on a new build, this is the easiest upgrade in the house.
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

      {/* What's included */}
      <section className="section-padding bg-mist">
        <div className="container-wide max-w-4xl">
          <p className="section-label">What&apos;s included</p>
          <h2 className="text-3xl md:text-4xl font-semibold mt-3">
            Every softener installation includes
          </h2>
          <span className="waterline mt-5" aria-hidden="true" />
          <ul className="mt-8 space-y-4">
            {[
              'Free in-home test to measure how hard your water is',
              'A system sized to your water and how much your home uses',
              'Set up to clean itself only when needed, to save salt and water',
              'Free professional install, loop or no loop',
              'Lifetime warranty on your system, in writing',
              'A recommendation based on your test, not a guess',
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
          <p className="mt-8 leading-relaxed text-zinc-600">
            Want to know how hard your own water is?{' '}
            <Link
              href="/contact"
              className="text-primary font-semibold hover:text-primary-dark transition-colors"
            >
              Book your free water test
            </Link>{' '}
            and we will measure it in your kitchen, not guess over the phone.
          </p>
        </div>
      </section>

      {/* Pool bypass. Deliberately tells the buyer where this product should NOT
          go, which is both true and the strongest trust copy on the page. */}
      <section className="section-padding bg-mist">
        <div className="container-wide max-w-4xl">
          <p className="section-label">Have a pool? Read this first</p>
          <h2 className="text-3xl md:text-4xl font-bold mt-3 tracking-[-0.015em]">
            Do not fill a swimming pool with softened water.
          </h2>
          <span className="waterline mt-5" aria-hidden="true" />
          <p className="mt-7 text-lg leading-relaxed text-zinc-600">
            A softener is the right answer for scale inside your house. It is the
            wrong water for a pool, and it is worth knowing that before you buy rather
            than after.
          </p>
          <p className="mt-5 leading-relaxed text-zinc-600">
            The National Plasterers Council advises that pool fill water sit above 200
            parts per million of calcium hardness, and that soft water and reverse
            osmosis water be bypassed when filling. Water that low in calcium goes
            looking for calcium somewhere else, and it finds it in the plaster. The
            damage ranges from discolouration to a weakened cement binder and a shorter
            service life for the finish. Filling an entire pool through a residential
            softener will also exhaust the resin bed.
          </p>
          <p className="mt-5 leading-relaxed text-zinc-600">
            None of that means you cannot have a softener. It means the hose bib or
            autofill line that feeds the pool should sit on the untreated side of it.
            We check that when we quote, and it is usually a plumbing detail rather
            than a different system.
          </p>
          <Link
            href="/services/pool-fill-water-treatment-baton-rouge-la"
            className="mt-7 inline-block text-[15px] font-bold text-primary underline underline-offset-2"
          >
            Pool fill water treatment
          </Link>
        </div>
      </section>

      <Faq items={faqs} title="Water softener questions, answered" />
      <CtaSection
        title="Test your water before it costs you a water heater"
        body="The free in-home test puts a real number on your water: how hard it is, plus chlorine, iron, and more. You cannot see what hard water is doing until it has worn out your heater and spotted your glasses. Measure it now, at your own tap, and fix it based on facts."
      />
    </>
  )
}
