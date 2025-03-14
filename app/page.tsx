"use client";

import { Button } from "@/components/ui/button";
import Footer from "@/components/footer";
import Contact from "@/components/contact";
import Hero from "@/components/hero";

export default function Home() {
  return (
    <>
    <main className="min-h-screen bg-white px-[80px]">
      {/* Hero Section */}
      <Hero />
      {/* CTA Buttons */}
      <div className="flex gap-4 justify-center pb-12">
        <Button 
          className="rounded-full px-8 bg-[#BC1972] hover:bg-[#F9F9F9] text-[#F9F9F9] hover:text-[#BC1972] w-24"
        >
          Book a Demo
        </Button>
        <Button 
          variant="outline" 
          className="rounded-full px-8 border-[#BC1972] text-[#BC1972] hover:bg-[#BC1972] hover:text-[#F9F9F9] w-24"
        >
          Contact Us
        </Button>
      </div>
      {/* Contact Section */}
      <Contact />
    </main>
    <Footer />
    </>
  );
}
