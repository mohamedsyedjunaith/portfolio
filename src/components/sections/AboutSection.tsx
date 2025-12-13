import { motion } from 'framer-motion';
import { User, Zap, Cpu, Globe, Code } from 'lucide-react';
import SectionTitle from '../SectionTitle';
import EnergyCard from '../EnergyCard';

const AboutSection = () => {
  const highlights = [
    { icon: Cpu, label: 'IoT Systems' },
    { icon: Code, label: 'Full-Stack Dev' },
    { icon: Zap, label: 'AI & ML' },
    { icon: Globe, label: 'Connected Systems' },
  ];

  return (
    <section id="about" className="min-h-screen py-20 px-4">
      <SectionTitle 
        icon={User} 
        title="ABOUT ME" 
        subtitle="// System Administrator Profile" 
      />

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Profile Circuit Card */}
        <EnergyCard className="p-8" delay={0.1}>
          <div className="flex flex-col items-center text-center">
            {/* Profile image placeholder with circuit effect */}
            <motion.div
              className="relative w-40 h-40 mb-6"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: 'spring', duration: 0.8 }}
            >
              {/* Outer rotating ring */}
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-dashed border-primary/30"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              />
              
              {/* Middle ring */}
              <motion.div
                className="absolute inset-2 rounded-full border border-primary/50"
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
              />
              
              {/* Inner glow circle */}
              <div className="absolute inset-4 rounded-full bg-primary/10 glow-cyan flex items-center justify-center">
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary/30 to-accent/20 flex items-center justify-center">
                  <span className="font-orbitron text-3xl font-bold text-primary glow-text">MSJ</span>
                </div>
              </div>

              {/* Node connectors */}
              {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 bg-primary rounded-full"
                  style={{
                    top: `${50 - 45 * Math.sin((angle * Math.PI) / 180)}%`,
                    left: `${50 + 45 * Math.cos((angle * Math.PI) / 180)}%`,
                    transform: 'translate(-50%, -50%)',
                  }}
                  animate={{ opacity: [0.3, 1, 0.3] }}
                  transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
                />
              ))}
            </motion.div>

            {/* Name */}
            <motion.h3
              className="font-orbitron text-2xl font-bold text-foreground mb-2"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              Mohamed Syed Junaith S B
            </motion.h3>

            <motion.p
              className="font-mono text-sm text-primary mb-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              ASPIRING SOFTWARE ENGINEER
            </motion.p>

            {/* Status indicator */}
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <motion.div
                className="w-2 h-2 rounded-full bg-energy-green"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
              <span>System Online</span>
            </div>
          </div>
        </EnergyCard>

        {/* About Text Card */}
        <EnergyCard className="p-8" delay={0.2}>
          <div className="space-y-6">
            <motion.p
              className="text-lg leading-relaxed text-foreground/90"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              Aspiring Software Engineer with strong foundations in{' '}
              <span className="text-primary font-semibold">IoT</span>,{' '}
              <span className="text-primary font-semibold">embedded systems</span>,{' '}
              <span className="text-primary font-semibold">full-stack web development</span>, and{' '}
              <span className="text-primary font-semibold">AI</span>.
            </motion.p>

            <motion.p
              className="text-muted-foreground leading-relaxed"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              Passionate about building intelligent, connected systems that merge hardware + software
              to create innovative solutions for real-world problems.
            </motion.p>

            {/* Highlight capsules */}
            <div className="grid grid-cols-2 gap-3 pt-4">
              {highlights.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.label}
                    className="flex items-center gap-3 p-3 rounded-lg bg-muted/50 border border-primary/20"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    whileHover={{ scale: 1.02, borderColor: 'hsl(var(--primary) / 0.5)' }}
                  >
                    <Icon className="w-5 h-5 text-primary" />
                    <span className="text-sm font-medium">{item.label}</span>
                  </motion.div>
                );
              })}
            </div>

            {/* Download Resume Button */}
            <div className="pt-6 flex justify-center">
              <motion.a
                href="/resume.pdf" // place your resume in the public folder
                download
                className="px-6 py-3 rounded-lg bg-primary text-background font-bold border border-primary/50 glow-cyan hover:glow-cyan-intense transition-all"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 1 }}
                whileHover={{ scale: 1.05, boxShadow: '0 0 15px hsl(var(--primary)/0.6)' }}
              >
                Download Resume
              </motion.a>
            </div>
          </div>
        </EnergyCard>
      </div>
    </section>
  );
};

export default AboutSection;
