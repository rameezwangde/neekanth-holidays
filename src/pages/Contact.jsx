import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import EnquiryForm from "../components/EnquiryForm.jsx";
import PageShell from "../components/PageShell.jsx";
import SectionTitle from "../components/SectionTitle.jsx";
import { buildWhatsAppLink, contact } from "../data/travelData.js";

export default function Contact() {
  return (
    <PageShell>
      <section className="bg-luxury-radial px-5 pb-20 pt-44 text-white">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_420px] lg:items-center">
          <div>
            <p className="mb-4 text-sm font-extrabold uppercase tracking-[0.28em] text-gold">Contact us</p>
            <h1 className="font-serif text-6xl font-bold md:text-8xl">Let's shape your next holiday</h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-white/74">Tell us the destination, travel month, guest count, and hotel preference. We will respond with a suitable plan.</p>
            <div className="mt-8 grid gap-3 text-white/78">
              <a href={`mailto:${contact.email}`} className="flex items-center gap-3 hover:text-gold"><Mail size={19} /> {contact.email}</a>
              <a href={`tel:${contact.tel}`} className="flex items-center gap-3 hover:text-gold"><Phone size={19} /> {contact.phone}</a>
              <a href={buildWhatsAppLink()} target="_blank" rel="noreferrer" className="flex items-center gap-3 hover:text-gold"><MessageCircle size={19} /> WhatsApp enquiry</a>
            </div>
          </div>
          <EnquiryForm destination="a custom holiday" />
        </div>
      </section>
      <section className="bg-sand px-5 py-20">
        <div className="mx-auto max-w-7xl">
          <SectionTitle center eyebrow="Services" title="Everything arranged in one place" description="Flight booking, hotel booking, holiday packages, passport guidance, visa support, cruises, and travel insurance." />
          <div className="rounded-[2rem] bg-white p-8 shadow-premium">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div className="flex items-center gap-4">
                <span className="grid h-14 w-14 place-items-center rounded-full bg-ocean/10 text-ocean"><MapPin /></span>
                <div>
                  <h3 className="font-serif text-3xl font-bold text-navy">Neelkanth Holidays</h3>
                  <p className="text-sm leading-7 text-ink/65">Premium travel planning for domestic, international, honeymoon, group tours, and visa assistance.</p>
                </div>
              </div>
              <a href={buildWhatsAppLink()} target="_blank" rel="noreferrer" className="rounded-full bg-navy px-6 py-3 text-center text-sm font-extrabold text-white transition hover:bg-ocean">
                WhatsApp Now
              </a>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
