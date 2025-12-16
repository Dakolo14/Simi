"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col justify-center px-6 py-32">
      <div className="max-w-3xl mx-auto w-full space-y-16 animate-in fade-in duration-1000 slide-in-from-bottom-8">
        {/* Header */}
        <div className="space-y-2">
          <p className="text-xs font-mono uppercase tracking-widest text-white/50">
            The Persona
          </p>
          <h1 className="font-serif text-5xl md:text-7xl italic leading-tight">
            Visual storyteller crafting digital experiences.
          </h1>
        </div>

        {/* Main Content */}
        <div className="space-y-8 text-lg md:text-xl font-light text-white/80 leading-relaxed">
          <p>
            I am Simeone, a multidisciplinary creative based in Lagos. My work
            exists at the intersection of design, motion, and technology—where
            static pixels come alive and stories unfold.
          </p>
          <p>
            I don't just make things look good; I make them feel right. Whether
            it's a brand identity that speaks without words or a motion piece
            that captures a fleeting emotion, my process is rooted in deep
            observation and precise execution.
          </p>
          <p>
            In a world of noise, I strive for the signal. Clean, impactful, and
            undeniably human.
          </p>
        </div>

        {/* Footer / Contact Link */}
        <div className="pt-8 border-t border-white/10">
          <Link
            href="/contact"
            className="group inline-flex items-center gap-4 text-2xl font-serif italic hover:text-white/70 transition-colors"
          >
            <span>Let's create something timeless</span>
            <ArrowRight className="w-6 h-6 transition-transform duration-500 group-hover:translate-x-2" />
          </Link>
        </div>
      </div>

      {/* Background Ambient Glow */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-[128px] animate-pulse"
          style={{ animationDuration: "8s" }}
        />
        <div
          className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-white/5 rounded-full blur-[96px] animate-pulse"
          style={{ animationDuration: "12s", animationDelay: "1s" }}
        />
      </div>
    </main>
  );
}
