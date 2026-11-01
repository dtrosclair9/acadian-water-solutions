import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import JsonLd from '@/components/JsonLd'
import PageHero from '@/components/PageHero'
import Faq from '@/components/Faq'
import CtaSection from '@/components/CtaSection'
import { BASE_URL, ogImage, pageUrl, site, cityPages } from '@/lib/site'

const PATH = '/about'

export const metadata: Metadata = {
  title: { absolute: 'About Acadian Water Solutions | Baton Rouge, LA' },
  description:
    'Acadian Water Solutions is a Baton Rouge water treatment specialist. Free water testing, systems matched to your water & support after every install.',
  alternates: { canonical: pageUrl(PATH) },
  openGraph: {
    title: 'About Acadian Water Solutions | Baton Rouge Water Treatment',
    description:
      'A Baton Rouge water treatment specialist. Free in-home testing, professional-grade systems matched to your water, and support after the install.',
    url: pageUrl(PATH),
    siteName: site.name,
    images: [ogImage],
    locale: 'en_US',
    type: 'website',
  },
}

const standards = [
  {
    title: 'The test before the pitch',
    text: 'We never suggest a system before we test your water. We measure hardness, iron, chlorine, TDS, and pH right at your tap. Those numbers decide what we recommend, if anything at all.',
  },
  {
    title: 'Straight answers, every time',
    text: 'We only recommend what your test calls for. If a system will not help your home, we say so. You can trust our advice on a real problem because we do not invent one.',
  },
  {
    title: 'Systems matched to the water',
    text: 'City water, harder groundwater in the parishes, and iron-heavy wells are all different problems. We size and set up your equipment from your own test results. Nothing comes off a one-size-fits-all shelf.',
  },
  {
    title: 'Support after the install',
    text: 'Our job does not end when the system starts running. Need a filter schedule, a salt question, or a setting changed? You get answers from people who know your system, for as long as you own it.',
  },
]

const aboutFaqs = [
  {
    q: 'Is Acadian Water Solutions a local company?',
    a: 'Yes. We are based in Baton Rouge, Louisiana, and we serve the area around it: East Baton Rouge, Livingston, Ascension, and West Baton Rouge Parish. We treat the water here every week, from chlorine taste on city water to iron and sulfur in Livingston Parish wells. This is the water we know best.',
  },
  {
    q: 'Do you use subcontractors?',
    a: 'Our team handles your job from the first phone call through the install and the support after it. The same company that tests your water stands behind the finished system. Want to know exactly who will be in your home? Call us before your appointment and we will walk you through it.',
  },
  {
    q: 'What brands of equipment do you carry?',
    a: 'We install professional-grade equipment matched to what your water test shows. We do not push one brand on every home. At your free water test, we go over the exact systems we would pick for your home and why.',
  },
  {
    q: 'How do I get started with Acadian Water Solutions?',
    a: 'Book the free in-home water test. We check hardness, iron, chlorine, TDS, and pH at your tap and explain the results on the spot. Then we give you a clear answer on whether treatment makes sense for your home. There is no charge and no pressure either way.',
  },
]

const aboutPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'AboutPage',
  '@id': `${pageUrl(PATH)}#aboutpage`,
  name: 'About Acadian Water Solutions',
  url: pageUrl(PATH),
  description:
    'About Acadian Water Solutions, a water treatment specialist in Baton Rouge, Louisiana offering whole-house filtration, water softeners, reverse osmosis, well water treatment, and free in-home water testing across East Baton Rouge, Livingston, Ascension, and West Baton Rouge Parish.',
  mainEntity: { '@id': `${BASE_URL}/#business` },
}

