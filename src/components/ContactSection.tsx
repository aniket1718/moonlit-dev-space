import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, MapPin, Phone, Github, Linkedin, Twitter } from "lucide-react";

const ContactSection = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "aniketkaware57@gmail.com",
      href: "mailto:aniketkaware57@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 8999062024",
      href: "tel:+918999062024"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Ambajogai, Maharashtra",
      href: "#"
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/aniket1718",
      color: "hover:text-foreground"
    },
    {
      icon: Linkedin,
      label: "LinkedIn", 
      href: "https://linkedin.com",
      color: "hover:text-blue-400"
    },
    {
      icon: Twitter,
      label: "Twitter",
      href: "https://twitter.com",
      color: "hover:text-blue-400"
    }
  ];

  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="section-title text-center mb-16">Get In Touch</h2>
        
        <div className="text-center mb-12">
          <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Ready to bring your ideas to life? I'm always open to discussing new opportunities, 
            innovative projects, and interesting challenges.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {contactInfo.map((item, index) => (
            <Card key={item.label} className="card-hover text-center">
              <CardContent className="p-6">
                <div className="flex justify-center mb-4">
                  <div className="p-3 rounded-full bg-primary/10 text-primary">
                    <item.icon className="w-6 h-6" />
                  </div>
                </div>
                <h3 className="font-semibold text-foreground mb-2">{item.label}</h3>
                {item.href !== "#" ? (
                  <a 
                    href={item.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {item.value}
                  </a>
                ) : (
                  <span className="text-muted-foreground">{item.value}</span>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="card-hover">
          <CardContent className="p-8">
            <div className="text-center">
              <h3 className="text-2xl font-semibold text-foreground mb-4">
                Let's Work Together
              </h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Whether you have a project in mind, need consultation, or just want to say hello, 
                I'd love to hear from you. Drop me a line and let's create something amazing together.
              </p>
              
              <div className="flex justify-center gap-4 mb-8">
                {socialLinks.map((social, index) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 rounded-full border border-border hover:border-primary/50 hover:bg-primary/10 transition-all duration-300 text-muted-foreground ${social.color}`}
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>

              <Button 
                size="lg"
                className="glow-button bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg font-semibold"
                onClick={() => window.open('mailto:aniketkaware57@gmail.com', '_blank')}
              >
                Send Message
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ContactSection;