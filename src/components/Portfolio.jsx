import { motion } from 'framer-motion'

const projects = [
  { title: 'Fintech Dashboard', tag: 'Web App' },
  { title: 'Retail POS Suite', tag: 'POS' },
  { title: 'Fitness Mobile App', tag: 'App' },
  { title: 'SaaS Landing', tag: 'Website' },
  { title: 'E-commerce Platform', tag: 'Web App' },
  { title: 'Analytics Portal', tag: 'Web App' },
]

export default function Portfolio() {
  return (
    <section id="portfolio" className="relative bg-white py-20 dark:bg-zinc-950">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-4xl">Selected Work</h2>
          <p className="mt-3 text-zinc-600 dark:text-zinc-400">A snapshot of our recent projects across industries.</p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group relative overflow-hidden rounded-2xl border border-zinc-200/60 bg-white p-5 shadow-sm transition hover:shadow-lg dark:border-zinc-800/60 dark:bg-zinc-900"
            >
              <div className="aspect-video w-full rounded-xl bg-gradient-to-br from-indigo-500/20 via-fuchsia-500/20 to-emerald-500/20" />
              <div className="mt-4 flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">{p.title}</h3>
                  <p className="text-xs text-zinc-500">{p.tag}</p>
                </div>
                <span className="text-xs text-indigo-500">View case</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
