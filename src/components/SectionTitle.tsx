import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface SectionTitleProps {
  icon: LucideIcon;
  title: string;
  subtitle: string;
}

const SectionTitle = ({ icon: Icon, title, subtitle }: SectionTitleProps) => {
  return (
    <motion.div
      className="flex items-center gap-4 mb-8"
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: false, amount: 0.3 }} // repeat animation whenever 30% visible
      transition={{ duration: 5, delay: 0.8, ease: 'easeInOut' , repeat: Infinity }}
    >
      {/* Icon container */}
      <motion.div
        className="relative w-14 h-14 rounded-lg bg-card border border-primary/30 flex items-center justify-center"
        whileHover={{ scale: 1.05 }}
      >
        <Icon className="w-7 h-7 text-primary" />

        {/* Pulse effect */}
        <motion.div
          className="absolute inset-0 rounded-lg border border-primary/50"
          animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0, 0.5] }}
          transition={{ duration: 10, repeat: Infinity }}
        />
      </motion.div>

      {/* Text */}
      <div>
        <h2 className="font-orbitron text-xl lg:text-2xl font-bold text-foreground glow-text-subtle">
          {title}
        </h2>
        <p className="font-mono text-sm text-muted-foreground">{subtitle}</p>
      </div>

      {/* Decorative line */}
      <div className="flex-1 h-px bg-gradient-to-r from-primary/50 via-primary/20 to-transparent ml-4" />
    </motion.div>
  );
};

export default SectionTitle;
