import Link from "next/link";
import {
  ArrowDown,
  ArrowRight,
  Award,
  Boxes,
  Braces,
  CheckCircle2,
  CircleDot,
  Code2,
  Download,
  ExternalLink,
  FileCheck,
  Globe2,
  GraduationCap,
  Languages,
  Mail,
  MapPin,
  Network,
  Newspaper,
  Phone,
  Quote,
  ServerCog,
  ShieldCheck,
  SquareTerminal,
} from "lucide-react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { GitHubIcon, LinkedInIcon } from "@/components/brand-icons";
import { CopyEmail } from "@/components/copy-email";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { articles, certifications, education, experience, impact, languages, projects, siteConfig, skillGroups, testimonials } from "@/data/site";

const heroBadges = ["Python", "FastAPI", "Web Scraping", "Reverse Engineering", "Backend APIs", "Open Source"];

const socialLinks = [
  { label: "GitHub", href: siteConfig.github, icon: GitHubIcon },
  { label: "LinkedIn", href: siteConfig.linkedin, icon: LinkedInIcon },
  { label: "Medium", href: siteConfig.medium, icon: Newspaper },
];

const stats = [
  { value: "3", label: "Open-source tools", detail: "Public repositories with CI" },
  { value: "2", label: "Research articles", detail: "Published technical deep dives" },
  { value: "1", label: "Responsible disclosure", detail: "CWE-835 reported to Samsung" },
  { value: "3", label: "Verified references", detail: "Independently collected via ZincWork" },
  { value: "600+", label: "Targets automated", detail: "Sites and APIs across client work" },
  { value: "2", label: "Languages", detail: "Arabic native · English professional" },
];

