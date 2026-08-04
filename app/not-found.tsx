import Link from "next/link";
import { ArrowLeft, FileQuestion } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <main id="main-content" className="container flex min-h-screen items-center justify-center py-24">
      <div className="max-w-xl text-center">
        <div className="mx-auto mb-8 flex size-14 items-center justify-center rounded-xl border bg-card">
          <FileQuestion className="size-6 text-accent" aria-hidden="true" />
        </div>
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">404 / Not found</p>
        <h1 className="mt-4 text-balance text-4xl font-semibold tracking-[-0.04em] sm:text-6xl">
          This endpoint does not exist.
        </h1>
        <p className="mx-auto mt-5 max-w-md text-base leading-7 text-muted-foreground">
          The route may have moved, or the URL may be incorrect. The main portfolio is still online.
        </p>
        <Button asChild className="mt-8">
          <Link href="/">
            <ArrowLeft className="size-4" aria-hidden="true" />
            Return home
          </Link>
        </Button>
      </div>
    </main>
  );
}
