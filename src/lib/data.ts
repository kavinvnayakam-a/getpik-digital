import { PlaceHolderImages } from './placeholder-images';

const getImage = (id: string) => PlaceHolderImages.find((img) => img.id === id);

export const portfolioProjects = [
  {
    id: '1',
    title: 'E-commerce Platform Overhaul',
    description:
      'A complete redesign and migration of a legacy e-commerce site to a modern, headless architecture.',
    image: getImage('portfolio-1'),
    testimonial:
      'GetPik Agency transformed our online store. Sales are up 40% year-over-year!',
    client: 'UrbanStyle Co.',
  },
  {
    id: '2',
    title: 'Fintech Mobile Application',
    description:
      'Developed a cross-platform mobile app for a startup, focusing on user experience and security.',
    image: getImage('portfolio-2'),
    testimonial:
      'The app is beautiful and intuitive. The team was professional and delivered on time.',
    client: 'PayWise',
  },
  {
    id: '3',
    title: 'Cafe & Roastery Branding',
    description:
      'Full branding package including logo design, packaging, and a new website for a local coffee shop.',
    image: getImage('portfolio-3'),
    testimonial:
      "Our new brand identity perfectly captures our essence. We've seen a huge increase in foot traffic.",
    client: 'The Daily Grind',
  },
  {
    id: '4',
    title: 'Corporate Law Firm Website',
    description:
      'A professional and accessible website for a major law firm, featuring a secure client portal.',
    image: getImage('portfolio-4'),
    testimonial:
      'The website instills confidence and is incredibly easy for our clients to navigate.',
    client: 'Juris & Partners',
  },
  {
    id: '5',
    title: 'Viral Social Media Campaign',
    description:
      'Created a suite of engaging graphics and videos for a social media campaign that reached millions.',
    image: getImage('portfolio-5'),
    testimonial:
      "Their creative work was exceptional and played a key role in our campaign's success.",
    client: 'GlowUp Cosmetics',
  },
  {
    id: '6',
    title: 'SaaS Analytics Dashboard',
    description:
      'Designed and built a complex data visualization dashboard for a B2B SaaS product.',
    image: getImage('portfolio-6'),
    testimonial:
      'The new dashboard makes complex data understandable and actionable. A game-changer for our users.',
    client: 'Datafy',
  },
];

export const clients = [
  {
    id: 'client-1',
    name: 'John Doe',
    company: 'UrbanStyle Co.',
    status: 'Completed',
    notes:
      'Project completed successfully. Potential for future collaboration on their marketing site.',
  },
  {
    id: 'client-2',
    name: 'Jane Smith',
    company: 'PayWise',
    status: 'Current',
    notes: 'Phase 2 development ongoing. Weekly check-in scheduled for Friday.',
  },
  {
    id: 'client-3',
    name: 'Sam Wilson',
    company: 'The Daily Grind',
    status: 'Completed',
    notes: 'Happy with the branding. Sent a thank you card.',
  },
  {
    id: 'client-4',
    name: 'Emily White',
    company: 'Juris & Partners',
    status: 'Current',
    notes: 'Waiting for content for the "About Us" page.',
  },
  {
    id: 'client-5',
    name: 'Michael Brown',
    company: 'GlowUp Cosmetics',
    status: 'Lead',
    notes: 'Initial call was positive. Follow up next week with a proposal.',
  },
  {
    id: 'client-6',
    name: 'Jessica Green',
    company: 'Datafy',
    status: 'Current',
    notes:
      'User feedback on the dashboard is excellent. Discussing a retainer for ongoing support.',
  },
  {
    id: 'client-7',
    name: 'Chris Evans',
    company: 'Innovatech',
    status: 'Lead',
    notes:
      'Met at a conference. Interested in a website refresh. Sent intro email.',
  },
];

export type Client = (typeof clients)[0];
