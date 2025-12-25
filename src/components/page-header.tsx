import { cn } from '@/lib/utils';

type PageHeaderProps = {
  title: string;
  description?: string;
  className?: string;
};

export default function PageHeader({
  title,
  description,
  className,
}: PageHeaderProps) {
  return (
    <div className={cn('mb-8', className)}>
      <h1 className="font-headline text-3xl font-bold tracking-tight text-foreground md:text-4xl">
        {title}
      </h1>
      {description && (
        <p className="mt-2 max-w-3xl text-lg text-muted-foreground">
          {description}
        </p>
      )}
    </div>
  );
}
