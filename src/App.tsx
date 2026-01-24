import { Contact } from "./components/contact";
import { Experience } from "./components/experience";
import { Hero } from "./components/hero";
import { Projects } from "./components/projects";
import { Skills } from "./components/skills";
import { ThemeProvider } from "./components/theme-provider";
// import { Skills } from "./components/skills";

export default function App() {
  return (
    <ThemeProvider defaultTheme="system">
      <main className="bg-background text-foreground">
        <Hero />
        <Projects />
        <Experience />
        <Skills />
        <Contact />
      </main>
    </ThemeProvider>
  )
}
