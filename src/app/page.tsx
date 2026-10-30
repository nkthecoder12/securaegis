"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Shield, Lock, Server, Cpu, ChevronRight, CheckCircle, Award, Users, BookOpen } from "lucide-react";
import SessionCarousel from "@/components/ui/SessionCarousel";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center pt-1 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-background to-background pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-5xl md:text-7xl font-extrabold tracking-tight text-white mb-6"
            >
              Secure Your Future with <span className="text-primary text-glow">Industry-Leading</span> Cyber Security Training
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg md:text-xl text-gray-400 mb-10 max-w-3xl mx-auto"
            >
              Master Ethical Hacking, Network Security, Programming, and Cloud Technologies from Industry Experts. Get certified, practice in real labs, and launch your premium career.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Link
                href="/courses"
                className="w-full sm:w-auto px-8 py-4 bg-primary text-black font-bold rounded-lg hover:bg-orange-500 transition-all neon-glow flex items-center justify-center gap-2"
              >
                Explore Courses <ChevronRight className="w-5 h-5" />
              </Link>
              <Link
                href="/about"
                className="w-full sm:w-auto px-8 py-4 bg-surface border border-surface-border text-white font-medium rounded-lg hover:border-primary transition-all flex items-center justify-center gap-2"
              >
                About Us
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Session Carousel */}
      <SessionCarousel />

      {/* Highlights Section */}
      <section className="py-20 bg-surface border-y border-surface-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-primary text-sm font-bold tracking-widest uppercase mb-2">Why Choose Us</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-white">Engineered for Elite Cybersecurity Careers</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Shield, title: "Industry-Expert Trainers", desc: "Learn from veterans working in leading tech companies." },
              { icon: Server, title: "Practical Labs", desc: "Real-world environments to practice ethical hacking." },
              { icon: Cpu, title: "Live Projects", desc: "Build your portfolio with hands-on enterprise projects." },
              { icon: Lock, title: "Placement Support", desc: "Dedicated placement cell for interviews and resume building." }
            ].map((feature, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -5 }}
                className="glass p-6 rounded-xl border border-surface-border hover:border-primary transition-colors"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h4 className="text-xl font-bold text-white mb-2">{feature.title}</h4>
                <p className="text-gray-400">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Courses Preview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-primary text-sm font-bold tracking-widest uppercase mb-2">Featured Programs</h2>
              <h3 className="text-3xl md:text-4xl font-bold text-white">Popular Courses</h3>
            </div>
            <Link href="/courses" className="hidden md:flex items-center gap-1 text-primary hover:text-white transition-colors">
              View All <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Ethical Hacking (CEH)", category: "Security", level: "Beginner - Advanced" },
              { title: "SOC Analyst Training", category: "Security Operations", level: "Intermediate" },
              { title: "Networking & CCNA", category: "Infrastructure", level: "Beginner" }
            ].map((course, idx) => (
              <div key={idx} className="glass rounded-xl border border-surface-border overflow-hidden hover:border-primary/50 transition-all group">
                <div className="h-48 bg-surface-border relative overflow-hidden">
                  <div className="absolute inset-0 bg-primary/10 group-hover:bg-primary/20 transition-colors" />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-xs font-semibold px-2 py-1 bg-surface-border text-gray-300 rounded">{course.category}</span>
                    <span className="text-xs text-primary">{course.level}</span>
                  </div>
                  <h4 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors">{course.title}</h4>
                  <p className="text-sm text-gray-400 mb-6 line-clamp-2">Master the core concepts and advanced techniques in this comprehensive certification program.</p>
                  <Link href="/courses/details" className="block w-full text-center py-2 border border-surface-border hover:border-primary text-white rounded transition-colors">
                    View Course
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-surface border-y border-surface-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-extrabold text-primary mb-2">1000+</div>
              <div className="text-gray-400 text-sm uppercase tracking-wider font-semibold">Students Trained</div>
            </div>
            <div>
              <div className="text-4xl font-extrabold text-primary mb-2">95%</div>
              <div className="text-gray-400 text-sm uppercase tracking-wider font-semibold">Placement Rate</div>
            </div>
            <div>
              <div className="text-4xl font-extrabold text-primary mb-2">50+</div>
              <div className="text-gray-400 text-sm uppercase tracking-wider font-semibold">Industry Experts</div>
            </div>
            <div>
              <div className="text-4xl font-extrabold text-primary mb-2">20+</div>
              <div className="text-gray-400 text-sm uppercase tracking-wider font-semibold">Global Certifications</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
