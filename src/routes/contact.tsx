import { createFileRoute } from "@tanstack/react-router";
import { Mail, MapPin, Phone, Warehouse } from "lucide-react";
import { useState } from "react";
import { SiteLayout, PageHero, meta } from "@/components/site/Layout";
import { company } from "@/lib/company";

export const Route = createFileRoute("/contact")({
  head: () => meta("Contact FISAKA — Gresik, East Java", "Contact PT Firdaus Nusantara Perkasa for EPC, maintenance and construction projects."),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <SiteLayout>
      <PageHero eyebrow="Contact Information" title="Let's build your next project" desc="Reach our team in Gresik, East Java for consultations and quotations." />
      <section className="container-x grid gap-10 py-20 md:grid-cols-2">
        <div className="space-y-6">
          {[
            { I: MapPin, t: "Head Office", d: company.headOffice },
            { I: Warehouse, t: "Workshop", d: company.workshop },
            { I: Phone, t: "Phone", d: company.phones.join(" · ") },
            { I: Mail, t: "Email", d: company.email },
          ].map(({ I, t, d }) => (
            <div key={t} className="flex gap-4 rounded-xl border p-6">
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-lg bg-accent text-primary"><I className="h-5 w-5" /></span>
              <div><p className="font-bold text-primary-deep">{t}</p><p className="mt-1 text-sm text-muted-foreground">{d}</p></div>
            </div>
          ))}
        </div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            const f = new FormData(e.currentTarget);
            window.location.href = `mailto:${company.email}?subject=${encodeURIComponent(`Inquiry from ${f.get("name")}`)}&body=${encodeURIComponent(String(f.get("message")))}`;
            setSent(true);
          }}
          className="space-y-4 rounded-xl bg-secondary p-8"
        >
          <h2 className="text-2xl font-extrabold text-primary-deep">Send us a message</h2>
          <input name="name" required placeholder="Full name" className="w-full rounded-md border bg-background px-4 py-3 outline-none focus:border-primary" />
          <input name="company" placeholder="Company" className="w-full rounded-md border bg-background px-4 py-3 outline-none focus:border-primary" />
          <textarea name="message" required rows={5} placeholder="Tell us about your project" className="w-full rounded-md border bg-background px-4 py-3 outline-none focus:border-primary" />
          <button className="w-full rounded-md bg-primary py-3.5 font-bold text-primary-foreground hover:bg-primary-deep">Send Message</button>
          {sent && <p className="text-sm text-primary">Your email app has been opened to send the message.</p>}
        </form>
      </section>
    </SiteLayout>
  );
}
