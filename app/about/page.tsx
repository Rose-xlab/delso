"use client";

import { motion } from "@/lib/framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChefHat, Users, Globe, Award } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <div className="min-h-screen pt-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-4 py-16 md:py-24"
      >
        {/* Hero Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl font-bold tracking-tight mb-6">
            About Kitchen Assistant
          </h1>
          <p className="text-xl text-muted-foreground">
            We're revolutionizing home cooking with AI-powered recipe generation, making it easier for everyone to create delicious meals.
          </p>
        </div>

        {/* Mission Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="relative aspect-square rounded-2xl overflow-hidden">
              <Image
                src="https://images.pexels.com/photos/3184183/pexels-photo-3184183.jpeg"
                alt="Our Mission"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
            <p className="text-muted-foreground mb-6">
              At Kitchen Assistant, we believe everyone should be able to cook delicious, healthy meals at home. Our AI-powered platform makes cooking accessible, enjoyable, and waste-free by helping you create perfect recipes from the ingredients you already have.
            </p>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0 mr-4">
                  <ChefHat className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-medium mb-1">Personalized Cooking</h3>
                  <p className="text-muted-foreground">Recipes tailored to your preferences and dietary needs</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0 mr-4">
                  <Globe className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-medium mb-1">Global Cuisine</h3>
                  <p className="text-muted-foreground">Discover recipes from around the world</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

       

        {/* Team Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Team</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We're a passionate team of chefs, developers, and AI specialists working together to revolutionize home cooking.
          </p>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Card className="bg-primary text-primary-foreground">
            <CardContent className="p-12">
              <h2 className="text-3xl font-bold mb-4">Ready to Start Cooking?</h2>
              <p className="mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
                Join thousands of home cooks who are already creating amazing meals with Kitchen Assistant.
              </p>
              <Button size="lg" variant="secondary" asChild>
                <Link href="/#generator">Try Recipe Generator</Link>
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>
    </div>
  );
}