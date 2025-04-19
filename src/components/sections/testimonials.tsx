
import { TestimonialCard } from "@/components/ui/testimonial-card"

const testimonials = [
  {
    author: {
      name: "John Smith",
      handle: "@johnsmith",
      avatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=150&h=150&fit=crop&crop=face"
    },
    text: "Working with Nexas Digi Solutions transformed our online presence. Their web development expertise is outstanding.",
  },
  {
    author: {
      name: "Sarah Johnson",
      handle: "@sarahj",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face"
    },
    text: "The digital marketing strategy they implemented doubled our leads within months. Highly recommended!",
  },
  {
    author: {
      name: "Michael Chen",
      handle: "@mchen",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
    },
    text: "Their SEO expertise helped us reach the top of search results. The results speak for themselves.",
  }
];

export function TestimonialsSection() {
  return (
    <section className="bg-[#0B0014] text-white py-12 sm:py-24 md:py-32 px-0">
      <div className="mx-auto flex max-w-container flex-col items-center gap-4 text-center sm:gap-16">
        <div className="flex flex-col items-center gap-4 px-4 sm:gap-8">
          <span className="text-sm text-cyan-400">Testimonials</span>
          <h2 className="max-w-[720px] text-3xl font-semibold leading-tight sm:text-5xl sm:leading-tight">
            What Our Clients <span className="text-purple-500">Say</span>
          </h2>
          <p className="text-md max-w-[600px] font-medium text-purple-300 sm:text-xl">
            Discover why businesses choose us for their digital transformation journey
          </p>
        </div>

        <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
          <div className="group flex overflow-hidden p-2 [--gap:1rem] [gap:var(--gap)] flex-row [--duration:40s]">
            <div className="flex shrink-0 justify-around [gap:var(--gap)] animate-marquee flex-row group-hover:[animation-play-state:paused]">
              {[...Array(4)].map((_, setIndex) => (
                testimonials.map((testimonial, i) => (
                  <TestimonialCard 
                    key={`${setIndex}-${i}`}
                    {...testimonial}
                  />
                ))
              ))}
            </div>
          </div>

          <div className="pointer-events-none absolute inset-y-0 left-0 hidden w-1/3 bg-gradient-to-r from-[#0B0014] sm:block" />
          <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-1/3 bg-gradient-to-l from-[#0B0014] sm:block" />
        </div>
      </div>
    </section>
  );
}
