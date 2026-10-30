"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="pt-32 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            Get in <span className="text-primary text-glow">Touch</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-lg text-gray-400">
            Have questions about our programs or admissions? We're here to help.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }} className="glass p-8 rounded-2xl border border-surface-border">
            <h3 className="text-2xl font-bold text-white mb-6">Send us a Message</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">First Name</label>
                  <input type="text" className="w-full bg-surface border border-surface-border rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors" placeholder="John" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Last Name</label>
                  <input type="text" className="w-full bg-surface border border-surface-border rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors" placeholder="Doe" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Email Address</label>
                <input type="email" className="w-full bg-surface border border-surface-border rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors" placeholder="john@example.com" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                <textarea rows={4} className="w-full bg-surface border border-surface-border rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors" placeholder="How can we help you?"></textarea>
              </div>
              <button type="button" className="w-full flex items-center justify-center gap-2 bg-primary text-black font-bold py-4 rounded-lg hover:bg-orange-500 transition-colors neon-glow">
                Send Message <Send className="w-5 h-5" />
              </button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }} className="space-y-8">
            <div className="glass p-6 rounded-xl border border-surface-border flex items-start gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <MapPin className="text-primary w-6 h-6" />
              </div>
              <div>
                <h4 className="text-white font-bold text-lg mb-1">Our Headquarters</h4>
                <p className="text-gray-400 leading-relaxed">Securaegis Technologies LLP<br/>Tech Park, Cyber City, Phase 1<br/>India</p>
              </div>
            </div>

            <div className="glass p-6 rounded-xl border border-surface-border flex items-start gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Phone className="text-primary w-6 h-6" />
              </div>
              <div>
                <h4 className="text-white font-bold text-lg mb-1">Phone Number</h4>
                <p className="text-gray-400">+91 98765 43210<br/>+91 12345 67890</p>
              </div>
            </div>

            <div className="glass p-6 rounded-xl border border-surface-border flex items-start gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Mail className="text-primary w-6 h-6" />
              </div>
              <div>
                <h4 className="text-white font-bold text-lg mb-1">Email Address</h4>
                <p className="text-gray-400">info@securaegis.com<br/>admissions@securaegis.com</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
