"use client";

import { useEffect } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

type Props = {
  show: boolean;
  onFinished?: () => void;
};

export function LoadingScreen({ show, onFinished }: Props) {
  const reduce = useReducedMotion();

  // Prevent scrolling while visible
  useEffect(() => {
    if (show) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [show]);

  // Stretch keyframes for dots (mirrored)
  const stretchLeft = reduce
    ? { scaleX: 1, scaleY: 1 }
    : {
        scaleX: [1, 1.25, 1, 0.8, 1],
        scaleY: [1, 0.8, 1, 1.25, 1],
        transition: { duration: 1.8, ease: "easeInOut", repeat: Infinity },
      };

  const stretchRight = reduce
    ? { scaleX: 1, scaleY: 1 }
    : {
        scaleX: [1, 0.8, 1, 1.25, 1],
        scaleY: [1, 1.25, 1, 0.8, 1],
        transition: { duration: 1.8, ease: "easeInOut", repeat: Infinity },
      };

  return (
    <AnimatePresence onExitComplete={onFinished}>
      {show && (
        <motion.div
          role="status"
          aria-busy="true"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="fixed inset-0 z-[9999] grid grid-cols-2"
        >
          {/* Left half - black with white dot */}
          <div className="relative bg-[#0B0B0C] flex items-center justify-center">
            <motion.div
              className="w-16 h-16 bg-white rounded-full"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{
                opacity: 1,
                scale: 1,
                ...stretchLeft,
              }}
              style={{
                boxShadow: "0 0 0 rgba(255,255,255,0), 0 0 18px rgba(255,255,255,0.55)",
              }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            />
          </div>

          {/* Right half - white with black dot */}
          <div className="relative bg-white flex items-center justify-center">
            <motion.div
              className="w-16 h-16 bg-black rounded-full"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{
                opacity: 1,
                scale: 1,
                ...stretchRight,
              }}
              style={{
                boxShadow: "0 0 0 rgba(0,0,0,0), 0 0 18px rgba(0,0,0,0.45)",
              }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            />
          </div>

          {/* Screen reader label */}
          <span className="sr-only">Loading WalletTao…</span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}