import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  className?: string;
};

export function SectionHeading({ eyebrow, title, description, className }: SectionHeadingProps) {
  return (
    <div className={cn("grid gap-6 border-t pt-8 lg:grid-cols-[0.75fr_2fr]", className)}>
      <p className="font-mono text-xs uppercase tracking-[0.18em] text-accent">{eyebrow}</p>
      <div className="max-w-3xl">
        <h2 className="text-balance text-3xl font-semibold tracking-[-0.035em] sm:text-4xl lg:text-5xl">
          {title}
        </h2>
        {description ? (
          <p className="mt-5 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
            {description}
          </p>
        ) : null}
      </div>
    </div>
  );
}
