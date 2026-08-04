import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, CheckCircle2, GitBranch, Layers3, PackageCheck } from "lucide-react";
import { GitHubIcon } from "@/components/brand-icons";
import { CodeBlock } from "@/components/code-block";
import { ProjectNavigation } from "@/components/project-navigation";
import { Reveal } from "@/components/reveal";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { projects, siteConfig } from "@/data/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) return {};

  return {
    title: project.name,
    description: project.description,
    alternates: { canonical: `/projects/${project.slug}/` },
    openGraph: {
      title: `${project.name} — ${siteConfig.name}`,
      description: project.description,
      url: `${siteConfig.url}/projects/${project.slug}/`,
    },
  };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const projectIndex = projects.findIndex((item) => item.slug === slug);
  const project = projects[projectIndex];
  if (!project) notFound();
  const nextProject = projects[(projectIndex + 1) % projects.length];

  return (
    <>
      <ProjectNavigation />
      <main id="main-content">
        <section className="border-b">
          <div className="container py-20 sm:py-24 lg:py-32">
            <Reveal>
              <div className="flex items-center gap-3 font-mono text-xs text-muted-foreground">
                <span className="text-accent">PROJECT / {project.index}</span>
                <span aria-hidden="true">·</span>
                <span>OPEN SOURCE</span>
              </div>
              <h1 className="mt-7 max-w-5xl text-balance text-5xl font-semibold leading-[0.95] tracking-[-0.055em] sm:text-7xl lg:text-8xl">
                {project.name}<span className="text-accent">.</span>
              </h1>
              <p className="mt-8 max-w-3xl text-lg leading-8 text-muted-foreground sm:text-xl sm:leading-9">
                {project.longDescription}
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                <Button asChild size="lg" variant="accent">
                  <a href={project.repository} target="_blank" rel="noreferrer">
                    <GitHubIcon className="size-4" aria-hidden="true" /> View repository
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link href="/#projects"><ArrowLeft className="size-4" aria-hidden="true" /> All projects</Link>
                </Button>
              </div>
              <div className="mt-12 flex flex-wrap gap-2 border-t pt-6">
                {project.stack.map((item) => <Badge key={item}>{item}</Badge>)}
              </div>
            </Reveal>
          </div>
        </section>

        <section className="container py-20 sm:py-24 lg:py-28">
          <Reveal>
            <div className="grid gap-6 border-t pt-8 lg:grid-cols-[0.75fr_2fr]">
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-accent">Architecture</p>
              <h2 className="max-w-3xl text-balance text-3xl font-semibold tracking-[-0.04em] sm:text-5xl">
                Small boundaries. Explicit behavior.
              </h2>
            </div>
          </Reveal>
          <div className="mt-14 grid gap-4 md:grid-cols-2">
            {project.architecture.map((item, index) => {
              const icons = [Layers3, GitBranch, PackageCheck, CheckCircle2];
              const Icon = icons[index];
              return (
                <Reveal key={item} delay={index * 0.04} className="rounded-xl border bg-card p-6 sm:p-7">
                  <div className="flex items-center justify-between">
                    <Icon className="size-5 text-accent" aria-hidden="true" />
                    <span className="font-mono text-[10px] text-muted-foreground">0{index + 1}</span>
                  </div>
                  <p className="mt-8 text-[15px] leading-7 text-muted-foreground sm:text-base">{item}</p>
                </Reveal>
              );
            })}
          </div>
        </section>

        <section className="border-y bg-foreground text-background">
          <div className="container py-20 sm:py-24 lg:py-28">
            <Reveal>
              <div className="grid gap-6 lg:grid-cols-[0.75fr_2fr]">
                <p className="font-mono text-xs uppercase tracking-[0.18em] text-accent-inverted">Implementation</p>
                <div>
                  <h2 className="text-balance text-3xl font-semibold tracking-[-0.04em] sm:text-5xl">The important path, in code.</h2>
                  <p className="mt-5 max-w-2xl text-base leading-7 text-background/60">
                    A representative excerpt showing the project&apos;s approach. The complete implementation and history remain available in the public repository.
                  </p>
                </div>
              </div>
              <CodeBlock code={project.code} filename={project.codeFilename} language={project.codeLanguage} className="mt-12" />
            </Reveal>
          </div>
        </section>

        <section className="container py-20 sm:py-24 lg:py-28">
          <div className="grid gap-8 lg:grid-cols-[0.75fr_2fr]">
            <Reveal>
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-accent">Capabilities</p>
            </Reveal>
            <div className="grid gap-3">
              {project.features.map((feature, index) => (
                <Reveal key={feature} delay={index * 0.04} className="flex items-center gap-4 rounded-lg border bg-card p-5">
                  <span className="font-mono text-[10px] text-accent">0{index + 1}</span>
                  <p className="text-sm leading-6 sm:text-base">{feature}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t bg-muted/35">
          <div className="container py-16 sm:py-20">
            <Link href={`/projects/${nextProject.slug}/`} className="group block rounded-xl border bg-card p-7 transition-colors hover:border-accent/50 sm:p-9">
              <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">Next project / {nextProject.index}</p>
              <div className="mt-5 flex items-center justify-between gap-6">
                <h2 className="text-2xl font-semibold tracking-[-0.03em] sm:text-4xl">{nextProject.name}</h2>
                <span className="flex size-11 shrink-0 items-center justify-center rounded-full border transition-colors group-hover:border-accent group-hover:bg-accent group-hover:text-white">
                  <ArrowRight className="size-4" aria-hidden="true" />
                </span>
              </div>
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
