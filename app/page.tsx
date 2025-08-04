"use client"

import { ArrowDown, Github, Linkedin, Mail, ExternalLink, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ThemeToggle } from "@/components/theme-toggle"
import Image from "next/image"
import { useState } from "react"

export default function Portfolio() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const skills = [
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "Python",
    "PostgreSQL",
    "Tailwind CSS",
    "AWS",
    "Docker",
    "Git",
    "Figma",
    "MongoDB",
  ]

  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "A full-stack e-commerce solution with payment integration, inventory management, and admin dashboard.",
      image: "/placeholder.svg?height=200&width=300&text=E-Commerce+Platform",
      technologies: ["Next.js", "TypeScript", "Stripe", "PostgreSQL"],
      github: "#",
      live: "#",
    },
    {
      title: "Task Management App",
      description:
        "Collaborative project management tool with real-time updates, team collaboration, and progress tracking.",
      image: "/placeholder.svg?height=200&width=300&text=Task+Management+App",
      technologies: ["React", "Node.js", "Socket.io", "MongoDB"],
      github: "#",
      live: "#",
    },
    {
      title: "AI Content Generator",
      description:
        "AI-powered content creation tool that generates blog posts, social media content, and marketing copy.",
      image: "/placeholder.svg?height=200&width=300&text=AI+Content+Generator",
      technologies: ["Python", "OpenAI API", "FastAPI", "React"],
      github: "#",
      live: "#",
    },
  ]

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setMobileMenuOpen(false)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-slate-950 dark:via-slate-900 dark:to-slate-800 transition-colors duration-300">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 dark:bg-slate-950/90 backdrop-blur-md z-50 border-b border-slate-200 dark:border-slate-800 transition-colors duration-300">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Alex Johnson
            </h1>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <button
                onClick={() => scrollToSection("about")}
                className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("projects")}
                className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
              >
                Contact
              </button>
              <ThemeToggle />
            </div>

            {/* Mobile Navigation */}
            <div className="md:hidden flex items-center space-x-2">
              <ThemeToggle />
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="h-9 w-9 px-0"
              >
                {mobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
              </Button>
            </div>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t border-slate-200 dark:border-slate-800">
              <div className="flex flex-col space-y-4 pt-4">
                <button
                  onClick={() => scrollToSection("about")}
                  className="text-left text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                >
                  About
                </button>
                <button
                  onClick={() => scrollToSection("projects")}
                  className="text-left text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                >
                  Projects
                </button>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="text-left text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                >
                  Contact
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto text-center">
          <div className="mb-8">
            <div className="relative inline-block">
              <Image
                src="/placeholder.svg?height=150&width=150&text=Profile"
                alt="Profile"
                width={150}
                height={150}
                className="rounded-full mx-auto mb-6 border-4 border-white dark:border-slate-700 shadow-xl transition-all duration-300"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-500 to-purple-500 opacity-20 animate-pulse"></div>
            </div>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-slate-900 dark:text-white mb-6 transition-colors duration-300">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
              Alex Johnson
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 mb-8 max-w-3xl mx-auto transition-colors duration-300">
            Full-Stack Developer & UI/UX Designer passionate about creating beautiful, functional digital experiences
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={() => scrollToSection("contact")}
            >
              <Mail className="mr-2 h-4 w-4" />
              Get In Touch
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-slate-300 dark:border-slate-600 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all duration-300 bg-transparent"
              onClick={() => scrollToSection("projects")}
            >
              <Github className="mr-2 h-4 w-4" />
              View My Work
            </Button>
          </div>
          <ArrowDown className="mx-auto h-6 w-6 text-slate-400 dark:text-slate-500 animate-bounce" />
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="py-20 px-6 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm transition-colors duration-300"
      >
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-6 transition-colors duration-300">
                About Me
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-300 mb-6 transition-colors duration-300">
                I'm a passionate full-stack developer with 5+ years of experience building web applications. I love
                turning complex problems into simple, beautiful designs and bringing ideas to life through code.
              </p>
              <p className="text-lg text-slate-600 dark:text-slate-300 mb-8 transition-colors duration-300">
                When I'm not coding, you can find me exploring new technologies, contributing to open-source projects,
                or sharing my knowledge through blog posts and mentoring.
              </p>
              <div className="flex gap-4">
                <Button
                  variant="outline"
                  size="sm"
                  className="hover:bg-blue-50 dark:hover:bg-blue-950 transition-colors duration-300 bg-transparent"
                >
                  <Linkedin className="mr-2 h-4 w-4" />
                  LinkedIn
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="hover:bg-blue-50 dark:hover:bg-blue-950 transition-colors duration-300 bg-transparent"
                >
                  <Github className="mr-2 h-4 w-4" />
                  GitHub
                </Button>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-slate-900 dark:text-white mb-6 transition-colors duration-300">
                Skills & Technologies
              </h3>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill) => (
                  <Badge
                    key={skill}
                    variant="secondary"
                    className="text-sm py-2 px-4 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-blue-100 dark:hover:bg-blue-900 transition-all duration-300 cursor-default"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4 transition-colors duration-300">
              Featured Projects
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto transition-colors duration-300">
              Here are some of my recent projects that showcase my skills and passion for development
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg bg-white dark:bg-slate-800 hover:scale-105 transform"
              >
                <div className="relative overflow-hidden rounded-t-lg">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={300}
                    height={200}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl text-slate-900 dark:text-white transition-colors duration-300">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-slate-600 dark:text-slate-300 transition-colors duration-300">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <Badge
                        key={tech}
                        variant="outline"
                        className="text-xs border-slate-300 dark:border-slate-600 text-slate-600 dark:text-slate-400 transition-colors duration-300"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <Button
                      size="sm"
                      variant="outline"
                      className="flex-1 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors duration-300 bg-transparent"
                    >
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </Button>
                    <Button
                      size="sm"
                      className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-20 px-6 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm transition-colors duration-300"
      >
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-6 transition-colors duration-300">
            Let's Work Together
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 mb-12 max-w-2xl mx-auto transition-colors duration-300">
            I'm always interested in new opportunities and exciting projects. Let's discuss how we can bring your ideas
            to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Mail className="mr-2 h-4 w-4" />
              alex@example.com
            </Button>
            <div className="flex gap-4">
              <Button
                size="lg"
                variant="outline"
                className="hover:bg-blue-50 dark:hover:bg-blue-950 transition-colors duration-300 bg-transparent"
              >
                <Linkedin className="mr-2 h-4 w-4" />
                LinkedIn
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="hover:bg-blue-50 dark:hover:bg-blue-950 transition-colors duration-300 bg-transparent"
              >
                <Github className="mr-2 h-4 w-4" />
                GitHub
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-slate-200 dark:border-slate-800 transition-colors duration-300">
        <div className="container mx-auto text-center">
          <p className="text-slate-600 dark:text-slate-400 transition-colors duration-300">
            © 2024 Alex Johnson. Built with Next.js and Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  )
}
