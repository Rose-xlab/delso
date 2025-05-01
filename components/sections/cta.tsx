"use client";

import { Button } from "@/components/ui/button";
import { MoveRight } from "lucide-react";
import { motion } from "@/lib/framer-motion";

export default function CTA() {
  return (
    <section className="py-24 bg-primary text-primary-foreground overflow-hidden relative">
      {/* Abstract background shapes */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute -top-48 -right-48 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-48 -left-48 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
      </div>
      
      <div className="container px-4 md:px-6 mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Ready to bring your ideas to life?
          </h2>
          <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Let's create something amazing together. Start your project today and see the difference that strategic design and development can make.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="rounded-full">
              Get Started
              <MoveRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="rounded-full bg-transparent border-white text-white hover:bg-white/10">
              See Our Work
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}