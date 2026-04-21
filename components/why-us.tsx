'use client'

import { Zap, Shield, Leaf, Truck, Users, Lightbulb } from 'lucide-react'

const benefits = [
  {
    icon: Zap,
    title: 'Superior Quality',
    description: 'ISO certified manufacturing with 100% quality control at every step',
  },
  {
    icon: Shield,
    title: 'Proven Reliability',
    description: 'Trusted by 500+ clients with a 10+ year track record of excellence',
  },
  {
    icon: Leaf,
    title: 'Eco-Friendly',
    description: 'Sustainable materials and practices supporting a greener future',
  },
  {
    icon: Truck,
    title: 'Fast Delivery',
    description: 'Pan-India logistics network ensuring timely product delivery',
  },
  {
    icon: Users,
    title: 'Expert Support',
    description: 'Dedicated team providing technical consultation & after-sales service',
  },
  {
    icon: Lightbulb,
    title: 'Innovation First',
    description: 'Continuous R&D for cutting-edge packaging solutions & improvements',
  },
]

export default function WhyUs() {
  return (
    <section id="why-us" className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 bg-blue-100 text-blue-800 text-sm font-semibold rounded-full">
              Why Choose Us
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            What Sets Us Apart
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Industry-leading commitment to quality, sustainability, and customer satisfaction
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon
            return (
              <div
                key={index}
                className="group p-8 bg-gradient-to-br from-gray-50 to-white rounded-xl border border-gray-100 hover:border-blue-200 hover:shadow-xl transition-all duration-300"
              >
                <div className="mb-4 w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-700 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Icon size={24} className="text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </div>
            )
          })}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 pt-16 border-t border-gray-200">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <p className="text-4xl font-bold text-blue-600 mb-2">ISO 9001:2015</p>
              <p className="text-gray-600">International Quality Standards</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-blue-600 mb-2">FDA Approved</p>
              <p className="text-gray-600">Food Safety Compliance</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-blue-600 mb-2">Pan-India</p>
              <p className="text-gray-600">Comprehensive Distribution</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
