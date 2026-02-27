interface DiagonalDividerProps {
  direction?: "left" | "right";
  color?: string;
}

const DiagonalDivider = ({ direction = "left", color }: DiagonalDividerProps) => {
  const path = direction === "left"
    ? "M0,0 L100,40 L100,0 Z"
    : "M0,0 L0,40 L100,0 Z";

  return (
    <div className="relative w-full h-20 -my-1 overflow-hidden" style={{ zIndex: 2 }}>
      <svg
        viewBox="0 0 100 40"
        preserveAspectRatio="none"
        className="absolute inset-0 w-full h-full"
      >
        <polygon points={direction === "left" ? "0,40 100,0 100,40" : "0,0 100,40 0,40"} fill={color || "hsl(0, 0%, 7%)"} />
      </svg>
      {/* Red glow line along the diagonal */}
      <div
        className="absolute w-full h-px top-1/2"
        style={{
          background: "linear-gradient(90deg, transparent, hsl(0 100% 50% / 0.6), transparent)",
          transform: direction === "left" ? "rotate(-3deg)" : "rotate(3deg)",
        }}
      />
    </div>
  );
};

export default DiagonalDivider;
