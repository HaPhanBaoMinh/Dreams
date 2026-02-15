"use client";

import { useRef, useEffect, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

interface FadeInProps {
  children: ReactNode;
  className?: string;
  /** Delay in ms before the animation starts */
  delay?: number;
  /** Direction the element fades in from */
  direction?: "up" | "down" | "left" | "right" | "none";
  /** Distance in px the element travels */
  distance?: number;
  /** Duration in ms */
  duration?: number;
  /** IntersectionObserver threshold (0–1) */
  threshold?: number;
  /** If true, animation replays every time element enters viewport */
  once?: boolean;
  /** HTML tag to render */
  as?: React.ElementType;
}

export function FadeIn({
  children,
  className,
  delay = 0,
  direction = "up",
  distance = 30,
  duration = 800,
  threshold = 0.15,
  once = true,
  as: Tag = "div",
}: FadeInProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once) observer.unobserve(node);
        } else if (!once) {
          setIsVisible(false);
        }
      },
      { threshold, rootMargin: "0px 0px -60px 0px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold, once]);

  const translateMap = {
    up: `translateY(${distance}px)`,
    down: `translateY(-${distance}px)`,
    left: `translateX(${distance}px)`,
    right: `translateX(-${distance}px)`,
    none: "none",
  };

  return (
    <Tag
      ref={ref}
      className={cn(className)}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "none" : translateMap[direction],
        transition: `opacity ${duration}ms cubic-bezier(0.25, 0.1, 0.25, 1) ${delay}ms, transform ${duration}ms cubic-bezier(0.25, 0.1, 0.25, 1) ${delay}ms`,
        willChange: "opacity, transform",
      }}
    >
      {children}
    </Tag>
  );
}

/**
 * Stagger wrapper — renders children with incremental delays.
 * Wrap grid/list items for an Apple-style cascading reveal.
 */
interface StaggerProps {
  children: ReactNode[];
  className?: string;
  /** Base delay before first item (ms) */
  baseDelay?: number;
  /** Delay increment between items (ms) */
  stagger?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  distance?: number;
  duration?: number;
}

export function Stagger({
  children,
  className,
  baseDelay = 0,
  stagger = 100,
  direction = "up",
  distance = 30,
  duration = 800,
}: StaggerProps) {
  return (
    <div className={className}>
      {children.map((child, i) => (
        <FadeIn
          key={i}
          delay={baseDelay + i * stagger}
          direction={direction}
          distance={distance}
          duration={duration}
        >
          {child}
        </FadeIn>
      ))}
    </div>
  );
}
