"use client";

import Link from "next/link";

import { useState, useEffect, useRef } from "react";
import { Menu, X, Shield, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      if (currentY < 10) {
        setVisible(true);
      } else if (currentY > lastScrollY.current) {
        // Scrolling down
        setVisible(false);
        setIsOpen(false);
      } else {
        // Scrolling up
        setVisible(true);
      }
      lastScrollY.current = currentY;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      className="fixed w-full z-50 border-b border-orange-500/30"
      style={{
        background: 'linear-gradient(135deg, rgba(10,10,10,0.97) 0%, rgba(20,10,0,0.97) 50%, rgba(10,10,10,0.97) 100%)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        boxShadow: '0 1px 40px 0 rgba(249,115,22,0.13), 0 0 0 1px rgba(249,115,22,0.07)',
      }}
      animate={{ y: visible ? 0 : "-100%" }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      {/* Orange gradient accent line at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-[2px]" style={{ background: 'linear-gradient(90deg, transparent 0%, #f97316 30%, #fb923c 50%, #f97316 70%, transparent 100%)' }} />
      <div className="max-w-7xl mx-auto px-4 sm:px-9 lg:px-15">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-2 group">
              <img src="/logo.png" alt="Securaegis Logo" width={48} height={48} className="object-contain" />
              <span className="text-xl font-bold tracking-wider text-white text-glow">
                SECURAEGIS
              </span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-300 hover:text-primary transition-colors">
              Home
            </Link>

            <div className="relative" onMouseLeave={() => setDropdownOpen(false)}>
              <button
                onMouseEnter={() => setDropdownOpen(true)}
                className="flex items-center text-gray-300 hover:text-primary transition-colors"
              >
                Courses <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              <AnimatePresence>
                {dropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full left-0 w-48 mt-2 glass rounded-lg overflow-hidden"
                  >
                    <div className="py-2 flex flex-col">
                      <Link href="/courses/ethical-hacking" className="px-4 py-2 text-sm text-gray-300 hover:bg-surface-border hover:text-primary">Ethical Hacking</Link>
                      <Link href="/courses/networking" className="px-4 py-2 text-sm text-gray-300 hover:bg-surface-border hover:text-primary">Networking (CCNA)</Link>
                      <Link href="/courses/soc-analyst" className="px-4 py-2 text-sm text-gray-300 hover:bg-surface-border hover:text-primary">SOC Analyst</Link>
                      <Link href="/courses" className="px-4 py-2 text-sm text-primary font-medium hover:bg-surface-border">View All Courses →</Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link href="/placements" className="text-gray-300 hover:text-primary transition-colors">Placements</Link>
            <Link href="/about" className="text-gray-300 hover:text-primary transition-colors">About</Link>
            <Link href="/blog" className="text-gray-300 hover:text-primary transition-colors">Blog</Link>
            <Link href="/contact" className="text-gray-300 hover:text-primary transition-colors">Contact</Link>

            <Link
              href="/login"
              className="px-5 py-2 border border-primary text-primary rounded-md hover:bg-primary hover:text-black transition-all neon-glow font-medium"
            >
              Login
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden glass border-t border-surface-border overflow-hidden"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col">
              <Link href="/" className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-primary hover:bg-surface-border rounded-md">Home</Link>
              <Link href="/courses" className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-primary hover:bg-surface-border rounded-md">Courses</Link>
              <Link href="/placements" className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-primary hover:bg-surface-border rounded-md">Placements</Link>
              <Link href="/about" className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-primary hover:bg-surface-border rounded-md">About</Link>
              <Link href="/contact" className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-primary hover:bg-surface-border rounded-md">Contact</Link>
              <Link href="/login" className="block px-3 py-2 text-base font-medium text-primary border border-primary rounded-md mt-4 text-center mx-2 hover:bg-primary hover:text-black">Login</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
