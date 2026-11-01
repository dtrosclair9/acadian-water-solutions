import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import JsonLd from '@/components/JsonLd'
import PageHero from '@/components/PageHero'
import Faq from '@/components/Faq'
import CtaSection from '@/components/CtaSection'
import { BASE_URL, ogImage, pageUrl, site } from '@/lib/site'

const PATH = '/services/whole-house-water-filtration-baton-rouge-la'

export const metadata: Metadata = {
  title: { absolute: 'Whole House Water Filtration in Baton Rouge, LA' },
  description:
    'Bad taste or smell from chlorine? One filter at your main line cleans every tap in the house. For Baton Rouge homes, and the free water test comes first.',
  alternates: { canonical: pageUrl(PATH) },
  openGraph: {
    title: 'Whole House Water Filtration in Baton Rouge, LA | Acadian Water Solutions',
    description:
      'Bad taste or smell from chlorine? One filter at your main line cleans every tap in the house. For Baton Rouge homes, and the free water test comes first.',
    url: pageUrl(PATH),
    siteName: site.name,
    images: [ogImage],
    locale: 'en_US',
    type: 'website',
  },
}

const faqs = [
  {
    q: 'How much does whole house water filtration cost in Baton Rouge?',
    a: 'Our Complete Home Package is $4,950 installed. Package pricing can save you up to 40% versus buying each piece apart. Installation is free with your system. And every quote starts with a free in-home water test, so the gear matches what is actually in your water. You see the full price before anything is scheduled.',
  },
  {
    q: 'What does a whole house filter actually remove?',
    a: 'It removes the chlorine taste and smell, grit, and the fine bits that wear on your plumbing and appliances. City water arrives with chlorine added to keep it safe in the pipes. That does its job in the pipes, but it has no place in your coffee or your shower. A carbon filter at your main line pulls the chlorine taste and smell out. A grit filter catches the fine particles that old pipes can shed.',
  },
  {
    q: 'Is Baton Rouge tap water safe to drink?',
    a: 'The city cleans your water to meet the legal minimum, but the minimum is a floor, not a goal. Meeting a standard is not the same as reaching your glass clean. You cannot see the chlorine added to keep it safe. You cannot see the grit the old pipes shed. And you cannot see what your own older pipes add on the way to the tap. The only way to know what is really in your water is to test it. The in-home test is free.',
  },
  {
    q: 'What maintenance does a whole house system need?',
    a: 'Very little, and we walk you through all of it at the install. The filter lasts for years before it needs attention. The grit pre-filter is a simple swap now and then. Your system carries a lifetime warranty, and we are a phone call away for questions or checkups after.',
  },
  {
    q: 'How long does installation take?',
    a: 'Most whole house systems go in on a single visit, and we set the schedule when we quote the system. Installation is free and happens at your main water line. So every tap in the house is filtered once the system is in.',
  },
  {
    q: 'Should I get a whole house filter or an under-sink filter?',
    a: 'It depends on what you want to clean: one faucet, or the whole home. An under-sink system like reverse osmosis gives you great drinking water at the kitchen sink. But it does nothing for your showers, laundry, or water heater. A whole house filter cleans every drop that enters the home. Many Baton Rouge homes run both: a whole house filter for the home, and reverse osmosis for the glass.',
  },
]

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': `${pageUrl(PATH)}#service`,
  name: 'Whole House Water Filtration',
  serviceType: 'Whole house water filtration system installation',
  description:
    'Whole house water filtration systems installed at the main line, removing chlorine taste and odor and sediment for homes across the greater Baton Rouge area.',
  url: pageUrl(PATH),
  provider: { '@id': `${BASE_URL}/#business` },
  areaServed: [
    { '@type': 'City', name: 'Baton Rouge, LA' },
    { '@type': 'City', name: 'Denham Springs, LA' },
    { '@type': 'City', name: 'Gonzales, LA' },
    { '@type': 'City', name: 'Zachary, LA' },
    { '@type': 'City', name: 'Central, LA' },
  ],
}

