import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  ["Dream", "Cloud-soft ideas, destination moods, and travel dates begin to take shape.", "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1200&q=85"],
  ["Plan", "Routes, stays, transfers, and experiences are arranged into a polished itinerary.", "https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=1200&q=85"],
  ["Book", "Flights, hotels, tickets, insurance, and visas move into a clear booking flow.", "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1200&q=85"],
  ["Travel", "You arrive with confidence, backed by local coordination and expert support.", "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=85"],
  ["Return With Stories", "The journey ends with photos, memories, and a reason to plan the next one.", "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=85"],
];

export default function StoryScroll() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const panels = gsap.utils.toArray(".story-panel");
      const cards = gsap.utils.toArray(".story-card");
      const dots = gsap.utils.toArray(".story-dot");

      gsap.set(panels.slice(1), { opacity: 0, scale: 1.08 });
      gsap.set(cards.slice(1), { opacity: 0, y: 40 });

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: `+=${steps.length * 720}`,
          scrub: 0.8,
          pin: true,
        },
      });

      panels.forEach((panel, idx) => {
        if (idx === 0) return;
        timeline.to(panels[idx - 1], { opacity: 0, scale: 0.96, duration: 0.7 }, idx);
        timeline.to(cards[idx - 1], { opacity: 0, x: -40, duration: 0.55 }, idx);
        timeline.to(panel, { opacity: 1, scale: 1, duration: 0.7 }, idx);
        timeline.to(cards[idx], { opacity: 1, y: 0, duration: 0.65 }, idx + 0.08);
        timeline.to(".route-line", { width: `${((idx + 1) / steps.length) * 100}%`, duration: 0.4 }, idx);
        timeline.to(dots[idx], { backgroundColor: "#D8B45F", scale: 1.3, duration: 0.25 }, idx);
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative h-screen overflow-hidden bg-navy text-white">
      {steps.map(([title, copy, image]) => (
        <div key={title} className="story-panel absolute inset-0">
          <img src={image} alt={title} className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/72 to-navy/18" />
        </div>
      ))}
      <div className="relative z-10 mx-auto grid h-full max-w-7xl items-center gap-10 px-5 lg:grid-cols-[.95fr_1.05fr]">
        <div>
          <p className="mb-4 text-sm font-extrabold uppercase tracking-[0.28em] text-gold">Your Journey Begins Here</p>
          <div className="relative min-h-80">
            {steps.map(([title, copy], idx) => (
              <div key={title} className="story-card absolute left-0 top-0 max-w-xl">
                <p className="mb-3 text-sm font-bold text-white/60">Step {idx + 1}</p>
                <h2 className="font-serif text-6xl font-bold md:text-8xl">{title}</h2>
                <p className="mt-5 text-lg leading-8 text-white/72">{copy}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="relative hidden h-[560px] lg:block">
          <div className="absolute left-10 top-8 h-52 w-72 rounded-[2rem] border border-white/18 bg-white/10 p-4 shadow-glow backdrop-blur-xl">
            <div className="h-full rounded-[1.5rem] bg-sand/90 p-5 text-navy">
              <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-ocean">Passport</p>
              <p className="mt-16 font-serif text-3xl font-bold">Ready</p>
            </div>
          </div>
          <div className="absolute right-4 top-24 h-80 w-64 rotate-6 overflow-hidden rounded-[2rem] border border-white/20 shadow-glow">
            <img src="https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?auto=format&fit=crop&w=700&q=85" alt="Travel memory" className="h-full w-full object-cover" />
          </div>
          <div className="absolute bottom-16 left-0 h-64 w-72 -rotate-3 overflow-hidden rounded-[2rem] border border-white/20 shadow-glow">
            <img src="https://images.unsplash.com/photo-1512100356356-de1b84283e18?auto=format&fit=crop&w=700&q=85" alt="Map route" className="h-full w-full object-cover" />
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 z-20 w-[min(92%,46rem)] -translate-x-1/2">
        <div className="h-1 overflow-hidden rounded-full bg-white/18">
          <div className="route-line h-full w-1/5 rounded-full bg-gold" />
        </div>
        <div className="mt-4 flex justify-between">
          {steps.map(([title], idx) => (
            <span key={title} className="story-dot h-3 w-3 rounded-full bg-white/45" style={idx === 0 ? { backgroundColor: "#D8B45F", transform: "scale(1.3)" } : undefined} />
          ))}
        </div>
      </div>
    </section>
  );
}
