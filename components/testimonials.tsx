'use client'

type FloatingCompany = {
  id: string
  name: string
  x: string
  y: string
  delay: string
  duration: string
}

const floatingCompanies: FloatingCompany[] = [
  { id: 'tata', name: 'Tata', x: '8%', y: '14%', delay: '0s', duration: '6.7s' },
  { id: 'bubblefine', name: 'Bubblefine', x: '22%', y: '30%', delay: '0.6s', duration: '7.2s' },
  { id: 'techaids', name: 'Techaids', x: '77%', y: '12%', delay: '1.1s', duration: '6.8s' },
  { id: 'fireescape', name: 'Fireescape', x: '84%', y: '30%', delay: '0.3s', duration: '7.4s' },
  { id: 'kp-infotech', name: 'KP Infotech', x: '76%', y: '52%', delay: '1.5s', duration: '6.9s' },
  { id: 'sfc-solution', name: 'SFC Solution', x: '9%', y: '50%', delay: '0.8s', duration: '7.6s' },
  { id: 'zippycubs', name: 'Zippycubs Pvt Ltd', x: '14%', y: '72%', delay: '1.2s', duration: '6.6s' },
  { id: 'kwality-pack', name: 'Kwality Pack', x: '80%', y: '71%', delay: '0.4s', duration: '7.1s' },
  { id: 'advik-enterprise', name: 'Advik Enterprise', x: '30%', y: '84%', delay: '1.8s', duration: '6.7s' },
  { id: 'on2cook', name: 'On2cook India Pvt Ltd', x: '60%', y: '84%', delay: '0.9s', duration: '7.3s' },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative py-20 md:py-28 bg-[#03040d] overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(56,189,248,0.24),transparent_36%),radial-gradient(circle_at_78%_72%,rgba(168,85,247,0.22),transparent_40%),radial-gradient(circle_at_50%_90%,rgba(59,130,246,0.2),transparent_34%)]" />
      <div className="absolute left-[10%] top-[18%] h-52 w-52 rounded-full bg-fuchsia-500/10 blur-3xl" />
      <div className="absolute right-[8%] bottom-[14%] h-56 w-56 rounded-full bg-cyan-400/10 blur-3xl" />
      <div className="absolute inset-0 opacity-80">
        <svg className="h-full w-full" viewBox="0 0 1200 500" preserveAspectRatio="xMidYMid slice">
          <g fill="#ffffff">
            {Array.from({ length: 700 }).map((_, i) => (
              <circle
                key={i}
                className="galaxy-star"
                cx={(i * 43) % 1200}
                cy={(i * 29) % 500}
                r={(i % 3) + 0.4}
                opacity={(i % 5) / 8 + 0.25}
                style={{
                  animationDelay: `${(i % 11) * 0.35}s`,
                  animationDuration: `${3.2 + (i % 7) * 0.45}s`,
                }}
              />
            ))}
          </g>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
            Trusted by{' '}
            <span className="inline-block bg-blue-600 text-white px-3 py-1 rounded-sm">
              customers worldwide
            </span>{' '}
            every day
          </h2>
          <p className="mt-5 text-sm md:text-lg uppercase tracking-wide text-blue-100/80">
            From India to global markets, businesses across industries rely on Techhub Polypack.
          </p>
        </div>

        <div className="mt-14 flex justify-center">
          <div className="relative w-full max-w-[64rem] h-[22rem] md:h-[34rem]">
            {floatingCompanies.map((company) => (
              <div
                key={company.id}
                className="floating-company pointer-events-none absolute z-20 hidden md:block"
                style={{
                  left: company.x,
                  top: company.y,
                  animationDelay: company.delay,
                  animationDuration: company.duration,
                }}
              >
                <div className="w-max rounded-xl border border-cyan-300/50 bg-slate-900/65 px-4 py-2 text-sm font-bold uppercase tracking-wide text-cyan-100 shadow-[0_0_16px_rgba(34,211,238,0.35)] backdrop-blur">
                  {company.name}
                </div>
              </div>
            ))}

            <div className="absolute left-1/2 top-1/2 h-[18rem] w-[18rem] sm:h-[20rem] sm:w-[20rem] md:h-[30rem] md:w-[30rem] -translate-x-1/2 -translate-y-1/2 rounded-full p-2 bg-gradient-to-br from-blue-700 to-cyan-500 shadow-2xl shadow-blue-200/70">
              <div className="relative h-full w-full rounded-full overflow-hidden bg-slate-900">
                <video
                  className="absolute inset-0 h-full w-full object-cover"
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="metadata"
                >
                  <source src="/original-bf5c1b5df8560f599a0001dcd121a7ff.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.45),transparent_42%)]" />
              </div>
              <div className="absolute -inset-3 rounded-full border border-blue-300/70" />
            </div>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-2 gap-3 md:hidden">
          {floatingCompanies.map((company) => (
            <div
              key={`mobile-${company.id}`}
              className="rounded-xl border border-cyan-300/40 bg-slate-900/55 px-3 py-2 text-xs font-semibold uppercase tracking-wide text-cyan-100 text-center backdrop-blur"
            >
              {company.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