export default function WholeHouseFiltrationPage() {
  return (
    <>
      <JsonLd data={serviceSchema} />
      <PageHero
        title="Whole House Water Filtration in Baton Rouge, Louisiana"
        intro="City water can reach your home with a chlorine smell, grit, and bits of metal from old pipes. You cannot see any of it in a clear glass. One filter at your main water line cleans every tap, shower, and appliance in the house. And the free water test shows you what is in yours first."
        crumbs={[
          { name: 'Home', href: '/' },
          { name: 'Services', href: '/services' },
          { name: 'Whole-House Water Filtration', href: PATH },
        ]}
        image="/images/service-whole-house.jpg"
        imageAlt="Black tank whole house water filtration system installed by Acadian Water Solutions for a Baton Rouge home"
      />

      {/* What is still in your water after the city treats it */}
      <section className="section-padding bg-white">
        <div className="container-wide max-w-4xl">
          <p className="section-label">What reaches your tap</p>
          <h2 className="text-3xl md:text-4xl font-semibold mt-3">
            What is still in your water after the city treats it
          </h2>
          <span className="waterline mt-5" aria-hidden="true" />
          <p className="mt-7 leading-relaxed text-zinc-600">
            The city cleans your water just enough to make it safe in the pipes. It
            is not cleaned to taste good or to reach you untouched. To keep it safe,
            the city adds chlorine, which leaves a taste and smell behind. From
            there the water runs through miles of old public pipes. The last stretch
            is the pipes inside your own home. You cannot see what it picks up along
            the way. Whole house filtration is built for exactly that.
          </p>
          <div className="mt-10 space-y-8">
            <div>
              <h3 className="text-xl font-semibold">Chlorine at every tap</h3>
              <p className="mt-3 leading-relaxed text-zinc-600">
                The chlorine that keeps water safe in the pipes has no place in your
                morning coffee or your shower steam. It carries a taste and smell
                most homes want gone. A carbon filter at your main line pulls it out.
                That means cleaner water for your glass, your coffee maker, and the
                steam you breathe in the shower.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">Grit and rust from old pipes</h3>
              <p className="mt-3 leading-relaxed text-zinc-600">
                Old public pipes and the odd water-main break push fine grit into
                your plumbing. It clogs faucet screens and settles in your water
                heater. In older homes, the pipes on your own property can add to it.
                A filter catches this grit where the water enters your home, not
                inside your faucets.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">Longer life for your appliances</h3>
              <p className="mt-3 leading-relaxed text-zinc-600">
                Your water heater, dishwasher, washing machine, and ice maker all
                last longer on filtered water. Each one costs real money to replace.
                And each one runs on whatever comes through your main line. Filter
                the line once, and everything downstream is better off.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Whole-house vs point-of-use comparison */}
      <section className="section-padding bg-mist">
        <div className="container-wide max-w-4xl">
          <p className="section-label">Which one do you need</p>
          <h2 className="text-3xl md:text-4xl font-semibold mt-3">
            Whole-house filter or single-faucet filter?
          </h2>
          <span className="waterline mt-5" aria-hidden="true" />
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="rounded-[4px] bg-white p-8">
              <h3 className="text-xl font-semibold">Whole house: clean it all at once</h3>
              <p className="mt-3 leading-relaxed text-zinc-600">
                A whole house filter goes in at your main line. It cleans every drop
                that enters your home. Showers, laundry, the water heater, even the
                garden hose the kids drink from in July. This is the right tool for
                chlorine, grit, and appliance protection. Those problems hit the whole
                house, not just one faucet.
              </p>
            </div>
            <div className="rounded-[4px] bg-white p-8">
              <h3 className="text-xl font-semibold">One faucet: polish the drinking water</h3>
              <p className="mt-3 leading-relaxed text-zinc-600">
                A filter under one sink, like reverse osmosis, cleans only that
                faucet. But it cleans it to a higher level than any whole house filter
                can. The kitchen sink is where that matters most: drinking, cooking,
                and coffee. The two work as a team, not rivals, and plenty of homes
                use both.
              </p>
            </div>
          </div>
          <p className="mt-8 leading-relaxed text-zinc-600">
            Not sure which one your home needs? That is what the free water test is
            for. We look at your real water and your real goals. Then we point you to
            the smaller system if the smaller system is the right call. You can also
            read about our{' '}
            <Link
              href="/services/reverse-osmosis-system-baton-rouge-la"
              className="text-primary font-semibold hover:text-primary-dark transition-colors"
            >
              reverse osmosis drinking water systems
            </Link>{' '}
            to see how the single-faucet side works.
          </p>
        </div>
      </section>

      {/* What's included */}
      <section className="section-padding bg-white">
        <div className="container-wide grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="section-label">What&apos;s included</p>
            <h2 className="text-3xl md:text-4xl font-semibold mt-3">
              Every whole house system includes
            </h2>
            <span className="waterline mt-5" aria-hidden="true" />
            <ul className="mt-8 space-y-4">
              {[
                'Free in-home water test before any quote',
                'A carbon filter sized to your home and water use',
                'A grit filter where the water enters your home',
                'Free professional install at your main water line',
                'Lifetime warranty on your system, in writing',
                'A walkthrough of the finished setup and how to care for it',
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
            src="/images/lifestyle-home.jpg"
            alt="Brick home in the Baton Rouge area protected by whole house water filtration"
            width={2000}
            height={1116}
            className="w-full h-auto rounded-[4px]"
          />
        </div>
      </section>

      {/* Service area callout */}
      <section className="section-padding bg-mist">
        <div className="container-wide max-w-4xl">
          <p className="section-label">Where we install</p>
          <h2 className="text-3xl md:text-4xl font-semibold mt-3">
            Serving the greater Baton Rouge area
          </h2>
          <span className="waterline mt-5" aria-hidden="true" />
          <p className="mt-7 leading-relaxed text-zinc-600">
            We install whole house filters across four parishes: East Baton Rouge,
            Livingston, Ascension, and West Baton Rouge. That covers Baton Rouge,
            Zachary, Central, Baker, Port Allen, and the suburbs along both
            interstates. Some of these towns have their own water stories, like
            Denham Springs, where cloudy water has made local news more than once.
          </p>
          <p className="mt-4">
            <Link
              href="/services/water-filtration-denham-springs-la"
              className="text-primary font-semibold hover:text-primary-dark transition-colors"
            >
              Water filtration in Denham Springs →
            </Link>
          </p>
          <p className="mt-2">
            <Link
              href="/services/water-filtration-gonzales-la"
              className="text-primary font-semibold hover:text-primary-dark transition-colors"
            >
              Water filtration in Gonzales →
            </Link>
          </p>
          <p className="mt-6 leading-relaxed text-zinc-600">
            Ready for a straight answer about your own tap?{' '}
            <Link
              href="/contact"
              className="text-primary font-semibold hover:text-primary-dark transition-colors"
            >
              Book a free water test
            </Link>{' '}
            and we will bring the answer to your kitchen.
          </p>
        </div>
      </section>

      <Faq items={faqs} title="Whole house filtration questions, answered" />
      <CtaSection
        title="Find out what is really coming out of your tap"
        body="The free in-home water test measures how hard your water is, plus chlorine, iron, and more, right at your faucet. You cannot see chlorine, grit, or what your own pipes add. The only way to know is to measure it. We bring the answer to your kitchen."
      />
    </>
  )
}
