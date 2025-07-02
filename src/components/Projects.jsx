
import { Github, ExternalLink } from "lucide-react"

const projects = [
  {
    name: "Globallern - Language Tutor Booking",
    description: "A language tutoring platform with JWT auth, tutor booking, and review system.",
    image: "https://i.ibb.co/xSf2T4f8/Screenshot-48.png",
    tech: ["React", "Node.js", "MongoDB", "JWT", "Tailwind"],
    live: "https://globallearn-4c354.web.app/",
    github: "https://github.com/yourname/globallern",
  },
  {
    name: "ParcelPro - Parcel Delivery",
    description: "Track parcels, manage delivery regions, and view booking status dynamically.",
    image: "https://i.ibb.co/G49vTSrY/Screenshot-50.png",
    tech: ["React", "Express", "MongoDB", "ShadCN UI"],
    live: "https://jade-lokum-8eff88.netlify.app/",
    github: "https://github.com/yourname/parcelpro",
  },
  // Add more projects here...
]

const Projects = () => {
  return (
    <section id="projects" className="py-16 px-4 bg-gradient-to-b from-[#030712] via-[#0f172a] to-[#030712] text-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-4 text-center">Projects</h2>
        <p className="text-center text-gray-400 mb-12">Some of my featured works and applications</p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl overflow-hidden hover:shadow-xl hover:scale-[1.02] transition-transform duration-300"
            >
              <img src={project.image} alt={project.name} className="w-full h-48 object-cover" />
              <div className="p-5">
                <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
                <p className="text-gray-300 text-sm mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="bg-white/10 px-3 py-1 text-xs rounded-full text-white">{tech}</span>
                  ))}
                </div>

                <div className="flex justify-between items-center text-sm">
                  <a href={project.github} target="_blank" className="flex items-center gap-1 text-gray-300 hover:text-white">
                    <Github size={16} /> GitHub
                  </a>
                  <a href={project.live} target="_blank" className="flex items-center gap-1 text-blue-400 hover:underline">
                    <ExternalLink size={16} /> Live Site
                  </a>
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
