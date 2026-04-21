'use client'

import { useEffect, useState } from 'react'
import { Trophy, Users, Package, Globe } from 'lucide-react'

interface StatItem {
  icon: React.ComponentType<{ size: number; className: string }>
  label: string
  value: string
  prefix?: string
  suffix?: string
}

const StatCounter = ({ target, prefix = '', suffix = '' }: { target: number; prefix?: string; suffix?: string }) => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let current = 0
    const increment = target / 40

    const timer = setInterval(() => {
      current += increment
      if (current >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, 50)

    return () => clearInterval(timer)
  }, [target])

  return (
    <span className="text-3xl md:text-4xl font-bold text-blue-600">
      {prefix}{count}{suffix}
    </span>
  )
}

export default function TrustStats() {
  const stats: StatItem[] = [
    {
      icon: Trophy,
      label: 'Years of Excellence',
      value: '10',
      suffix: '+',
    },
    {
      icon: Users,
      label: 'Satisfied Clients',
      value: '500',
      suffix: '+',
    },
    {
      icon: Package,
      label: 'Products Range',
      value: '50',
      suffix: '+',
    },
    {
      icon: Globe,
      label: 'Pan-India Presence',
      value: '100',
      suffix: '%',
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-gradient-to-r from-blue-900 to-blue-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <div
                key={index}
                className="flex flex-col items-center text-center hover:scale-105 transition-transform duration-300"
              >
                <Icon size={32} className="mb-4 text-blue-300" />
                <div className="mb-2">
                  <StatCounter
                    target={parseInt(stat.value)}
                    suffix={stat.suffix}
                    prefix={stat.prefix}
                  />
                </div>
                <p className="text-blue-100 text-sm md:text-base font-medium">{stat.label}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
