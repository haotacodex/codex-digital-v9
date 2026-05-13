// lib/utils.ts

export function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(' ')
}

export function slugify(str: string): string {
  return str.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '')
}

export function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString('en-AU', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}

export function getServiceBySlug(slug: string, services: import('./types').Service[]) {
  return services.find(s => s.slug === slug) ?? null
}

export function getCaseStudyBySlug(slug: string, caseStudies: import('./types').CaseStudy[]) {
  return caseStudies.find(c => c.slug === slug) ?? null
}
