
import { Award, Clock, Users, Zap } from "lucide-react";
import { GlowingEffect } from "@/components/ui/glowing-effect";

const features = [
  {
    icon: Users,
    title: "Expert Team",
    description:
      "Our seasoned professionals bring years of industry expertise to your projects.",
  },
  {
    icon: Award,
    title: "Proven Results",
    description:
      "Track record of delivering successful digital solutions that drive growth.",
  },
  {
    icon: Zap,
    title: "Customized Solutions",
    description:
      "Tailored strategies that align perfectly with your business objectives.",
  },
  {
    icon: Clock,
    title: "Fast Turnaround",
    description:
      "Quick delivery without compromising on quality and attention to detail.",
  },
];

export function WhyChooseUs() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {features.map((feature, index) => (
        <div key={feature.title} className="min-h-[16rem]">
          <div className="relative h-full rounded-[1.25rem] border-[0.75px] border-purple-900/20 p-2">
            <GlowingEffect
              spread={40}
              glow={true}
              disabled={false}
              proximity={64}
              inactiveZone={0.01}
              borderWidth={3}
            />
            <div className="relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl border-[0.75px] border-purple-900/20 bg-[#0B0014] p-6 shadow-sm">
              <div className="relative flex flex-1 flex-col justify-between gap-3">
                <div className="w-fit rounded-lg border-[0.75px] border-purple-900/20 bg-purple-950/30 p-3">
                  <feature.icon className="w-8 h-8 text-purple-400" />
                </div>
                <div className="space-y-3">
                  <h3 className="text-xl font-semibold text-purple-100">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-purple-300">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
