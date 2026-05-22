import { ArrowDown, FileText, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div
        className="absolute inset-0 opacity-40"
        style={{ background: 'var(--gradient-hero)' }}
      />
      
      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px),
            linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      <div className="section-container text-center relative z-10">
        <div className="animate-fade-up">
          <p className="text-primary font-medium text-sm tracking-widest uppercase mb-6">
            Aspiring Data Scientist · UAE
          </p>
        </div>

        <h1 className="animate-fade-up-delay-1 font-display text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6">
          Devika CS
        </h1>

        <div className="animate-fade-up-delay-2">
          <p className="text-2xl md:text-3xl font-display font-medium text-muted-foreground mb-6">
            <span className="text-gradient">Machine Learning</span> •{' '}
            <span className="text-gradient">Data Science</span> •{' '}
            <span className="text-gradient">GenAI</span>
          </p>

          <p className="text-muted-foreground text-lg max-w-xl mx-auto mb-10">
            Building end-to-end ML systems that turn data into business decisions.
            Learning by doing. Shipping real products.
          </p>
        </div>

        <div className="animate-fade-up-delay-3 flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="hero" size="lg" asChild>
            <a href="#contact">
              <Mail className="mr-2 h-5 w-5" />
              Contact Me
            </a>
          </Button>
          <Button variant="heroOutline" size="lg" asChild>
            <a href="#projects">
              <FileText className="mr-2 h-5 w-5" />
              View Projects
            </a>
          </Button>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <a
            href="#about"
            className="text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Scroll to about section"
          >
            <ArrowDown size={24} />
          </a>
        </div>
      </div>
    </section>
  );
}