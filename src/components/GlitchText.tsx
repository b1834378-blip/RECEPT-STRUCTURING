import { ReactNode } from "react";

interface GlitchTextProps {
  children: ReactNode;
  className?: string;
}

const GlitchText = ({ children, className = "" }: GlitchTextProps) => {
  return (
    <span className={`relative inline-block ${className}`}>
      <span className="relative z-10">{children}</span>
      <span
        aria-hidden
        className="absolute inset-0 text-primary"
        style={{ animation: "glitch-1 3s infinite linear alternate-reverse" }}
      >
        {children}
      </span>
      <span
        aria-hidden
        className="absolute inset-0 text-accent"
        style={{ animation: "glitch-2 2.5s infinite linear alternate-reverse" }}
      >
        {children}
      </span>
    </span>
  );
};

export default GlitchText;
