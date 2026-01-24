import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Download, Github, Linkedin, Mail, Moon, Sun, X } from "lucide-react"
import profileImage from "@/assets/image2.png"

export function Hero() {
  const [theme, setTheme] = useState<"light" | "dark">("light")

  useEffect(() => {
    const root = document.documentElement
    if (theme === "dark") {
      root.classList.add("dark")
    } else {
      root.classList.remove("dark")
    }
  }, [theme])

  function handleDownloadResume() {


    window.location.href = "/resumejan24.pdf"

  }
  return (
    <header className="min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-20 py-20">
      <div className="flex justify-between items-start mb-20">
        <div />
        <button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="p-2 rounded-lg border border-border hover:bg-accent hover:text-accent-foreground transition-colors"
          aria-label="Toggle theme"
        >
          {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
        </button>
      </div>

      {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-6xl"> */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-7xl mx-auto w-full">

        <div className="space-y-6">
          <div>
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-foreground mb-2">
              Sanidhya Madeshia
            </h1>
            <p className="text-xl text-muted-foreground">
              Backend and Blockchain Engineer
            </p>
          </div>

          <p className="text-lg text-foreground leading-relaxed max-w-xl">
            I build real-time systems, scalable infrastructure, and
            production-grade web applications.
          </p>

          <div className="flex gap-4 pt-4">
            <Button className="bg-foreground text-background hover:bg-foreground/90">
              <a href="#projects">View Projects</a>
            </Button>
              <Button
                variant="outline"
                className="border-foreground text-foreground hover:bg-foreground hover:text-background bg-transparent"
                onClick={handleDownloadResume}
              >
                View Resume
              </Button>
            <a
               href="/resumejan24.pdf" download="Sanidhya_Madeshia_Resume.pdf"
               target="_blank"
               
            >
              <Download size={20}
                aria-label="download Resume"
              />
            </a>
          </div>

          <div className="flex gap-4 pt-8 border-t border-border">
            <a
              href="https://github.com/SanidhyaMadheshia"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-muted-foreground transition-colors"
              aria-label="GitHub"
            >
              <Github size={24} />
            </a>

            <a
              href="https://www.linkedin.com/in/sanidhya-madeshia-620099293/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-muted-foreground transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>

            <a
              href="mailto:sanidhyamadeshia@gmail.com"
              className="text-foreground hover:text-muted-foreground transition-colors"
              aria-label="Email"
            >
              <Mail size={24} />
            </a>
            <a
              href="https://x.com/sanidhya_eth"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-muted-foreground transition-colors"
              aria-label="X"
            >
              {/* <Mail size={24} /> */}
              <X size={24} />

            </a>

          </div>
        </div>

        <div className="flex justify-center md:justify-end">
          <img
            src={profileImage}
            alt="Sanidhya's Photo"
            // className="rounded-lg z-30 border border-border w-64 h-100 md:w-80 md:h-80 object-cover"
            className="
                rounded-xl 
                border border-border 
                object-cover 
                w-72 h-72
                md:w-[420px] md:h-[420px]
                lg:w-[460px] lg:h-[460px]
              "

          />
        </div>
      </div>
    </header>
  )
}
