import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Building2, Clock3, Globe2, MessageCircle, ShieldCheck, Sparkles, UsersRound, WalletCards } from "lucide-react";
import EnquiryForm from "../components/EnquiryForm.jsx";
import Hero from "../components/Hero.jsx";
import PackageGrid from "../components/PackageGrid.jsx";
import PageShell from "../components/PageShell.jsx";
import SectionTitle from "../components/SectionTitle.jsx";
import StoryScroll from "../components/StoryScroll.jsx";
import { buildWhatsAppLink, domesticTours, honeymoonTours, internationalTours, testimonials, whyChoose } from "../data/travelData.js";

const icons = [WalletCards, Globe2, Clock3, ShieldCheck];
const popular = internationalTours.filter((tour) => ["bali", "dubai", "singapore", "malaysia", "maldives", "europe"].includes(tour.slug));

export default function Home() {
  return (
    <PageShell>
      <Hero />
      <StoryScroll />
      <section className="bg-sand px-5 py-20">
        <div className="mx-auto max-w-7xl">
          <SectionTitle eyebrow="Featured international tours" title="Across the world, planned with polish" description="A collection of premium international journeys designed for families, couples, and first-time travellers." />
          <PackageGrid packages={internationalTours} />
        </div>
      </section>
      <section className="bg-white px-5 py-20">
        <div className="mx-auto max-w-7xl">
          <SectionTitle eyebrow="Featured domestic tours" title="India's most loved escapes" description="Hill stations, beaches, backwaters, deserts, and high-altitude routes arranged with comfort-first planning." />
          <PackageGrid packages={domesticTours} />
        </div>
      </section>
      <section className="bg-gradient-to-br from-rose-50 via-white to-sand px-5 py-20">
        <div className="mx-auto max-w-7xl">
          <SectionTitle center eyebrow="Honeymoon packages" title="Romance, privacy, and effortless details" description="Softly paced escapes with premium stays, scenic moments, and couple-friendly experiences." />
          <PackageGrid packages={honeymoonTours} romantic />
        </div>
      </section>
      <section className="bg-navy px-5 py-20 text-white">
        <div className="mx-auto max-w-7xl">
          <SectionTitle light center eyebrow="Why choose Neelkanth Holidays" title="Travel planning that feels personal" description="A responsive travel partner for budget-aware, experience-rich, and well-coordinated journeys." />
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {whyChoose.map(([title, copy], idx) => {
              const Icon = icons[idx];
              return (
                <motion.div key={title} className="rounded-[1.5rem] border border-white/12 bg-white/8 p-6 backdrop-blur-xl" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.08 }}>
                  <Icon className="mb-5 text-gold" size={32} />
                  <h3 className="font-serif text-2xl font-bold">{title}</h3>
                  <p className="mt-3 text-sm leading-7 text-white/68">{copy}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
      <section className="bg-white px-5 py-20">
        <div className="mx-auto max-w-7xl">
          <SectionTitle eyebrow="Popular destinations" title="Where travellers keep returning" description="High-interest destinations with strong ratings, varied experiences, and flexible package styles." />
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {popular.map((tour) => (
              <Link key={tour.slug} to={`/destinations/${tour.slug}`} className="group relative h-80 overflow-hidden rounded-[1.5rem] shadow-premium">
                <img src={tour.image} alt={tour.title} className="h-full w-full object-cover transition duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/86 via-navy/15 to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 text-white">
                  <p className="text-sm font-bold text-gold">{tour.location} • {tour.rating} rating</p>
                  <h3 className="mt-2 font-serif text-4xl font-bold">{tour.title}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <SplitCta
        dark
        eyebrow="Group tours"
        title="Family, corporate, student, and custom groups"
        copy="Plan a group departure with coordinated stays, transfers, sightseeing, meal preferences, and support for every traveller."
        cta="Request Group Tour Quote"
        href="/group-tours"
        image="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1400&q=85"
        icon={<UsersRound size={30} />}
      />
      <SplitCta
        eyebrow="Visa assistance"
        title="Tourist visa guidance with clear document support"
        copy="Get help understanding visa documents, travel insurance, appointment steps, and itinerary support for popular destinations."
        cta="Apply for Visa Assistance"
        href="/visa-assistance"
        image="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1400&q=85"
        icon={<Building2 size={30} />}
      />
      <Testimonials />
      <section className="bg-luxury-radial px-5 py-20 text-white">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_420px] lg:items-center">
          <div>
            <p className="mb-4 text-sm font-extrabold uppercase tracking-[0.28em] text-gold">Final call</p>
            <h2 className="font-serif text-5xl font-bold md:text-7xl">Ready to Plan Your Next Holiday?</h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/74">
              Tell us where you want to go, and our travel experts will craft a package that fits your budget, style, and schedule.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a href={buildWhatsAppLink()} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-extrabold text-navy">
                WhatsApp Now <MessageCircle size={17} />
              </a>
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-full border border-white/22 px-6 py-3 text-sm font-bold text-white">
                Send Enquiry <ArrowRight size={17} />
              </Link>
            </div>
          </div>
          <EnquiryForm destination="my next holiday" />
        </div>
      </section>
    </PageShell>
  );
}

function SplitCta({ eyebrow, title, copy, cta, href, image, dark = false, icon }) {
  return (
    <section className={`${dark ? "bg-navy text-white" : "bg-sand text-navy"} px-5 py-20`}>
      <div className="mx-auto grid max-w-7xl overflow-hidden rounded-[2rem] bg-white shadow-premium lg:grid-cols-2">
        <div className={`p-8 md:p-12 ${dark ? "bg-navy text-white" : "bg-white text-navy"}`}>
          <div className="mb-6 grid h-14 w-14 place-items-center rounded-full bg-gold text-navy">{icon}</div>
          <p className="text-sm font-extrabold uppercase tracking-[0.28em] text-ocean">{eyebrow}</p>
          <h2 className="mt-3 font-serif text-4xl font-bold md:text-6xl">{title}</h2>
          <p className={`mt-5 text-lg leading-8 ${dark ? "text-white/68" : "text-ink/68"}`}>{copy}</p>
          <Link to={href} className="mt-7 inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-extrabold text-navy transition hover:bg-ocean hover:text-white">
            {cta} <ArrowRight size={17} />
          </Link>
        </div>
        <div className="h-96 overflow-hidden lg:h-auto">
          <img src={image} alt={title} className="h-full w-full object-cover" />
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="overflow-hidden bg-sand px-5 py-20">
      <div className="mx-auto max-w-7xl">
        <SectionTitle center eyebrow="Testimonials" title="Travel stories from our guests" description="Premium planning matters most when travellers feel supported throughout the journey." />
      </div>
      <div className="testimonial-track flex gap-5">
        {[...testimonials, ...testimonials].map((item, idx) => (
          <article key={`${item.name}-${idx}`} className="w-[22rem] shrink-0 rounded-[1.5rem] border border-navy/10 bg-white p-6 shadow-premium">
            <Sparkles className="text-gold" />
            <p className="mt-5 text-sm leading-7 text-ink/72">"{item.quote}"</p>
            <div className="mt-6 border-t border-navy/10 pt-4">
              <p className="font-bold text-navy">{item.name}</p>
              <p className="text-sm text-ocean">{item.trip}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
