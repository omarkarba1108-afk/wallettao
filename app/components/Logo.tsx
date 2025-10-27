"use client";

import { useState, useEffect } from "react";
import { Wallet } from "lucide-react";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
  showText?: boolean;
}

export default function Logo({ className = "", size = "md", showText = true }: LogoProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const sizeClasses = {
    sm: "h-6 w-6",
    md: "h-8 w-8", 
    lg: "h-12 w-12",
    xl: "h-16 w-16"
  };

  const textSizeClasses = {
    sm: "text-lg",
    md: "text-xl",
    lg: "text-2xl", 
    xl: "text-3xl"
  };

  // Always render the same structure to prevent hydration mismatch
  return (
    <div className={`flex items-center space-x-2 ${className}`}>
      {/* Logo container - always show Wallet icon for now */}
      <div className={`${sizeClasses[size]} flex items-center justify-center text-blue-600 dark:text-blue-400`}>
        <Wallet className="w-full h-full" />
      </div>
      
      {showText && (
        <span className={`font-bold text-gray-900 dark:text-white ${textSizeClasses[size]}`}>
          WalletTao
        </span>
      )}
    </div>
  );
}