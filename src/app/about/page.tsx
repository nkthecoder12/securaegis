"use client";

import { motion } from "framer-motion";
import { Shield, Target, Users, Award, ShieldCheck } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="pt-32 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary mb-6">
            <Shield className="w-4 h-4" />
            <span className="text-sm font-medium tracking-wide">ABOUT SECURAEGIS</span>
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-4xl md:text-6xl font-extrabold text-white mb-6">
            Forging the Next Generation of <span className="text-primary text-glow">Cyber Defenders</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-xl text-gray-400 max-w-3xl mx-auto">
            Securaegis Technologies LLP is a premier cybersecurity training and consulting firm committed to bridging the global skills gap in information security.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24">
          <div className="glass p-8 rounded-2xl border border-surface-border relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-10">
              <Target className="w-32 h-32 text-primary" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2"><Target className="text-primary" /> Our Mission</h3>
            <p className="text-gray-400 leading-relaxed">
              To deliver elite, practical, and industry-aligned cybersecurity training that empowers individuals to defend digital infrastructures and build rewarding careers in tech.
            </p>
          </div>
          <div className="glass p-8 rounded-2xl border border-surface-border relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-10">
              <ShieldCheck className="w-32 h-32 text-primary" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2"><ShieldCheck className="text-primary" /> Our Vision</h3>
            <p className="text-gray-400 leading-relaxed">
              To be the globally recognized gold standard in cyber security education, known for producing highly skilled professionals who secure the digital world.
            </p>
          </div>
        </div>

        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">Our Core Values</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {[
            { icon: Users, title: "Expert Mentorship", desc: "Training delivered exclusively by active industry practitioners." },
            { icon: Award, title: "Excellence", desc: "Uncompromising quality in our curriculum and lab environments." },
            { icon: Shield, title: "Integrity", desc: "Upholding the highest ethical standards in all our operations." }
          ].map((val, idx) => (
            <div key={idx} className="bg-surface border border-surface-border p-6 rounded-xl text-center hover:border-primary transition-colors">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <val.icon className="w-8 h-8 text-primary" />
              </div>
              <h4 className="text-xl font-bold text-white mb-2">{val.title}</h4>
              <p className="text-gray-400 text-sm">{val.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
