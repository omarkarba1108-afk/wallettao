"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import InstallButtons from "./components/InstallButtons";
import Logo from "./components/Logo";
import ThemeToggle from "./components/ThemeToggle";
import MobileNav from "./components/MobileNav";

const fadeUp = { 
  initial: { opacity: 0, y: 10 }, 
  whileInView: { opacity: 1, y: 0 }, 
  transition: { duration: 0.35 }, 
  viewport: { once: true, margin: "-10% 0px" } 
};

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-50">
      {/* Header */}
      <nav className="px-6 py-4 bg-white/80 dark:bg-slate-950/80 backdrop-blur-md border-b border-slate-200/50 dark:border-white/10 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Logo size="md" showText={true} />
          <div className="hidden md:flex items-center space-x-8">
            <a href="/" className="text-slate-600 dark:text-slate-300 hover:text-[#00C2A8] transition-colors">Home</a>
            <a href="/download" className="text-slate-600 dark:text-slate-300 hover:text-[#00C2A8] transition-colors">Download</a>
            <a href="/developers" className="text-slate-600 dark:text-slate-300 hover:text-[#00C2A8] transition-colors">Developers</a>
            <a href="/security" className="text-slate-600 dark:text-slate-300 hover:text-[#00C2A8] transition-colors">Security</a>
            <a href="/blog" className="text-slate-600 dark:text-slate-300 hover:text-[#00C2A8] transition-colors">Blog</a>
            <a href="/support" className="text-slate-600 dark:text-slate-300 hover:text-[#00C2A8] transition-colors">Support</a>
            <ThemeToggle />
            <a href="/download" className="bg-[#00C2A8] text-white px-6 py-2 rounded-xl font-medium hover:shadow-lg transition-all">Download</a>
          </div>
          <div className="md:hidden flex items-center space-x-4">
            <ThemeToggle />
            <MobileNav />
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="px-6 py-24">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <motion.div {...fadeUp}>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
              Own your keys. <span className="text-[#00C2A8]">Flow like Tao.</span>
            </h1>
            <p className="mt-4 text-lg text-slate-600 dark:text-slate-300">
              Self-custodial wallet for EVM chains—private, simple, and fast.
            </p>
            <div className="mt-8">
              <InstallButtons size="lg" />
            </div>
            <p className="mt-3 text-sm text-slate-500">
              Chrome, Firefox, and Edge supported. Mobile coming soon.
            </p>
          </motion.div>

          <motion.div {...fadeUp} className="relative">
            <div className="relative mx-auto w-full max-w-md aspect-[4/3] rounded-2xl border border-slate-200/50 dark:border-white/10 bg-white/5 shadow-lg overflow-hidden">
              <Image 
                src="/mockups/extension.png" 
                alt="WalletTao extension" 
                fill 
                className="object-cover" 
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* FEATURES */}
      <motion.section {...fadeUp} className="px-6 py-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-semibold">Why WalletTao</h2>
          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { t: "Self-custody, always", d: "Your keys never leave your device." },
              { t: "See what you sign", d: "Human-readable signing prevents surprises." },
              { t: "Built-in swaps", d: "Clear fees. Best route. No extra tabs." },
              { t: "Hardware wallets", d: "Use Ledger/Trezor for extra safety." },
            ].map((f) => (
              <div 
                key={f.t} 
                className="rounded-2xl border border-slate-200/50 dark:border-white/10 p-5 bg-white/50 dark:bg-white/5 shadow-sm hover:shadow-md transition-shadow"
              >
                <h3 className="font-medium">{f.t}</h3>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{f.d}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* SECURITY */}
      <motion.section {...fadeUp} className="px-6 py-16">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-2xl font-semibold">Security you can trust</h2>
            <ul className="mt-6 space-y-3 text-slate-600 dark:text-slate-300">
              <li>• Locally encrypted keys. We never see your seed phrase.</li>
              <li>• No tracking by default. Optional, privacy-safe telemetry.</li>
              <li>• Human-readable transactions. See exactly what you approve.</li>
              <li>• Responsible disclosure: <a className="underline hover:text-[#00C2A8] transition-colors" href="mailto:security@wallettao.app">security@wallettao.app</a></li>
            </ul>
            <div className="mt-6 flex items-center gap-2 text-sm text-slate-500">
              <span className="font-medium">0 custody</span>
              <span>•</span>
              <span className="font-medium">Human-readable signing</span>
              <span>•</span>
              <span className="font-medium">Open components</span>
            </div>
          </div>
          <div className="rounded-2xl border border-slate-200/50 dark:border-white/10 p-6 bg-white/50 dark:bg-white/5">
            <p className="text-sm font-medium">Audits</p>
            <div className="mt-3 grid sm:grid-cols-2 gap-4">
              <div className="rounded-xl border border-slate-200/50 dark:border-white/10 p-4">
                <p className="text-xs text-slate-500">Firm</p>
                <p className="font-medium">TBD</p>
              </div>
              <div className="rounded-xl border border-slate-200/50 dark:border-white/10 p-4">
                <p className="text-xs text-slate-500">Status</p>
                <p className="font-medium">Planned</p>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* HOW IT WORKS / SCREENSHOTS */}
      <motion.section {...fadeUp} className="px-6 py-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-semibold">Get started in 3 steps</h2>
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            {["Install the extension", "Create or import a wallet", "Connect to your favorite dApps"].map((t, i) => (
              <div 
                key={t} 
                className="rounded-2xl border border-slate-200/50 dark:border-white/10 p-5 bg-white/50 dark:bg-white/5"
              >
                <div className="text-sm text-slate-500">Step {i + 1}</div>
                <div className="mt-2 font-medium">{t}</div>
                <div className="mt-3 h-32 rounded-xl bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-700" />
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* SUPPORTED CHAINS */}
      <motion.section {...fadeUp} className="px-6 py-12">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-sm text-slate-500 mb-4">Supported Networks</p>
          <div className="flex flex-wrap justify-center gap-6 text-slate-600 dark:text-slate-400">
            <div className="px-4 py-2 rounded-lg border border-slate-200/50 dark:border-white/10">Ethereum</div>
            <div className="px-4 py-2 rounded-lg border border-slate-200/50 dark:border-white/10">Polygon</div>
            <div className="px-4 py-2 rounded-lg border border-slate-200/50 dark:border-white/10">Arbitrum</div>
            <div className="px-4 py-2 rounded-lg border border-slate-200/50 dark:border-white/10">BSC</div>
            <div className="px-4 py-2 rounded-lg border border-slate-200/50 dark:border-white/10">Optimism</div>
          </div>
        </div>
      </motion.section>

      {/* CTA */}
      <motion.section {...fadeUp} className="px-6 py-20">
        <div className="max-w-7xl mx-auto rounded-2xl border border-slate-200/50 dark:border-white/10 p-10 bg-white/60 dark:bg-white/[0.04] text-center">
          <h3 className="text-2xl font-semibold">Start in under a minute</h3>
          <p className="mt-2 text-slate-600 dark:text-slate-300">Install WalletTao and take control of your keys.</p>
          <div className="mt-6 flex justify-center">
            <InstallButtons />
          </div>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="px-6 py-12 bg-slate-900 dark:bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="text-white font-semibold text-lg mb-4">WalletTao</div>
              <p className="text-slate-400 text-sm">
                Self-custodial wallet for EVM chains. Own your keys, flow like Tao.
              </p>
            </div>
            
            <div>
              <h3 className="text-white font-semibold mb-4">Product</h3>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li><a href="/download" className="hover:text-white transition-colors">Download</a></li>
                <li><a href="/security" className="hover:text-white transition-colors">Security</a></li>
                <li><a href="/developers" className="hover:text-white transition-colors">Developers</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-white font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li><a href="/support" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="/blog" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="mailto:hello@wallettao.app" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-white font-semibold mb-4">Legal</h3>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
                <li><a href="mailto:security@wallettao.app" className="hover:text-white transition-colors">Security</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-slate-800 pt-8 text-center text-slate-400 text-sm">
            <p>&copy; 2025 WalletTao. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
