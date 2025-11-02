import React from 'react';
import { ShieldCheck, LineChart, Clock, Headphones } from 'lucide-react';

const points = [
  {
    icon: ShieldCheck,
    title: 'Client‑Centric',
    desc: 'We listen first, align on outcomes, and tailor every solution to your goals.'
  },
  {
    icon: LineChart,
    title: 'ROI‑Focused',
    desc: 'Every decision is driven by data. We optimize for profitable growth, not vanity metrics.'
  },
  {
    icon: Clock,
    title: 'Speed With Quality',
    desc: 'Agile execution with enterprise‑grade standards for performance, security, and UX.'
  },
  {
    icon: Headphones,
    title: 'Transparent & Supportive',
    desc: 'Clear communication, proactive updates, and detailed reporting you can trust.'
  }
];

const WhyUs = () => {
  return (
    <section className="w-full bg-gray-50 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Why Choose LinkVeloc</h2>
          <p className="mt-3 text-lg text-gray-600">Trust, results, speed, and satisfaction are our north stars.</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {points.map((p) => (
            <div key={p.title} className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-orange-500 text-white">
                <p.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">{p.title}</h3>
              <p className="mt-2 text-gray-600">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
