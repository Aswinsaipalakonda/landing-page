
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-primary-100 to-white">
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]" />
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="text-center space-y-8 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-primary animate-fadeIn">
            Transform Your Digital Presence with Expert Solutions
          </h1>
          <p className="text-xl md:text-2xl text-primary-400 animate-fadeIn [animation-delay:200ms]">
            We craft digital experiences that captivate, convert, and drive growth
            for your business
          </p>
          <div className="animate-fadeIn [animation-delay:400ms]">
            <Button size="lg" className="bg-accent hover:bg-accent/90">
              Get a Free Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
