import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Stats from './components/Stats'
import About from './components/About'
import Services from './components/Services'
import Portfolio from './components/Portfolio'
import Testimonials from './components/Testimonials'
import TeamClients from './components/TeamClients'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-white text-zinc-900 dark:bg-zinc-950 dark:text-zinc-100">
      <Navbar />
      <main className="pt-24">
        <Hero />
        <Stats />
        <About />
        <Services />
        <Portfolio />
        <Testimonials />
        <TeamClients />
        <Contact />
        <footer className="border-t border-zinc-200/60 py-10 text-center text-sm text-zinc-600 dark:border-zinc-800/60 dark:text-zinc-400">
          © {new Date().getFullYear()} Flames Corporate. All rights reserved.
        </footer>
      </main>
    </div>
  )
}

export default App
