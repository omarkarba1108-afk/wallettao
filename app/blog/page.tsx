"use client";

import Logo from "../components/Logo";
import ThemeToggle from "../components/ThemeToggle";
import MobileNav from "../components/MobileNav";

export default function Blog() {
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
            <a href="/blog" className="text-[#00C2A8] font-medium">Blog</a>
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
          <h1 className="text-3xl font-semibold">Blog</h1>
          <p className="mt-2 text-slate-600 dark:text-slate-300">
            News, updates, and insights from the WalletTao team.
          </p>

          <div className="mt-8 grid sm:grid-cols-2 gap-6">
            {/* Placeholder posts */}
            <div className="rounded-2xl border border-slate-200/50 dark:border-white/10 p-6 bg-white/50 dark:bg-white/5">
              <div className="text-xs text-slate-500 mb-2">Coming soon</div>
              <h2 className="text-lg font-semibold mb-2">Introducing WalletTao</h2>
              <p className="text-sm text-slate-600 dark:text-slate-300">
                Learn about our mission to bring self-custody to everyone.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200/50 dark:border-white/10 p-6 bg-white/50 dark:bg-white/5">
              <div className="text-xs text-slate-500 mb-2">Coming soon</div>
              <h2 className="text-lg font-semibold mb-2">Security best practices</h2>
              <p className="text-sm text-slate-600 dark:text-slate-300">
                Tips for keeping your crypto safe and secure.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200/50 dark:border-white/10 p-6 bg-white/50 dark:bg-white/5">
              <div className="text-xs text-slate-500 mb-2">Coming soon</div>
              <h2 className="text-lg font-semibold mb-2">Understanding gas fees</h2>
              <p className="text-sm text-slate-600 dark:text-slate-300">
                A beginner's guide to Ethereum gas and transaction costs.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200/50 dark:border-white/10 p-6 bg-white/50 dark:bg-white/5">
              <div className="text-xs text-slate-500 mb-2">Coming soon</div>
              <h2 className="text-lg font-semibold mb-2">Roadmap 2025</h2>
              <p className="text-sm text-slate-600 dark:text-slate-300">
                What's next for WalletTao in the coming year.
              </p>
            </div>
          </div>

          <div className="mt-10 text-center text-slate-500">
            <p>More articles coming soon. Stay tuned!</p>
          </div>
        </div>
      </main>
    </>
  );
}
