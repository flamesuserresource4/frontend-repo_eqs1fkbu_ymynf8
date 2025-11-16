import { motion } from 'framer-motion'

export default function TeamClients() {
  return (
    <section id="team" className="relative bg-white py-20 dark:bg-zinc-950">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <div className="grid gap-8 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl border border-zinc-200/60 bg-white p-8 shadow-sm dark:border-zinc-800/60 dark:bg-zinc-900"
          >
            <h3 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100">Our Team</h3>
            <p className="mt-2 text-zinc-600 dark:text-zinc-400">A global network of specialists across design, engineering, and growth.</p>
            <div className="mt-6 grid grid-cols-4 gap-3 sm:grid-cols-6 md:grid-cols-8">
              {Array.from({ length: 24 }).map((_, i) => (
                <div key={i} className="aspect-square rounded-lg bg-gradient-to-br from-zinc-200 to-zinc-100 dark:from-zinc-800 dark:to-zinc-900" />
              ))}
            </div>
            <p className="mt-4 text-sm text-zinc-500">200+ members and growing</p>
          </motion.div>

          <motion.div
            id="clients"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="rounded-2xl border border-zinc-200/60 bg-white p-8 shadow-sm dark:border-zinc-800/60 dark:bg-zinc-900"
          >
            <h3 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100">Our Clients</h3>
            <p className="mt-2 text-zinc-600 dark:text-zinc-400">Trusted by startups and enterprises worldwide.</p>
            <div className="mt-6 grid grid-cols-3 gap-3 sm:grid-cols-4 md:grid-cols-6">
              {Array.from({ length: 18 }).map((_, i) => (
                <div key={i} className="aspect-[3/2] rounded-lg bg-gradient-to-br from-zinc-200 to-zinc-100 dark:from-zinc-800 dark:to-zinc-900" />
              ))}
            </div>
            <p className="mt-4 text-sm text-zinc-500">900+ clients served</p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
