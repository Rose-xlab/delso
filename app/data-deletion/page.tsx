"use client";

import { motion } from "@/lib/framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { useState } from "react";
import { Mail } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import { Toaster } from "@/components/ui/toaster";
import Link from "next/link";

export default function DataDeletion() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Request received",
        description: "We'll process your data deletion request within 30 days.",
      });
      setIsSubmitting(false);
      setEmail("");
    }, 1500);
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="container max-w-4xl mx-auto px-4 py-16 md:py-24"
      >
      <h1 className="text-4xl font-bold mb-6">Data Deletion Request</h1>
      
      <div className="prose dark:prose-invert max-w-none space-y-6 mb-10">
        <p className="text-muted-foreground">
          In compliance with Facebook's Platform Policy, we provide this tool for users who wish to delete their data from Cooking Assistant.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">How We Handle Your Data</h2>
        <p className="text-muted-foreground">
          Cooking Assistant collects and stores certain user data to provide personalized recipe recommendations and features. This may include:
        </p>
        <ul className="list-disc pl-6 text-muted-foreground">
          <li>Account information</li>
          <li>Dietary preferences</li>
          <li>Recipe history and favorites</li>
          <li>User-generated content (saved recipes, notes, etc.)</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Your Data Deletion Options</h2>
        <p className="text-muted-foreground">
          You have two options to request deletion of your personal data:
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <Card>
          <CardContent className="p-6">
            <h3 className="text-xl font-medium mb-3">Option 1: Use the Form Below</h3>
            <p className="text-muted-foreground mb-4">
              Submit your email address, and we'll process the deletion of all associated data within 30 days.
            </p>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="flex gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  required
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                />
                <Button type="submit" disabled={isSubmitting}>
                  {isSubmitting ? "Submitting..." : "Submit"}
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <h3 className="text-xl font-medium mb-3">Option 2: Contact Us</h3>
            <p className="text-muted-foreground mb-4">
              You can email our data protection team directly with your request.
            </p>
            <div className="flex items-center gap-2 text-primary">
              <Mail className="h-4 w-4" />
              <a href="mailto:privacy@cookingassistant.com" className="hover:underline">
                privacy@cookingassistant.com
              </a>
            </div>
          </CardContent>
        </Card>
      </div>

      <Separator className="my-8" />

      <div className="prose dark:prose-invert max-w-none space-y-6">
        <h2 className="text-2xl font-semibold mb-4">What Happens After Your Request</h2>
        <p className="text-muted-foreground">
          When we receive your data deletion request:
        </p>
        <ol className="list-decimal pl-6 text-muted-foreground">
          <li>We'll verify your identity as the data owner</li>
          <li>We'll delete all personal data associated with your account within 30 days</li>
          <li>You'll receive confirmation when your data has been deleted</li>
          <li>If you've used Facebook Login, we'll also notify Facebook of the deletion</li>
        </ol>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Data Retention</h2>
        <p className="text-muted-foreground">
          We may retain certain anonymized, aggregated data that cannot be linked back to you. We may also retain limited information as required to comply with legal obligations, resolve disputes, and enforce our agreements.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Third-Party Data</h2>
        <p className="text-muted-foreground">
          Please note that deleting your data from our systems does not affect data that may have been shared with third parties with your consent prior to deletion. You may need to contact those third parties directly.
        </p>
        
        <p className="text-sm text-muted-foreground mt-8">
          Last Updated: May 1, 2025
        </p>
      </div>
    </motion.div>
    <Toaster />
    </>
  );
}