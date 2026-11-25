import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, type ReactNode } from "react";
import { ArrowDown, ArrowUpRight, Check, Minus } from "lucide-react";
import icon from "@/assets/finewine-icon.png.asset.json";

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


function Reveal({ children, className = "" }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => {
      if (e?.isIntersecting) { el.classList.add("is-in"); io.disconnect(); }
    }, { threshold: 0.15 });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return <div ref={ref} className={`reveal ${className}`}>{children}</div>;
}

const pipeline = [
  { k: "Windows game", v: ".exe, x64" },
  { k: "FEX", v: "x64 → ARM64" },
  { k: "ARM64 Wine", v: "Win32 → macOS" },
  { k: "DXMT · MoltenVK", v: "DirectX / Vulkan" },
  { k: "Metal", v: "Apple GPU" },
];

type Cell = boolean | string;
const tools = ["FineWine", "CrossOver", "Bridgeplay", "Highball"] as const;
const rows: { label: string; cells: Cell[] }[] = [
  { label: "Price", cells: ["Free", "From $54 / year", "Free", "Free"] },
  { label: "Open source", cells: [true, false, true, true] },
  { label: "Runs without Rosetta 2", cells: [true, false, false, false] },
  { label: "Native ARM64 Wine", cells: [true, false, false, false] },
  { label: "Works outside Steam", cells: [true, true, false, true] },
  { label: "Anti-cheat compatibility work", cells: ["ACE (Endfield)", false, false, false] },
  { label: "Minimum macOS", cells: ["26", "11.1", "26", "14"] },
];

function CellView({ v, hi }: { v: Cell; hi: boolean }) {
  if (v === true) return <Check className={`mx-auto h-4 w-4 ${hi ? "text-wine" : "text-foreground"}`} aria-label="Yes" />;
  if (v === false) return <Minus className="mx-auto h-4 w-4 text-muted-foreground/50" aria-label="No" />;
  return <span className={hi ? "text-foreground" : "text-muted-foreground"}>{v}</span>;
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
            <img src={icon.url} alt="" className="h-6 w-6" /> FineWine
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
            Windows games.<br /><span className="text-gradient-wine">Mac at heart.</span>
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
            <img src={icon.url} alt="FineWine app icon" width={1024} height={1024} className="float relative h-44 w-44 drop-shadow-[0_30px_60px_rgba(0,0,0,0.8)] sm:h-56 sm:w-56" />
            <p className="relative mt-8 text-[10px] uppercase tracking-[0.25em] text-muted-foreground">ARM64 Wine · FEX · Metal</p>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-5 pt-24 sm:px-8 sm:pt-32">
          <p className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground">Less between you and play.</p>
          <h2 className="mt-6 text-[clamp(2rem,4.5vw,3.25rem)] font-semibold leading-[1.05] tracking-[-0.04em]">
            Not a virtual machine.<br />Just a better way in.
          </h2>
          <Reveal className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-14">
            {features.map((f) => (
              <div key={f.n} className="border-t border-border pt-6">
                <p className="text-[11px] text-muted-foreground">{f.n}</p>
                <h3 className="mt-5 text-xl font-semibold tracking-tight">{f.t}</h3>
                <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted-foreground">{f.d}</p>
              </div>
            ))}
          </Reveal>
        </section>

        <section className="mx-auto max-w-6xl px-5 pt-24 sm:px-8 sm:pt-32">
          <Reveal>
            <p className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground">Under the glass.</p>
            <h2 className="mt-6 text-[clamp(2rem,4.5vw,3.25rem)] font-semibold leading-[1.05] tracking-[-0.04em]">
              From .exe to Metal.<br /><span className="text-muted-foreground">Without the detour.</span>
            </h2>
          </Reveal>
          <Reveal className="mt-14">
            <ol className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-5">
              {pipeline.map((p, i) => (
                <li key={p.k} className="relative bg-background p-6">
                  <span className="text-[11px] tabular-nums text-muted-foreground">0{i + 1}</span>
                  <p className={`mt-6 text-base font-semibold tracking-tight ${i === pipeline.length - 1 ? "text-wine" : ""}`}>{p.k}</p>
                  <p className="mt-1 text-xs text-muted-foreground">{p.v}</p>
                  <span className="flow absolute inset-x-0 bottom-0 h-px" style={{ animationDelay: `${i * 0.35}s` }} />
                </li>
              ))}
            </ol>
          </Reveal>
        </section>

        <section className="mx-auto max-w-6xl px-5 pt-24 sm:px-8 sm:pt-32">
          <Reveal>
            <p className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground">How it compares.</p>
            <h2 className="mt-6 text-[clamp(2rem,4.5vw,3.25rem)] font-semibold leading-[1.05] tracking-[-0.04em]">
              Good company.<br />A different pour.
            </h2>
            <p className="mt-5 max-w-lg text-sm leading-relaxed text-muted-foreground sm:text-base">
              CrossOver, Bridgeplay and Highball are all excellent. FineWine takes another route: its own native ARM64 Wine, so x64 code is translated by FEX instead of Rosetta 2.
            </p>
          </Reveal>
          <Reveal className="mt-12">
            <div className="-mx-5 overflow-x-auto px-5 sm:mx-0 sm:px-0">
              <table className="w-full min-w-[640px] border-separate border-spacing-0 text-sm">
                <thead>
                  <tr>
                    <th className="w-[34%] pb-4 text-left font-normal" />
                    {tools.map((t, i) => (
                      <th key={t} className={`pb-4 text-center font-semibold tracking-tight ${i === 0 ? "rounded-t-xl bg-card pt-4 text-foreground" : "text-muted-foreground"}`}>
                        {t}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {rows.map((r, ri) => (
                    <tr key={r.label}>
                      <td className="border-t border-border py-4 pr-4 text-muted-foreground">{r.label}</td>
                      {r.cells.map((c, i) => (
                        <td key={i} className={`border-t border-border px-3 py-4 text-center ${i === 0 ? `bg-card ${ri === rows.length - 1 ? "rounded-b-xl" : ""}` : ""}`}>
                          <CellView v={c} hi={i === 0} />
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-5 text-xs text-muted-foreground">
              Based on each project's public documentation, November 2026. CrossOver remains the most broadly supported commercial option.
            </p>
          </Reveal>
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
