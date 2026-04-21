'use client'

import { Factory, Apple, Truck, Hospital, Package, Home } from 'lucide-react'

const industries = [
  {
    icon: Factory,
    name: 'Manufacturing',
    description: 'Heavy-duty crates for industrial component storage & handling',
  },
  {
    icon: Apple,
    name: 'Food & Beverage',
    description: 'FDA approved containers for fresh produce & food distribution',
  },
  {
    icon: Truck,
    name: 'Logistics & Supply Chain',
    description: 'Durable containers for efficient warehousing & distribution',
  },
  {
    icon: Hospital,
    name: 'Pharmaceutical',
    description: 'Specialized packaging ensuring safe medicine transport',
  },
  {
    icon: Package,
    name: 'E-Commerce',
    description: 'Protective packaging for online retail delivery & returns',
  },
  {
    icon: Home,
    name: 'Retail & Storage',
    description: 'Versatile solutions for retail organization & home storage',
  },
]

export default function Industries() {
  return (
    <section id="industries" className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 bg-blue-100 text-blue-800 text-sm font-semibold rounded-full">
              Industries We Serve
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Serving Diverse Industries
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our versatile packaging solutions cater to every major industry with specialized capabilities
          </p>
        </div>

        {/* Industries Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => {
            const Icon = industry.icon
            return (
              <div
                key={index}
                className="group relative p-8 bg-gradient-to-br from-gray-50 to-white rounded-xl border border-gray-100 hover:border-blue-300 transition-all duration-300 overflow-hidden"
              >
                {/* Background glow on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-blue-600/0 group-hover:from-blue-500/5 group-hover:to-blue-600/5 transition-all duration-300" />

                {/* Content */}
                <div className="relative z-10">
                  <div className="mb-4 w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-700 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <Icon size={28} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{industry.name}</h3>
                  <p className="text-gray-600 leading-relaxed">{industry.description}</p>
                </div>

                {/* Bottom accent */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-blue-700 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </div>
            )
          })}
        </div>

        {/* Bottom section */}
        <div className="mt-16 pt-16 border-t border-gray-200">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Industry-Specific Solutions</h3>
              <p className="text-lg text-gray-600 mb-6">
                We understand the unique requirements of each industry and provide specialized packaging 
                solutions that meet compliance standards, operational needs, and cost efficiency goals.
              </p>
              <a
                href="#contact"
                className="px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-800 text-white font-bold rounded-lg hover:shadow-lg transition-all"
              >
                Discuss Your Industry Needs
              </a>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                <p className="font-bold text-blue-900">50+</p>
                <p className="text-sm text-gray-600">Product variations</p>
              </div>
              <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                <p className="font-bold text-blue-900">6+</p>
                <p className="text-sm text-gray-600">Industry segments</p>
              </div>
              <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                <p className="font-bold text-blue-900">100%</p>
                <p className="text-sm text-gray-600">Customizable</p>
              </div>
              <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                <p className="font-bold text-blue-900">24/7</p>
                <p className="text-sm text-gray-600">Support available</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
