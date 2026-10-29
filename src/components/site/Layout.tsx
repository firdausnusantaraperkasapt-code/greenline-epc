import { Link } from "@tanstack/react-router";
import { useState, type ReactNode } from "react";
import { Menu, X, Mail, Phone, MapPin, Download } from "lucide-react";
import { company } from "@/lib/company";
import logoAsset from "@/assets/logo-fisaka.png.asset.json";
import profileAsset from "@/assets/documents/company-profile.pdf.asset.json";
import { Button } from "@/components/ui/button";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/projects", label: "Projects" },
  { to: "/certificate", label: "Certificate" },
  { to: "/contact", label: "Contact" },
] as const;

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <span className={`flex items-center rounded-md px-2 py-1 ${light ? "bg-card" : ""}`}>
      <img src={logoAsset.url} alt="Logo FISAKA — PT Firdaus Nusantara Perkasa" className="h-9 w-auto" />
    </span>
  );
}

export function SiteLayout({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="flex min-h-screen flex-col">
      <div className="hidden bg-primary-deep text-xs text-primary-foreground/80 md:block">
        <div className="container-x flex h-9 items-center justify-between">
          <span>ISO 9001 · ISO 14001 · ISO 45001 · SMK3 Certified EPC Company</span>
          <span className="flex gap-5"><span>{company.email}</span><span>{company.phones[0]}</span></span>
        </div>
      </div>
      <header className="sticky top-0 z-40 border-b bg-background/95 backdrop-blur">
        <div className="container-x flex h-16 items-center justify-between">
          <Link to="/"><Logo /></Link>
          <nav className="hidden items-center gap-5 md:flex">
            {nav.map((n) => (
              <Link key={n.to} to={n.to} activeOptions={{ exact: true }} className="text-sm font-semibold text-muted-foreground transition-colors hover:text-primary" activeProps={{ className: "text-primary" }}>
                {n.label}
              </Link>
            ))}
            <Link to="/contact" className="rounded-md bg-primary px-5 py-2.5 text-sm font-bold text-primary-foreground transition hover:bg-primary-deep">Get a Quote</Link>
          </nav>
          <button className="md:hidden" onClick={() => setOpen(!open)} aria-label="Menu">{open ? <X /> : <Menu />}</button>
        </div>
        {open && (
          <nav className="flex flex-col border-t bg-background px-6 py-4 md:hidden">
            {nav.map((n) => (
              <Link key={n.to} to={n.to} onClick={() => setOpen(false)} className="py-2 font-semibold">{n.label}</Link>
            ))}
          </nav>
        )}
      </header>
      <main className="flex-1">{children}</main>
      <footer className="bg-primary-deep text-primary-foreground">
        <div className="container-x grid gap-10 py-14 md:grid-cols-3">
          <div>
            <Logo light />
            <p className="mt-4 text-sm text-primary-foreground/70">{company.legal} — {company.tagline}.</p>
          </div>
          <div className="space-y-3 text-sm text-primary-foreground/80">
            <p className="flex gap-2"><MapPin className="h-4 w-4 shrink-0 text-primary-glow" />{company.headOffice}</p>
            <p className="flex gap-2"><Mail className="h-4 w-4 text-primary-glow" />{company.email}</p>
            <p className="flex gap-2"><Phone className="h-4 w-4 text-primary-glow" />{company.phones[0]}</p>
          </div>
          <div className="flex flex-col gap-2 text-sm">
            {nav.map((n) => <Link key={n.to} to={n.to} className="text-primary-foreground/80 hover:text-primary-glow">{n.label}</Link>)}
            <Button asChild variant="link" className="h-auto justify-start whitespace-normal p-0 text-primary-foreground/80 hover:text-primary-glow">
              <a href={profileAsset.url} download="FISAKA-Company-Profile.pdf"><Download />Download Company Profile</a>
            </Button>
          </div>
        </div>
        <div className="border-t border-primary-foreground/10 py-5 text-center text-xs text-primary-foreground/60">© {new Date().getFullYear()} {company.legal}. All rights reserved.</div>
      </footer>
    </div>
  );
}

export function AbstractLines({ className = "" }: { className?: string }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 800 400" preserveAspectRatio="xMidYMid slice" className={`pointer-events-none absolute inset-0 h-full w-full ${className}`}>
      <g fill="none" stroke="currentColor" strokeWidth="1.2">
        <path d="M-80 420 C 180 300, 320 160, 880 60" opacity="0.5" />
        <path d="M-80 460 C 220 340, 380 190, 880 110" opacity="0.35" />
        <path d="M-80 500 C 260 380, 440 220, 880 160" opacity="0.22" />
        <path d="M-80 540 C 300 420, 500 250, 880 210" opacity="0.12" />
        <circle cx="660" cy="90" r="130" opacity="0.25" />
        <circle cx="660" cy="90" r="90" opacity="0.35" />
        <circle cx="660" cy="90" r="50" opacity="0.5" />
        <path d="M520 400 L 800 120" opacity="0.3" />
        <path d="M600 400 L 860 140" opacity="0.18" />
      </g>
    </svg>
  );
}

export function PageHero({ eyebrow, title, desc }: { eyebrow: string; title: string; desc: string }) {
  return (
    <section className="relative isolate overflow-hidden bg-gradient-primary text-primary-foreground">
      <AbstractLines className="-z-10 text-primary-glow/40" />
      <div className="container-x py-20">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary-glow">{eyebrow}</p>
        <h1 className="mt-3 max-w-3xl text-4xl font-extrabold md:text-5xl">{title}</h1>
        <p className="mt-4 max-w-2xl text-primary-foreground/80">{desc}</p>
      </div>
    </section>
  );
}

export function meta(title: string, description: string) {
  return {
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  };
}
