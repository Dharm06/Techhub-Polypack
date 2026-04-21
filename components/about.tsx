'use client'

import { CheckCircle } from 'lucide-react'

export default function About() {
  const features = [
    'State-of-the-art manufacturing facilities',
    'ISO 9001:2015 & International certifications',
    'Eco-friendly & sustainable materials',
    'Advanced quality control systems',
    'Expert engineering team',
    'Customization capabilities',
  ]

  return (
    <section id="about" className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left - Image Placeholder */}
          <div className="relative hidden md:block">
            <div className="relative w-full aspect-square bg-gradient-to-br from-blue-100 to-blue-50 rounded-2xl overflow-hidden shadow-lg">
              <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent" />
              <div className="absolute inset-4 border-2 border-blue-200 rounded-lg" />
            </div>
          </div>

          {/* Right - Content */}
          <div>
            <div className="inline-block mb-4">
              <span className="px-4 py-2 bg-blue-100 text-blue-800 text-sm font-semibold rounded-full">
                About Us
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Industry Leaders in Premium Packaging Solutions
            </h2>

            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              With over a decade of excellence, Techhub Polypack has established itself as a trusted name 
              in manufacturing high-quality plastic crates and industrial packaging solutions. Our commitment 
              to innovation, quality, and sustainability drives every product we create.
            </p>

            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              We combine cutting-edge technology with expert craftsmanship to deliver packaging solutions 
              that meet international standards while supporting sustainable practices across all operations.
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3 group">
                  <div className="mt-1 flex-shrink-0">
                    <CheckCircle className="text-green-500 group-hover:scale-110 transition-transform" size={20} />
                  </div>
                  <p className="text-gray-700 font-medium">{feature}</p>
                </div>
              ))}
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-3 gap-4 pt-8 border-t border-gray-200">
              <div>
                <p className="text-2xl md:text-3xl font-bold text-blue-600">₹100Cr</p>
                <p className="text-sm text-gray-600 mt-1">Revenue Scale</p>
              </div>
              <div>
                <p className="text-2xl md:text-3xl font-bold text-blue-600">500+</p>
                <p className="text-sm text-gray-600 mt-1">Happy Clients</p>
              </div>
              <div>
                <p className="text-2xl md:text-3xl font-bold text-blue-600">10+</p>
                <p className="text-sm text-gray-600 mt-1">Years Trusted</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
