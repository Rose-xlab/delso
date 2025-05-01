"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "@/lib/framer-motion";
import { Clock, Users, ChefHat } from "lucide-react";
import Image from "next/image";

const recipes = [
  {
    title: "Creamy Garlic Pasta",
    image: "https://images.pexels.com/photos/1527603/pexels-photo-1527603.jpeg",
    time: "25 mins",
    servings: "4",
    difficulty: "Easy",
    rating: 4.8
  },
  {
    title: "Grilled Salmon Bowl",
    image: "https://images.pexels.com/photos/842142/pexels-photo-842142.jpeg",
    time: "30 mins",
    servings: "2",
    difficulty: "Medium",
    rating: 4.9
  },
  {
    title: "Vegetarian Buddha Bowl",
    image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg",
    time: "20 mins",
    servings: "2",
    difficulty: "Easy",
    rating: 4.7
  }
];

export default function PopularRecipes() {
  return (
    <section id="recipes" className="py-24">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tight mb-4">
            Popular Recipes
          </h2>
          <p className="text-muted-foreground">
            Discover our community's favorite recipes, perfectly crafted by our AI.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {recipes.map((recipe, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <Card className="overflow-hidden">
                <div className="relative aspect-video">
                  <Image
                    src={recipe.image}
                    alt={recipe.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-medium mb-2">{recipe.title}</h3>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {recipe.time}
                    </div>
                    <div className="flex items-center">
                      <Users className="h-4 w-4 mr-1" />
                      {recipe.servings}
                    </div>
                    <div className="flex items-center">
                      <ChefHat className="h-4 w-4 mr-1" />
                      {recipe.difficulty}
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <span className="text-lg font-medium">★</span>
                      <span className="ml-1">{recipe.rating}</span>
                    </div>
                    <Button variant="outline" size="sm">View Recipe</Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button size="lg" className="rounded-full">
            Explore All Recipes
          </Button>
        </div>
      </div>
    </section>
  );
}