'use client'

import { CheckCircle } from 'lucide-react'

const processSteps = [
  {
    step: 1,
    title: 'Raw Material Selection',
    description: 'Sourcing premium quality virgin plastic with rigorous standards',
    color: 'from-blue-500 to-blue-600',
  },
  {
    step: 2,
    title: 'Design & Engineering',
    description: 'Advanced CAD design and prototype development for optimal performance',
    color: 'from-blue-600 to-blue-700',
  },
  {
    step: 3,
    title: 'Manufacturing',
    description: 'State-of-the-art injection molding with precision control systems',
    color: 'from-blue-700 to-blue-800',
  },
  {
    step: 4,
    title: 'Quality Control',
    description: '100% inspection and testing to meet international standards',
    color: 'from-blue-800 to-blue-900',
  },
  {
    step: 5,
    title: 'Finishing & Assembly',
    description: 'Precision finishing, packaging, and quality documentation',
    color: 'from-blue-600 to-blue-700',
  },
  {
    step: 6,
    title: 'Dispatch & Delivery',
    description: 'Secure packaging and pan-India logistics for on-time delivery',
    color: 'from-blue-500 to-blue-600',
  },
]

export default function Process() {
  return (
    <section id="process" className="py-20 md:py-32 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 bg-blue-100 text-blue-800 text-sm font-semibold rounded-full">
              Manufacturing Process
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            From Raw Material to Your Doorstep
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our comprehensive manufacturing process ensures highest quality standards at every stage
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line (hidden on mobile) */}
          <div className="hidden md:block absolute left-1/2 top-6 bottom-6 transform -translate-x-1/2 w-[3px] bg-gradient-to-b from-blue-300 to-blue-600 rounded-full" />

          {/* Steps */}
          <div className="space-y-12 md:space-y-0">
            {processSteps.map((item, index) => (
              <div
                key={item.step}
                className={`md:flex ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 items-center`}
              >
                {/* Content */}
                <div className="md:w-1/2">
                  <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-sm font-bold text-white bg-blue-600 rounded-full w-8 h-8 flex items-center justify-center">
                        {item.step}
                      </span>
                      <h3 className="text-xl font-bold text-gray-900">{item.title}</h3>
                    </div>
                    <p className="text-gray-600 leading-relaxed">{item.description}</p>
                  </div>
                </div>

                {/* Center circle (hidden on mobile) */}
                <div className="hidden md:flex md:w-12 md:justify-center">
                  <div className="z-10 p-1.5 rounded-full bg-white/95 shadow-sm">
                    <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${item.color} flex items-center justify-center shadow-lg ring-2 ring-white`}>
                      <CheckCircle size={24} className="text-white" />
                    </div>
                  </div>
                </div>

                {/* Spacer */}
                <div className="md:w-1/2" />
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-lg text-gray-600 mb-6">
            Want to see our manufacturing facilities in action?
          </p>
          <a
            href="#contact"
            className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-800 text-white font-bold rounded-lg hover:shadow-lg transition-all duration-300 inline-block"
          >
            Schedule a Factory Tour
          </a>
        </div>
      </div>
    </section>
  )
}
