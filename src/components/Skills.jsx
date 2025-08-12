const Skills = () => {
  const skills = [
    {
      name: "HTML",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/html5-logo-EG9Yx6FBYiVXgSURarfio9AVxETBHL.png",
      bgColor: "from-orange-500 to-red-500",
      category: "Frontend",
    },
    {
      name: "CSS",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/css3-official-logo-blue-9QD3o1QCnvCyPMoX2FQw6Ibk3USDjC.png",
      bgColor: "from-blue-500 to-blue-600",
      category: "Frontend",
    },
    {
      name: "Tailwind CSS",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/tailwind-css-cyan-logo-cCt4sDJU2Z7jNU8ncedNryBafHXh5i.png",
      bgColor: "from-cyan-400 to-blue-500",
      category: "Frontend",
    },
    {
      name: "JavaScript",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/javascript-official-logo-eovYj1G6Anv2GEGeBR2u8HGhouprBk.png",
      bgColor: "from-yellow-400 to-orange-500",
      category: "Frontend",
    },
    {
      name: "React.js",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/react-blue-logo-HMSJ0LaOFCNQoCFqecmdwU7wzmEpMC.png",
      bgColor: "from-blue-400 to-cyan-500",
      category: "Frontend",
    },
    {
      name: "Next.js",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/nextjs-bw-logo-obuaWZ4ctsZsn3wtNwwzsbcEJx09vo.png",
      bgColor: "from-gray-700 to-gray-900",
      category: "Frontend",
    },
    {
      name: "Node.js",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/nodejs-green-logo-HZr6UFV65pCJ2cnqmXjJz164mRvJsR.png",
      bgColor: "from-green-500 to-green-600",
      category: "Backend",
    },
    {
      name: "Express",
      logo: "https://w7.pngwing.com/pngs/925/447/png-transparent-express-js-node-js-javascript-mongodb-node-js-text-trademark-logo-thumbnail.png",
      bgColor: "from-gray-600 to-gray-800",
      category: "Backend",
    },
    {
      name: "MongoDB",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/mongodb-green-logo-lnbnEge6TpOYk1P2wuJLnvNsqOhWGU.png",
      bgColor: "from-green-400 to-green-600",
      category: "Backend",
    },
  ]

  return (
    <section className="py-16 px-4  min-h-screen">
      <div className="max-w-[1600px] mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-6">Technical Skills</h2>
          <p className="text-gray-300 text-xl max-w-3xl mx-auto leading-relaxed">
            Crafting modern web experiences with cutting-edge technologies and professional expertise
          </p>
        </div>

        {/* Skills Grid */}
      <div className="max-w-[1600px] mx-auto grid md:grid-cols-3 w-full gap-8">
  {skills.map((skill, index) => (
    <div key={index} className="relative group">
      <div
        className={`absolute inset-0 bg-gradient-to-r ${skill.bgColor} rounded-3xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-700`}
      ></div>

      <div className="relative bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl p-10 hover:bg-white/10 hover:border-white/20 transition-all duration-700 group hover:scale-105">
        
        {/* Skill Icon */}
        <div className="relative mb-8">
          <div
            className={`w-16 h-16 bg-gradient-to-r ${skill.bgColor} backdrop-blur-xl border border-white/20 rounded-2xl flex items-center justify-center mb-4`}
          >
            <img
              src={skill.logo || "/placeholder.svg"}
              alt={`${skill.name} logo`}
              className="w-8 h-8 object-contain"
            />
          </div>
          <div
            className={`absolute inset-0 bg-gradient-to-r ${skill.bgColor} rounded-2xl blur-lg opacity-30 group-hover:opacity-60 transition-opacity duration-500`}
          ></div>
        </div>

        {/* Skill Content */}
        <h3 className="text-2xl font-bold text-white mb-4">{skill.name}</h3>
        <p className="text-gray-300 leading-relaxed mb-8">
          {skill.category === "Frontend"
            ? "Building responsive and interactive user interfaces with modern design principles"
            : "Developing robust server-side applications and database management solutions"}
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
