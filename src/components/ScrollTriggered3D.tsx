'use client';

import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

export function ScrollTriggered3D() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const element = containerRef.current;
      const rect = element.getBoundingClientRect();
      const elementTop = rect.top;
      const elementHeight = rect.height;
      const windowHeight = window.innerHeight;

      // Calculate progress (0 to 1)
      const progress = Math.max(0, Math.min(1, 1 - (elementTop - windowHeight) / (elementHeight + windowHeight)));
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const rotation = scrollProgress * 360;
  const scale = 0.5 + scrollProgress * 0.5;
  const opacity = Math.min(scrollProgress, 1);

  return (
    <div ref={containerRef} className="relative w-full min-h-screen flex items-center justify-center bg-gradient-to-b from-background to-background/50 overflow-hidden py-20">
      <div className="relative w-full h-screen flex items-center justify-center">
        {/* Rotating cube background */}
        <div
          className="absolute w-64 h-64 border-2 border-primary/30 rounded-lg"
          style={{
            transform: `rotateX(${rotation * 0.5}deg) rotateY(${rotation}deg) rotateZ(${rotation * 0.3}deg) scale(${scale})`,
            opacity: opacity,
            transition: 'all 0.1s ease-out',
          }}
        />

        <div
          className="absolute w-48 h-48 border-2 border-secondary/30 rounded-lg"
          style={{
            transform: `rotateX(${-rotation * 0.3}deg) rotateY(${-rotation * 0.7}deg) rotateZ(${rotation}deg) scale(${scale * 0.7})`,
            opacity: opacity * 0.7,
            transition: 'all 0.1s ease-out',
          }}
        />

        <div
          className="absolute w-32 h-32 border-2 border-accent/30 rounded-lg"
          style={{
            transform: `rotateX(${rotation}deg) rotateY(${rotation * 0.5}deg) rotateZ(${-rotation * 0.5}deg) scale(${scale * 0.5})`,
            opacity: opacity * 0.5,
            transition: 'all 0.1s ease-out',
          }}
        />

        {/* Center text */}
        <motion.div
          className="relative z-10 text-center"
          style={{ opacity }}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Scroll-Triggered Magic
          </h2>
          <p className="text-white/60 mb-8">
            Keep scrolling to see the 3D transformations
          </p>

          {/* Animated progress bar */}
          <div className="w-48 h-1 bg-white/10 rounded-full mx-auto overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-primary to-secondary"
              style={{
                width: `${scrollProgress * 100}%`,
              }}
            />
          </div>
        </motion.div>
      </div>

      {/* Content sections that trigger animations */}
      <div className="relative z-20 w-full px-4 md:px-8 space-y-20">
        {[1, 2, 3].map((item) => (
          <motion.div
            key={item}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false, amount: 0.3 }}
            className="p-8 rounded-xl bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/50 transition-colors"
          >
            <h3 className="text-2xl font-bold mb-4">Section {item}</h3>
            <p className="text-muted-foreground leading-relaxed">
              This section demonstrates scroll-triggered 3D transformations. As you scroll, notice how the background
              geometric shapes rotate and scale based on your scroll position. Each section reveals new content while
              maintaining smooth 3D animations.
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
