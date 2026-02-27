import { motion } from "framer-motion";
import { ReactNode } from "react";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "left" | "right" | "up";
}

const AnimatedSection = ({ children, className = "", delay = 0, direction = "up" }: AnimatedSectionProps) => {
  const variants = {
    hidden: {
      opacity: 0,
      x: direction === "left" ? -80 : direction === "right" ? 80 : 0,
      y: direction === "up" ? 60 : 0,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedSection;
