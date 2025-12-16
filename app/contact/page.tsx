"use client";

import { ArrowUpRight, Mail, Phone } from "lucide-react";
import Link from "next/link";

export default function ContactPage() {
  const socialLinks = [
    { name: "Instagram", href: "https://instagram.com", handle: "@simeone" },
    { name: "Twitter", href: "https://twitter.com", handle: "@simeone_art" },
    { name: "LinkedIn", href: "https://linkedin.com", handle: "Simeone Ajose" },
    {
      name: "Behance",
      href: "https://behance.net",
      handle: "Simeone Portfolio",
    },
  ];

  return (
    <main className="min-h-screen bg-black text-white flex flex-col justify-center px-6 py-32 relative overflow-hidden">
      <div className="max-w-4xl mx-auto w-full z-10">
        {/* Header */}
        <div className="mb-20 animate-in fade-in duration-1000 slide-in-from-bottom-8">
          <p className="text-xs font-mono uppercase tracking-widest text-white/50 mb-4">
            Contact
          </p>
          <h1 className="font-serif text-6xl md:text-8xl italic leading-none mb-8">
            Let's start a <br /> conversation.
          </h1>
          <p className="text-xl text-white/60 font-light max-w-xl">
            I'm currently available for freelance projects and open to
            collaborative opportunities.
          </p>
        </div>

        {/* Contact Details Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 animate-in fade-in duration-1000 slide-in-from-bottom-12 delay-200">
          {/* Email Section */}
          <div className="space-y-4">
            <h2 className="text-sm font-mono uppercase tracking-widest text-white/40">
              Email
            </h2>
            <a
              href="mailto:simiowairearts@gmail.com"
              className="block text-3xl md:text-4xl font-serif hover:text-white/70 transition-colors decoration-1 underline-offset-8 hover:underline"
            >
              simiowairearts@gmail.com
            </a>
          </div>

          {/* Phone Section */}
          <div className="space-y-4">
            <h2 className="text-sm font-mono uppercase tracking-widest text-white/40">
              Phone
            </h2>
            <div className="flex items-center gap-2 text-2xl font-light">
              <Phone className="w-5 h-5 text-white/60" />
              <a
                href="tel:07062985865"
                className="hover:text-white/80 transition-colors"
              >
                07062985865
              </a>
            </div>
            <p className="text-white/40 text-sm">
              Available for calls and WhatsApp
            </p>
          </div>

          {/* Socials Section */}
          <div className="col-span-1 md:col-span-2 space-y-6 pt-8 border-t border-white/10">
            <h2 className="text-sm font-mono uppercase tracking-widest text-white/40">
              Socials
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              {socialLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  className="group flex items-center justify-between p-4 border border-white/10 rounded-lg hover:bg-white/5 transition-all duration-300"
                >
                  <div>
                    <span className="block text-sm text-white/50 mb-1">
                      {link.name}
                    </span>
                    <span className="font-medium">{link.handle}</span>
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-white/30 group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Ambient Background */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div
          className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-[128px] animate-pulse"
          style={{ animationDuration: "10s" }}
        />
        <div
          className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-purple-900/10 rounded-full blur-[128px] animate-pulse"
          style={{ animationDuration: "15s", animationDelay: "2s" }}
        />
      </div>
    </main>
  );
}
