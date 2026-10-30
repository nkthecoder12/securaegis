"use client";

import { Book, Award, Clock, FileText } from "lucide-react";

export default function StudentDashboard() {
  return (
    <div className="min-h-screen bg-background pt-24 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">Student Dashboard</h1>
          <p className="text-gray-400">Welcome back, Hacker.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          {[
            { icon: Book, title: "Enrolled Courses", value: "3" },
            { icon: Clock, title: "Hours Learned", value: "45h" },
            { icon: Award, title: "Certifications", value: "1" },
            { icon: FileText, title: "Assignments", value: "12" },
          ].map((stat, idx) => (
            <div key={idx} className="glass p-6 rounded-xl border border-surface-border flex items-center gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <stat.icon className="w-6 h-6 text-primary" />
              </div>
              <div>
                <div className="text-2xl font-bold text-white">{stat.value}</div>
                <div className="text-sm text-gray-400">{stat.title}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 glass p-6 rounded-xl border border-surface-border">
            <h3 className="text-xl font-bold text-white mb-6">Active Courses</h3>
            <div className="space-y-6">
              {[
                { title: "Ethical Hacking (CEH)", progress: 75, next: "Module 4: Web App Pentesting" },
                { title: "SOC Analyst Training", progress: 30, next: "Module 2: SIEM Basics" }
              ].map((course, idx) => (
                <div key={idx} className="bg-surface border border-surface-border p-4 rounded-lg">
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="font-semibold text-white">{course.title}</h4>
                    <span className="text-primary font-bold">{course.progress}%</span>
                  </div>
                  <div className="w-full bg-background rounded-full h-2 mb-4 border border-surface-border overflow-hidden">
                    <div className="bg-primary h-2 rounded-full neon-glow" style={{ width: `${course.progress}%` }}></div>
                  </div>
                  <p className="text-sm text-gray-400">Up next: {course.next}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="glass p-6 rounded-xl border border-surface-border">
            <h3 className="text-xl font-bold text-white mb-6">Recent Notifications</h3>
            <div className="space-y-4">
              <div className="border-l-2 border-primary pl-4">
                <p className="text-sm text-white mb-1">New Assignment: Lab 3</p>
                <p className="text-xs text-gray-500">2 hours ago</p>
              </div>
              <div className="border-l-2 border-surface-border pl-4">
                <p className="text-sm text-gray-300 mb-1">Grade Posted: Web Security Quiz</p>
                <p className="text-xs text-gray-500">1 day ago</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
