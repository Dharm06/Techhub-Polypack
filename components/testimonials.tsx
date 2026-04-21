'use client'

import { MapPin } from 'lucide-react'

const clients = [
  { id: 1, name: 'FreshMart Logistics', color: 'from-green-400 to-green-600' },
  { id: 2, name: 'PackRight Industries', color: 'from-red-400 to-red-600' },
  { id: 3, name: 'GlobalSupply Solutions', color: 'from-purple-400 to-purple-600' },
  { id: 4, name: 'EcoStore Retail', color: 'from-blue-400 to-blue-600' },
  { id: 5, name: 'Pinnacle Distribution', color: 'from-orange-400 to-orange-600' },
  { id: 6, name: 'FastFood Express', color: 'from-yellow-400 to-yellow-600' },
  { id: 7, name: 'TechPro Manufacturing', color: 'from-cyan-400 to-cyan-600' },
  { id: 8, name: 'EliteLogistics Group', color: 'from-pink-400 to-pink-600' },
  { id: 9, name: 'SmartRetail India', color: 'from-indigo-400 to-indigo-600' },
  { id: 10, name: 'Premium Warehousing', color: 'from-emerald-400 to-emerald-600' },
  { id: 11, name: 'Continental Foods', color: 'from-amber-400 to-amber-600' },
  { id: 12, name: 'NextGen Supply Chain', color: 'from-teal-400 to-teal-600' },
]

const mapDots = Array.from({ length: 30 }).map((_, i) => ({
  id: i,
  x: Math.random() * 100,
  y: Math.random() * 100,
  size: Math.random() * 3 + 1,
}))

export default function Testimonials() {
  return (
    <section id="clients" className="py-20 md:py-32 bg-white relative overflow-hidden">
      {/* World Map Dots Background */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          {/* Decorative map lines */}
          <g stroke="#0066cc" strokeWidth="0.2" fill="none" opacity="0.3">
            <path d="M 0 30 Q 25 20, 50 30 T 100 30" />
            <path d="M 0 50 Q 25 45, 50 50 T 100 50" />
            <path d="M 0 70 Q 25 75, 50 70 T 100 70" />
            <path d="M 30 0 Q 30 25, 30 50 T 30 100" />
            <path d="M 50 0 Q 50 25, 50 50 T 50 100" />
            <path d="M 70 0 Q 70 25, 70 50 T 70 100" />
          </g>
          {/* Random dots representing global locations */}
          {mapDots.map((dot) => (
            <circle
              key={dot.id}
              cx={dot.x}
              cy={dot.y}
              r={dot.size}
              fill="#0066cc"
              opacity={Math.random() * 0.6 + 0.2}
            />
          ))}
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 bg-blue-100 text-blue-800 text-sm font-semibold rounded-full flex items-center gap-2">
              <MapPin size={16} />
              Global Presence
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Trusted by 500+ Companies Worldwide
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From logistics to retail, food to manufacturing - leading companies across industries rely on Techhub Polypack
          </p>
        </div>

        {/* Client Logos Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {clients.map((client) => (
            <div
              key={client.id}
              className="group relative bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col items-center justify-center cursor-pointer hover:border-blue-300"
            >
              {/* Gradient Circle Background */}
              <div
                className={`w-16 h-16 rounded-full bg-gradient-to-br ${client.color} absolute -top-8 opacity-10 group-hover:opacity-20 transition-opacity`}
              />

              {/* Company Initial Avatar */}
              <div
                className={`w-14 h-14 rounded-full bg-gradient-to-br ${client.color} flex items-center justify-center text-white font-bold text-xl mb-4 relative z-10`}
              >
                {client.name.charAt(0)}
              </div>

              {/* Company Name */}
              <h3 className="text-center font-semibold text-gray-900 text-sm leading-tight">
                {client.name}
              </h3>

              {/* Hover Effect Indicator */}
              <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none bg-gradient-to-br from-blue-50 to-transparent" />
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-3 gap-8 p-8 md:p-12 bg-gradient-to-r from-blue-50 to-blue-100 rounded-2xl">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-blue-900 mb-2">500+</div>
            <p className="text-gray-700 text-sm md:text-base">Active Clients</p>
          </div>
          <div className="text-center border-x border-blue-300">
            <div className="text-3xl md:text-4xl font-bold text-blue-900 mb-2">50+</div>
            <p className="text-gray-700 text-sm md:text-base">Countries</p>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-blue-900 mb-2">10+</div>
            <p className="text-gray-700 text-sm md:text-base">Years Experience</p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 p-8 md:p-12 bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl text-white text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">Join Our Growing Network</h3>
          <p className="text-lg text-blue-100 mb-6 max-w-2xl mx-auto">
            Become part of the trusted brands choosing Techhub Polypack for premium packaging solutions
          </p>
          <a
            href="#inquiry"
            className="px-8 py-3 bg-white text-blue-600 font-bold rounded-lg hover:shadow-lg transition-all duration-300 inline-block"
          >
            Get in Touch Today
          </a>
        </div>
      </div>
    </section>
  )
}
