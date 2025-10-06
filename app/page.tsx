"use client";

export default function Page() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <header className="border-b">
        <div className="container py-3 flex items-center justify-between">
          <div className="font-semibold">Fazil Khan</div>
          <a className="btn btn-primary" href="/Fazil-Khan-CV.pdf" download>
            Download CV
          </a>
        </div>
      </header>

      <section className="container py-12">
        <h1 className="text-3xl font-bold">
          Supply Chain & Procurement | MSc (Warwick)
        </h1>
        <p className="mt-3 text-gray-700 max-w-2xl">
          Analytical, values-driven supply chain professional with experience across
          inventory optimisation, supplier coordination, and cost-effective logistics.
          Open to UK roles with visa sponsorship.
        </p>
        <div className="mt-4 flex gap-2">
          <span className="badge">Coventry, UK</span>
          <span className="badge">Visa sponsorship welcome</span>
        </div>
        <div className="mt-6 flex gap-3">
          <a className="btn" href="mailto:fazil.khan0904@gmail.com">Email Me</a>
          <a className="btn" target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/fazilkhan11">LinkedIn</a>
        </div>
      </section>

      <section className="container py-12 border-t">
        <h2 className="text-2xl font-semibold">Experience</h2>
        <ul className="mt-4 list-disc ml-5 text-gray-700 space-y-2">
          <li>Shoe Zone — Reduced stock-outs by 15% via replenishment alignment.</li>
          <li>Amazon — Maintained schedule during ~120k parcels/week peak.</li>
          <li>Collabera/Trane — Cut attribution errors by 92%; saved $4,800+.</li>
        </ul>
      </section>

      <section className="container py-12 border-t">
        <h2 className="text-2xl font-semibold">Education</h2>
        <ul className="mt-4 list-disc ml-5 text-gray-700 space-y-2">
          <li>MSc Supply Chain & Logistics Management — University of Warwick (Sep 2025)</li>
          <li>B.E. Mechanical Engineering — NMIT (Jun 2023)</li>
        </ul>
      </section>

      <footer className="border-t">
        <div className="container py-6 text-sm text-gray-600">
          © {new Date().getFullYear()} Fazil Khan
        </div>
      </footer>
    </div>
  );
}

