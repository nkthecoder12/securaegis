"use client";

import { motion } from "framer-motion";
import { Briefcase, TrendingUp, Building, UserCheck } from "lucide-react";

export default function PlacementsPage() {
  const stats = [
    { label: "Highest Package", value: "24 LPA" },
    { label: "Average Package", value: "8.5 LPA" },
    { label: "Placement Rate", value: "95%+" },
    { label: "Hiring Partners", value: "150+" },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="pt-32 pb-16 bg-surface border-b border-surface-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-4xl md:text-5xl font-extrabold text-white mb-6">
            Launch Your Career with <span className="text-primary text-glow">Top Tech Giants</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-lg text-gray-400 max-w-2xl mx-auto">
            Our dedicated placement cell ensures you get the right opportunities to kickstart your cybersecurity journey.
          </motion.p>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, idx) => (
            <motion.div key={idx} initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: idx * 0.1 }} className="glass p-8 rounded-2xl border border-surface-border text-center hover:border-primary/50 transition-colors">
              <div className="text-3xl md:text-5xl font-black text-primary mb-2">{stat.value}</div>
              <div className="text-gray-400 font-medium uppercase tracking-wider text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Process Section */}
      <div className="py-20 bg-surface border-y border-surface-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white text-center mb-16">Our Placement Process</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-surface-border -z-10 transform -translate-y-1/2"></div>
            
            {[
              { icon: Briefcase, title: "Resume Building", desc: "Crafting ATS-friendly resumes that highlight your skills." },
              { icon: TrendingUp, title: "Mock Interviews", desc: "Technical and HR interview prep with industry experts." },
              { icon: Building, title: "Company Drives", desc: "Exclusive campus and off-campus recruitment drives." },
              { icon: UserCheck, title: "Final Selection", desc: "Offer letter negotiation and onboarding support." },
            ].map((step, idx) => (
              <div key={idx} className="bg-background border border-surface-border p-6 rounded-xl text-center relative">
                <div className="w-14 h-14 bg-primary text-black rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-xl absolute -top-7 left-1/2 transform -translate-x-1/2 border-4 border-surface">
                  {idx + 1}
                </div>
                <div className="mt-8">
                  <h4 className="text-xl font-bold text-white mb-2">{step.title}</h4>
                  <p className="text-gray-400 text-sm">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
