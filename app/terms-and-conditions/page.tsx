import { ContentLayout } from '@/components/layout/ContentLayout'

export const metadata = {
  title: 'Terms & Conditions | Codex Digital',
  description: 'Codex Digital terms and conditions. Use of website and services.',
}

export default function TermsPage() {
  return (
    <ContentLayout
      breadcrumb="Legal"
      heading="Terms & Conditions"
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-md)' }}>
        <p style={{ color: 'var(--color-text-muted)' }}>These terms and conditions govern your use of the Codex Digital website and services. By accessing this website or engaging our services, you accept these terms in full.</p>

        <h2 style={{ fontSize: 'var(--text-h4)', fontWeight: 600, marginTop: 'var(--space-md)' }}>Website use</h2>
        <p style={{ color: 'var(--color-text-muted)' }}>The content of this website is for general information and use only. It is subject to change without notice. Unauthorised use of this website may give rise to a claim for damages or be a criminal offence.</p>

        <h2 style={{ fontSize: 'var(--text-h4)', fontWeight: 600, marginTop: 'var(--space-md)' }}>Intellectual property</h2>
        <p style={{ color: 'var(--color-text-muted)' }}>All intellectual property rights in this website and its content are owned by or licensed to Codex Digital. This includes but is not limited to the design, layout, look, appearance, graphics, and code. Reproduction is prohibited without written consent.</p>

        <h2 style={{ fontSize: 'var(--text-h4)', fontWeight: 600, marginTop: 'var(--space-md)' }}>Limitation of liability</h2>
        <p style={{ color: 'var(--color-text-muted)' }}>Codex Digital will not be liable for any loss or damage arising from the use of this website or our services, except where such liability cannot be excluded by law.</p>

        <h2 style={{ fontSize: 'var(--text-h4)', fontWeight: 600, marginTop: 'var(--space-md)' }}>Governing law</h2>
        <p style={{ color: 'var(--color-text-muted)' }}>These terms are governed by and construed in accordance with the laws of New South Wales, Australia. Any disputes arising under these terms shall be subject to the exclusive jurisdiction of the courts of New South Wales.</p>

        <p style={{ color: 'var(--color-text-muted)', marginTop: 'var(--space-lg)' }}>Last updated: January 2025</p>
      </div>
    </ContentLayout>
  )
}
