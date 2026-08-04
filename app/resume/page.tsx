import type { Metadata } from "next";
import {
  articles,
  certifications,
  education,
  experience,
  languages,
  projects,
  resumeProfile,
  siteConfig,
  skillGroups,
} from "@/data/site";

export const metadata: Metadata = {
  title: "Resume",
  description: `Resume for ${siteConfig.name} — ${siteConfig.role}.`,
  robots: { index: false, follow: true },
};

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="resume-section">
      <h2 className="mb-1.5 border-b border-neutral-300 pb-0.5 font-mono text-[8.5pt] font-semibold uppercase tracking-[0.16em] text-neutral-500">
        {title}
      </h2>
      {children}
    </section>
  );
}

export default function ResumePage() {
  const contact = [
    siteConfig.email,
    siteConfig.phone,
    siteConfig.location,
    siteConfig.url.replace("https://", ""),
    siteConfig.github.replace("https://", ""),
    siteConfig.linkedin.replace("https://", ""),
  ];

  return (
    <main id="main-content" className="resume-page mx-auto my-0 max-w-[820px] bg-white px-9 py-9 font-sans text-[9pt] leading-[1.38] text-neutral-800 print:max-w-none print:px-0 print:py-0">
      <header className="mb-3 border-b-2 border-neutral-800 pb-2">
        <h1 className="text-[20pt] font-semibold leading-none tracking-[-0.03em] text-neutral-900">
          {siteConfig.name}
        </h1>
        <p className="mt-1 text-[10.5pt] font-medium text-neutral-600">{siteConfig.role}</p>
        <p className="mt-1.5 text-[8pt] text-neutral-500">{contact.join("  ·  ")}</p>
      </header>

      <div className="grid grid-cols-[1fr_205px] gap-x-6">
        <div className="grid gap-[9px]">
          <Section title="Profile">
            <p className="text-neutral-700">{resumeProfile}</p>
          </Section>

          <Section title="Experience">
            <div className="flex items-baseline justify-between gap-4">
              <h3 className="text-[10.5pt] font-semibold text-neutral-900">{experience.title}</h3>
              <span className="shrink-0 font-mono text-[8pt] uppercase tracking-[0.1em] text-neutral-500">
                {experience.period}
              </span>
            </div>
            <p className="mt-0.5 text-[8pt] text-neutral-500">
              {experience.engagement} · {experience.location} · {experience.disciplines}
            </p>
            <p className="mt-1 text-[8.5pt] italic text-neutral-600">{experience.summary}</p>
            <ul className="mt-1.5 grid gap-[2px]">
              {experience.bullets.map((bullet) => (
                <li key={bullet} className="pl-3 -indent-3 text-neutral-700 before:mr-1.5 before:text-neutral-400 before:content-['▸']">
                  {bullet}
                </li>
              ))}
            </ul>
            <p className="mt-1.5 text-[7.5pt] leading-[1.35] text-neutral-500">{experience.provenance}</p>
          </Section>

          <Section title="Selected Open Source">
            <div className="grid gap-1.5">
              {projects.map((project) => (
                <div key={project.slug}>
                  <div className="flex items-baseline gap-2">
                    <h3 className="shrink-0 font-mono text-[10pt] font-semibold text-neutral-900">{project.name}</h3>
                    <span className="shrink-0 text-[8pt] text-neutral-500">{project.language}</span>
                    {project.status ? (
                      <span className="shrink-0 font-mono text-[7.5pt] uppercase tracking-[0.08em] text-neutral-400">
                        {project.status}
                      </span>
                    ) : null}
                    <span className="ml-auto shrink-0 font-mono text-[8pt] text-neutral-500">
                      {project.repository.replace("https://github.com/kareemheshaam", "")}
                    </span>
                  </div>
                  <p className="text-[8pt] text-neutral-700">{project.description}</p>
                </div>
              ))}
            </div>
          </Section>

          <Section title="Security Research">
            <div className="grid gap-1">
              {articles.map((article) => (
                <div key={article.title}>
                  <h3 className="text-[9pt] font-semibold text-neutral-900">{article.title}</h3>
                  <p className="text-[8pt] text-neutral-700">{article.summary}</p>
                </div>
              ))}
            </div>
          </Section>
        </div>

        <aside className="grid content-start gap-[9px] border-l border-neutral-200 pl-5">
          <Section title="Technical Stack">
            <div className="grid gap-1.5">
              {skillGroups.map((group) => (
                <div key={group.title}>
                  <p className="text-[8.5pt] font-semibold text-neutral-900">{group.title}</p>
                  <p className="text-[8pt] leading-[1.35] text-neutral-600">{group.skills.join(", ")}</p>
                </div>
              ))}
            </div>
          </Section>

          <Section title="References">
            <p className="text-[8pt] leading-[1.4] text-neutral-700">
              Three professional references — a data scientist, an ML engineer, and a web scraper who worked directly
              on these deliveries — independently collected and identity-verified.
            </p>
            <p className="mt-1 text-[8pt] leading-[1.35] text-neutral-500">
              Verified profile available at app.zincwork.com — full link on the portfolio site.
            </p>
          </Section>

          <Section title="Education">
            <p className="text-[9pt] font-semibold text-neutral-900">{education.degree}</p>
            <p className="text-[8pt] text-neutral-600">
              {education.institution} · {education.period}
            </p>
            <p className="mt-1 text-[8pt] leading-[1.35] text-neutral-600">
              Lets me read a terms of service, DPA, or engagement scope and locate the line before code is written.
              The underlying habit — close reading under adversarial conditions — transfers to protocol analysis.
            </p>
          </Section>

          <Section title="Certifications">
            <ul className="grid gap-1">
              {certifications.map((certification) => (
                <li key={certification.name} className="text-[8pt] leading-[1.3] text-neutral-700">
                  {certification.name}
                  <span className="block text-neutral-500">{certification.issuer}</span>
                </li>
              ))}
            </ul>
          </Section>

          <Section title="Languages">
            <ul className="grid gap-0.5">
              {languages.map((language) => (
                <li key={language.name} className="text-[8pt] text-neutral-700">
                  <span className="font-medium">{language.name}</span>
                  <span className="text-neutral-500"> — {language.level}</span>
                </li>
              ))}
            </ul>
          </Section>
        </aside>
      </div>
    </main>
  );
}
