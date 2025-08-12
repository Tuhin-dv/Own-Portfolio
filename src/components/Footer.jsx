
import { useState, useEffect } from "react"
import { Github, Linkedin, Twitter, Mail, Heart, Code2, Coffee, Star, Sparkles, Facebook } from "lucide-react"

function Footer() {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear())
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
    setCurrentYear(new Date().getFullYear())
  }, [])

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/Tuhin-dv",
      label: "GitHub",
      color: "hover:text-gray-300 hover:bg-gray-600/20",
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/tawhidul-islam-dev/",
      label: "LinkedIn",
      color: "hover:text-blue-400 hover:bg-blue-600/20",
    },
      {
      icon: Facebook,
      label: "Facebook",
      href: "https://www.facebook.com/Tawhidul.dev",
      color: "hover:bg-cyan-600 hover:border-cyan-400",
    }
   
  ]

  const quickLinks = [
    { name: "Home", href: "#" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Resume", href: "#resume" },
    { name: "Contact", href: "#contact" },
  ]

  const services = [
    { name: "Web Development", href: "#" },
    { name: "UI/UX Design", href: "#" },
    { name: "React Development", href: "#" },
    { name: "Frontend Consulting", href: "#" },
  ]

  return (
    <footer className="relative bg-black overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-cyan-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -top-20 -right-40 w-96 h-96 bg-gradient-to-r from-purple-500/5 via-pink-500/5 to-blue-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute -bottom-40 left-1/2 w-80 h-80 bg-gradient-to-r from-cyan-500/5 via-blue-500/5 to-purple-500/5 rounded-full blur-3xl animate-pulse delay-2000"></div>

        {/* Floating particles */}
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full animate-ping"
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
        {/* Main Footer Content */}
        <div
          className={`transform transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          {/* Glass Container */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-cyan-500/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

            <div className="relative bg-white/5 backdrop-blur-2xl border-t border-white/10 px-4 py-16">
              <div className="max-w-6xl mx-auto">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
                  {/* Brand Section */}
                  <div className="lg:col-span-2">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="relative">
                        <div className="w-12 h-12 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-cyan-500/20 backdrop-blur-xl border border-white/20 rounded-2xl flex items-center justify-center">
                          <Code2 className="w-6 h-6 text-white" />
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 rounded-2xl blur-lg opacity-30"></div>
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white">Tawhidul Islam</h3>
                        <p className="text-gray-400 text-sm">Frontend Developer</p>
                      </div>
                    </div>

                    <p className="text-gray-300 leading-relaxed mb-8 max-w-md">
                      Passionate frontend developer creating modern, responsive web applications with clean code and
                      beautiful designs. Let's build something amazing together!
                    </p>

                    {/* Status Badge */}
                    <div className="inline-flex items-center gap-3 bg-white/5 backdrop-blur-xl border border-white/10 px-6 py-3 rounded-full mb-8 group/status hover:bg-white/10 hover:border-white/20 transition-all duration-300">
                      <div className="w-3 h-3 bg-green-400 rounded-full animate-ping"></div>
                      <Star className="w-4 h-4 text-yellow-400 animate-pulse" />
                      <span className="text-gray-200 font-medium text-sm">Available for projects</span>
                      <Sparkles className="w-4 h-4 text-purple-400 animate-pulse delay-500" />
                    </div>

                    {/* Social Links */}
                    <div className="flex gap-4">
                      {socialLinks.map((social, index) => (
                        <a
                          key={index}
                          href={social.href}
                          aria-label={social.label}
                          className={`w-12 h-12 bg-white/5 backdrop-blur-xl border border-white/20 rounded-xl flex items-center justify-center text-gray-400 ${social.color} transition-all duration-300 hover:scale-110 hover:border-white/30 group/social`}
                        >
                          <social.icon className="w-5 h-5 group-hover/social:rotate-12 transition-transform duration-300" />
                        </a>
                      ))}
                    </div>
                  </div>

                  {/* Quick Links */}
                  <div>
                    <h4 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                      Quick Links
                    </h4>
                    <ul className="space-y-4">
                      {quickLinks.map((link, index) => (
                        <li key={index}>
                          <a
                            href={link.href}
                            className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center gap-2 group/link"
                          >
                            <div className="w-1 h-1 bg-gray-400 rounded-full group-hover/link:bg-blue-400 transition-colors duration-300"></div>
                            {link.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Services */}
                  <div>
                    <h4 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
                      <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                      Services
                    </h4>
                    <ul className="space-y-4">
                      {services.map((service, index) => (
                        <li key={index}>
                          <a
                            href={service.href}
                            className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center gap-2 group/service"
                          >
                            <div className="w-1 h-1 bg-gray-400 rounded-full group-hover/service:bg-purple-400 transition-colors duration-300"></div>
                            {service.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          className={`transform transition-all duration-1000 delay-300 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <div className="relative">
            <div className="bg-white/5 backdrop-blur-2xl border-t border-white/10 px-4 py-8">
              <div className="max-w-6xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                  {/* Copyright */}
                  <div className="flex items-center gap-2 text-gray-400">
                    <span>© {currentYear} Tawhidul Islam. Made with</span>
                    <Heart className="w-4 h-4 text-red-400 animate-pulse" />
                    <span>and</span>
                    <Coffee className="w-4 h-4 text-orange-400" />
                    <span>in Bangladesh</span>
                  </div>

                  {/* Tech Stack */}
                  <div className="flex items-center gap-4">
                    <span className="text-gray-400 text-sm">Built with:</span>
                    <div className="flex items-center gap-3">
                      {["React", "Next.js", "Tailwind"].map((tech, index) => (
                        <span
                          key={index}
                          className="text-xs bg-white/5 backdrop-blur-xl border border-white/10 px-3 py-1 rounded-full text-gray-300 hover:bg-white/10 hover:text-white transition-all duration-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
