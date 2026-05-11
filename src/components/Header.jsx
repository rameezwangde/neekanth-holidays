import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Facebook, Instagram, Mail, Menu, Phone, Search, X, Youtube } from "lucide-react";
import logo from "../assets/neelkanth-logo.svg";
import { buildWhatsAppLink, contact } from "../data/travelData.js";

const navItems = [
  ["Home", "/"],
  ["Domestic", "/domestic"],
  ["International", "/international"],
  ["Honeymoon", "/honeymoon"],
  ["Group Tour", "/group-tours"],
  ["Visa", "/visa-assistance"],
  ["About Us", "/about"],
  ["Contact Us", "/contact"],
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const activeClass = ({ isActive }) =>
    `text-sm font-semibold transition ${isActive ? "text-gold" : "text-white hover:text-gold"}`;

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="hidden border-b border-white/10 bg-navy/85 px-5 py-2 text-xs text-white/80 backdrop-blur-xl md:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <div className="flex items-center gap-5">
            <a className="flex items-center gap-2 hover:text-gold" href={`mailto:${contact.email}`}>
              <Mail size={14} /> {contact.email}
            </a>
            <a className="flex items-center gap-2 hover:text-gold" href={`tel:${contact.tel}`}>
              <Phone size={14} /> {contact.phone}
            </a>
          </div>
          <div className="flex items-center gap-3">
            <Facebook size={15} />
            <Instagram size={15} />
            <Youtube size={16} />
          </div>
        </div>
      </div>
      <nav className="mx-auto mt-0 max-w-7xl px-4 md:mt-3">
        <div className="flex items-center justify-between rounded-none border border-white/15 bg-navy/90 px-4 py-3 shadow-glow backdrop-blur-2xl md:rounded-full md:px-5">
          <Link to="/" className="flex shrink-0 items-center" onClick={() => setOpen(false)}>
            <span className="rounded-2xl bg-white px-3 py-2 shadow-sm">
              <img src={logo} alt="Neelkanth Holidays" className="h-11 w-40 object-contain md:h-12 md:w-44" />
            </span>
          </Link>
          <div className="hidden items-center gap-4 xl:gap-5 lg:flex">
            {navItems.map(([label, href]) => (
              <NavLink key={href} to={href} className={activeClass}>
                {label}
              </NavLink>
            ))}
          </div>
          <div className="hidden items-center gap-2 md:flex">
            <button aria-label="Search packages" className="grid h-10 w-10 place-items-center rounded-full border border-white/20 text-white transition hover:border-gold hover:text-gold">
              <Search size={18} />
            </button>
            <a href={`tel:${contact.tel}`} className="rounded-full border border-white/20 px-4 py-2 text-sm font-bold text-white transition hover:border-gold hover:text-gold">
              Call
            </a>
            <a href={buildWhatsAppLink()} target="_blank" rel="noreferrer" className="rounded-full bg-gold px-4 py-2 text-sm font-extrabold text-navy transition hover:bg-white">
              WhatsApp
            </a>
          </div>
          <button className="grid h-10 w-10 place-items-center rounded-full border border-white/20 text-white lg:hidden" onClick={() => setOpen((value) => !value)} aria-label="Open menu">
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
        {open && (
          <div className="rounded-b-3xl border border-white/10 bg-navy/95 p-4 shadow-premium backdrop-blur-xl lg:hidden">
            <div className="grid gap-3">
              {navItems.map(([label, href]) => (
                <NavLink key={href} to={href} className={activeClass} onClick={() => setOpen(false)}>
                  {label}
                </NavLink>
              ))}
              <div className="flex gap-2 pt-2">
                <a href={`tel:${contact.tel}`} className="flex-1 rounded-full border border-white/20 px-4 py-2 text-center text-sm font-bold text-white">
                  Call
                </a>
                <a href={buildWhatsAppLink()} target="_blank" rel="noreferrer" className="flex-1 rounded-full bg-gold px-4 py-2 text-center text-sm font-extrabold text-navy">
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
