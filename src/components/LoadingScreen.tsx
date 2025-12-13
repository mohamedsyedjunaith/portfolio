import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

interface LoadingScreenProps {
  onComplete: () => void;
}

const LoadingScreen = ({ onComplete }: LoadingScreenProps) => {
  const [progress, setProgress] = useState(0);
  const [statusText, setStatusText] = useState('Initializing...');

const statusMessages = [
  'Putting on a professional smile...',
  'Organizing the invisible sections...',
  'Brewing coffee for optimal efficiency...',
  'Sharpening virtual pencils...',
  'Polishing my professional skills...',
  'All systems go. Get ready!...',
];


  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        const next = prev + Math.random() * 15;
        if (next >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 500);
          return 100;
        }
        return next;
      });
    }, 200);

    return () => clearInterval(interval);
  }, [onComplete]);

  useEffect(() => {
    const index = Math.min(
      Math.floor((progress / 100) * statusMessages.length),
      statusMessages.length - 1
    );
    setStatusText(statusMessages[index]);
  }, [progress]);

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-background"
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Grid background */}
        <div className="absolute inset-0 grid-pattern opacity-30" />
        
        {/* Central energy sphere */}
        <motion.div
          className="relative mb-12"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          {/* Outer ring */}
          <motion.div
            className="absolute -inset-8 rounded-full border-2 border-primary/30"
            animate={{ rotate: 360 }}
            transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
          />
          
          {/* Middle ring */}
          <motion.div
            className="absolute -inset-4 rounded-full border border-primary/50"
            animate={{ rotate: -360 }}
            transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
          />
          
          {/* Core sphere */}
          <motion.div
            className="relative h-24 w-24 rounded-full bg-primary/20 glow-cyan-intense"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          >
            {/* Inner core */}
            <div className="absolute inset-4 rounded-full bg-primary/40" />
            <div className="absolute inset-8 rounded-full bg-primary" />
          </motion.div>

          {/* Energy particles */}
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute h-2 w-2 rounded-full bg-primary"
              style={{
                top: '50%',
                left: '50%',
              }}
              animate={{
                x: [0, Math.cos((i * Math.PI) / 4) * 60],
                y: [0, Math.sin((i * Math.PI) / 4) * 60],
                opacity: [1, 0],
                scale: [1, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.2,
                ease: 'easeOut',
              }}
            />
          ))}
        </motion.div>

        {/* Title */}
        <motion.h1
          className="font-orbitron text-2xl font-bold tracking-wider text-primary glow-text mb-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          Portfolio of Syed Junaith <br />
          <center> Welcome!</center>
        </motion.h1>

        {/* Status text */}
        <motion.p
          className="font-mono text-sm text-muted-foreground mb-8"
          key={statusText}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          {statusText}
        </motion.p>

        {/* Progress bar */}
        <div className="relative w-64 h-1 bg-muted rounded-full overflow-hidden">
          <motion.div
            className="absolute inset-y-0 left-0 bg-primary glow-cyan rounded-full"
            style={{ width: `${progress}%` }}
            transition={{ duration: 0.2 }}
          />
          
          {/* Shimmer effect */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/50 to-transparent"
            animate={{ x: ['-100%', '100%'] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
          />
        </div>

        {/* Progress percentage */}
        <motion.p
          className="font-mono text-xs text-primary mt-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          {Math.round(progress)}%
        </motion.p>

        {/* LED indicators */}
        <div className="flex gap-2 mt-8">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="h-2 w-2 rounded-full bg-primary"
              animate={{
                opacity: progress > (i + 1) * 20 ? [0.3, 1, 0.3] : 0.1,
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                delay: i * 0.2,
              }}
            />
          ))}
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default LoadingScreen;
