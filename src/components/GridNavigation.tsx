import { motion } from 'framer-motion';
import { useState } from 'react';
import { 
  User, 
  Trophy, 
  GraduationCap, 
  Cpu, 
  Folder, 
  Award, 
  Mail 
} from 'lucide-react';

interface GridNavigationProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

const sections = [
  { id: 'about', label: 'CONTROL NODE', icon: User, description: 'About Me' },
  { id: 'achievements', label: 'ENERGY TIMELINE', icon: Trophy, description: 'Achievements' },
  { id: 'education', label: 'KNOWLEDGE REACTORS', icon: GraduationCap, description: 'Education' },
  { id: 'skills', label: 'SKILL TRANSFORMERS', icon: Cpu, description: 'Technical Skills' },
  { id: 'projects', label: 'PROJECT SUBSTATIONS', icon: Folder, description: 'Projects' },
  { id: 'certifications', label: 'CERTIFICATION GRID', icon: Award, description: 'Certifications' },
  { id: 'contact', label: 'CONTACT PANEL', icon: Mail, description: 'Get in Touch' },
];

const GridNavigation = ({ activeSection, onSectionChange }: GridNavigationProps) => {
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);

  return (
    <nav className="fixed left-0 top-0 h-full w-20 lg:w-24 z-40 flex flex-col items-center justify-center py-8 bg-background/50 backdrop-blur-sm border-r border-border/50">
      {/* Central vertical line */}
      <div className="absolute left-1/2 top-8 bottom-8 w-px bg-gradient-to-b from-transparent via-primary/30 to-transparent" />
      
      {/* Energy flow animation on the line */}
      <motion.div
        className="absolute left-1/2 w-1 h-8 bg-gradient-to-b from-transparent via-primary to-transparent rounded-full"
        style={{ marginLeft: '-1px' }}
        animate={{ top: ['5%', '90%', '5%'] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
      />

      <div className="flex flex-col items-center gap-4 lg:gap-6">
        {sections.map((section, index) => {
          const Icon = section.icon;
          const isActive = activeSection === section.id;
          const isHovered = hoveredNode === section.id;

          return (
            <motion.div
              key={section.id}
              className="relative"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              {/* Connection dot to central line */}
              <div className="absolute left-1/2 top-1/2 w-8 h-px bg-primary/30" style={{ transform: 'translate(-100%, -50%)' }} />
              
              {/* Node button */}
              <motion.button
                className={`relative w-12 h-12 lg:w-14 lg:h-14 rounded-full flex items-center justify-center transition-all duration-300 ${
                  isActive
                    ? 'bg-primary glow-cyan-intense'
                    : 'bg-card border border-primary/30 hover:border-primary/60'
                }`}
                onClick={() => onSectionChange(section.id)}
                onMouseEnter={() => setHoveredNode(section.id)}
                onMouseLeave={() => setHoveredNode(null)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Icon className={`w-5 h-5 lg:w-6 lg:h-6 ${isActive ? 'text-primary-foreground' : 'text-primary'}`} />
                
                {/* Pulse ring on active */}
                {isActive && (
                  <motion.div
                    className="absolute inset-0 rounded-full border-2 border-primary"
                    animate={{ scale: [1, 1.3, 1], opacity: [0.8, 0, 0.8] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                )}

                {/* Spark effect on hover */}
                {isHovered && !isActive && (
                  <>
                    {[...Array(4)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-primary rounded-full"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{
                          opacity: [0, 1, 0],
                          scale: [0.5, 1, 0.5],
                          x: Math.cos((i * Math.PI) / 2) * 25,
                          y: Math.sin((i * Math.PI) / 2) * 25,
                        }}
                        transition={{ duration: 0.5, delay: i * 0.1 }}
                      />
                    ))}
                  </>
                )}
              </motion.button>

              {/* Tooltip */}
              <motion.div
                className="absolute left-full ml-4 top-1/2 -translate-y-1/2 whitespace-nowrap pointer-events-none"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: isHovered ? 1 : 0, x: isHovered ? 0 : -10 }}
                transition={{ duration: 0.2 }}
              >
                <div className="bg-card/90 backdrop-blur-sm border border-primary/30 rounded-lg px-3 py-2">
                  <p className="font-orbitron text-xs text-primary glow-text-subtle">{section.label}</p>
                  <p className="text-xs text-muted-foreground">{section.description}</p>
                </div>
              </motion.div>
            </motion.div>
          );
        })}
      </div>
    </nav>
  );
};

export default GridNavigation;
