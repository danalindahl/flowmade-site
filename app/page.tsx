export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <WhatIBuild />
      <HowItWorks />
      <About />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}

function Nav() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-surface-light/50">
      <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#" className="text-xl font-bold text-text-bright">
          FlowMade
        </a>
        <div className="hidden sm:flex gap-6 text-sm text-text-muted">
          <a href="#what-i-build" className="hover:text-text-bright transition">
            What I Build
          </a>
          <a href="#how-it-works" className="hover:text-text-bright transition">
            How It Works
          </a>
          <a href="#about" className="hover:text-text-bright transition">
            About
          </a>
          <a href="#contact" className="hover:text-text-bright transition">
            Contact
          </a>
        </div>
        <a
          href="#contact"
          className="bg-accent hover:bg-accent-hover text-white text-sm font-medium px-4 py-2 rounded-lg transition"
        >
          Get a Quote
        </a>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section className="pt-32 pb-20 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl font-bold text-text-bright leading-tight mb-6">
          Stop doing manually what a workflow can do in seconds.
        </h1>
        <p className="text-lg sm:text-xl text-text-muted mb-8 max-w-2xl mx-auto">
          I build custom automations in{" "}
          <span className="text-foreground font-medium">n8n</span> and{" "}
          <span className="text-foreground font-medium">Make.com</span> for
          agencies and service businesses. Fixed-price projects. Clear scope.
          You get a working system, not a dependency on a freelancer.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#contact"
            className="bg-accent hover:bg-accent-hover text-white font-medium px-8 py-3 rounded-lg text-lg transition"
          >
            Tell Me What You Need Automated
          </a>
          <a
            href="#what-i-build"
            className="border border-surface-light hover:border-text-muted text-text-muted hover:text-text-bright font-medium px-8 py-3 rounded-lg text-lg transition"
          >
            See What I Build
          </a>
        </div>
      </div>
    </section>
  );
}

const services = [
  {
    title: "Lead Capture → CRM → Follow-Up",
    description:
      "New lead comes in from a form, ad, or webhook. It hits your CRM tagged and sorted. A follow-up sequence fires automatically. You never touch it.",
    tools: "Facebook Ads, GoHighLevel, HubSpot, Slack, Gmail",
  },
  {
    title: "Client Onboarding Workflows",
    description:
      "Intake forms, document collection, welcome emails, internal notifications, task creation — all triggered the moment a deal closes.",
    tools: "Typeform, Google Drive, Notion, Slack, Asana",
  },
  {
    title: "Data Sync Between Tools",
    description:
      "Your CRM says one thing, your spreadsheet says another, and your invoicing tool has no idea. I connect them so data flows once and stays consistent.",
    tools: "Google Sheets, Airtable, QuickBooks, Stripe, CRMs",
  },
  {
    title: "AI-Enhanced Workflows",
    description:
      "Classify incoming emails. Summarize meeting notes. Extract data from documents. Route support tickets by intent. LLMs plugged into your existing processes.",
    tools: "OpenAI, Claude, Gmail, Slack, Notion",
  },
];

