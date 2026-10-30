"use client";

import { Users, BookOpen, IndianRupee, ShieldCheck } from "lucide-react";

export default function AdminDashboard() {
  return (
    <div className="min-h-screen bg-background pt-24 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex">
        {/* Sidebar */}
        <div className="w-64 glass border-r border-surface-border rounded-l-xl p-6 hidden md:block">
          <h2 className="text-xl font-bold text-white mb-8 flex items-center gap-2"><ShieldCheck className="text-primary" /> Admin Panel</h2>
          <nav className="space-y-2">
            {["Overview", "Students", "Courses", "Payments", "Blogs", "Placements", "Settings"].map((item) => (
              <a key={item} href="#" className={`block px-4 py-3 rounded-lg text-sm font-medium transition-colors ${item === "Overview" ? "bg-primary text-black" : "text-gray-400 hover:bg-surface-border hover:text-white"}`}>
                {item}
              </a>
            ))}
          </nav>
        </div>

        {/* Main Content */}
        <div className="flex-1 glass border border-surface-border rounded-xl md:rounded-l-none p-6 md:p-10">
          <div className="mb-8 flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-white mb-2">Platform Overview</h1>
              <p className="text-gray-400">Manage courses, students, and platform settings.</p>
            </div>
            <button className="px-4 py-2 bg-primary text-black font-bold rounded-lg hover:bg-orange-500 transition-colors">
              + Create Course
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
            {[
              { icon: Users, title: "Total Students", value: "1,245", trend: "+12%" },
              { icon: BookOpen, title: "Active Courses", value: "24", trend: "+3" },
              { icon: IndianRupee, title: "Revenue (MTD)", value: "₹4.5L", trend: "+8%" },
            ].map((stat, idx) => (
              <div key={idx} className="bg-surface border border-surface-border p-6 rounded-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-10">
                  <stat.icon className="w-16 h-16 text-primary" />
                </div>
                <div className="text-gray-400 text-sm mb-2">{stat.title}</div>
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-xs text-primary font-medium">{stat.trend} this month</div>
              </div>
            ))}
          </div>

          <h3 className="text-xl font-bold text-white mb-6">Recent Enrollments</h3>
          <div className="bg-surface border border-surface-border rounded-xl overflow-hidden">
            <table className="w-full text-left">
              <thead className="bg-background border-b border-surface-border">
                <tr>
                  <th className="px-6 py-4 text-xs font-semibold text-gray-400 uppercase tracking-wider">Student</th>
                  <th className="px-6 py-4 text-xs font-semibold text-gray-400 uppercase tracking-wider">Course</th>
                  <th className="px-6 py-4 text-xs font-semibold text-gray-400 uppercase tracking-wider">Date</th>
                  <th className="px-6 py-4 text-xs font-semibold text-gray-400 uppercase tracking-wider">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-surface-border">
                {[
                  { name: "Alex Mercer", course: "Ethical Hacking (CEH)", date: "Oct 18, 2026", status: "Active" },
                  { name: "Sam Fisher", course: "SOC Analyst", date: "Oct 17, 2026", status: "Active" },
                  { name: "John Doe", course: "Network Security", date: "Oct 15, 2026", status: "Completed" },
                ].map((row, idx) => (
                  <tr key={idx} className="hover:bg-surface-border/50 transition-colors">
                    <td className="px-6 py-4 text-sm text-white font-medium">{row.name}</td>
                    <td className="px-6 py-4 text-sm text-gray-400">{row.course}</td>
                    <td className="px-6 py-4 text-sm text-gray-400">{row.date}</td>
                    <td className="px-6 py-4">
                      <span className={`px-2 py-1 text-xs font-semibold rounded ${row.status === "Active" ? "bg-primary/10 text-primary" : "bg-green-500/10 text-green-500"}`}>
                        {row.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
