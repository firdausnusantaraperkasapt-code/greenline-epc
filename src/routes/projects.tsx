import { createFileRoute } from "@tanstack/react-router";
import { CheckCircle2 } from "lucide-react";
import { SiteLayout, PageHero, meta } from "@/components/site/Layout";
import { clients, experience } from "@/lib/company";

export const Route = createFileRoute("/projects")({
  head: () => meta("Project Experience — FISAKA", "FISAKA's project track record with Pertamina, Elnusa, WIKA, Chiyoda, PJB, Wilmar and more."),
  component: Projects,
});

function Projects() {
  return (
    <SiteLayout>
      <PageHero eyebrow="Our Experience" title="Proven track record across Indonesia" desc="Installation, erection, maintenance and insulation projects for leading energy and industrial companies." />
      <section className="container-x grid gap-6 py-20 md:grid-cols-2">
        {experience.map((e) => (
          <div key={e.year} className="rounded-xl border bg-card p-8">
            <span className="rounded-md bg-primary px-3 py-1 font-display font-bold text-primary-foreground">{e.year}</span>
            <ul className="mt-6 space-y-3">
              {e.items.map((i) => <li key={i} className="flex gap-3 text-sm text-foreground"><CheckCircle2 className="h-5 w-5 shrink-0 text-primary" />{i}</li>)}
            </ul>
          </div>
        ))}
      </section>
      <section className="bg-muted py-20">
        <div className="container-x">
          <p className="eyebrow">Partnerships & Clients</p>
          <div className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-6">
            {clients.map((c) => <div key={c} className="flex h-20 items-center justify-center rounded-lg bg-card px-3 text-center text-sm font-bold text-primary-deep">{c}</div>)}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
