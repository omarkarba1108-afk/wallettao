"use client";

import { useEffect, useState } from "react";
import { Check } from "lucide-react";
import Logo from "../components/Logo";
import ThemeToggle from "../components/ThemeToggle";
import MobileNav from "../components/MobileNav";

const CARDS = [
  { key: "chrome",  name: "Chrome",  href: "#" },
  { key: "firefox", name: "Firefox", href: "#" },
  { key: "edge",    name: "Edge",    href: "#" },
] as const;

type Browser = typeof CARDS[number]["key"] | "other";

export default function Download() {
  const [browser, setBrowser] = useState<Browser>("other");
  
  useEffect(() => {
    const ua = navigator.userAgent.toLowerCase();
    if (ua.includes("edg/")) setBrowser("edge");
    else if (ua.includes("firefox")) setBrowser("firefox");
    else if (ua.includes("chrome")) setBrowser("chrome");
  }, []);

  return (
    <>
      {/* Header */}
      <nav className="px-6 py-4 bg-white/80 dark:bg-slate-950/80 backdrop-blur-md border-b border-slate-200/50 dark:border-white/10 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Logo size="md" showText={true} />
          <div className="hidden md:flex items-center space-x-8">
            <a href="/" className="text-slate-600 dark:text-slate-300 hover:text-[#00C2A8] transition-colors">Home</a>
            <a href="/download" className="text-[#00C2A8] font-medium">Download</a>
            <a href="/developers" className="text-slate-600 dark:text-slate-300 hover:text-[#00C2A8] transition-colors">Developers</a>
            <a href="/security" className="text-slate-600 dark:text-slate-300 hover:text-[#00C2A8] transition-colors">Security</a>
            <a href="/blog" className="text-slate-600 dark:text-slate-300 hover:text-[#00C2A8] transition-colors">Blog</a>
            <a href="/support" className="text-slate-600 dark:text-slate-300 hover:text-[#00C2A8] transition-colors">Support</a>
            <ThemeToggle />
          </div>
          <div className="md:hidden flex items-center space-x-4">
            <ThemeToggle />
            <MobileNav />
          </div>
        </div>
      </nav>

      <main className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-50 px-6 py-16">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-3xl font-semibold">Download WalletTao</h1>
          <p className="mt-2 text-slate-600 dark:text-slate-300">
            Choose your browser to install the extension.
          </p>

          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {CARDS.map(c => (
              <a 
                key={c.key} 
                href={c.href}
                className={`rounded-2xl border p-6 bg-white/60 dark:bg-white/[0.04] border-slate-200/50 dark:border-white/10 block hover:shadow-lg transition-all ${browser===c.key ? "ring-2 ring-[#00C2A8]" : ""}`}
              >
                <div className="flex items-center justify-between">
                  <div className="font-medium">{c.name} Extension</div>
                  {browser===c.key && <Check className="h-5 w-5 text-[#00C2A8]" />}
                </div>
                <div className="mt-2 text-sm text-slate-500">One-click install. Auto updates.</div>
              </a>
            ))}
          </div>

          <div className="mt-10">
            <h2 className="text-xl font-semibold">Manual install</h2>
            <ol className="mt-3 list-decimal pl-5 text-sm text-slate-600 dark:text-slate-300 space-y-1">
              <li>Click your browser card above.</li>
              <li>Approve the extension installation.</li>
              <li>Pin WalletTao and open it from the toolbar.</li>
            </ol>
          </div>

          <div className="mt-10 rounded-2xl border border-slate-200/50 dark:border-white/10 p-6 bg-white/50 dark:bg-white/5">
            <h2 className="text-xl font-semibold mb-3">System requirements</h2>
            <ul className="text-sm text-slate-600 dark:text-slate-300 space-y-2">
              <li>• Chrome 88+ / Firefox 85+ / Edge 88+</li>
              <li>• macOS 10.13+, Windows 10+, or Linux</li>
              <li>• 50 MB free disk space</li>
            </ul>
          </div>
        </div>
      </main>
    </>
  );
}
