import { motion } from 'framer-motion';
import { Award, CheckCircle } from 'lucide-react';
import SectionTitle from '../SectionTitle';

const certifications = [
  {
    title: 'Certified Full-Stack Java Developer',
    issuer: 'DigiDARA Technologies',
    type: 'Professional Certification',
    color: 'cyan',
    Link: '#',
  },
  {
    title: 'Type-Writing',
    issuer: 'TN Government',
    type: 'Senior Grade',
    color: 'purple',
    Link: 'https://drive.google.com/file/d/1i8zO1qXm8gjmEnhSZagYHKoTYBu1WGsg/view?usp=sharing',
  },
  {
    title: 'Computer an Office Automation',
    issuer: 'TN Government',
    type: 'Government Training',
    color: 'green',
    Link: 'https://drive.google.com/file/d/1FUrvZZd0FuG4V-ZwZx_vpK62N7wSqTy9/view?usp=sharing',
  },
  {
    title: 'Java',
    issuer: 'Infosys',
    type: 'Java Certified',
    color: 'blue',
    Link: 'https://drive.google.com/file/d/1_AaZhCfq1F-NSSK7Vwl9NCCTCeon48L5/view?usp=drive_link',
  },
  {
    title: 'MySQL',
    issuer: 'Oracle',
    type: 'Multicloud',
    color: 'cyan',
    Link: 'https://drive.google.com/file/d/1ylA-5VcEGVxW_hyBHU8oCxxwKRy78x2e/view?usp=sharing',
  },
  {
    title: 'Artificial Intelligence',
    issuer: 'Oracle',
    type: 'AI Foundation',
    color: 'purple',
    Link: 'https://drive.google.com/file/d/1PYPZ2OYNpswf2d8oa-9PU76C79fIjftm/view?usp=drive_link',
  },
  {
    title: 'Python',
    issuer: 'Infosys',
    type: 'Data Science Statistics',
    color: 'green',
    Link: 'https://drive.google.com/file/d/1xBnep0DdG2adH1c-q9-yVHf3B1Oki3ja/view?usp=sharing',
  },
    {
    title: 'Hindi',
    issuer: 'Central Government',
    type: 'Language Proficiency',
    color: 'blue',
    Link: 'https://drive.google.com/file/d/1Ned1kb5A5rU4qmH0A7fVNb2zUj_pwb3U/view?usp=sharing',
  },
];

// Color styles for glow and background
const colorStyles = {
  cyan: {
    border: 'border-primary/30',
    bg: 'bg-primary/10',
    text: 'text-primary',
    glow: 'shadow-[0_0_25px_hsl(var(--primary)/0.3)]',
  },
  purple: {
    border: 'border-accent/30',
    bg: 'bg-accent/10',
    text: 'text-accent',
    glow: 'shadow-[0_0_25px_hsl(var(--accent)/0.3)]',
  },
  green: {
    border: 'border-energy-green/30',
    bg: 'bg-energy-green/10',
    text: 'text-energy-green',
    glow: 'shadow-[0_0_25px_hsl(var(--energy-green)/0.3)]',
  },
  blue: {
    border: 'border-energy-blue/30',
    bg: 'bg-energy-blue/10',
    text: 'text-energy-blue',
    glow: 'shadow-[0_0_25px_hsl(var(--energy-blue)/0.3)]',
  },
};

const CertificationsSection = () => {
  // Filter duplicates by title
  const uniqueCertifications = certifications.filter(
    (cert, index, self) =>
      index === self.findIndex((c) => c.title === cert.title)
  );

  return (
    <section id="certifications" className="min-h-screen py-20 px-4">
      <SectionTitle 
        icon={Award} 
        title="CERTIFICATION GRID" 
        subtitle="// Professional Credentials" 
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {uniqueCertifications.map((cert, index) => {
          const styles = colorStyles[cert.color as keyof typeof colorStyles];
          const hasLink = !!cert.Link;

          return (
            <motion.a
              key={cert.title}
              href={hasLink ? cert.Link : undefined}
              target={hasLink ? "_blank" : undefined}
              rel="noopener noreferrer"
              className={`group relative block p-6 rounded-lg bg-card/80 backdrop-blur-sm border ${styles.border} transition-all duration-300 hover:${styles.glow}`}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.03 }}
            >
              {/* Glow overlay */}
              <motion.div
                className={`absolute inset-0 rounded-lg ${styles.bg} opacity-0 group-hover:opacity-30 transition-opacity duration-500`}
              />

              <div className="relative z-10">
                {/* Badge */}
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-2 rounded-lg ${styles.bg} ${styles.border} border`}>
                    <Award className={`w-6 h-6 ${styles.text}`} />
                  </div>

                  <motion.div
                    className="flex items-center gap-1"
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <CheckCircle className={`w-5 h-5 ${styles.text}`} />
                    <span className={`font-mono text-sm md:text-base ${styles.text}`}>VERIFIED</span>
                  </motion.div>
                </div>

                {/* Certification Info */}
                <h3 className="font-orbitron text-lg md:text-l font-semibold text-foreground mb-2">
                  {cert.title}
                </h3>
                
                <p className="text-base md:text-lg text-muted-foreground mb-1">
                  {cert.issuer}
                </p>
                
                <p className={`font-mono text-sm md:text-base ${styles.text}`}>
                  {cert.type}
                </p>

                {/* Power bars */}
                <div className="mt-4 pt-4 border-t border-border/50">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-sm md:text-base text-muted-foreground">POWER LEVEL</span>
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <motion.div
                          key={i}
                          className={`w-2 h-4 md:h-5 rounded-sm ${i < 4 ? styles.bg : 'bg-muted'}`}
                          animate={i < 4 ? { opacity: [0.5, 1, 0.5] } : {}}
                          transition={{ duration: 1, repeat: Infinity, delay: i * 0.1 }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Electric glow edges */}
              <motion.div
                className={`absolute inset-0 rounded-lg border-2 ${styles.border} opacity-0 group-hover:opacity-100`}
                animate={{
                  boxShadow: [
                    `0 0 5px hsl(var(--primary) / 0.3)`,
                    `0 0 20px hsl(var(--primary) / 0.5)`,
                    `0 0 5px hsl(var(--primary) / 0.3)`,
                  ],
                }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </motion.a>
          );
        })}
      </div>
    </section>
  );
};

export default CertificationsSection;
