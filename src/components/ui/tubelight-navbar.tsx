"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface NavItem {
  name: string;
  url: string;
  icon: LucideIcon;
}

interface NavBarProps {
  items: NavItem[];
  className?: string;
}

export function NavBar({ items, className }: NavBarProps) {
  const [activeTab, setActiveTab] = useState(items[0].name);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = items.map(item => ({
        name: item.name,
        element: document.querySelector(item.url)
      }));

      const currentSection = sections.find(section => {
        if (section.element) {
          const rect = section.element.getBoundingClientRect();
          return rect.top >= 0 && rect.top < window.innerHeight / 2;
        }
        return false;
      });

      if (currentSection) {
        setActiveTab(currentSection.name);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [items]);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, item: NavItem) => {
    e.preventDefault();
    const element = document.querySelector(item.url);
    if (element) {
      setActiveTab(item.name);
      element.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  };

  return (
    <div className={cn("fixed bottom-0 sm:top-0 left-1/2 -translate-x-1/2 z-50 mb-6 sm:pt-6", className)}>
      <div className="flex items-center gap-3 bg-[#0B0014]/5 border border-purple-500/20 backdrop-blur-lg py-1 px-1 rounded-full shadow-lg my-0 mx-[240px]">
        {items.map(item => {
          const Icon = item.icon;
          const isActive = activeTab === item.name;
          return (
            <a key={item.name} href={item.url} onClick={e => handleClick(e, item)} className={cn("relative cursor-pointer text-sm font-semibold px-6 py-2 rounded-full transition-colors", "text-purple-300/80 hover:text-purple-500", isActive && "bg-purple-950/30 text-purple-500")}>
              <span className="hidden md:inline">{item.name}</span>
              <span className="md:hidden">
                <Icon size={18} strokeWidth={2.5} />
              </span>
              {isActive && <motion.div layoutId="lamp" className="absolute inset-0 w-full bg-purple-500/5 rounded-full -z-10" initial={false} transition={{
                type: "spring",
                stiffness: 300,
                damping: 30
              }}>
                <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-purple-500 rounded-t-full">
                  <div className="absolute w-12 h-6 bg-purple-500/20 rounded-full blur-md -top-2 -left-2" />
                  <div className="absolute w-8 h-6 bg-purple-500/20 rounded-full blur-md -top-1" />
                  <div className="absolute w-4 h-4 bg-purple-500/20 rounded-full blur-sm top-0 left-2" />
                </div>
              </motion.div>}
            </a>
          );
        })}
      </div>
    </div>
  );
}
