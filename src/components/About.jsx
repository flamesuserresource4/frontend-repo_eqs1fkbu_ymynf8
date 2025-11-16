import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="relative bg-white py-20 dark:bg-zinc-950">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl border border-zinc-200/60 bg-white p-8 shadow-sm dark:border-zinc-800/60 dark:bg-zinc-900"
          >
            <h2 className="text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-4xl">About Us</h2>
            <p className="mt-4 text-zinc-600 dark:text-zinc-400">
              We are a technology partner for companies that demand quality and velocity. Our teams blend strategy, design, and engineering to ship world-class products.
            </p>
            <ul className="mt-6 grid gap-2 text-sm text-zinc-700 dark:text-zinc-300">
              <li>• Outcome-driven process focused on ROI</li>
              <li>• Senior talent with enterprise experience</li>
              <li>• Transparent communication and agile delivery</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="rounded-2xl border border-zinc-200/60 bg-gradient-to-br from-indigo-500/10 via-fuchsia-500/10 to-emerald-500/10 p-8 shadow-sm dark:border-zinc-800/60 dark:from-indigo-500/10 dark:via-fuchsia-500/10 dark:to-emerald-500/10"
          >
            <div className="aspect-video w-full rounded-xl bg-gradient-to-br from-indigo-500/20 via-fuchsia-500/20 to-emerald-500/20" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
