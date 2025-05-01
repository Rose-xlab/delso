"use client";

import { useState, useEffect, useCallback } from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { ChevronLeftIcon, ChevronRightIcon, StarIcon } from "lucide-react";
import { motion, AnimatePresence } from "@/lib/framer-motion";

const testimonials = [
  {
    id: 1,
    content: "The team at Apex Digital transformed our business. Their design work and technical capabilities exceeded our expectations and delivered real results for our company.",
    author: "Sarah Johnson",
    role: "CEO, TechFusion",
    avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    stars: 5
  },
  {
    id: 2,
    content: "Working with Apex was a game-changer for our e-commerce platform. They redesigned our site, increasing our conversion rate by 40% in just two months.",
    author: "Michael Chang",
    role: "Founder, StyleMarket",
    avatar: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    stars: 5
  },
  {
    id: 3,
    content: "The attention to detail and understanding of our brand was incredible. They didn't just build a website, they created a digital experience that perfectly represents who we are.",
    author: "Emma Wilson",
    role: "Marketing Director, Bloom Health",
    avatar: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    stars: 5
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);
  
  const nextTestimonial = useCallback(() => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % testimonials.length);
  }, []);
  
  const prevTestimonial = useCallback(() => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, []);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      nextTestimonial();
    }, 5000);
    
    return () => clearTimeout(timer);
  }, [current, nextTestimonial]);

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0
    })
  };
  
  return (
    <section id="testimonials" className="py-24">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tight mb-4">What Our Clients Say</h2>
          <p className="text-muted-foreground">
            Don't just take our word for it. Here's what our clients have to say about working with us.
          </p>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={current}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              <Card className="border-none shadow-lg">
                <CardContent className="pt-10">
                  <div className="mb-4 flex justify-center">
                    {[...Array(testimonials[current].stars)].map((_, i) => (
                      <StarIcon key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <blockquote className="text-xl text-center font-medium mb-8">
                    "{testimonials[current].content}"
                  </blockquote>
                </CardContent>
                <CardFooter className="flex flex-col items-center pb-10">
                  <Avatar className="h-16 w-16 mb-4 border-4 border-background">
                    <AvatarImage src={testimonials[current].avatar} alt={testimonials[current].author} />
                    <AvatarFallback>{testimonials[current].author.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div className="text-center">
                    <h3 className="font-medium">{testimonials[current].author}</h3>
                    <p className="text-sm text-muted-foreground">{testimonials[current].role}</p>
                  </div>
                </CardFooter>
              </Card>
            </motion.div>
          </AnimatePresence>
          
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === current ? "bg-primary" : "bg-muted hover:bg-muted-foreground/50"
                }`}
                onClick={() => {
                  setDirection(index > current ? 1 : -1);
                  setCurrent(index);
                }}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
          
          <Button
            variant="ghost"
            size="icon"
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 md:-translate-x-full hover:bg-background/80 bg-background/50 shadow-md hidden md:flex"
            onClick={prevTestimonial}
            aria-label="Previous testimonial"
          >
            <ChevronLeftIcon className="h-6 w-6" />
          </Button>
          
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 md:translate-x-full hover:bg-background/80 bg-background/50 shadow-md hidden md:flex"
            onClick={nextTestimonial}
            aria-label="Next testimonial"
          >
            <ChevronRightIcon className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </section>
  );
}