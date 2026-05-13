// lib/config.ts

import {
  Globe,
  Palette,
  PenTool,
  Smartphone,
  Workflow,
  Megaphone,
  Server,
  Building2,
  Layers,
  Users,
  HeartHandshake,
  Landmark,
  ShieldCheck,
  Zap,
  Factory,
  Cloud,
} from 'lucide-react'
import type { NavLink, FooterColumn } from './types'

export const siteConfig = {
  name: 'Codex Digital',
  url: 'https://codexdigital.com.au',
  tagline: 'Built in-house. Delivered with accountability.',
  email: 'hello@codexdigital.com.au',
  phone: '(02) 8384 6531',
  address: 'Level 7, 50 Berry Street, North Sydney NSW 2060',
  abn: 'ABN: on request',
  acknowledgement:
    'Codex Digital acknowledges the Traditional Owners of the land on which we work, the Cammeraygal people of the Eora Nation. We pay our respects to Elders past and present.',
  steadfastNote:
    'Codex Digital is a vetted preferred digital services provider to members of the Steadfast Group broker network â€” the largest general insurance broker network in Australasia (ASX: SDF).',
}

export const navLinks: NavLink[] = [
  { label: 'Work',       href: '/work' },
  {
    label: 'Services',
    href: '/services',
    children: [
      { icon: Globe, title: 'Website Development', description: 'Custom websites built for performance and conversion.', href: '/services/website-development' },
      { icon: Palette, title: 'Design & UX/UI', description: 'User-first interfaces that simplify complex journeys.', href: '/services/design-ux-ui' },
      { icon: PenTool, title: 'Branding', description: 'Strategic identity systems that stand out.', href: '/services/branding' },
      { icon: Smartphone, title: 'Mobile Apps', description: 'Native and cross-platform apps for iOS and Android.', href: '/services/mobile-apps' },
      { icon: Workflow, title: 'Custom Software', description: 'Bespoke tools and platforms built to scale.', href: '/services/custom-software' },
      { icon: Megaphone, title: 'Digital Campaigns', description: 'Data-driven campaigns that reach the right audience.', href: '/services/digital-campaigns' },
      { icon: Server, title: 'Hosting & Infrastructure', description: 'Secure, scalable hosting managed in-house.', href: '/services/hosting-infrastructure' },
    ],
  },
  {
    label: 'About',
    href: '/about',
    children: [
      { icon: Building2, title: 'Story', description: 'Founded in 2015. Senior practitioners. No outsourcing.', href: '/about' },
      { icon: Layers, title: 'Principles', description: 'Accountability, straight talk, and measurable outcomes.', href: '/about' },
      { icon: Users, title: 'Team', description: 'The senior practitioners behind every project.', href: '/about' },
      { icon: HeartHandshake, title: 'Values', description: 'What drives how we work with clients.', href: '/about' },
    ],
  },
  { label: 'Process',    href: '/process' },
  {
    label: 'Industries',
    href: '/industries/financial-services',
    children: [
      { icon: Landmark, title: 'Financial Services', description: 'Websites and platforms for banks, funds, and advisors.', href: '/industries/financial-services' },
      { icon: ShieldCheck, title: 'Insurance & Broking', description: 'Digital tools that simplify policy management.', href: '/industries/insurance-broking' },
      { icon: Zap, title: 'Energy & Utilities', description: 'Customer portals and billing systems that scale.', href: '/industries/energy-utilities' },
      { icon: Factory, title: 'Manufacturing & Distribution', description: 'E-commerce platforms and catalogues that drive sales.', href: '/industries/manufacturing-distribution' },
      { icon: Cloud, title: 'SaaS & Subscription', description: 'Onboarding flows and product experiences that convert.', href: '/industries/saas-subscription' },
    ],
  },
  { label: 'Insights',   href: '/insights' },
]

export const footerColumns: FooterColumn[] = [
  {
    heading: 'Services',
    links: [
      { label: 'Website Development',    href: '/services/website-development' },
      { label: 'Design & UX/UI',         href: '/services/design-ux-ui' },
      { label: 'Branding',               href: '/services/branding' },
      { label: 'Mobile Apps',            href: '/services/mobile-apps' },
      { label: 'Custom Software',        href: '/services/custom-software' },
      { label: 'Digital Campaigns',      href: '/services/digital-campaigns' },
      { label: 'Hosting & Infrastructure', href: '/services/hosting-infrastructure' },
    ],
  },
  {
    heading: 'Company',
    links: [
      { label: 'About',           href: '/about' },
      { label: 'Process',         href: '/process' },
      { label: 'Work',            href: '/work' },
      { label: 'Insights',        href: '/insights' },
      { label: 'Contact',         href: '/contact' },
      { label: 'Start a Project', href: '/start-a-project' },
    ],
  },
  {
    heading: 'Industries',
    links: [
      { label: 'Financial Services',          href: '/industries/financial-services' },
      { label: 'Insurance & Broking',         href: '/industries/insurance-broking' },
      { label: 'Energy & Utilities',          href: '/industries/energy-utilities' },
      { label: 'Manufacturing & Distribution', href: '/industries/manufacturing-distribution' },
      { label: 'SaaS & Subscription',         href: '/industries/saas-subscription' },
    ],
  },
]

export const legalLinks = [
  { label: 'Privacy Policy',     href: '/privacy-policy' },
  { label: 'Terms & Conditions', href: '/terms-and-conditions' },
  { label: 'Terms of Trade',     href: '/terms-of-trade' },
]

export const clientLogos = [
  { name: 'Qantas Super',    src: '/images/clients/qantas.svg' },
  { name: 'Nautilus Marine', src: '/images/clients/nautilus-marine.svg' },
  { name: 'Kawasaki',        src: '/images/clients/kawasaki.svg' },
  { name: 'GME',             src: '/images/clients/gme.png' },
  { name: 'Energy Locals',   src: '/images/clients/energy-locals.svg' },
  { name: 'Lipman',          src: '/images/clients/lipman.svg' },
  { name: 'NM Insurance',    src: '/images/clients/nm-insurance.svg' },
  { name: 'Steadfast',       src: '/images/clients/steadfast.svg' },
]
