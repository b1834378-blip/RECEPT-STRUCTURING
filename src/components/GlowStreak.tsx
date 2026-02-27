const GlowStreak = ({ delay = 0, top = "50%" }: { delay?: number; top?: string }) => {
  return (
    <div
      className="absolute left-0 w-full h-px pointer-events-none overflow-hidden"
      style={{ top, zIndex: 1 }}
    >
      <div
        className="h-px w-48"
        style={{
          background: "linear-gradient(90deg, transparent, hsl(0 100% 50% / 0.4), hsl(0 100% 60% / 0.2), transparent)",
          animation: `streak 5s ${delay}s ease-in-out infinite`,
          boxShadow: "0 0 12px hsl(0 100% 50% / 0.3), 0 0 30px hsl(0 100% 50% / 0.1)",
        }}
      />
    </div>
  );
};

export default GlowStreak;
