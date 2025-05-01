import React from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";

export default function Newsletter() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container px-4 md:px-6">
        <Card className="p-8">
          <div className="flex flex-col items-center text-center space-y-4">
            <Mail className="h-12 w-12 text-primary" />
            <h2 className="text-3xl font-bold tracking-tighter">
              Subscribe to Our Newsletter
            </h2>
            <p className="text-gray-500 max-w-[600px]">
              Stay updated with our latest recipes, cooking tips, and exclusive offers.
            </p>
            <div className="flex w-full max-w-md gap-2">
              <Input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-1"
              />
              <Button>
                Subscribe
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}