function WhatIBuild() {
  return (
    <section id="what-i-build" className="py-20 px-6 bg-surface/50">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-text-bright text-center mb-4">
          What I Build
        </h2>
        <p className="text-text-muted text-center mb-12 max-w-2xl mx-auto">
          Every project is scoped, quoted, and delivered as a working system
          with documentation. No retainers. No ongoing dependency.
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-surface border border-surface-light rounded-xl p-6 hover:border-accent/50 transition"
            >
              <h3 className="text-xl font-semibold text-text-bright mb-3">
                {service.title}
              </h3>
              <p className="text-text-muted mb-4">{service.description}</p>
              <p className="text-sm text-text-muted">
                <span className="text-foreground font-medium">
                  Common tools:
                </span>{" "}
                {service.tools}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const steps = [
  {
    number: "01",
    title: "You tell me what's broken",
    description:
      "A quick call or message. What's eating your time? What keeps falling through the cracks? No jargon needed — just tell me the problem.",
  },
  {
    number: "02",
    title: "I scope it and quote it",
    description:
      "You get a fixed price, a clear description of what gets built, and a timeline. Usually 3-7 business days. No surprises.",
  },
  {
    number: "03",
    title: "I build it and hand it off",
    description:
      "You get a working system with documentation. I walk you through it. You own it and run it without me. If something's off, I fix it.",
  },
];

function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 px-6">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-text-bright text-center mb-12">
          How It Works
        </h2>
        <div className="space-y-10">
          {steps.map((step) => (
            <div key={step.number} className="flex gap-6">
              <div className="text-3xl font-bold text-accent/40 font-mono shrink-0">
                {step.number}
              </div>
              <div>
                <h3 className="text-xl font-semibold text-text-bright mb-2">
                  {step.title}
                </h3>
                <p className="text-text-muted">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="py-20 px-6 bg-surface/50">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-text-bright text-center mb-8">
          Built by Someone Who Needed These Systems
        </h2>
        <div className="space-y-4 text-text-muted text-lg">
          <p>
            I&apos;m Dana. I ran B2B service agencies for 14 years — a lead
            generation agency and a podcast booking agency — before selling both
            in 2026.
          </p>
          <p>
            During that time, I built internal automations to handle the
            operational work that was eating my team&apos;s time: lead routing,
            CRM updates, client reporting, onboarding flows, outreach
            sequencing. The kind of stuff that takes 20 minutes per client per
            day and adds up fast.
          </p>
          <p>
            Now I build those systems for other agencies and service businesses.
            I work in{" "}
            <span className="text-foreground font-medium">n8n</span> and{" "}
            <span className="text-foreground font-medium">Make.com</span>. I
            understand your business because I lived it.
          </p>
          <p className="text-foreground font-medium">
            I&apos;ll tell you upfront if something is or isn&apos;t worth
            automating.
          </p>
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-text-bright mb-12">
          What Clients Say
        </h2>
        <div className="bg-surface border border-surface-light rounded-xl p-8">
          <blockquote className="text-lg text-text-muted italic mb-4">
            &ldquo;Dana and his team did a great job on optimizing my LinkedIn
            profile and beginning outreach. I already am working on a few
            potential deals he helped to line up.&rdquo;
          </blockquote>
          <p className="text-sm text-text-muted">— Upwork Client, 5-Star Review</p>
        </div>
        <p className="text-text-muted mt-8 text-sm">
          More testimonials coming as automation projects are completed.
        </p>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="py-20 px-6 bg-surface/50">
      <div className="max-w-xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-text-bright mb-4">
          Let&apos;s Talk About What You Need
        </h2>
        <p className="text-text-muted mb-8">
          Tell me what&apos;s eating your time. I&apos;ll tell you if it&apos;s
          worth automating and what it would cost.
        </p>
        <form
          action="https://formspree.io/f/placeholder"
          method="POST"
          className="space-y-4 text-left"
        >
          <div>
            <label htmlFor="name" className="block text-sm text-text-muted mb-1">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full bg-surface border border-surface-light rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-accent transition"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm text-text-muted mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full bg-surface border border-surface-light rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-accent transition"
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="block text-sm text-text-muted mb-1"
            >
              What do you need automated?
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              required
              placeholder="e.g., 'New leads from Facebook Ads need to get into our CRM with the right tags and trigger a follow-up sequence automatically.'"
              className="w-full bg-surface border border-surface-light rounded-lg px-4 py-3 text-foreground placeholder:text-text-muted/50 focus:outline-none focus:border-accent transition resize-none"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-accent hover:bg-accent-hover text-white font-medium py-3 rounded-lg text-lg transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-surface-light/50">
      <div className="max-w-5xl mx-auto text-center">
        <p className="text-sm text-text-muted">
          &copy; {new Date().getFullYear()} FlowMade. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
