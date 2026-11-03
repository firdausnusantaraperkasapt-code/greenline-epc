import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Download } from "lucide-react";
import { SiteLayout, AbstractLines, meta } from "@/components/site/Layout";
import { Button } from "@/components/ui/button";
import { company, cycle, disciplines, industries, mainServices, experience } from "@/lib/company";
import photo from "@/assets/photos/steel-erection.jpg.asset.json";
import share from "@/assets/social/projects.jpg.asset.json";
import profile from "@/assets/documents/company-profile.pdf.asset.json";

export const Route = createFileRoute("/epc-contractor-indonesia")({
  staticData: { sitemap: true },
  head: () => meta("EPC Contractor Indonesia — FISAKA", "Explore FISAKA’s engineering, procurement, construction and maintenance services for energy and industrial projects in Indonesia, based in Gresik, East Java.", "/epc-contractor-indonesia", share.url),
  component: EPCContractor,
});

function EPCContractor() {
  return (
    <SiteLayout>
      <section className="relative isolate overflow-hidden">
        <img src={photo.url} alt="Steel structure erection with boom lifts at a FISAKA project" width={1600} height={1200} className="absolute inset-0 -z-20 h-full w-full object-cover" />
        <div className="absolute inset-0 -z-10 bg-hero-overlay" />
        <AbstractLines className="-z-10 text-primary-glow/30" />
        <div className="container-x py-20 text-primary-foreground md:py-28">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary-glow">PT Firdaus Nusantara Perkasa</p>
          <h1 className="mt-4 max-w-3xl text-4xl font-extrabold leading-tight md:text-5xl">FISAKA — EPC Contractor in Indonesia</h1>
          <p className="mt-6 max-w-2xl text-lg">Engineering, procurement, construction and maintenance for energy and industrial facilities, supported by our team in Gresik, East Java.</p>
          <Button asChild size="lg" className="mt-8 h-auto min-h-12 whitespace-normal py-3">
            <Link to="/contact">Discuss your project <ArrowRight /></Link>
          </Button>
        </div>
      </section>
      <section className="container-x py-16 md:py-20">
        <p className="eyebrow">Integrated EPC Scope</p>
        <h2 className="mt-3 text-3xl font-extrabold text-primary-deep">From engineering to field execution</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {mainServices.map((service) => (
            <article key={service.t} className="rounded-lg border bg-card p-6">
              <h3 className="text-xl font-bold text-primary-deep">{service.t}</h3>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{service.d}</p>
            </article>
          ))}
        </div>
        <Button asChild variant="link" className="mt-6 h-auto p-0"><Link to="/services">View services and maintenance specialties <ArrowRight /></Link></Button>
      </section>
      <section className="bg-muted py-16 md:py-20">
        <div className="container-x grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-extrabold text-primary-deep">A connected project lifecycle</h2>
            <ol className="mt-6 grid grid-cols-2 gap-4">
              {cycle.map((stage, index) => <li key={stage} className="border-b pb-3 font-semibold"><span className="mr-2 text-primary">0{index + 1}</span>{stage}</li>)}
            </ol>
            <p className="mt-6 text-muted-foreground">Engineering disciplines include {disciplines.join(", ")}.</p>
          </div>
          <div>
            <h2 className="text-3xl font-extrabold text-primary-deep">Energy and industrial sectors</h2>
            <ul className="mt-6 grid grid-cols-2 gap-4">{industries.map((industry) => <li key={industry} className="border-b pb-3 font-semibold">{industry}</li>)}</ul>
            <p className="mt-6 text-muted-foreground">FISAKA combines its mechanical construction and maintenance background with integrated EPC services.</p>
          </div>
        </div>
      </section>
      <section className="container-x py-16 md:py-20">
        <p className="eyebrow">Documented Experience</p>
        <h2 className="mt-3 text-3xl font-extrabold text-primary-deep">Project work in Indonesia</h2>
        <p className="mt-4 max-w-3xl text-muted-foreground">Our recorded work includes piping and tank maintenance, insulation, installation and erection for energy and industrial facilities.</p>
        <ul className="mt-8 space-y-4">{experience.slice(0, 2).map((year) => <li key={year.year} className="border-b pb-4"><h3 className="font-bold text-primary">{year.year}</h3><p className="mt-2">{year.items[0]}</p><p className="mt-1">{year.items[year.items.length - 1]}</p></li>)}</ul>
        <Button asChild variant="link" className="mt-6 h-auto p-0"><Link to="/projects">Explore the full project record <ArrowRight /></Link></Button>
      </section>
      <section className="bg-secondary py-16">
        <div className="container-x flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div><h2 className="text-3xl font-extrabold text-primary-deep">Discuss your facility requirements</h2><p className="mt-4 text-muted-foreground">{company.headOffice}</p><a href={`mailto:${company.email}`} className="mt-3 inline-block font-semibold text-primary">{company.email}</a></div>
          <div className="flex flex-col gap-3">
            <Button asChild size="lg"><Link to="/contact">Contact FISAKA <ArrowRight /></Link></Button>
            <Button asChild variant="outline" size="lg"><a href={profile.url} download="FISAKA-Company-Profile.pdf"><Download />Company Profile</a></Button>
            <Button asChild variant="link"><Link to="/certificate">View our certificates</Link></Button>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}