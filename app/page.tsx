const CALENDLY_URL = "https://calendly.com/dana-flowmade/30min";

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
          href={CALENDLY_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-accent hover:bg-accent-hover text-white text-sm font-medium px-4 py-2 rounded-lg transition"
        >
          Book a Call
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
          I build custom automations for agencies and service businesses that
          replace the manual work slowing you down. Fixed-price projects. Clear
          scope. You get a working system, not a dependency on a freelancer.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#contact"
            className="bg-accent hover:bg-accent-hover text-white font-medium px-8 py-3 rounded-lg text-lg transition"
          >
            Book a Free Call
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
  },
  {
    title: "Client Onboarding Workflows",
    description:
      "Intake forms, document collection, welcome emails, internal notifications, task creation — all triggered the moment a deal closes.",
  },
  {
    title: "Data Sync Between Tools",
    description:
      "Your CRM says one thing, your spreadsheet says another, and your invoicing tool has no idea. I connect them so data flows once and stays consistent.",
  },
  {
    title: "AI-Enhanced Workflows",
    description:
      "Classify incoming emails. Summarize meeting notes. Extract data from documents. Route support tickets by intent. AI plugged into your existing processes.",
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
              <p className="text-text-muted">{service.description}</p>
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
        <div className="flex flex-col md:flex-row gap-8 items-start">
          <img
            src="/dana-headshot.jpeg"
            alt="Dana Lindahl"
            className="w-32 h-32 rounded-xl object-cover shrink-0 mx-auto md:mx-0"
          />
          <div className="space-y-4 text-text-muted text-lg">
            <p>
              I&apos;m Dana. I ran B2B service agencies for 14 years — a lead
              generation agency and a podcast booking agency — before selling
              both in 2026.
            </p>
            <p>
              During that time, I built internal automations to handle the
              operational work that was eating my team&apos;s time: lead
              routing, CRM updates, client reporting, onboarding flows,
              outreach sequencing. The kind of stuff that takes 20 minutes per
              client per day and adds up fast.
            </p>
            <p>
              Now I build those systems for other agencies and service
              businesses. I understand your business because I lived it.
            </p>
            <p className="text-foreground font-medium">
              I&apos;ll tell you upfront if something is or isn&apos;t worth
              automating.
            </p>
          </div>
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
          <blockquote className="text-lg text-text-muted italic mb-6">
            &ldquo;Great experience working with Dana on a marketing ops
            automation project. He scoped exactly what I needed and pointed out
            details I was missing. Delivered within days, and everything works
            flawlessly. I&apos;ve known him for several years and always learn
            something new when I engage with him. Highly recommend.&rdquo;
          </blockquote>
          <div className="flex items-center justify-center gap-3">
            <img
              src="/joe-dejene.jpg"
              alt="Joe Dejene"
              className="w-12 h-12 rounded-full object-cover"
            />
            <div className="text-left">
              <p className="text-sm font-medium text-text-bright">Joe Dejene</p>
              <p className="text-sm text-text-muted">DuckWeed Media</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="py-20 px-6 bg-surface/50">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-text-bright mb-4">
          Let&apos;s Talk About What You Need
        </h2>
        <p className="text-text-muted mb-8">
          Tell me what&apos;s eating your time. I&apos;ll tell you if it&apos;s
          worth automating and what it would cost.
        </p>
        <a
          href={CALENDLY_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-accent hover:bg-accent-hover text-white font-medium px-8 py-4 rounded-lg text-lg transition"
        >
          Book a Free 30-Minute Call
        </a>
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
