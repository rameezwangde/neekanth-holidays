import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight, Clock, MapPin, Star } from "lucide-react";

export default function PackageCard({ tour, romantic = false }) {
  return (
    <motion.article
      className={`group overflow-hidden rounded-[1.5rem] border bg-white shadow-premium ${romantic ? "border-rose-100" : "border-navy/10"}`}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -8 }}
    >
      <Link to={`/destinations/${tour.slug}`} className="block">
        <div className="relative h-72 overflow-hidden bg-mist">
          <img src={tour.image} alt={tour.title} className="h-full w-full object-cover transition duration-700 group-hover:scale-110" loading="lazy" />
          <div className="absolute inset-0 bg-gradient-to-t from-navy/78 via-transparent to-transparent" />
          <div className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-extrabold text-navy backdrop-blur">
            {tour.category}
          </div>
          <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between gap-4 text-white">
            <div>
              <h3 className="font-serif text-3xl font-bold">{tour.title}</h3>
              <p className="mt-1 flex items-center gap-1 text-sm text-white/82">
                <MapPin size={15} /> {tour.location}
              </p>
            </div>
            <span className="flex items-center gap-1 rounded-full bg-gold px-3 py-1 text-sm font-extrabold text-navy">
              <Star size={14} fill="currentColor" /> {tour.rating}
            </span>
          </div>
        </div>
        <div className="p-5">
          <p className="min-h-14 text-sm leading-7 text-ink/68">{tour.description}</p>
          <div className="mt-5 flex items-center justify-between border-t border-navy/10 pt-5">
            <span className="flex items-center gap-2 text-sm font-bold text-ink">
              <Clock size={16} className="text-ocean" /> {tour.duration}
            </span>
            <span className="flex items-center gap-2 rounded-full bg-navy px-4 py-2 text-sm font-bold text-white transition group-hover:bg-ocean">
              View Package <ArrowUpRight size={16} />
            </span>
          </div>
        </div>
      </Link>
    </motion.article>
  );
}
