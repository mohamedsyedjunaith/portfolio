import { motion } from "framer-motion";
import {
  Cpu,
  Code,
  Layout,
  Server,
  Database,
  Wrench,
  Star,
} from "lucide-react";
import SectionTitle from "../SectionTitle";

/* =========================
   SKILL DATA
========================= */
const skillCategories = [
  {
    icon: Code,
    title: "Programming",
    color: "cyan",
    skills: [
      { name: "C", level: 4 },
      { name: "C++", level: 4 },
      { name: "Java", level: 3 },
      { name: "JavaScript", level: 5 },
      { name: "Python", level: 4 },
    ],
  },
  {
    icon: Layout,
    title: "Frontend",
    color: "purple",
    skills: [
      { name: "HTML", level: 5 },
      { name: "CSS", level: 5 },
      { name: "React", level: 4 },
    ],
  },
  {
    icon: Server,
    title: "Backend",
    color: "green",
    skills: [
      { name: "Node.js", level: 4 },
      { name: "Express.js", level: 4 },
      { name: "Spring Boot", level: 3 },
    ],
  },
  {
    icon: Database,
    title: "Databases",
    color: "blue",
    skills: [
      { name: "MongoDB", level: 4 },
      { name: "MySQL", level: 4 },
    ],
  },
  {
    icon: Wrench,
    title: "Tools",
    color: "cyan",
    skills: [
      { name: "GitHub", level: 5 },
      { name: "VS Code", level: 5 },
      { name: "Postman", level: 4 },
      { name: "IntelliJ IDEA", level: 3 },
      { name: "Vercel", level: 4 },
      { name: "Docker", level: 3 },
    ],
  },
];

/* =========================
   COLOR STYLES
========================= */
const colorStyles: any = {
  cyan: {
    bg: "bg-primary/10",
    border: "border-primary/30",
    text: "text-primary",
    glow: "shadow-[0_0_25px_hsl(var(--primary)/0.45)]",
    bar: "bg-primary",
  },
  purple: {
    bg: "bg-accent/10",
    border: "border-accent/30",
    text: "text-accent",
    glow: "shadow-[0_0_25px_hsl(var(--accent)/0.45)]",
    bar: "bg-accent",
  },
  green: {
    bg: "bg-energy-green/10",
    border: "border-energy-green/30",
    text: "text-energy-green",
    glow: "shadow-[0_0_25px_hsl(var(--energy-green)/0.45)]",
    bar: "bg-energy-green",
  },
  blue: {
    bg: "bg-energy-blue/10",
    border: "border-energy-blue/30",
    text: "text-energy-blue",
    glow: "shadow-[0_0_25px_hsl(var(--energy-blue)/0.45)]",
    bar: "bg-energy-blue",
  },
};

/* =========================
   STAR RATING
========================= */
const SkillStars = ({ level }: { level: number }) => (
  <div className="flex gap-0.5 justify-end">
    {[1, 2, 3, 4, 5].map((i) => (
      <motion.div
        key={i}
        whileHover={{ scale: 1.2 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <Star
          className={`w-3.5 h-3.5 ${
            i <= level
              ? "fill-yellow-400 text-yellow-400 drop-shadow-[0_0_6px_rgba(250,204,21,0.8)]"
              : "text-muted-foreground"
          }`}
        />
      </motion.div>
    ))}
  </div>
);

/* =========================
   MAIN COMPONENT
========================= */
const SkillsSection = () => {
  return (
    <section id="skills" className="min-h-screen py-20 px-4">
      <SectionTitle
        icon={Cpu}
        title="SKILL TRANSFORMERS"
        subtitle="// Technical Capabilities"
      />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {skillCategories.map((category, index) => {
          const Icon = category.icon;
          const styles = colorStyles[category.color];

          return (
            <motion.div
              key={category.title}
              className={`relative p-6 rounded-xl bg-card/80 backdrop-blur-sm border ${styles.border}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -8, scale: 1.02, boxShadow: styles.glow }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
            >
              {/* Header */}
              <div className="flex items-center gap-3 mb-6">
                <motion.div
                  whileHover={{ rotate: 8, scale: 1.1 }}
                  className={`p-3 rounded-lg ${styles.bg} ${styles.border} border`}
                >
                  <Icon className={`w-6 h-6 ${styles.text}`} />
                </motion.div>
                <h3 className="font-orbitron text-lg font-semibold">
                  {category.title}
                </h3>
              </div>

              {/* Skills */}
              <div className="space-y-3">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="grid grid-cols-[12px_1fr_auto] items-center gap-3"
                  >
                    {/* Dot */}
                    <motion.div
                      className={`w-2 h-2 rounded-full ${styles.bar}`}
                      animate={{ opacity: [0.4, 1, 0.4] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    />

                    {/* Skill Name */}
                    <span className="font-mono text-sm truncate">
                      {skill.name}
                    </span>

                    {/* Stars */}
                    <SkillStars level={skill.level} />
                  </div>
                ))}
              </div>

              {/* Footer */}
              <div className="mt-6 pt-4 border-t border-border/50">
                <span className="font-mono text-xs text-muted-foreground">
                  TRANSFORMER {index + 1}
                </span>
              </div>

              {/* Corner Accent */}
              <div className={`absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 ${styles.border} rounded-tr-lg`} />
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default SkillsSection;
