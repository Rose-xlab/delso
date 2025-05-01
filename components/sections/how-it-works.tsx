"use client";

import { Card, CardContent } from "@/components/ui/card";
import { motion } from "@/lib/framer-motion";
import { Search, Sparkles, Utensils } from "lucide-react";

const steps = [
  {
    icon: <Search className="h-8 w-8" />,
    title: "Tell Us What You Have",
    description: "Input your available ingredients and dietary preferences."
  },
  {
    icon: <Sparkles className="h-8 w-8" />,
    title: "AI Magic",
    description: "Our AI analyzes thousands of recipes to find the perfect match."
  },
  {
    icon: <Utensils className="h-8 w-8" />,
    title: "Start Cooking",
    description: "Get detailed instructions and start creating delicious meals."
  }
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tight mb-4">
            How It Works
          </h2>
          <p className="text-muted-foreground">
            Transform your ingredients into delicious meals in three simple steps.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative"
            >
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 right-0 w-full h-0.5 bg-border -translate-y-1/2 translate-x-1/2" />
              )}
              <Card className="relative bg-background border-none shadow-md">
                <CardContent className="pt-6 text-center">
                  <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center text-primary mb-6">
                    {step.icon}
                  </div>
                  <h3 className="text-xl font-medium mb-2">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}