"use client"

import { useState, useEffect } from "react"
import { Github, ExternalLink, Star, Eye } from "lucide-react"

const projects = [
  {
    name: "Globallern - Language Tutor Booking",
    description:
      "A comprehensive language tutoring platform featuring JWT authentication, advanced tutor booking system, and interactive review management.",
    image: "https://i.ibb.co.com/3Yh6yZnb/Screenshot-5.png",
    live: "https://eclectic-lolly-0cf089.netlify.app/",
    github: "https://github.com/Tuhin-dv/Global-Learn",
    status: "Live",
  
    stats: { views: "2.5K", stars: "45", forks: "12" },
  },
  {
    name: "JobTrack",
    description:
      "A user-friendly job portal where users can search for jobs, view detailed listings by region, and apply directly through the platform with real-time application status tracking.",
    image: "https://i.ibb.co.com/MrYCQc6/Screenshot-4.png",
    live: "https://jade-lokum-8eff88.netlify.app/",
    github: "https://github.com/Tuhin-dv/JobTrack",
    status: "Live",
   
    stats: { views: "1.8K", stars: "32", forks: "8" },
  },
  {
    name: "UniScholarship",
    description:
      "A comprehensive scholarship management system that allows students to browse and apply for scholarships, track application status, and receive feedback. Includes secure payment integration, role-based dashboards for admins and moderators, and an intuitive interface for easy scholarship management.",
    image: "https://i.ibb.co.com/QvGVGQ1c/Screenshot-2.png",
    live: "https://unischolar-5a13a.web.app/",
    github: "https://github.com/Tuhin-dv/UniScholarship",
    status: "In Progress",
   
    stats: { views: "3.2K", stars: "67", forks: "18" },
  },
]

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [activeProject, setActiveProject] = useState(0)
  const [filter, setFilter] = useState("All")

  useEffect(() => {
    setIsVisible(true)
    const projectInterval = setInterval(() => {
      setActiveProject((prev) => (prev + 1) % projects.length)
    }, 4000)
    return () => clearInterval(projectInterval)
  }, [])

  // const categories = ["All", "Full Stack", "Web App", "E-Commerce", "Productivity", "Portfolio", "Utility"]
  const filteredProjects = filter === "All" ? projects : projects.filter((project) => project.category === filter)

  return (
    <section id="projects" className="py-20   bg-gradient-to-r from-black/25 to-black/50 via-transparent relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -top-20 -right-40 w-80 h-80 bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute -bottom-40 left-1/2 w-96 h-96 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>

        {/* Floating particles */}
        {[...Array(15)].map((_, i) => (
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

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div
          className={`text-center mb-20 transform transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 group">
            <span className="bg-clip-text font text-transparent text-white group-hover:to-gray-800 transition-all duration-500">
              My Projects
            </span>
          </h2>
          <p className="text-xl text-white/55 bg-clip-text max-w-3xl mx-auto leading-relaxed">
            A showcase of my latest work, creative solutions, and technical expertise
          </p>
        </div>

        {/*Card Grid ----------------------------------------------------------*/}
        <div
          className={`grid md:grid-cols-2 lg:grid-cols-3 gap-8 transform transition-all duration-1000 delay-500 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          {filteredProjects.map((project, idx) => (
            <div key={idx} className="relative group h-full">
              {/* Fixed Hover Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-cyan-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

              {/* Card with Fixed Hover Colors */}
              <div
                className={`relative bg-slate-900/80 backdrop-blur-2xl border border-slate-700/50 rounded-3xl overflow-hidden hover:bg-slate-800/90 hover:border-blue-500/50 transition-all duration-700 group hover:scale-105 flex flex-col h-full ${
                  activeProject === idx ? "ring-2 ring-blue-500/30" : ""
                }`}
              >
                {/* Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.name}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>

                  {/* Status Badge */}
                  <div
                    className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-medium backdrop-blur-xl ${
                      project.status === "Live"
                        ? "bg-green-500/20 text-green-300 border border-green-400/40"
                        : "bg-orange-500/20 text-orange-300 border border-orange-400/40"
                    }`}
                  >
                    {project.status}
                  </div>

                  {/* Category Badge */}
                
                  {/* Overlay Buttons */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-slate-800/80 backdrop-blur-xl border border-slate-600/50 rounded-full flex items-center justify-center text-white hover:bg-blue-500/20 hover:border-blue-400/50 transition-all duration-300"
                    >
                      <Eye className="w-5 h-5" />
                    </a>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-slate-800/80 backdrop-blur-xl border border-slate-600/50 rounded-full flex items-center justify-center text-white hover:bg-purple-500/20 hover:border-purple-400/50 transition-all duration-300"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 flex-grow flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-3 font group-hover:text-blue-300 transition-colors duration-300">
                      {project.name}
                    </h3>
                    <p className="text-gray-300 font leading-relaxed mb-6 text-sm group-hover:text-gray-200 transition-colors duration-300">
                      {project.description}
                    </p>

                 

                
                  </div>

                  {/* Footer: Stats + Links */}
                  <div>
                    <div className="flex justify-between items-center mb-6 text-xs">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-1">
                          <Eye className="w-3 h-3 text-blue-400" />
                          <span className="text-gray-400">{project.stats.views}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Star className="w-3 h-3 text-yellow-400" />
                          <span className="text-gray-400">{project.stats.stars}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-gray-400 hover:text-purple-400 transition-colors duration-300 text-sm font-medium group/link"
                      >
                        <Github className="w-4 h-4 group-hover/link:rotate-12 transition-transform duration-300" />
                        GitHub
                      </a>
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors duration-300 text-sm font-medium group/link"
                      >
                        Live Site
                        <ExternalLink className="w-4 h-4 group-hover/link:translate-x-1 transition-transform duration-300" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
