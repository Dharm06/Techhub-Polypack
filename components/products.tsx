'use client'

import { ArrowRight } from 'lucide-react'
import { useState } from 'react'
import Image from 'next/image'

const productCategories = [
  {
    id: 1,
    name: 'Vented Storage Crate',
    description: 'Ideal for produce, fresh goods, and food storage',
    features: ['Ventilation holes for airflow', 'Heavy-duty construction', 'Stackable design'],
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/product1-457mdklFNJDRG0Sm2vz1bN02F5T53k.png',
    specs: 'Food Grade | Vented | 50kg capacity',
  },
  {
    id: 2,
    name: 'Industrial Storage Box',
    description: 'Premium plastic crate for warehousing and logistics',
    features: ['Solid construction', 'Easy stacking', 'Durable handles'],
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/product2-mC9xmxENf6J0L4QgfIp4WnkzdFw0OY.png',
    specs: 'Premium | Stackable | 60kg capacity',
  },
  {
    id: 3,
    name: 'Lidded Storage Container',
    description: 'Secure storage with locking handles and protective lid',
    features: ['Secure lid closure', 'Moisture resistant', 'Space saving'],
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/product3.jpeg-6zmKtpe9Xc9MDVfu2TuJ62jDUeWTlA.png',
    specs: 'Sealed | Weather-resistant | 45kg capacity',
  },
  {
    id: 4,
    name: 'Pallet Storage System',
    description: 'Multi-box industrial pallet solution for bulk storage',
    features: ['Pallet compatible', 'Modular design', 'Multi-tier stacking'],
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/product4.jpeg-QeTUKkqybCvdzuAfmMICNoa3PvncUS.png',
    specs: 'Pallet Ready | Modular | High Capacity',
  },
]

export default function Products() {
  const [hoveredId, setHoveredId] = useState<number | null>(null)

  return (
    <section id="products" className="py-20 md:py-32 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 bg-blue-100 text-blue-800 text-sm font-semibold rounded-full">
              Our Products
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Comprehensive Packaging Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From industrial crates to custom solutions, we offer 50+ product variations 
            designed for every industry and requirement.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {productCategories.map((product) => (
            <div
              key={product.id}
              onMouseEnter={() => setHoveredId(product.id)}
              onMouseLeave={() => setHoveredId(null)}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden cursor-pointer hover:scale-105"
            >
              {/* Product Image Container */}
              <div className="relative h-64 bg-gradient-to-b from-gray-50 to-white overflow-hidden flex items-center justify-center">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={300}
                  height={300}
                  className="object-contain h-56 w-full p-4"
                  priority={product.id <= 2}
                />
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="text-lg font-bold text-gray-900 mb-1">{product.name}</h3>
                <p className="text-gray-600 text-xs mb-3 h-8 overflow-hidden">{product.description}</p>

                {/* Specs Badge */}
                <p className="text-xs font-semibold text-blue-700 bg-blue-50 px-2 py-1 rounded-md mb-3 inline-block">
                  {product.specs}
                </p>

                {/* Features */}
                <ul className="space-y-1 mb-4">
                  {product.features.slice(0, 2).map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-xs text-gray-700">
                      <span className="w-1.5 h-1.5 bg-blue-600 rounded-full flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <button className="w-full py-2 px-3 bg-gradient-to-r from-blue-600 to-blue-800 text-white text-sm font-semibold rounded-lg hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 group/btn">
                  Inquiry
                  <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 p-8 md:p-12 bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl text-white text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">Need Custom Solutions?</h3>
          <p className="text-lg text-blue-100 mb-6 max-w-2xl mx-auto">
            We specialize in designing and manufacturing custom packaging solutions tailored to your specific requirements.
          </p>
          <button className="px-8 py-3 bg-white text-blue-600 font-bold rounded-lg hover:shadow-lg transition-all duration-300">
            Request Quotation
          </button>
        </div>
      </div>
    </section>
  )
}
