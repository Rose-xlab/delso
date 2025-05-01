"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "@/lib/framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ExternalLinkIcon } from "lucide-react";

const categories = ["All", "Web Design", "Development", "E-Commerce", "Branding"];

const projects = [
  {
    id: 1,
    title: "Modern Banking Platform",
    category: "Web Design",
    image: "https://images.pexels.com/photos/3182826/pexels-photo-3182826.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    link: "#"
  },
  {
    id: 2,
    title: "E-Commerce Fashion Store",
    category: "E-Commerce",
    image: "https://images.pexels.com/photos/6567607/pexels-photo-6567607.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    link: "#"
  },
  {
    id: 3,
    title: "Food Delivery App",
    category: "Development",
    image: "https://images.pexels.com/photos/1640770/pexels-photo-1640770.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    link: "#"
  },
  {
    id: 4,
    title: "Creative Agency Rebrand",
    category: "Branding",
    image: "https://images.pexels.com/photos/3153198/pexels-photo-3153198.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    link: "#"
  },
  {
    id: 5,
    title: "Healthcare Dashboard",
    category: "Development",
    image: "https://images.pexels.com/photos/7579831/pexels-photo-7579831.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    link: "#"
  },
  {
    id: 6,
    title: "Travel Booking Platform",
    category: "Web Design",
    image: "https://images.pexels.com/photos/3935702/pexels-photo-3935702.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    link: "#"
  }
];

export default function Work() {
  const [activeCategory, setActiveCategory] = useState("All");
  
  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="work" className="py-24 bg-muted/30">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl font-bold tracking-tight mb-4">Our Work</h2>
          <p className="text-muted-foreground">
            Explore our portfolio of successful projects across various industries.
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              onClick={() => setActiveCategory(category)}
              className="rounded-full"
            >
              {category}
            </Button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="relative overflow-hidden rounded-lg bg-background shadow-md">
                <div className="aspect-video relative overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Link href={project.link} className="text-white">
                      <Button variant="outline" className="text-white border-white hover:bg-white/20 hover:text-white">
                        View Project <ExternalLinkIcon className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-medium">{project.title}</h3>
                  <p className="text-sm text-muted-foreground">{project.category}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button variant="outline" className="rounded-full">
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
}