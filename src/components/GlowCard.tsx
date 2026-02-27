import { motion } from "framer-motion";
import { ReactNode } from "react";

interface GlowCardProps {
  children: ReactNode;
  className?: string;
}

const GlowCard = ({ children, className = "" }: GlowCardProps) => {
  return (
    <motion.div
      whileHover={{
        boxShadow: "0 0 20px hsl(0 100% 50% / 0.2), 0 0 40px hsl(0 100% 50% / 0.08)",
        borderColor: "hsl(0 85% 50% / 0.4)",
      }}
      transition={{ duration: 0.3 }}
      className={`
        border border-border bg-card p-6
        transition-all duration-300
        hover:bg-surface-elevated
        ${className}
      `}
    >
      {children}
    </motion.div>
  );
};

export default GlowCard;
