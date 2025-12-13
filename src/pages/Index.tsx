import { useState, useEffect, useRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import LoadingScreen from '@/components/LoadingScreen';
import EnergyBackground from '@/components/EnergyBackground';
import GridNavigation from '@/components/GridNavigation';
import AboutSection from '@/components/sections/AboutSection';
import AchievementsSection from '@/components/sections/AchievementsSection';
import EducationSection from '@/components/sections/EducationSection';
import SkillsSection from '@/components/sections/SkillsSection';
import ProjectsSection from '@/components/sections/ProjectsSection';
import CertificationsSection from '@/components/sections/CertificationsSection';
import ContactSection from '@/components/sections/ContactSection';

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [activeSection, setActiveSection] = useState('about');
  const [showContact, setShowContact] = useState(false);
  const mainRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!mainRef.current) return;

      const sections = ['about', 'achievements', 'education', 'skills', 'projects', 'certifications', 'contact'];
      const scrollPosition = mainRef.current.scrollTop + 200;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    const mainElement = mainRef.current;
    if (mainElement) {
      mainElement.addEventListener('scroll', handleScroll);
      return () => mainElement.removeEventListener('scroll', handleScroll);
    }
  }, [isLoading]);

  // Force scroll to top on load/reload
  useEffect(() => {
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);

    // Also try to scroll the main container if it exists
    if (mainRef.current) {
      mainRef.current.scrollTop = 0;
    }
  }, []);

  const handleSectionChange = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element && mainRef.current) {
      mainRef.current.scrollTo({
        top: element.offsetTop - 50,
        behavior: 'smooth',
      });
    }
  };

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && (
          <LoadingScreen onComplete={() => setIsLoading(false)} />
        )}
      </AnimatePresence>

      {!isLoading && (
        <motion.div
          className="min-h-screen bg-background relative"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <EnergyBackground />

          <GridNavigation
            activeSection={activeSection}
            onSectionChange={handleSectionChange}
          />

          {/* Main content area */}
          <main
            ref={mainRef}
            className="ml-20 lg:ml-24 h-screen overflow-y-auto scroll-smooth"
          >
            <div className="max-w-6xl mx-auto px-4 lg:px-8">
              {/* Hero header */}
              <motion.header
                className="pt-8 pb-4 mb-8 border-b border-border/30"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    {/* Logo/Brand */}
                    <div className="relative">
                      <motion.div
                        className="w-12 h-12 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center"
                        animate={{ boxShadow: ['0 0 10px hsl(var(--primary) / 0.3)', '0 0 20px hsl(var(--primary) / 0.5)', '0 0 10px hsl(var(--primary) / 0.3)'] }}
                        transition={{ duration: 2,easeInOut: 'easeInOut', repeat: Infinity }}
                      >
                        <span className="font-orbitron text-lg font-bold text-primary">SJ</span>
                      </motion.div>
                    </div>

                    <motion.div
                      className="flex flex-col"
                      initial={{ opacity: 2, y: -5 }}
                      animate={{ opacity: 1, y: 10 }}
                      transition={{ duration: 1 }}
                    >
                    <h1 className="font-orbitron text-xl font-bold text-foreground">
                        SYED JUNAITH 
                    </h1>
                    <p className="font-mono text-xs text-muted-foreground">
                      Portfolio v2.0
                    </p>
                    </motion.div>

                                </div>
              {/* Status indicators - Enhanced Sci-Fi Version */}
              <div className="hidden md:flex items-center gap-6 relative">
                {/* SYSTEM ONLINE */}
                <div className="flex items-center gap-2 relative">
                  {/* Pulsing Node */}
                  <motion.div
                    className="w-3 h-3 rounded-full bg-energy-green shadow-[0_0_15px_rgba(0,255,180,0.7)]"
                    animate={{
                      opacity: [0.4, 1, 0.4],
                      scale: [0.9, 1.3, 0.9],
                      boxShadow: [
                        "0 0 5px rgba(0,255,180,0.5)",
                        "0 0 20px rgba(0,255,180,0.9)",
                        "0 0 5px rgba(0,255,180,0.5)"
                      ]
                    }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                  />
                  <span className="font-mono text-xs text-muted-foreground tracking-wider">
                    SYSTEM ONLINE
                  </span>

                  {/* Tiny floating sparks */}
                  {[...Array(3)].map((_, i) => (
                    <motion.span
                      key={i}
                      className="absolute w-1 h-1 bg-energy-green rounded-full"
                      initial={{ opacity: 0, x: 0, y: 0, scale: 0 }}
                      animate={{
                        opacity: [0, 1, 0],
                        x: [0, -5 + i * 5, 0],
                        y: [0, -8 + i * 4, 0],
                        scale: [0.5, 1, 0.5]
                      }}
                      transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
                    />
                  ))}
                </div>

                {/* NODES */}
                <div className="flex items-center gap-2 relative">
                  <span className="font-mono text-xs text-muted-foreground tracking-wider">NODES:</span>
                  <span className="font-mono text-xs text-primary font-bold glow-text-strong">7/7</span>
                  {/* Node spark glow */}
                  <motion.div
                    className="absolute -top-1 -right-2 w-2 h-2 rounded-full bg-primary shadow-[0_0_10px_rgba(0,255,255,0.6)]"
                    animate={{ scale: [1, 1.5, 1], opacity: [0.3, 1, 0.3] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  />
                </div>

              {/* POWER Bars */}
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs text-muted-foreground tracking-wider">
                  POWER:
                </span>
                <div className="flex gap-0.5 relative">
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="w-1 h-3 bg-primary rounded-sm shadow-[0_0_6px_rgba(0,255,255,0.5)]"
                      animate={{
                        opacity: [0.3, 1, 0.3],
                        scaleY: [1, 1.5, 1],
                        y: [0, -2, 0]
                      }}
                      transition={{
                        duration: 1.2 + i * 0.1,
                        ease: "easeInOut",
                        repeat: Infinity,
                        repeatType: "mirror"
                      }}
                    />
                  ))}

                  {/* Background pulse behind bars */}
                  <motion.div
                    className="absolute inset-0 bg-primary/20 rounded-sm blur-lg"
                    animate={{ opacity: [0, 0.6, 0] }}
                    transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                  />

                  {/* Floating energy sparks */}
                  {[...Array(4)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-1 h-1 bg-primary rounded-full"
                      initial={{ opacity: 0, x: 0, y: 0, scale: 0 }}
                      animate={{
                        opacity: [0, 1, 0],
                        x: [-5 + i * 3, 5 - i * 3, 0],
                        y: [-6 + i * 3, 6 - i * 3, 0],
                        scale: [0.5, 1.2, 0.5]
                      }}
                      transition={{ duration: 3, repeat: Infinity, delay: i * 0.3 }}
                    />
                  ))}


                    {/* Background pulse behind bars */}
                    <motion.div
                      className="absolute inset-0 bg-primary/20 rounded-sm blur-lg"
                      animate={{ opacity: [0, 0.6, 0] }}
                      transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                    />
                  </div>

                  {/* Floating sparks over bars */}
                  {[...Array(4)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-1 h-1 bg-primary rounded-full"
                      initial={{ opacity: 0, x: 0, y: 0, scale: 0 }}
                      animate={{
                        opacity: [0, 1, 0],
                        x: [-5 + i * 3, 5 - i * 3, 0],
                        y: [-6 + i * 3, 6 - i * 3, 0],
                        scale: [0.5, 1.2, 0.5]
                      }}
                      transition={{ duration: 3, repeat: Infinity, delay: i * 0.3 }}
                    />
                  ))}
                </div>
              </div>


                </div>
              </motion.header>

              {/* Sections */}
              <AboutSection />
              <AchievementsSection />
              <EducationSection />
              <SkillsSection />
              <ProjectsSection />
              <CertificationsSection />


              {/* Lazy loaded Contact Section */}
              <div ref={(el) => {
                if (el && !showContact) {
                  const observer = new IntersectionObserver(
                    (entries) => {
                      if (entries[0].isIntersecting) {
                        setShowContact(true);
                        observer.disconnect();
                      }
                    },
                    { threshold: 0.1, rootMargin: '100px' }
                  );
                  observer.observe(el);
                }
              }} className="min-h-[100px]" />

              {showContact && <ContactSection />}

              {/* Footer */}
              <footer className="py-8 border-t border-border/30 text-center">
                <p className="font-mono text-xs text-muted-foreground">
                   Syed Junaith's Portfolio | DESIGNED BY MSJ
                </p>
                <div className="flex justify-center items-center gap-2 mt-2">
                  <motion.div
                    className="w-1.5 h-1.5 rounded-full bg-primary"
                    animate={{ opacity: [0.3, 1, 0.3] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  <span className="font-mono text-xs text-primary"></span>
                  <motion.div
                    className="w-1.5 h-1.5 rounded-full bg-primary"
                    animate={{ opacity: [0.3, 1, 0.3] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                  />
                </div>
              </footer>
            </div>
          </main>
        </motion.div>
      )}
    </>
  );
};

export default Index;
