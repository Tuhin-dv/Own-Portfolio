"use client"

import { useState, useEffect } from "react"
import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react"

function Hero() {
  const [isVisible, setIsVisible] = useState(false)
  const [currentGlow, setCurrentGlow] = useState(0)
  const [displayText, setDisplayText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [showCursor, setShowCursor] = useState(true)

  const titles = ["Frontend Developer", "React Specialist", "UI/UX Designer", "Web Developer", "JavaScript Expert"]

  useEffect(() => {
    setIsVisible(true)
    const glowInterval = setInterval(() => {
      setCurrentGlow((prev) => (prev + 1) % 3)
    }, 2000)

    return () => clearInterval(glowInterval)
  }, [])

  useEffect(() => {
    const currentTitle = titles[currentIndex]
    let timeout

    if (!isDeleting && displayText === currentTitle) {
      // Pause at the end of typing
      timeout = setTimeout(() => setIsDeleting(true), 2000)
    } else if (isDeleting && displayText === "") {
      // Move to next title
      setIsDeleting(false)
      setCurrentIndex((prev) => (prev + 1) % titles.length)
    } else {
      // Typing or deleting
      const speed = isDeleting ? 50 : 100
      timeout = setTimeout(() => {
        setDisplayText((prev) => {
          if (isDeleting) {
            return currentTitle.substring(0, prev.length - 1)
          } else {
            return currentTitle.substring(0, prev.length + 1)
          }
        })
      }, speed)
    }

    return () => clearTimeout(timeout)
  }, [displayText, isDeleting, currentIndex, titles])

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev)
    }, 500)

    return () => clearInterval(cursorInterval)
  }, [])

  const glowColors = [
    "from-blue-500/20 via-purple-500/20 to-cyan-500/20",
    "from-purple-500/20 via-pink-500/20 to-blue-500/20",
    "from-cyan-500/20 via-blue-500/20 to-purple-500/20",
  ]

  return (
    <div className="relative min-h-screen text-gray-100 flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Video Layer */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-[-2] brightness-50"
      >
        <source src="/public/bg-video.mp4.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Animated mesh gradient overlay */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${glowColors[currentGlow]} transition-all duration-2000 opacity-30 z-[-1]`}
      ></div>

      {/* Particle effects and glowing orbs */}
      <div className="absolute inset-0 z-[-1]">
        <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -top-20 -right-40 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute -bottom-40 left-1/2 w-[550px] h-[550px] bg-cyan-500/5 rounded-full blur-3xl animate-pulse delay-2000"></div>
        <div className="absolute top-1/4 left-1/4 w-48 h-48 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-2xl animate-pulse delay-500"></div>
        <div className="absolute bottom-1/4 right-1/4 w-56 h-56 bg-gradient-to-r from-purple-400/10 to-pink-400/10 rounded-full blur-2xl animate-pulse delay-1500"></div>
        <div className="absolute top-1/2 right-1/3 w-40 h-40 bg-gradient-to-r from-cyan-400/10 to-blue-400/10 rounded-full blur-2xl animate-pulse delay-800"></div>

        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-1 h-1 bg-blue-400 rounded-full animate-ping`}
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
            }}
          />
        ))}

        {[...Array(10)].map((_, i) => (
          <div
            key={`purple-${i}`}
            className={`absolute w-1.5 h-1.5 bg-purple-400 rounded-full animate-ping`}
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${1.5 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto text-center relative z-10">
        <div
          className={`transform transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          }`}
        >
          <div className="relative inline-block mb-10 group">
            {/* Glowing rings */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 rounded-full blur-2xl opacity-60 group-hover:opacity-100 transition-opacity duration-500 animate-pulse scale-150"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-pink-500 to-blue-500 rounded-full blur-xl opacity-40 group-hover:opacity-80 transition-opacity duration-500 animate-pulse delay-500 scale-125"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 rounded-full blur-lg opacity-30 group-hover:opacity-60 transition-opacity duration-500 animate-pulse delay-1000 scale-110"></div>
          </div>

          {/* Name */}
          <h1 className="text-6xl md:text-8xl font-bold my-8 group relative">
            <span className="text-[50px]  block mb-4">Hi, I am</span>
            <span className="bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent hover:from-blue-300 hover:via-purple-300 hover:to-cyan-300 transition-all duration-500 drop-shadow-2xl">
              Tuhin Ahmed
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-cyan-500/20 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </h1>

          {/* Animated Title with Typing Effect */}
          <div className="relative mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                <span className="inline-block overflow-hidden whitespace-nowrap border-r-4 pr-2 animate-typing animation-blink border-white">
                  Frontend Developer
                </span>
              </span>
            </h2>

           
           
          </div>

          {/* Bio */}
          <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-16 leading-relaxed hover:text-gray-100 transition-colors duration-300">
            I create{" "}
            <span className="text-blue-400 font-bold bg-blue-400/10 px-2 py-1 rounded">modern web applications</span>{" "}
            with clean code and beautiful designs. Passionate about solving problems and building{" "}
            <span className="text-purple-400 font-bold bg-purple-400/10 px-2 py-1 rounded">
              products that users love
            </span>
            .
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-8 justify-center mb-20">
            <button className="group relative bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 text-white px-12 py-5 rounded-2xl font-bold text-xl hover:from-blue-500 hover:via-purple-500 hover:to-cyan-500 transform hover:-translate-y-3 hover:scale-110 transition-all duration-500 flex items-center justify-center gap-4 shadow-2xl hover:shadow-blue-500/50">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 rounded-2xl blur-xl opacity-50 group-hover:opacity-100 transition-opacity duration-500"></div>
              <Mail className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300 relative z-10" />
              <span className="relative z-10">Let's Work Together</span>
              <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300 relative z-10" />
            </button>

            <button className="group bg-slate-800/80 backdrop-blur-lg border-2 border-slate-600/50 text-gray-100 px-12 py-5 rounded-2xl font-bold text-xl hover:bg-slate-700/80 hover:border-slate-500/80 transition-all duration-500 flex items-center justify-center gap-4 shadow-2xl hover:shadow-slate-500/25 hover:scale-105 hover:-translate-y-2">
              <Download className="w-6 h-6 group-hover:translate-y-1 transition-transform duration-300" />
              <span>Download CV</span>
            </button>
          </div>

          {/* Social Icons */}
          <div className="flex justify-center gap-8">
            {[
              { Icon: Github, color: "hover:bg-gray-600 hover:border-gray-400" },
              { Icon: Linkedin, color: "hover:bg-blue-600 hover:border-blue-400" },
              { Icon: Mail, color: "hover:bg-purple-600 hover:border-purple-400" },
            ].map(({ Icon, color }, idx) => (
              <a
                key={idx}
                href="#"
                className={`w-16 h-16 bg-slate-800/80 backdrop-blur-lg border-2 border-slate-600/50 rounded-2xl flex items-center justify-center text-gray-300 hover:text-white ${color} transition-all duration-500 hover:scale-125 hover:-translate-y-3 shadow-2xl group`}
              >
                <Icon className="w-7 h-7 group-hover:rotate-12 transition-transform duration-300" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
