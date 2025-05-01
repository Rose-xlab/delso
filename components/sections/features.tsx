"use client";

import { Card, CardContent } from "@/components/ui/card";
import { motion } from "@/lib/framer-motion";
import { 
  Sparkles, 
  Clock, 
  Filter, 
  Heart, 
  Share2, 
  ShoppingCart 
} from "lucide-react";

const features = [
  {
    icon: <Sparkles className="h-6 w-6" />,
    title: "AI-Powered Recipes",
    description: "Get personalized recipe suggestions based on your preferences and available ingredients."
  },
  {
    icon: <Clock className="h-6 w-6" />,
    title: "Quick & Easy",
    description: "Find recipes that fit your schedule, from 15-minute meals to slow-cooker specialties."
  },
  {
    icon: <Filter className="h-6 w-6" />,
    title: "Dietary Filters",
    description: "Filter recipes by dietary requirements: vegetarian, vegan, gluten-free, and more."
  },
  {
    icon: <Heart className="h-6 w-6" />,
    title: "Save Favorites",
    description: "Save your favorite recipes and create custom collections for easy access."
  },
  {
    icon: <Share2 className="h-6 w-6" />,
    title: "Share & Connect",
    description: "Share recipes with friends and family, and discover community favorites."
  },
  {
    icon: <ShoppingCart className="h-6 w-6" />,
    title: "Shopping Lists",
    description: "Automatically generate shopping lists from your chosen recipes."
  }
];

export default function Features() {
  return (
    <section id="features" className="py-24 bg-muted/30">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tight mb-4">
            Smart Features for Smart Cooking
          </h2>
          <p className="text-muted-foreground">
            Discover how our AI-powered platform makes cooking easier and more enjoyable.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-md transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-medium mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}