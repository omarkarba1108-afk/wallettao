"use client";

import { motion } from "framer-motion";
import { Download } from "lucide-react";

type Props = { size?: "sm" | "md" | "lg" };

const links = {
  chrome: "#",
  firefox: "#",
  edge: "#",
};

export default function InstallButtons({ size = "md" }: Props) {
  const cls = size === "lg" ? "px-5 py-3 text-base" : size === "sm" ? "px-3 py-2 text-sm" : "px-4 py-2.5";
  
  const Btn = ({ label, href }: { label: string; href: string }) => (
    <motion.a
      href={href}
      whileHover={{ y: -2 }}
      whileTap={{ y: 0 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className={`inline-flex items-center gap-2 rounded-xl bg-[#00C2A8] text-white font-medium ${cls} shadow-lg hover:shadow-xl transition-shadow`}
    >
      <Download className="h-4 w-4" />
      <span>{label}</span>
    </motion.a>
  );
  
  return (
    <div className="flex flex-col sm:flex-row gap-3">
      <Btn label="Install for Chrome" href={links.chrome} />
      <Btn label="Install for Firefox" href={links.firefox} />
      <Btn label="Install for Edge" href={links.edge} />
    </div>
  );
}
