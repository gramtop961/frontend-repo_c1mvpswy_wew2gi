import React from 'react';
import Hero from './components/Hero';
import ServicesAndProcess from './components/ServicesAndProcess';
import WhyUs from './components/WhyUs';
import ShowcaseAndContact from './components/ShowcaseAndContact';

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Hero with Spline background */}
      <Hero />

      {/* Services + Process */}
      <ServicesAndProcess />

      {/* Why Choose Us */}
      <WhyUs />

      {/* Portfolio / Testimonials + Contact */}
      <ShowcaseAndContact />

      {/* Footer */}
      <footer className="border-t border-gray-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-10 text-center">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} LinkVeloc — Performance‑driven Digital Marketing & Web Development
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
