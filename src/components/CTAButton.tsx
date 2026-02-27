import { motion } from "framer-motion";
import { ReactNode } from "react";

interface CTAButtonProps {
  children: ReactNode;
  className?: string;
  size?: "default" | "lg";
}

const CTAButton = ({ children, className = "", size = "default" }: CTAButtonProps) => {
  return (
    <motion.button
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      animate={{ y: [0, -6, 0] }}
      transition={{ y: { duration: 2.5, repeat: Infinity, ease: "easeInOut" }, scale: { duration: 0.2 } }}
      className={`
        relative font-bold uppercase tracking-[0.2em]
        bg-primary text-primary-foreground
        border border-primary/50
        transition-all duration-300
        shadow-[0_0_15px_hsl(0_100%_50%/0.3)]
        hover:shadow-[0_0_25px_hsl(0_100%_50%/0.5)]
        ${size === "lg" ? "px-10 py-5 text-lg" : "px-8 py-4 text-sm"}
        ${className}
      `}
    >
      <span className="relative z-10">{children}</span>
    </motion.button>
  );
};

export default CTAButton;
