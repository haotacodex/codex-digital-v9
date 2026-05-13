'use client'
import { useState } from 'react'
import { Button } from '@/components/ui/Button'

export function ProjectBriefForm() {
  const [submitted, setSubmitted] = useState(false)

  if (submitted) {
    return (
      <div style={{ padding: 'var(--space-xl)', textAlign: 'center' }}>
        <h2>Thank you</h2>
        <p style={{ color: 'var(--color-text-muted)' }}>We have received your brief and will be in touch within 1 business day.</p>
      </div>
    )
  }

  return (
    <form
      onSubmit={(e) => { e.preventDefault(); setSubmitted(true) }}
      style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 'var(--space-md)' }} className="md:grid-cols-2"
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
        <label style={{ fontSize: 'var(--text-caption)', fontWeight: 600 }}>Name *</label>
        <input type="text" required style={{ padding: '12px 16px', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)', fontSize: 'var(--text-body)', background: 'var(--color-bg-card)' }} />
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
        <label style={{ fontSize: 'var(--text-caption)', fontWeight: 600 }}>Email *</label>
        <input type="email" required style={{ padding: '12px 16px', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)', fontSize: 'var(--text-body)', background: 'var(--color-bg-card)' }} />
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
        <label style={{ fontSize: 'var(--text-caption)', fontWeight: 600 }}>Company</label>
        <input type="text" style={{ padding: '12px 16px', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)', fontSize: 'var(--text-body)', background: 'var(--color-bg-card)' }} />
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
        <label style={{ fontSize: 'var(--text-caption)', fontWeight: 600 }}>Phone</label>
        <input type="tel" style={{ padding: '12px 16px', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)', fontSize: 'var(--text-body)', background: 'var(--color-bg-card)' }} />
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }} className="md:col-span-2">
        <label style={{ fontSize: 'var(--text-caption)', fontWeight: 600 }}>Project type</label>
        <select style={{ padding: '12px 16px', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)', fontSize: 'var(--text-body)', background: 'var(--color-bg-card)' }}>
          <option>Select a service</option>
          <option>Website Development</option>
          <option>Design & UX/UI</option>
          <option>Branding</option>
          <option>Mobile Apps</option>
          <option>Custom Software</option>
          <option>Digital Campaigns</option>
          <option>Hosting & Infrastructure</option>
          <option>Other</option>
        </select>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }} className="md:col-span-2">
        <label style={{ fontSize: 'var(--text-caption)', fontWeight: 600 }}>Project description</label>
        <textarea rows={5} style={{ padding: '12px 16px', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)', fontSize: 'var(--text-body)', background: 'var(--color-bg-card)', resize: 'vertical' }} />
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }} className="md:col-span-2">
        <Button variant="primary" type="submit">Submit brief</Button>
        <p style={{ fontSize: 'var(--text-caption)', color: 'var(--color-text-muted)' }}>By submitting this form you agree to our Privacy Policy.</p>
      </div>
    </form>
  )
}
