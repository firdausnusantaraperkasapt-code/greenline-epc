import { Link } from "@tanstack/react-router";
import { useState, type ReactNode } from "react";
import { Menu, X, Mail, Phone, MapPin } from "lucide-react";
import { company } from "@/lib/company";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/projects", label: "Projects" },
  { to: "/contact", label: "Contact" },
] as const;

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <span className="flex items-center gap-2">
      <span className="grid h-9 w-9 place-items-center rounded-md bg-gradient-primary font-display text-lg font-extrabold text-primary-foreground">F</span>
      <span className={`font-display text-xl font-extrabold tracking-wide ${light ? "text-primary-foreground" : "text-primary-deep"}`}>FISAKA</span>
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
          <nav className="hidden items-center gap-8 md:flex">
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
          </div>
        </div>
        <div className="border-t border-primary-foreground/10 py-5 text-center text-xs text-primary-foreground/60">© {new Date().getFullYear()} {company.legal}. All rights reserved.</div>
      </footer>
    </div>
  );
}

export function PageHero({ eyebrow, title, desc }: { eyebrow: string; title: string; desc: string }) {
  return (
    <section className="bg-gradient-primary text-primary-foreground">
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
