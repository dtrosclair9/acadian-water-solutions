import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import JsonLd from '@/components/JsonLd'
import PageHero from '@/components/PageHero'
import Faq from '@/components/Faq'
import CtaSection from '@/components/CtaSection'
import { BASE_URL, ogImage, pageUrl, site } from '@/lib/site'

const PATH = '/services/water-filtration-denham-springs-la'

export const metadata: Metadata = {
  title: { absolute: 'Water Filtration in Denham Springs, LA' },
  description:
    'Brown water in Denham Springs? A whole-house filter catches the iron, rust, and grit before it hits your taps. Free water test, free install, lifetime warranty.',
  alternates: { canonical: pageUrl(PATH) },
  openGraph: {
    title: 'Water Filtration in Denham Springs, LA | Acadian Water Solutions',
    description:
      'Whole-house filtration for Denham Springs homes. Iron, manganese & sediment protection at the main line. Free water test and free installation.',
    url: pageUrl(PATH),
    siteName: site.name,
    images: [ogImage],
    locale: 'en_US',
    type: 'website',
  },
}

const faqs = [
  {
    q: 'Why does Denham Springs water turn brown sometimes?',
    a: 'The brown color comes from iron and manganese in parts of the parish water systems. Grit gets stirred up too, when a line breaks, a hydrant gets flushed, or the pressure changes. Local TV news has covered brown-water complaints in Denham Springs for years. Parts of Livingston Parish have also had boil advisories, including one near Juban Road in December 2024. None of that is your own plumbing failing. It is what shows up at your meter on a bad day.',
  },
  {
    q: 'Will a filter actually fix brown water?',
    a: 'Yes. A whole-house system filters grit and iron right where the water enters your home. It catches the brown color before it reaches your faucets, laundry, and water heater. It cannot fix the city pipes themselves, so think of it as insurance. On the days the supply runs dirty, your house does not. Every tap stays clear because the filter sits at the main line, not under one sink.',
  },
  {
    q: 'What does a filtration system cost in Denham Springs?',
    a: 'The Complete Home Package is $4,950 installed. Buying each system on its own costs more, so the package can save you up to 40%. Many Denham Springs homes need less than the full package. The free in-home test tells us which one yours is. We quote the one system your water actually needs, and installation is free either way.',
  },
  {
    q: 'Do you serve all of Livingston Parish?',
    a: 'Yes. Denham Springs, Watson, Walker, Holden, and the roads between them are all core service area. Homes on city water usually need a filter like the ones on this page. Well homes toward Watson and Walker usually need iron and sulfur treatment instead. The free water test settles which type your home is before anyone quotes gear.',
  },
]

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': `${pageUrl(PATH)}#service`,
  name: 'Water Filtration in Denham Springs, LA',
  serviceType: 'Whole-house water filtration and sediment removal',
  description:
    'Whole-house water filtration for Denham Springs, Louisiana homes: iron, manganese, sediment, and chlorine taste treated at the main line, with free water testing and free installation.',
  url: pageUrl(PATH),
  provider: { '@id': `${BASE_URL}/#business` },
  areaServed: [
    { '@type': 'City', name: 'Denham Springs, LA' },
    { '@type': 'City', name: 'Watson, LA' },
    { '@type': 'City', name: 'Walker, LA' },
  ],
}

