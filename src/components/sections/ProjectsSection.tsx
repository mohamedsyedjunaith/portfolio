import { motion } from 'framer-motion';
import { Folder, Wifi, Eye, Trophy, Zap, Cpu } from 'lucide-react';
import SectionTitle from '../SectionTitle';

const projects = [
  {
    id: 1,
    title: 'SMART TIMETABLE BELL SYSTEM',
    subtitle: 'ESP32 + Node.js + MongoDB',
    description: 'IoT-based automated school bell system with real-time updates, WiFi sync, staff allocation, ESP32 LCD display, and Node.js backend.',
    features: ['Real-time Updates', 'WiFi Sync', 'Staff Allocation', 'ESP32 LCD Display', 'Node.js Backend'],
    icon: Wifi,
    color: 'cyan',
    link: 'https://mohamedsyedjunaith.github.io/School_Bell/',
  },
  {
    id: 2,
    title: 'AI-POWERED COCONUT SORTING',
    subtitle: 'YOLOv8 Computer Vision',
    description: 'YOLOv8-based real-time defect detection system for identifying cracked vs healthy coconuts, optimized for edge inference.',
    features: ['YOLOv8 Detection', 'Real-time Processing','Conveyor Belt', 'Defect Classification', 'Edge Optimized','Integrating Hardware'],
    icon: Eye,
    color: 'purple',
    link: 'https://mohamedsyedjunaith.github.io/Coconut-Detection/',
  },
  {
    id: 3,
    title: 'DIGITAL TOURNAMENT PLATFORM',
    subtitle: 'React + Node + MongoDB',
    description: 'Full-stack tournament management platform with role-based access, participant handling, Razorpay payments, and hardware-based gateway.',
    features: ['Role-based Access', 'Participant Handling','Booking facility', 'Razorpay Payments', 'Hardware Gateway','Wifi Sync'],
    icon: Trophy,
    color: 'blue',
    link: '#',
  },
  {
    id: 4,
    title: 'SMART FINANCE TRACKER',
    subtitle: 'React + Node + MongoDB',
    description: 'Full-stack finance app with expense tracking, role-based access, analytics dashboards, budget alerts, and secure payment integration.',
    features: ["User & Admin Access","AI Assistance", "Expense & Income Management", "Secure Payment Integration", "Cloud Data Sync"],
    icon: Cpu,
    color: 'green',
    link: '#',
  },
  {
    id: 5,
    title: 'SMART TIMETABLE BELL SYSTEM (v2)',
    subtitle: 'ESP32 + Node.js + MongoDB',
    description: 'Advanced version with improved MIS, mobile app integration, dynamic timetable updates, substitute management, and real-time LCD sync.',
    features: ['Improved MIS', 'Dynamic Updates', 'Mobile App Sync', 'LCD Display', 'Staff Auto Allocation'],
    icon: Wifi,
    color: 'cyan',
    link: '#',
  },
];

const colorStyles = {
  cyan: {
    border: 'border-primary/30',
    hoverBorder: 'hover:border-primary/60',
    bg: 'bg-primary/10',
    text: 'text-primary',
    glow: 'group-hover:shadow-[0_0_40px_hsl(var(--primary)/0.3)]',
  },
  purple: {
    border: 'border-accent/30',
    hoverBorder: 'hover:border-accent/60',
    bg: 'bg-accent/10',
    text: 'text-accent',
    glow: 'group-hover:shadow-[0_0_40px_hsl(var(--accent)/0.3)]',
  },
  green: {
    border: 'border-energy-green/30',
    hoverBorder: 'hover:border-energy-green/60',
    bg: 'bg-energy-green/10',
    text: 'text-energy-green',
    glow: 'group-hover:shadow-[0_0_40px_hsl(var(--energy-green)/0.3)]',
  },
  blue: {
    border: 'border-energy-blue/30',
    bg: 'bg-energy-blue/10',
    text: 'text-energy-blue',
    glow: 'shadow-[0_0_25px_hsl(var(--energy-blue)/0.3)]',
  },
};

const ProjectsSection = () => {
  return (
    <section id="projects" className="min-h-screen py-20 px-4">
      <SectionTitle 
        icon={Folder} 
        title="PROJECT SUBSTATIONS" 
        subtitle="// Featured Works" 
      />

      <div className="grid lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {projects.map((project, index) => {
          const Icon = project.icon;
          const styles = colorStyles[project.color as keyof typeof colorStyles];

          return (
            <a
              key={project.title}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <motion.div
                className={`relative bg-card/80 backdrop-blur-sm rounded-lg border ${styles.border} ${styles.hoverBorder} transition-all duration-500 overflow-hidden ${styles.glow} h-full min-h-[460px] flex flex-col`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                whileHover={{ y: -8 }}
              >
                {/* Animated border glow */}
                <motion.div
                  className={`absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                  style={{
                    background: `linear-gradient(90deg, transparent, hsl(var(--primary) / 0.2), transparent)`,
                  }}
                  animate={{
                    backgroundPosition: ['200% 0', '-200% 0'],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                />

                {/* Header with icon */}
                <div className="relative p-6 pb-4">
                  <div className="flex items-start justify-between mb-4">
                    <motion.div
                      className={`p-4 rounded-lg ${styles.bg} border ${styles.border}`}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                      <Icon className={`w-8 h-8 ${styles.text}`} />
                    </motion.div>

                    {/* Status indicator */}
                    <div className="flex items-center gap-2">
                      <motion.div
                        className={`w-2 h-2 rounded-full ${styles.bg.replace('/10', '')}`}
                        animate={{ opacity: [0.3, 1, 0.3] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      />
                      <span className="font-mono text-xs text-muted-foreground">ONLINE</span>
                    </div>
                  </div>

                  <h3 className="font-orbitron text-lg font-bold text-foreground mb-1">
                    {project.title}
                  </h3>
                  <p className={`font-mono text-sm ${styles.text}`}>
                    {project.subtitle}
                  </p>
                </div>

                {/* Description */}
                <div className="px-6 pb-4">
                  <p className="text-m text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Features */}
                <div className="px-6 pb-6">
                  <div className="flex flex-wrap gap-2">
                    {project.features.map((feature, featureIndex) => (
                      <motion.span
                        key={feature}
                        className={`px-3 py-1 rounded-full text-xs font-mono ${styles.bg} ${styles.text} border ${styles.border}`}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 + featureIndex * 0.1 }}
                        whileHover={{ scale: 1.05 }}
                      >
                        {feature}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </a>
          );
        })}
      </div>
    </section>
  );
};

export default ProjectsSection;
