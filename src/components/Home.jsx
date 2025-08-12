"use client"

import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import {
  Palette,
  Code2,
  Zap,
  ArrowRight,
  ExternalLink,
  Github,
  Star,
  Sparkles,
  Rocket,
  Users,
  Award,
  CheckCircle,
  Eye,
} from "lucide-react"
import Hero from "./Hero"
import Skills from "./Skills"

function Home() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeService, setActiveService] = useState(0)

  useEffect(() => {
    setIsVisible(true)
    const serviceInterval = setInterval(() => {
      setActiveService((prev) => (prev + 1) % 3)
    }, 3000)
    return () => clearInterval(serviceInterval)
  }, [])

  const services = [
    {
      icon: Palette,
      title: "Web Design",
      description: "Modern, sleek, and responsive design tailored to your brand identity and user experience.",
      features: ["Responsive Design", "UI/UX Optimization", "Brand Integration", "Mobile-First Approach"],
      color: "from-blue-500 to-cyan-500",
      bgColor: "from-blue-500/10 to-cyan-500/10",
    },
    {
      icon: Code2,
      title: "Development",
      description: "Clean, scalable code with modern frameworks and best practices for optimal performance.",
      features: ["React Development", "Modern JavaScript", "Clean Architecture", "Performance Optimization"],
      color: "from-purple-500 to-pink-500",
      bgColor: "from-purple-500/10 to-pink-500/10",
    },
    {
      icon: Zap,
      title: "Performance",
      description: "Optimized sites for speed, SEO, and accessibility to maximize your digital presence.",
      features: ["Speed Optimization", "SEO Implementation", "Accessibility", "Analytics Integration"],
      color: "from-orange-500 to-red-500",
      bgColor: "from-orange-500/10 to-red-500/10",
    },
    {
      icon: Zap,
      title: "Performance",
      description: "Optimized sites for speed, SEO, and accessibility to maximize your digital presence.",
      features: ["Speed Optimization", "SEO Implementation", "Accessibility", "Analytics Integration"],
      color: "from-orange-500 to-red-500",
      bgColor: "from-orange-500/10 to-red-500/10",
    },
    {
      icon: Zap,
      title: "Performance",
      description: "Optimized sites for speed, SEO, and accessibility to maximize your digital presence.",
      features: ["Speed Optimization", "SEO Implementation", "Accessibility", "Analytics Integration"],
      color: "from-orange-500 to-red-500",
      bgColor: "from-orange-500/10 to-red-500/10",
    },
  ]

  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "Full-stack e-commerce solution with React, Node.js, and Stripe integration for seamless shopping experience.",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=250&fit=crop&crop=center",
      liveUrl: "#",
      githubUrl: "#",
      status: "Live",
    },
    {
      title: "Portfolio Website",
      description:
        "Modern portfolio website with glassmorphism design, animations, and responsive layout for creative professionals.",
      tech: ["Next.js", "Tailwind", "Framer Motion", "Vercel"],
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=400&h=250&fit=crop&crop=center",
      liveUrl: "#",
      githubUrl: "#",
      status: "Live",
    },
    {
      title: "Task Management App",
      description:
        "Collaborative task management application with real-time updates, team collaboration, and progress tracking.",
      tech: ["React", "Firebase", "Material-UI", "PWA"],
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=250&fit=crop&crop=center",
      liveUrl: "#",
      githubUrl: "#",
      status: "In Progress",
    },
  ]

  const stats = [
    { icon: Rocket, number: "10+", label: "Projects Completed", color: "text-blue-400" },
    { icon: Users, number: "5+", label: "Happy Clients", color: "text-green-400" },
    { icon: Award, number: "1+", label: "Years Experience", color: "text-purple-400" },
    { icon: Star, number: "100%", label: "Client Satisfaction", color: "text-yellow-400" },
  ]

  return (
    <div>
      <Hero />

      <div className="bg-gradient-to-r from-black/25 to-black/50 via-transparent relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
         

          {/* Floating particles */}
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full animate-ping"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 2}s`,
              }}
            />
          ))}
        </div>

        <div className="relative z-10">
          {/* Stats Section */}
          <section className="py-20 px-4">
            <div
              className={`max-w-6xl mx-auto transform transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                }`}
            >
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {stats.map((stat, index) => (
                  <div key={index} className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-cyan-500/10 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                    <div className="relative bg-white/5 backdrop-blur-2xl border border-white/10 rounded-2xl p-8 text-center hover:bg-white/10 hover:border-white/20 transition-all duration-500 group hover:scale-105">
                      <stat.icon className={`w-8 h-8 ${stat.color} mx-auto mb-4 group-hover:animate-bounce`} />
                      <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                      <div className="text-sm text-gray-400 font-medium">{stat.label}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Services Section */}
          <section className="py-20 px-4">
            <div
              className="max-w-[1600px] mx-auto">
             <Skills></Skills>
            </div>
          </section>

          {/* Projects Section */}
          <section className="py-20 px-4">
            <div
              className={`max-w-6xl mx-auto transform transition-all duration-1000 delay-500 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                }`}
            >
              {/* Section Header */}
              <div className="text-center mb-20">
                <div className="inline-flex items-center gap-3 bg-white/5 backdrop-blur-xl border border-white/10 px-6 py-3 rounded-full mb-8 group hover:bg-white/10 hover:border-white/20 transition-all duration-300">
                  <Rocket className="w-4 h-4 text-blue-400 animate-pulse" />
                  <span className="text-gray-200 font-medium">Featured Work</span>
                  <Star className="w-4 h-4 text-yellow-400 animate-pulse delay-500" />
                </div>

                <h2 className="text-5xl md:text-6xl font-bold mb-6 group">
                  <span className="bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent group-hover:from-blue-300 group-hover:via-purple-300 group-hover:to-cyan-300 transition-all duration-500">
                    Recent Projects
                  </span>
                </h2>

                <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                  A showcase of my latest work and creative solutions
                </p>
              </div>

              {/* Projects Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, index) => (
                  <div key={index} className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-cyan-500/10 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

                    <div className="relative bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl overflow-hidden hover:bg-white/10 hover:border-white/20 transition-all duration-700 group hover:scale-105 h-full flex flex-col">
                      {/* Project Image */}
                      <div className="relative overflow-hidden">
                        <img
                          src={project.image || "/placeholder.svg"}
                          alt={project.title}
                          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>

                        {/* Status Badge */}
                        <div
                          className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-medium ${project.status === "Live"
                              ? "bg-green-500/20 text-green-400 border border-green-500/30"
                              : "bg-orange-500/20 text-orange-400 border border-orange-500/30"
                            }`}
                        >
                          {project.status}
                        </div>

                        {/* Overlay Actions */}
                        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                          <a
                            href={project.liveUrl}
                            className="w-12 h-12 bg-white/20 backdrop-blur-xl border border-white/30 rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300"
                          >
                            <Eye className="w-5 h-5" />
                          </a>
                          <a
                            href={project.githubUrl}
                            className="w-12 h-12 bg-white/20 backdrop-blur-xl border border-white/30 rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300"
                          >
                            <Github className="w-5 h-5" />
                          </a>
                        </div>
                      </div>

                      {/* Project Content */}
                      <div className="p-8 flex flex-col flex-grow">
                        <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                        <p className="text-gray-300 leading-relaxed mb-6 text-sm flex-grow">{project.description}</p>

                        {/* Tech Stack */}
                        <div className="flex flex-wrap gap-2 mb-6">
                          {project.tech.map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className="text-xs bg-white/10 backdrop-blur-xl border border-white/20 px-3 py-1 rounded-full text-gray-300"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>

                        {/* Project Links */}
                        <div className="flex gap-4 mt-auto">
                          <Link
                            to="/projects"
                            className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors duration-300 text-sm font-medium group/link"
                          >
                            View Details
                            <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform duration-300" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20 px-4">
            <div
              className={`max-w-[1600px] mx-auto text-center transform transition-all duration-1000 delay-700 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                }`}
            >
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-cyan-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

                <div className="relative bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl p-16 hover:bg-white/10 hover:border-white/20 transition-all duration-700">
                  {/* CTA Header */}
                  <div className="mb-12">
                    <h2 className="text-5xl md:text-6xl font-bold mb-6 group">
                      <span className="bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent group-hover:from-blue-300 group-hover:via-purple-300 group-hover:to-cyan-300 transition-all duration-500">
                        Have an idea in mind?
                      </span>
                    </h2>
                    <p className="text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto">
                      Let's collaborate and bring your vision to life with modern web technologies and creative
                      solutions.
                    </p>
                  </div>

                  {/* CTA Buttons */}
                  <div className="flex flex-col sm:flex-row gap-6 justify-center">
                    <Link to="/contact">
                      <button className="group relative bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 text-white px-12 py-5 rounded-2xl font-bold text-xl hover:from-blue-500 hover:via-purple-500 hover:to-cyan-500 transform hover:-translate-y-2 hover:scale-105 transition-all duration-500 flex items-center justify-center gap-4 shadow-2xl hover:shadow-blue-500/25">
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 rounded-2xl blur-xl opacity-50 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <span className="relative z-10">Get in Touch</span>
                        <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300 relative z-10" />
                      </button>
                    </Link>

                    <Link to="/projects">
                      <button className="group bg-white/5 backdrop-blur-2xl border-2 border-white/20 text-gray-100 px-12 py-5 rounded-2xl font-bold text-xl hover:bg-white/10 hover:border-white/30 transition-all duration-500 flex items-center justify-center gap-4 shadow-2xl hover:scale-105 hover:-translate-y-2">
                        <span>View All Projects</span>
                        <ExternalLink className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

export default Home
