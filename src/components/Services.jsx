import { motion } from 'framer-motion'
import { Code2, AppWindow, Brush, Store, Target, Megaphone, Rocket, Users } from 'lucide-react'

const services = [
  { icon: Users, title: 'Coaching', desc: 'Mentorship and team enablement to level up your product and engineering culture.' },
  { icon: Brush, title: 'Web Development & Design', desc: 'Design systems, responsive websites, and blazing-fast web apps.' },
  { icon: AppWindow, title: 'App Development', desc: 'iOS, Android, and cross-platform apps focused on UX and performance.' },
  { icon: Store, title: 'POS Development', desc: 'Custom POS solutions tailored to your retail and F&B operations.' },
  { icon: Target, title: 'Client Hunting', desc: 'Outbound systems that generate qualified leads and partnerships.' },
  { icon: Megaphone, title: 'Digital Marketing', desc: 'Full-funnel campaigns across search, social, and email.' },
  { icon: Rocket, title: 'Lead Generation', desc: 'Data-backed prospecting and conversion pipelines.' },
  { icon: Code2, title: 'Consulting', desc: 'Architecture, cloud, and performance optimization for scale.' },
]

export default function Services() {
  return (
    <section id="services" className="relative bg-white py-20 dark:bg-zinc-950">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-4xl">What We Do</h2>
          <p className="mt-3 text-zinc-600 dark:text-zinc-400">End-to-end services for modern brands and ambitious startups.</p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group relative overflow-hidden rounded-2xl border border-zinc-200/60 bg-white p-6 shadow-sm transition hover:shadow-lg dark:border-zinc-800/60 dark:bg-zinc-900"
            >
              <div className="absolute inset-0 -z-0 bg-gradient-to-br from-indigo-500/0 via-fuchsia-500/0 to-emerald-500/0 opacity-0 transition-opacity duration-300 group-hover:opacity-20" />
              <div className="relative z-10">
                <s.icon className="h-6 w-6 text-indigo-500" />
                <h3 className="mt-4 text-lg font-semibold text-zinc-900 dark:text-zinc-100">{s.title}</h3>
                <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">{s.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
