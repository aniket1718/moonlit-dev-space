import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Database, Globe, Smartphone } from "lucide-react";

const skills = [
  { category: "Frontend", icon: Globe, techs: ["React", "TypeScript", "Tailwind CSS", "Next.js", "Vue.js"] },
  { category: "Backend", icon: Database, techs: ["Node.js", "Python", "PostgreSQL", "MongoDB", "Redis"] },
  { category: "Mobile", icon: Smartphone, techs: ["React Native", "Flutter", "Expo", "PWA"] },
  { category: "Tools", icon: Code, techs: ["Git", "Docker", "AWS", "Vercel", "Figma"] }
];

const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-title text-center mb-16">About Me</h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-foreground">
              Passionate Developer & Problem Solver
            </h3>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              With over 5 years of experience in web development, I specialize in creating 
              scalable, user-friendly applications that solve real-world problems. My journey 
              started with a curiosity about how websites work, and it has evolved into a 
              passion for building exceptional digital experiences.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              I believe in writing clean, maintainable code and staying up-to-date with 
              the latest technologies. When I'm not coding, you can find me contributing 
              to open-source projects or exploring new frameworks and tools.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            {skills.map((skill, index) => (
              <Card key={skill.category} className="card-hover p-6">
                <CardContent className="p-0">
                  <div className="flex items-center mb-4">
                    <skill.icon className="w-8 h-8 text-primary mr-3" />
                    <h4 className="text-lg font-semibold text-foreground">{skill.category}</h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {skill.techs.map((tech) => (
                      <Badge 
                        key={tech} 
                        variant="secondary" 
                        className="bg-secondary/50 text-secondary-foreground hover:bg-primary/20 transition-colors"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">50+</div>
            <div className="text-muted-foreground">Projects Completed</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">5+</div>
            <div className="text-muted-foreground">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">30+</div>
            <div className="text-muted-foreground">Happy Clients</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">24/7</div>
            <div className="text-muted-foreground">Support</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;