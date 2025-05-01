"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CodeIcon, PaletteIcon, BarChartIcon, GlobeIcon, UsersIcon, LightbulbIcon } from "lucide-react";
import { motion } from "@/lib/framer-motion";

const services = [
  {
    icon: <CodeIcon className="h-6 w-6" />,
    title: "Web Development",
    description: "We build modern, scalable websites and web applications using the latest technologies."
  },
  {
    icon: <PaletteIcon className="h-6 w-6" />,
    title: "UI/UX Design",
    description: "Creating intuitive, engaging user experiences and beautiful interfaces that convert."
  },
  {
    icon: <BarChartIcon className="h-6 w-6" />,
    title: "Digital Marketing",
    description: "Strategies to grow your online presence and reach your target audience effectively."
  },
  {
    icon: <GlobeIcon className="h-6 w-6" />,
    title: "E-Commerce",
    description: "End-to-end e-commerce solutions to sell your products online with confidence."
  },
  {
    icon: <UsersIcon className="h-6 w-6" />,
    title: "App Development",
    description: "Mobile and web applications that engage users and solve real problems."
  },
  {
    icon: <LightbulbIcon className="h-6 w-6" />,
    title: "Brand Strategy",
    description: "Defining your brand identity and positioning for maximum market impact."
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tight mb-4">Our Services</h2>
          <p className="text-muted-foreground">
            We offer a comprehensive range of digital services to help your business thrive online.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-md transition-shadow duration-300">
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4">
                    {service.icon}
                  </div>
                  <CardTitle>{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}