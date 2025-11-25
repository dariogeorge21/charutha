"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Footer from "@/components/Footer";

// Animation variants
const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.1,
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function PrivacyPage() {
  return (
    <main className="relative bg-[#FAFAFA]">
      {/* Decorative terracotta/ochre orbs */}
      <div className="pointer-events-none select-none absolute -top-24 -left-24 w-80 h-80 rounded-full bg-gradient-to-br from-italian-terracotta/20 to-italian-ochre/20 blur-3xl" />
      <div className="pointer-events-none select-none absolute -bottom-24 -right-24 w-96 h-96 rounded-full bg-gradient-to-br from-italian-ochre/20 to-italian-terracotta/20 blur-3xl" />

      <section className="relative py-20 lg:py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <Breadcrumb aria-label="Breadcrumb" className="mb-6">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link href="/">Home</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Privacy Policy</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl sm:text-6xl md:text-7xl text-italian-navy tracking-tight font-extrabold"
            style={{ fontFamily: "var(--font-italiana)" }}
          >
            Privacy Policy
          </motion.h1>

          <motion.div
            variants={container}
            initial="hidden"
            animate="visible"
            className="mt-12 space-y-8 lg:space-y-12"
          >
            {/* Introduction */}
            <motion.section variants={item}>
              <p className="text-sm text-italian-taupe/80">Last updated: 5 November 2025</p>
              <p className="mt-4 text-base sm:text-lg text-italian-taupe" style={{ lineHeight: 1.7 }}>
                Charutha Constructions Private Limited ("Charutha", "we", "us", or "our"), established in 1995 and headquartered in Fort Kochi, Kerala, India, is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website, request a quotation, apply for a job, or otherwise interact with our services.
              </p>
            </motion.section>

            {/* Information We Collect */}
            <motion.section variants={item}>
              <h2 className="text-2xl sm:text-3xl md:text-4xl text-italian-navy font-bold" style={{ fontFamily: "var(--font-italiana)" }}>
                1. Information We Collect
              </h2>
              <p className="mt-3 text-base sm:text-lg text-italian-taupe font-semibold" style={{ lineHeight: 1.7 }}>
                We may collect the following categories of information:
              </p>
              <ul className="mt-4 list-disc list-inside space-y-2 text-italian-taupe font-semibold">
                <li><span className="font-medium text-italian-navy">Identity & Contact:</span> name, company, email address, phone number, postal address.</li>
                <li><span className="font-medium text-italian-navy">Project & Site Data:</span> project requirements, site location, specifications, drawings you share with us.</li>
                <li><span className="font-medium text-italian-navy">Communications:</span> correspondence, enquiries, feedback, and records of customer support.</li>
                <li><span className="font-medium text-italian-navy">Device & Usage:</span> IP address, browser type, pages visited, and interactions with our website (collected via cookies/analytics).</li>
                <li><span className="font-medium text-italian-navy">Recruitment Data:</span> CV/resume, qualifications, employment history, and other details you provide when applying for roles.</li>
                <li><span className="font-medium text-italian-navy">Consent Preferences:</span> your choices regarding marketing communications and cookies.</li>
              </ul>
            </motion.section>

            {/* How We Use Your Information */}
            <motion.section variants={item}>
              <h2 className="text-2xl sm:text-3xl md:text-4xl text-italian-navy font-extrabold" style={{ fontFamily: "var(--font-italiana)" }}>
                2. How We Use Your Information
              </h2>
              <ul className="mt-4 list-disc list-inside space-y-2 text-italian-taupe font-semibold">
                <li>To respond to enquiries, provide quotations, and deliver our construction and related services.</li>
                <li>To plan, manage, and execute projects safely and efficiently, including site coordination and compliance.</li>
                <li>To improve our website, services, and client experience through analytics and feedback.</li>
                <li>To send service-related communications and, with your consent, marketing updates about Charutha.</li>
                <li>To process job applications and manage recruitment.</li>
                <li>To comply with legal obligations and enforce our agreements.</li>
              </ul>
            </motion.section>

            {/* Data Protection & Security */}
            <motion.section variants={item}>
              <h2 className="text-2xl sm:text-3xl md:text-4xl text-italian-navy font-extrabold" style={{ fontFamily: "var(--font-italiana)" }}>
                3. Data Protection & Security
              </h2>
              <p className="mt-3 text-base sm:text-lg text-italian-taupe font-semibold" style={{ lineHeight: 1.7 }}>
                We implement appropriate technical and organisational measures to protect your information against unauthorised access, alteration, disclosure, or destruction. While we strive to use commercially acceptable means to protect your Personal Information, no method of transmission over the Internet or method of electronic storage is 100% secure.
              </p>
            </motion.section>

            {/* Cookies & Tracking */}
            <motion.section variants={item}>
              <h2 className="text-2xl sm:text-3xl md:text-4xl text-italian-navy font-extrabold" style={{ fontFamily: "var(--font-italiana)" }}>
                4. Cookies & Tracking Technologies
              </h2>
              <p className="mt-3 text-base sm:text-lg text-italian-taupe font-semibold" style={{ lineHeight: 1.7 }}>
                We use cookies and similar technologies to provide core functionality, remember your preferences, and analyse website traffic. You can control cookies through your browser settings. Some features of the site may not function properly without cookies.
              </p>
            </motion.section>

            {/* Third-Party Services */}
            <motion.section variants={item}>
              <h2 className="text-2xl sm:text-3xl md:text-4xl text-italian-navy font-extrabold" style={{ fontFamily: "var(--font-italiana)" }}>
                5. Third-Party Services
              </h2>
              <p className="mt-3 text-base sm:text-lg text-italian-taupe font-semibold" style={{ lineHeight: 1.7 }}>
                We may engage trusted third parties for hosting, analytics, communications, payments, and recruitment. These providers are contractually obligated to protect your information and process it only as instructed by us.
              </p>
            </motion.section>

            {/* Your Rights & Choices */}
            <motion.section variants={item}>
              <h2 className="text-2xl sm:text-3xl md:text-4xl text-italian-navy font-extrabold" style={{ fontFamily: "var(--font-italiana)" }}>
                6. Your Rights & Choices
              </h2>
              <p className="mt-3 text-base sm:text-lg text-italian-taupe font-semibold" style={{ lineHeight: 1.7 }}>
                Subject to applicable Indian laws, you may request access to, correction or deletion of your Personal Information, object to or restrict processing, and withdraw consent where processing is based on consent. To exercise these rights, please contact us using the details below.
              </p>
            </motion.section>

            {/* Changes to this Policy */}
            <motion.section variants={item}>
              <h2 className="text-2xl sm:text-3xl md:text-4xl text-italian-navy font-extrabold" style={{ fontFamily: "var(--font-italiana)" }}>
                7. Changes to This Policy
              </h2>
              <p className="mt-3 text-base sm:text-lg text-italian-taupe font-semibold" style={{ lineHeight: 1.7 }}>
                We may update this Privacy Policy from time to time to reflect changes to our practices or for other operational, legal, or regulatory reasons. We encourage you to review this page periodically for the latest information.
              </p>
            </motion.section>

            {/* Contact Information */}
            <motion.section variants={item}>
              <h2 className="text-2xl sm:text-3xl md:text-4xl text-italian-navy font-extrabold" style={{ fontFamily: "var(--font-italiana)" }}>
                8. Contact Information
              </h2>
              <div className="mt-3 text-base sm:text-lg text-italian-taupe space-y-2 font-semibold" style={{ lineHeight: 1.7 }}>
                <p>Charutha Constructions Pvt. Ltd.</p>
                <p>Fort Kochi, Kerala, India</p>
                <p>
                  Email: <a href="mailto:info@charutha.com" className="underline underline-offset-4 decoration-italian-terracotta/50 hover-terracotta rounded-sm focus-italian px-1">info@charutha.com</a>
                </p>
                <p>
                  Phone: <a href="tel:+911234567890" className="underline underline-offset-4 decoration-italian-terracotta/50 hover-terracotta rounded-sm focus-italian px-1">(+91) 12345 67890</a>
                </p>
              </div>
            </motion.section>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

