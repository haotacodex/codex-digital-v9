import { ContentLayout } from '@/components/layout/ContentLayout'

export const metadata = {
  title: 'Terms of Trade | Codex Digital',
  description: 'Codex Digital terms of trade. Payment terms, project scope, and client engagement conditions.',
}

export default function TermsOfTradePage() {
  return (
    <ContentLayout
      breadcrumb="Legal"
      heading="Terms of Trade"
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-md)' }}>
        <p style={{ color: 'var(--color-text-muted)' }}>These terms of trade apply to all services provided by Codex Digital Pty Ltd. Engagement of our services constitutes acceptance of these terms.</p>

        <h2 style={{ fontSize: 'var(--text-h4)', fontWeight: 600, marginTop: 'var(--space-md)' }}>Quotations and estimates</h2>
        <p style={{ color: 'var(--color-text-muted)' }}>All quotations and estimates are valid for 30 days from the date of issue unless otherwise stated in writing. Acceptance of a quotation constitutes a binding agreement.</p>

        <h2 style={{ fontSize: 'var(--text-h4)', fontWeight: 600, marginTop: 'var(--space-md)' }}>Payment terms</h2>
        <p style={{ color: 'var(--color-text-muted)' }}>Payment terms are 14 days from the date of invoice unless otherwise agreed in writing. For projects over $25,000, a 50% deposit is required before work commences, with the balance payable on completion.</p>

        <h2 style={{ fontSize: 'var(--text-h4)', fontWeight: 600, marginTop: 'var(--space-md)' }}>Project scope and variations</h2>
        <p style={{ color: 'var(--color-text-muted)' }}>Work will be performed in accordance with the agreed scope of work. Any changes or additions to the scope will be quoted separately and require written approval before commencement.</p>

        <h2 style={{ fontSize: 'var(--text-h4)', fontWeight: 600, marginTop: 'var(--space-md)' }}>Intellectual property</h2>
        <p style={{ color: 'var(--color-text-muted)' }}>Upon full payment, ownership of all custom deliverables created specifically for the client transfers to the client. Codex Digital retains the right to use the work for portfolio and marketing purposes unless otherwise agreed in writing.</p>

        <h2 style={{ fontSize: 'var(--text-h4)', fontWeight: 600, marginTop: 'var(--space-md)' }}>Cancellation</h2>
        <p style={{ color: 'var(--color-text-muted)' }}>Either party may terminate a project with 14 days written notice. The client remains liable for all work completed and expenses incurred up to the date of termination.</p>

        <h2 style={{ fontSize: 'var(--text-h4)', fontWeight: 600, marginTop: 'var(--space-md)' }}>Dispute resolution</h2>
        <p style={{ color: 'var(--color-text-muted)' }}>In the event of a dispute, both parties agree to attempt good faith negotiation before pursuing any legal remedy.</p>

        <p style={{ color: 'var(--color-text-muted)', marginTop: 'var(--space-lg)' }}>Last updated: January 2025</p>
      </div>
    </ContentLayout>
  )
}
