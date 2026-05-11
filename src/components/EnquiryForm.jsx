import { CalendarDays, Mail, MapPin, Send, User } from "lucide-react";
import { buildWhatsAppLink } from "../data/travelData.js";

export default function EnquiryForm({ destination = "a holiday" }) {
  const message = `Hi Neelkanth Holidays, I want to enquire about ${destination}.`;

  return (
    <form
      className="rounded-[1.5rem] border border-navy/10 bg-white p-6 shadow-premium"
      onSubmit={(event) => {
        event.preventDefault();
        window.open(buildWhatsAppLink(message), "_blank", "noreferrer");
      }}
    >
      <h3 className="font-serif text-3xl font-bold text-navy">Send Enquiry</h3>
      <p className="mt-2 text-sm leading-6 text-ink/62">Share basic details and continue on WhatsApp for a faster response.</p>
      <div className="mt-6 grid gap-4">
        <Field icon={<User size={18} />} placeholder="Your name" />
        <Field icon={<Mail size={18} />} placeholder="Email or phone" />
        <Field icon={<MapPin size={18} />} placeholder={`Destination: ${destination}`} />
        <Field icon={<CalendarDays size={18} />} placeholder="Preferred month" />
        <textarea className="min-h-28 rounded-2xl border border-navy/10 bg-sand/40 px-4 py-3 text-sm outline-none transition placeholder:text-ink/40 focus:border-ocean" placeholder="Travelers, budget, hotel preference, or special requests" />
      </div>
      <button className="mt-5 flex w-full items-center justify-center gap-2 rounded-full bg-navy px-5 py-3 text-sm font-extrabold text-white transition hover:bg-ocean">
        Continue on WhatsApp <Send size={17} />
      </button>
    </form>
  );
}

function Field({ icon, placeholder }) {
  return (
    <label className="flex items-center gap-3 rounded-2xl border border-navy/10 bg-sand/40 px-4 py-3 text-ink/50 transition focus-within:border-ocean">
      {icon}
      <input className="w-full bg-transparent text-sm text-ink outline-none placeholder:text-ink/40" placeholder={placeholder} />
    </label>
  );
}
