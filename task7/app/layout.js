import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Ghulam Mustafa Khizar | Capstone Portfolio",
  description: "High-fidelity, premium AI-assisted frontend portfolio web application.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-background text-foreground font-sans selection:bg-primary-accent selection:text-background">
        {/* Shared Header Navigation */}
        <header className="border-b border-white/5 py-6">
          <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
            <Link href="/" className="flex items-center gap-3 group">
              <span className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary-accent to-purple-600 flex items-center justify-center font-bold text-white shadow-lg shadow-primary-accent/25 transition-transform group-hover:scale-105">
                GM
              </span>
              <div className="flex flex-col">
                <span className="font-bold text-sm leading-tight text-white group-hover:text-primary-accent transition-colors">
                  Ghulam Mustafa Khizar
                </span>
                <span className="text-[11px] text-text-secondary font-medium">
                  Frontend AI Engineer
                </span>
              </div>
            </Link>

            <nav className="flex items-center gap-6 text-sm font-medium text-text-secondary">
              <Link href="/" className="hover:text-white transition-colors">
                Strategy
              </Link>
              <Link href="/work" className="hover:text-white transition-colors">
                Case Studies
              </Link>
              <Link href="/contact" className="hover:text-white transition-colors">
                Contact
              </Link>
              <Link href="/health" className="hover:text-white transition-colors text-primary-accent font-semibold">
                Health Check
              </Link>
            </nav>
          </div>
        </header>

        {/* Dynamic page content */}
        <main className="flex-grow max-w-6xl w-full mx-auto px-6 py-12 flex flex-col">
          {children}
        </main>

        {/* Shared Footer */}
        <footer className="border-t border-white/5 py-8 mt-auto text-xs text-text-muted">
          <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
            <span>FlyRank Frontend AI Engineering Capstone | Ghulam Mustafa Khizar</span>
            <div className="flex gap-4">
              <a href="https://github.com/KhizarDoingProgramming" target="_blank" rel="noreferrer" className="hover:text-text-secondary transition-colors">
                GitHub
              </a>
              <a href="https://linkedin.com/in/ghulam-mustafa-khizar" target="_blank" rel="noreferrer" className="hover:text-text-secondary transition-colors">
                LinkedIn
              </a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
