import { motion } from 'framer-motion'

const testimonials = [
  {
    quote: 'They delivered beyond expectations. Our metrics improved across the board.',
    name: 'Ava Chen',
    role: 'Head of Growth, NovaTech'
  },
  {
    quote: 'Exceptional design quality and a reliable technical team.',
    name: 'Daniel Ruiz',
    role: 'COO, Vortex Retail'
  },
  {
    quote: 'From discovery to launch, the process was smooth and collaborative.',
    name: 'Maya Singh',
    role: 'Founder, FitFlow'
  }
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative bg-white py-20 dark:bg-zinc-950">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-4xl">What Clients Say</h2>
          <p className="mt-3 text-zinc-600 dark:text-zinc-400">Direct words from partners we helped grow.</p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.blockquote
              key={t.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="relative overflow-hidden rounded-2xl border border-zinc-200/60 bg-white p-6 text-left shadow-sm dark:border-zinc-800/60 dark:bg-zinc-900"
            >
              <p className="text-sm text-zinc-700 dark:text-zinc-300">“{t.quote}”</p>
              <div className="mt-4 text-sm font-medium text-zinc-900 dark:text-zinc-100">{t.name}</div>
              <div className="text-xs text-zinc-500">{t.role}</div>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}
