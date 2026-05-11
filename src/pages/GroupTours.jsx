import { ArrowRight, BriefcaseBusiness, GraduationCap, UsersRound } from "lucide-react";
import EnquiryForm from "../components/EnquiryForm.jsx";
import PageShell from "../components/PageShell.jsx";
import SectionTitle from "../components/SectionTitle.jsx";
import { buildWhatsAppLink } from "../data/travelData.js";

const groups = [
  ["Family Groups", "Multi-generation holidays with accessible pacing, reliable transfers, and balanced sightseeing.", UsersRound],
  ["Corporate Groups", "Offsites, incentive trips, team retreats, and MICE-style travel coordination.", BriefcaseBusiness],
  ["Student Groups", "Educational tours, safe routing, group supervision support, and budget-aware packages.", GraduationCap],
];

export default function GroupTours() {
  return (
    <PageShell>
      <section className="relative min-h-[76vh] overflow-hidden bg-navy pt-36 text-white">
        <img src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1800&q=85" alt="Group tours" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/74 to-navy/18" />
        <div className="relative z-10 mx-auto flex min-h-[58vh] max-w-7xl items-center px-5">
          <div className="max-w-3xl">
            <p className="mb-4 text-sm font-extrabold uppercase tracking-[0.28em] text-gold">Group travel</p>
            <h1 className="font-serif text-6xl font-bold md:text-8xl">Designed for every traveller in the group</h1>
            <p className="mt-6 text-lg leading-8 text-white/76">Family groups, corporate teams, student tours, and fully customized departures with planned stays, transport, meals, and sightseeing.</p>
            <a href={buildWhatsAppLink("Hi Neelkanth Holidays, I need a group tour quote.")} target="_blank" rel="noreferrer" className="mt-7 inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-extrabold text-navy">
              Request Group Tour Quote <ArrowRight size={17} />
            </a>
          </div>
        </div>
      </section>
      <section className="bg-sand px-5 py-20">
        <div className="mx-auto max-w-7xl">
          <SectionTitle center eyebrow="Group formats" title="Coordinated travel without the clutter" description="Packages are planned around group size, traveller profile, destination pace, hotel category, and meal requirements." />
          <div className="grid gap-6 md:grid-cols-3">
            {groups.map(([title, copy, Icon]) => (
              <article key={title} className="rounded-[1.5rem] bg-white p-7 shadow-premium">
                <Icon size={34} className="text-ocean" />
                <h3 className="mt-5 font-serif text-3xl font-bold text-navy">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-ink/68">{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-white px-5 py-20">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_420px]">
          <SectionTitle eyebrow="Custom quote" title="Tell us the group size and destination" description="We will coordinate the stay category, transfer plan, meal preferences, itinerary rhythm, and support requirements." />
          <EnquiryForm destination="a group tour" />
        </div>
      </section>
    </PageShell>
  );
}
