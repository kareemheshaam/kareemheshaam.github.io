"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Download, Menu, Search, X } from "lucide-react";
import { navItems, siteConfig } from "@/data/site";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { useFocusTrap } from "@/lib/use-focus-trap";

export function Navigation() {
  const [active, setActive] = useState("about");
  const [open, setOpen] = useState(false);
  const menuRef = useFocusTrap<HTMLDivElement>(open);

  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.href.slice(1)))
      .filter((section): section is HTMLElement => Boolean(section));

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-20% 0px -65% 0px", threshold: [0, 0.15, 0.5] },
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onEscape = (event: KeyboardEvent) => event.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onEscape);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onEscape);
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b bg-background/90 backdrop-blur-md supports-[backdrop-filter]:bg-background/80">
      <nav className="container flex h-16 items-center justify-between" aria-label="Primary navigation">
        <Link href="/" className="group flex items-center gap-2.5 font-semibold tracking-[-0.02em]">
          <Image
            src={siteConfig.avatar}
            alt=""
            width={56}
            height={56}
            priority
            className="size-7 shrink-0 rounded-full border bg-slate-200 object-cover transition-transform group-hover:scale-105"
          />
          <span className="hidden sm:inline">Kareem Hesham</span>
          <span className="sr-only sm:hidden">Kareem Hesham</span>
        </Link>

        <div className="hidden items-center gap-0.5 xl:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={cn(
                "rounded-md px-2.5 py-2 text-[13px] transition-colors hover:text-foreground",
                active === item.href.slice(1) ? "bg-muted font-medium text-foreground" : "text-muted-foreground",
              )}
              aria-current={active === item.href.slice(1) ? "location" : undefined}
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-1.5">
          <Button
            type="button"
            variant="ghost"
            size="sm"
            className="hidden gap-2 text-muted-foreground md:inline-flex"
            onClick={() => window.dispatchEvent(new Event("open-command-palette"))}
            aria-label="Open command palette"
          >
            <Search className="size-3.5" aria-hidden="true" />
            <span>Search</span>
            <kbd className="rounded border bg-muted px-1.5 py-0.5 font-mono text-[10px]">⌘K</kbd>
          </Button>
          <ThemeToggle />
          <Button asChild size="sm" className="hidden sm:inline-flex">
            <a href={siteConfig.resume} download>
              <Download className="size-3.5" aria-hidden="true" />
              Resume
            </a>
          </Button>
          <Button
            type="button"
            variant="ghost"
            size="icon"
            className="xl:hidden"
            onClick={() => setOpen((value) => !value)}
            aria-label={open ? "Close navigation" : "Open navigation"}
            aria-expanded={open}
            aria-controls="mobile-navigation"
          >
            {open ? <X className="size-5" aria-hidden="true" /> : <Menu className="size-5" aria-hidden="true" />}
          </Button>
        </div>
      </nav>

      {open ? (
        <div
          id="mobile-navigation"
          ref={menuRef}
          className="fixed inset-x-0 top-16 h-[calc(100dvh-4rem)] border-t bg-background xl:hidden"
        >
          <div className="container flex h-full flex-col py-6">
            <div className="grid">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-between border-b py-4 text-lg font-medium tracking-tight"
                >
                  {item.label}
                  <span className="font-mono text-xs text-muted-foreground">{item.href.replace("#", "/")}</span>
                </a>
              ))}
            </div>
            <div className="mt-auto grid gap-3 pb-4">
              <Button
                type="button"
                variant="outline"
                onClick={() => {
                  setOpen(false);
                  window.dispatchEvent(new Event("open-command-palette"));
                }}
              >
                <Search className="size-4" aria-hidden="true" />
                Open command palette
              </Button>
              <Button asChild>
                <a href={siteConfig.resume} download>
                  <Download className="size-4" aria-hidden="true" />
                  Download resume
                </a>
              </Button>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
