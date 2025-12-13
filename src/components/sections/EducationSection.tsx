import { motion } from 'framer-motion';
import { GraduationCap, BookOpen, School } from 'lucide-react';
import SectionTitle from '../SectionTitle';
import EnergyCard from '../EnergyCard';

const education = [
  {
    icon: GraduationCap,
    degree: 'B.E. in Electronics & Electrical Engineering (Hons.)',
    institution: 'Kongu Engineering College',
    location: 'Perundurai, Erode',
    grade: 'CGPA: 9.02',
    gradeNote: '(up to 4th semester)',
    status: 'In Progress',
    color: 'cyan',
  },
  {
    icon: BookOpen,
    degree: 'Higher Secondary (HSC)',
    institution: 'Periyar Centenary Memorial Matric School',
    location: '',
    grade: 'Percentage: 83.3%',
    gradeNote: '',
    status: '2023',
    color: 'purple',
  },
  {
    icon: School,
    degree: 'SSLC',
    institution: 'Seventh Day Adventist Matric School',
    location: '',
    grade: '',
    gradeNote: '',
    status: '2021',
    color: 'green',
  },
];

const EducationSection = () => {
  return (
    <section id="education" className="min-h-screen py-20 px-4">
      <SectionTitle 
        icon={GraduationCap} 
        title="KNOWLEDGE REACTORS" 
        subtitle="// Educational Background" 
      />

      <div className="grid gap-6 max-w-4xl mx-auto">
        {education.map((edu, index) => {
          const Icon = edu.icon;

          return (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              <EnergyCard 
                className="p-6 relative overflow-visible" 
                glowColor={edu.color as 'cyan' | 'purple' | 'green'}
              >
                {/* Transformer ripple effect */}
                <motion.div
                  className="absolute -left-2 top-1/2 -translate-y-1/2 w-16 h-16 rounded-full border border-primary/20"
                  animate={{ 
                    scale: [1, 1.5, 1],
                    opacity: [0.3, 0, 0.3]
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
                <motion.div
                  className="absolute -left-2 top-1/2 -translate-y-1/2 w-16 h-16 rounded-full border border-primary/30"
                  animate={{ 
                    scale: [1, 1.3, 1],
                    opacity: [0.5, 0, 0.5]
                  }}
                  transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
                />

                <div className="flex flex-col lg:flex-row lg:items-center gap-6">
                  {/* Icon transformer */}
                  <div className="relative">
                    <motion.div
                      className="w-20 h-20 rounded-lg bg-muted border border-primary/30 flex items-center justify-center relative overflow-hidden"
                      whileHover={{ scale: 1.05 }}
                    >
                      <Icon className="w-10 h-10 text-primary relative z-10" />
                      
                      {/* Internal energy effect */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"
                        animate={{ opacity: [0.3, 0.6, 0.3] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                    </motion.div>

                    {/* Connection dots */}
                    <div className="hidden lg:flex absolute -right-3 top-1/2 -translate-y-1/2 flex-col gap-1">
                      {[...Array(3)].map((_, i) => (
                        <motion.div
                          key={i}
                          className="w-1.5 h-1.5 rounded-full bg-primary"
                          animate={{ opacity: [0.3, 1, 0.3] }}
                          transition={{ duration: 1, repeat: Infinity, delay: i * 0.2 }}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-2 mb-3">
                      <div>
                        <h3 className="font-orbitron text-lg font-semibold text-foreground">
                          {edu.degree}
                        </h3>
                        <p className="text-primary font-medium">{edu.institution}</p>
                        {edu.location && (
                          <p className="text-sm text-muted-foreground">{edu.location}</p>
                        )}
                      </div>

                      {/* Status badge */}
                      <div className="flex items-center gap-2">
                        <motion.div
                          className="w-2 h-2 rounded-full bg-energy-green"
                          animate={{ opacity: [0.5, 1, 0.5] }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                        />
                        <span className="font-mono text-sm text-muted-foreground">
                          {edu.status}
                        </span>
                      </div>
                    </div>

                    {/* Grade display */}
                    {edu.grade && (
                      <div className="flex items-center gap-3 mt-4">
                        <div className="px-4 py-2 rounded-lg bg-primary/10 border border-primary/30">
                          <span className="font-orbitron text-lg font-bold text-primary glow-text-subtle">
                            {edu.grade}
                          </span>
                          {edu.gradeNote && (
                            <span className="text-xs text-muted-foreground ml-2">
                              {edu.gradeNote}
                            </span>
                          )}
                        </div>

                        {/* Energy bar visualization */}
                        <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
                          <motion.div
                            className="h-full bg-gradient-to-r from-primary to-energy-green rounded-full"
                            initial={{ width: 0 }}
                            whileInView={{ width: index === 0 ? '90%' : index === 1 ? '83%' : '80%' }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 0.5 }}
                          />
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Bottom status bar */}
                <div className="flex items-center justify-end gap-2 mt-4 pt-4 border-t border-border/50">
                  <span className="font-mono text-xs text-muted-foreground">
                    REACTOR STATUS:
                  </span>
                  <span className="font-mono text-xs text-energy-green">OPTIMAL</span>
                  <motion.div
                    className="w-2 h-2 rounded-full bg-energy-green"
                    animate={{ opacity: [0.3, 1, 0.3] }}
                    transition={{ duration: 1, repeat: Infinity }}
                  />
                </div>
              </EnergyCard>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default EducationSection;
