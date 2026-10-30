"use client";

import { useRef } from "react";

const sessions = [
  { src: "/session1.jpg", alt: "Cybersecurity Training Session 1" },
  { src: "/session2.jpg", alt: "Cybersecurity Training Session 2" },
  { src: "/session3.jpg", alt: "Cybersecurity Training Session 3" },
  { src: "/session4.jpg", alt: "Cybersecurity Training Session 4" },
  { src: "/session5.jpg", alt: "Cybersecurity Training Session 5" },
  { src: "/session6.jpg", alt: "Cybersecurity Training Session 6" },
];

// Duplicate for seamless infinite scroll
const allSessions = [...sessions, ...sessions];

export default function SessionCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);

  return (
    <section className="py-20 overflow-hidden bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-center">
        <h2 className="text-primary text-sm font-bold tracking-widest uppercase mb-2">
          Live in Action
        </h2>
        <h3 className="text-3xl md:text-4xl font-bold text-white">
          Our Training Sessions
        </h3>
        <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
          Real classrooms. Real students. Real transformation.
        </p>
      </div>

      {/* Scrolling Track */}
      <div className="relative w-full overflow-hidden">
        {/* Left fade overlay */}
        <div className="absolute left-0 top-0 h-full w-24 z-10 pointer-events-none bg-gradient-to-r from-background to-transparent" />
        {/* Right fade overlay */}
        <div className="absolute right-0 top-0 h-full w-24 z-10 pointer-events-none bg-gradient-to-l from-background to-transparent" />

        <div
          ref={trackRef}
          className="flex gap-6 carousel-track"
          style={{ width: "max-content" }}
        >
          {allSessions.map((img, idx) => (
            <div
              key={idx}
              className="relative flex-shrink-0 w-80 h-56 sharp-xl overflow-hidden border border-surface-border group"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-all duration-300 rounded-xl" />
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .carousel-track {
          animation: scroll-left 30s linear infinite;
        }
        .carousel-track:hover {
          animation-play-state: paused;
        }
        @keyframes scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
}
