import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket, PhoneCall } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-gray-950 text-white">
      {/* 3D Spline background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/cEecEwR6Ehj4iT8T/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Overlay gradients that don't block interactions */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-gray-950/70 via-gray-950/30 to-gray-950/90" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(59,130,246,0.25),transparent_40%),radial-gradient(circle_at_80%_20%,rgba(249,115,22,0.3),transparent_45%)]" />

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center px-6 pt-28 pb-16 text-center md:pt-36">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 backdrop-blur">
          <Rocket className="h-4 w-4 text-orange-400" />
          <span className="text-sm text-white/90">Performance-driven growth partner</span>
        </div>

        <h1 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl md:text-6xl">
          Scale Faster with ROI‑Focused Ads & High‑Converting Websites
        </h1>
        <p className="mt-5 max-w-3xl text-balance text-lg text-white/80 md:text-xl">
          LinkVeloc drives measurable growth with strategic Meta & Google Ads and fast, secure WordPress development.
          We move quickly, communicate transparently, and obsess over your results.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            href="#contact"
            className="rounded-full bg-orange-500 px-6 py-3 text-base font-semibold text-white shadow-lg shadow-orange-500/30 transition hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-400"
          >
            Grow With LinkVeloc
          </a>
          <a
            href="#contact"
            className="rounded-full border border-white/20 bg-white/5 px-6 py-3 text-base font-semibold text-white backdrop-blur transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            Book a Free Strategy Call
          </a>
          <a
            href="#services"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-5 py-3 text-base font-semibold text-white backdrop-blur transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            <PhoneCall className="h-4 w-4" />
            Get Your Website/Ads Strategy Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
