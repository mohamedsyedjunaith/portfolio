import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
}

const EnergyBackground = () => {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const newParticles: Particle[] = [];
    for (let i = 0; i < 30; i++) {
      newParticles.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 4 + 1,
        duration: Math.random() * 10 + 5,
        delay: Math.random() * 5,
      });
    }
    setParticles(newParticles);
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Base gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary/20" />
      
      {/* Grid pattern */}
      <div className="absolute inset-0 grid-pattern" />
      
      {/* Radial glow at center */}
      <div className="absolute inset-0 bg-grid-gradient" />
      
      {/* Animated gradient orbs */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-primary/5 blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-accent/5 blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Floating particles */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-primary/60"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: particle.size,
            height: particle.size,
          }}
          animate={{
            y: [0, -50, 0],
            x: [0, Math.random() * 30 - 15, 0],
            opacity: [0.2, 0.8, 0.2],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: 'easeInOut',
          }}
        />
      ))}

      {/* Horizontal scan lines */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"
          style={{ top: `${20 + i * 15}%` }}
          animate={{
            opacity: [0, 0.5, 0],
            scaleX: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            delay: i * 0.8,
            ease: 'easeInOut',
          }}
        />
      ))}

      {/* Corner accents */}
      <svg className="absolute top-0 left-0 w-32 h-32 text-primary/20">
        <path d="M0 32 L0 0 L32 0" fill="none" stroke="currentColor" strokeWidth="1" />
        <path d="M0 64 L0 0 L64 0" fill="none" stroke="currentColor" strokeWidth="0.5" />
      </svg>
      
      <svg className="absolute top-0 right-0 w-32 h-32 text-primary/20 rotate-90">
        <path d="M0 32 L0 0 L32 0" fill="none" stroke="currentColor" strokeWidth="1" />
        <path d="M0 64 L0 0 L64 0" fill="none" stroke="currentColor" strokeWidth="0.5" />
      </svg>
      
      <svg className="absolute bottom-0 left-0 w-32 h-32 text-primary/20 -rotate-90">
        <path d="M0 32 L0 0 L32 0" fill="none" stroke="currentColor" strokeWidth="1" />
        <path d="M0 64 L0 0 L64 0" fill="none" stroke="currentColor" strokeWidth="0.5" />
      </svg>
      
      <svg className="absolute bottom-0 right-0 w-32 h-32 text-primary/20 rotate-180">
        <path d="M0 32 L0 0 L32 0" fill="none" stroke="currentColor" strokeWidth="1" />
        <path d="M0 64 L0 0 L64 0" fill="none" stroke="currentColor" strokeWidth="0.5" />
      </svg>
    </div>
  );
};

export default EnergyBackground;
