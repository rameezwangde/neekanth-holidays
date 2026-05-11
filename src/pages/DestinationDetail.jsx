import { Link, useParams } from "react-router-dom";
import { ArrowLeft, CheckCircle2, Clock, MapPin, MessageCircle, XCircle } from "lucide-react";
import EnquiryForm from "../components/EnquiryForm.jsx";
import PackageGrid from "../components/PackageGrid.jsx";
import PageShell from "../components/PageShell.jsx";
import SectionTitle from "../components/SectionTitle.jsx";
import { allTours, buildWhatsAppLink } from "../data/travelData.js";

export default function DestinationDetail() {
  const { slug } = useParams();
  const tour = allTours.find((item) => item.slug === slug) || allTours[0];
  const related = allTours.filter((item) => item.slug !== tour.slug && item.category === tour.category).slice(0, 4);

  return (
    <PageShell>
      <section className="relative min-h-[78vh] overflow-hidden bg-navy pt-36 text-white">
        <img src={tour.image} alt={tour.title} className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/68 to-navy/16" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy via-transparent to-transparent" />
        <div className="relative z-10 mx-auto flex min-h-[60vh] max-w-7xl items-end px-5 pb-16">
          <div className="max-w-4xl">
            <Link to={tour.category === "Domestic" ? "/domestic" : tour.category === "Honeymoon" ? "/honeymoon" : "/international"} className="mb-6 inline-flex items-center gap-2 text-sm font-bold text-gold">
              <ArrowLeft size={17} /> Back to {tour.category}
            </Link>
            <p className="mb-4 text-sm font-extrabold uppercase tracking-[0.28em] text-gold">{tour.category} package</p>
            <h1 className="font-serif text-7xl font-bold md:text-9xl">{tour.title}</h1>
            <div className="mt-6 flex flex-wrap gap-3">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/12 px-4 py-2 text-sm font-bold backdrop-blur"><Clock size={16} /> {tour.duration}</span>
              <span className="inline-flex items-center gap-2 rounded-full bg-white/12 px-4 py-2 text-sm font-bold backdrop-blur"><MapPin size={16} /> {tour.location}</span>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-sand px-5 py-20">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_420px]">
          <div className="space-y-8">
            <article className="rounded-[1.5rem] bg-white p-7 shadow-premium">
              <h2 className="font-serif text-4xl font-bold text-navy">Overview</h2>
              <p className="mt-4 text-lg leading-8 text-ink/70">{tour.overview}</p>
            </article>
            <article className="rounded-[1.5rem] bg-white p-7 shadow-premium">
              <h2 className="font-serif text-4xl font-bold text-navy">Highlights</h2>
              <div className="mt-5 grid gap-3 md:grid-cols-2">
                {tour.highlights.map((item) => (
                  <p key={item} className="flex items-start gap-3 text-sm leading-7 text-ink/72">
                    <CheckCircle2 className="mt-1 shrink-0 text-ocean" size={18} /> {item}
                  </p>
                ))}
              </div>
            </article>
            <article className="rounded-[1.5rem] bg-white p-7 shadow-premium">
              <h2 className="font-serif text-4xl font-bold text-navy">Day-wise Itinerary</h2>
              <div className="mt-6 space-y-4">
                {tour.itinerary.map((day, idx) => (
                  <div key={day} className="flex gap-4 rounded-2xl bg-sand/70 p-4">
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-navy text-sm font-extrabold text-white">{idx + 1}</span>
                    <div>
                      <h3 className="font-bold text-navy">Day {idx + 1}</h3>
                      <p className="text-sm leading-7 text-ink/68">{day}</p>
                    </div>
                  </div>
                ))}
              </div>
            </article>
            <div className="grid gap-6 md:grid-cols-2">
              <InfoList title="Inclusions" icon="yes" items={["Hotel accommodation", "Airport or station transfers", "Sightseeing as per itinerary", "Travel planning support"]} />
              <InfoList title="Exclusions" icon="no" items={["Flights unless specified", "Personal expenses", "Optional activities", "Visa fees unless specified"]} />
            </div>
          </div>
          <aside className="lg:sticky lg:top-32 lg:self-start">
            <EnquiryForm destination={tour.title} />
            <a href={buildWhatsAppLink(`Hi Neelkanth Holidays, I want details for ${tour.title}.`)} target="_blank" rel="noreferrer" className="mt-4 flex items-center justify-center gap-2 rounded-full bg-gold px-5 py-3 text-sm font-extrabold text-navy shadow-premium">
              WhatsApp for {tour.title} <MessageCircle size={17} />
            </a>
          </aside>
        </div>
      </section>
      <section className="bg-white px-5 py-20">
        <div className="mx-auto max-w-7xl">
          <SectionTitle eyebrow="Related packages" title="You may also like" description="Explore similar destinations and ask our team to compare hotels, routes, and inclusions." />
          <PackageGrid packages={related.length ? related : allTours.slice(0, 4)} />
        </div>
      </section>
    </PageShell>
  );
}

function InfoList({ title, items, icon }) {
  const Icon = icon === "yes" ? CheckCircle2 : XCircle;
  return (
    <article className="rounded-[1.5rem] bg-white p-7 shadow-premium">
      <h2 className="font-serif text-3xl font-bold text-navy">{title}</h2>
      <div className="mt-5 grid gap-3">
        {items.map((item) => (
          <p key={item} className="flex items-center gap-3 text-sm text-ink/70">
            <Icon size={18} className={icon === "yes" ? "text-ocean" : "text-gold"} /> {item}
          </p>
        ))}
      </div>
    </article>
  );
}
