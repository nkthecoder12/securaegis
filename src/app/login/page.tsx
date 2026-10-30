"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Shield, Lock, Mail } from "lucide-react";
import { useState } from "react";
import { signIn } from "next-auth/react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await signIn("credentials", { email, password, callbackUrl: "/dashboard" });
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/5 via-background to-background pointer-events-none" />

      <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="max-w-md w-full space-y-8 glass p-10 rounded-2xl border border-surface-border relative z-10">
        <img className="mx-auto h-12 w-15 text-primary" src="/logo.png" alt="logo" />
        <div className="text-center">

          <h2 className="mt-6 text-3xl font-extrabold text-white">Login</h2>
          <p className="mt-2 text-sm text-gray-400">
            Sign in to access your dashboard and courses.
          </p>
        </div>

        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-5 h-5" />
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-surface border border-surface-border rounded-lg py-3 pl-10 pr-4 text-white focus:outline-none focus:border-primary transition-colors"
                placeholder="Email address"
              />
            </div>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-5 h-5" />
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-surface border border-surface-border rounded-lg py-3 pl-10 pr-4 text-white focus:outline-none focus:border-primary transition-colors"
                placeholder="Password"
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary bg-surface" />
              <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-400">Remember me</label>
            </div>
            <div className="text-sm">
              <a href="#" className="font-medium text-primary hover:text-white transition-colors">Forgot password?</a>
            </div>
          </div>

          <button type="submit" className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-bold text-black bg-primary hover:bg-orange-500 transition-colors neon-glow">
            Sign In
          </button>
        </form>

        <div className="text-center mt-6">
          <p className="text-sm text-gray-400">
            Don't have an account?{" "}
            <Link href="/register" className="font-medium text-primary hover:text-white transition-colors">Register here</Link>
          </p>
        </div>
      </motion.div>
    </div>
  );
}
