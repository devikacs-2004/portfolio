import { Briefcase } from 'lucide-react';

const experiences = [
  {
    title: 'Data Analyst Intern',
    organization: 'Bharti Airtel',
    period: 'February 2026 - March 2026',
    description: [
      'Analyzed prepaid recharge plans across customer segments to identify acquisition trends and plan performance metrics, directly informing product decisions.',
      'Performed MTD and LMTD analysis to track subscriber growth trends and surface actionable short-term insights.',
      'Identified growth and degrowth customer segments, enabling data-driven understanding of churn behavior and acquisition patterns.',
      'Examined Mobile Number Portability (MNP) data to surface switching behavior patterns across competitor networks.',
      'Built interactive dashboards to visualize key KPIs, enabling stakeholders to make faster, evidence-based decisions.',
    ],
    highlights: ['Python', 'Excel', 'KPI Analysis', 'Churn Analysis'],
  },
  {
    title: 'Cloud Security Intern',
    organization: 'Petrofac International Ltd',
    period: 'July 2025 - October 2025',
    description: [
      'Monitored and analyzed Microsoft Azure cloud resources to ensure security, performance, and compliance across active environments.',
      'Raised and tracked incidents for impacted resources, coordinating with teams for timely resolution and minimal disruption.',
      'Collaborated with cross-functional teams to support compliance checks and improve security posture.',
      'Supported risk assessments and identifying vulnerabilities in a regulated energy sector environment.',
    ],
    highlights: ['Microsoft Azure', 'Cloud Security', 'Risk Assessment'],
  },
];

export function Experience() {
  return (
    <section id="experience" className="section-container bg-card/50">
      <div className="flex items-center gap-3 mb-12">
        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
          <Briefcase className="w-5 h-5 text-primary" />
        </div>
        <h2 className="font-display text-2xl font-semibold">Experience</h2>
      </div>

      <div className="max-w-3xl space-y-8">
        {experiences.map((exp) => (
          <div
            key={exp.title}
            className="relative pl-6 border-l-2 border-primary/30 hover:border-primary transition-colors"
          >
            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary" />

            <div className="mb-1">
              <span className="text-xs font-medium text-primary uppercase tracking-wider">
                {exp.period}
              </span>
            </div>

            <h3 className="font-display font-semibold text-lg">{exp.title}</h3>
            <p className="text-muted-foreground text-sm mb-3">{exp.organization}</p>

            <ul className="list-disc pl-5 space-y-2 text-muted-foreground text-sm mb-4">
              {exp.description.map((point, i) => (
                <li key={i} className="leading-relaxed">
                  {point}
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-2">
              {exp.highlights.map((highlight) => (
                <span
                  key={highlight}
                  className="px-2 py-1 text-xs bg-secondary rounded text-muted-foreground"
                >
                  {highlight}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}