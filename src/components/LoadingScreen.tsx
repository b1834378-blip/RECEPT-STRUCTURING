import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import receptLogo from "@/assets/recept-logo.png";

const KATAKANA = "アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン";
const LATIN = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const NUMS = "0123456789";
const CHARS = KATAKANA + LATIN + NUMS;

const LoadingScreen = ({ onComplete }: { onComplete: () => void }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [phase, setPhase] = useState<"rain" | "logo" | "exit">("rain");

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const fontSize = 14;
    const columns = Math.floor(canvas.width / fontSize);
    const drops: number[] = Array(columns).fill(0).map(() => Math.random() * -50);

    const draw = () => {
      ctx.fillStyle = "rgba(10, 10, 10, 0.05)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < drops.length; i++) {
        const char = CHARS[Math.floor(Math.random() * CHARS.length)];
        const x = i * fontSize;
        const y = drops[i] * fontSize;

        ctx.fillStyle = `hsl(0, 100%, ${55 + Math.random() * 25}%)`;
        ctx.font = `${fontSize}px 'JetBrains Mono', monospace`;
        ctx.fillText(char, x, y);

        if (drops[i] > 1) {
          ctx.fillStyle = `hsl(0, 80%, ${18 + Math.random() * 12}%)`;
          ctx.fillText(CHARS[Math.floor(Math.random() * CHARS.length)], x, y - fontSize);
        }

        if (y > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i] += 0.8 + Math.random() * 0.6;
      }
    };

    const interval = setInterval(draw, 25);

    const t1 = setTimeout(() => setPhase("logo"), 800);
    const t2 = setTimeout(() => setPhase("exit"), 2800);
    const t3 = setTimeout(onComplete, 3600);

    return () => {
      clearInterval(interval);
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {phase !== "exit" ? null : null}
      <motion.div
        className="fixed inset-0 z-[100] flex items-center justify-center bg-background"
        initial={{ opacity: 1 }}
        animate={{ opacity: phase === "exit" ? 0 : 1 }}
        transition={{ duration: 0.8 }}
      >
        <canvas ref={canvasRef} className="absolute inset-0" />

        <motion.div
          className="relative z-10 flex flex-col items-center"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{
            opacity: phase === "logo" || phase === "exit" ? 1 : 0,
            scale: phase === "logo" || phase === "exit" ? 1 : 0.5,
          }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <img
            src={receptLogo}
            alt="RECEPT"
            className="w-32 h-32 md:w-40 md:h-40 object-contain drop-shadow-[0_0_30px_hsl(0,100%,50%)]"
          />
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: phase === "logo" || phase === "exit" ? 1 : 0, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="mt-6 font-mono text-primary text-sm tracking-[0.4em] uppercase"
          >
            RECEPT
          </motion.p>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default LoadingScreen;
