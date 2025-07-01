"use client"

import { useState, useEffect } from "react"
import { Code2, Palette, Rocket, Users, Coffee, ArrowRight, Download, CheckCircle, Star } from "lucide-react"

const About = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [activeSkill, setActiveSkill] = useState(0)

  useEffect(() => {
    setIsVisible(true)
    const skillInterval = setInterval(() => {
      setActiveSkill((prev) => (prev + 1) % 7)
    }, 2000)
    return () => clearInterval(skillInterval)
  }, [])

  const skills = [
    { name: "HTML", level: 95, color: "from-orange-500 to-red-500" },
    { name: "CSS", level: 90, color: "from-blue-500 to-cyan-500" },
    { name: "Tailwind", level: 95, color: "from-cyan-500 to-blue-500" },
    { name: "JavaScript", level: 85, color: "from-yellow-500 to-orange-500" },
    { name: "React", level: 90, color: "from-blue-400 to-cyan-400" },
    { name: "Firebase", level: 80, color: "from-yellow-400 to-red-500" },
    { name: "Git", level: 85, color: "from-gray-500 to-gray-700" },
  ]

  const achievements = [
    { icon: Code2, title: "1+ Years", subtitle: "Frontend Experience", color: "text-blue-400" },
    { icon: Rocket, title: "10+", subtitle: "Projects Completed", color: "text-purple-400" },
    { icon: Users, title: "5+", subtitle: "Happy Clients", color: "text-green-400" },
    { icon: Coffee, title: "100+", subtitle: "Cups of Coffee", color: "text-orange-400" },
  ]

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0">
        {/* Large glowing orbs */}
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -top-20 -right-40 w-80 h-80 bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute -bottom-40 left-1/2 w-96 h-96 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>

        {/* Medium glowing orbs */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-blue-400/5 to-purple-400/5 rounded-full blur-2xl animate-pulse delay-500"></div>
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-gradient-to-r from-purple-400/5 to-pink-400/5 rounded-full blur-2xl animate-pulse delay-1500"></div>
        <div className="absolute top-1/2 right-1/3 w-56 h-56 bg-gradient-to-r from-cyan-400/5 to-blue-400/5 rounded-full blur-2xl animate-pulse delay-800"></div>

        {/* Floating particles */}
        {[...Array(25)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/30 rounded-full animate-ping"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
            }}
          />
        ))}

        {/* Additional sparkles */}
        {[...Array(15)].map((_, i) => (
          <div
            key={`sparkle-${i}`}
            className="absolute w-0.5 h-0.5 bg-blue-400/60 rounded-full animate-ping"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${1.5 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 px-4 py-20">
        <div className="max-w-6xl mx-auto">
          {/* Header Section */}
          <div
            className={`text-center mb-20 transform transition-all duration-1000 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            {/* Glass Status Badge */}
            <div className="inline-flex items-center gap-3 bg-white/5 backdrop-blur-2xl border border-white/10 px-8 py-4 rounded-full mb-8 group hover:bg-white/10 hover:border-white/20 transition-all duration-500 shadow-2xl">
              <Star className="w-5 h-5 text-yellow-400 animate-pulse" />
              <span className="text-gray-200 font-medium text-lg">About Me</span>
              <div className="w-3 h-3 bg-green-400 rounded-full animate-ping"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-cyan-500/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>

            <h2 className="text-6xl md:text-8xl font-bold mb-8 group relative">
              <span className="bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent group-hover:from-blue-200 group-hover:via-purple-200 group-hover:to-cyan-200 transition-all duration-700 drop-shadow-2xl">
                About Me
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-cyan-500/20 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            </h2>

            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Get to know who I am, what I do, and the passion that drives my work
            </p>
          </div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Column - Story */}
            <div
              className={`transform transition-all duration-1000 delay-300 ${
                isVisible ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"
              }`}
            >
              {/* Glass Story Card */}
              <div className="relative group">
                {/* Glow effect behind card */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-cyan-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

                <div className="relative bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl p-10 shadow-2xl hover:bg-white/10 hover:border-white/20 transition-all duration-700 group">
                  {/* Header with icon */}
                  <div className="flex items-center gap-5 mb-8">
                    <div className="relative">
                      <div className="w-14 h-14 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-xl border border-white/20 rounded-2xl flex items-center justify-center">
                        <Palette className="w-7 h-7 text-white" />
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl blur-lg opacity-30 group-hover:opacity-60 transition-opacity duration-500"></div>
                    </div>
                    <h3 className="text-3xl font-bold text-white">My Story</h3>
                  </div>

                  <p className="text-lg text-gray-200 leading-relaxed mb-8">
                    I'm{" "}
                    <span className="text-transparent bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text font-bold text-xl">
                      Tuhin Ahmed
                    </span>
                    , a passionate frontend developer from Bangladesh. I specialize in creating
                    <span className="text-cyan-300 font-semibold"> responsive, dynamic, and interactive websites</span>{" "}
                    using cutting-edge technologies.
                  </p>

                  <p className="text-gray-300 leading-relaxed mb-10">
                    My journey in web development started with curiosity and has evolved into a passion for crafting
                    digital experiences that not only look stunning but also provide exceptional user experiences. I
                    believe in writing clean, maintainable code and staying updated with the latest industry trends.
                  </p>

                  {/* Key Points with glass effect */}
                  <div className="space-y-5">
                    {[
                      "Strong understanding of UI/UX principles",
                      "Experience with modern React ecosystem",
                      "Passionate about responsive design",
                      "Always learning new technologies",
                    ].map((point, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-4 group/item p-3 rounded-xl hover:bg-white/5 transition-all duration-300"
                      >
                        <div className="relative">
                          <CheckCircle className="w-6 h-6 text-green-400 group-hover/item:animate-pulse" />
                          <div className="absolute inset-0 bg-green-400/20 rounded-full blur-md opacity-0 group-hover/item:opacity-100 transition-opacity duration-300"></div>
                        </div>
                        <span className="text-gray-200 group-hover/item:text-white transition-colors duration-300 font-medium">
                          {point}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Skills & Stats */}
            <div
              className={`transform transition-all duration-1000 delay-500 ${
                isVisible ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"
              }`}
            >
              {/* Glass Skills Section */}
              <div className="relative group mb-8">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-cyan-500/20 to-blue-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

                <div className="relative bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl p-10 shadow-2xl hover:bg-white/10 hover:border-white/20 transition-all duration-700">
                  <div className="flex items-center gap-5 mb-10">
                    <div className="relative">
                      <div className="w-14 h-14 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 backdrop-blur-xl border border-white/20 rounded-2xl flex items-center justify-center">
                        <Code2 className="w-7 h-7 text-white" />
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-2xl blur-lg opacity-30 group-hover:opacity-60 transition-opacity duration-500"></div>
                    </div>
                    <h3 className="text-3xl font-bold text-white">Technical Skills</h3>
                  </div>

                  <div className="space-y-8">
                    {skills.map((skill, index) => (
                      <div key={skill.name} className="group/skill">
                        <div className="flex justify-between items-center mb-3">
                          <span
                            className={`font-semibold text-lg ${activeSkill === index ? "text-white" : "text-gray-200"} transition-colors duration-300`}
                          >
                            {skill.name}
                          </span>
                          <span
                            className={`text-sm font-medium ${activeSkill === index ? "text-white" : "text-gray-300"} transition-colors duration-300`}
                          >
                            {skill.level}%
                          </span>
                        </div>
                        <div className="relative">
                          <div className="w-full bg-white/10 backdrop-blur-xl rounded-full h-3 overflow-hidden border border-white/20">
                            <div
                              className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 relative ${
                                activeSkill === index ? "animate-pulse shadow-lg" : ""
                              }`}
                              style={{
                                width: `${skill.level}%`,
                                transform: activeSkill === index ? "scaleY(1.1)" : "scaleY(1)",
                              }}
                            >
                              <div className="absolute inset-0 bg-white/20 rounded-full"></div>
                            </div>
                          </div>
                          {activeSkill === index && (
                            <div
                              className={`absolute inset-0 bg-gradient-to-r ${skill.color} rounded-full blur-md opacity-50 animate-pulse`}
                            ></div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Glass Achievements Grid */}
              <div className="grid grid-cols-2 gap-6">
                {achievements.map((achievement, index) => (
                  <div key={index} className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-cyan-500/10 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                    <div className="relative bg-white/5 backdrop-blur-2xl border border-white/10 rounded-2xl p-8 text-center hover:bg-white/10 hover:border-white/20 transition-all duration-500 group hover:scale-105 shadow-xl">
                      <div className="relative mb-4">
                        <achievement.icon
                          className={`w-10 h-10 ${achievement.color} mx-auto group-hover:animate-bounce`}
                        />
                        <div
                          className={`absolute inset-0 ${achievement.color.replace("text-", "bg-")}/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                        ></div>
                      </div>
                      <div className="text-3xl font-bold text-white mb-2">{achievement.title}</div>
                      <div className="text-sm text-gray-300 font-medium">{achievement.subtitle}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Glass CTA Section */}
          <div
            className={`text-center mt-24 transform transition-all duration-1000 delay-700 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            <div className="flex flex-col sm:flex-row gap-8 justify-center">
              {/* Primary Glass Button */}
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 rounded-2xl blur-xl opacity-50 group-hover:opacity-100 transition-opacity duration-500"></div>

                <button className="relative bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-cyan-600/20 backdrop-blur-2xl border border-white/20 text-white px-12 py-5 rounded-2xl font-bold text-xl hover:bg-gradient-to-r hover:from-blue-600/30 hover:via-purple-600/30 hover:to-cyan-600/30 hover:border-white/30 transform hover:-translate-y-3 hover:scale-105 transition-all duration-500 flex items-center justify-center gap-4 shadow-2xl">
                  <span className="relative z-10">View My Resume</span>
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300 relative z-10" />
                </button>
              </div>

              {/* Secondary Glass Button */}
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-gray-500/20 to-gray-700/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <button className="relative bg-white/5 backdrop-blur-2xl border border-white/20 text-gray-100 px-12 py-5 rounded-2xl font-bold text-xl hover:bg-white/10 hover:border-white/30 transition-all duration-500 flex items-center justify-center gap-4 shadow-2xl hover:scale-105 hover:-translate-y-3">
                  <Download className="w-6 h-6 group-hover:translate-y-1 transition-transform duration-300" />
                  <span>Download CV</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
