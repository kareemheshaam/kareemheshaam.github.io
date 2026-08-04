import type { Metadata } from "next";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = { robots: { index: false, follow: false } };

// Rendered at 1200x630 and screenshotted to public/og-card.png during asset
// generation; not linked from the site.
export default function OgPreviewPage() {
  return (
    <div className="og-card relative flex h-[630px] w-[1200px] flex-col justify-between overflow-hidden bg-[#fafafa] px-[72px] py-[64px]">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(to right, #e5e7eb 1px, transparent 1px), linear-gradient(to bottom, #e5e7eb 1px, transparent 1px)",
          backgroundSize: "240px 126px",
        }}
      />
      <div className="relative flex items-center gap-5">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={siteConfig.avatar}
          alt=""
          width={96}
          height={96}
          className="size-[88px] rounded-full border border-[#d4d4d8] bg-[#e2e8f0] object-cover"
        />
        <div>
          <p className="font-mono text-[19px] uppercase tracking-[0.16em] text-[#6b7280]">Cairo, Egypt · Remote</p>
          <p className="mt-1 font-mono text-[19px] text-[#2563eb]">kareemheshaam.github.io</p>
        </div>
      </div>

      <div className="relative">
        <h1 className="text-[88px] font-bold leading-[0.95] tracking-[-0.045em] text-[#111318]">
          Kareem Hesham<span className="text-[#2563eb]">.</span>
        </h1>
        <p className="mt-5 text-[34px] font-medium leading-tight text-[#374151]">
          Python Automation, Web Scraping &amp; Backend Engineer
        </p>
      </div>

      <div className="relative flex items-end justify-between gap-10">
        <p className="font-mono text-[17px] uppercase leading-relaxed tracking-[0.12em] text-[#6b7280]">
          Python / FastAPI / Reverse engineering
        </p>
        <p className="shrink-0 text-right text-[21px] font-medium leading-snug text-[#111318]">
          Peak day: 1M records from
          <br />
          direct protocol access
        </p>
      </div>
    </div>
  );
}
