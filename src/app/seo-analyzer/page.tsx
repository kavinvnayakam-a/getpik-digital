'use client';

import { useFormState, useFormStatus } from 'react-dom';
import { analyzeSeoAction } from './actions';
import PageHeader from '@/components/page-header';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Search, Loader2 } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

const initialState = {
  message: '',
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full">
      {pending ? <Loader2 className="animate-spin" /> : 'Analyze SEO'}
    </Button>
  );
}

export default function SeoAnalyzerPage() {
  const [state, formAction] = useFormState(analyzeSeoAction, initialState);

  return (
    <div className="container mx-auto animate-in fade-in duration-500 px-4 py-8">
      <PageHeader
        title="SEO Analysis Tool"
        description="Analyze your website's SEO and get AI-powered suggestions for improvement."
      />

      <div className="grid gap-8 md:grid-cols-3">
        <Card className="h-fit md:col-span-1">
          <CardHeader>
            <CardTitle className="font-headline">Analysis Target</CardTitle>
          </CardHeader>
          <CardContent>
            <form action={formAction} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="websiteUrl">Website URL</Label>
                <Input
                  id="websiteUrl"
                  name="websiteUrl"
                  placeholder="https://example.com"
                  type="url"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="keywords">Target Keywords</Label>
                <Input
                  id="keywords"
                  name="keywords"
                  placeholder="e.g., digital marketing, web design"
                  required
                />
                <p className="text-xs text-muted-foreground">
                  Separate keywords with commas.
                </p>
              </div>
              <SubmitButton />
            </form>
            {state.message !== 'success' && state.message !== '' && (
              <Alert variant="destructive" className="mt-4">
                <AlertDescription>{state.message}</AlertDescription>
              </Alert>
            )}
          </CardContent>
        </Card>

        <div className="md:col-span-2">
          <h2 className="font-headline mb-4 text-2xl font-bold">
            Analysis Results
          </h2>
          <div className="space-y-4">
            {!state.data && (
              <Card className="flex flex-col items-center justify-center border-dashed p-12 text-center">
                <Search className="h-12 w-12 text-muted-foreground" />
                <p className="mt-4 text-muted-foreground">
                  Your SEO analysis will appear here.
                </p>
              </Card>
            )}
            {state.data && (
              <Card>
                <CardHeader>
                  <CardTitle className="font-headline">
                    Analysis Summary
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="whitespace-pre-wrap">
                    {state.data.analysisSummary}
                  </p>
                </CardContent>
                <Separator />
                <CardHeader>
                  <CardTitle className="font-headline">Suggestions</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="whitespace-pre-wrap">
                    {state.data.suggestions}
                  </p>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
