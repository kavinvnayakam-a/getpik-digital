import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function Home() {
  const heroImage = PlaceHolderImages.find(img => img.id === 'homepage-hero');

  return (
    <div className="flex flex-col animate-in fade-in duration-500">
      <div className="relative w-full h-[60vh] md:h-[80vh]">
        {heroImage && (
          <Image
            src={heroImage.imageUrl}
            alt={heroImage.description}
            fill
            className="object-cover"
            data-ai-hint={heroImage.imageHint}
            priority
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-center justify-center">
          <div className="text-center text-white p-8 max-w-4xl">
            <h1 className="font-headline text-4xl md:text-7xl font-bold leading-tight">
              Creative Solutions. Real Results.
            </h1>
            <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-primary-foreground/80">
              Let us help you elevate your brand's digital presence.
            </p>
            <Button asChild className="mt-8" size="lg">
              <Link href="/portfolio">
                See Our Work <ArrowRight className="ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-headline text-3xl md:text-4xl font-bold">
            Welcome to GetPik Agency
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Your partner in digital growth. We build stunning websites and craft
            marketing strategies that deliver results.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard
            title="AI-Powered SEO"
            description="Leverage our cutting-edge AI tool to analyze and boost your website's search engine ranking."
            href="/seo-analyzer"
          />
          <FeatureCard
            title="Content Brainstorming"
            description="Generate compelling content ideas for your blog, social media, and more with our AI content generator."
            href="/content-generator"
          />
          <FeatureCard
            title="Client-Centric Approach"
            description="We work closely with you to understand your vision and deliver solutions that exceed expectations."
            href="/clients"
          />
        </div>
      </div>
    </div>
  );
}

function FeatureCard({
  title,
  description,
  href,
}: {
  title: string;
  description: string;
  href: string;
}) {
  return (
    <Card className="hover:shadow-xl transition-shadow bg-card/50 hover:bg-card">
      <CardContent className="p-6">
        <h3 className="font-headline text-xl font-bold mb-2">{title}</h3>
        <p className="text-muted-foreground mb-4">{description}</p>
        <Button asChild variant="link" className="p-0 h-auto text-primary">
          <Link href={href}>
            Learn More <ArrowRight className="ml-1 w-4 h-4" />
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
}
