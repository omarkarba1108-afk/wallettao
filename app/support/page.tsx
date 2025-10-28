"use client";

import Logo from "../components/Logo";
import ThemeToggle from "../components/ThemeToggle";
import MobileNav from "../components/MobileNav";
import { HelpCircle, Mail, MessageCircle, Book } from "lucide-react";

export default function Support() {
  return (
    <>
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
            <a href="/support" className="text-[#00C2A8] font-medium">Support</a>
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
          <h1 className="text-3xl font-semibold">Support</h1>
          <p className="mt-2 text-slate-600 dark:text-slate-300">
            Get help with WalletTao. We're here to assist you.
          </p>

          {/* Contact Options */}
          <div className="mt-8 grid sm:grid-cols-2 gap-6">
            <a 
              href="mailto:hello@wallettao.app"
              className="rounded-2xl border border-slate-200/50 dark:border-white/10 p-6 bg-white/50 dark:bg-white/5 hover:shadow-lg transition-all block"
            >
              <Mail className="h-8 w-8 text-[#00C2A8] mb-3" />
              <h2 className="text-lg font-semibold mb-2">Email support</h2>
              <p className="text-sm text-slate-600 dark:text-slate-300">
                Get help via email. We typically respond within 24 hours.
              </p>
              <p className="mt-3 text-sm text-[#00C2A8]">hello@wallettao.app</p>
            </a>

            <div className="rounded-2xl border border-slate-200/50 dark:border-white/10 p-6 bg-white/50 dark:bg-white/5">
              <MessageCircle className="h-8 w-8 text-[#00C2A8] mb-3" />
              <h2 className="text-lg font-semibold mb-2">Community</h2>
              <p className="text-sm text-slate-600 dark:text-slate-300">
                Join our Discord community for quick answers and discussions.
              </p>
              <p className="mt-3 text-sm text-slate-500">Coming soon</p>
            </div>

            <a 
              href="/developers"
              className="rounded-2xl border border-slate-200/50 dark:border-white/10 p-6 bg-white/50 dark:bg-white/5 hover:shadow-lg transition-all block"
            >
              <Book className="h-8 w-8 text-[#00C2A8] mb-3" />
              <h2 className="text-lg font-semibold mb-2">Documentation</h2>
              <p className="text-sm text-slate-600 dark:text-slate-300">
                Check our developer docs for technical integration guides.
              </p>
            </a>

            <div className="rounded-2xl border border-slate-200/50 dark:border-white/10 p-6 bg-white/50 dark:bg-white/5">
              <HelpCircle className="h-8 w-8 text-[#00C2A8] mb-3" />
              <h2 className="text-lg font-semibold mb-2">FAQ</h2>
              <p className="text-sm text-slate-600 dark:text-slate-300">
                Check our frequently asked questions below.
              </p>
            </div>
          </div>

          {/* FAQ */}
          <div className="mt-12">
            <h2 className="text-2xl font-semibold mb-6">Frequently asked questions</h2>
            <div className="space-y-4">
              <div className="rounded-2xl border border-slate-200/50 dark:border-white/10 p-5 bg-white/50 dark:bg-white/5">
                <h3 className="font-medium mb-2">How do I keep my seed phrase safe?</h3>
                <p className="text-sm text-slate-600 dark:text-slate-300">
                  Write your seed phrase on paper and store it in a secure location. Never share it with anyone or store it digitally. WalletTao will never ask for your seed phrase.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200/50 dark:border-white/10 p-5 bg-white/50 dark:bg-white/5">
                <h3 className="font-medium mb-2">How do I restore my wallet?</h3>
                <p className="text-sm text-slate-600 dark:text-slate-300">
                  Click "Import wallet" when you first open WalletTao, then enter your 12 or 24-word seed phrase. Your wallet and all assets will be restored.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200/50 dark:border-white/10 p-5 bg-white/50 dark:bg-white/5">
                <h3 className="font-medium mb-2">Can I see what I'm signing before approving?</h3>
                <p className="text-sm text-slate-600 dark:text-slate-300">
                  Yes! WalletTao shows human-readable transaction details before you approve anything. You'll always see exactly what you're signing.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200/50 dark:border-white/10 p-5 bg-white/50 dark:bg-white/5">
                <h3 className="font-medium mb-2">What networks are supported?</h3>
                <p className="text-sm text-slate-600 dark:text-slate-300">
                  WalletTao supports Ethereum, Polygon, Arbitrum, Optimism, BSC, and other EVM-compatible chains. You can add custom networks too.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200/50 dark:border-white/10 p-5 bg-white/50 dark:bg-white/5">
                <h3 className="font-medium mb-2">Does WalletTao collect my data?</h3>
                <p className="text-sm text-slate-600 dark:text-slate-300">
                  No. We don't track you by default. Optional anonymous telemetry helps us improve the product but never includes private information.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
