"use client";

import { Card, CardContent } from "@/components/ui/card";
import { motion } from "@/lib/framer-motion";
import { useInView } from "@/lib/framer-motion";
import { useRef } from "react";

interface CounterProps {
  value: number;
  suffix?: string;
}

function Counter({ value, suffix = "" }: CounterProps) {
  const nodeRef = useRef(null);
  const isInView = useInView(nodeRef, { once: true });
  
  return (
    <span ref={nodeRef} className="text-4xl font-bold tracking-tight">
      {isInView ? (
        <>
          {value.toLocaleString()}
          {suffix}
        </>
      ) : (
        <>0{suffix}</>
      )}
    </span>
  );
}

export default function Stats() {
  const stats = [
    { value: 200, label: "Happy Clients", suffix: "+" },
    { value: 350, label: "Projects Completed", suffix: "+" },
    { value: 15, label: "Years of Experience", suffix: "" },
    { value: 40, label: "Team Members", suffix: "" }
  ];

  return (
    <section className="py-16 bg-gradient-to-r from-primary/5 to-chart-2/5">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="text-center bg-background/50 backdrop-blur-sm border-none shadow-sm h-full">
                <CardContent className="pt-6">
                  <Counter value={stat.value} suffix={stat.suffix} />
                  <p className="text-muted-foreground mt-2">{stat.label}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}