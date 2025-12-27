'use client';

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white pt-32 pb-20 px-6 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/5 blur-[120px] rounded-full -z-10" />
      <div className="container mx-auto max-w-4xl">
        <header className="mb-12 text-center">
          <h1 className="text-5xl md:text-7xl font-black italic tracking-tighter uppercase leading-[0.9]">
            Privacy <span className="text-gray-700 not-italic">Protocol.</span>
          </h1>
          <p className="text-gray-500 mt-4 font-medium italic">Last updated: {new Date().toLocaleDateString()}</p>
        </header>

        <div className="prose prose-invert prose-lg max-w-none mx-auto space-y-8 text-gray-400 prose-headings:text-white prose-headings:font-black prose-headings:italic prose-headings:uppercase prose-a:text-blue-500 prose-strong:text-white">
          <section>
            <h2>1. Information We Collect</h2>
            <p>
              We collect information that you provide directly to us when you use our services. This may include personal information such as your name, email address, company name, and project details when you fill out our contact form. We also collect technical data automatically, such as IP addresses, browser type, and usage data through cookies and similar technologies.
            </p>
          </section>

          <section>
            <h2>2. How We Use Your Information</h2>
            <p>
              The data we collect is used to operate and maintain our services, to communicate with you, to respond to your inquiries, and to improve your experience. We may also use this information for internal analytics to understand how our services are used and to enhance our business strategies. We will not share your personal information with third parties without your consent, except as required by law.
            </p>
          </section>
          
          <section>
            <h2>3. Data Security</h2>
            <p>
              We implement a variety of security measures to maintain the safety of your personal information. Your data is stored on secure servers and protected by industry-standard encryption and access controls. However, no method of transmission over the Internet or method of electronic storage is 100% secure.
            </p>
          </section>

          <section>
            <h2>4. Your Rights</h2>
            <p>
              You have the right to access, correct, or delete your personal information that we hold. You can also object to the processing of your personal data. If you wish to exercise any of these rights, please contact us at our designated email address.
            </p>
          </section>

          <section>
            <h2>5. Changes to This Policy</h2>
            <p>
              We may update this Privacy Protocol from time to time. We will notify you of any changes by posting the new policy on this page. You are advised to review this Privacy Protocol periodically for any changes.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
