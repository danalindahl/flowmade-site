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
          The leads you pay for stop getting worked the moment your team gets
          busy.
        </h1>
        <p className="text-lg sm:text-xl text-text-muted mb-8 max-w-2xl mx-auto">
          When your team gets busy, follow-up slips and the leads you already
          paid for go cold. I build and run a system that works every one to
          completion, so nothing gets dropped and your people stay on closing.
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
    title: "Every lead worked to completion",
    description:
      "New leads get logged and followed up on a set schedule, chased until they answer or go dead. No lead slips because someone forgot.",
  },
  {
    title: "Your team stays on the closing",
    description:
      "The system handles the chasing and the admin. Your people spend their time on the conversations that are actually ready to buy, not digging through a CRM.",
  },
  {
    title: "The system does the busywork, your people do the talking",
    description:
      "It handles the drafts, the reminders, and the record-keeping in the background. Your leads still talk to a real person on your team.",
  },
  {
    title: "You see exactly what it's doing",
    description:
      "A monthly report: leads worked, follow-ups sent, cold ones revived, and how fast each one got a response. You always know what you're paying for.",
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
          It&apos;s one system, built on the tools you already use and set up
          around how your team sells. I build it, run it, and keep it working
          as your business changes. You get the results and the reporting, not
          another thing to manage.
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
    title: "We find the leak",
    description:
      "A short call. Where do leads come into your business, who is supposed to work them, and where do they go cold? The gap is usually obvious within a few minutes.",
  },
  {
    number: "02",
    title: "I build and launch it",
    description:
      "I stand the system up on your CRM and inbox and get it live in your business. One flat setup fee, no long build cycle.",
  },
  {
    number: "03",
    title: "I run it, and you see the results",
    description:
      "Once it is live, I keep it running, tune it against what is actually converting, and send you the numbers every month. The monthly fee does not start until the system is live and working in your business.",
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
          Built by Someone Who Ran the Business
        </h2>
        <div className="flex flex-col md:flex-row gap-8 items-start">
          <img
            src="/dana-headshot.jpeg"
            alt="Dana Lindahl"
            className="w-32 h-32 rounded-xl object-cover shrink-0 mx-auto md:mx-0"
          />
          <div className="space-y-4 text-text-muted text-lg">
            <p>
              I&apos;m Dana. I spent 14 years running B2B service agencies
              (lead generation, then podcast booking) before selling the
              business in January 2026.
            </p>
            <p>
              I know exactly what it feels like to pay for leads and then watch
              them slip because everyone is busy doing the actual work. I built
              systems to fix that inside my own business: lead routing, CRM
              updates, follow-up sequencing, reporting. The boring stuff that
              decides whether the leads you paid for turn into money.
            </p>
            <p>
              Now I build and run those systems for other agencies and service
              businesses. I understand your business because I lived it.
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
            &ldquo;Dana scoped exactly what I needed, caught a couple of things
            I&apos;d completely missed, and had it built and running within
            days. And he doesn&apos;t just hand it off and disappear, it
            actually keeps working. I&apos;ve known him for years and I still
            learn something every time we talk. If leads are slipping through
            the cracks in your business, talk to him.&rdquo;
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
          Let&apos;s Find Out Where You&apos;re Leaking
        </h2>
        <p className="text-text-muted mb-8">
          Tell me how leads come into your business today. I&apos;ll show you
          where they&apos;re going cold and what it would take to fix it.
        </p>
        <a
          href={CALENDLY_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-accent hover:bg-accent-hover text-white font-medium px-8 py-4 rounded-lg text-lg transition"
        >
          Book a Free 30-Minute Call
        </a>
        <p className="text-text-muted text-sm mt-6">
          Not ready for a call? Email me at{" "}
          <a
            href="mailto:dana@flowmade.io"
            className="text-text-bright underline hover:text-accent transition"
          >
            dana@flowmade.io
          </a>{" "}
          and tell me how leads come in today. I&apos;ll tell you straight where
          they&apos;re leaking.
        </p>
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
