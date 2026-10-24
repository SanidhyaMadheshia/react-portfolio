import { About } from "./components/about"
import { Contact } from "./components/contact"
import { Experience } from "./components/experience"
import { Hero } from "./components/hero"
import { Nav } from "./components/nav"
import { Projects } from "./components/projects"
import { Skills } from "./components/skills"
import { ThemeProvider } from "./components/theme-provider"
import { useReveal } from "./hooks/use-reveal"

function Page() {
  useReveal()
  return (
    <>
      <Nav />
      <main id="main" className="bg-background text-foreground">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>
    </>
  )
}

export default function App() {
  return (
    <ThemeProvider defaultTheme="dark">
      <Page />
    </ThemeProvider>
  )
}
