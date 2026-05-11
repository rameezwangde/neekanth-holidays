import { motion } from "framer-motion";

export default function PageShell({ children, className = "" }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
