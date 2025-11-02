import React from 'react';
import { Megaphone, BarChart3, MonitorSmartphone, ArrowRight, CheckCircle2 } from 'lucide-react';

const services = [
  {
    icon: Megaphone,
    title: 'Meta Ads',
    desc: 'Full-funnel Facebook & Instagram campaigns designed to acquire, retarget, and scale profitably.'
  },
  {
    icon: BarChart3,
    title: 'Google Ads',
    desc: 'Intent-driven search, Performance Max, and YouTube strategies that convert high-quality traffic.'
  },
  {
    icon: MonitorSmartphone,
    title: 'WordPress Development',
    desc: 'Fast, responsive, and secure websites optimized for conversions and SEO.'
  }
];

const steps = [
  { title: 'Strategy', points: ['Audit & research', 'Define KPIs & offer', 'Roadmap to ROI'] },
  { title: 'Execution', points: ['Creative & copy', 'Build & launch', 'Conversion tracking'] },
  { title: 'Results', points: ['Scale winners', 'Transparent reporting', 'Iterate with data'] },
];

const ServicesAndProcess = () => {
  return (
    <section id="services" className="relative w-full bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">What We Do</h2>
          <p className="mt-3 text-lg text-gray-600">ROI-driven paid advertising and high-converting WordPress development.</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <div key={s.title} className="group rounded-2xl border border-gray-100 bg-white p-6 shadow-sm ring-1 ring-gray-100 transition hover:shadow-md">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-orange-500 text-white shadow">
                <s.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-xl font-semibold text-gray-900">{s.title}</h3>
              <p className="mt-2 text-gray-600">{s.desc}</p>
              <div className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-blue-700">
                Learn more <ArrowRight className="h-4 w-4" />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 rounded-3xl bg-gradient-to-br from-blue-600 to-orange-500 p-1">
          <div className="rounded-[22px] bg-white p-6 sm:p-8">
            <div className="mb-8 text-center">
              <h3 className="text-2xl font-bold text-gray-900">How We Deliver Results</h3>
              <p className="mt-2 text-gray-600">A clear, collaborative path from strategy to scale.</p>
            </div>

            <div className="grid gap-6 sm:grid-cols-3">
              {steps.map((step) => (
                <div key={step.title} className="rounded-2xl border border-gray-100 p-6">
                  <div className="text-sm font-semibold uppercase tracking-wide text-blue-700">{step.title}</div>
                  <ul className="mt-4 space-y-2">
                    {step.points.map((p) => (
                      <li key={p} className="flex items-start gap-3 text-gray-700">
                        <CheckCircle2 className="mt-0.5 h-5 w-5 flex-none text-orange-500" />
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesAndProcess;
