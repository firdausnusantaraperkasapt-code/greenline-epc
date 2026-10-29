import { createFileRoute } from "@tanstack/react-router";
import { CheckCircle2 } from "lucide-react";
import { SiteLayout, PageHero, meta } from "@/components/site/Layout";
import { ClientMark } from "@/components/site/ClientMark";
import { clients, experience } from "@/lib/company";
import steelErection from "@/assets/photos/steel-erection.jpg.asset.json";
import steelRoof from "@/assets/photos/steel-roof.jpg.asset.json";
import craneLift from "@/assets/photos/crane-lift.jpg.asset.json";
import teamBriefing from "@/assets/photos/team-briefing.jpg.asset.json";
import structureGresik from "@/assets/photos/structure-gresik.jpg.asset.json";
import gasSkid from "@/assets/photos/gas-skid.jpg.asset.json";

const gallery = [
  { src: steelErection.url, alt: "Steel structure erection with boom lifts" },
  { src: steelRoof.url, alt: "Working at height on steel roof structure" },
  { src: craneLift.url, alt: "Crane lifting tank roof structure" },
  { src: teamBriefing.url, alt: "FISAKA team safety briefing on site" },
  { src: structureGresik.url, alt: "Steel frame construction in Gresik" },
  { src: gasSkid.url, alt: "Gas metering skid installation" },
];

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
      <section className="container-x pb-20">
        <p className="eyebrow">On Site</p>
        <h2 className="mt-3 text-3xl font-extrabold text-primary-deep">Our work in the field</h2>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {gallery.map((g) => (
            <img key={g.src} src={g.src} alt={g.alt} loading="lazy" width={1280} height={960} className="h-64 w-full rounded-xl object-cover shadow-elegant" />
          ))}
        </div>
      </section>
      <section className="bg-muted py-20">
        <div className="container-x">
          <p className="eyebrow">Partnerships & Clients</p>
          <div className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-6">
            {clients.map((c) => <ClientMark key={c.name} client={c} />)}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
