import { CheckCircle } from 'lucide-react'

const coreValues = [
  {
    title: 'Customer Commitment',
    description:
      'We build lasting relationships by understanding client needs and delivering dependable solutions.',
  },
  {
    title: 'Quality Excellence',
    description:
      'We provide premium-grade products backed by uncompromising quality standards.',
  },
  {
    title: 'Integrity',
    description:
      'We conduct business with honesty, transparency, and responsibility.',
  },
  {
    title: 'Innovation',
    description:
      'We embrace modern technology and continuous improvement to stay ahead.',
  },
  {
    title: 'Teamwork',
    description:
      'We work together across all levels to achieve customer success.',
  },
  {
    title: 'Sustainability',
    description:
      'We focus on eco-conscious manufacturing and reusable product solutions.',
  },
  {
    title: 'Accountability',
    description:
      'We take ownership of every commitment we make.',
  },
]

const whyChooseUs = [
  'High-strength, durable plastic products',
  'Customized sizes, colors, and designs',
  'Modern production facilities',
  'Bulk order capability',
  'Timely nationwide supply',
  'Competitive pricing',
  'Export-ready quality standards',
  'Dedicated customer support',
]

const highlights = [
  { label: 'Industries Served', value: '6+' },
  { label: 'Bulk Production Ready', value: '100%' },
  { label: 'Product Focus', value: 'Custom + Standard' },
]

export default function About() {
  return (
    <section id="about" className="relative py-20 md:py-32 bg-gradient-to-b from-white via-blue-50/40 to-white overflow-hidden">
      <div className="absolute -top-20 -left-16 h-72 w-72 rounded-full bg-blue-200/30 blur-3xl" />
      <div className="absolute -bottom-16 -right-12 h-72 w-72 rounded-full bg-cyan-200/30 blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="inline-flex items-center rounded-full border border-blue-200 bg-white/80 backdrop-blur px-4 py-2 text-sm font-semibold text-blue-700 mb-5">
          About Us
        </div>

        <h2 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-10 leading-tight">
          About Us - <span className="bg-gradient-to-r from-blue-700 to-cyan-600 bg-clip-text text-transparent">Techhub Polypack</span>
        </h2>

        <div className="grid lg:grid-cols-3 gap-8 items-start">
          <div className="lg:col-span-2 rounded-3xl border border-blue-100 bg-white/90 backdrop-blur p-7 md:p-9 shadow-xl shadow-blue-100/40 space-y-5 text-lg text-gray-600 leading-relaxed">
            <p>
              Techhub Polypack is a trusted name in the polymer and packaging industry, specializing in the
              manufacturing of high-quality plastic products designed for modern businesses. With a strong focus on
              innovation, durability, and customer satisfaction, we deliver reliable solutions such as plastic crates,
              bean boxes, corrugated packaging boxes, industrial containers, storage solutions, and custom molded
              products.
            </p>
            <p>
              Built on a Customer First philosophy, we believe every successful product begins with understanding our
              clients&apos; needs. Our team works closely with customers to develop practical, cost-effective, and
              high-performance packaging solutions that help businesses grow efficiently.
            </p>
            <p>
              With advanced manufacturing infrastructure, modern machinery, and a commitment to continuous research and
              development, Techhub Polypack creates products that meet the highest standards of strength, functionality,
              and sustainability. Every product is engineered to perform in demanding industries including agriculture,
              logistics, warehousing, food processing, retail, and export packaging.
            </p>
            <p>
              Our facility is equipped to handle bulk production while maintaining precision and quality at every stage
              from raw material selection to final dispatch. We combine technical expertise with streamlined processes to
              ensure timely delivery and consistent excellence.
            </p>
          </div>

          <div className="space-y-4">
            {highlights.map((item) => (
              <div key={item.label} className="rounded-2xl border border-blue-100 bg-white p-5 shadow-md shadow-blue-100/40">
                <p className="text-2xl font-extrabold text-blue-700">{item.value}</p>
                <p className="text-sm font-medium text-gray-600 mt-1">{item.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mt-12">
          <div className="p-6 md:p-7 rounded-2xl border border-blue-200 bg-gradient-to-br from-blue-50 to-cyan-50 shadow-lg shadow-blue-100/50">
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Our Vision</h3>
            <p className="text-gray-700 leading-relaxed">
              To become a leading manufacturer of innovative polymer and packaging products by delivering superior
              quality, sustainable solutions, and building long-term partnerships through a customer-first approach.
            </p>
          </div>
          <div className="p-6 md:p-7 rounded-2xl border border-blue-200 bg-gradient-to-br from-blue-50 to-cyan-50 shadow-lg shadow-blue-100/50">
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Our Mission</h3>
            <p className="text-gray-700 leading-relaxed">
              To continuously innovate through research and development, creating durable, efficient, and
              cost-effective products that add value to our customers&apos; businesses.
            </p>
          </div>
        </div>

        <div className="mt-14">
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Core Values</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {coreValues.map((value) => (
              <div
                key={value.title}
                className="p-5 rounded-2xl border border-gray-200 bg-white shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <h4 className="text-lg font-bold text-gray-900 mb-2">{value.title}</h4>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 rounded-3xl bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 p-6 md:p-10 text-white shadow-2xl">
          <h3 className="text-3xl md:text-4xl font-bold mb-6">Why Choose Techhub Polypack?</h3>
          <div className="grid sm:grid-cols-2 gap-4">
            {whyChooseUs.map((item) => (
              <div key={item} className="flex items-start gap-3 rounded-xl bg-white/10 border border-white/10 p-3">
                <CheckCircle size={20} className="text-emerald-300 mt-0.5 flex-shrink-0" />
                <p className="text-blue-100 font-medium">{item}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 p-6 md:p-8 rounded-2xl border border-blue-200 bg-white shadow-lg">
          <h3 className="text-2xl md:text-3xl font-bold mb-3 text-gray-900">Our Promise</h3>
          <p className="text-gray-600 text-lg leading-relaxed">
            At Techhub Polypack, we don&apos;t just manufacture products - we create dependable packaging and storage
            solutions that power businesses across industries. From concept to creation, we are committed to quality,
            trust, and long-term success.
          </p>
        </div>
      </div>
    </section>
  )
}
