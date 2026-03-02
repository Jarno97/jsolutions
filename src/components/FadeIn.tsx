"use client";

import { useEffect, useRef, useState, ReactNode } from "react";

type AnimationType = "up" | "down" | "left" | "right" | "scale";

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  direction?: AnimationType;
  threshold?: number;
}

export default function FadeIn({ 
  children, 
  delay = 0, 
  className = "", 
  direction = "up",
  threshold = 0.1
}: FadeInProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [threshold]);

  const getAnimationClass = () => {
    if (!isVisible) return "opacity-0";
    
    switch (direction) {
      case "down":
        return "animate-fade-in-down";
      case "left":
        return "animate-fade-in-left";
      case "right":
        return "animate-fade-in-right";
      case "scale":
        return "animate-fade-in-scale";
      default:
        return "animate-fade-in-up";
    }
  };

  return (
    <div
      ref={ref}
      className={`${getAnimationClass()} ${className}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
