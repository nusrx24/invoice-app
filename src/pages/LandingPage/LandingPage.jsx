import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./LandingPage.css";

/* ── Scroll-reveal hook ── */
const useScrollReveal = () => {
  useEffect(() => {
    const els = document.querySelectorAll(".fade-up");
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("visible"); }),
      { threshold: 0.12 }
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
};

/* ── Data ── */
const features = [
  { icon: "⚡", title: "Instant Generation", desc: "Create professional invoices in under 60 seconds. Fill in the details and your invoice is ready to send." },
  { icon: "🎨", title: "Beautiful Templates", desc: "Choose from handcrafted templates that make your brand look polished and trustworthy to every client." },
  { icon: "📄", title: "One-Click PDF Export", desc: "Download pixel-perfect PDFs instantly. Share directly from your browser — no installs, no friction." },
  { icon: "📊", title: "Dashboard Overview", desc: "Track all your invoices at a glance. Know what's paid, pending, or overdue without digging through files." },
  { icon: "🔒", title: "Secure & Private", desc: "Your data stays yours. We use industry-standard encryption to keep every invoice safe and confidential." },
  { icon: "📱", title: "Works Everywhere", desc: "Fully responsive across desktop, tablet, and mobile. Invoice on the go, anytime, anywhere." },
];

const steps = [
  { num: "01", title: "Add Your Details", desc: "Enter your business info, client name, and services rendered. Takes less than a minute." },
  { num: "02", title: "Customize & Preview", desc: "Choose a template, set your currency, add due dates and notes. See a live preview instantly." },
  { num: "03", title: "Export & Send", desc: "Download as a professional PDF or share a link directly with your client. Done." },
];

const testimonials = [
  { text: "QuickInvoice completely changed how I bill my clients. It's the first tool that actually looks as good as the work I do.", name: "Sofia Reyes", role: "Brand Designer", initial: "S" },
  { text: "I used to dread invoicing. Now I generate one in two minutes and it looks incredible. My clients always comment on it.", name: "James Okafor", role: "Freelance Developer", initial: "J" },
  { text: "The dashboard alone is worth it. Finally I know exactly what I'm owed and what's been paid without any spreadsheets.", name: "Priya Nair", role: "Marketing Consultant", initial: "P" },
];

