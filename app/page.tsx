const CALENDLY_URL = "https://calendly.com/dana-flowmade/30min";

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <Services />
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
          <a href="#services" className="hover:text-text-bright transition">
            Services
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
          The systems behind your sales.
        </h1>
        <p className="text-lg sm:text-xl text-text-muted mb-8 max-w-2xl mx-auto">
          Outbound that fills your pipeline with qualified sales calls, plus the
          automation that runs everything behind it: follow-up, CRM, onboarding,
          reporting. More customers, and a back office that runs itself.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#contact"
            className="bg-accent hover:bg-accent-hover text-white font-medium px-8 py-3 rounded-lg text-lg transition"
          >
            Book a Free Call
          </a>
          <a
            href="#services"
            className="border border-surface-light hover:border-text-muted text-text-muted hover:text-text-bright font-medium px-8 py-3 rounded-lg text-lg transition"
          >
            See What You Get
          </a>
        </div>
      </div>
    </section>
  );
}

const services = [
  {
    tag: "Outbound",
    title: "Qualified sales calls, booked for you",
    description:
      "A done-for-you outbound engine that puts qualified meetings on your calendar without hiring an SDR. Infrastructure, targeting, copy, deliverability, and every reply: handled.",
    points: [
      "Pre-warmed sending domains and inboxes",
      "A targeted list of the people you actually want to reach",
      "Fresh, tested copy every week",
      "Every reply worked, calls booked onto your calendar",
    ],
    note: "Performance-based: you pay per booked meeting, not for activity.",
  },
  {
    tag: "Automation & AI",
    title: "A back office that runs itself",
    description:
      "The leads you already have stop slipping through the cracks. The manual work behind your sales and marketing gets automated, so your team stops doing by hand what a system does in seconds.",
    points: [
      "Lead capture to CRM to automatic follow-up",
      "Client onboarding triggered the moment a deal closes",
      "Your tools kept in sync so data stays consistent",
      "AI steps: classify, summarize, extract, route",
    ],
    note: "Working systems you own, with documentation.",
  },
];

function Services() {
  return (
    <section id="services" className="py-20 px-6 bg-surface/50">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-text-bright text-center mb-4">
          Fill Your Pipeline, Then Run It
        </h2>
        <p className="text-text-muted text-center mb-12 max-w-2xl mx-auto">
          Most clients start with outbound to fill the pipeline, then automate
          the operation behind it. Start with either.
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-surface border border-surface-light rounded-xl p-8 hover:border-accent/50 transition flex flex-col"
            >
              <span className="text-xs font-semibold uppercase tracking-wide text-accent mb-3">
                {service.tag}
              </span>
              <h3 className="text-xl font-semibold text-text-bright mb-3">
                {service.title}
              </h3>
              <p className="text-text-muted mb-5">{service.description}</p>
              <ul className="space-y-2 mb-6">
                {service.points.map((point) => (
                  <li
                    key={point}
                    className="text-text-muted flex gap-2 items-start"
                  >
                    <span className="text-accent shrink-0">&rarr;</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
              <p className="text-sm text-foreground font-medium mt-auto pt-4 border-t border-surface-light">
                {service.note}
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
    title: "Find where the revenue is leaking",
    description:
      "A quick call pinpoints it: either not enough sales conversations, or leaks in the ones already coming in. Usually both.",
  },
  {
    number: "02",
    title: "Get a clear scope and price",
    description:
      "Outbound, back-office automation, or both. A clear scope, a clear price, and a timeline before anything starts.",
  },
  {
    number: "03",
    title: "It runs",
    description:
      "Meetings land on your calendar and your systems run in the background. On the outbound side, you only pay when a meeting is booked.",
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
          Built by Someone Who Ran the Playbook
        </h2>
        <div className="flex flex-col md:flex-row gap-8 items-start">
          <img
            src="/dana-headshot.jpeg"
            alt="Dana Lindahl"
            className="w-32 h-32 rounded-xl object-cover shrink-0 mx-auto md:mx-0"
          />
          <div className="space-y-4 text-text-muted text-lg">
            <p>
              I&apos;m Dana. I spent 14 years running B2B service agencies,
              including years in lead generation, before selling the business
              in January 2026.
            </p>
            <p>
              That means both sides of what FlowMade sells were built and run in
              a real business first: the outbound systems that put meetings on
              the calendar, and the automations that handled the operational
              work eating a team&apos;s time. Lead routing, CRM updates,
              reporting, onboarding, follow-up. The work that quietly takes 20
              minutes per client per day and adds up fast.
            </p>
            <p>
              FlowMade does both for other agencies and service businesses, from
              someone who understands your business because he ran one.
            </p>
            <p className="text-foreground font-medium">
              You&apos;ll get told straight if something isn&apos;t worth doing.
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
            &ldquo;Dana has handled both sides of my growth. His cold email
            system booked me 12 qualified sales calls in the first 30 days, and
            he automated the marketing ops behind it so none of them slipped
            through the cracks. He scoped exactly what I needed, delivered within
            days, and everything works. I&apos;ve known him for years and always
            learn something new when I work with him. Highly recommend.&rdquo;
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
          Let&apos;s Talk About Where You&apos;re Losing Revenue
        </h2>
        <p className="text-text-muted mb-8">
          One call tells you whether the gap is too few sales conversations, too
          much leakage in the ones you have, or both, and exactly what&apos;s
          worth building.
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
          Not ready for a call? Email{" "}
          <a
            href="mailto:dana@flowmade.io"
            className="text-text-bright underline hover:text-accent transition"
          >
            dana@flowmade.io
          </a>{" "}
          with where you&apos;re losing revenue.
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
