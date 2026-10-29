import { createFileRoute } from "@tanstack/react-router";
import { CheckCircle2 } from "lucide-react";
import tank from "@/assets/tank.jpg";
import pipeline from "@/assets/pipeline.jpg";
import { SiteLayout, PageHero, meta } from "@/components/site/Layout";
import { disciplines, mainServices, specialties } from "@/lib/company";

export const Route = createFileRoute("/services")({
  head: () => meta("EPC Services — FISAKA", "Engineering, procurement, construction, tank & vessel maintenance, pipeline maintenance, tank erection and insulation services."),
  component: Services,
});

const imgs: Record<string, string> = { tank, pipeline };

function Services() {
  return (
    <SiteLayout>
      <PageHero eyebrow="Our Services" title="Integrated Project Solutions" desc="From pre-design and engineering to procurement, construction, start-up and maintenance." />
      <section className="container-x grid gap-6 py-20 md:grid-cols-3">
        {mainServices.map((s) => (
          <div key={s.t} className="rounded-xl border-t-4 border-primary bg-card p-8 shadow-elegant">
            <h3 className="text-xl font-bold text-primary-deep">{s.t}</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.d}</p>
          </div>
        ))}
      </section>
      <section className="bg-muted py-16">
        <div className="container-x">
          <p className="eyebrow">Scope of Disciplines</p>
          <div className="mt-6 flex flex-wrap gap-3">
            {disciplines.map((d) => <span key={d} className="flex items-center gap-2 rounded-full bg-card px-5 py-2.5 font-semibold text-primary-deep"><CheckCircle2 className="h-4 w-4 text-primary" />{d}</span>)}
          </div>
        </div>
      </section>
      <section className="container-x py-20">
        <p className="eyebrow">Specialty Services</p>
        <h2 className="mt-3 text-3xl font-extrabold text-primary-deep">Maintenance & Construction Expertise</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {specialties.map((s) => (
            <div key={s.t} className="overflow-hidden rounded-xl border bg-card">
              <img src={imgs[s.img]} alt={s.t} loading="lazy" width={1280} height={960} className="h-56 w-full object-cover" />
              <div className="p-6">
                <h3 className="text-lg font-bold text-primary-deep">{s.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.d}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
