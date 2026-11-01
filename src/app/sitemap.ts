import type { MetadataRoute } from 'next'
import { BASE_URL, services, cityPages } from '@/lib/site'

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  return [
    { url: BASE_URL, lastModified: now, changeFrequency: 'monthly' as const, priority: 1 },
    { url: `${BASE_URL}/services`, lastModified: now, changeFrequency: 'monthly' as const, priority: 0.9 },
    ...services.map((s) => ({
      url: `${BASE_URL}/services/${s.slug}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    })),
    ...cityPages.map((c) => ({
      url: `${BASE_URL}/services/${c.slug}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
    { url: `${BASE_URL}/about`, lastModified: now, changeFrequency: 'yearly' as const, priority: 0.7 },
    { url: `${BASE_URL}/contact`, lastModified: now, changeFrequency: 'yearly' as const, priority: 0.8 },
    { url: `${BASE_URL}/privacy`, lastModified: now, changeFrequency: 'yearly' as const, priority: 0.3 },
    { url: `${BASE_URL}/accessibility`, lastModified: now, changeFrequency: 'yearly' as const, priority: 0.3 },
  ]
}
