"use client";

import Logo from "../components/Logo";
import ThemeToggle from "../components/ThemeToggle";
import MobileNav from "../components/MobileNav";
import { Shield, Lock, Eye, FileText } from "lucide-react";

export default function Security() {
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
            <a href="/security" className="text-[#00C2A8] font-medium">Security</a>
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
          <h1 className="text-3xl font-semibold">Security</h1>
          <p className="mt-2 text-slate-600 dark:text-slate-300">
            Your security is our top priority. Here's how we protect your assets.
          </p>

          {/* Principles */}
          <div className="mt-8 grid sm:grid-cols-2 gap-6">
            <div className="rounded-2xl border border-slate-200/50 dark:border-white/10 p-6 bg-white/50 dark:bg-white/5">
              <Shield className="h-8 w-8 text-[#00C2A8] mb-3" />
              <h2 className="text-lg font-semibold mb-2">Local encryption</h2>
              <p className="text-sm text-slate-600 dark:text-slate-300">
                Your keys are encrypted and stored locally. We never see your seed phrase or private keys.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200/50 dark:border-white/10 p-6 bg-white/50 dark:bg-white/5">
              <Eye className="h-8 w-8 text-[#00C2A8] mb-3" />
              <h2 className="text-lg font-semibold mb-2">No tracking</h2>
              <p className="text-sm text-slate-600 dark:text-slate-300">
                We don't track you by default. Optional telemetry is privacy-safe and anonymous.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200/50 dark:border-white/10 p-6 bg-white/50 dark:bg-white/5">
              <FileText className="h-8 w-8 text-[#00C2A8] mb-3" />
              <h2 className="text-lg font-semibold mb-2">Human-readable</h2>
              <p className="text-sm text-slate-600 dark:text-slate-300">
                See exactly what you're signing before approving any transaction.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200/50 dark:border-white/10 p-6 bg-white/50 dark:bg-white/5">
              <Lock className="h-8 w-8 text-[#00C2A8] mb-3" />
              <h2 className="text-lg font-semibold mb-2">Open source</h2>
              <p className="text-sm text-slate-600 dark:text-slate-300">
                Core components are open source. Verify our code yourself.
              </p>
            </div>
          </div>

          {/* Audits */}
          <div className="mt-10 rounded-2xl border border-slate-200/50 dark:border-white/10 p-6 bg-white/50 dark:bg-white/5">
            <h2 className="text-xl font-semibold mb-4">Security audits</h2>
            <p className="text-sm text-slate-600 dark:text-slate-300 mb-4">
              We're committed to regular third-party security audits. Our first audit is currently being scheduled.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="rounded-xl border border-slate-200/50 dark:border-white/10 p-4">
                <p className="text-xs text-slate-500">Audit firm</p>
                <p className="font-medium">TBD</p>
              </div>
              <div className="rounded-xl border border-slate-200/50 dark:border-white/10 p-4">
                <p className="text-xs text-slate-500">Status</p>
                <p className="font-medium">Planned for Q2 2025</p>
              </div>
            </div>
          </div>

          {/* Responsible Disclosure */}
          <div className="mt-10 rounded-2xl border border-slate-200/50 dark:border-white/10 p-6 bg-white/50 dark:bg-white/5">
            <h2 className="text-xl font-semibold mb-3">Responsible disclosure</h2>
            <p className="text-sm text-slate-600 dark:text-slate-300 mb-4">
              Found a security issue? We appreciate responsible disclosure. Please report security vulnerabilities to:
            </p>
            <a 
              href="mailto:security@wallettao.app" 
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#00C2A8] text-white font-medium hover:shadow-lg transition-all"
            >
              security@wallettao.app
            </a>
          </div>

          {/* FAQ */}
          <div className="mt-10">
            <h2 className="text-xl font-semibold mb-4">Security FAQ</h2>
            <div className="space-y-4">
              <div className="rounded-2xl border border-slate-200/50 dark:border-white/10 p-5 bg-white/50 dark:bg-white/5">
                <h3 className="font-medium mb-2">How are my keys stored?</h3>
                <p className="text-sm text-slate-600 dark:text-slate-300">
                  Your keys are encrypted using AES-256 and stored locally in your browser. Only you have access to them.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200/50 dark:border-white/10 p-5 bg-white/50 dark:bg-white/5">
                <h3 className="font-medium mb-2">Can WalletTao access my funds?</h3>
                <p className="text-sm text-slate-600 dark:text-slate-300">
                  No. We never see your seed phrase or private keys. You have complete custody of your assets.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200/50 dark:border-white/10 p-5 bg-white/50 dark:bg-white/5">
                <h3 className="font-medium mb-2">What data do you collect?</h3>
                <p className="text-sm text-slate-600 dark:text-slate-300">
                  By default, we collect nothing. Optional anonymous telemetry helps us improve the product but never includes private data.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
