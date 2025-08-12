"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger)

const Skills = () => {
  const sectionRef = useRef(null)
  const headerRef = useRef(null)
  const skillsRef = useRef([])

const skills = [
  {
    name: "HTML",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/html5-logo-EG9Yx6FBYiVXgSURarfio9AVxETBHL.png",
    bgColor: "from-orange-500 to-red-500",
    category: "Frontend",
    description: "Markup language for structuring web content",
  },
  {
    name: "CSS",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/css3-official-logo-blue-9QD3o1QCnvCyPMoX2FQw6Ibk3USDjC.png",
    bgColor: "from-blue-500 to-blue-600",
    category: "Frontend",
    description: "Styling language to design beautiful web pages",
  },
  {
    name: "Tailwind CSS",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/tailwind-css-cyan-logo-cCt4sDJU2Z7jNU8ncedNryBafHXh5i.png",
    bgColor: "from-cyan-400 to-blue-500",
    category: "Frontend",
    description: "Utility-first CSS framework for rapid UI development",
  },
  {
    name: "JavaScript",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/javascript-official-logo-eovYj1G6Anv2GEGeBR2u8HGhouprBk.png",
    bgColor: "from-yellow-400 to-orange-500",
    category: "Frontend",
    description: "Programming language for dynamic and interactive web",
  },
  {
    name: "React.js",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/react-blue-logo-HMSJ0LaOFCNQoCFqecmdwU7wzmEpMC.png",
    bgColor: "from-blue-400 to-cyan-500",
    category: "Frontend",
    description: "Library for building user interfaces with components",
  },
  {
    name: "Next.js",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/nextjs-bw-logo-obuaWZ4ctsZsn3wtNwwzsbcEJx09vo.png",
    bgColor: "from-gray-700 to-gray-900",
    category: "Frontend",
    description: "React framework for server-side rendering and routing",
  },
  {
    name: "Node.js",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/nodejs-green-logo-HZr6UFV65pCJ2cnqmXjJz164mRvJsR.png",
    bgColor: "from-green-500 to-green-600",
    category: "Backend",
    description: "JavaScript runtime to build scalable backend servers",
  },
  {
    name: "Express",
    logo: "https://w7.pngwing.com/pngs/925/447/png-transparent-express-js-node-js-javascript-mongodb-node-js-text-trademark-logo-thumbnail.png",
    bgColor: "from-gray-600 to-gray-800",
    category: "Backend",
    description: "Minimal web framework for Node.js to build APIs",
  },
  {
    name: "MongoDB",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/mongodb-green-logo-lnbnEge6TpOYk1P2wuJLnvNsqOhWGU.png",
    bgColor: "from-green-400 to-green-600",
    category: "Backend",
    description: "NoSQL database for flexible and scalable data storage",
  },
]


  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header animation from left
      gsap.fromTo(
        headerRef.current,
        {
          x: -100,
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: headerRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        },
      )

      // Skills cards animation from right with stagger
      gsap.fromTo(
        skillsRef.current,
        {
          x: 100,
          opacity: 0,
          scale: 0.8,
        },
        {
          x: 0,
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: "power3.out",
          stagger: 0.1,
          scrollTrigger: {
            trigger: ".skills-grid",
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        },
      )

      // Floating animation for skill icons
      skillsRef.current.forEach((skill, index) => {
        if (skill) {
          const icon = skill.querySelector(".skill-icon")
          if (icon) {
            gsap.to(icon, {
              y: -10,
              duration: 2 + index * 0.1,
              ease: "power2.inOut",
              yoyo: true,
              repeat: -1,
            })
          }
        }
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="py-16 px-4  min-h-screen relative overflow-hidden">
      <div className="absolute inset-0">
       

        {/* Floating particles */}
        {[...Array(15)].map((_, i) => (
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

      <div className="relative z-10">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-6">Technical Skills</h2>
          <p className="text-gray-300 text-xl max-w-3xl mx-auto leading-relaxed">
            Crafting modern web experiences with cutting-edge technologies and professional expertise
          </p>
        </div>

        {/* Skills Grid */}
        <div className="skills-grid grid md:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div key={index} ref={(el) => (skillsRef.current[index] = el)} className="relative group">
              <div
                className={`absolute inset-0 bg-gradient-to-r ${skill.bgColor} rounded-3xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-700`}
              ></div>

              <div className="relative bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl p-10 hover:bg-white/10 hover:border-white/20 transition-all duration-700 group hover:scale-105">
                {/* Skill Icon */}
                <div className="relative mb-8">
                  <div
                    className={`skill-icon w-16 h-16 bg-gradient-to-r ${skill.bgColor} backdrop-blur-xl border border-white/20 rounded-2xl flex items-center justify-center mb-4 relative`}
                  >
                    <img
                      src={skill.logo || "/placeholder.svg"}
                      alt={`${skill.name} logo`}
                      className="w-8 h-8 object-contain relative z-10"
                    />
                    <div className="absolute inset-0 rounded-2xl border-2 border-transparent bg-gradient-to-r from-white/20 via-transparent to-white/20 animate-spin opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${skill.bgColor} rounded-2xl blur-lg opacity-30 group-hover:opacity-60 transition-opacity duration-500`}
                  ></div>
                </div>

                {/* Skill Content */}
                <h3 className="text-2xl font-bold text-white font mb-4">{skill.name}</h3>
                <p className="text-gray-300 leading-relaxed mb-8">
                {skill.description}
                </p>

                {/* Skill Level */}
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-4 h-4 rounded-full bg-green-400 animate-pulse"></div>
                    <span className="text-gray-300 text-sm">Professional Level</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-4 h-4 rounded-full bg-blue-400"></div>
                    <span className="text-gray-300 text-sm">{skill.category} Technology</span>
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

export default Skills
