import Image from 'next/image';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import PageHeader from '@/components/page-header';
import { portfolioProjects } from '@/lib/data';
import { ArrowRight } from 'lucide-react';

export default function PortfolioPage() {
  return (
    <div className="container mx-auto animate-in fade-in duration-500 px-4 py-8">
      <PageHeader
        title="Our Work"
        description="We're proud of the work we do. Here are some of our favorite projects."
      />
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {portfolioProjects.map(project => (
          <Card
            key={project.id}
            className="flex flex-col overflow-hidden transition-shadow duration-300 hover:shadow-xl"
          >
            {project.image && (
              <div className="relative h-48 w-full">
                <Image
                  src={project.image.imageUrl}
                  alt={project.title}
                  fill
                  className="object-cover"
                  data-ai-hint={project.image.imageHint}
                />
              </div>
            )}
            <CardHeader>
              <CardTitle className="font-headline">{project.title}</CardTitle>
              <CardDescription>{project.client}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-sm text-muted-foreground">
                {project.description}
              </p>
            </CardContent>
            <CardFooter>
              <Button variant="outline" disabled>
                View Case Study <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