const skillIcons = [ServerCog, Boxes, Network, Braces, SquareTerminal];

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b">
      <div className="hairline-grid pointer-events-none absolute inset-0" aria-hidden="true" />
      <div className="container relative grid min-h-[calc(100svh-4rem)] items-center gap-16 py-20 lg:grid-cols-[1.2fr_0.8fr] lg:py-24">
        <Reveal>
          <div className="inline-flex items-center gap-2 rounded-full border bg-background px-3 py-1.5 font-mono text-[11px] text-muted-foreground shadow-crisp">
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-500 opacity-60" />
              <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
            </span>
            Open to backend and automation roles
          </div>
          <h1 className="mt-8 text-balance text-[clamp(3.5rem,10vw,7.5rem)] font-semibold leading-[0.88] tracking-[-0.065em]">
            Kareem
            <br />
            Hesham<span className="text-accent">.</span>
          </h1>
          <p className="mt-7 text-xl font-medium tracking-[-0.02em] sm:text-2xl">{siteConfig.role}</p>
          <p className="mt-5 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
            {siteConfig.description}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild size="lg" variant="accent">
              <a href={siteConfig.resume} download>
                <Download className="size-4" aria-hidden="true" />
                Download resume
              </a>
            </Button>
            {socialLinks.map(({ label, href, icon: Icon }) => (
              <Button key={label} asChild size="lg" variant="outline">
                <a href={href} target="_blank" rel="noreferrer">
                  <Icon className="size-4" aria-hidden="true" />
                  {label}
                </a>
              </Button>
            ))}
          </div>
          <div className="mt-8 flex max-w-2xl flex-wrap gap-2" role="group" aria-label="Core capabilities">
            {heroBadges.map((badge) => <Badge key={badge}>{badge}</Badge>)}
          </div>
        </Reveal>

        <Reveal delay={0.12} className="hidden lg:block">
          <div className="overflow-hidden rounded-xl border bg-[#0d1117] shadow-2xl shadow-black/10">
            <div className="flex h-11 items-center justify-between border-b border-white/10 px-4">
              <div className="flex gap-1.5" aria-hidden="true">
                <span className="size-2.5 rounded-full bg-[#ff5f57]" />
                <span className="size-2.5 rounded-full bg-[#febc2e]" />
                <span className="size-2.5 rounded-full bg-[#28c840]" />
              </div>
              <span className="font-mono text-[10px] tracking-wide text-slate-400">engineer.profile.json</span>
              <span className="w-10" />
            </div>
            <div className="p-6 font-mono text-[13px] leading-7 text-slate-300" role="img" aria-label="Code sample summarizing an engineering profile: focus on reliable systems across protocol, application, and delivery layers.">
              <p><span className="text-slate-400">01</span>&nbsp;&nbsp;<span className="text-blue-400">&#123;</span></p>
              <p><span className="text-slate-400">02</span>&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-sky-300">&quot;focus&quot;</span>: <span className="text-emerald-300">&quot;reliable systems&quot;</span>,</p>
              <p><span className="text-slate-400">03</span>&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-sky-300">&quot;layers&quot;</span>: <span className="text-blue-400">[</span></p>
              <p><span className="text-slate-400">04</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-emerald-300">&quot;protocol&quot;</span>,</p>
              <p><span className="text-slate-400">05</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-emerald-300">&quot;application&quot;</span>,</p>
              <p><span className="text-slate-400">06</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-emerald-300">&quot;delivery&quot;</span></p>
              <p><span className="text-slate-400">07</span>&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-400">]</span>,</p>
              <p><span className="text-slate-400">08</span>&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-sky-300">&quot;principle&quot;</span>: <span className="text-emerald-300">&quot;understand first&quot;</span>,</p>
              <p><span className="text-slate-400">09</span>&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-sky-300">&quot;status&quot;</span>: <span className="text-emerald-300">&quot;shipping&quot;</span></p>
              <p><span className="text-slate-400">10</span>&nbsp;&nbsp;<span className="text-blue-400">&#125;</span></p>
            </div>
            <div className="flex items-center justify-between border-t border-white/10 px-5 py-3 font-mono text-[10px] text-slate-400">
              <span>UTF-8</span>
              <span className="flex items-center gap-1.5"><CircleDot className="size-3 text-emerald-400" aria-hidden="true" /> System operational</span>
            </div>
          </div>
        </Reveal>

        <a
          href="#about"
          className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground lg:flex"
        >
          Scroll to inspect <ArrowDown className="size-3.5" aria-hidden="true" />
        </a>
      </div>
    </section>
  );
}

