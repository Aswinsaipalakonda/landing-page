
import {
  Briefcase,
  LayoutGrid,
  Search,
  Palette,
  Code,
  Share2,
} from "lucide-react";
import { Card } from "@/components/ui/card";

const services = [
  {
    icon: Briefcase,
    title: "Portfolios",
    description:
      "Showcase your work with stunning portfolio websites that leave a lasting impression.",
  },
  {
    icon: LayoutGrid,
    title: "Landing Pages",
    description:
      "Convert visitors into customers with high-performing landing pages.",
  },
  {
    icon: Search,
    title: "SEO",
    description:
      "Boost your online visibility and rank higher in search results.",
  },
  {
    icon: Palette,
    title: "Graphic Design",
    description:
      "Create eye-catching visuals that communicate your brand message.",
  },
  {
    icon: Code,
    title: "Web Development",
    description:
      "Build responsive, fast-loading websites optimized for all devices.",
  },
  {
    icon: Share2,
    title: "Social Media",
    description:
      "Engage your audience with compelling social media strategies.",
  },
];

export function ServicesSection() {
  return (
    <section className="py-20 bg-primary-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Our Services
          </h2>
          <p className="text-primary-400 max-w-2xl mx-auto">
            Comprehensive digital solutions tailored to your business needs
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <Card
              key={service.title}
              className="p-6 hover:shadow-lg transition-shadow duration-300 group bg-white"
            >
              <service.icon className="w-12 h-12 text-accent mb-4 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-xl font-semibold mb-2 text-primary">
                {service.title}
              </h3>
              <p className="text-primary-400">{service.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
