
import { Button } from '@/components/ui/button'
import { Github, Linkedin, Mail, ArrowRight, X } from 'lucide-react'

export function Contact() {
  return (
    <section className="py-24 px-6 md:px-12 lg:px-20 border-t border-border">
      <div className="max-w-3xl mx-auto text-center">
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Let's work together</h2>
          <p className="text-lg text-muted-foreground">
            Open to startup roles and high-ownership engineering opportunities.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <Button
            asChild
            className="bg-foreground text-background hover:bg-foreground/90 gap-2"
            size="lg"
          >
            <a href="mailto:sanidhyamadheshia@gmail.com">
              Get in touch
              <ArrowRight size={18} />
            </a>
          </Button>
        </div>

        <div className="flex justify-center gap-8 pt-8 border-t border-border">
          <a
            href="https://github.com/SanidhyaMadheshia"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground hover:text-muted-foreground transition-colors"
            aria-label="GitHub"
          >
            <Github size={28} />
          </a>
          <a
            href="https://www.linkedin.com/in/sanidhya-madeshia-620099293/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground hover:text-muted-foreground transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin size={28} />
          </a>
          <a
            href="mailto:sanidhyamadeshia@gmail.com"
            className="text-foreground hover:text-muted-foreground transition-colors"
            aria-label="Email"
          >
            <Mail size={28} />
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

        <p className="text-sm text-muted-foreground mt-12">
          © 2026 Sanidhya Madeshia. Built with React & Next.js.
        </p>
      </div>
    </section>
  )
}
