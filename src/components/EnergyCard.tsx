import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface EnergyCardProps {
  children: ReactNode;
  className?: string;
  glowColor?: 'cyan' | 'purple' | 'green' | 'blue';
  delay?: number;
}

const glowStyles = {
  cyan: 'border-primary/30 hover:border-primary/60 hover:shadow-[0_0_30px_hsl(var(--primary)/0.3)]',
  purple: 'border-accent/30 hover:border-accent/60 hover:shadow-[0_0_30px_hsl(var(--accent)/0.3)]',
  green: 'border-energy-green/30 hover:border-energy-green/60 hover:shadow-[0_0_30px_hsl(var(--energy-green)/0.3)]',
  blue: 'border-energy-blue/30 hover:border-energy-blue/60 hover:shadow-[0_0_30px_hsl(var(--energy-blue)/0.3)]',
};

const EnergyCard = ({ children, className = '', glowColor = 'cyan', delay = 0 }: EnergyCardProps) => {
  return (
    <motion.div
      className={`relative bg-card/80 backdrop-blur-sm rounded-lg border transition-all duration-500 overflow-hidden ${glowStyles[glowColor]} ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -5 }}
    >
      {/* Corner accents */}
      <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-primary/50 rounded-tl-lg" />
      <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-primary/50 rounded-tr-lg" />
      <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-primary/50 rounded-bl-lg" />
      <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-primary/50 rounded-br-lg" />

      {/* Scan line effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent pointer-events-none"
        initial={{ opacity: 0, y: '-100%' }}
        whileHover={{ opacity: 1, y: '100%' }}
        transition={{ duration: 1 }}
      />

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
};

export default EnergyCard;
