import Image from 'next/image'
import Link from 'next/link'
import JsonLd from '@/components/JsonLd'
import { BASE_URL, site } from '@/lib/site'

type Crumb = { name: string; href: string }

type PageHeroProps = {
  title: string
  intro: string
  crumbs: Crumb[]
  image?: string
  imageAlt?: string
  cta?: boolean
}

// Light split hero: headline left, product render right, with the brand
// waterline under the title. Auto-emits BreadcrumbList schema from crumbs.
export default function PageHero({ title, intro, crumbs, image, imageAlt, cta = true }: PageHeroProps) {
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: crumbs.map((c, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: c.name,
      item: `${BASE_URL}${c.href === '/' ? '' : c.href}`,
    })),
  }

  return (
    <section className="bg-white border-b border-zinc-100">
      <JsonLd data={breadcrumbSchema} />
      <div className="container-wide pt-8 pb-14 md:pt-10 md:pb-20">
        <nav aria-label="Breadcrumb" className="mb-8">
          <ol className="flex flex-wrap items-center gap-1.5 text-xs text-ink/70">
            {crumbs.map((c, i) => (
              <li key={c.href} className="flex items-center gap-1.5">
                {i > 0 && <span aria-hidden="true">/</span>}
                {i === crumbs.length - 1 ? (
                  <span aria-current="page" className="text-zinc-700 font-medium">{c.name}</span>
                ) : (
                  <Link href={c.href} className="hover:text-primary transition-colors">{c.name}</Link>
                )}
              </li>
            ))}
          </ol>
        </nav>

        <div className={`grid grid-cols-1 ${image ? 'lg:grid-cols-2' : ''} gap-10 items-center`}>
          <div>
            <h1 className="text-4xl md:text-5xl font-semibold leading-tight">{title}</h1>
            <span className="waterline mt-5" aria-hidden="true" />
            <p className="mt-6 text-lg leading-relaxed text-zinc-600 max-w-2xl">{intro}</p>
            {cta && (
              <div className="mt-8 flex flex-wrap gap-4">
                <Link href="/contact" className="btn-splash">Book your free water test</Link>
                <a href={`tel:${site.phoneRaw}`} className="btn-outline-ink">
                  Call {site.phoneDisplay}
                </a>
              </div>
            )}
          </div>
          {image && (
            <div className="relative rounded-[4px] overflow-hidden bg-mist">
              <Image
                src={image}
                alt={imageAlt ?? ''}
                width={1200}
                height={675}
                className="w-full h-auto object-cover"
                priority
              />
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
