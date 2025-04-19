import { FloatingWhatsApp } from "@/components/ui/floating-whatsapp";
import { HeroSection } from "@/components/ui/shape-landing-hero";
import { FeaturesSectionWithHoverEffects } from "@/components/blocks/feature-section-with-hover-effects";
import { WhyChooseUs } from "@/components/sections/why-choose-us";
import { TestimonialsSection } from "@/components/sections/testimonials";
import { ContactSection } from "@/components/sections/contact";
import { Footer } from "@/components/sections/footer";
import { NavBar } from "@/components/ui/tubelight-navbar";
import { Home, Briefcase, Heart, Phone } from "lucide-react";

const Index = () => {
  const navItems = [
    { name: 'Home', url: '#home', icon: Home },
    { name: 'Services', url: '#services', icon: Briefcase },
    { name: 'Why Us', url: '#why-choose-us', icon: Heart },
    { name: 'Contact', url: '#contact', icon: Phone }
  ];

  return (
    <div className="min-h-screen bg-[#0B0014]" id="home">
      <nav className="fixed top-0 left-0 w-full z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <img 
            src="/lovable-uploads/696faec1-bf1e-4c5b-9cb8-5c2020bc01e4.png" 
            alt="Nexas Digi Solutions" 
            className="h-20"
          />
          <NavBar items={navItems} className="sm:relative sm:translate-x-0 sm:left-0" />
        </div>
      </nav>
      <HeroSection 
        title="Welcome to Nexas Digi Solutions"
        subtitle={{
          regular: "Transform your ideas into",
          gradient: "Digital Excellence",
        }}
        description="We craft beautiful websites, optimize your online presence, and build your digital success story. Your partner in the digital transformation journey."
        ctaText="Get a Free Consultation"
        ctaHref="#contact"
      />
      <div className="bg-[#0B0014]" id="services">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Our <span className="text-purple-500">Services</span>
          </h2>
          <FeaturesSectionWithHoverEffects />
        </div>
      </div>
      <div className="bg-[#0B0014] py-20" id="why-choose-us">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Why Choose <span className="text-purple-500">Us</span>
          </h2>
          <WhyChooseUs />
        </div>
      </div>
      <TestimonialsSection />
      <div className="py-20" id="contact">
        <ContactSection />
      </div>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default Index;
