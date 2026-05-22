import { motion } from "motion/react";
import { useEffect, useState } from "react";

interface LoaderProps {
  onComplete: () => void;
}

export default function Loader({ onComplete }: LoaderProps) {
  const [statusText, setStatusText] = useState("INIT_SIGNAL...");

  useEffect(() => {
    // Update statuses for a subtle cybernetic feeling before completing
    const timers = [
      setTimeout(() => setStatusText("SYNCING_CORES..."), 400),
      setTimeout(() => setStatusText("ESTABLISHING_CONSCIOUSNESS..."), 900),
      setTimeout(() => setStatusText("CORE_ONLINE"), 1400),
      setTimeout(() => onComplete(), 1900),
    ];

    return () => timers.forEach(clearTimeout);
  }, [onComplete]);

  // Framer motion variants
  const containerVariants: any = {
    exit: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.8,
        ease: [0.76, 0, 0.24, 1],
      },
    },
  };

  const textVariants: any = {
    hidden: { opacity: 0, scale: 0.85 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1.4,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  const subtitleVariants: any = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 0.4,
      y: 0,
      transition: {
        delay: 0.4,
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const lineVariants: any = {
    hidden: { width: 0 },
    visible: {
      width: "80px",
      transition: {
        delay: 0.2,
        duration: 1.0,
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="initial"
      exit="exit"
      className="fixed inset-0 z-[9999] bg-[#0A0A0A] flex flex-col items-center justify-center select-none"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.015)_0%,transparent_100%)] pointer-events-none" />
      
      {/* Subtle scan line grid background */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[size:100%_4px,6px_100%]" />

      <div className="relative flex flex-col items-center text-center">
        {/* Core Name Typography */}
        <motion.h1
          variants={textVariants}
          initial="hidden"
          animate="visible"
          className="text-4xl sm:text-6xl md:text-8xl font-black uppercase avengers-logo tracking-tight leading-none drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]"
        >
          ROHIT SARKAR
        </motion.h1>

        {/* Minimalist Divider */}
        <motion.div
          variants={lineVariants}
          initial="hidden"
          animate="visible"
          className="h-[1px] bg-white/20 my-6"
        />

        {/* Cyberpunk Status Details */}
        <motion.div
          variants={subtitleVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center gap-2"
        >
          <span className="text-[10px] font-mono text-white/50 uppercase tracking-[0.2em] animate-pulse">
            {statusText}
          </span>
          <div className="w-1.5 h-1.5 rounded-full bg-white/40 animate-ping" />
        </motion.div>
      </div>

      {/* Decorative corner brackets or frames */}
      <div className="absolute top-12 left-12 w-16 h-16 pointer-events-none border-t border-l border-white/5" />
      <div className="absolute top-12 right-12 w-16 h-16 pointer-events-none border-t border-r border-white/5" />
      <div className="absolute bottom-12 left-12 w-16 h-16 pointer-events-none border-b border-l border-white/5" />
      <div className="absolute bottom-12 right-12 w-16 h-16 pointer-events-none border-b border-r border-white/5" />
    </motion.div>
  );
}
