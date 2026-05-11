import EnquiryForm from "../components/EnquiryForm.jsx";
import PackageGrid from "../components/PackageGrid.jsx";
import PageShell from "../components/PageShell.jsx";
import SectionTitle from "../components/SectionTitle.jsx";

export default function ListingPage({ title, eyebrow, description, image, packages, romantic = false }) {
  return (
    <PageShell>
      <section className="relative min-h-[72vh] overflow-hidden bg-navy pt-36 text-white">
        <img src={image} alt={title} className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/68 to-navy/16" />
        <div className="relative z-10 mx-auto flex min-h-[56vh] max-w-7xl items-center px-5">
          <div className="max-w-3xl">
            <p className="mb-4 text-sm font-extrabold uppercase tracking-[0.28em] text-gold">{eyebrow}</p>
            <h1 className="font-serif text-6xl font-bold md:text-8xl">{title}</h1>
            <p className="mt-6 text-lg leading-8 text-white/76 md:text-xl">{description}</p>
          </div>
        </div>
      </section>
      <section className={`${romantic ? "bg-gradient-to-br from-rose-50 via-white to-sand" : "bg-sand"} px-5 py-20`}>
        <div className="mx-auto max-w-7xl">
          <SectionTitle eyebrow="Curated packages" title={`Featured ${title}`} description="Choose a destination and enquire for a personalized route, hotel category, inclusions, and pricing." />
          <PackageGrid packages={packages} romantic={romantic} />
        </div>
      </section>
      <section className="bg-white px-5 py-20">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_420px] lg:items-start">
          <SectionTitle eyebrow="Tailor your trip" title="Prefer a custom itinerary?" description="Share your destination, travel month, guest count, budget, and hotel preference. Neelkanth Holidays will shape a package around your style." />
          <EnquiryForm destination={title} />
        </div>
      </section>
    </PageShell>
  );
}
