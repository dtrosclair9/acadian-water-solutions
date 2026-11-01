import type { Metadata } from 'next'
import { ogImage, pageUrl, site } from '@/lib/site'

const PATH = '/accessibility'

export const metadata: Metadata = {
  title: 'Accessibility Statement',
  description:
    'Acadian Water Solutions is committed to digital accessibility and conforming to WCAG 2.2 Level AA. Learn how to report an accessibility barrier on this site.',
  alternates: { canonical: pageUrl(PATH) },
  openGraph: {
    title: 'Accessibility Statement | Acadian Water Solutions',
    description: 'Our commitment to an accessible website for everyone.',
    url: pageUrl(PATH),
    siteName: site.name,
    images: [ogImage],
    locale: 'en_US',
    type: 'website',
  },
}

export default function AccessibilityPage() {
  return (
    <div className="section-padding">
      <div className="container-wide max-w-3xl">
        <h1 className="text-4xl font-bold text-primary mb-2">Accessibility Statement</h1>
        <p className="text-gray-500 mb-8">Last updated: July 14, 2026</p>

        <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
          <p>
            Acadian Water Solutions is committed to making our website accessible to everyone,
            including people with disabilities. We aim to conform to the{' '}
            <a href="https://www.w3.org/WAI/WCAG22/quickref/" className="text-accent underline">
              Web Content Accessibility Guidelines (WCAG) 2.2 Level AA
            </a>
            , the standard recognized for meeting the effective-communication
            requirements of the Americans with Disabilities Act.
          </p>

          <h2 className="text-2xl font-bold text-primary">What we&apos;ve done</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Sufficient color contrast for text and interactive elements</li>
            <li>Full keyboard operability and a visible focus indicator</li>
            <li>A &ldquo;skip to main content&rdquo; link and semantic landmarks</li>
            <li>Descriptive alt text on images and labels on every form field</li>
            <li>Support for screen readers and assistive technology</li>
          </ul>

          <h2 className="text-2xl font-bold text-primary">Report a barrier</h2>
          <p>
            If you encounter any part of our site that is difficult to use or
            access, please tell us so we can fix it. Contact us at{' '}
            <a href={`tel:${site.phoneRaw}`} className="text-accent underline">{site.phoneDisplay}</a>{' '}
            or{' '}
            <a href={`mailto:${site.email}`} className="text-accent underline">{site.email}</a>. We
            aim to respond within one business day.
          </p>
        </div>
      </div>
    </div>
  )
}
