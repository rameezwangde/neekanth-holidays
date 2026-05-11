import { Link } from "react-router-dom";
import { Facebook, Instagram, Mail, Phone, Youtube } from "lucide-react";
import logo from "../assets/neelkanth-logo.svg";
import { contact } from "../data/travelData.js";

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 md:grid-cols-[1.3fr_1fr_1fr_1fr]">
        <div>
          <div className="mb-5 inline-flex rounded-2xl bg-white px-4 py-3">
            <img src={logo} alt="Neelkanth Holidays" className="h-16 w-56 object-contain" />
          </div>
          <p className="max-w-sm text-sm leading-7 text-white/68">
            Every journey becomes a story. We create domestic escapes, international holidays, group departures, honeymoon experiences, and visa support from India.
          </p>
          <div className="mt-6 flex gap-3 text-white/70">
            <Facebook size={18} />
            <Instagram size={18} />
            <Youtube size={20} />
          </div>
        </div>
        <FooterLinks title="Quick Links" links={[["Home", "/"], ["About Us", "/about"], ["Contact Us", "/contact"], ["Visa Assistance", "/visa-assistance"]]} />
        <FooterLinks title="Domestic Tours" links={[["Goa", "/destinations/goa"], ["Kashmir", "/destinations/kashmir"], ["Kerala", "/destinations/kerala"], ["Ladakh", "/destinations/ladakh"]]} />
        <div>
          <h3 className="mb-4 font-bold text-gold">Contact</h3>
          <div className="space-y-3 text-sm text-white/70">
            <a className="flex items-center gap-2 hover:text-gold" href={`mailto:${contact.email}`}>
              <Mail size={16} /> {contact.email}
            </a>
            <a className="flex items-center gap-2 hover:text-gold" href={`tel:${contact.tel}`}>
              <Phone size={16} /> {contact.phone}
            </a>
            <p>Flight Booking, Holiday Packages, Hotel Booking, Passport & Visa, Cruise Packages, Travel Insurance.</p>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 px-5 py-5 text-center text-xs text-white/55">
        Copyright © Neelkanth Holidays 2026. All rights reserved.
      </div>
    </footer>
  );
}

function FooterLinks({ title, links }) {
  return (
    <div>
      <h3 className="mb-4 font-bold text-gold">{title}</h3>
      <div className="grid gap-3 text-sm text-white/70">
        {links.map(([label, href]) => (
          <Link key={href} to={href} className="hover:text-gold">
            {label}
          </Link>
        ))}
      </div>
    </div>
  );
}
