"use client";

import { Card, CardContent } from "@/components/ui/card";
import { motion } from "@/lib/framer-motion";
import Image from "next/image";
import Link from "next/link";

const categories = [
  {
    name: "Quick & Easy",
    image: "https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg",
    count: "156 recipes"
  },
  {
    name: "Vegetarian",
    image: "https://images.pexels.com/photos/1640773/pexels-photo-1640773.jpeg",
    count: "142 recipes"
  },
  {
    name: "Desserts",
    image: "https://images.pexels.com/photos/1126359/pexels-photo-1126359.jpeg",
    count: "89 recipes"
  },
  {
    name: "Healthy",
    image: "https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg",
    count: "124 recipes"
  },
  {
    name: "Breakfast",
    image: "https://images.pexels.com/photos/1640775/pexels-photo-1640775.jpeg",
    count: "98 recipes"
  },
  {
    name: "Dinner",
    image: "https://images.pexels.com/photos/1640776/pexels-photo-1640776.jpeg",
    count: "167 recipes"
  }
];

export default function Categories() {
  return (
    <section id="categories" className="py-24 bg-muted/30">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tight mb-4">
            Recipe Categories
          </h2>
          <p className="text-muted-foreground">
            Browse recipes by category to find exactly what you're looking for.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Link href={`/categories/${category.name.toLowerCase()}`}>
                <Card className="group cursor-pointer overflow-hidden">
                  <div className="relative aspect-[4/3]">
                    <Image
                      src={category.image}
                      alt={category.name}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <h3 className="text-xl font-medium mb-1">{category.name}</h3>
                      <p className="text-sm opacity-90">{category.count}</p>
                    </div>
                  </div>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}