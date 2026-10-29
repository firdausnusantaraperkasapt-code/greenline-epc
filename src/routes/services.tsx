import { createFileRoute } from "@tanstack/react-router";
import tankFarm from "@/assets/photos/tank-farm.jpg.asset.json";
import pipeMaintenance from "@/assets/photos/pipe-maintenance.jpg.asset.json";
import tankErection from "@/assets/photos/tank-erection.jpg.asset.json";
import gasSkid from "@/assets/photos/gas-skid.jpg.asset.json";
import { SiteLayout, PageHero, meta } from "@/components/site/Layout";
import { CycleGear, DisciplineGear, IndustryFlow } from "@/components/site/CoreGears";
import { mainServices, specialties } from "@/lib/company";

export const Route = createFileRoute("/services")({
  head: () => meta("EPC Services — FISAKA", "Engineering, procurement, construction, tank & vessel maintenance, pipeline maintenance, tank erection and insulation services."),
  component: Services,
});

const imgs: Record<string, string> = { tankMaint: tankFarm.url, pipeline: pipeMaintenance.url, tankErect: tankErection.url, insulation: gasSkid.url };

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
      <section className="relative isolate overflow-hidden bg-gradient-primary py-20 text-primary-foreground">
        <div className="container-x">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary-glow">Our Cores</p>
          <h2 className="mt-3 text-3xl font-extrabold md:text-4xl">Comprehensive integration system</h2>
          <p className="mt-4 max-w-2xl text-primary-foreground/80">To ensure the solutions our company provides, FISAKA carries out implementations as follows — a full project cycle across all engineering disciplines and industries.</p>
          <div className="mt-12 flex flex-wrap items-center justify-center gap-10 md:justify-start md:gap-16">
            <CycleGear />
            <DisciplineGear />
          </div>
          <IndustryFlow />
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