export default function DenhamSpringsFiltrationPage() {
  return (
    <>
      <JsonLd data={serviceSchema} />
      <PageHero
        title="Water Filtration in Denham Springs, Louisiana"
        intro="Has your tap water ever run brown? Then you know why this page is here. A whole-house filter sits where the water enters your home. It catches the iron, rust, and grit that Denham Springs homes see on bad days, so what comes out of your taps stays clear."
        crumbs={[
          { name: 'Home', href: '/' },
          { name: 'Services', href: '/services' },
          { name: 'Water Filtration in Denham Springs', href: PATH },
        ]}
        image="/images/service-whole-house.jpg"
        imageAlt="Whole house water filtration tank system installed for Denham Springs Louisiana homes"
      />

      {/* Local context — what makes Denham Springs water Denham Springs' */}
      <section className="section-padding bg-white">
        <div className="container-wide max-w-4xl">
          <p className="section-label">Denham Springs water, honestly</p>
          <h2 className="text-3xl md:text-4xl font-semibold mt-3">
            The brown-water problem is real, and it is documented
          </h2>
          <span className="waterline mt-5" aria-hidden="true" />
          <p className="mt-7 leading-relaxed text-zinc-600">
            For years, Denham Springs folks have taken photos of brown tap water for
            the local news. That coverage is easy to find. Parts of the parish water
            systems have known iron and manganese problems. Those are the two minerals
            that stain water brown. Livingston Parish has also had boil advisories,
            including one near Juban Road in December 2024. When a line breaks or a
            hydrant gets flushed, the grit sitting in those pipes ends up in
            someone&apos;s laundry.
          </p>
          <p className="mt-5 leading-relaxed text-zinc-600">
            We are not here to tell you your water is dangerous. It gets treated and
            checked. Most days it runs clear. But most days is not every day. Maybe
            you have filled a tub the color of tea. Maybe you have washed a load of
            whites twice. Maybe you have wondered if today is a bad day to make ice.
            If so, you feel that gap. A whole-house filter is what closes it.
          </p>
          <p className="mt-5 leading-relaxed text-zinc-600">
            A filter at your main line cleans every drop coming into the house. It
            catches grit before it settles in your water heater. It pulls out iron and
            manganese before they stain your sinks and tub. And it takes the chlorine
            taste and smell out of every tap. Out toward Juban Crossing and Watson, a
            lot of homes run on private wells instead of city water. Those homes
            usually need well treatment, and the free test tells you which kind of
            home you have.
          </p>
        </div>
      </section>

      {/* What we install locally */}
      <section className="section-padding bg-mist">
        <div className="container-wide grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="section-label">The fix</p>
            <h2 className="text-3xl md:text-4xl font-semibold mt-3">
              Whole-house filtration built for Livingston Parish water
            </h2>
            <span className="waterline mt-5" aria-hidden="true" />
            <ul className="mt-8 space-y-4">
              {[
                'Free in-home water test for iron, chlorine, and how hard the water is, right at your tap',
                'Grit filter at the main line that catches the surge when a water line breaks',
                'Iron and manganese removal to stop orange and dark stains',
                'Carbon filter that takes chlorine taste and smell out of every faucet and shower',
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
              The same gear is covered in more detail on our{' '}
              <Link
                href="/services/whole-house-water-filtration-baton-rouge-la"
                className="text-primary font-semibold hover:text-primary-dark transition-colors"
              >
                whole-house water filtration
              </Link>{' '}
              page, sized here for what Denham Springs water actually does.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <Link href="/contact" className="btn-splash">Book a free Denham Springs water test</Link>
              <a href={`tel:${site.phoneRaw}`} className="btn-outline-ink">
                Call {site.phoneDisplay}
              </a>
            </div>
          </div>
          <Image
            src="/images/service-testing.jpg"
            alt="Water test kit with sample vials comparing discolored and filtered water in Denham Springs Louisiana"
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
            Also serving Watson, Walker &amp; the rest of the parish
          </h2>
          <span className="waterline mt-5" aria-hidden="true" />
          <p className="mt-7 leading-relaxed text-zinc-600">
            A filter handles city water. Head toward Watson, Walker, or Holden and it
            changes. A lot of those homes pull from private wells. There the problem
            is iron and sulfur coming up from the ground, not grit coming down a city
            pipe. That needs different gear, and it has its own page.
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

      <Faq items={faqs} title="Denham Springs water filtration questions" />
      <CtaSection
        title="Get your Denham Springs water tested for free"
        body="We test right at your tap and show you the numbers on the spot. Then we give you a straight answer about what a filter would and would not change. No pressure, no sales script."
      />
    </>
  )
}
