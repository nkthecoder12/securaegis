"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Search, Filter, Clock, Star, Users, ChevronRight } from "lucide-react";

export default function CoursesPage() {
  const courses = [
    { id: 1, title: "Ethical Hacking (CEH)", category: "Security", level: "Beginner", duration: "12 Weeks", fees: "₹25,000", rating: 4.9, students: "1.2k" },
    { id: 2, title: "SOC Analyst Training", category: "Operations", level: "Intermediate", duration: "10 Weeks", fees: "₹20,000", rating: 4.8, students: "850" },
    { id: 3, title: "Network Security & CCNA", category: "Infrastructure", level: "Beginner", duration: "8 Weeks", fees: "₹15,000", rating: 4.7, students: "2k" },
    { id: 4, title: "Cloud Security (AWS/Azure)", category: "Cloud", level: "Advanced", duration: "14 Weeks", fees: "₹30,000", rating: 4.9, students: "600" },
    { id: 5, title: "Python for Cybersecurity", category: "Programming", level: "Beginner", duration: "6 Weeks", fees: "₹12,000", rating: 4.8, students: "1.5k" },
    { id: 6, title: "Digital Forensics", category: "Investigation", level: "Advanced", duration: "12 Weeks", fees: "₹28,000", rating: 4.9, students: "400" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="pt-24 pb-12 bg-surface border-b border-surface-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">Master Your <span className="text-primary text-glow">Cyber Skills</span></h1>
            <p className="text-gray-400 text-lg">Explore our industry-leading certification programs designed by security veterans.</p>
          </motion.div>
          
          <div className="mt-10 max-w-4xl mx-auto flex flex-col md:flex-row gap-4">
            <div className="relative flex-grow">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 w-5 h-5" />
              <input type="text" placeholder="Search for courses..." className="w-full bg-background border border-surface-border rounded-lg py-4 pl-12 pr-4 text-white focus:outline-none focus:border-primary transition-colors" />
            </div>
            <button className="flex items-center gap-2 px-6 py-4 bg-background border border-surface-border rounded-lg text-white hover:border-primary transition-colors">
              <Filter className="w-5 h-5" /> Filters
            </button>
          </div>
        </div>
      </div>

      <div className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, idx) => (
            <motion.div key={course.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.1 }} className="glass rounded-xl overflow-hidden border border-surface-border hover:border-primary/50 transition-all group flex flex-col">
              <div className="h-48 bg-surface-border relative flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-primary/10 group-hover:bg-primary/20 transition-colors" />
                <span className="text-4xl font-black text-white/10 tracking-widest uppercase">{course.category}</span>
              </div>
              <div className="p-6 flex-grow flex flex-col">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-xs font-semibold px-2 py-1 bg-surface-border text-gray-300 rounded">{course.category}</span>
                  <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded">{course.level}</span>
                </div>
                <h2 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors">{course.title}</h2>
                
                <div className="flex items-center gap-4 text-sm text-gray-400 mb-6">
                  <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> {course.duration}</span>
                  <span className="flex items-center gap-1"><Users className="w-4 h-4" /> {course.students}</span>
                  <span className="flex items-center gap-1 text-yellow-500"><Star className="w-4 h-4 fill-current" /> {course.rating}</span>
                </div>

                <div className="mt-auto flex items-center justify-between border-t border-surface-border pt-4">
                  <span className="text-lg font-bold text-white">{course.fees}</span>
                  <Link href={`/courses/${course.id}`} className="text-primary hover:text-white flex items-center gap-1 text-sm font-medium transition-colors">
                    View Details <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
