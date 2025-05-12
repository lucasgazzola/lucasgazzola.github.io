import { Github, Linkedin, Mail, ExternalLink, ChevronDown } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import ProjectCard from '@/components/project-card'
import SkillBadge from '@/components/skill-badge'

export default function App() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center min-h-screen px-4 py-20 overflow-hidden bg-gradient-to-b from-background to-background/80">
        <div className="absolute inset-0 z-0 opacity-10">
          <div className="absolute inset-0 bg-grid-pattern" />
        </div>
        <div className="container relative z-10 flex flex-col items-center justify-center max-w-4xl gap-8 text-center">
          <div className="relative w-32 h-32 overflow-hidden rounded-full border-4 bg-[#7C3AED] border-white/80">
            <img
              className="translate-x-1 object-cover w-full h-full"
              src="/heroimage.png"
            />
          </div>

          <div className="space-y-4">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              <span className="text-[#7C3AED]">Hola, soy </span>
              <span className="relative">
                <span className="relative z-10">Lucas Gazzola</span>
                <span className="absolute bottom-2 left-0 z-0 w-full h-3 bg-[#7C3AED]/20"></span>
              </span>
            </h1>
            <h2 className="text-2xl font-medium text-muted-foreground md:text-3xl">
              Desarrollador Frontend
            </h2>
            <p className="max-w-2xl mx-auto text-lg text-muted-foreground">
              Creando experiencias web modernas, intuitivas y de alto
              rendimiento con las últimas tecnologías frontend.
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-4 mt-6">
            <Button className="bg-[#7C3AED]" asChild>
              <a href="#contacto">Contáctame</a>
            </Button>
            <Button variant="outline" asChild>
              <a href="#proyectos">Ver Proyectos</a>
            </Button>
          </div>
          <div className="flex items-center justify-center gap-4 mt-8">
            <a
              href="https://github.com/lucasgazzola"
              target="_blank"
              rel="noopener noreferrer">
              <Button variant="ghost" size="icon" className="rounded-full">
                <Github className="w-5 h-5" />
                <span className="sr-only">GitHub</span>
              </Button>
            </a>
            <a
              href="https://linkedin.com/in/lucasgazzola"
              target="_blank"
              rel="noopener noreferrer">
              <Button variant="ghost" size="icon" className="rounded-full">
                <Linkedin className="w-5 h-5" />
                <span className="sr-only">LinkedIn</span>
              </Button>
            </a>
            <a href="mailto:lucasgazzola1@outlook.com">
              <Button variant="ghost" size="icon" className="rounded-full">
                <Mail className="w-5 h-5" />
                <span className="sr-only">Email</span>
              </Button>
            </a>
          </div>
          <div className="absolute bottom-8 left-0 right-0 flex justify-center animate-bounce">
            <a
              href="#sobre-mi"
              className="text-muted-foreground hover:text-foreground">
              <ChevronDown className="w-6 h-6" />
              <span className="sr-only">Desplazar hacia abajo</span>
            </a>
          </div>
        </div>
      </section>

      {/* Sobre Mí */}
      <section id="sobre-mi" className="py-20 bg-muted/30 flex justify-center">
        <div className="container max-w-4xl px-4">
          <div className="flex flex-col gap-12 md:flex-row">
            <div className="flex-1 space-y-6">
              <div>
                <Badge variant="outline" className="mb-2">
                  Sobre Mí
                </Badge>
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                  Ingeniero en Sistemas y Desarrollador Frontend
                </h2>
              </div>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Soy un apasionado desarrollador frontend con experiencia en la
                  creación de interfaces modernas y funcionales. Actualmente me
                  encuentro finalizando mi carrera de Ingeniería en Sistemas, lo
                  que me ha brindado una sólida base técnica y teórica.
                </p>
                <p>
                  Mi experiencia profesional incluye el desarrollo de proyectos
                  web para empresas, donde he podido aplicar mis conocimientos
                  en React, Next.js, y otras tecnologías modernas del ecosistema
                  frontend.
                </p>
                <p>
                  Busco constantemente nuevos desafíos que me permitan crecer
                  profesionalmente y contribuir con soluciones innovadoras y de
                  calidad.
                </p>
              </div>
              <div className="pt-4">
                <Button asChild className="bg-[#7C3AED]">
                  <a href="/cv.pdf" target="_blank" rel="noopener noreferrer">
                    Descargar CV <ExternalLink className="w-4 h-4 ml-2" />
                  </a>
                </Button>
              </div>
            </div>
            <div className="flex-1 space-y-6">
              <div>
                <h3 className="text-xl font-semibold">Habilidades Técnicas</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                <SkillBadge name="HTML5" level={90} />
                <SkillBadge name="CSS3" level={85} />
                <SkillBadge name="JavaScript" level={85} />
                <SkillBadge name="TypeScript" level={80} />
                <SkillBadge name="React" level={85} />
                <SkillBadge name="Next.js" level={80} />
                <SkillBadge name="Tailwind CSS" level={90} />
                <SkillBadge name="Git" level={75} />
                <SkillBadge name="Responsive Design" level={90} />
                <SkillBadge name="UI/UX" level={75} />
              </div>
              <div className="pt-4">
                <h3 className="text-xl font-semibold">Educación</h3>
                <div className="mt-4 space-y-4">
                  <div>
                    <h4 className="font-medium">Ingeniería en Sistemas</h4>
                    <p className="text-sm text-muted-foreground">
                      Universidad Tecnológica Nacional • En curso
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium">Desarrollo Web Frontend</h4>
                    <p className="text-sm text-muted-foreground">
                      Autodidacta • Desde 2021
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Proyectos */}
      <section id="proyectos" className="py-20 flex justify-center">
        <div className="container max-w-4xl px-4">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-2">
              Proyectos
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Trabajos Destacados
            </h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              Una selección de los proyectos en los que he trabajado, mostrando
              mis habilidades y experiencia como desarrollador frontend.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            <ProjectCard
              title="Sitio Web Corporativo"
              description="Desarrollo completo del sitio web para una empresa, incluyendo diseño responsive, optimización de rendimiento y SEO."
              image="/placeholder.svg?height=300&width=500"
              tags={['Next.js', 'React', 'Tailwind CSS', 'Responsive']}
              link="https://empresa-ejemplo.com"
            />
            <ProjectCard
              title="Dashboard Analítico"
              description="Panel de control interactivo con visualización de datos en tiempo real, filtros avanzados y exportación de informes."
              image="/placeholder.svg?height=300&width=500"
              tags={['React', 'TypeScript', 'Chart.js', 'API Integration']}
              link="https://dashboard-ejemplo.com"
            />
            <ProjectCard
              title="E-commerce"
              description="Tienda online con catálogo de productos, carrito de compras, pasarela de pagos y área de usuario."
              image="/placeholder.svg?height=300&width=500"
              tags={['Next.js', 'Stripe', 'MongoDB', 'Authentication']}
              link="https://tienda-ejemplo.com"
            />
            <ProjectCard
              title="Aplicación de Gestión"
              description="Sistema interno para gestión de recursos, seguimiento de proyectos y comunicación entre equipos."
              image="/placeholder.svg?height=300&width=500"
              tags={['React', 'Firebase', 'Material UI', 'Real-time']}
              link="https://gestion-ejemplo.com"
            />
          </div>
        </div>
      </section>

      {/* Contacto */}
      <section id="contacto" className="py-20 bg-muted/30 flex justify-center">
        <div className="container max-w-4xl px-4">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-2">
              Contacto
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              ¿Interesado en trabajar juntos?
            </h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              Estoy abierto a nuevas oportunidades laborales y colaboraciones.
              No dudes en contactarme para discutir cómo puedo contribuir a tu
              proyecto.
            </p>
          </div>
          <Card className="max-w-lg mx-auto">
            <CardContent className="p-6">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#7C3AED]/10">
                    <Mail className="w-6 h-6 text-[#7C3AED]" />
                  </div>
                  <div>
                    <h3 className="font-medium">Email</h3>
                    <p className="text-muted-foreground">
                      <a
                        href="mailto:lucasgazzola1@outlook.com"
                        className="hover:text-[#7C3AED]">
                        lucasgazzola1@outlook.com
                      </a>
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#7C3AED]/10">
                    <Linkedin className="w-6 h-6 text-[#7C3AED]" />
                  </div>
                  <div>
                    <h3 className="font-medium">LinkedIn</h3>
                    <p className="text-muted-foreground">
                      <a
                        href="https://linkedin.com/in/lucasgazzola"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-[#7C3AED]">
                        linkedin.com/in/lucasgazzola
                      </a>
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#7C3AED]/10">
                    <Github className="w-6 h-6 text-[#7C3AED]" />
                  </div>
                  <div>
                    <h3 className="font-medium">GitHub</h3>
                    <p className="text-muted-foreground">
                      <a
                        href="https://github.com/lucasgazzola"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-[#7C3AED]">
                        github.com/lucasgazzola
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t flex justify-center bg-muted/30">
        <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="text-center md:text-left">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Lucas Gazzola. Todos los derechos
              reservados.
            </p>
          </div>
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/lucasgazzola"
              target="_blank"
              rel="noopener noreferrer">
              <Button variant="ghost" size="icon" className="w-8 h-8">
                <Github className="w-4 h-4" />
                <span className="sr-only">GitHub</span>
              </Button>
            </a>
            <a
              href="https://linkedin.com/in/lucasgazzola"
              target="_blank"
              rel="noopener noreferrer">
              <Button variant="ghost" size="icon" className="w-8 h-8">
                <Linkedin className="w-4 h-4" />
                <span className="sr-only">LinkedIn</span>
              </Button>
            </a>
            <a href="mailto:lucasgazzola1@outlook.com">
              <Button variant="ghost" size="icon" className="w-8 h-8">
                <Mail className="w-4 h-4" />
                <span className="sr-only">Email</span>
              </Button>
            </a>
          </div>
        </div>
      </footer>
    </main>
  )
}
