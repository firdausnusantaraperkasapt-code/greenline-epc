import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Download } from "lucide-react";
import { SiteLayout, AbstractLines, meta } from "@/components/site/Layout";
import { Button } from "@/components/ui/button";
import { company, cycle, disciplines, industries, mainServices, certs } from "@/lib/company";
import photo from "@/assets/photos/steel-erection.jpg.asset.json";
import share from "@/assets/social/projects.jpg.asset.json";
import profile from "@/assets/documents/company-profile.pdf.asset.json";

const title = "Perusahaan EPC di Gresik, Jawa Timur — FISAKA";
const desc = "FISAKA (PT Firdaus Nusantara Perkasa) adalah perusahaan EPC di Gresik, Jawa Timur: engineering, procurement, construction dan maintenance untuk energi dan industri.";

export const Route = createFileRoute("/perusahaan-epc-gresik")({
  staticData: { sitemap: true },
  head: () => {
    const m = meta(title, desc, "/perusahaan-epc-gresik", share.url);
    return {
      ...m,
      meta: [...m.meta, { property: "og:locale", content: "id_ID" }],
      scripts: [{
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: company.legal,
          alternateName: "FISAKA",
          description: desc,
          url: "https://fisaka.com/perusahaan-epc-gresik",
          email: company.email,
          telephone: company.phones[0],
          address: { "@type": "PostalAddress", streetAddress: company.headOffice, addressLocality: "Gresik", addressRegion: "Jawa Timur", addressCountry: "ID" },
          areaServed: "Indonesia",
        }),
      }],
    };
  },
  component: Page,
});

function Page() {
  return (
    <SiteLayout>
      <div lang="id">
        <section className="relative isolate overflow-hidden">
          <img src={photo.url} alt="Pekerjaan erection struktur baja oleh perusahaan EPC FISAKA" width={1600} height={1200} className="absolute inset-0 -z-20 h-full w-full object-cover" />
          <div className="absolute inset-0 -z-10 bg-hero-overlay" />
          <AbstractLines className="-z-10 text-primary-glow/30" />
          <div className="container-x py-20 text-primary-foreground md:py-28">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary-glow">PT Firdaus Nusantara Perkasa</p>
            <h1 className="mt-4 max-w-3xl text-4xl font-extrabold leading-tight md:text-5xl">Perusahaan EPC di Gresik, Jawa Timur</h1>
            <p className="mt-6 max-w-2xl text-lg">FISAKA adalah perusahaan EPC (Engineering, Procurement & Construction) yang berbasis di Gresik, melayani proyek energi dan industri di seluruh Indonesia sejak 2013.</p>
            <Button asChild size="lg" className="mt-8 h-auto min-h-12 whitespace-normal py-3"><Link to="/contact">Konsultasikan proyek Anda <ArrowRight /></Link></Button>
          </div>
        </section>
        <section className="container-x py-16 md:py-20">
          <p className="eyebrow">Layanan Perusahaan EPC</p>
          <h2 className="mt-3 text-3xl font-extrabold text-primary-deep">Layanan EPC terintegrasi dari Gresik</h2>
          <p className="mt-4 max-w-3xl text-muted-foreground">Berawal dari konstruksi mekanikal dan pekerjaan maintenance, FISAKA kini menangani lingkup EPC penuh: {cycle.join(", ")}.</p>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {mainServices.map((s) => (
              <article key={s.t} className="rounded-lg border bg-card p-6">
                <h3 className="text-xl font-bold text-primary-deep">{s.t}</h3>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{s.d}</p>
              </article>
            ))}
          </div>
          <Button asChild variant="link" className="mt-6 h-auto p-0"><Link to="/services">Lihat semua layanan <ArrowRight /></Link></Button>
        </section>
        <section className="bg-muted py-16 md:py-20">
          <div className="container-x grid gap-10 md:grid-cols-2">
            <div>
              <h2 className="text-3xl font-extrabold text-primary-deep">Disiplin engineering</h2>
              <ul className="mt-6 grid grid-cols-2 gap-4">{disciplines.map((d) => <li key={d} className="border-b pb-3 font-semibold">{d}</li>)}</ul>
            </div>
            <div>
              <h2 className="text-3xl font-extrabold text-primary-deep">Sektor yang kami layani</h2>
              <ul className="mt-6 grid grid-cols-2 gap-4">{industries.map((i) => <li key={i} className="border-b pb-3 font-semibold">{i}</li>)}</ul>
            </div>
          </div>
        </section>
        <section className="container-x py-16 md:py-20">
          <h2 className="text-3xl font-extrabold text-primary-deep">Mengapa memilih FISAKA sebagai kontraktor EPC Jawa Timur</h2>
          <ul className="mt-6 space-y-3 text-muted-foreground">
            <li>• Kantor pusat dan workshop di Gresik — dekat kawasan industri Jawa Timur.</li>
            <li>• Bersertifikat {certs.map((c) => c.name).join(", ")}.</li>
            <li>• Pengalaman perawatan tangki, pipa, insulasi, erection dan instalasi untuk sektor energi dan industri.</li>
          </ul>
          <Button asChild variant="link" className="mt-6 h-auto p-0"><Link to="/projects">Lihat pengalaman proyek <ArrowRight /></Link></Button>
        </section>
        <section className="bg-secondary py-16">
          <div className="container-x flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
            <div><h2 className="text-3xl font-extrabold text-primary-deep">Hubungi perusahaan EPC kami di Gresik</h2><p className="mt-4 text-muted-foreground">{company.headOffice}</p><a href={`mailto:${company.email}`} className="mt-3 inline-block font-semibold text-primary">{company.email}</a></div>
            <div className="flex flex-col gap-3">
              <Button asChild size="lg"><Link to="/contact">Hubungi FISAKA <ArrowRight /></Link></Button>
              <Button asChild variant="outline" size="lg"><a href={profile.url} download="FISAKA-Company-Profile.pdf"><Download />Unduh Company Profile</a></Button>
            </div>
          </div>
        </section>
      </div>
    </SiteLayout>
  );
}
