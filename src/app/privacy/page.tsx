import type { Metadata } from 'next'
import { ogImage, pageUrl, site } from '@/lib/site'

const PATH = '/privacy'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    'How Acadian Water Solutions collects, uses, and protects the information submitted through this site, including contact form data handled by Formspree.',
  alternates: { canonical: pageUrl(PATH) },
  openGraph: {
    title: 'Privacy Policy | Acadian Water Solutions',
    description:
      'How Acadian Water Solutions collects, uses, and protects information submitted through this website.',
    url: pageUrl(PATH),
    siteName: site.name,
    images: [ogImage],
    locale: 'en_US',
    type: 'website',
  },
}

export default function PrivacyPage() {
  return (
    <div className="section-padding bg-white">
      <div className="container-wide max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-semibold leading-tight">
          Privacy Policy
        </h1>
        <span className="waterline mt-5" aria-hidden="true" />
        <p className="mt-4 text-sm text-ink/70">Last updated: July 14, 2026</p>

        <div className="mt-10 space-y-6 leading-relaxed text-zinc-700">
          <p>
            Acadian Water Solutions, based in Baton Rouge, Louisiana, operates this
            website. This policy explains what information the site collects, how it
            is used, and how to reach us with questions about it. The short version:
            we collect only what you send us plus routine technical logs, we use it to
            respond to you and run the site, and we do not sell it.
          </p>

          <h2 className="text-2xl font-semibold pt-4">Information you send us</h2>
          <p>
            When you submit the contact form, you provide your name, phone number,
            email address, the service you are interested in, and your message. Form
            submissions are processed by Formspree, a third-party form service, which
            delivers them to our email. Formspree handles that data under its own
            privacy policy. We use your submission to respond to your inquiry,
            schedule your free water test, and follow up on your request. If you call
            or email us directly, we use your contact information the same way.
          </p>

          <h2 className="text-2xl font-semibold pt-4">
            Information collected automatically
          </h2>
          <p>
            This site is hosted on Vercel. Like most web hosts, Vercel generates
            server logs that may include technical data such as your IP address,
            browser type, device information, and the pages you request. This
            information is used for security, performance, and keeping the site
            running, not for building profiles of visitors.
          </p>
          <p>
            The fonts on this site are delivered through Next.js font optimization,
            which serves Google Fonts files from our own hosting. Loading a page here
            does not make tracking calls to Google servers for fonts.
          </p>

          <h2 className="text-2xl font-semibold pt-4">Cookies and tracking</h2>
          <p>
            This site itself sets no tracking or advertising cookies. We do not run
            advertising pixels, and we do not use your information for third-party ad
            targeting.
          </p>

          <h2 className="text-2xl font-semibold pt-4">How we use and share information</h2>
          <p>
            We use the information described above to respond to inquiries, schedule
            and perform water tests and installations, and operate this website. We
            do not sell your personal information. We share it only with the service
            providers named in this policy, Formspree and Vercel, to the extent they
            process it on our behalf, or when the law requires it.
          </p>

          <h2 className="text-2xl font-semibold pt-4">Questions about your privacy</h2>
          <p>
            If you have questions about this policy, or want to ask about information
            you have submitted to us, contact Acadian Water Solutions in Baton
            Rouge, LA by email at{' '}
            <a
              href={`mailto:${site.email}`}
              className="text-primary font-semibold hover:text-primary-dark transition-colors"
            >
              {site.email}
            </a>{' '}
            or by phone at{' '}
            <a
              href={`tel:${site.phoneRaw}`}
              className="text-primary font-semibold hover:text-primary-dark transition-colors"
            >
              {site.phoneDisplay}
            </a>
            . We&apos;ll give you a straight answer about your data, the same way we
            give one about your water.
          </p>

          <p>
            We may update this policy as the site or our services change. When we do,
            the date at the top of this page changes with it.
          </p>
        </div>
      </div>
    </div>
  )
}
