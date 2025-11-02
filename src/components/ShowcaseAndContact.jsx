import React, { useState } from 'react';
import { Star, Image as ImageIcon, Quote, Send } from 'lucide-react';

const caseStudies = [
  {
    title: 'E‑commerce ROAS 4.2x',
    result: '+212% revenue in 60 days',
    note: 'Performance Max + Meta retargeting',
  },
  {
    title: 'Local Services CPL ↓48%',
    result: 'Cost per lead slashed nearly half',
    note: 'Search + conversion‑optimized landing page',
  },
  {
    title: 'SaaS Demo Bookings ↑3x',
    result: 'Tripled SQLs with creative testing',
    note: 'YouTube in‑market + Meta lookalikes',
  },
];

const testimonials = [
  {
    name: 'Aisha R.',
    role: 'Founder, D2C Brand',
    quote:
      'Crystal‑clear reporting and fast iterations. We hit profitability in month one and scaled with confidence.',
  },
  {
    name: 'Marcus T.',
    role: 'COO, B2B SaaS',
    quote:
      'They care about real business outcomes, not just clicks. The website is faster, and the funnel finally converts.',
  },
];

const ShowcaseAndContact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <section className="w-full bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        {/* Portfolio / Case Studies */}
        <div className="mb-16">
          <div className="mb-8 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Results & Work</h2>
            <p className="mt-3 text-lg text-gray-600">A glimpse at outcomes we deliver and the quality we ship.</p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {caseStudies.map((c) => (
              <div key={c.title} className="group rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition hover:shadow-md">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-orange-500 text-white">
                  <ImageIcon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 text-xl font-semibold text-gray-900">{c.title}</h3>
                <p className="mt-2 text-blue-700 font-semibold">{c.result}</p>
                <p className="mt-1 text-sm text-gray-600">{c.note}</p>
                <div className="mt-4 inline-flex items-center gap-1 text-sm text-gray-500">
                  <Star className="h-4 w-4 fill-orange-500 text-orange-500" />
                  <Star className="h-4 w-4 fill-orange-500 text-orange-500" />
                  <Star className="h-4 w-4 fill-orange-500 text-orange-500" />
                  <Star className="h-4 w-4 fill-orange-500 text-orange-500" />
                  <Star className="h-4 w-4 text-orange-500" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="mb-16 rounded-3xl bg-gray-50 p-8">
          <div className="mb-6 flex items-center justify-center gap-2">
            <Quote className="h-6 w-6 text-orange-500" />
            <h3 className="text-2xl font-bold text-gray-900">What Clients Say</h3>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            {testimonials.map((t) => (
              <figure key={t.name} className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
                <blockquote className="text-gray-700">“{t.quote}”</blockquote>
                <figcaption className="mt-4 text-sm font-medium text-gray-900">
                  {t.name} <span className="text-gray-500">• {t.role}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>

        {/* Contact / Lead Form */}
        <div id="contact" className="rounded-3xl bg-gradient-to-br from-blue-600 to-orange-500 p-1">
          <div className="rounded-[22px] bg-white p-6 sm:p-10">
            <div className="mb-6 text-center">
              <h3 className="text-2xl font-bold text-gray-900">Boost Your Business Today</h3>
              <p className="mt-2 text-gray-600">Tell us about your goals — we’ll respond within one business day.</p>
            </div>

            <form onSubmit={onSubmit} className="grid gap-4 sm:grid-cols-2">
              <div className="sm:col-span-1">
                <label className="mb-1 block text-sm font-medium text-gray-700">Name</label>
                <input
                  required
                  type="text"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-gray-900 outline-none ring-blue-600/20 placeholder:text-gray-400 focus:ring"
                  placeholder="Jane Doe"
                />
              </div>
              <div className="sm:col-span-1">
                <label className="mb-1 block text-sm font-medium text-gray-700">Email</label>
                <input
                  required
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-gray-900 outline-none ring-blue-600/20 placeholder:text-gray-400 focus:ring"
                  placeholder="jane@company.com"
                />
              </div>
              <div className="sm:col-span-2">
                <label className="mb-1 block text-sm font-medium text-gray-700">How can we help?</label>
                <textarea
                  required
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-gray-900 outline-none ring-blue-600/20 placeholder:text-gray-400 focus:ring"
                  placeholder="Tell us about your project, goals, and timeline..."
                />
              </div>
              <div className="sm:col-span-2">
                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-blue-700 px-5 py-3 font-semibold text-white shadow-sm transition hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-orange-400 sm:w-auto"
                >
                  <Send className="h-5 w-5" />
                  Book a Free Strategy Call
                </button>
                {sent && (
                  <p className="mt-3 text-sm font-medium text-green-700">Thanks! Your message has been sent. We’ll be in touch ASAP.</p>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShowcaseAndContact;
