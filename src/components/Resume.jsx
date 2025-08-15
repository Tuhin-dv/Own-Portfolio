"use client"

import { useState, useEffect } from "react"
import {
  Download,
  Briefcase,
  GraduationCap,
  Code2,
  Calendar,
  MapPin,
  Star,
  Award,
  CheckCircle,
  ArrowRight,
} from "lucide-react"

const Resume = () => {
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
    { name: "HTML", level: 95, color: "from-orange-500 to-red-500", icon: "🌐" },
    { name: "CSS", level: 90, color: "from-blue-500 to-cyan-500", icon: "🎨" },
    { name: "Tailwind", level: 95, color: "from-cyan-500 to-blue-500", icon: "💨" },
    { name: "JavaScript", level: 85, color: "from-yellow-500 to-orange-500", icon: "⚡" },
    { name: "React", level: 90, color: "from-blue-400 to-cyan-400", icon: "⚛️" },
    { name: "Firebase", level: 80, color: "from-yellow-400 to-red-500", icon: "🔥" },
    { name: "Git", level: 85, color: "from-gray-500 to-gray-700", icon: "📝" },
  ]

  const experiences = [
    {
      title: "Frontend Developer",
      period: "Jan 2024 – Present",
      description:
        "Developed responsive websites using React, Tailwind CSS, and Firebase. Created modern UI components and deployed applications on Vercel with optimal performance.",
      achievements: [
        "Built 10+ responsive web applications",
        "Improved website performance by 40%",
        "Implemented modern UI/UX designs",
        "Integrated Firebase authentication & database",
      ],
    },
  ]

  const education = [
    {
      degree: "Diploma in Computer Science",
      institution: "Eliyaskona Goprekhi Technical School & College",
      period: "2022 – 2024",
      location: "Sirajganj, Belkuchi",
      description:
        "Comprehensive study of web development fundamentals, data structures, algorithms, and completed multiple real-world projects.",
      highlights: [
        "Web Development Specialization",
        "Data Structures & Algorithms",
        "Database Management Systems",
        "Software Engineering Principles",
      ],
    },
  ]

  return (
    <div className="min-h-screen pt-8 bg-gradient-to-r from-black/25 to-black/50 via-transparent relative overflow-hidden">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -top-20 -right-40 w-80 h-80 bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute -bottom-40 left-1/2 w-96 h-96 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>

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
      </div>

      <div className="relative z-10 px-4 py-20">
        <div className="max-w-[1600px] mx-auto">
          {/* Header Section */}
          <div
            className={`text-center mb-20 transform transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              }`}
          >


            <h2 className="text-5xl md:text-6xl font-bold mb-8 group relative">
              <span className="bg-gradient-to-r font from-white via-gray-100 to-gray-300 bg-clip-text text-transparent group-hover:from-blue-200 group-hover:via-purple-200 group-hover:to-cyan-200 transition-all duration-700 drop-shadow-2xl">
                Resume
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-cyan-500/20 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            </h2>

            <p className="text-xl font text-gray-300 max-w-3xl mx-auto leading-relaxed mb-10">
              Here's what I've accomplished so far in my journey as a frontend developer
            </p>

            {/* Download Button */}
            <div className="relative group inline-block">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 rounded-2xl blur-xl opacity-50 group-hover:opacity-100 transition-opacity duration-500"></div>

              <a
                href="/Tawhidul-Islam-Resume.pdf"
                download
                className="relative bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-cyan-600/20 backdrop-blur-2xl border border-white/20 text-white px-12 py-5 rounded-2xl font-bold text-xl hover:bg-gradient-to-r hover:from-blue-600/30 hover:via-purple-600/30 hover:to-cyan-600/30 hover:border-white/30 transform hover:-translate-y-3 hover:scale-105 transition-all duration-500 flex items-center justify-center gap-4 shadow-2xl"
              >
                <Download className="w-6 h-6 group-hover:animate-bounce" />
                <span>Download Resume</span>
                <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
              </a>
            </div>
          </div>

          {/* Main Content */}
          <div className="space-y-16">
            {/* Experience Section */}
            <div
              className={`transform transition-all duration-1000 delay-300 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                }`}
            >
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-cyan-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

                <div className="relative bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl p-10 shadow-2xl hover:bg-white/10 hover:border-white/20 transition-all duration-700">
                  {/* Section Header */}
                  <div className="flex items-center gap-5 mb-10">
                    <div className="relative">
                      <div className="w-14 h-14 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-xl border border-white/20 rounded-2xl flex items-center justify-center">
                        <Briefcase className="w-7 h-7 text-white" />
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl blur-lg opacity-30 group-hover:opacity-60 transition-opacity duration-500"></div>
                    </div>
                    <h3 className="text-3xl font-bold text-white">Professional Experience</h3>
                  </div>

                  {/* Experience Timeline */}
                  <div className="space-y-8">
                    {experiences.map((exp, index) => (
                      <div key={index} className="relative">
                        {/* Timeline line */}
                        <div className="absolute left-6 top-16 bottom-0 w-0.5 bg-gradient-to-b from-blue-500/50 to-purple-500/50"></div>

                        {/* Timeline dot */}
                        <div className="absolute left-4 top-6 w-5 h-5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full border-2 border-white/20 shadow-lg"></div>

                        <div className="ml-16 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-white/20 transition-all duration-500 group/exp">
                          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                            <div>
                              <h4 className="text-2xl font-bold text-white mb-2">{exp.title}</h4>
                              <div className="flex items-center gap-4 text-gray-300">
                                <span className="text-lg font-semibold text-blue-400">{exp.company}</span>
                                <div className="flex items-center gap-2">


                                </div>
                              </div>
                            </div>
                            <div className="flex items-center gap-2 text-gray-400 mt-2 md:mt-0">
                              <Calendar className="w-4 h-4" />
                              <span className="font-medium">{exp.period}</span>
                            </div>
                          </div>

                          <p className="text-gray-200 leading-relaxed mb-6">{exp.description}</p>

                          {/* Achievements */}
                          <div className="space-y-3">
                            <h5 className="text-lg font-semibold text-white mb-4">Key Achievements:</h5>
                            {exp.achievements.map((achievement, idx) => (
                              <div key={idx} className="flex items-center gap-3 group/item">
                                <CheckCircle className="w-5 h-5 text-green-400 group-hover/item:animate-pulse" />
                                <span className="text-gray-200 group-hover/item:text-white transition-colors duration-300">
                                  {achievement}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Education Section */}
            <div
              className={`transform transition-all duration-1000 delay-500 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                }`}
            >
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-cyan-500/20 to-blue-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

                <div className="relative bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl p-10 shadow-2xl hover:bg-white/10 hover:border-white/20 transition-all duration-700">
                  {/* Section Header */}
                  <div className="flex items-center gap-5 mb-10">
                    <div className="relative">
                      <div className="w-14 h-14 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 backdrop-blur-xl border border-white/20 rounded-2xl flex items-center justify-center">
                        <GraduationCap className="w-7 h-7 text-white" />
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-2xl blur-lg opacity-30 group-hover:opacity-60 transition-opacity duration-500"></div>
                    </div>
                    <h3 className="text-3xl font-bold text-white">Education</h3>
                  </div>

                  {/* Education Content */}
                  <div className="space-y-8">
                    {education.map((edu, index) => (
                      <div
                        key={index}
                        className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-white/20 transition-all duration-500"
                      >
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                          <div>
                            <h4 className="text-2xl font-bold text-white mb-2">{edu.degree}</h4>
                            <div className="flex items-center gap-4 text-gray-300">
                              <span className="text-lg font-semibold text-purple-400">{edu.institution}</span>
                              <div className="flex items-center gap-2">
                                <MapPin className="w-4 h-4" />
                                <span>{edu.location}</span>
                              </div>
                            </div>
                          </div>
                          <div className="flex items-center gap-2 text-gray-400 mt-2 md:mt-0">
                            <Calendar className="w-4 h-4" />
                            <span className="font-medium">{edu.period}</span>
                          </div>
                        </div>

                        <p className="text-gray-200 leading-relaxed mb-6">{edu.description}</p>

                        {/* Highlights */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          {edu.highlights.map((highlight, idx) => (
                            <div key={idx} className="flex items-center gap-3 group/item">
                              <Star className="w-4 h-4 text-yellow-400 group-hover/item:animate-pulse" />
                              <span className="text-gray-200 group-hover/item:text-white transition-colors duration-300">
                                {highlight}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Skills Section */}
            <div
              className={`transform transition-all duration-1000 delay-700 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                }`}
            >
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-purple-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

                <div className="relative bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl p-10 shadow-2xl hover:bg-white/10 hover:border-white/20 transition-all duration-700">
                  {/* Section Header */}
                  <div className="flex items-center gap-5 mb-10">
                    <div className="relative">
                      <div className="w-14 h-14 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 backdrop-blur-xl border border-white/20 rounded-2xl flex items-center justify-center">
                        <Code2 className="w-7 h-7 text-white" />
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl blur-lg opacity-30 group-hover:opacity-60 transition-opacity duration-500"></div>
                    </div>
                    <h3 className="text-3xl font-bold text-white">Technical Skills</h3>
                  </div>

                  {/* Skills Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {skills.map((skill, index) => (
                      <div key={skill.name} className="group/skill">
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center gap-3">
                            <span className="text-2xl">{skill.icon}</span>
                            <span
                              className={`font-semibold text-lg ${activeSkill === index ? "text-white" : "text-gray-200"} transition-colors duration-300`}
                            >
                              {skill.name}
                            </span>
                          </div>
                          <span
                            className={`text-sm font-medium px-3 py-1 rounded-full ${activeSkill === index ? "bg-white/20 text-white" : "bg-white/10 text-gray-300"
                              } transition-all duration-300`}
                          >
                            {skill.level}%
                          </span>
                        </div>
                        <div className="relative">
                          <div className="w-full bg-white/10 backdrop-blur-xl rounded-full h-3 overflow-hidden border border-white/20">
                            <div
                              className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 relative ${activeSkill === index ? "animate-pulse shadow-lg" : ""
                                }`}
                              style={{
                                width: `${skill.level}%`,
                                transform: activeSkill === index ? "scaleY(1.2)" : "scaleY(1)",
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
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Resume
