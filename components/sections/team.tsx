"use client";

import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { FacebookIcon, TwitterIcon, LinkedinIcon } from "lucide-react";
import { motion } from "@/lib/framer-motion";
import Image from "next/image";

const team = [
  {
    name: "Alex Morgan",
    role: "Founder & CEO",
    image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    social: {
      twitter: "#",
      linkedin: "#",
      facebook: "#"
    }
  },
  {
    name: "Julia Chen",
    role: "Lead Designer",
    image: "https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    social: {
      twitter: "#",
      linkedin: "#",
      facebook: "#"
    }
  },
  {
    name: "David Wilson",
    role: "Senior Developer",
    image: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    social: {
      twitter: "#",
      linkedin: "#",
      facebook: "#"
    }
  },
  {
    name: "Sophia Kim",
    role: "Project Manager",
    image: "https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    social: {
      twitter: "#",
      linkedin: "#",
      facebook: "#"
    }
  }
];

export default function Team() {
  return (
    <section id="team" className="py-24">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tight mb-4">Meet Our Team</h2>
          <p className="text-muted-foreground">
            We're a group of passionate individuals committed to excellence in digital experiences.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <Card className="overflow-hidden h-full bg-background border-none shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="relative aspect-square overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-medium">{member.name}</h3>
                  <p className="text-sm text-muted-foreground">{member.role}</p>
                </CardContent>
                <CardFooter className="flex justify-start space-x-4 pb-6">
                  <a
                    href={member.social.twitter}
                    className="text-muted-foreground hover:text-primary transition-colors"
                    aria-label={`${member.name}'s Twitter`}
                  >
                    <TwitterIcon className="h-4 w-4" />
                  </a>
                  <a
                    href={member.social.linkedin}
                    className="text-muted-foreground hover:text-primary transition-colors"
                    aria-label={`${member.name}'s LinkedIn`}
                  >
                    <LinkedinIcon className="h-4 w-4" />
                  </a>
                  <a
                    href={member.social.facebook}
                    className="text-muted-foreground hover:text-primary transition-colors"
                    aria-label={`${member.name}'s Facebook`}
                  >
                    <FacebookIcon className="h-4 w-4" />
                  </a>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}