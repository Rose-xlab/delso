import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FacebookIcon, TwitterIcon, InstagramIcon, LinkedinIcon, GithubIcon } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-muted py-12 mt-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <Link href="/" className="inline-block mb-4">
              <span className="text-xl font-bold tracking-tight">Cooking Assistant</span>
            </Link>
            <p className="text-sm text-muted-foreground mb-4">
              AI-powered recipe generation for delicious, personalized meals.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" aria-label="Facebook">
                <FacebookIcon className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" aria-label="Twitter">
                <TwitterIcon className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" aria-label="Instagram">
                <InstagramIcon className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" aria-label="LinkedIn">
                <LinkedinIcon className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" aria-label="GitHub">
                <GithubIcon className="h-4 w-4" />
              </Button>
            </div>
          </div>
          
          <div>
            <h3 className="font-medium text-sm mb-4">Navigation</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/#recipes" className="text-muted-foreground hover:text-foreground transition-colors">
                  Recipes
                </Link>
              </li>
              <li>
                <Link href="/#categories" className="text-muted-foreground hover:text-foreground transition-colors">
                  Categories
                </Link>
              </li>
              <li>
                <Link href="/#how-it-works" className="text-muted-foreground hover:text-foreground transition-colors">
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-foreground transition-colors">
                  About Us
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium text-sm mb-4">Legal</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/privacy" className="text-muted-foreground hover:text-foreground transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-muted-foreground hover:text-foreground transition-colors">
                  Terms of Use
                </Link>
              </li>
              <li>
                <Link href="/data-deletion" className="text-muted-foreground hover:text-foreground transition-colors">
                  Data Deletion
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium text-sm mb-4">Subscribe</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Get weekly recipe inspiration and cooking tips.
            </p>
            <div className="flex space-x-2">
              <Input placeholder="Your email" className="max-w-[200px]" />
              <Button size="sm">Subscribe</Button>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Cooking Assistant. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}