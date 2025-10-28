"use client";

import Logo from "../components/Logo";
import ThemeToggle from "../components/ThemeToggle";
import MobileNav from "../components/MobileNav";

export default function Developers() {
  return (
    <>
      {/* Header */}
      <nav className="px-6 py-4 bg-white/80 dark:bg-slate-950/80 backdrop-blur-md border-b border-slate-200/50 dark:border-white/10 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Logo size="md" showText={true} />
          <div className="hidden md:flex items-center space-x-8">
            <a href="/" className="text-slate-600 dark:text-slate-300 hover:text-[#00C2A8] transition-colors">Home</a>
            <a href="/download" className="text-slate-600 dark:text-slate-300 hover:text-[#00C2A8] transition-colors">Download</a>
            <a href="/developers" className="text-[#00C2A8] font-medium">Developers</a>
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
          <h1 className="text-3xl font-semibold">Developer Documentation</h1>
          <p className="mt-2 text-slate-600 dark:text-slate-300">
            Integrate WalletTao into your dApp using the EIP-1193 standard.
          </p>

          <div className="mt-8 space-y-8">
            {/* Connect */}
            <div className="rounded-2xl border border-slate-200/50 dark:border-white/10 p-6 bg-white/50 dark:bg-white/5">
              <h2 className="text-xl font-semibold mb-3">Connect to WalletTao</h2>
              <pre className="bg-slate-900 dark:bg-black text-slate-50 p-4 rounded-xl overflow-x-auto text-sm">
{`// Request account access
const accounts = await window.ethereum.request({ 
  method: 'eth_requestAccounts' 
});

console.log('Connected:', accounts[0]);`}
              </pre>
            </div>

            {/* Sign */}
            <div className="rounded-2xl border border-slate-200/50 dark:border-white/10 p-6 bg-white/50 dark:bg-white/5">
              <h2 className="text-xl font-semibold mb-3">Sign a message</h2>
              <pre className="bg-slate-900 dark:bg-black text-slate-50 p-4 rounded-xl overflow-x-auto text-sm">
{`// Personal sign
const message = 'Hello from WalletTao!';
const signature = await window.ethereum.request({
  method: 'personal_sign',
  params: [message, accounts[0]]
});

console.log('Signature:', signature);`}
              </pre>
            </div>

            {/* Switch Network */}
            <div className="rounded-2xl border border-slate-200/50 dark:border-white/10 p-6 bg-white/50 dark:bg-white/5">
              <h2 className="text-xl font-semibold mb-3">Switch network</h2>
              <pre className="bg-slate-900 dark:bg-black text-slate-50 p-4 rounded-xl overflow-x-auto text-sm">
{`// Switch to Polygon
await window.ethereum.request({
  method: 'wallet_switchEthereumChain',
  params: [{ chainId: '0x89' }] // 137 in hex
});`}
              </pre>
            </div>

            {/* Send Transaction */}
            <div className="rounded-2xl border border-slate-200/50 dark:border-white/10 p-6 bg-white/50 dark:bg-white/5">
              <h2 className="text-xl font-semibold mb-3">Send a transaction</h2>
              <pre className="bg-slate-900 dark:bg-black text-slate-50 p-4 rounded-xl overflow-x-auto text-sm">
{`// Send ETH
const txHash = await window.ethereum.request({
  method: 'eth_sendTransaction',
  params: [{
    from: accounts[0],
    to: '0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb',
    value: '0x29a2241af62c0000', // 0.1 ETH
  }]
});

console.log('Transaction hash:', txHash);`}
              </pre>
            </div>
          </div>

          <div className="mt-10 rounded-2xl border border-slate-200/50 dark:border-white/10 p-6 bg-white/50 dark:bg-white/5">
            <h2 className="text-xl font-semibold mb-3">Resources</h2>
            <ul className="space-y-2 text-slate-600 dark:text-slate-300">
              <li>• <a href="https://eips.ethereum.org/EIPS/eip-1193" target="_blank" rel="noopener noreferrer" className="underline hover:text-[#00C2A8]">EIP-1193 Specification</a></li>
              <li>• <a href="https://docs.metamask.io/guide/" target="_blank" rel="noopener noreferrer" className="underline hover:text-[#00C2A8]">Ethereum Provider API</a></li>
              <li>• <a href="mailto:dev@wallettao.app" className="underline hover:text-[#00C2A8]">Developer Support</a></li>
            </ul>
          </div>
        </div>
      </main>
    </>
  );
}
