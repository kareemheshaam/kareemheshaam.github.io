import Link from "next/link";
import { ArrowLeft, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { siteConfig } from "@/data/site";

export function ProjectNavigation() {
  return (
    <header className="sticky top-0 z-50 border-b bg-background/90 backdrop-blur-md supports-[backdrop-filter]:bg-background/80">
      <nav className="container flex h-16 items-center justify-between" aria-label="Project navigation">
        <Link href="/#projects" className="flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
          <ArrowLeft className="size-4" aria-hidden="true" />
          <span className="hidden sm:inline">Back to projects</span>
          <span className="sm:hidden">Projects</span>
        </Link>
        <Link href="/" className="absolute left-1/2 flex -translate-x-1/2 items-center gap-2.5 font-semibold tracking-[-0.02em]">
          <span className="flex size-7 items-center justify-center rounded-md bg-foreground font-mono text-[11px] font-bold text-background" aria-hidden="true">KH</span>
          <span className="hidden md:inline">Kareem Hesham</span>
          <span className="sr-only md:hidden">Kareem Hesham</span>
        </Link>
        <div className="flex items-center gap-1.5">
          <ThemeToggle />
          <Button asChild size="sm" className="hidden sm:inline-flex">
            <a href={siteConfig.resume} download>
              <Download className="size-3.5" aria-hidden="true" /> Resume
            </a>
          </Button>
        </div>
      </nav>
    </header>
  );
}
