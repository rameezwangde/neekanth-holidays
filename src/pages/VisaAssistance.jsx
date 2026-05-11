import { CheckCircle2, FileCheck2, ShieldCheck } from "lucide-react";
import EnquiryForm from "../components/EnquiryForm.jsx";
import PageShell from "../components/PageShell.jsx";
import SectionTitle from "../components/SectionTitle.jsx";

const points = [
  ["Document checklist", "Clear guidance on documents commonly needed for tourist visa applications."],
  ["Travel support", "Itinerary, hotel, insurance, and flight-related travel support where required."],
  ["Application guidance", "Help understanding appointment flow, timelines, and destination-specific requirements."],
];

export default function VisaAssistance() {
  return (
    <PageShell>
      <section className="bg-luxury-radial px-5 pb-20 pt-44 text-white">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_420px] lg:items-center">
          <div>
            <p className="mb-4 text-sm font-extrabold uppercase tracking-[0.28em] text-gold">Visa assistance</p>
            <h1 className="font-serif text-6xl font-bold md:text-8xl">Tourist visa support made clear</h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-white/74">Get practical help with visa documents, travel insurance, appointment preparation, and destination-specific tourist visa guidance.</p>
          </div>
          <EnquiryForm destination="visa assistance" />
        </div>
      </section>
      <section className="bg-white px-5 py-20">
        <div className="mx-auto max-w-7xl">
          <SectionTitle center eyebrow="How we help" title="Clarity before you apply" description="Visa rules vary by country and traveler profile. We keep the support practical, organized, and travel-focused." />
          <div className="grid gap-6 md:grid-cols-3">
            {points.map(([title, copy], idx) => {
              const Icon = [FileCheck2, ShieldCheck, CheckCircle2][idx];
              return (
                <article key={title} className="rounded-[1.5rem] border border-navy/10 bg-sand/60 p-7">
                  <Icon size={34} className="text-ocean" />
                  <h3 className="mt-5 font-serif text-3xl font-bold text-navy">{title}</h3>
                  <p className="mt-3 text-sm leading-7 text-ink/68">{copy}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
