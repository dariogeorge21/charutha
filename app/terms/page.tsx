"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Footer from "@/components/Footer";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.2 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function TermsPage() {
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
                <BreadcrumbPage>Terms of Service</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-5xl sm:text-6xl md:text-7xl text-italian-navy font-extrabold"
            style={{ fontFamily: "var(--font-italiana)" }}
          >
            Terms of Service
          </motion.h1>

          <motion.div
            variants={container}
            initial="hidden"
            animate="visible"
            className="mt-10 space-y-8 lg:space-y-12"
          >
            {/* Acceptance of Terms */}
            <motion.section variants={item}>
              <p className="text-sm text-italian-taupe/80">Last updated: 5 November 2025</p>
              <p className="mt-4 text-base sm:text-lg text-italian-taupe" style={{ lineHeight: 1.7 }}>
                These Terms of Service ("Terms") govern your access to and use of the Charutha Constructions Private Limited ("Charutha", "we", "us", or "our") website and services. By accessing or using our website or services, you agree to be bound by these Terms and our Privacy Policy.
              </p>
            </motion.section>

            {/* Services Description */}
            <motion.section variants={item}>
              <h2 className="text-2xl sm:text-3xl md:text-4xl text-italian-navy font-semibold" style={{ fontFamily: "var(--font-italiana)" }}>
                1. Services Description
              </h2>
              <p className="mt-3 text-base sm:text-lg text-italian-taupe" style={{ lineHeight: 1.7 }}>
                Charutha provides construction and related services, including but not limited to infrastructure development, commercial and residential construction, and design coordination. The scope of specific services is detailed in our project proposals, contracts, or quotations.
              </p>
            </motion.section>

            {/* User Obligations */}
            <motion.section variants={item}>
              <h2 className="text-2xl sm:text-3xl md:text-4xl text-italian-navy font-semibold" style={{ fontFamily: "var(--font-italiana)" }}>
                2. User Obligations & Responsibilities
              </h2>
              <ul className="mt-4 list-disc list-inside space-y-2 text-italian-taupe">
                <li>Provide accurate and complete information when making enquiries or entering into agreements with us.</li>
                <li>Comply with all applicable laws, regulations, and site safety requirements.</li>
                <li>Ensure timely payments as agreed in the contract documents.</li>
                <li>Cooperate with Charutha personnel and contractors to facilitate safe and efficient project delivery.</li>
              </ul>
            </motion.section>

            {/* Intellectual Property */}
            <motion.section variants={item}>
              <h2 className="text-2xl sm:text-3xl md:text-4xl text-italian-navy font-semibold" style={{ fontFamily: "var(--font-italiana)" }}>
                3. Intellectual Property Rights
              </h2>
              <p className="mt-3 text-base sm:text-lg text-italian-taupe" style={{ lineHeight: 1.7 }}>
                All content on this website, including text, graphics, logos, images, and design elements, is the property of Charutha or its licensors and is protected under applicable intellectual property laws. You may not copy, reproduce, or distribute any content without our prior written consent.
              </p>
            </motion.section>

            {/* Limitation of Liability */}
            <motion.section variants={item}>
              <h2 className="text-2xl sm:text-3xl md:text-4xl text-italian-navy font-semibold" style={{ fontFamily: "var(--font-italiana)" }}>
                4. Limitation of Liability
              </h2>
              <p className="mt-3 text-base sm:text-lg text-italian-taupe" style={{ lineHeight: 1.7 }}>
                To the maximum extent permitted by applicable law, Charutha shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, arising from your use of the website or services.
              </p>
            </motion.section>

            {/* Warranties & Disclaimers */}
            <motion.section variants={item}>
              <h2 className="text-2xl sm:text-3xl md:text-4xl text-italian-navy font-semibold" style={{ fontFamily: "var(--font-italiana)" }}>
                5. Warranties & Disclaimers
              </h2>
              <p className="mt-3 text-base sm:text-lg text-italian-taupe" style={{ lineHeight: 1.7 }}>
                The website and its content are provided on an "as is" and "as available" basis without warranties of any kind, either express or implied. Charutha disclaims all warranties, including implied warranties of merchantability, fitness for a particular purpose, and non-infringement to the extent permitted by law.
              </p>
            </motion.section>

            {/* Governing Law & Jurisdiction */}
            <motion.section variants={item}>
              <h2 className="text-2xl sm:text-3xl md:text-4xl text-italian-navy font-semibold" style={{ fontFamily: "var(--font-italiana)" }}>
                6. Governing Law & Jurisdiction
              </h2>
              <p className="mt-3 text-base sm:text-lg text-italian-taupe" style={{ lineHeight: 1.7 }}>
                These Terms are governed by the laws of India. Any disputes arising out of or related to these Terms shall be subject to the exclusive jurisdiction of the courts located in Kochi, Kerala, India.
              </p>
            </motion.section>

            {/* Changes to Terms */}
            <motion.section variants={item}>
              <h2 className="text-2xl sm:text-3xl md:text-4xl text-italian-navy font-semibold" style={{ fontFamily: "var(--font-italiana)" }}>
                7. Changes to Terms
              </h2>
              <p className="mt-3 text-base sm:text-lg text-italian-taupe" style={{ lineHeight: 1.7 }}>
                We may modify these Terms from time to time. Changes will be effective when posted on this page with an updated date. Your continued use of the website or services following the posting of changes constitutes acceptance of those changes.
              </p>
            </motion.section>

            {/* Contact Information */}
            <motion.section variants={item}>
              <h2 className="text-2xl sm:text-3xl md:text-4xl text-italian-navy font-semibold" style={{ fontFamily: "var(--font-italiana)" }}>
                8. Contact Information
              </h2>
              <div className="mt-3 text-base sm:text-lg text-italian-taupe space-y-2" style={{ lineHeight: 1.7 }}>
                <p>Charutha Constructions Pvt. Ltd.</p>
                <p>Fort Kochi, Kerala, India</p>
                <p>
                  Email: <a href="mailto:legal@charutha.com" className="underline underline-offset-4 decoration-italian-terracotta/50 hover-terracotta rounded-sm focus-italian px-1">legal@charutha.com</a>
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

