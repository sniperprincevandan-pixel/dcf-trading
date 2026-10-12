"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight, PhoneCall } from "lucide-react";
import Logo from "./Logo";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Our Products", href: "/products" },
  { name: "Supply & Logistics", href: "/supply-logistics" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [mobileMenuOpen]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-[#171B19]/95 backdrop-blur-md border-b border-[#B69A60]/15 py-3.5 shadow-lg shadow-black/20"
          : "bg-gradient-to-b from-black/70 via-black/30 to-transparent py-5"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Logo />

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={cn(
                    "relative px-3.5 py-2 text-sm font-medium tracking-wide transition-colors duration-200 rounded-sm",
                    isActive
                      ? "text-[#F5F3EC] font-semibold"
                      : "text-[#DCE5DB]/80 hover:text-[#F5F3EC]"
                  )}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-3.5 right-3.5 h-[2px] bg-[#B69A60] rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Action CTA */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold tracking-wider uppercase bg-[#183F30] text-[#F5F3EC] border border-[#B69A60]/40 rounded-sm hover:bg-[#20523f] hover:border-[#B69A60] transition-all duration-200 shadow-sm group"
            >
              <span>Discuss Bulk Supply</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#B69A60] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </div>

          {/* Mobile menu toggle */}
          <div className="flex md:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#DCE5DB] hover:text-white rounded-md focus:outline-none focus:ring-2 focus:ring-[#B69A60]"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 text-[#B69A60]" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <div
        className={cn(
          "fixed inset-0 top-[61px] bg-[#171B19]/98 backdrop-blur-xl z-40 transition-all duration-300 md:hidden flex flex-col justify-between px-6 py-8 border-t border-[#B69A60]/15",
          mobileMenuOpen
            ? "opacity-100 pointer-events-auto translate-x-0"
            : "opacity-0 pointer-events-none translate-x-full"
        )}
      >
        <div className="flex flex-col space-y-4">
          <span className="text-[10px] uppercase tracking-[0.2em] text-[#B69A60] font-semibold mb-2">
            Navigation Menu
          </span>
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "text-lg py-2 transition-colors border-b border-white/5",
                  isActive
                    ? "text-[#B69A60] font-semibold"
                    : "text-[#F5F3EC] hover:text-[#B69A60]"
                )}
                style={{ fontFamily: "var(--font-serif), Georgia, serif" }}
              >
                {link.name}
              </Link>
            );
          })}
        </div>

        <div className="pt-8 border-t border-white/10 space-y-4">
          <Link
            href="/contact"
            className="w-full flex items-center justify-center gap-2 py-3 px-4 text-sm font-semibold tracking-wider uppercase bg-[#183F30] text-[#F5F3EC] border border-[#B69A60] rounded-sm"
          >
            <span>Discuss Bulk Supply</span>
            <ArrowUpRight className="w-4 h-4 text-[#B69A60]" />
          </Link>
          <div className="text-center">
            <span className="text-xs text-[#8E9490]">
              Commercial inquiries:{" "}
              <span className="text-[#DCE5DB] font-mono">
                enquiry@dcftrading.com
              </span>
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}
