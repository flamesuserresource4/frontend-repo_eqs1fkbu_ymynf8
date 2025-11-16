import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] w-full overflow-hidden bg-zinc-950 text-white">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/FduaNp3csZktbOi3/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-500/20 via-transparent to-transparent" />

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center px-6 pt-48 pb-24 text-center sm:px-8">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="text-4xl font-semibold tracking-tight sm:text-6xl"
        >
          Building Modern Digital Experiences
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
          className="mt-4 max-w-2xl text-zinc-300"
        >
          We craft high-performance websites, apps, and enterprise solutions with a focus on design, speed, and scalability.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <a href="#contact" className="pointer-events-auto inline-flex items-center rounded-xl bg-white px-5 py-3 text-sm font-semibold text-zinc-900 shadow-lg ring-1 ring-white/10 transition hover:opacity-90">
            Start a Project
          </a>
          <a href="#portfolio" className="pointer-events-auto inline-flex items-center rounded-xl bg-zinc-900/40 px-5 py-3 text-sm font-semibold text-white ring-1 ring-white/20 backdrop-blur-md transition hover:bg-zinc-900/60">
            View Work
          </a>
        </motion.div>

        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-zinc-950" />
      </div>
    </section>
  )
}
