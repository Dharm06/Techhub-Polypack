'use client'

import { useEffect, useRef, useState } from 'react'
import { Trophy, Users, Package, Globe } from 'lucide-react'

interface StatItem {
  icon: React.ComponentType<{ size: number; className: string }>
  label: string
  value: string
  prefix?: string
  suffix?: string
}

const StatCounter = ({
  target,
  prefix = '',
  suffix = '',
  start,
  delay = 0,
}: {
  target: number
  prefix?: string
  suffix?: string
  start: boolean
  delay?: number
}) => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!start) {
      setCount(0)
      return
    }

    let current = 0
    const steps = 45
    const increment = target / steps
    let timer: ReturnType<typeof setInterval> | undefined

    const starter = setTimeout(() => {
      timer = setInterval(() => {
        current += increment
        if (current >= target) {
          setCount(target)
          if (timer) clearInterval(timer)
        } else {
          setCount(Math.floor(current))
        }
      }, 32)
    }, delay)

    return () => {
      clearTimeout(starter)
      if (timer) clearInterval(timer)
    }
  }, [target, start, delay])

  return (
    <span className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
      {prefix}{count}{suffix}
    </span>
  )
}

export default function TrustStats() {
  const sectionRef = useRef<HTMLElement | null>(null)
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting)
      },
      { threshold: 0.35 },
    )

    observer.observe(section)

    return () => observer.disconnect()
  }, [])

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
    <section
      ref={sectionRef}
      className="relative py-16 md:py-24 bg-gradient-to-r from-blue-950 via-blue-900 to-blue-800 text-white overflow-hidden"
    >
      <div className="absolute -top-14 left-8 h-44 w-44 rounded-full bg-blue-400/20 blur-3xl" />
      <div className="absolute -bottom-16 right-10 h-56 w-56 rounded-full bg-cyan-300/20 blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <div
                key={index}
                className={`relative flex flex-col items-center text-center rounded-2xl border border-white/15 bg-white/5 backdrop-blur-sm px-4 py-6 md:px-6 md:py-8 transition-all duration-500 hover:-translate-y-1 hover:bg-white/10 hover:shadow-xl hover:shadow-blue-900/40 ${
                  isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="mb-4 h-12 w-12 rounded-xl bg-blue-500/20 border border-blue-300/30 flex items-center justify-center">
                  <Icon size={28} className="text-blue-200" />
                </div>
                <div className="mb-1">
                  <StatCounter
                    target={parseInt(stat.value)}
                    suffix={stat.suffix}
                    prefix={stat.prefix}
                    start={isInView}
                    delay={index * 120}
                  />
                </div>
                <p className="text-blue-100 text-sm md:text-base font-semibold">{stat.label}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
