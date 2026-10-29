import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ShieldCheck, Factory, Flame, Zap, Mountain, Building2, Fuel } from "lucide-react";
import hero from "@/assets/photos/hero-refinery.png.asset.json";
import tankFarm from "@/assets/photos/tank-farm.jpg.asset.json";
import { SiteLayout, meta, AbstractLines } from "@/components/site/Layout";
import { ClientMark } from "@/components/site/ClientMark";
import { certs, clients, cycle, industries, mainServices, company } from "@/lib/company";

export const Route = createFileRoute("/")({
  head: () => meta("FISAKA — EPC Company | PT Firdaus Nusantara Perkasa", "Integrated Engineering, Procurement & Construction services for oil & gas, petrochemical, power plant and renewable energy in Indonesia."),
  component: Index,
});

const icons = [Flame, Factory, Fuel, Zap, Mountain, Building2];

function Index() {
  return (
    <SiteLayout>
      <section className="relative isolate overflow-hidden">
        <img src={hero.url} alt="FISAKA EPC project site — storage tank and refinery" width={1920} height={1152} className="absolute inset-0 -z-20 h-full w-full object-cover object-center" />
        <div className="absolute inset-0 -z-10 bg-hero-overlay" />
        <AbstractLines className="-z-10 text-primary-glow/30" />
        <div className="container-x py-28 text-primary-foreground md:py-44">
          <p className="inline-flex items-center gap-2 rounded-full border border-primary-glow/40 bg-primary-deep/40 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-primary-glow">
            <ShieldCheck className="h-4 w-4" /> EPC Company · Since 2013
          </p>
          <h1 className="sr-only">{company.tagline}</h1>
          <p className="mt-6 max-w-xl text-lg text-primary-foreground/90 drop-shadow">Integrated Engineering, Procurement & Construction — from mechanical construction to sustainable renewable energy solutions.</p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link to="/services" className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3.5 font-bold text-primary-foreground transition hover:bg-primary-glow">Our Services <ArrowRight className="h-4 w-4" /></Link>
            <Link to="/contact" className="rounded-md border border-primary-foreground/60 px-6 py-3.5 font-bold transition hover:bg-primary-foreground hover:text-primary-deep">Contact Us</Link>
          </div>
        </div>
      </section>

      <section className="border-b bg-secondary">
        <div className="container-x grid grid-cols-2 gap-6 py-10 md:grid-cols-4">
          {[["13+", "Years of Experience"], ["30+", "Projects Delivered"], ["20+", "Trusted Clients"], ["4", "Certifications"]].map(([n, l]) => (
            <div key={l}><p className="font-display text-4xl font-extrabold text-primary">{n}</p><p className="mt-1 text-sm font-semibold text-muted-foreground">{l}</p></div>
          ))}
        </div>
      </section>

      <section className="container-x grid items-center gap-12 py-24 md:grid-cols-2">
        <img src={tankFarm.url} alt="FISAKA team at a storage tank farm" loading="lazy" width={1920} height={1440} className="rounded-xl shadow-elegant" />
        <div>
          <p className="eyebrow">About FISAKA</p>
          <h2 className="mt-3 text-3xl font-extrabold text-primary-deep md:text-4xl">A reliable and progressive EPC partner</h2>
          <p className="mt-5 text-muted-foreground">Rooted in mechanical and maintenance construction, FISAKA now delivers comprehensive EPC services and pioneers construction in the renewable energy sector — integrating process, civil & structure, mechanical & piping, electrical, instrumentation, automation and control.</p>
          <div className="mt-8 flex flex-wrap gap-2">
            {cycle.map((c, i) => <span key={c} className="rounded-full bg-accent px-4 py-1.5 text-sm font-semibold text-accent-foreground">{i + 1}. {c}</span>)}
          </div>
          <Link to="/about" className="mt-8 inline-flex items-center gap-2 font-bold text-primary">Learn more <ArrowRight className="h-4 w-4" /></Link>
        </div>
      </section>

      <section className="bg-muted py-24">
        <div className="container-x">
          <p className="eyebrow">Our Services</p>
          <h2 className="mt-3 text-3xl font-extrabold text-primary-deep md:text-4xl">Integrated Project Solutions</h2>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {mainServices.map((s, i) => (
              <div key={s.t} className="group rounded-xl border bg-card p-8 transition hover:-translate-y-1 hover:border-primary hover:shadow-elegant">
                <span className="font-display text-5xl font-extrabold text-accent">0{i + 1}</span>
                <h3 className="mt-4 text-xl font-bold text-primary-deep">{s.t}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-x py-24">
        <p className="eyebrow">Industries We Serve</p>
        <h2 className="mt-3 text-3xl font-extrabold text-primary-deep md:text-4xl">Comprehensive integration system</h2>
        <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-6">
          {industries.map((ind, i) => { const I = icons[i] ?? Factory; return (
            <div key={ind} className="flex flex-col items-center rounded-xl border p-6 text-center transition hover:bg-primary hover:text-primary-foreground">
              <I className="h-9 w-9" /><p className="mt-3 text-sm font-bold">{ind}</p>
            </div>
          ); })}
        </div>
      </section>

      <section className="relative isolate overflow-hidden bg-gradient-primary py-20 text-primary-foreground">
        <AbstractLines className="-z-10 text-primary-glow/25" />
        <div className="container-x">
          <h2 className="text-3xl font-extrabold">Certified for Quality, Environment & Safety</h2>
          <div className="mt-10 grid gap-4 md:grid-cols-4">
            {certs.map((c) => (
              <div key={c.name} className="rounded-xl border border-primary-foreground/20 bg-primary-foreground/5 p-6">
                <ShieldCheck className="h-8 w-8 text-primary-glow" />
                <p className="mt-4 font-display text-xl font-bold">{c.name}</p>
                <p className="text-sm text-primary-foreground/75">{c.desc}</p>
                <p className="mt-2 text-xs text-primary-foreground/60">{c.no}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-x py-24 text-center">
        <p className="eyebrow">Partnerships & Clients</p>
        <h2 className="mt-3 text-3xl font-extrabold text-primary-deep md:text-4xl">Trusted by Indonesia's leading companies</h2>
        <div className="mt-12 grid grid-cols-2 gap-3 md:grid-cols-6">
          {clients.map((c) => <ClientMark key={c.name} client={c} />)}
        </div>
        <Link to="/contact" className="mt-14 inline-flex items-center gap-2 rounded-md bg-primary px-8 py-4 font-bold text-primary-foreground hover:bg-primary-deep">Start your project with FISAKA <ArrowRight className="h-4 w-4" /></Link>
      </section>
    </SiteLayout>
  );
}
