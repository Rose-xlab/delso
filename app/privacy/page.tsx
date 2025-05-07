"use client";

import { motion } from "@/lib/framer-motion";

export default function PrivacyPolicy() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="container max-w-4xl mx-auto px-4 py-16 md:py-24"
    >
      <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
      
      <div className="prose dark:prose-invert max-w-none space-y-6">
        <section>
          <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
          <p className="text-muted-foreground">
            At Kitchen Assistant, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our website and services.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Information We Collect</h2>
          <h3 className="text-xl font-medium mb-2">Personal Information</h3>
          <ul className="list-disc pl-6 text-muted-foreground">
            <li>Email address (when you subscribe to our newsletter)</li>
            <li>Account information (if you create an account)</li>
            <li>User preferences and dietary restrictions</li>
            <li>Recipe favorites and collections</li>
          </ul>

          <h3 className="text-xl font-medium mt-4 mb-2">Usage Information</h3>
          <ul className="list-disc pl-6 text-muted-foreground">
            <li>Browser type and version</li>
            <li>Operating system</li>
            <li>Pages visited and features used</li>
            <li>Time spent on pages</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">How We Use Your Information</h2>
          <ul className="list-disc pl-6 text-muted-foreground">
            <li>To provide and maintain our service</li>
            <li>To personalize your experience</li>
            <li>To improve our website and services</li>
            <li>To send periodic emails and updates</li>
            <li>To respond to your inquiries and support requests</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Data Security</h2>
          <p className="text-muted-foreground">
            We implement appropriate security measures to protect your personal information. However, no method of transmission over the Internet is 100% secure, and we cannot guarantee absolute security.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Third-Party Services</h2>
          <p className="text-muted-foreground">
            We may use third-party services to help us operate our website or administer activities on our behalf. These parties may have access to your personal information only to perform specific tasks on our behalf and are obligated not to disclose or use it for any other purpose.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Your Rights</h2>
          <p className="text-muted-foreground">
            You have the right to:
          </p>
          <ul className="list-disc pl-6 text-muted-foreground">
            <li>Access your personal information</li>
            <li>Correct inaccurate information</li>
            <li>Request deletion of your information</li>
            <li>Object to processing of your information</li>
            <li>Data portability</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
          <p className="text-muted-foreground">
            If you have any questions about this Privacy Policy, please contact us at privacy@kitchenassistant.com
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Updates to This Policy</h2>
          <p className="text-muted-foreground">
            We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date.
          </p>
          <p className="text-sm text-muted-foreground mt-4">
            Last Updated: March 19, 2024
          </p>
        </section>
      </div>
    </motion.div>
  );
}