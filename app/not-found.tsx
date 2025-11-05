"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Footer from "@/components/Footer";

export default function NotFound() {
  return (
    <main className="relative bg-[#FAFAFA]">
      {/* Decorative terracotta/ochre orbs */}
      <div className="pointer-events-none select-none absolute -top-24 -left-24 w-80 h-80 rounded-full bg-gradient-to-br from-italian-terracotta/25 to-italian-ochre/25 blur-3xl" />
      <div className="pointer-events-none select-none absolute -bottom-24 -right-24 w-96 h-96 rounded-full bg-gradient-to-br from-italian-ochre/20 to-italian-terracotta/20 blur-3xl" />

      <section className="relative py-32 lg:py-40">
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight bg-gradient-to-r from-italian-navy via-italian-taupe to-italian-terracotta bg-clip-text text-transparent"
            style={{ fontFamily: "var(--font-italiana)" }}
          >
            404 - Page Not Found
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
            className="mt-6 text-xl sm:text-2xl text-italian-taupe max-w-2xl mx-auto"
            style={{ lineHeight: 1.7 }}
          >
            The page you’re looking for doesn’t exist or may have been moved. Let’s
            take you back to a safe place.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
            className="mt-10"
          >
            <Link
              href="/"
              aria-label="Return home"
              className="inline-flex items-center justify-center px-6 py-3 rounded-sm bg-italian-terracotta text-white hover-lift focus-italian shadow-md"
            >
              Return Home
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

