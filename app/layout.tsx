import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { LoaderProvider } from "./components/LoaderProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "WalletTao - Secure Digital Wallet",
  description: "The most secure and user-friendly digital wallet for managing your cryptocurrencies and digital assets. Bank-grade security, lightning-fast transactions, and global access.",
  keywords: "digital wallet, cryptocurrency, bitcoin, ethereum, crypto wallet, secure wallet, blockchain",
  authors: [{ name: "WalletTao Team" }],
  openGraph: {
    title: "WalletTao - Secure Digital Wallet",
    description: "The most secure and user-friendly digital wallet for managing your cryptocurrencies and digital assets.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "WalletTao - Secure Digital Wallet",
    description: "The most secure and user-friendly digital wallet for managing your cryptocurrencies and digital assets.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <LoaderProvider>
          {children}
        </LoaderProvider>
      </body>
    </html>
  );
}
