import { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Compass, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { buildWhatsAppLink } from "../data/travelData.js";

const words = ["Dubai", "Singapore", "Bali", "Maldives", "Kashmir", "Ladakh", "Europe", "Turkey"];

export default function Hero() {
  const [index, setIndex] = useState(0);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 700], [0, 160]);

  useEffect(() => {
    const timer = window.setInterval(() => setIndex((value) => (value + 1) % words.length), 1800);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden bg-navy pt-32 text-white">
      <motion.div style={{ y }} className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=2200&q=90"
          alt="Luxury travel coastline"
          className="h-full w-full scale-110 object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/62 to-navy/12" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy via-transparent to-transparent" />
      </motion.div>
      <div className="relative z-10 mx-auto grid min-h-[calc(100vh-8rem)] max-w-7xl items-center gap-10 px-5 pb-36 pt-12 md:pt-16 lg:grid-cols-[1.1fr_.9fr] lg:pb-32">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-bold text-gold backdrop-blur">
            <Compass size={17} /> Premium holidays from India
          </p>
          <h1 className="font-serif text-5xl font-bold leading-[1.03] md:text-7xl xl:text-8xl">Curated Holidays, Crafted Around You</h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/78 md:text-xl">
            Explore domestic escapes, international tours, romantic honeymoons, group departures, and visa assistance with Neelkanth Holidays.
          </p>
          <div className="mt-7 flex flex-wrap items-center gap-3">
            <Link to="/international" className="inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-extrabold text-navy transition hover:bg-white">
              Explore Packages <ArrowRight size={17} />
            </Link>
            <a href={buildWhatsAppLink("Hi Neelkanth Holidays, please help me plan my trip.")} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-6 py-3 text-sm font-bold text-white backdrop-blur transition hover:border-gold hover:text-gold">
              Plan My Trip <MessageCircle size={17} />
            </a>
          </div>
        </motion.div>
        <motion.div className="hidden lg:block" initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.15 }}>
          <div className="relative mx-auto h-[430px] max-w-md xl:h-[470px]">
            <FloatingCard className="left-0 top-2" title="Now trending" image="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=500&q=80" />
            <FloatingCard className="right-0 top-36" title="Romantic escapes" image="https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=500&q=80" />
            <FloatingCard className="left-20 top-[260px] xl:top-[290px]" title="India journeys" image="https://images.unsplash.com/photo-1598091383021-15ddea10925d?auto=format&fit=crop&w=500&q=80" />
          </div>
        </motion.div>
      </div>
      <div className="absolute bottom-5 left-1/2 z-20 w-[min(92%,56rem)] -translate-x-1/2 rounded-[1.5rem] border border-white/18 bg-navy/90 px-5 py-4 text-center text-sm font-semibold text-white shadow-glow backdrop-blur-2xl md:bottom-8 md:rounded-full md:text-lg">
        Dreaming of <span className="font-serif text-2xl font-bold text-gold">{words[index]}</span>? We will shape the route, stays, transfers, and visa guidance.
      </div>
    </section>
  );
}

function FloatingCard({ className, title, image }) {
  return (
    <motion.div
      className={`absolute w-56 overflow-hidden rounded-[1.5rem] border border-white/20 bg-navy/88 p-3 shadow-glow backdrop-blur-xl xl:w-60 ${className}`}
      animate={{ y: [0, -12, 0] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
    >
      <img src={image} alt="" className="h-36 w-full rounded-2xl object-cover xl:h-40" />
      <p className="mt-3 truncate font-bold text-white">{title}</p>
    </motion.div>
  );
}
