import { motion } from 'framer-motion';
import { Trophy, Award, Medal, Star } from 'lucide-react';
import SectionTitle from '../SectionTitle';

const achievements = [
  {
    icon: Award,
    title: 'Academic Excellence Award',
    subtitle: '2025–2026',
    description: 'Recognized for outstanding academic performance',
    color: 'cyan',
  },
  {
    icon: Trophy,
    title: 'ROV-Based Smart Inspection System',
    subtitle: 'Paper Presentation | Kongu Engineering College',
    description: 'First Prize',
    color: 'green',
  },
  {
    icon: Medal,
    title: 'IoT-Based Automatic Speed Breaker',
    subtitle: 'Project Presentation | Kongu Engineering College',
    description: 'Second Prize',
    color: 'purple',
  },
  {
    icon: Star,
    title: 'Coding Contest',
    subtitle: 'Department Organized',
    description: 'Third Prize',
    color: 'blue',
  },
];

const colorMap = {
  cyan: 'border-primary bg-primary/10 text-primary',
  green: 'border-energy-green bg-energy-green/10 text-energy-green',
  purple: 'border-accent bg-accent/10 text-accent',
  blue: 'border-energy-blue bg-energy-blue/10 text-energy-blue',
};

const lineColorMap = {
  cyan: 'from-primary/50 via-primary to-primary/50',
  green: 'from-energy-green/50 via-energy-green to-energy-green/50',
  purple: 'from-accent/50 via-accent to-accent/50',
  blue: 'from-energy-blue/50 via-energy-blue to-energy-blue/50',
};

const AchievementsSection = () => {
  return (
    <section id="achievements" className="min-h-screen py-20 px-4">
      <SectionTitle
        icon={Trophy}
        title="ENERGY TIMELINE"
        subtitle="// Achievement Milestones"
      />

      <div className="relative max-w-3xl mx-auto">
        {/* Central power line */}
        <div className="absolute left-8 lg:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/30 to-transparent lg:-translate-x-1/2" />

        {/* Energy pulse on the line */}
        <motion.div
          className="absolute left-8 lg:left-1/2 w-2 h-20 bg-gradient-to-b from-transparent via-primary to-transparent rounded-full lg:-translate-x-1/2"
          style={{ marginLeft: '-3px' }}
          animate={{ top: ['0%', '80%', '0%'] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
        />

        {/* Achievement items */}
        <div className="space-y-12">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            const isLeft = index % 2 === 0;

            return (
              <motion.div
                key={achievement.title}
                className={`relative flex items-center ${isLeft ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  } flex-row`}
                initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {/* Node on the timeline */}
                <motion.div
                  className={`absolute left-8 lg:left-1/2 w-4 h-4 rounded-full border-2 ${colorMap[achievement.color as keyof typeof colorMap]} lg:-translate-x-1/2 z-10`}
                  whileHover={{ scale: 1.5 }}
                  animate={{ boxShadow: ['0 0 0 0 transparent', '0 0 20px hsl(var(--primary) / 0.5)', '0 0 0 0 transparent'] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />

                {/* Connection line to card */}
                <motion.div
                  className={`absolute left-10 h-px w-8 lg:w-20 bg-gradient-to-r ${lineColorMap[achievement.color as keyof typeof lineColorMap]} ${isLeft
                      ? 'origin-left lg:left-auto lg:right-[calc(50%+8px)] lg:origin-right'
                      : 'origin-left lg:left-[calc(50%+8px)]'
                    }`}
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.2 + index * 0.1 }}
                />

                {/* Card */}
                <motion.div
                  className={`ml-20 lg:ml-0 lg:w-[calc(50%-60px)] ${isLeft ? 'lg:mr-auto lg:pr-8' : 'lg:ml-auto lg:pl-8'
                    }`}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className={`relative p-6 rounded-lg bg-card/80 backdrop-blur-sm border ${colorMap[achievement.color as keyof typeof colorMap].split(' ')[0]}/30 hover:${colorMap[achievement.color as keyof typeof colorMap].split(' ')[0]}/60 transition-all duration-300`}>
                    {/* Corner accents */}
                    <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-primary/40 rounded-tl" />
                    <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-primary/40 rounded-tr" />

                    <div className="flex items-start gap-4">
                      <div className={`p-3 rounded-lg ${colorMap[achievement.color as keyof typeof colorMap]}`}>
                        <Icon className="w-6 h-6" />
                      </div>

                      <div className="flex-1">
                        <h3 className="font-orbitron text-lg font-semibold text-foreground mb-1">
                          {achievement.title}
                        </h3>
                        <p className="text-m text-muted-foreground mb-2">
                          {achievement.subtitle}
                        </p>
                        <p className={`font-mono text-base ${colorMap[achievement.color as keyof typeof colorMap].split(' ')[2]}`}>
                          {achievement.description}
                        </p>
                      </div>
                    </div>

                    {/* Energy pulse indicator */}
                    <motion.div
                      className={`absolute bottom-2 right-2 w-2 h-2 rounded-full ${colorMap[achievement.color as keyof typeof colorMap].split(' ')[1]}`}
                      animate={{ opacity: [0.3, 1, 0.3] }}
                      transition={{ duration: 1.5, repeat: Infinity, delay: index * 0.3 }}
                    />
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
