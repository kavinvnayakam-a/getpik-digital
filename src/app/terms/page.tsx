'use client';

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground pt-32 pb-20 px-6 relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/5 blur-[120px] rounded-full -z-10" />
      <div className="container mx-auto max-w-4xl">
        <header className="mb-12 text-center">
          <h1 className="text-5xl md:text-7xl font-black italic tracking-tighter uppercase leading-[0.9]">
            Terms of <span className="text-muted-foreground/80 not-italic">Service.</span>
          </h1>
          <p className="text-muted-foreground mt-4 font-medium italic">Last updated: {new Date().toLocaleDateString()}</p>
        </header>

        <div className="prose prose-lg max-w-none mx-auto space-y-8 text-muted-foreground prose-headings:text-foreground prose-headings:font-black prose-headings:italic prose-headings:uppercase prose-a:text-primary prose-strong:text-foreground">
          <section>
            <h2>1. Agreement to Terms</h2>
            <p>
              By accessing or using our website and services, you agree to be bound by these Terms of Service and our Privacy Policy. If you do not agree to all the terms and conditions, then you may not access the website or use any services.
            </p>
          </section>

          <section>
            <h2>2. Intellectual Property</h2>
            <p>
              The Service and its original content (excluding content provided by users), features, and functionality are and will remain the exclusive property of GetPik Agency and its licensors. Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of GetPik Agency.
            </p>
          </section>

          <section>
            <h2>3. User Responsibilities</h2>
            <p>
              You are responsible for your use of the services and for any content you provide, including compliance with applicable laws, rules, and regulations. You should only provide content that you are comfortable sharing with others.
            </p>
          </section>
          
          <section>
            <h2>4. Limitation of Liability</h2>
            <p>
              In no event shall GetPik Agency, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the Service.
            </p>
          </section>

          <section>
            <h2>5. Governing Law</h2>
            <p>
              These Terms shall be governed and construed in accordance with the laws of our jurisdiction, without regard to its conflict of law provisions.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
