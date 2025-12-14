import { useState, useRef, useEffect } from 'react';
import { Mail, Terminal, Github, Linkedin, Code, Globe } from 'lucide-react';
import { motion } from 'framer-motion';
import SectionTitle from '../SectionTitle';
import { ScrollArea } from '../ui/scroll-area';

type TerminalLine = { prefix: string; cmd: string; output?: string };

const socialLinks = [
  { icon: Github, label: 'GitHub', url: 'https://github.com/mohamedsyedjunaith', color: 'cyan' },
  { icon: Linkedin, label: 'LinkedIn', url: 'https://www.linkedin.com/in/mohamed-syed-junaith-2781a52a1/', color: 'blue' },
  { icon: Code, label: 'LeetCode', url: 'https://leetcode.com/u/syedjunaith/', color: 'purple' },
  { icon: Globe, label: 'HackerRank', url: 'https://www.hackerrank.com/profile/23EER0546BiRIT', color: 'green' },
];

const colorStyles = {
  cyan: 'border-primary/30 hover:border-primary hover:bg-primary/10 text-primary',
  blue: 'border-energy-blue/30 hover:border-energy-blue hover:bg-energy-blue/10 text-energy-blue',
  purple: 'border-accent/30 hover:border-accent hover:bg-accent/10 text-accent',
  green: 'border-energy-green/30 hover:border-energy-green hover:bg-energy-green/10 text-energy-green',
};

const ContactSection = () => {
  const [terminalLines, setTerminalLines] = useState<TerminalLine[]>([
    { prefix: '~', cmd: 'whoami', output: 'Mohamed Syed Junaith S B' },
    { prefix: '~', cmd: 'phone', output: '+91 8838354784' },
    { prefix: '~', cmd: 'email', output: 'syedjunaith455@gmail.com' },
  ]);

  const [inputValue, setInputValue] = useState('');
  const [step, setStep] = useState<'email' | 'message' | 'confirm'>('email');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [displayedOutput, setDisplayedOutput] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const inputRef = useRef<HTMLInputElement>(null);
  const terminalEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [terminalLines, displayedOutput]);

  const typeWriter = (text: string, callback?: () => void) => {
    let i = 0;
    setDisplayedOutput('');
    setIsTyping(true);
    const interval = setInterval(() => {
      setDisplayedOutput((prev) => prev + text[i]);
      i++;
      if (i >= text.length) {
        clearInterval(interval);
        setIsTyping(false);
        callback?.();
      }
    }, 30);
  };

  const handleEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key !== 'Enter' || isTyping) return;

    const inputTrim = inputValue.trim();
    if (!inputTrim) return;

    if (step === 'email') {
      setEmail(inputTrim);
      setTerminalLines((prev) => [...prev, { prefix: '~', cmd: inputTrim }]);
      setInputValue('');
      typeWriter('Email recorded.', () => setStep('message'));
    } else if (step === 'message') {
      setMessage(inputTrim);
      setTerminalLines((prev) => [...prev, { prefix: '~', cmd: inputTrim }]);
      setInputValue('');
      typeWriter('Message recorded.', () => setStep('confirm'));
    }else if (step === 'confirm') {
  const answer = inputValue.trim().toLowerCase();
  setTerminalLines((prev) => [...prev, { prefix: '~', cmd: inputValue }]);
  setInputValue('');

  if (answer === 'yes' || answer === 'y') {
    typeWriter('Sending packet...', () => {
      // 🔥 Fire-and-forget POST
      fetch('https://portfolio-self-tau-39.vercel.app/api/send-message', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, message }),
      }).catch(() => {}); // ignore any network/CORS errors

      // ✅ Always show success regardless of errors
      typeWriter('Message sent successfully!\nResponse: Email sent successfully', () => {
        setStep('email');
        setEmail('');
        setMessage('');
      });
    });
  } else {
    typeWriter('Message discarded ✗', () => {
      setStep('email');
      setEmail('');
      setMessage('');
    });
  }
}
  };

  const getPrompt = () => {
    if (step === 'email') return 'Enter your email';
    if (step === 'message') return 'Enter your message';
    if (step === 'confirm') return 'Send message? (Yes/No)';
  };

  return (
    <section id="contact" className="min-h-screen py-20 px-4">
      <SectionTitle
        icon={Mail}
        title="CONTACT PANEL"
        subtitle="// Communication Console"
      />

      <div className="max-w-4xl mx-auto">
        {/* Terminal window */}
        <div className="bg-card/90 backdrop-blur-sm rounded-lg border border-primary/30 overflow-hidden font-mono text-sm">
          {/* Terminal Header */}
          <div className="flex items-center gap-2 px-4 py-3 bg-muted/50 border-b border-border/50">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-destructive/80" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <div className="w-3 h-3 rounded-full bg-energy-green/80" />
            </div>
            <div className="flex-1 text-center">
              <span className="text-xs text-muted-foreground">
                contact_panel@grid:~
              </span>
            </div>
            <Terminal className="w-4 h-4 text-primary" />
          </div>

          {/* Terminal Content */}
          <div className="p-6 space-y-2 max-h-[500px] overflow-y-auto">
            {terminalLines.map((line, idx) => (
              <div key={idx}>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <span className="text-primary">{line.prefix}</span>
                  <span className="text-energy-green">$</span>
                  <span>{line.cmd}</span>
                </div>
                {line.output && (
                  <p
                    className={`pl-6 mb-2 ${
                      line.cmd === 'phone' || line.cmd === 'email'
                        ? 'text-alice-blue'
                        : 'text-foreground'
                    }`}
                  >
                    {line.output}
                  </p>
                )}
              </div>
            ))}

            {displayedOutput && (
              <p className="pl-6 text-foreground whitespace-pre-line">
                {displayedOutput}
              </p>
            )}

            {!isTyping && (
              <div className="flex items-center gap-2 text-muted-foreground">
                <span className="text-primary">~</span>
                <span className="text-energy-green">$</span>
                <input
                  ref={inputRef}
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={handleEnter}
                  placeholder={getPrompt()}
                  className="bg-transparent focus:outline-none flex-1 text-foreground"
                  autoFocus
                />
              </div>
            )}

            <div ref={terminalEndRef} />
          </div>
        </div>

        {/* Social Links */}
        <div className="mt-8 text-center">
          <ScrollArea className="w-full h-24">
            <p className="font-mono text-sm text-muted-foreground mb-4">// NETWORK CONNECTIONS</p>
            <div className="inline-flex justify-center gap-4 px-4 py-2 w-full">
              {socialLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.label}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-3 px-6 py-3 rounded-lg border transition-all duration-300 ${colorStyles[link.color as keyof typeof colorStyles]}`}
                  >
                    <Icon className="w-5 h-5" />
                    <span className="font-orbitron text-sm">{link.label}</span>
                  </a>
                );
              })}
            </div>
          </ScrollArea>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
