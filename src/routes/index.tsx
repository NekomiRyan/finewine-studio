import { createFileRoute } from "@tanstack/react-router";
import { ArrowDown, ArrowUpRight } from "lucide-react";

const REPO = "https://github.com/stoicswe/Endfield_FineWine";
const RELEASES = `${REPO}/releases`;
const DOCS = `${REPO}/wiki`;
const ENDFIELD = "https://endfield-finewine.web.app";

const TITLE = "FineWine — Windows games on Apple Silicon";
const DESC =
  "FineWine is a standalone Mac menu bar app with its own Wine runtime. Run Windows games on Apple Silicon — no CrossOver, no Rosetta 2.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Bottle({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M10 2h4M10.5 2v4.2c0 .6-.3 1.1-.7 1.5C8.7 8.6 8 10 8 11.5V20a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-8.5c0-1.5-.7-2.9-1.8-3.8-.4-.4-.7-.9-.7-1.5V2" />
      <path d="M8 13.5h4.5a1.5 1.5 0 0 1 1.5 1.5v2a1.5 1.5 0 0 1-1.5 1.5H8" />
    </svg>
  );
}

const pill = "inline-flex items-center justify-center gap-2 rounded-full px-5 h-10 text-sm font-medium transition-colors";
const solid = `${pill} bg-foreground text-background hover:bg-foreground/85`;
const ghost = `${pill} border border-border text-foreground hover:bg-secondary`;

const features = [
  { n: "01", t: "Independent by design.", d: "A standalone app with its own Wine runtime. No CrossOver license. No Rosetta 2 required." },
  { n: "02", t: "Windows, meet Metal.", d: "Native ARM64 Wine, FEX translation for x64, and graphics powered by DXMT and MoltenVK." },
  { n: "03", t: "Right where you need it.", d: "Manage prefixes from the menu bar. Create shortcut apps for Finder, Launchpad and your Dock." },
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      <header className="sticky top-0 z-50 border-b border-border/60 bg-background/70 backdrop-blur-xl">
        <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-5 sm:px-8">
          <a href="/" className="flex shrink-0 items-center gap-2 font-semibold tracking-tight">
            <Bottle className="h-5 w-5" /> FineWine
          </a>
          <div className="flex items-center gap-5 sm:gap-7">
            <a href={DOCS} className="hidden text-xs text-muted-foreground hover:text-foreground sm:inline">Documentation</a>
            <a href={REPO} className="hidden text-xs text-muted-foreground hover:text-foreground sm:inline">GitHub</a>
            <a href={RELEASES} className={`${ghost} h-9 px-4 text-xs`}>Download</a>
          </div>
        </nav>
      </header>

      <main>
        <section className="mx-auto max-w-6xl px-5 pt-20 text-center sm:px-8 sm:pt-28">
          <span className="inline-flex items-center gap-2 rounded-full border border-border px-3 py-1 text-[10px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-foreground" /> FineWine for Apple Silicon
          </span>
          <h1 className="mx-auto mt-7 max-w-4xl text-[clamp(2.6rem,8vw,5.75rem)] font-semibold leading-[1.02] tracking-[-0.045em] fade-up">
            Windows games.<br />Mac at heart.
          </h1>
          <p className="mx-auto mt-6 max-w-md text-base text-muted-foreground sm:text-lg">
            A new home for Windows games on Apple Silicon. Your own Wine runtime. A familiar Mac experience.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a href={RELEASES} className={solid}>Download FineWine <ArrowDown className="h-4 w-4" /></a>
            <a href={DOCS} className={ghost}>Read the docs</a>
          </div>
          <p className="mt-5 text-xs text-muted-foreground">Beta · macOS 26 or later · Apple Silicon</p>

          <div className="relative mt-20 flex flex-col items-center pb-8 sm:mt-24">
            <div className="glow pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[min(640px,100%)] -translate-x-1/2 -translate-y-1/2" />
            <div className="relative flex h-36 w-36 flex-col items-center justify-center gap-3 rounded-[2rem] border border-border bg-gradient-to-b from-secondary to-card shadow-2xl sm:h-40 sm:w-40">
              <Bottle className="h-10 w-10" />
              <span className="text-base font-semibold tracking-tight">FineWine</span>
            </div>
            <p className="relative mt-8 text-[10px] uppercase tracking-[0.25em] text-muted-foreground">ARM64 Wine · FEX · Metal</p>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-5 pt-24 sm:px-8 sm:pt-32">
          <p className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground">Less between you and play.</p>
          <h2 className="mt-6 text-[clamp(2rem,4.5vw,3.25rem)] font-semibold leading-[1.05] tracking-[-0.04em]">
            Not a virtual machine.<br />Just a better way in.
          </h2>
          <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-14">
            {features.map((f) => (
              <div key={f.n} className="border-t border-border pt-6">
                <p className="text-[11px] text-muted-foreground">{f.n}</p>
                <h3 className="mt-5 text-xl font-semibold tracking-tight">{f.t}</h3>
                <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted-foreground">{f.d}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-5 pt-24 sm:px-8 sm:pt-32">
          <div className="rounded-3xl border border-border bg-card p-8 sm:p-12 lg:p-16">
            <p className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground">From the FineWine project</p>
            <h2 className="mt-6 text-[clamp(2rem,4.5vw,3.25rem)] font-semibold leading-[1.05] tracking-[-0.04em]">
              A new frontier.<br />On your Mac.
            </h2>
            <p className="mt-5 max-w-lg text-sm leading-relaxed text-muted-foreground sm:text-base">
              Endfield_FineWine brings Arknights: Endfield to Apple Silicon. Explore the project, its CrossOver patcher, setup guides and compatibility work.
            </p>
            <a href={ENDFIELD} target="_blank" rel="noreferrer" className={`${ghost} mt-8`}>
              Explore Endfield_FineWine <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-5 py-28 text-center sm:px-8 sm:py-36">
          <h2 className="text-[clamp(2rem,4.5vw,3.25rem)] font-semibold tracking-[-0.04em]">Your next game starts here.</h2>
          <p className="mt-4 text-muted-foreground">Download. Create a prefix. Install your game.</p>
          <a href={RELEASES} className={`${solid} mt-8`}>Get FineWine</a>
          <p className="mt-6 text-xs text-muted-foreground">
            Open source, with source and licenses on <a href={REPO} className="underline-offset-4 hover:text-foreground hover:underline">GitHub</a>.
          </p>
        </section>
      </main>

      <footer className="mx-auto max-w-6xl px-5 pb-12 sm:px-8">
        <div className="border-t border-border pt-8">
          <p className="text-sm font-medium">FineWine. Open source. Made for the Mac.</p>
          <p className="mt-4 max-w-4xl text-xs leading-relaxed text-muted-foreground">
            Independent compatibility software, provided as-is. Game compatibility varies. Unsupported configurations may violate a game's terms of service. Not affiliated with Apple, CodeWeavers, Gryphline or Hypergryph.
          </p>
        </div>
      </footer>
    </div>
  );
}
