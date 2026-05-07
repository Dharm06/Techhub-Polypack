"use client";

import { Download, Phone } from "lucide-react";

export default function InquiryCTA() {
  return (
    <section
      id="inquiry"
      className="py-20 md:py-32 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white relative overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-700 rounded-full mix-blend-multiply filter blur-3xl opacity-10 -z-10" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Let's Transform Your Packaging
            </h2>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Whether you need standard solutions or custom packaging, our team
              is ready to help. Get a personalized quote and consultation today.
            </p>

            {/* Benefits */}
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold text-sm">
                  ✓
                </span>
                <p className="text-blue-100">
                  Free consultation with our packaging experts
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold text-sm">
                  ✓
                </span>
                <p className="text-blue-100">
                  Customized solutions for your specific needs
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold text-sm">
                  ✓
                </span>
                <p className="text-blue-100">
                  Competitive pricing with bulk discounts
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold text-sm">
                  ✓
                </span>
                <p className="text-blue-100">
                  Fast turnaround and reliable delivery
                </p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="px-8 py-3 bg-white text-blue-600 font-bold rounded-lg hover:shadow-xl transition-all duration-300"
              >
                Request Free Quote
              </a>
              <a
                href="https://wa.me/919662291155"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 border-2 border-white text-white font-bold rounded-lg hover:bg-white/10 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Phone size={18} />
                Chat on WhatsApp
              </a>
            </div>
          </div>

          {/* Right - Quick Info & Catalog */}
          <div className="space-y-6">
            {/* Download Catalog */}
            <div className="p-8 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover:border-white/40 transition-all duration-300">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                  <Download size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">
                    Download Product Catalog
                  </h3>
                  <p className="text-blue-100 text-sm">
                    Complete product range & specifications
                  </p>
                </div>
              </div>
              <button className="w-full py-2 bg-white/20 hover:bg-white/30 text-white font-semibold rounded-lg transition-all duration-300">
                Download PDF Catalog
              </button>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20">
                <p className="text-2xl font-bold text-white">24-48h</p>
                <p className="text-sm text-blue-100">Standard Response</p>
              </div>
              <div className="p-4 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20">
                <p className="text-2xl font-bold text-white">₹0</p>
                <p className="text-sm text-blue-100">Consultation Fee</p>
              </div>
            </div>

            {/* Contact Info */}
            <div className="p-6 bg-gradient-to-br from-blue-500/20 to-blue-600/20 rounded-xl border border-blue-400/30">
              <h4 className="font-bold text-lg mb-4">Quick Contact</h4>
              <div className="space-y-3">
                <a
                  href="tel:+919662291155"
                  className="flex items-center gap-3 hover:text-blue-200 transition-colors"
                >
                  <Phone size={18} />
                  <span>+91 96622 91155</span>
                </a>
                <a
                  href="mailto:techhubpolypack05@gmail.com"
                  className="flex items-center gap-3 hover:text-blue-200 transition-colors"
                >
                  <span>✉</span>
                  <span>techhubpolypack05@gmail.com</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
