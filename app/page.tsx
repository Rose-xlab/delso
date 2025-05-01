import Hero from "@/components/sections/hero";
import Features from "@/components/sections/features";
import PopularRecipes from "@/components/sections/popular-recipes";
import Categories from "@/components/sections/categories";
import HowItWorks from "@/components/sections/how-it-works";
import Testimonials from "@/components/sections/testimonials";
import Newsletter from "@/components/sections/newsletter";
import RecipeGenerator from "@/components/sections/recipe-generator";

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <RecipeGenerator />
      <PopularRecipes />
      <Categories />
      <HowItWorks />
      <Testimonials />
      <Newsletter />
    </>
  );
}