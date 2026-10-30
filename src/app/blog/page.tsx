"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Search, Calendar, User, ArrowRight } from "lucide-react";

export default function BlogPage() {
  const blogs = [
    { id: 1, title: "The Rise of AI in Cyber Attacks", category: "Threat Intel", date: "Oct 15, 2026", author: "Admin", excerpt: "Explore how adversaries are leveraging artificial intelligence to bypass modern security controls." },
    { id: 2, title: "Getting Started with Bug Bounty", category: "Ethical Hacking", date: "Oct 12, 2026", author: "Jane Doe", excerpt: "A comprehensive guide on how to approach bug bounty programs for the first time." },
    { id: 3, title: "Zero Trust Architecture Explained", category: "Networking", date: "Oct 10, 2026", author: "John Smith", excerpt: "Why perimeter security is no longer enough and how to implement zero trust." },
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="pt-32 pb-16 bg-surface border-b border-surface-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div>
              <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-4xl md:text-5xl font-extrabold text-white mb-4">
                Securaegis <span className="text-primary text-glow">Insights</span>
              </motion.h1>
              <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-lg text-gray-400">
                Latest news, tutorials, and threat intel from our experts.
              </motion.p>
            </div>
            <div className="relative w-full md:w-96">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 w-5 h-5" />
              <input type="text" placeholder="Search articles..." className="w-full bg-background border border-surface-border rounded-lg py-3 pl-12 pr-4 text-white focus:outline-none focus:border-primary transition-colors" />
            </div>
          </div>
        </div>
      </div>

      <div className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogs.map((blog, idx) => (
            <motion.article key={blog.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.1 }} className="glass rounded-xl overflow-hidden border border-surface-border hover:border-primary/50 transition-colors group flex flex-col">
              <div className="h-48 bg-surface-border relative overflow-hidden">
                <div className="absolute inset-0 bg-primary/10 group-hover:bg-primary/20 transition-colors" />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <span className="text-xs font-semibold px-2 py-1 bg-surface-border text-primary rounded self-start mb-4">{blog.category}</span>
                <h2 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors">{blog.title}</h2>
                <p className="text-gray-400 text-sm mb-6 flex-grow">{blog.excerpt}</p>
                <div className="flex items-center justify-between text-xs text-gray-500 border-t border-surface-border pt-4">
                  <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {blog.date}</span>
                  <span className="flex items-center gap-1"><User className="w-3 h-3" /> {blog.author}</span>
                </div>
                <Link href={`/blog/${blog.id}`} className="mt-4 text-primary text-sm font-medium hover:text-white flex items-center gap-1 transition-colors">
                  Read Article <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
}
