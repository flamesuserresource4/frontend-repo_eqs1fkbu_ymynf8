import { useEffect, useState } from 'react'
import { Menu, X, Sun, Moon, Sparkles } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Team', href: '#team' },
  { label: 'Clients', href: '#clients' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [dark, setDark] = useState(false)

  useEffect(() => {
    const stored = localStorage.getItem('theme')
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
    const initial = stored ? stored === 'dark' : prefersDark
    setDark(initial)
  }, [])

  useEffect(() => {
    const root = document.documentElement
    if (dark) {
      root.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      root.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }, [dark])

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 rounded-2xl border border-zinc-200/60 bg-white/70 backdrop-blur-md shadow-sm dark:border-zinc-800/60 dark:bg-zinc-900/70">
          <div className="flex items-center justify-between px-4 py-3">
            <a href="#home" className="flex items-center gap-2 group">
              <div className="relative">
                <motion.div
                  initial={{ rotate: -10, scale: 0.9 }}
                  animate={{ rotate: 0, scale: 1 }}
                  transition={{ type: 'spring', stiffness: 200, damping: 20 }}
                  className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-indigo-500 via-violet-500 to-fuchsia-500 text-white shadow-lg"
                >
                  <Sparkles size={20} />
                </motion.div>
              </div>
              <span className="text-lg font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">Flames Corporate</span>
            </a>

            <div className="hidden md:flex items-center gap-1">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="px-3 py-2 text-sm font-medium text-zinc-700/90 hover:text-zinc-900 dark:text-zinc-300/90 dark:hover:text-white transition-colors"
                >
                  {item.label}
                </a>
              ))}
              <button
                onClick={() => setDark((d) => !d)}
                aria-label="Toggle theme"
                className="ml-3 inline-flex items-center justify-center rounded-lg border border-zinc-200/60 bg-white/70 p-2 text-zinc-700 hover:bg-white dark:border-zinc-800/60 dark:bg-zinc-900/70 dark:text-zinc-200 dark:hover:bg-zinc-900"
              >
                <AnimatePresence initial={false} mode="wait">
                  {dark ? (
                    <motion.span key="sun" initial={{ opacity: 0, rotate: -90 }} animate={{ opacity: 1, rotate: 0 }} exit={{ opacity: 0, rotate: 90 }} transition={{ duration: 0.2 }}>
                      <Sun size={18} />
                    </motion.span>
                  ) : (
                    <motion.span key="moon" initial={{ opacity: 0, rotate: 90 }} animate={{ opacity: 1, rotate: 0 }} exit={{ opacity: 0, rotate: -90 }} transition={{ duration: 0.2 }}>
                      <Moon size={18} />
                    </motion.span>
                  )}
                </AnimatePresence>
              </button>
            </div>

            <div className="md:hidden flex items-center gap-2">
              <button
                onClick={() => setDark((d) => !d)}
                aria-label="Toggle theme"
                className="inline-flex items-center justify-center rounded-lg border border-zinc-200/60 bg-white/70 p-2 text-zinc-700 hover:bg-white dark:border-zinc-800/60 dark:bg-zinc-900/70 dark:text-zinc-200 dark:hover:bg-zinc-900"
              >
                {dark ? <Sun size={18} /> : <Moon size={18} />}
              </button>
              <button
                onClick={() => setOpen((o) => !o)}
                aria-label="Menu"
                className="inline-flex items-center justify-center rounded-lg border border-zinc-200/60 bg-white/70 p-2 text-zinc-700 hover:bg-white dark:border-zinc-800/60 dark:bg-zinc-900/70 dark:text-zinc-200 dark:hover:bg-zinc-900"
              >
                {open ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>

          <AnimatePresence>
            {open && (
              <motion.nav
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="md:hidden overflow-hidden border-t border-zinc-200/60 dark:border-zinc-800/60"
              >
                <div className="px-4 py-3 grid gap-2">
                  {navItems.map((item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="rounded-lg px-3 py-2 text-sm font-medium text-zinc-700/90 hover:text-zinc-900 hover:bg-white/70 dark:text-zinc-300/90 dark:hover:text-white dark:hover:bg-zinc-900/70"
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              </motion.nav>
            )}
          </AnimatePresence>
        </div>
      </div>
    </header>
  )
}