export function About() {
  return (
    <section id="about" className="section-anchor container">
      <Reveal>
        <SectionHeading
          eyebrow="01 / About"
          title="Engineering below the abstraction line."
          description="I build systems by understanding the layers they depend on—from TLS fingerprints and browser protocols to API boundaries, persistence, and CI. The result is automation that keeps working when the easy assumptions stop being true."
        />
      </Reveal>

      <Reveal delay={0.06} className="mt-12 flex flex-col gap-7 rounded-xl border bg-card p-6 sm:flex-row sm:items-center sm:gap-9 sm:p-8">
        <Image
          src={siteConfig.portrait}
          alt={`Portrait of ${siteConfig.name}`}
          width={160}
          height={160}
          className="size-32 shrink-0 rounded-2xl border bg-gradient-to-b from-slate-100 to-slate-300 object-cover sm:size-40"
          priority={false}
        />
        <div>
          <p className="text-[15px] leading-7 text-muted-foreground sm:text-base sm:leading-8">
            Self-taught through the problems themselves: protected clients that had to be understood before they could be
            automated, and services that had to survive their own success. The payoff is measurable — on one engagement
            a peak day returned a million records from about 10,000 requests, because the work went to the protocol
            instead of the page.
          </p>
          <p className="mt-4 text-[15px] leading-7 text-muted-foreground sm:text-base sm:leading-8">
            I work well inside a team — collaborating with data scientists and ML engineers on delivery, taking direction,
            and applying feedback. That&apos;s reflected in my{" "}
            <a href="#references" className="font-medium text-foreground underline decoration-border underline-offset-4 transition-colors hover:decoration-accent">
              verified references
            </a>
            .
          </p>
        </div>
      </Reveal>

      <div className="mt-4 grid gap-px overflow-hidden rounded-xl border bg-border sm:grid-cols-2 lg:grid-cols-3">
        {stats.map((stat, index) => (
          <Reveal key={stat.label} delay={index * 0.035} className="bg-card p-6 sm:p-7">
            <p className="font-mono text-3xl font-semibold tracking-[-0.05em] text-accent">{stat.value}</p>
            <p className="mt-5 font-medium">{stat.label}</p>
            <p className="mt-1 text-sm text-muted-foreground">{stat.detail}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export function Skills() {
  return (
    <section className="border-y bg-muted/35">
      <div className="container py-20 sm:py-24 lg:py-32">
        <Reveal>
          <SectionHeading
            eyebrow="02 / Capabilities"
            title="A stack built for systems work."
            description="Tools are selected for control, observability, and a clean path from investigation to dependable production software."
          />
        </Reveal>
        <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-6">
          {skillGroups.map((group, index) => {
            const Icon = skillIcons[index];
            return (
              <Reveal
                key={group.title}
                delay={index * 0.04}
                className={`rounded-xl border bg-card p-6 shadow-crisp ${index < 2 ? "lg:col-span-3" : "lg:col-span-2"}`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex size-10 items-center justify-center rounded-lg border bg-muted">
                    <Icon className="size-5 text-accent" aria-hidden="true" />
                  </div>
                  <span className="font-mono text-[10px] text-muted-foreground">0{index + 1}</span>
                </div>
                <h3 className="mt-6 text-lg font-semibold tracking-tight">{group.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">{group.description}</p>
                <div className="mt-5 flex flex-wrap gap-1.5">
                  {group.skills.map((skill) => <Badge key={skill} className="bg-muted/60">{skill}</Badge>)}
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function Experience() {
  return (
    <section id="experience" className="section-anchor container">
      <Reveal>
        <SectionHeading
          eyebrow="03 / Experience"
          title="How the work actually runs."
          description="Contract engagements rather than salaried roles: investigating difficult protocols, designing maintainable implementations, and carrying them into production. Embedded in small client teams alongside data scientists and ML engineers, delivering against their requirements and review."
        />
      </Reveal>
      <Reveal className="mt-14 grid gap-8 border-l-2 border-accent pl-6 sm:pl-10 lg:grid-cols-[0.75fr_2fr] lg:gap-6">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.16em] text-accent">{experience.period}</p>
          <p className="mt-2 text-sm text-muted-foreground">{experience.engagement}</p>
          <p className="mt-1 text-sm text-muted-foreground">{experience.location}</p>
        </div>
        <div>
          <h3 className="text-2xl font-semibold tracking-[-0.03em] sm:text-3xl">{experience.title}</h3>
          <p className="mt-2 text-sm text-muted-foreground">{experience.disciplines}</p>
          <ul className="mt-8 grid gap-5">
            {experience.bullets.map((item) => (
              <li key={item} className="flex gap-3 text-[15px] leading-7 text-muted-foreground sm:text-base">
                <CheckCircle2 className="mt-1.5 size-4 shrink-0 text-accent" aria-hidden="true" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </Reveal>

      <Reveal delay={0.1} className="mt-16">
        <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
          <h3 className="text-lg font-semibold tracking-[-0.02em]">Delivery figures</h3>
          <p className="max-w-xl text-sm leading-6 text-muted-foreground">
            Aggregate figures across client engagements from 2022 onward. Volume comes from reading the protocol directly rather than driving a browser.
          </p>
        </div>
        <div className="mt-7 grid gap-px overflow-hidden rounded-xl border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {impact.map((metric) => (
            <div key={metric.label} className="bg-card p-6 sm:p-7">
              <p className="flex items-baseline gap-2">
                <span className="font-mono text-3xl font-semibold tracking-[-0.05em] text-accent">{metric.value}</span>
                <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">{metric.unit}</span>
              </p>
              <p className="mt-5 font-medium">{metric.label}</p>
              <p className="mt-1 text-sm leading-6 text-muted-foreground">{metric.detail}</p>
            </div>
          ))}
        </div>
        <p className="mt-5 flex items-start gap-2.5 text-sm leading-6 text-muted-foreground">
          <FileCheck className="mt-0.5 size-4 shrink-0 text-accent" aria-hidden="true" />
          <span>
            Figures span client engagements between 2022 and 2026. Client names, target systems, and delivered datasets
            are covered by confidentiality agreements; specifics are available on request under NDA, and the{" "}
            <a href="#references" className="font-medium text-foreground underline decoration-border underline-offset-4 transition-colors hover:decoration-accent">
              referees below
            </a>{" "}
            worked directly on this delivery.
          </span>
        </p>
      </Reveal>
    </section>
  );
}

export function Projects() {
  return (
    <section id="projects" className="border-y bg-foreground text-background">
      <div className="container py-20 sm:py-24 lg:py-32">
        <Reveal>
          <div className="grid gap-6 border-t border-background/20 pt-8 lg:grid-cols-[0.75fr_2fr]">
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-accent-inverted">04 / Selected work</p>
            <div>
              <h2 className="text-balance text-3xl font-semibold tracking-[-0.04em] sm:text-4xl lg:text-5xl">Open systems. Inspectable decisions.</h2>
              <p className="mt-5 max-w-2xl text-base leading-7 text-background/60 sm:text-lg sm:leading-8">
                Each project isolates a hard systems problem, makes the architecture legible, and leaves the implementation open for inspection.
              </p>
            </div>
          </div>
        </Reveal>

        <div className="mt-16 grid gap-5">
          {projects.map((project, projectIndex) => (
            <Reveal key={project.slug} delay={projectIndex * 0.05}>
              <article className="group rounded-xl border border-background/20 bg-background/[0.04] p-6 transition-colors hover:bg-background/[0.07] sm:p-8">
                <div className="grid gap-8 lg:grid-cols-[0.25fr_1fr_0.9fr]">
                  <p className="font-mono text-sm text-accent-inverted">/{project.index}</p>
                  <div>
                    <div className="flex flex-wrap items-center gap-3">
                      <h3 className="text-2xl font-semibold tracking-[-0.03em] sm:text-3xl">{project.name}</h3>
                      <Badge className="border-background/20 bg-transparent text-background/60">{project.language}</Badge>
                      {project.status ? (
                        <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-background/70">
                          {project.status}
                        </span>
                      ) : null}
                    </div>
                    <p className="mt-4 max-w-xl text-[15px] leading-7 text-background/65">{project.description}</p>
                    <div className="mt-6 flex flex-wrap gap-2">
                      {project.stack.slice(0, 5).map((item) => (
                        <span key={item} className="font-mono text-[10px] uppercase tracking-wide text-background/70">{item}</span>
                      ))}
                    </div>
                  </div>
                  <div className="flex flex-col justify-between gap-8">
                    <ul className="space-y-2.5">
                      {project.features.slice(0, 3).map((feature) => (
                        <li key={feature} className="flex gap-2.5 text-sm leading-6 text-background/60">
                          <span className="mt-2 size-1 shrink-0 rounded-full bg-accent-inverted" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-3">
                      <Button asChild variant="outline" className="border-background/20 bg-transparent text-background hover:bg-background hover:text-foreground">
                        <Link href={`/projects/${project.slug}/`}>
                          Architecture <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
                        </Link>
                      </Button>
                      <Button asChild variant="ghost" className="text-background/70 hover:bg-background/10 hover:text-background">
                        <a href={project.repository} target="_blank" rel="noreferrer">
                          <GitHubIcon className="size-4" aria-hidden="true" /> Repository
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Research() {
  const research = [
    {
      icon: ShieldCheck,
      domain: "Protected web systems",
      title: "Anti-bot stack decomposition",
      method: "Dynamic analysis · AST tooling · Headless reproduction",
      summary: "Mapped the layered interaction between generated JavaScript, device fingerprinting, behavioral telemetry, and server-side challenge verification.",
    },
    {
      icon: Code2,
      domain: "Mobile imaging security",
      title: "Samsung UltraHDR loop analysis",
      method: "arm64 reversing · Frida · AFL++",
      summary: "Traced a non-terminating execution path in the UltraHDR stack and validated the denial-of-service condition through coverage-guided fuzzing.",
    },
  ];

  return (
    <section id="research" className="section-anchor container">
      <Reveal>
        <SectionHeading
          eyebrow="05 / Research"
          title="Understand the mechanism. Then reproduce it."
          description="Technical research is part of the engineering process: isolate assumptions, instrument the target, build the smallest useful model, and document what survives scrutiny."
        />
      </Reveal>
      <div className="mt-14 grid gap-4 lg:grid-cols-2">
        {research.map(({ icon: Icon, ...item }, index) => (
          <Reveal key={item.title} delay={index * 0.06} className="rounded-xl border bg-card p-7 sm:p-8">
            <div className="flex items-center justify-between">
              <span className="flex size-11 items-center justify-center rounded-lg border bg-muted">
                <Icon className="size-5 text-accent" aria-hidden="true" />
              </span>
              <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">Study 0{index + 1}</span>
            </div>
            <p className="mt-8 font-mono text-xs uppercase tracking-[0.14em] text-accent">{item.domain}</p>
            <h3 className="mt-3 text-2xl font-semibold tracking-[-0.03em]">{item.title}</h3>
            <p className="mt-4 text-[15px] leading-7 text-muted-foreground">{item.summary}</p>
            <p className="mt-7 border-t pt-5 font-mono text-[11px] text-muted-foreground">{item.method}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export function Articles() {
  return (
    <section id="articles" className="border-y bg-muted/35">
      <div className="container py-20 sm:py-24 lg:py-32">
        <Reveal>
          <SectionHeading
            eyebrow="06 / Articles"
            title="Research, written for engineers."
            description="Long-form field notes on the constraints, false starts, tooling, and mechanisms behind the result."
          />
        </Reveal>
        <div className="mt-14 border-t">
          {articles.map((article, index) => (
            <Reveal key={article.href} delay={index * 0.05}>
              <a
                href={article.href}
                target="_blank"
                rel="noreferrer"
                className="group grid gap-5 border-b py-8 transition-colors hover:bg-card sm:p-8 lg:grid-cols-[0.25fr_1.2fr_1fr_auto] lg:items-center"
              >
                <span className="font-mono text-xs text-accent">/{article.number}</span>
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-muted-foreground">{article.category}</p>
                  <h3 className="mt-2 text-xl font-semibold tracking-[-0.025em] sm:text-2xl">{article.title}</h3>
                </div>
                <p className="text-sm leading-6 text-muted-foreground">{article.summary}</p>
                <span className="flex size-10 items-center justify-center rounded-full border transition-colors group-hover:border-accent group-hover:bg-accent group-hover:text-white">
                  <ExternalLink className="size-4" aria-hidden="true" />
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Certifications() {
  return (
    <section id="certifications" className="section-anchor container">
      <Reveal>
        <SectionHeading
          eyebrow="08 / Credentials"
          title="Education, languages, and verified training."
          description="Public code, CI history, and published research carry the engineering evidence. What follows is the formal record behind it."
        />
      </Reveal>

      <div className="mt-14 grid gap-4 lg:grid-cols-[1.6fr_1fr]">
        <Reveal className="rounded-xl border bg-card p-6 sm:p-8">
          <div className="flex items-start justify-between gap-4">
            <span className="flex size-10 items-center justify-center rounded-lg border bg-muted">
              <GraduationCap className="size-4 text-accent" aria-hidden="true" />
            </span>
            <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">{education.period}</span>
          </div>
          <h3 className="mt-8 text-xl font-semibold tracking-[-0.02em]">{education.degree}</h3>
          <p className="mt-2 text-sm text-muted-foreground">{education.institution}</p>
          <p className="mt-5 max-w-xl text-[15px] leading-7 text-muted-foreground">{education.note}</p>
          <p className="mt-6 border-t pt-5 text-sm text-muted-foreground">
            Academic reference:{" "}
            <a href={education.reference.href} target="_blank" rel="noreferrer" className="font-medium text-foreground underline decoration-border underline-offset-4 transition-colors hover:decoration-accent">
              {education.reference.name}
            </a>
            <span className="block text-[13px]">{education.reference.title}</span>
          </p>
        </Reveal>

        <Reveal delay={0.05} className="rounded-xl border bg-card p-6 sm:p-8">
          <div className="flex items-start justify-between gap-4">
            <span className="flex size-10 items-center justify-center rounded-lg border bg-muted">
              <Languages className="size-4 text-accent" aria-hidden="true" />
            </span>
            <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">Languages</span>
          </div>
          <dl className="mt-8 grid gap-3">
            {languages.map((language) => (
              <div key={language.name} className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 border-b pb-3 last:border-0 last:pb-0">
                <dt className="font-medium">{language.name}</dt>
                <dd className="text-sm text-muted-foreground">{language.level}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>

      <Reveal delay={0.1} className="mt-4 rounded-xl border bg-card p-6 sm:p-8">
        <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
          <h3 className="flex items-center gap-2.5 font-semibold tracking-tight">
            <Award className="size-4 text-accent" aria-hidden="true" />
            Completed coursework
          </h3>
          <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
            {certifications.length} course certificates
          </p>
        </div>
        <ul className="mt-6 grid gap-x-8 gap-y-3 sm:grid-cols-2">
          {certifications.map((credential) => (
            <li key={credential.href}>
              <a
                href={credential.href}
                target="_blank"
                rel="noreferrer"
                className="group flex items-baseline justify-between gap-3 border-b pb-3 text-sm transition-colors hover:border-accent/50"
              >
                <span className="font-medium leading-6">{credential.name}</span>
                <span className="flex shrink-0 items-center gap-1.5 text-[13px] text-muted-foreground">
                  {credential.issuer}
                  <ExternalLink className="size-3 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
                </span>
              </a>
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  );
}

export function References() {
  return (
    <section id="references" className="border-y bg-muted/35">
      <div className="container py-20 sm:py-24 lg:py-32">
        <Reveal>
          <SectionHeading
            eyebrow="07 / References"
            title="What collaborators say."
            description="Independently collected and identity-verified through ZincWork. Each referee worked directly with me on delivery."
          />
        </Reveal>

        <div className="mt-14 grid gap-4 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Reveal key={testimonial.name} delay={index * 0.05} className="flex h-full flex-col rounded-xl border bg-card p-6 sm:p-7">
              <Quote className="size-5 shrink-0 text-accent" aria-hidden="true" />
              <blockquote className="mt-5 flex-1 text-[15px] leading-7">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>
              <p className="mt-5 border-t pt-5 text-sm leading-6 text-muted-foreground">{testimonial.context}</p>
              <div className="mt-5 flex items-center justify-between gap-3">
                <div>
                  <p className="font-medium leading-6">{testimonial.name}</p>
                  <p className="text-[13px] text-muted-foreground">{testimonial.title}</p>
                </div>
                <a
                  href={testimonial.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`${testimonial.name} on LinkedIn`}
                  className="flex size-9 shrink-0 items-center justify-center rounded-full border text-muted-foreground transition-colors hover:border-accent/50 hover:text-foreground"
                >
                  <LinkedInIcon className="size-4" aria-hidden="true" />
                </a>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.15} className="mt-4 flex flex-wrap items-center justify-between gap-4 rounded-xl border bg-card px-6 py-5">
          <p className="flex items-center gap-2.5 text-sm text-muted-foreground">
            <ShieldCheck className="size-4 shrink-0 text-accent" aria-hidden="true" />
            Full reference pack, independently verified.
          </p>
          <Button asChild variant="outline">
            <a href={siteConfig.references} target="_blank" rel="noreferrer">
              View on ZincWork <ExternalLink className="size-4" aria-hidden="true" />
            </a>
          </Button>
        </Reveal>
      </div>
    </section>
  );
}

export function Contact() {
  return (
    <section id="contact" className="border-t bg-foreground text-background">
      <div className="container py-20 sm:py-24 lg:py-32">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-accent-inverted">09 / Contact</p>
          <div className="mt-10 grid gap-12 lg:grid-cols-[1.35fr_0.65fr] lg:items-end">
            <div>
              <h2 className="max-w-4xl text-balance text-4xl font-semibold leading-[1.02] tracking-[-0.055em] sm:text-6xl lg:text-7xl">
                Have a difficult system problem?
                <span className="text-background/45"> Let&apos;s inspect it.</span>
              </h2>
              <p className="mt-7 max-w-2xl text-base leading-7 text-background/60 sm:text-lg sm:leading-8">
                Open to backend and automation roles, and to technically demanding contract work across data acquisition, reverse engineering, and Python backend systems.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button asChild size="lg" className="bg-background text-foreground hover:bg-background/90">
                  <a href={`mailto:${siteConfig.email}`}>
                    <Mail className="size-4" aria-hidden="true" /> Start a conversation
                  </a>
                </Button>
                <CopyEmail className="h-12 border-background/20 bg-transparent text-background hover:bg-background/10 hover:text-background" />
                <Button asChild size="lg" variant="ghost" className="text-background/70 hover:bg-background/10 hover:text-background">
                  <a href={siteConfig.resume} download>
                    <Download className="size-4" aria-hidden="true" /> Resume
                  </a>
                </Button>
              </div>
            </div>
            <div className="border-t border-background/20 pt-6 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
              <div className="flex items-center gap-2 text-sm text-background/65">
                <MapPin className="size-4 text-accent-inverted" aria-hidden="true" /> {siteConfig.location}
              </div>
              <a href={`mailto:${siteConfig.email}`} className="mt-4 block break-all font-mono text-sm hover:text-accent-inverted">
                {siteConfig.email}
              </a>
              <a href={`tel:${siteConfig.phoneHref}`} className="mt-3 flex items-center gap-2 font-mono text-sm text-background/65 transition-colors hover:text-background">
                <Phone className="size-4 text-accent-inverted" aria-hidden="true" /> {siteConfig.phone}
              </a>
              <div className="mt-7 flex gap-2">
                {socialLinks.map(({ label, href, icon: Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={label}
                    className="flex size-10 items-center justify-center rounded-full border border-background/20 text-background/65 transition-colors hover:border-background hover:text-background"
                  >
                    <Icon className="size-4" aria-hidden="true" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-background/10 bg-foreground text-background">
      <div className="container flex flex-col gap-4 py-7 text-xs text-background/70 sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} Kareem Hesham.</p>
        <div className="flex items-center gap-4 font-mono">
          <span className="flex items-center gap-1.5"><Globe2 className="size-3" aria-hidden="true" /> Cairo · UTC+3</span>
          <a href="#main-content" className="transition-colors hover:text-background">Back to start ↑</a>
        </div>
      </div>
    </footer>
  );
}
