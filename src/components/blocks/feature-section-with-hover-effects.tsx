
import { cn } from "@/lib/utils";
import {
  IconAdjustmentsBolt,
  IconCloud,
  IconCurrencyDollar,
  IconEaseInOut,
  IconHeart,
  IconHelp,
  IconRouteAltLeft,
  IconTerminal2,
} from "@tabler/icons-react";

const features = [
  {
    title: "Web Development",
    description:
      "Custom websites that are fast, responsive, and optimized for all devices.",
    icon: <IconTerminal2 className="h-8 w-8" />,
  },
  {
    title: "Digital Marketing",
    description:
      "Strategic campaigns that drive traffic, engagement, and conversions.",
    icon: <IconEaseInOut className="h-8 w-8" />,
  },
  {
    title: "Cost Effective",
    description:
      "Competitive pricing with maximum value for your investment.",
    icon: <IconCurrencyDollar className="h-8 w-8" />,
  },
  {
    title: "Cloud Solutions",
    description: "Reliable cloud infrastructure for your digital presence.",
    icon: <IconCloud className="h-8 w-8" />,
  },
  {
    title: "SEO Optimization",
    description: "Boost your visibility and rank higher in search results.",
    icon: <IconRouteAltLeft className="h-8 w-8" />,
  },
  {
    title: "24/7 Support",
    description:
      "Round-the-clock assistance to keep your business running smoothly.",
    icon: <IconHelp className="h-8 w-8" />,
  },
  {
    title: "Custom Solutions",
    description:
      "Tailored strategies that align perfectly with your business goals.",
    icon: <IconAdjustmentsBolt className="h-8 w-8" />,
  },
  {
    title: "Client-Focused",
    description: "Your success is our priority. We're committed to your growth.",
    icon: <IconHeart className="h-8 w-8" />,
  },
];

export function FeaturesSectionWithHoverEffects() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 relative z-10 py-10 max-w-7xl mx-auto">
      {features.map((feature, index) => (
        <Feature key={feature.title} {...feature} index={index} />
      ))}
    </div>
  );
}

const Feature = ({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r py-10 relative group/feature border-purple-800/20",
        (index === 0 || index === 4) && "lg:border-l",
        index < 4 && "lg:border-b"
      )}
    >
      {index < 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-purple-950/30 to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-purple-950/30 to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-10 text-purple-300">
        {icon}
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-purple-700 group-hover/feature:bg-purple-500 transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-purple-100">
          {title}
        </span>
      </div>
      <p className="text-sm text-purple-300 max-w-xs relative z-10 px-10">
        {description}
      </p>
    </div>
  );
};
