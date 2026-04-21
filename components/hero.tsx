'use client'

import { useState, useEffect } from 'react'
import { ArrowRight, Phone, Mail, ChevronLeft, ChevronRight } from 'lucide-react'
import Image from 'next/image'

export default function Hero() {
  const [animate, setAnimate] = useState(false)
  const [currentProduct, setCurrentProduct] = useState(0)

  const products = [
    {
      image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/product1-457mdklFNJDRG0Sm2vz1bN02F5T53k.png',
      name: 'Vented Storage Crate',
      description: 'Ideal for produce and food storage'
    },
    {
      image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/product2-mC9xmxENf6J0L4QgfIp4WnkzdFw0OY.png',
      name: 'Industrial Storage Box',
      description: 'Premium quality plastic crate'
    },
    {
      image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/product3.jpeg-6zmKtpe9Xc9MDVfu2TuJ62jDUeWTlA.png',
      name: 'Lidded Storage Container',
      description: 'Secure storage with locking handles'
    },
    {
      image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/product4.jpeg-QeTUKkqybCvdzuAfmMICNoa3PvncUS.png',
      name: 'Pallet Storage System',
      description: 'Multi-box industrial pallet solution'
    }
  ]

  useEffect(() => {
    setAnimate(true)
    const interval = setInterval(() => {
      setCurrentProduct((prev) => (prev + 1) % products.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-gray-50 -z-10" />
      
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 -z-10" />
      <div className="absolute -bottom-8 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className={`${animate ? 'animate-fade-in-left' : 'opacity-0'}`}>
            <div className="inline-block mb-4">
              <span className="px-4 py-2 bg-blue-100 text-blue-800 text-sm font-semibold rounded-full">
                ₹100 Crore | International Standards
              </span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Premium Plastic Crates & Industrial Packaging
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Leading manufacturer delivering high-quality storage solutions with unmatched durability, 
              sustainability, and innovation. Trusted by 500+ clients across India for 10+ years.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <a
                href="#inquiry"
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-800 text-white font-bold rounded-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 group"
              >
                Get Quote Now
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#contact"
                className="px-8 py-4 border-2 border-blue-600 text-blue-600 font-bold rounded-lg hover:bg-blue-50 transition-all duration-300"
              >
                Download Catalog
              </a>
            </div>

            {/* Contact Info */}
            <div className="flex flex-col sm:flex-row gap-6">
              <a
                href="tel:+919999999999"
                className="flex items-center gap-3 text-gray-700 hover:text-blue-600 transition-colors"
              >
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Phone size={20} className="text-blue-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Call Us</p>
                  <p className="font-semibold">+91 XXXX XXX XXX</p>
                </div>
              </a>
              <a
                href="mailto:info@techhubpolypack.com"
                className="flex items-center gap-3 text-gray-700 hover:text-blue-600 transition-colors"
              >
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Mail size={20} className="text-blue-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Email</p>
                  <p className="font-semibold">info@techhubpolypack.com</p>
                </div>
              </a>
            </div>
          </div>

          {/* Right Visual - Product Carousel */}
          <div className={`relative hidden md:block ${animate ? 'animate-fade-in-right' : 'opacity-0'}`}>
            <div className="relative w-full h-full flex flex-col items-center justify-center">
              {/* Product Display */}
              <div className="relative w-full aspect-square bg-gradient-to-br from-gray-50 to-blue-50 rounded-3xl overflow-hidden flex items-center justify-center mb-8 border border-gray-200 shadow-2xl">
                {/* Background accent */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-100 via-transparent to-transparent opacity-30" />
                
                {/* Product Image */}
                <div className="relative w-80 h-80 flex items-center justify-center">
                  <Image
                    src={products[currentProduct].image}
                    alt={products[currentProduct].name}
                    width={400}
                    height={400}
                    className="object-contain drop-shadow-2xl animate-scale-in"
                    priority
                  />
                </div>

                {/* Navigation Arrows */}
                <button
                  onClick={() => setCurrentProduct((prev) => (prev - 1 + products.length) % products.length)}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg hover:bg-blue-600 hover:text-white transition-all duration-300 flex items-center justify-center z-10 group"
                >
                  <ChevronLeft size={24} className="group-hover:translate-x-1 transition-transform" />
                </button>
                <button
                  onClick={() => setCurrentProduct((prev) => (prev + 1) % products.length)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg hover:bg-blue-600 hover:text-white transition-all duration-300 flex items-center justify-center z-10 group"
                >
                  <ChevronRight size={24} className="group-hover:-translate-x-1 transition-transform" />
                </button>
              </div>

              {/* Product Info */}
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {products[currentProduct].name}
                </h3>
                <p className="text-gray-600">
                  {products[currentProduct].description}
                </p>
              </div>

              {/* Carousel Indicators */}
              <div className="flex gap-2 justify-center">
                {products.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentProduct(index)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      index === currentProduct
                        ? 'bg-blue-600 w-8'
                        : 'bg-gray-300 w-2 hover:bg-gray-400'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
