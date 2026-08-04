"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowDown, CornerDownLeft, Download, FileText, Mail, Moon, Search, X } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "@/components/brand-icons";
import { navItems, projects, siteConfig } from "@/data/site";
import { cn } from "@/lib/utils";
import { useFocusTrap } from "@/lib/use-focus-trap";

type Command = {
  label: string;
  group: "Navigate" | "Projects" | "Connect" | "Actions";
  keywords: string;
  icon: React.ComponentType<{ className?: string }>;
  action: () => void;
};

export function CommandPalette() {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const dialogRef = useFocusTrap<HTMLDivElement>(open);

  const commands = useMemo<Command[]>(
    () => [
      ...navItems.map((item) => ({
        label: `Go to ${item.label}`,
        group: "Navigate" as const,
        keywords: `${item.label} section navigation`,
        icon: ArrowDown,
        action: () => document.querySelector(item.href)?.scrollIntoView({ behavior: "smooth" }),
      })),
      ...projects.map((project) => ({
        label: `Open ${project.name}`,
        group: "Projects" as const,
        keywords: `${project.name} ${project.stack.join(" ")}`,
        icon: FileText,
        action: () => router.push(`/projects/${project.slug}/`),
      })),
      {
        label: "Open GitHub",
        group: "Connect" as const,
        keywords: "github source code profile",
        icon: GitHubIcon,
        action: () => window.open(siteConfig.github, "_blank", "noopener,noreferrer"),
      },
      {
        label: "Open LinkedIn",
        group: "Connect" as const,
        keywords: "linkedin career profile",
        icon: LinkedInIcon,
        action: () => window.open(siteConfig.linkedin, "_blank", "noopener,noreferrer"),
      },
      {
        label: "Send email",
        group: "Connect" as const,
        keywords: "contact email hire",
        icon: Mail,
        action: () => { window.location.href = `mailto:${siteConfig.email}`; },
      },
      {
        label: "Download resume",
        group: "Actions" as const,
        keywords: "resume cv pdf download",
        icon: Download,
        action: () => {
          const link = document.createElement("a");
          link.href = siteConfig.resume;
          link.download = "Kareem-Hesham-Resume.pdf";
          link.click();
        },
      },
      {
        label: "Toggle color theme",
        group: "Actions" as const,
        keywords: "theme dark light appearance",
        icon: Moon,
        action: () => {
          const next = !document.documentElement.classList.contains("dark");
          document.documentElement.classList.toggle("dark", next);
          localStorage.setItem("theme", next ? "dark" : "light");
        },
      },
    ],
    [router],
  );

  const filtered = commands.filter((command) =>
    `${command.label} ${command.keywords}`.toLowerCase().includes(query.toLowerCase()),
  );

  function close() {
    setOpen(false);
    setQuery("");
    setSelected(0);
  }

  function run(command: Command | undefined) {
    if (!command) return;
    close();
    // Wait for the scroll lock on <body> to lift, otherwise smooth scrolling stalls.
    requestAnimationFrame(() => requestAnimationFrame(command.action));
  }

  useEffect(() => {
    function onKeydown(event: KeyboardEvent) {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setOpen((value) => !value);
      }
      if (event.key === "Escape") close();
    }
    const onOpen = () => setOpen(true);
    window.addEventListener("keydown", onKeydown);
    window.addEventListener("open-command-palette", onOpen);
    return () => {
      window.removeEventListener("keydown", onKeydown);
      window.removeEventListener("open-command-palette", onOpen);
    };
  }, []);

  useEffect(() => {
    if (open) {
      inputRef.current?.focus();
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[80] flex items-start justify-center bg-foreground/20 px-4 pt-[12vh] backdrop-blur-sm dark:bg-black/55"
      onMouseDown={(event) => event.currentTarget === event.target && close()}
    >
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-label="Command palette"
        className="w-full max-w-xl overflow-hidden rounded-xl border bg-background shadow-2xl"
      >
        <div className="flex items-center gap-3 border-b px-4">
          <Search className="size-4 text-muted-foreground" aria-hidden="true" />
          <input
            ref={inputRef}
            value={query}
            onChange={(event) => {
              setQuery(event.target.value);
              setSelected(0);
            }}
            onKeyDown={(event) => {
              if (event.key === "ArrowDown") {
                event.preventDefault();
                setSelected((value) => Math.min(value + 1, filtered.length - 1));
              }
              if (event.key === "ArrowUp") {
                event.preventDefault();
                setSelected((value) => Math.max(value - 1, 0));
              }
              if (event.key === "Enter") run(filtered[selected]);
            }}
            className="h-14 flex-1 bg-transparent text-sm outline-none placeholder:text-muted-foreground"
            placeholder="Type a command or search…"
            aria-label="Search commands"
            role="combobox"
            aria-expanded
            aria-controls="command-palette-results"
            aria-activedescendant={filtered[selected] ? `command-option-${selected}` : undefined}
            autoComplete="off"
          />
          <button onClick={close} className="rounded p-1 text-muted-foreground hover:bg-muted" aria-label="Close command palette">
            <X className="size-4" aria-hidden="true" />
          </button>
        </div>

        <div id="command-palette-results" role="listbox" aria-label="Commands" className="max-h-[50vh] overflow-y-auto p-2">
          {filtered.length ? (
            filtered.map((command, index) => {
              const Icon = command.icon;
              const showGroup = index === 0 || filtered[index - 1]?.group !== command.group;
              return (
                <div key={`${command.group}-${command.label}`} role="presentation">
                  {showGroup ? (
                    <p className="px-3 pb-1 pt-3 font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
                      {command.group}
                    </p>
                  ) : null}
                  <button
                    type="button"
                    id={`command-option-${index}`}
                    role="option"
                    aria-selected={selected === index}
                    tabIndex={-1}
                    onMouseEnter={() => setSelected(index)}
                    onClick={() => run(command)}
                    className={cn(
                      "flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left text-sm transition-colors duration-150",
                      selected === index && "bg-muted",
                    )}
                  >
                    <Icon className="size-4 text-muted-foreground" aria-hidden="true" />
                    <span className="flex-1">{command.label}</span>
                    {selected === index ? <CornerDownLeft className="size-3.5 text-muted-foreground" aria-hidden="true" /> : null}
                  </button>
                </div>
              );
            })
          ) : (
            <p className="px-3 py-10 text-center text-sm text-muted-foreground">No matching commands.</p>
          )}
        </div>
        <div className="flex items-center justify-between border-t bg-muted/50 px-4 py-2 font-mono text-[10px] text-muted-foreground">
          <span>Navigate with ↑ ↓</span>
          <span>Enter to select · Esc to close</span>
        </div>
      </div>
    </div>
  );
}
