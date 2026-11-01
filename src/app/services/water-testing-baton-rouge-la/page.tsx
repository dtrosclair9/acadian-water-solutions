import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import JsonLd from '@/components/JsonLd'
import PageHero from '@/components/PageHero'
import Faq from '@/components/Faq'
import CtaSection from '@/components/CtaSection'
import { BASE_URL, ogImage, pageUrl, site } from '@/lib/site'

const PATH = '/services/water-testing-baton-rouge-la'

export const metadata: Metadata = {
  title: { absolute: 'Free In-Home Water Testing in Baton Rouge, LA' },
  description:
    'Free in-home water test across the Baton Rouge area. We check your water at your tap and explain what each number means, on the spot. No pressure, no cost.',
  alternates: { canonical: pageUrl(PATH) },
  openGraph: {
    title: 'Free In-Home Water Testing in Baton Rouge, LA | Acadian Water Solutions',
    description:
      'Free in-home water test across the Baton Rouge area. We check your water at your tap and explain what each number means, on the spot. No pressure, no cost.',
    url: pageUrl(PATH),
    siteName: site.name,
    images: [ogImage],
    locale: 'en_US',
    type: 'website',
  },
}

const faqs = [
  {
    q: 'Is the water test really free?',
    a: 'Yes, completely free and with no strings attached. The visit costs you nothing, whether you buy a system or never call us again. Testing is how we build honest quotes. Sizing a system without a test is just guessing. We would rather earn the install with a number you watched us measure at your own tap.',
  },
  {
    q: 'How long does the water test take?',
    a: 'It is a short visit, not an evening. We test at your tap, walk you through each result as it comes up, and answer whatever questions you have. There is no slideshow, no projector, and no pressure to buy anything.',
  },
  {
    q: 'What do you test for?',
    a: 'How hard your water is, plus iron, chlorine, dissolved solids, and pH, all measured right at your faucet. Together these five readings tell the story of your water. Whether buildup is forming in your tankless heater. Whether chlorine is what you are tasting. Whether iron explains the staining. And how your water compares to what a treatment system would deliver.',
  },
  {
    q: 'Do I need a water test if I am on city water?',
    a: 'Yes, because being on city water tells you almost nothing about what reaches your glass. The test measures the things no utility report can give you. Your real chlorine level at the tap. Whether your home runs harder than you think. What your own older pipes may add. And a starting number before you invest in drinking-water gear. You cannot see any of it in the water, so the only way to know is to measure it. The test is free.',
  },
  {
    q: 'How often should well owners retest their water?',
    a: 'Every couple of years, even when everything seems fine. A private well has no utility watching it, and groundwater changes over time. Iron and sulfur can drift. And a new smell or stain is always worth a fresh test instead of a guess. Retesting is free too, so there is no reason to wonder.',
  },
]

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': `${pageUrl(PATH)}#service`,
  name: 'Free In-Home Water Testing',
  serviceType: 'Free in-home water quality testing',
  description:
    'Free in-home water testing measuring hardness, iron, chlorine, TDS, and pH for city water and private well homes across the greater Baton Rouge area.',
  url: pageUrl(PATH),
  provider: { '@id': `${BASE_URL}/#business` },
  areaServed: [
    { '@type': 'City', name: 'Baton Rouge, LA' },
    { '@type': 'City', name: 'Denham Springs, LA' },
    { '@type': 'City', name: 'Prairieville, LA' },
    { '@type': 'City', name: 'Walker, LA' },
    { '@type': 'City', name: 'Gonzales, LA' },
    { '@type': 'City', name: 'Zachary, LA' },
  ],
}

