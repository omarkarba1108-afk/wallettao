"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect } from "react";

export default function TaoLoader({ show, onFinished }: { show: boolean; onFinished?: () => void }) {
  const reduce = useReducedMotion();

  useEffect(() => {
    if (!show) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = prev; };
  }, [show]);

  return (
    <AnimatePresence onExitComplete={onFinished}>
      {show && (
        <motion.div
          role="status"
          aria-busy="true"
          aria-live="polite"
          className="fixed inset-0 z-[9999] grid place-items-center bg-neutral-50 dark:bg-neutral-950"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
        >
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.10),transparent_60%)] dark:bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.10),transparent_60%)]" />
          </div>

          <YinYang reduceMotion={reduce} />
          <span className="sr-only">Loading WalletTao…</span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function YinYang({ reduceMotion }: { reduceMotion: boolean }) {
  const spin = reduceMotion ? {} : { rotate: [0, 360], transition: { duration: 2.4, ease: "easeInOut", repeat: Infinity } };

  return (
    <motion.div
      initial={{ scale: 0.92, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 1.2, opacity: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="relative"
      style={{ width: 220, height: 220 }}
    >
      <motion.svg viewBox="0 0 100 100" className="w-full h-full" style={{ filter: "drop-shadow(0 8px 24px rgba(0,0,0,0.18))" }} {...spin}>
        <defs>
          <radialGradient id="gW" cx="50%" cy="50%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="100%" stopColor="#ececec" />
          </radialGradient>
          <radialGradient id="gB" cx="50%" cy="50%">
            <stop offset="0%" stopColor="#1b1b1d" />
            <stop offset="100%" stopColor="#0b0b0c" />
          </radialGradient>
          <filter id="bloomW" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="1.8" result="b" />
            <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
          <filter id="bloomB" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="1.6" result="b" />
            <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
        </defs>

        <circle cx="50" cy="50" r="49" fill="none" stroke="rgba(0,0,0,0.06)" strokeWidth="2" />

        <path
          d="M50,1 A49,49 0 0 0 50,99
             C65,99 70,86 50,86
             C30,86 35,73 50,73
             C65,73 70,60 50,60
             C30,60 35,47 50,47
             C65,47 70,34 50,34
             C30,34 35,21 50,21
             C65,21 70,8  50,8
             A49,49 0 0 0 50,1 Z"
          fill="url(#gW)"
        />
        <path
          d="M50,99 A49,49 0 0 0 50,1
             C35,1 30,14 50,14
             C70,14 65,27 50,27
             C35,27 30,40 50,40
             C70,40 65,53 50,53
             C35,53 30,66 50,66
             C70,66 65,79 50,79
             C35,79 30,92 50,92
             A49,49 0 0 0 50,99 Z"
          fill="url(#gB)"
        />

        <circle cx="50" cy="28" r="7.5" fill="url(#gB)" filter="url(#bloomB)" />
        <circle cx="50" cy="72" r="7.5" fill="url(#gW)" filter="url(#bloomW)" />
      </motion.svg>
    </motion.div>
  );
}
