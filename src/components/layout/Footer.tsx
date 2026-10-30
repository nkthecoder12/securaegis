import Link from "next/link";
import { Shield, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#050505] border-t border-surface-border pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

          {/* Brand & Intro */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2 group">

              <span className="text-xl font-bold tracking-wider text-white text-glow">
                SECURAEGIS
              </span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              Empowering the next generation of Cyber Security professionals with elite training, practical labs, and global certifications.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">FB</a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">TW</a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">IG</a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">IN</a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-lg">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-gray-400 hover:text-primary text-sm transition-colors">About Us</Link></li>
              <li><Link href="/placements" className="text-gray-400 hover:text-primary text-sm transition-colors">Placements</Link></li>
              <li><Link href="/blog" className="text-gray-400 hover:text-primary text-sm transition-colors">Blog & News</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-primary text-sm transition-colors">Contact Us</Link></li>
              <li><Link href="/faq" className="text-gray-400 hover:text-primary text-sm transition-colors">FAQs</Link></li>
            </ul>
          </div>

          {/* Popular Courses */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-lg">Popular Courses</h3>
            <ul className="space-y-2">
              <li><Link href="/courses/ethical-hacking" className="text-gray-400 hover:text-primary text-sm transition-colors">Ethical Hacking (CEH)</Link></li>
              <li><Link href="/courses/networking" className="text-gray-400 hover:text-primary text-sm transition-colors">Networking (CCNA)</Link></li>
              <li><Link href="/courses/soc-analyst" className="text-gray-400 hover:text-primary text-sm transition-colors">SOC Analyst</Link></li>
              <li><Link href="/courses/python" className="text-gray-400 hover:text-primary text-sm transition-colors">Python for Security</Link></li>
              <li><Link href="/courses" className="text-primary hover:text-white text-sm transition-colors font-medium">View All Courses →</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-lg">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-gray-400 text-sm">Securaegis Technologies LLP, Tech Park, Cyber City, India</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-gray-400 text-sm">+91 98765 43210</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-gray-400 text-sm">info@securaegis.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-surface-border pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm text-center md:text-left">
            © {new Date().getFullYear()} Securaegis Technologies LLP. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy" className="text-gray-500 hover:text-white text-sm transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="text-gray-500 hover:text-white text-sm transition-colors">Terms of Service</Link>
            <Link href="/refund" className="text-gray-500 hover:text-white text-sm transition-colors">Refund Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