export default function WaterTestingPage() {
  return (
    <>
      <JsonLd data={serviceSchema} />
      <PageHero
        title="Free In-Home Water Testing in Baton Rouge, Louisiana"
        intro="You cannot see what is in your water. Hard water, chlorine, iron, and dissolved minerals are all invisible in a clear glass. The only way to know your numbers is to measure them. We do it for free, at your tap, and explain every result while you watch. No pressure, just the facts about your own water."
        crumbs={[
          { name: 'Home', href: '/' },
          { name: 'Services', href: '/services' },
          { name: 'Free Water Testing', href: PATH },
        ]}
        image="/images/service-testing.jpg"
        imageAlt="Black branded Acadian Water Solutions water test case with sample vials for in-home testing"
      />

      {/* What we test */}
      <section className="section-padding bg-white">
        <div className="container-wide max-w-4xl">
          <p className="section-label">What we measure</p>
          <h2 className="text-3xl md:text-4xl font-semibold mt-3">
            Five readings that tell your water&apos;s whole story
          </h2>
          <span className="waterline mt-5" aria-hidden="true" />
          <div className="mt-10 space-y-8">
            <div>
              <h3 className="text-xl font-semibold">Hardness</h3>
              <p className="mt-3 leading-relaxed text-zinc-600">
                This is the mineral in your water that scales up tankless water
                heaters, spots your glasses, and fights your soap. It varies home to
                home across the metro. And a well can read very different again. So
                the number at your neighbor&apos;s tap is not the number at yours. A
                softener recommendation is built on this reading.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">Iron</h3>
              <p className="mt-3 leading-relaxed text-zinc-600">
                This is the mineral behind orange tub rings and stained laundry. It
                is the most common complaint from well homes in Livingston and
                Ascension Parish. Even trace amounts leave their mark. The test tells
                us whether iron treatment belongs in the conversation.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">Chlorine</h3>
              <p className="mt-3 leading-relaxed text-zinc-600">
                This is what your utility adds to keep the water safe in the pipes.
                It is supposed to be there. But it is also the taste and smell most
                city homes want gone. We measure what actually reaches your tap, not
                a system-wide average.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">Total dissolved solids</h3>
              <p className="mt-3 leading-relaxed text-zinc-600">
                This is one number that sums up everything dissolved in your water.
                It is the starting point for any drinking-water decision. And it is
                the before-and-after proof of what a reverse osmosis system changes.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">pH</h3>
              <p className="mt-3 leading-relaxed text-zinc-600">
                This is how acidic or alkaline your water runs. It shapes the taste,
                affects your plumbing over the long run, and helps us set up any
                system correctly the first time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How the visit works */}
      <section className="section-padding bg-mist">
        <div className="container-wide">
          <p className="section-label">How it works</p>
          <h2 className="text-3xl md:text-4xl font-semibold mt-3">
            The visit, step by step
          </h2>
          <span className="waterline mt-5" aria-hidden="true" />
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="rounded-[4px] bg-white p-8">
              <h3 className="text-xl font-semibold">1. You pick the time</h3>
              <p className="mt-3 text-sm leading-relaxed text-zinc-600">
                Book through the contact form or a phone call. We come to you,
                anywhere in the greater Baton Rouge area, at a time that fits your
                household, not ours.
              </p>
            </div>
            <div className="rounded-[4px] bg-white p-8">
              <h3 className="text-xl font-semibold">2. We test at your tap</h3>
              <p className="mt-3 text-sm leading-relaxed text-zinc-600">
                We take samples from the faucets you drink from and bathe with. Then
                we measure your water right in front of you, with the test case open
                on your counter.
              </p>
            </div>
            <div className="rounded-[4px] bg-white p-8">
              <h3 className="text-xl font-semibold">3. You see every result</h3>
              <p className="mt-3 text-sm leading-relaxed text-zinc-600">
                We explain each reading in plain words as it comes up: what the
                number is, what normal looks like, and what yours means for your
                home. Ask questions the whole way through.
              </p>
            </div>
            <div className="rounded-[4px] bg-white p-8">
              <h3 className="text-xl font-semibold">4. You get a straight answer</h3>
              <p className="mt-3 text-sm leading-relaxed text-zinc-600">
                You see what is in your water and what each number means for your
                home. Then you get a clear recommendation and a real price to treat
                it. No pressure, and you keep your results either way.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The honest wedge */}
      <section className="section-padding bg-white">
        <div className="container-wide grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <Image
            src="/images/lifestyle-glass.jpg"
            alt="Glass of clear drinking water poured after a free in-home water test in Baton Rouge"
            width={2000}
            height={1116}
            className="w-full h-auto rounded-[4px]"
          />
          <div>
            <p className="section-label">What happens after</p>
            <h2 className="text-3xl md:text-4xl font-semibold mt-3">
              Testing turns the invisible into a number you can act on
            </h2>
            <span className="waterline mt-5" aria-hidden="true" />
            <p className="mt-7 leading-relaxed text-zinc-600">
              The trouble with water is that you cannot see it. Hard water scaling a
              heater. Chlorine you are tasting. Iron staining a tub. Dissolved
              minerals in your drinking water. None of it shows up in a clear glass.
              The test puts a real number on each one, so you decide on facts instead
              of a guess. No pressure, but the numbers usually explain the very thing
              that made you call.
            </p>
            <p className="mt-4 leading-relaxed text-zinc-600">
              When the numbers call for equipment, everything we install comes with
              free installation, a lifetime warranty, and pricing you hear before
              anything is scheduled.
            </p>
          </div>
        </div>
      </section>

      {/* Well vs city */}
      <section className="section-padding bg-mist">
        <div className="container-wide max-w-4xl">
          <p className="section-label">Well or city</p>
          <h2 className="text-3xl md:text-4xl font-semibold mt-3">
            Testing well water is a different job than testing city water
          </h2>
          <span className="waterline mt-5" aria-hidden="true" />
          <p className="mt-7 leading-relaxed text-zinc-600">
            City water arrives pre-treated and watched by a utility. So testing it is
            about taste, chlorine, and baseline numbers before an upgrade. A private
            well has no utility behind it. The owner is the water system, and no one
            is watching the iron, sulfur, or grit unless the owner has it tested. If
            your home is on a well around Walker, Watson, Holden, Prairieville, or St.
            Amant, the free test leans harder on iron and sulfur. Those are the
            problems local groundwater actually serves up.
          </p>
          <p className="mt-4">
            <Link
              href="/services/well-water-treatment-baton-rouge-la"
              className="text-primary font-semibold hover:text-primary-dark transition-colors"
            >
              Well water treatment in the Baton Rouge area →
            </Link>
          </p>
          <p className="mt-2">
            <Link
              href="/services/well-water-treatment-walker-la"
              className="text-primary font-semibold hover:text-primary-dark transition-colors"
            >
              Well water treatment in Walker →
            </Link>
          </p>
          <p className="mt-6 leading-relaxed text-zinc-600">
            Ready to see your numbers?{' '}
            <Link
              href="/contact"
              className="text-primary font-semibold hover:text-primary-dark transition-colors"
            >
              Book your free water test
            </Link>{' '}
            and get the answer at your own kitchen counter.
          </p>
        </div>
      </section>

      <Faq items={faqs} title="Water testing questions, answered" />
      <CtaSection
        title="Book the free test and know for sure"
        body="One short visit, five readings, zero cost, zero pressure. Whether you are on city water in Baton Rouge or a well in the parishes, you will know exactly what is in your water before you spend a dollar on it."
      />
    </>
  )
}
