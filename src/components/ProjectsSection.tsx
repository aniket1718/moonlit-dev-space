import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "EduQuest Student Performance Predictor",
    description: "ML-powered student performance prediction system for coaching institutes, featuring data analytics and performance tracking.",
    image: "/placeholder.svg",
    tech: ["Python", "Machine Learning", "Data Analytics", "Scikit-learn"],
    github: "https://github.com/aniket1718/Student-Performance-Predictor-for-EduQuest-Coaching",
    live: "https://github.com/aniket1718/Student-Performance-Predictor-for-EduQuest-Coaching",
    featured: true
  },
  {
    title: "Mobile Banking App Design",
    description: "Modern mobile banking app UI/UX design with intuitive navigation, secure transaction flows, and accessible design principles.",
    image: "/placeholder.svg",
    tech: ["Figma", "UI/UX Design", "Prototyping", "User Research"],
    github: "https://github.com/aniket1718",
    live: "https://github.com/aniket1718",
    featured: true
  },
  {
    title: "Networking Projects",
    description: "Collection of networking protocols and systems implementation in C/C++, including socket programming and network analysis.",
    image: "/placeholder.svg",
    tech: ["C", "C++", "Networking", "Socket Programming"],
    github: "https://github.com/aniket1718/networking",
    live: "https://github.com/aniket1718/networking",
    featured: false
  },
  {
    title: "E-Learning Platform Design",
    description: "Comprehensive UI/UX design for e-learning platform with interactive course modules and progress tracking.",
    image: "/placeholder.svg",
    tech: ["Figma", "User Research", "Wireframing", "Prototyping"],
    github: "https://github.com/aniket1718",
    live: "https://github.com/aniket1718",
    featured: false
  }
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 px-4 bg-card/20">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-title text-center mb-16">Featured Projects</h2>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {projects.filter(p => p.featured).map((project, index) => (
            <Card key={project.title} className="card-hover overflow-hidden">
              <div className="aspect-video bg-muted rounded-t-lg relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                  <div className="text-4xl font-bold text-muted-foreground opacity-50">
                    {project.title.split(' ').map(word => word[0]).join('')}
                  </div>
                </div>
              </div>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span className="text-foreground">{project.title}</span>
                  <div className="flex gap-2">
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Button size="sm" variant="ghost" className="p-2">
                        <Github className="w-4 h-4" />
                      </Button>
                    </a>
                    <a href={project.live} target="_blank" rel="noopener noreferrer">
                      <Button size="sm" variant="ghost" className="p-2">
                        <ExternalLink className="w-4 h-4" />
                      </Button>
                    </a>
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <Badge 
                      key={tech} 
                      variant="secondary"
                      className="bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Other Projects Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {projects.filter(p => !p.featured).map((project, index) => (
            <Card key={project.title} className="card-hover">
              <CardHeader>
                <CardTitle className="flex items-center justify-between text-lg">
                  <span className="text-foreground">{project.title}</span>
                  <div className="flex gap-2">
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Button size="sm" variant="ghost" className="p-1">
                        <Github className="w-4 h-4" />
                      </Button>
                    </a>
                    <a href={project.live} target="_blank" rel="noopener noreferrer">
                      <Button size="sm" variant="ghost" className="p-1">
                        <ExternalLink className="w-4 h-4" />
                      </Button>
                    </a>
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1">
                  {project.tech.map((tech) => (
                    <Badge 
                      key={tech} 
                      variant="outline"
                      className="text-xs border-border hover:border-primary/50 transition-colors"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            size="lg" 
            variant="outline"
            className="glow-button border-primary/50 hover:bg-primary/10"
          >
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
