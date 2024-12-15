"use client";

import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export const BackgroundGradient = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <>
      {/* Animated gradient background */}
      <div className="fixed inset-0 -z-50">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,#3a8bff,#b73fff)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,#00ff8c,transparent_50%)] animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_50%,#ff3d00,transparent_50%)] animate-pulse delay-75" />
      </div>

      {/* Grid overlay */}
      <div className="fixed inset-0 -z-40 bg-[linear-gradient(rgba(255,255,255,.07)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.07)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_80%)]" />

      {/* Noise texture */}
      <div className="fixed inset-0 -z-30 opacity-30 mix-blend-overlay">
        <div className="absolute inset-0 bg-[url('/noise.svg')] animate-noise" />
      </div>

      {/* Glass overlay */}
      <div className="fixed inset-0 -z-20 backdrop-blur-[100px]" />

      {/* Theme toggle */}
      <motion.button
        className="fixed top-4 right-4 z-50 p-2 rounded-full bg-white/10 backdrop-blur-lg"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      >
        {theme === "dark" ? "🌙" : "☀️"}
      </motion.button>
    </>
  );
};
