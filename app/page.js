"use client";

export default function Page() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Header */}
      <header className="border-b">
        <div className="container py-3" style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div className="font-semibold">Fazil Khan</div>
          <nav style={{ display: "flex", gap: "1rem" }}>
            <a href="#about" className="text-muted">About</a>
            <a href="#skills" className="text-muted">Skills</a>
            <a href="#projects" className="text-muted">Projects</a>
            <a href="#certs" className="text-muted">Certifications</a>
            <a href="#contact" className="text-muted">Contact</a>
          </nav>
          <a className="btn btn-primary" href="/Fazil-Khan-CV.pdf" download>Download CV</a>
        </div>
      </header>

      {/* Hero */}
      <section className="container py-12">
        <div className="hero hero-2col">
          <div>
            <h1 className="text-3xl font-bold">Supply Chain & Procurement | MSc (Warwick)</h1>
            <p className="mt-3 text-gray-700" style={{ maxWidth: "46rem" }}>
              Analytical, values-driven supply chain professional with experience across inventory optimisation,
              supplier coordination, and cost-effective logistics. Open to UK roles with visa sponsorship.
            </p>
            <div className="mt-4" style={{ display: "flex", gap: ".5rem", flexWrap: "wrap" }}>
              <span className="badge">Coventry, UK</span>
              <span className="badge">Visa sponsorship welcome</span>
              <span className="badge">Supply Chain • Engineering</span>
            </div>
            <div className="mt-6" style={{ display: "flex", gap: ".75rem", flexWrap: "wrap" }}>
              <a className="btn" href="mailto:fazil.khan0904@gmail.com">Email Me</a>
              <a className="btn" target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/fazilkhan11">LinkedIn</a>
              <a className="btn" href="#projects">View Projects</a>
            </div>
          </div>
          <div>
            {/* Replace hero.jpg with your own image in /public */}
            <img src="/hero.jpg" alt="Fazil – professional portrait or supply chain collage" />
            <div className="mt-3 gallery">
              <img src="/gallery-1.jpg" alt="Warehouse operations" />
              <img src="/gallery-2.jpg" alt="Dashboard / analytics" />
              <img src="/gallery-3.jpg" alt="Procurement / supplier meeting" />
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="container py-12 border-t">
        <div className="grid grid-2">
          <div>
            <h2 className="text-2xl font-semibold">About Me</h2>
            <p className="mt-3 text-gray-700">
              I specialise in inventory optimisation, supplier performance and risk mitigation,
              and demand planning. I enjoy bringing clarity to complex operations using data and
              practical lean improvements. I’m currently completing my MSc at Warwick and am open
              to UK roles with visa sponsorship.
            </p>
            <div className="mt-6 kpi">
              <div>
                <div className="text-muted">Stock-outs</div>
                <div className="font-bold">−15%</div>
              </div>
              <div>
                <div className="text-muted">Peak throughput</div>
                <div className="font-bold">~120k/wk</div>
              </div>
              <div>
                <div className="text-muted">Data errors</div>
                <div className="font-bold">−92%</div>
              </div>
            </div>
          </div>
          <div className="card">
            <img src="/headshot.jpg" alt="Fazil Khan headshot" />
            <div className="card-body">
              <div className="text-muted">Quick facts</div>
              <ul className="mt-2" style={{ paddingLeft: "1rem" }}>
                <li>Based in Coventry, UK</li>
                <li>MSc Supply Chain & Logistics (Warwick) – Sep 2025</li>
                <li>Open to sponsorship & relocation</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="container py-12 border-t">
        <h2 className="text-2xl font-semibold">Skills</h2>
        <div className="mt-4 grid grid-3">
          <div className="card">
            <div className="card-body">
              <h3 className="font-semibold mb-2">Supply Chain</h3>
              <ul style={{ paddingLeft: "1rem" }}>
                <li>Inventory & Materials Management</li>
                <li>Demand Forecasting & S&OP</li>
                <li>Logistics & 3PL coordination</li>
              </ul>
            </div>
          </div>
          <div className="card">
            <div className="card-body">
              <h3 className="font-semibold mb-2">Analytics & Tools</h3>
              <ul style={{ paddingLeft: "1rem" }}>
                <li>Excel (advanced), Power BI/Tableau</li>
                <li>SAP, ERP modules, Windchill PLM</li>
                <li>Python (basics), SQL (basics)</li>
              </ul>
            </div>
          </div>
          <div className="card">
            <div className="card-body">
              <h3 className="font-semibold mb-2">Soft Skills</h3>
              <ul style={{ paddingLeft: "1rem" }}>
                <li>Continuous Improvement (Lean)</li>
                <li>Stakeholder Management</li>
                <li>Cross-functional Collaboration</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Projects with pictures */}
      <section id="projects" className="container py-12 border-t">
        <h2 className="text-2xl font-semibold">Projects & Case Studies</h2>

        <div className="mt-4 grid grid-3">
          {/* Project 1 */}
          <article className="card">
            <img src="/project-1.jpg" alt="AI risk framework visual" />
            <div className="card-body">
              <h3 className="font-semibold">AI-Driven Multi-Echelon Risk Prediction</h3>
              <p className="text-gray-700 mt-2">
                Causal modelling + AI signals for proactive mitigation across tiers.
              </p>
              <div className="kpi mt-4">
                <div><div className="text-muted">Risk visibility</div><div className="font-bold">+40%</div></div>
                <div><div className="text-muted">Decision speed</div><div className="font-bold">+20%</div></div>
                <div><div className="text-muted">Resilience</div><div className="font-bold">+10%</div></div>
              </div>
            </div>
          </article>

          {/* Project 2 */}
          <article className="card">
            <img src="/project-2.jpg" alt="Forecasting dashboard" />
            <div className="card-body">
              <h3 className="font-semibold">Inbound Material Planning & Forecasting</h3>
              <p className="text-gray-700 mt-2">
                Multi-exponential smoothing to achieve 99.17% availability on critical inputs.
              </p>
              <div className="kpi mt-4">
                <div><div className="text-muted">Availability</div><div className="font-bold">99.17%</div></div>
                <div><div className="text-muted">Stock-outs</div><div className="font-bold">−15%</div></div>
                <div><div className="text-muted">Downtime risk</div><div className="font-bold">−30%</div></div>
              </div>
            </div>
          </article>

          {/* Project 3 */}
          <article className="card">
            <img src="/project-3.jpg" alt="Warehouse layout illustration" />
            <div className="card-body">
              <h3 className="font-semibold">Warehouse Layout & Slotting Optimisation</h3>
              <p className="text-gray-700 mt-2">
                U/I layouts with ABC slotting to cut travel and congestion.
              </p>
              <div className="kpi mt-4">
                <div><div className="text-muted">Pick rate</div><div className="font-bold">+25%</div></div>
                <div><div className="text-muted">Travel distance</div><div className="font-bold">−30%</div></div>
                <div><div className="text-muted">OTIF</div><div className="font-bold">+5 pp</div></div>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* Certifications */}
      <section id="certs" className="container py-12 border-t">
        <h2 className="text-2xl font-semibold">Certifications & Memberships</h2>
        <div className="mt-4 grid grid-3">
          <div className="card"><div className="card-body"><strong>CIPS Affiliate</strong><div className="text-muted mt-2">Chartered Institute of Procurement & Supply</div></div></div>
          <div className="card"><div className="card-body"><strong>CILT (UK) Member</strong><div className="text-muted mt-2">Chartered Institute of Logistics & Transport</div></div></div>
          <div className="card"><div className="card-body"><strong>Lean Six Sigma – Yellow Belt</strong><div className="text-muted mt-2">Continuous Improvement</div></div></div>
        </div>
      </section>

      {/* Testimonials (optional but great for recruiters) */}
      <section className="container py-12 border-t">
        <h2 className="text-2xl font-semibold">Testimonials</h2>
        <div className="mt-4 grid grid-2">
          <blockquote className="testimonial">
            “Fazil improved replenishment accuracy and reduced stock-outs significantly during peak.
            Strong attention to detail and work ethic.” — former manager
          </blockquote>
          <blockquote className="testimonial">
            “He built clean dashboards and automated supplier data, saving hours per week.” — stakeholder
          </blockquote>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="container py-12 border-t">
        <h2 className="text-2xl font-semibold">Contact</h2>
        <p className="text-gray-700 mt-2">Open to UK opportunities with visa sponsorship.</p>
        <div className="mt-4" style={{ display: "flex", gap: ".75rem", flexWrap: "wrap" }}>
          <a className="btn" href="mailto:fazil.khan0904@gmail.com">Email</a>
          <a className="btn" target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/fazilkhan11">LinkedIn</a>
          <a className="btn" href="/Fazil-Khan-CV.pdf" download>Download CV</a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t">
        <div className="container py-6 text-sm text-gray-600">
          © {new Date().getFullYear()} Fazil Khan — Coventry, UK
        </div>
      </footer>
    </div>
  );
}
