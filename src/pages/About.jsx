import { Award, HeartHandshake, MapPinned } from "lucide-react";
import PageShell from "../components/PageShell.jsx";
import SectionTitle from "../components/SectionTitle.jsx";

const values = [
  ["Personal planning", "Trips are shaped around destination mood, budget, traveler profile, and schedule."],
  ["Reliable coordination", "From flights and stays to transfers and sightseeing, each layer is planned clearly."],
  ["Experience-first travel", "The focus is on comfortable pacing, memorable locations, and practical support."],
];

export default function About() {
  return (
    <PageShell>
      <section className="relative overflow-hidden bg-navy px-5 pb-24 pt-44 text-white">
        <img src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=1800&q=85" alt="About Neelkanth Holidays" className="absolute inset-0 h-full w-full object-cover opacity-35" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/82 to-navy/45" />
        <div className="relative z-10 mx-auto max-w-7xl">
          <p className="mb-4 text-sm font-extrabold uppercase tracking-[0.28em] text-gold">About us</p>
          <h1 className="max-w-4xl font-serif text-6xl font-bold md:text-8xl">Every journey becomes a story</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-white/74">
            Neelkanth Holidays helps travelers from India explore domestic escapes, international tours, honeymoon packages, group departures, visa assistance, cruises, hotels, flights, and travel insurance with a personal planning approach.
          </p>
        </div>
      </section>
      <section className="bg-sand px-5 py-20">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[.85fr_1.15fr]">
          <SectionTitle eyebrow="Our approach" title="Premium does not mean complicated" description="It means thoughtful destination advice, clean communication, dependable arrangements, and a holiday that feels made for you." />
          <div className="grid gap-5">
            {values.map(([title, copy], idx) => {
              const Icon = [HeartHandshake, MapPinned, Award][idx];
              return (
                <article key={title} className="flex gap-5 rounded-[1.5rem] bg-white p-6 shadow-premium">
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-ocean/10 text-ocean">
                    <Icon size={24} />
                  </span>
                  <div>
                    <h3 className="font-serif text-2xl font-bold text-navy">{title}</h3>
                    <p className="mt-2 text-sm leading-7 text-ink/68">{copy}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
