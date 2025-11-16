import { motion } from 'framer-motion'

export default function Stats() {
  const stats = [
    { value: '200+', label: 'Team Members' },
    { value: '900+', label: 'Happy Clients' },
    { value: '1200+', label: 'Projects Delivered' },
    { value: '12+', label: 'Years Experience' },
  ]

  return (
    <section className="relative bg-white py-16 dark:bg-zinc-950">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <div className="grid grid-cols-2 gap-6 rounded-2xl border border-zinc-200/60 bg-white/70 p-8 text-center shadow-sm backdrop-blur-md dark:border-zinc-800/60 dark:bg-zinc-900/70 sm:grid-cols-4">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="rounded-xl p-4"
            >
              <div className="text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-4xl">
                {s.value}
              </div>
              <div className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
