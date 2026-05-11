import { motion } from "framer-motion";

export default function SectionTitle({ eyebrow, title, description, center = false, light = false }) {
  return (
    <motion.div
      className={`mb-10 ${center ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}`}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.65 }}
    >
      {eyebrow && <p className={`mb-3 text-sm font-extrabold uppercase tracking-[0.28em] ${light ? "text-gold" : "text-ocean"}`}>{eyebrow}</p>}
      <h2 className={`font-serif text-4xl font-bold leading-tight md:text-6xl ${light ? "text-white" : "text-navy"}`}>{title}</h2>
      {description && <p className={`mt-5 text-base leading-8 md:text-lg ${light ? "text-white/70" : "text-ink/70"}`}>{description}</p>}
    </motion.div>
  );
}
