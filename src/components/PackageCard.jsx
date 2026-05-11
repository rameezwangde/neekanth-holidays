import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight, Clock, MapPin, Star } from "lucide-react";

export default function PackageCard({ tour, romantic = false }) {
  return (
    <motion.article
      className={`group relative overflow-hidden rounded-[1.75rem] p-[1px] shadow-[0_26px_70px_rgba(6,26,46,0.16)] transition ${
        romantic
          ? "bg-gradient-to-br from-rose-200 via-white to-gold/50"
          : "bg-gradient-to-br from-white via-ocean/20 to-gold/45"
      }`}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -8 }}
    >
      <Link to={`/destinations/${tour.slug}`} className="block h-full overflow-hidden rounded-[1.7rem] bg-white">
        <div className="relative h-72 overflow-hidden bg-mist">
          <img
            src={tour.image}
            alt={tour.title}
            className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
            loading="lazy"
            onError={(event) => {
              event.currentTarget.src =
                "https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=1200&q=85";
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy/88 via-navy/26 to-white/5" />
          <div className="absolute inset-x-5 top-5 flex items-center justify-between gap-3">
            <span className="rounded-full border border-white/35 bg-white/90 px-3 py-1.5 text-xs font-extrabold text-navy shadow-sm backdrop-blur">
              {tour.category}
            </span>
            <span className="flex items-center gap-1 rounded-full border border-white/25 bg-navy/72 px-3 py-1.5 text-sm font-extrabold text-white backdrop-blur">
              <Star size={14} fill="currentColor" className="text-gold" /> {tour.rating}
            </span>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-36 bg-gradient-to-t from-navy/95 via-navy/72 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
            <p className="mb-2 inline-flex items-center gap-1 rounded-full bg-white/14 px-3 py-1 text-xs font-bold text-white/88 backdrop-blur">
              <MapPin size={13} /> {tour.location}
            </p>
            <h3 className="font-serif text-4xl font-bold leading-none text-white drop-shadow-[0_4px_18px_rgba(0,0,0,0.75)]">
              {tour.title}
            </h3>
          </div>
          <div className="absolute -bottom-8 right-6 h-16 w-16 rounded-full bg-gold/25 blur-2xl" />
        </div>
        <div className="relative bg-gradient-to-b from-white via-white to-sand/45 p-6">
          <div className="absolute -top-6 inset-x-0 h-6 bg-gradient-to-b from-transparent to-white" />
          <div className="absolute -top-4 left-6 h-8 w-24 rounded-full bg-gold/70 opacity-25 blur-xl transition group-hover:opacity-45" />
          <p className="min-h-20 text-[15px] leading-8 text-ink/72">{tour.description}</p>
          <div className="mt-5 h-px bg-gradient-to-r from-transparent via-navy/14 to-transparent" />
          <div className="mt-5 flex items-center justify-between gap-3">
            <span className="flex shrink-0 items-center gap-2 rounded-full bg-ocean/8 px-3 py-2 text-sm font-extrabold text-navy">
              <Clock size={16} className="text-ocean" /> {tour.duration}
            </span>
            <span className="flex min-w-36 items-center justify-center gap-2 whitespace-nowrap rounded-full bg-navy px-5 py-3 text-sm font-extrabold text-white shadow-[0_14px_30px_rgba(6,26,46,0.22)] transition group-hover:bg-ocean group-hover:shadow-[0_14px_34px_rgba(14,139,184,0.28)]">
              View Package <ArrowUpRight size={16} />
            </span>
          </div>
        </div>
      </Link>
    </motion.article>
  );
}
