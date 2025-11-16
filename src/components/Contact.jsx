import { motion } from 'framer-motion'

export default function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden bg-gradient-to-b from-white to-zinc-50 py-20 dark:from-zinc-950 dark:to-zinc-900">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-4xl">Let’s work together</h2>
            <p className="mt-3 text-zinc-600 dark:text-zinc-400">Tell us about your goals and we’ll craft a plan to get you there.</p>

            <div className="mt-8 grid gap-4">
              <div className="rounded-xl border border-zinc-200/60 bg-white p-4 dark:border-zinc-800/60 dark:bg-zinc-900">
                <div className="text-sm text-zinc-600 dark:text-zinc-400">Email</div>
                <div className="text-zinc-900 dark:text-zinc-100">hello@flames.corp</div>
              </div>
              <div className="rounded-xl border border-zinc-200/60 bg-white p-4 dark:border-zinc-800/60 dark:bg-zinc-900">
                <div className="text-sm text-zinc-600 dark:text-zinc-400">Phone</div>
                <div className="text-zinc-900 dark:text-zinc-100">+1 (555) 123-4567</div>
              </div>
            </div>
          </div>

          <motion.form
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl border border-zinc-200/60 bg-white p-6 shadow-sm dark:border-zinc-800/60 dark:bg-zinc-900"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="grid gap-2">
                <label className="text-sm text-zinc-700 dark:text-zinc-300">First name</label>
                <input className="rounded-lg border border-zinc-200/60 bg-white/70 px-3 py-2 text-zinc-900 placeholder-zinc-400 outline-none ring-1 ring-transparent focus:ring-indigo-500 dark:border-zinc-800/60 dark:bg-zinc-950/60 dark:text-zinc-100" placeholder="Jane" />
              </div>
              <div className="grid gap-2">
                <label className="text-sm text-zinc-700 dark:text-zinc-300">Last name</label>
                <input className="rounded-lg border border-zinc-200/60 bg-white/70 px-3 py-2 text-zinc-900 placeholder-zinc-400 outline-none ring-1 ring-transparent focus:ring-indigo-500 dark:border-zinc-800/60 dark:bg-zinc-950/60 dark:text-zinc-100" placeholder="Doe" />
              </div>
              <div className="grid gap-2 sm:col-span-2">
                <label className="text-sm text-zinc-700 dark:text-zinc-300">Email</label>
                <input type="email" className="rounded-lg border border-zinc-200/60 bg-white/70 px-3 py-2 text-zinc-900 placeholder-zinc-400 outline-none ring-1 ring-transparent focus:ring-indigo-500 dark:border-zinc-800/60 dark:bg-zinc-950/60 dark:text-zinc-100" placeholder="you@company.com" />
              </div>
              <div className="grid gap-2 sm:col-span-2">
                <label className="text-sm text-zinc-700 dark:text-zinc-300">How can we help?</label>
                <textarea rows="4" className="rounded-lg border border-zinc-200/60 bg-white/70 px-3 py-2 text-zinc-900 placeholder-zinc-400 outline-none ring-1 ring-transparent focus:ring-indigo-500 dark:border-zinc-800/60 dark:bg-zinc-950/60 dark:text-zinc-100" placeholder="Project details, timeline, budget..." />
              </div>
            </div>
            <button className="mt-6 inline-flex w-full items-center justify-center rounded-xl bg-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow-lg ring-1 ring-indigo-600/10 transition hover:bg-indigo-500">
              Send message
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  )
}
