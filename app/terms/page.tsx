"use client";

import { motion } from "@/lib/framer-motion";

export default function TermsOfUse() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="container max-w-4xl mx-auto px-4 py-16 md:py-24"
    >
      <h1 className="text-4xl font-bold mb-8">Terms of Use</h1>
      
      <div className="prose dark:prose-invert max-w-none space-y-6">
        <section>
          <h2 className="text-2xl font-semibold mb-4">Agreement to Terms</h2>
          <p className="text-muted-foreground">
            By accessing and using Cooking Assistant, you agree to be bound by these Terms of Use and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Use License</h2>
          <ul className="list-disc pl-6 text-muted-foreground">
            <li>Permission is granted to temporarily access the materials on Cooking Assistant's website for personal, non-commercial use only.</li>
            <li>This license shall automatically terminate if you violate any of these restrictions.</li>
            <li>Upon termination, you must destroy any downloaded materials in your possession.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">User Content</h2>
          <p className="text-muted-foreground">
            By submitting content to our platform, you grant us a worldwide, non-exclusive, royalty-free license to use, reproduce, adapt, publish, translate, and distribute your content.
          </p>
          <p className="text-muted-foreground mt-2">
            You represent and warrant that:
          </p>
          <ul className="list-disc pl-6 text-muted-foreground">
            <li>You own or have the necessary rights to the content you submit</li>
            <li>The content does not violate any third-party rights</li>
            <li>The content complies with these Terms of Use and applicable law</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Disclaimer</h2>
          <ul className="list-disc pl-6 text-muted-foreground">
            <li>The materials on Cooking Assistant's website are provided on an 'as is' basis.</li>
            <li>We make no warranties, expressed or implied, and hereby disclaim all warranties.</li>
            <li>We do not guarantee the accuracy or reliability of any recipes or content.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Limitations</h2>
          <p className="text-muted-foreground">
            In no event shall Cooking Assistant or its suppliers be liable for any damages arising out of the use or inability to use the materials on our website.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Account Responsibilities</h2>
          <ul className="list-disc pl-6 text-muted-foreground">
            <li>You are responsible for maintaining the confidentiality of your account.</li>
            <li>You agree to accept responsibility for all activities that occur under your account.</li>
            <li>You must notify us immediately of any unauthorized use of your account.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Prohibited Activities</h2>
          <p className="text-muted-foreground">
            You may not:
          </p>
          <ul className="list-disc pl-6 text-muted-foreground">
            <li>Use the service for any illegal purpose</li>
            <li>Upload malicious code or content</li>
            <li>Attempt to gain unauthorized access to our systems</li>
            <li>Interfere with other users' enjoyment of the service</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Modifications</h2>
          <p className="text-muted-foreground">
            We reserve the right to revise these Terms of Use at any time without notice. By using this website, you agree to be bound by the current version of these Terms of Use.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
          <p className="text-muted-foreground">
            If you have any questions about these Terms of Use, please contact us at terms@cookingassistant.com
          </p>
        </section>

        <p className="text-sm text-muted-foreground mt-8">
          Last Updated: March 19, 2024
        </p>
      </div>
    </motion.div>
  );
}