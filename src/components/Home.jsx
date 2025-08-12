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
                    <p className="text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto mb-4">
                      Let's collaborate and bring your vision to life with modern web technologies and creative solutions.
                    </p>
                    <p className="text-md text-gray-400 max-w-xl mx-auto mb-2">
                      Whether it's a personal project, startup idea, or business website, I'm here to help you build it.
                    </p>
                    <p className="text-md text-gray-400 max-w-xl mx-auto font-semibold">
                      Feel free to <a href="/contact" className="text-blue-400 underline hover:text-blue-600 transition">get in touch</a> anytime — I'd love to hear from you!
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
