import { createFileRoute } from "@tanstack/react-router";
import { Download, FileText } from "lucide-react";
import { SiteLayout, PageHero, meta } from "@/components/site/Layout";
import { Button } from "@/components/ui/button";
import iso from "@/assets/certificates/iso.png.asset.json";
import smk3 from "@/assets/certificates/smk3.png.asset.json";
import profile from "@/assets/documents/company-profile.pdf.asset.json";

export const Route = createFileRoute("/certificate")({
  head: () => meta("Certificate & Company Profile — FISAKA", "View the ISO 9001, ISO 14001, ISO 45001 and SMK3 certificates of PT Firdaus Nusantara Perkasa and download the FISAKA company profile."),
  component: Certificate,
});

function Certificate() {
  return (
    <SiteLayout>
      <PageHero eyebrow="Our Assurances" title="Our Certificate" desc="Our commitment to quality, environmental responsibility and occupational health & safety." />
      <section className="container-x py-14 md:py-20">
        <p className="eyebrow">International Standards</p>
        <h2 className="mt-3 text-2xl font-extrabold text-primary-deep md:text-3xl">Quality, Environment & Safety</h2>
        <figure className="mt-8">
          <img src={iso.url} alt="FISAKA ISO 9001:2015, ISO 14001:2015 and ISO 45001:2018 certificates displayed in black frames" width={1310} height={657} className="h-auto w-full" />
        </figure>
      </section>
      <section className="bg-muted py-14 md:py-20">
        <div className="container-x">
          <p className="eyebrow">Occupational Health & Safety</p>
          <h2 className="mt-3 text-2xl font-extrabold text-primary-deep md:text-3xl">SMK3 Award Certificate</h2>
          <figure className="mx-auto mt-8 max-w-5xl">
            <img src={smk3.url} alt="Certificate of Appreciation for the FISAKA occupational safety and health management system (SMK3)" loading="lazy" width={1095} height={658} className="h-auto w-full" />
          </figure>
        </div>
      </section>
      <section className="bg-secondary py-14 md:py-16">
        <div className="container-x flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="eyebrow">Company Profile</p>
            <h2 className="mt-3 text-2xl font-extrabold text-primary-deep md:text-3xl">PT Firdaus Nusantara Perkasa</h2>
            <p className="mt-3 flex items-center gap-2 text-sm text-muted-foreground"><FileText className="h-4 w-4" />FISAKA Company Profile · PDF</p>
          </div>
          <Button asChild size="lg" className="h-auto min-h-12 whitespace-normal py-3 text-center">
            <a href={profile.url} download="FISAKA-Company-Profile.pdf"><Download />Download Company Profile</a>
          </Button>
        </div>
      </section>
    </SiteLayout>
  );
}