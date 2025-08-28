import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-background/90 gradient-bg"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="animate-float">
          <h1 className="hero-text font-bold mb-6 leading-tight">
            Aniket Kaware
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-muted-foreground mb-8">
            UIUX Designer
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
            Crafting modern, responsive web applications with cutting-edge technologies. 
            Passionate about clean code, user experience, and innovative solutions.
          </p>
        </div>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <Button 
            size="lg" 
            className="glow-button bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg font-semibold"
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
          >
            View My Work
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="glow-button border-primary/50 text-foreground hover:bg-primary/10 px-8 py-6 text-lg font-semibold"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Get In Touch
          </Button>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-6 mb-12">
          <a 
            href="https://github.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-3 rounded-full border border-border hover:border-primary/50 hover:bg-primary/10 transition-all duration-300"
          >
            <Github className="w-6 h-6" />
          </a>
          <a 
            href="https://linkedin.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-3 rounded-full border border-border hover:border-primary/50 hover:bg-primary/10 transition-all duration-300"
          >
            <Linkedin className="w-6 h-6" />
          </a>
          <a 
            href="mailto:alex@example.com"
            className="p-3 rounded-full border border-border hover:border-primary/50 hover:bg-primary/10 transition-all duration-300"
          >
            <Mail className="w-6 h-6" />
          </a>
        </div>

        {/* Scroll Indicator */}
        <button 
          onClick={scrollToAbout}
          className="animate-bounce p-2 rounded-full hover:bg-primary/10 transition-colors duration-300"
        >
          <ArrowDown className="w-6 h-6 text-muted-foreground" />
        </button>
      </div>
    </section>
  );
};

export default HeroSection;