const LandingPage = () => {
  useScrollReveal();

  return (
    <div className="lp-root">

      {/* ══════════ HERO ══════════ */}
      <section className="lp-hero">
        <div className="lp-hero-grid" />

        <div className="lp-hero-badge">
          <span /> Live · Now Available
        </div>

        <h1 className="lp-hero-title">
          Invoicing,
          <em>Reimagined.</em>
        </h1>

        <p className="lp-hero-sub">
          Create stunning, professional invoices in seconds. Built for freelancers
          and agencies who care about how they present themselves.
        </p>

        <div className="lp-hero-actions">
          <Link to="/generate" className="btn-gold">
            <span>Create Your First Invoice</span>
            <span>→</span>
          </Link>
          <Link to="/dashboard" className="btn-outline">
            View Dashboard
          </Link>
        </div>

        <div className="lp-scroll-hint">
          <div className="lp-scroll-line" />
          Scroll
        </div>
      </section>

      {/* ══════════ STATS ══════════ */}
      <section className="lp-stats">
        <div className="lp-stats-inner">
          {[
            { num: "12k+", label: "Invoices Created" },
            { num: "98%",  label: "Client Satisfaction" },
            { num: "< 60s", label: "Avg. Creation Time" },
            { num: "Free",  label: "To Get Started" },
          ].map((s) => (
            <div className="lp-stat fade-up" key={s.label}>
              <div className="lp-stat-num">{s.num}</div>
              <div className="lp-stat-label">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ══════════ FEATURES ══════════ */}
      <section className="lp-features">
        <p className="lp-section-label fade-up">Everything You Need</p>
        <h2 className="lp-section-title fade-up">
          Built for the way <em>you work</em>
        </h2>
        <p className="lp-section-sub fade-up">
          No bloat. No learning curve. Just the tools that matter, beautifully executed.
        </p>

        <div className="lp-features-grid">
          {features.map((f, i) => (
            <div className="lp-feature-card" key={f.title}>
              <span className="lp-feature-num">0{i + 1}</span>
              <div className="lp-feature-icon">{f.icon}</div>
              <h3 className="lp-feature-title">{f.title}</h3>
              <p className="lp-feature-desc">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ══════════ HOW IT WORKS ══════════ */}
      <section className="lp-how">
        <div className="lp-how-inner">
          <div>
            <p className="lp-section-label fade-up">How It Works</p>
            <h2 className="lp-section-title fade-up" style={{ textAlign: "left", margin: "0 0 48px" }}>
              Three steps to a <em>perfect invoice</em>
            </h2>
            <div className="lp-steps">
              {steps.map((s) => (
                <div className="lp-step fade-up" key={s.num}>
                  <div className="lp-step-num">{s.num}</div>
                  <div className="lp-step-content">
                    <h3>{s.title}</h3>
                    <p>{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mock Invoice */}
          <div className="lp-how-visual fade-up">
            <div className="lp-invoice-mock">
              <div className="lp-mock-header">
                <div className="lp-mock-logo">QuickInvoice</div>
                <div className="lp-mock-badge">PAID</div>
              </div>
              <div className="lp-mock-row">
                <span className="label">Invoice #</span>
                <span className="value">INV-0042</span>
              </div>
              <div className="lp-mock-row">
                <span className="label">Client</span>
                <span className="value">Acme Corp.</span>
              </div>
              <div className="lp-mock-row">
                <span className="label">Issue Date</span>
                <span className="value">Feb 28, 2026</span>
              </div>
              <hr className="lp-mock-divider" />
              <div className="lp-mock-row">
                <span className="label">UI Design — 20h</span>
                <span className="value">$2,400</span>
              </div>
              <div className="lp-mock-row">
                <span className="label">Development — 15h</span>
                <span className="value">$2,100</span>
              </div>
              <div className="lp-mock-row">
                <span className="label">Strategy Session</span>
                <span className="value">$500</span>
              </div>
              <div className="lp-mock-total">
                <span className="label">Total Due</span>
                <span className="value">$5,000</span>
              </div>
              <div className="lp-mock-actions">
                <div className="lp-mock-btn primary">Download PDF</div>
                <div className="lp-mock-btn secondary">Share Link</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════ TESTIMONIALS ══════════ */}
      <section className="lp-testimonials">
        <p className="lp-section-label fade-up">Testimonials</p>
        <h2 className="lp-section-title fade-up">
          Loved by <em>creators</em>
        </h2>
        <p className="lp-section-sub fade-up">
          Join thousands of freelancers who've upgraded how they get paid.
        </p>

        <div className="lp-testimonials-grid">
          {testimonials.map((t) => (
            <div className="lp-testimonial fade-up" key={t.name}>
              <div className="lp-stars">
                {[...Array(5)].map((_, i) => <span className="lp-star" key={i}>★</span>)}
              </div>
              <div className="lp-testimonial-quote">"</div>
              <p className="lp-testimonial-text">{t.text}</p>
              <div className="lp-testimonial-author">
                <div className="lp-testimonial-avatar">{t.initial}</div>
                <div>
                  <div className="lp-testimonial-name">{t.name}</div>
                  <div className="lp-testimonial-role">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ══════════ PRICING ══════════ */}
      <section className="lp-pricing">
        <p className="lp-section-label fade-up">Pricing</p>
        <h2 className="lp-section-title fade-up">
          Simple, <em>honest</em> pricing
        </h2>
        <p className="lp-section-sub fade-up" style={{ marginBottom: "72px" }}>
          No hidden fees. No credit card required to get started.
        </p>

        <div className="lp-pricing-grid">
          {/* Free */}
          <div className="lp-plan fade-up">
            <p className="lp-plan-label">Starter</p>
            <div className="lp-plan-price"><sup>$</sup>0</div>
            <p className="lp-plan-period">Forever free</p>
            <ul className="lp-plan-features">
              <li>Up to 5 invoices / month</li>
              <li>2 templates</li>
              <li>PDF export</li>
              <li>Basic dashboard</li>
            </ul>
            <Link to="/generate" className="btn-outline" style={{ width: "100%", justifyContent: "center" }}>
              Get Started Free
            </Link>
          </div>

          {/* Pro */}
          <div className="lp-plan featured fade-up">
            <p className="lp-plan-label">Pro</p>
            <div className="lp-plan-price"><sup>$</sup>12</div>
            <p className="lp-plan-period">per month, billed annually</p>
            <ul className="lp-plan-features">
              <li>Unlimited invoices</li>
              <li>All premium templates</li>
              <li>Client management</li>
              <li>Full analytics dashboard</li>
              <li>Priority support</li>
            </ul>
            <Link to="/generate" className="btn-gold" style={{ width: "100%", justifyContent: "center" }}>
              <span>Start Pro Trial</span>
              <span>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════ CTA ══════════ */}
      <section className="lp-cta">
        <div className="lp-cta-inner">
          <h2 className="lp-cta-title fade-up">
            Ready to get <em>paid</em> like a pro?
          </h2>
          <p className="lp-cta-sub fade-up">
            Create your first invoice right now — it takes less than a minute.
          </p>
          <div className="fade-up">
            <Link to="/generate" className="btn-gold">
              <span>Create Your First Invoice</span>
              <span>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════ FOOTER ══════════ */}
      <footer className="lp-footer">
        <div className="lp-footer-inner">
          <div className="lp-footer-brand">QuickInvoice</div>
          <p className="lp-footer-copy">© 2026 QuickInvoice. All rights reserved.</p>
          <ul className="lp-footer-links">
            <li><a href="#">Privacy</a></li>
            <li><a href="#">Terms</a></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
      </footer>

    </div>
  );
};

export default LandingPage;