// app/projects/page.tsx
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { projects } from "@/lib/data";
import { Github, ArrowUpRight } from "lucide-react";

const basePath = process.env.BASE_PATH || "";

export default function ProjectsPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Projects & Awards</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <Card key={index} className="flex flex-col">
            {project.imageUrl && (
              <CardHeader className="p-0">
                <Image
                  src={`${basePath}${project.imageUrl}`}
                  alt={project.title}
                  width={600}
                  height={340}
                  className="rounded-t-lg object-cover aspect-video"
                />
              </CardHeader>
            )}
            <div className="flex flex-col flex-grow p-6">
              <CardTitle className="mb-2">{project.title}</CardTitle>
              <p className="text-muted-foreground text-sm flex-grow">
                {project.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <Badge key={tag} variant="secondary">{tag}</Badge>
                ))}
              </div>
            </div>
            <CardFooter>
              <Button asChild variant="outline" className="w-full">
                <Link href={project.link} target="_blank" rel="noopener noreferrer">
                  {project.link.includes("github") ? 
                    <Github className="mr-2 h-4 w-4" /> : 
                    <ArrowUpRight className="mr-2 h-4 w-4" />
                  }
                  View Project
                </Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}