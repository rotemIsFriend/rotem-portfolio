import { Container } from "@/components/common";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { getPersonalInfo, getFeaturedProjects, getAllSkills } from "@/utils/data";

export default function Home() {
  const personalInfo = getPersonalInfo();
  const featuredProjects = getFeaturedProjects();
  const skills = getAllSkills();

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <Container>
          <div className="text-center">
            <h1 className="text-4xl sm:text-6xl font-bold text-foreground mb-6">
              {personalInfo.name}
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              {personalInfo.bio}
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Button size="lg">View Projects</Button>
              <Button variant="outline" size="lg">Download Resume</Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Featured Projects Preview */}
      <section className="py-20 px-4 bg-muted/50">
        <Container>
          <h2 className="text-3xl font-bold text-center mb-12">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {featuredProjects.slice(0, 2).map((project) => (
              <Card key={project.id}>
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <Badge key={tech} variant="secondary">{tech}</Badge>
                    ))}
                  </div>
                  <Button variant="outline" size="sm">View Project</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Skills Preview */}
      <section className="py-20 px-4">
        <Container>
          <h2 className="text-3xl font-bold text-center mb-12">Technologies I Use</h2>
          <div className="flex flex-wrap gap-3 justify-center">
            {skills.slice(0, 12).map((skill) => (
              <Badge key={skill.id} variant="outline" className="text-sm py-2 px-4">
                {skill.name}
              </Badge>
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
}
