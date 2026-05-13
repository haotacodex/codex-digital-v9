import { ContentLayout } from '@/components/layout/ContentLayout'
export const metadata = {
  title: 'Privacy Policy | Codex Digital',
  description: 'Codex Digital privacy policy. How we collect, use, and protect your personal information.',
}

export default function PrivacyPolicyPage() {
  return (
    <ContentLayout
      breadcrumb="Legal"
      heading="Privacy Policy"
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-md)' }}>
            <p style={{ color: 'var(--color-text-muted)' }}>Codex Digital is committed to protecting your privacy. This policy explains how we collect, use, and safeguard your personal information.</p>

            <h2 style={{ fontSize: 'var(--text-h4)', fontWeight: 600, marginTop: 'var(--space-md)' }}>Information we collect</h2>
            <p style={{ color: 'var(--color-text-muted)' }}>We collect personal information that you voluntarily provide to us when you contact us, submit a project brief, or engage our services. This may include your name, email address, phone number, company name, and project details.</p>

            <h2 style={{ fontSize: 'var(--text-h4)', fontWeight: 600, marginTop: 'var(--space-md)' }}>How we use your information</h2>
            <p style={{ color: 'var(--color-text-muted)' }}>We use your personal information to respond to enquiries, provide services, communicate about projects, and send occasional updates about our work. We do not sell or share your information with third parties for marketing purposes.</p>

            <h2 style={{ fontSize: 'var(--text-h4)', fontWeight: 600, marginTop: 'var(--space-md)' }}>Data security</h2>
            <p style={{ color: 'var(--color-text-muted)' }}>We implement appropriate technical and organisational measures to protect your personal information against unauthorised access, alteration, disclosure, or destruction.</p>

            <h2 style={{ fontSize: 'var(--text-h4)', fontWeight: 600, marginTop: 'var(--space-md)' }}>Your rights</h2>
            <p style={{ color: 'var(--color-text-muted)' }}>You have the right to access, correct, or delete your personal information. To exercise these rights, please contact us at hello@codexdigital.com.au.</p>

            <h2 style={{ fontSize: 'var(--text-h4)', fontWeight: 600, marginTop: 'var(--space-md)' }}>Changes to this policy</h2>
            <p style={{ color: 'var(--color-text-muted)' }}>We may update this privacy policy from time to time. Any changes will be posted on this page with an updated effective date.</p>

            <p style={{ color: 'var(--color-text-muted)', marginTop: 'var(--space-lg)' }}>Last updated: January 2025</p>
          </div>
    </ContentLayout>
  )
}

