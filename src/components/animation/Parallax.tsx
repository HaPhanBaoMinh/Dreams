"use client";

import { useRef, useEffect, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

interface ParallaxProps {
  children: ReactNode;
  className?: string;
  /** Speed multiplier — 0.05 is very subtle, 0.15 is noticeable */
  speed?: number;
  /** HTML tag */
  as?: React.ElementType;
}

export function Parallax({
  children,
  className,
  speed = 0.08,
  as: Tag = "div",
}: ParallaxProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    let rafId: number;

    const handleScroll = () => {
      rafId = requestAnimationFrame(() => {
        const node = ref.current;
        if (!node) return;
        const rect = node.getBoundingClientRect();
        const windowH = window.innerHeight;
        // Only calculate when element is in or near viewport
        if (rect.bottom < -200 || rect.top > windowH + 200) return;
        const center = rect.top + rect.height / 2;
        const delta = (center - windowH / 2) * speed;
        setOffset(delta);
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(rafId);
    };
  }, [speed]);

  return (
    <Tag
      ref={ref}
      className={cn(className)}
      style={{
        transform: `translateY(${offset}px)`,
        transition: "transform 0.1s linear",
        willChange: "transform",
      }}
    >
      {children}
    </Tag>
  );
}
