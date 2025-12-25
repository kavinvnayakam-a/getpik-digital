'use client';

import { useFormState, useFormStatus } from 'react-dom';
import { generateIdeasAction } from './actions';
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Lightbulb, Loader2 } from 'lucide-react';
import { Textarea } from '@/components/ui/textarea';

const initialState = {
  message: '',
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full">
      {pending ? <Loader2 className="animate-spin" /> : 'Generate Ideas'}
    </Button>
  );
}

export default function ContentGeneratorPage() {
  const [state, formAction] = useFormState(generateIdeasAction, initialState);

  return (
    <div className="container mx-auto animate-in fade-in duration-500 px-4 py-8">
      <PageHeader
        title="Content Idea Generator"
        description="Brainstorm content for blog posts, website descriptions, and client outreach using AI."
      />

      <div className="grid gap-8 md:grid-cols-3">
        <Card className="h-fit md:col-span-1">
          <CardHeader>
            <CardTitle className="font-headline">Generator Settings</CardTitle>
          </CardHeader>
          <CardContent>
            <form action={formAction} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="contentType">Content Type</Label>
                <Select name="contentType" defaultValue="blog posts" required>
                  <SelectTrigger id="contentType">
                    <SelectValue placeholder="Select a content type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="blog posts">Blog Posts</SelectItem>
                    <SelectItem value="website descriptions">
                      Website Descriptions
                    </SelectItem>
                    <SelectItem value="client outreach emails">
                      Client Outreach Emails
                    </SelectItem>
                    <SelectItem value="social media posts">
                      Social Media Posts
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="industryKeywords">Industry Keywords</Label>
                <Textarea
                  id="industryKeywords"
                  name="industryKeywords"
                  placeholder="e.g., sustainable fashion, digital marketing, SaaS"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="targetAudience">Target Audience (Optional)</Label>
                <Input
                  id="targetAudience"
                  name="targetAudience"
                  placeholder="e.g., millennials, small business owners"
                />
              </div>
              <SubmitButton />
            </form>
          </CardContent>
        </Card>

        <div className="md:col-span-2">
          <h2 className="font-headline mb-4 text-2xl font-bold">
            Generated Ideas
          </h2>
          <div className="space-y-4">
            {state.message !== 'success' && state.message !== '' && (
              <Alert variant="destructive">
                <AlertTitle>Error</AlertTitle>
                <AlertDescription>{state.message}</AlertDescription>
              </Alert>
            )}
            {!state.data && state.message === '' && (
              <Card className="flex flex-col items-center justify-center border-dashed p-12 text-center">
                <Lightbulb className="h-12 w-12 text-muted-foreground" />
                <p className="mt-4 text-muted-foreground">
                  Your content ideas will appear here.
                </p>
              </Card>
            )}
            {state.data?.contentIdeas?.map((idea, index) => (
              <Card key={index}>
                <CardContent className="p-4">
                  <p>{idea}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
