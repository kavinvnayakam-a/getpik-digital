'use client';

export default function CookiesPage() {
  return (
    <div className="min-h-screen text-foreground pt-32 pb-20 px-6 relative overflow-hidden">
      <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-primary/5 blur-[120px] rounded-full -z-10" />
      <div className="container mx-auto max-w-4xl">
        <header className="mb-12 text-center">
          <h1 className="text-5xl md:text-7xl font-black italic tracking-tighter uppercase leading-[0.9]">
            Cookie <span className="text-muted-foreground/80 not-italic">Policy.</span>
          </h1>
          <p className="text-muted-foreground mt-4 font-medium italic">Last updated: {new Date().toLocaleDateString()}</p>
        </header>

        <div className="prose prose-lg max-w-none mx-auto space-y-8 text-muted-foreground prose-headings:text-foreground prose-headings:font-black prose-headings:italic prose-headings:uppercase prose-a:text-primary prose-strong:text-foreground">
          <section>
            <h2>What Are Cookies?</h2>
            <p>
              Cookies are small text files stored on your device (computer, tablet, mobile phone) when you visit certain websites. They are used to 'remember' you and your preferences, either for a single visit (through a 'session cookie') or for multiple repeat visits (using a 'persistent cookie').
            </p>
          </section>

          <section>
            <h2>How We Use Cookies</h2>
            <p>
              Our systems utilize cookies to enhance your operational experience. We use them for several purposes, including:
            </p>
            <ul>
              <li><strong>Essential Operations:</strong> Some cookies are essential for you to be able to experience the full functionality of our site. They allow us to maintain user sessions and prevent any security threats.</li>
              <li><strong>Performance Analytics:</strong> These cookies store information like the number of visitors to the website, which pages have been visited, the source of the visit, etc. This data helps us understand and analyze how well the website performs and where it needs improvement.</li>
              <li><strong>Functionality:</strong> These are the cookies that help certain non-essential functionalities on our website. These functionalities include embedding content like videos or sharing content of the website on social media platforms.</li>
            </ul>
          </section>

          <section>
            <h2>Your Choices Regarding Cookies</h2>
            <p>
              If you prefer to avoid the use of cookies on this website, you must first disable the use of cookies in your browser and then delete the cookies saved in your browser associated with this website. You may use this option for preventing the use of cookies at any time.
            </p>
            <p>
              If you do not accept our cookies, you may experience some inconvenience in your use of the website and some features may not function properly.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
