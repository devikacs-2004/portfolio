import { useState } from 'react';
import { Mail, Linkedin, Github, Send, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const socialLinks = [
  {
    icon: Mail,
    label: 'Email',
    href: 'mailto:devikasubij6@gmail.com',
    display: 'devikasubij6@gmail.com',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/devika-cs-594511286',
    display: 'linkedin.com/in/devika-cs-594511286',
  },
  {
    icon: Github,
    label: 'GitHub',
    href: 'https://github.com/devikacs-2004',
    display: 'github.com/devikacs-2004',
  },
];

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const response = await fetch('https://formspree.io/f/mvzyrpvb', {
        method: 'POST',
        body: data,
        headers: {
          Accept: 'application/json',
        },
      });

      if (response.ok) {
        setIsSubmitted(true);
        form.reset();
        toast({
          title: 'Message sent!',
          description: "Thank you for reaching out. I'll get back to you soon.",
        });
        setTimeout(() => setIsSubmitted(false), 4000);
      } else {
        toast({
          title: 'Something went wrong',
          description: 'Please try again or email me directly.',
        });
      }
    } catch (error) {
      toast({
        title: 'Network error',
        description: 'Please check your connection and try again.',
      });
    }

    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="section-container">
      <div className="text-center mb-16">
        <h2 className="section-title">Get In Touch</h2>
        <p className="section-subtitle max-w-2xl mx-auto">
          Open to opportunities in Data Science and Data Analytics
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 max-w-5xl mx-auto">
        {/* Contact Form */}
        <div className="order-2 lg:order-1">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <Input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className="bg-card border-border focus:border-primary"
              />
            </div>
            <div>
              <Input
                type="email"
                name="email"
                placeholder="your@email.com"
                required
                className="bg-card border-border focus:border-primary"
              />
            </div>
            <div>
              <Textarea
                name="message"
                placeholder="Your Message"
                rows={5}
                required
                className="bg-card border-border focus:border-primary resize-none"
              />
            </div>
            <Button
              type="submit"
              variant="hero"
              size="lg"
              className="w-full"
              disabled={isSubmitting || isSubmitted}
            >
              {isSubmitted ? (
                <>
                  <CheckCircle className="w-5 h-5 mr-2" />
                  Message Sent!
                </>
              ) : isSubmitting ? (
                'Sending...'
              ) : (
                <>
                  <Send className="w-5 h-5 mr-2" />
                  Send Message
                </>
              )}
            </Button>
          </form>
        </div>

        {/* Contact Info */}
        <div className="order-1 lg:order-2">
          <h3 className="font-display font-semibold text-xl mb-6">
            Let's connect
          </h3>
          <p className="text-muted-foreground mb-8 leading-relaxed">
            Whether you have an opportunity, a project, or just want to chat about data —
            I'd love to hear from you.
          </p>

          <div className="space-y-4">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl border border-border bg-card hover:border-primary/30 card-hover group"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <link.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-sm">{link.label}</p>
                  <p className="text-muted-foreground text-sm">{link.display}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}