'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { services, site } from '@/lib/site'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
    setServicesOpen(false)
    setMobileServicesOpen(false)
  }, [pathname])

  useEffect(() => {
    function onClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setServicesOpen(false)
      }
    }
    document.addEventListener('mousedown', onClickOutside)
    return () => document.removeEventListener('mousedown', onClickOutside)
  }, [])

  const linkClass = (href: string) =>
    `text-sm font-semibold transition-colors duration-200 ${
      pathname === href ? 'text-primary' : 'text-ink hover:text-primary'
    }`

  return (
    <header
      className={`bg-white sticky top-0 z-50 transition-shadow duration-300 ${
        scrolled ? 'border-b border-ink/15' : 'border-b border-ink/10'
      }`}
    >
      <div className="container-wide">
        <div className="flex items-center justify-between h-20 lg:h-24">
          <Link href="/" className="flex items-center shrink-0" aria-label="Acadian Water Solutions – Home">
            <Image
              src="/images/logo.png"
              alt="Acadian Water Solutions logo"
              width={600}
              height={159}
              priority
              className="h-16 lg:h-20 w-auto"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-7" aria-label="Main navigation">
            <Link href="/" className={linkClass('/')}>Home</Link>

            <div className="relative" ref={dropdownRef}>
              <button
                className={`flex items-center gap-1 text-sm font-semibold transition-colors duration-200 ${
                  pathname.startsWith('/services') ? 'text-primary' : 'text-ink hover:text-primary'
                }`}
                onClick={() => setServicesOpen(!servicesOpen)}
                aria-expanded={servicesOpen}
                aria-controls="services-menu"
              >
                Services
                <svg
                  className={`w-4 h-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {servicesOpen && (
                <div
                  id="services-menu"
                  className="absolute left-0 top-full mt-3 w-72 rounded-[4px] bg-white shadow-xl ring-1 ring-zinc-100 p-2"
                >
                  <div className="h-1 bg-ribbon mb-2" aria-hidden="true" />
                  {services.map((s) => (
                    <Link
                      key={s.slug}
                      href={`/services/${s.slug}`}
                      className="block px-4 py-2.5 rounded-[4px] text-sm font-medium text-ink hover:bg-mist hover:text-primary transition-colors"
                    >
                      {s.navLabel}
                    </Link>
                  ))}
                  <Link
                    href="/services"
                    className="block px-4 py-2.5 rounded-[4px] text-sm font-semibold text-primary hover:bg-mist transition-colors"
                  >
                    All services →
                  </Link>
                </div>
              )}
            </div>

            <Link href="/about" className={linkClass('/about')}>About</Link>
            <Link href="/contact" className={linkClass('/contact')}>Contact</Link>
            <a href={`tel:${site.phoneRaw}`} className="btn-splash text-sm !py-2.5 !px-5 ml-2">
              {site.phoneDisplay}
            </a>
          </nav>

          {/* Mobile menu button */}
          <button
            className="lg:hidden text-ink p-2 rounded"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
          >
            {menuOpen ? (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Nav */}
        {menuOpen && (
          <nav id="mobile-nav" className="lg:hidden border-t border-zinc-100 pb-5 pt-3" aria-label="Mobile navigation">
            <div className="flex flex-col gap-1">
              <Link href="/" className="px-2 py-2.5 text-sm font-semibold text-ink rounded hover:text-primary">
                Home
              </Link>
              <button
                className="flex items-center justify-between px-2 py-2.5 text-sm font-semibold text-ink rounded hover:text-primary"
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                aria-expanded={mobileServicesOpen}
                aria-controls="mobile-services-menu"
              >
                Services
                <svg
                  className={`w-4 h-4 transition-transform ${mobileServicesOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {mobileServicesOpen && (
                <div id="mobile-services-menu" className="pl-4 flex flex-col gap-1">
                  {services.map((s) => (
                    <Link
                      key={s.slug}
                      href={`/services/${s.slug}`}
                      className="px-2 py-2 text-sm font-medium text-zinc-600 rounded hover:text-primary"
                    >
                      {s.navLabel}
                    </Link>
                  ))}
                </div>
              )}
              <Link href="/about" className="px-2 py-2.5 text-sm font-semibold text-ink rounded hover:text-primary">
                About
              </Link>
              <Link href="/contact" className="px-2 py-2.5 text-sm font-semibold text-ink rounded hover:text-primary">
                Contact
              </Link>
              <a href={`tel:${site.phoneRaw}`} className="btn-splash text-sm text-center mt-3">
                Call {site.phoneDisplay}
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