export default function AboutPage() {
  return (
    <>
      <JsonLd data={aboutPageSchema} />
      <PageHero
        title="About Acadian Water Solutions"
        intro="A water treatment specialist for the greater Baton Rouge area. We test water, treat water, and stand behind every system we install. Water is all we do, and that focus is why the work holds up."
        crumbs={[
          { name: 'Home', href: '/' },
          { name: 'About', href: PATH },
        ]}
        image="/images/lifestyle-glass.jpg"
        imageAlt="Clean filtered drinking water poured into a glass in a Baton Rouge area kitchen"
      />

      {/* What the company is */}
      <section className="section-padding bg-white">
        <div className="container-wide max-w-4xl">
          <p className="section-label">Who we are</p>
          <h2 className="text-3xl md:text-4xl font-semibold mt-3">
            Water treatment is the entire business
          </h2>
          <span className="waterline mt-5" aria-hidden="true" />
          <p className="mt-7 text-lg leading-relaxed text-zinc-600">
            Acadian Water Solutions is a Baton Rouge water treatment company. We are
            not a plumbing shop with a softener on the menu. We are not an AC company
            that tossed filtration on the truck. We test water, match equipment to what
            the test shows, install it cleanly, and answer the phone afterward. That is
            all we do.
          </p>
          <p className="mt-5 text-lg leading-relaxed text-zinc-600">
            That focus matters here. Water around Baton Rouge is all over the map. City
            water comes from a deep aquifer. Private wells in Livingston and Ascension
            Parish run heavy with iron and sulfur. The right fix for one home is the
            wrong fix for the next. A company that sells one system sees one problem
            everywhere. A company built on testing can tell you the truth about your own
            tap.
          </p>
        </div>
      </section>

      {/* The standard */}
      <section className="section-padding bg-mist">
        <div className="container-wide">
          <p className="section-label">The standard</p>
          <h2 className="text-3xl md:text-4xl font-semibold mt-3">
            How every Acadian project runs
          </h2>
          <span className="waterline mt-5" aria-hidden="true" />
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            {standards.map((s) => (
              <div key={s.title} className="rounded-[4px] bg-white p-8">
                <h3 className="text-xl font-semibold">{s.title}</h3>
                <p className="mt-3 leading-relaxed text-zinc-600">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Equipment philosophy */}
      <section className="section-padding bg-white">
        <div className="container-wide grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="section-label">The equipment</p>
            <h2 className="text-3xl md:text-4xl font-semibold mt-3">
              Professional-grade systems, one job per tank
            </h2>
            <span className="waterline mt-5" aria-hidden="true" />
            <p className="mt-7 leading-relaxed text-zinc-600">
              We install professional-grade equipment, sized and set up for your home
              instead of boxed for a shelf. The idea behind every system is simple. Each
              water problem gets its own media. Chlorine, hardness, iron, and sulfur
              each need a different material and different conditions. Ask one tank to do
              every job and it wears out early and works poorly.
            </p>
            <p className="mt-4 leading-relaxed text-zinc-600">
              So a well with iron and sulfur gets its own oxidation media first. A home
              with chlorine taste gets carbon sized to its flow rate. A tankless water
              heater gets a softener built to protect it. Your water test sets the
              combination, and the lifetime warranty covers what we install.
            </p>
          </div>
          <Image
            src="/images/service-whole-house.jpg"
            alt="Professional-grade whole house water filtration tanks installed by Acadian Water Solutions"
            width={2000}
            height={1116}
            className="w-full h-auto rounded-[4px]"
          />
        </div>
      </section>

      {/* Service area */}
      <section className="section-padding bg-mist">
        <div className="container-wide max-w-4xl">
          <p className="section-label">Where we work</p>
          <h2 className="text-3xl md:text-4xl font-semibold mt-3">
            Serving six parishes across south Louisiana
          </h2>
          <span className="waterline mt-5" aria-hidden="true" />
          <p className="mt-7 leading-relaxed text-zinc-600">
            We install and service water systems across {site.parishes.join(', ')}. That
            covers Baton Rouge, Baker, Central, and Zachary. It covers Denham Springs,
            Walker, and Watson. It covers Prairieville, Gonzales, St. Amant, and Geismar.
            And it covers Port Allen across the river.
          </p>
          <ul className="mt-7 grid grid-cols-1 sm:grid-cols-2 gap-3">
            {cityPages.map((c) => (
              <li key={c.slug}>
                <Link
                  href={`/services/${c.slug}`}
                  className="text-primary font-semibold hover:text-primary-dark transition-colors"
                >
                  {c.service} in {c.city} →
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <Faq items={aboutFaqs} title="About Acadian, answered" />

      <CtaSection
        title="See what we mean by a straight answer"
        body="Book the free in-home water test. It takes about thirty minutes. You get real numbers from your own tap and an honest read on whether your home needs treatment at all."
      />
    </>
  )
}
