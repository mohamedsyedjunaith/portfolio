import { motion } from 'framer-motion';
import { User } from 'lucide-react';
import SectionTitle from '../SectionTitle';
import EnergyCard from '../EnergyCard';

interface AboutSectionProps {
  onSectionChange: (sectionId: string) => void;
}

const AboutSection = ({ onSectionChange }: AboutSectionProps) => {
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
            {/* Profile Image / Circuit */}
            <motion.div
              className="relative w-40 h-40 mb-6"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: 'spring', duration: 0.8 }}
            >
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-dashed border-primary/30"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              />

              <motion.div
                className="absolute inset-2 rounded-full border border-primary/50"
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
              />

              <div className="absolute inset-4 rounded-full bg-primary/10 glow-cyan flex items-center justify-center">
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary/30 to-accent/20 flex items-center justify-center">
                  <span className="font-orbitron text-3xl font-bold text-primary glow-text">
                    MSJ
                  </span>
                </div>
              </div>

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
<span className="text-primary font-semibold">Software Engineer </span> 
with an <span className="text-primary font-semibold">EEE background </span>  
and hands-on experience in{' '}
<span className="text-primary font-semibold">embedded systems</span>,{' '}
<span className="text-primary font-semibold">IoT</span>, and{' '}
<span className="text-primary font-semibold">full-stack development</span>.


</motion.p>


            {/* Interesting System-style line */}
            <motion.div
              className="font-mono text-sm text-primary/80 border-l-2 border-primary pl-4"
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              &gt; Active modules: Hardware–Software Integration • Real-time Systems • Web


            </motion.div>

            {/* Buttons */}
            <div className="pt-6 flex flex-wrap justify-center gap-4">
              <motion.a
                href="Mohamed_Syed_Junaith_S_B_Resume.pdf"
                download="Mohamed_Syed_Junaith_S_B_Resume.pdf"
                className="px-6 py-3 rounded-lg bg-primary text-background font-bold border border-primary/50 glow-cyan hover:glow-cyan-intense transition-all"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8 }}
                whileHover={{
                  scale: 1.05,
                  boxShadow: '0 0 15px hsl(var(--primary)/0.6)',
                }}
              >
                Download Resume
              </motion.a>

              <motion.button
                onClick={() => onSectionChange('contact')}
                className="px-6 py-3 rounded-lg border border-primary/60 text-primary font-bold hover:bg-primary/10 glow-cyan transition-all"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.9 }}
                whileHover={{ scale: 1.05 }}
              >
                Contact Me
              </motion.button>
            </div>
          </div>
        </EnergyCard>
      </div>
    </section>
  );
};

export default AboutSection;
