import { createFileRoute } from "@tanstack/react-router";
import { Quote } from "lucide-react";
import { SiteLayout, PageHero, meta } from "@/components/site/Layout";
import { culture, milestones } from "@/lib/company";
import teamBriefing from "@/assets/photos/team-briefing.jpg.asset.json";

export const Route = createFileRoute("/about")({
  head: () => meta("About FISAKA — Vision, Mission & Milestones", "The journey of PT Firdaus Nusantara Perkasa (FISAKA) since 2013, our vision, mission and CHIEF culture."),
  component: About,
});

function About() {
  return (
    <SiteLayout>
      <PageHero eyebrow="Our Company" title="Since 2013, redefining ourselves to deliver value" desc="PT Firdaus Nusantara Perkasa — well known as FISAKA — is managed by expert professionals and supported by advanced engineering practices and equipment." />
      <section className="container-x pt-16">
        <img src={teamBriefing.url} alt="FISAKA team safety briefing at a plant site" width={1600} height={1200} className="h-72 w-full rounded-xl object-cover shadow-elegant md:h-96" />
      </section>
      <section className="container-x grid gap-8 py-20 md:grid-cols-2">
        <div className="rounded-xl bg-gradient-primary p-10 text-primary-foreground">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary-glow">Vision</p>
          <p className="mt-4 font-display text-2xl font-bold leading-snug">"To be a reliable and forward-looking EPC company, seamlessly bridging our foundational expertise in mechanical construction with world-class, sustainable renewable energy solutions."</p>
        </div>
        <div className="rounded-xl border p-10">
          <p className="eyebrow">Mission</p>
          <ul className="mt-4 space-y-4 text-muted-foreground">
            <li>Delivering high-quality, integrated EPC solutions for the industrial and renewable energy sectors.</li>
            <li>Elevating operational excellence from mechanical and maintenance construction to large-scale project execution.</li>
            <li>Ensuring client satisfaction through safe, efficient and customized engineering practices.</li>
          </ul>
        </div>
      </section>
      <section className="bg-muted py-20">
        <div className="container-x">
          <p className="eyebrow">Our Culture</p>
          <h2 className="mt-3 text-3xl font-extrabold text-primary-deep">CHIEF</h2>
          <div className="mt-10 grid gap-4 md:grid-cols-5">
            {culture.map((c) => (
              <div key={c.l} className="rounded-xl bg-card p-6">
                <span className="font-display text-5xl font-extrabold text-primary">{c.l}</span>
                <h3 className="mt-2 font-bold text-primary-deep">{c.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{c.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="container-x py-20">
        <p className="eyebrow">Our Milestones</p>
        <div className="mt-10 border-l-2 border-primary pl-8">
          {milestones.map((m) => (
            <div key={m.year} className="relative pb-10">
              <span className="absolute -left-[41px] top-1 h-4 w-4 rounded-full border-4 border-background bg-primary" />
              <p className="font-display text-2xl font-extrabold text-primary">{m.year}</p>
              <p className="mt-2 max-w-2xl text-muted-foreground">{m.text}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="bg-secondary py-20">
        <div className="container-x max-w-4xl">
          <Quote className="h-10 w-10 text-primary" />
          <p className="mt-4 text-lg text-secondary-foreground">We are committed to being a leader in the industry and providing high-quality construction and engineering solutions. Safety is our top priority — the health and well-being of every team member is of utmost importance to us.</p>
          <p className="mt-4 font-display text-xl font-bold italic text-primary">"Your Trust Makes Us Totality and Qualified In Providing Services"</p>
          <p className="mt-6 font-bold text-primary-deep">M. Miftakhul Fauzi</p>
          <p className="text-sm text-muted-foreground">Chief Executive Officer</p>
        </div>
      </section>
    </SiteLayout>
  );
}
