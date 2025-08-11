
import { Code2 } from "lucide-react"
import { useState } from "react"
import { NavLink, Link } from "react-router"


function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const navLinks = (
    <div className="flex flex-col lg:flex-row gap-3">
      {["/", "/about", "/projects", "/resume", "/contact"].map((path, index) => {
        const labels = ["Home", "About", "Projects", "Resume", "Contact"]
        return (
          <NavLink
            key={path}
            to={path}
            className={({ isActive }) =>
              `relative px-6 py-2 rounded-full font-medium transition-all duration-300 group ${isActive
                ? "bg-gradient-to-r from-red-500 to-purple-500 text-white shadow-lg shadow-blue-500/30"
                : "text-gray-400 hover:text-gray-900 hover:bg-gray-100/80"
              }`
            }
          >
            <span className="relative z-10">{labels[index]}</span>
          </NavLink>
        )
      })}
    </div>
  )

  return (
    <div className="fixed top-0 left-0 w-full z-50">
      <nav className="px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1600px] mx-auto">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to='/'>
              <div className="flex-shrink-0">
                <div className="flex items-center gap-4 my-4">
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
              </div>

            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center justify-center flex-1">
              <div className="relative">
                <div className="backdrop-blur-xl rounded-full px-3 py-3 border border-white/10">
                  {navLinks}
                </div>
              </div>
            </div>

            {/* CTA Button */}
           <div className="relative group inline-block">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 rounded-2xl blur-xl opacity-50 group-hover:opacity-100 transition-opacity duration-500"></div>

              <Link
               to='/contact'
                download
                className="relative bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-cyan-600/20 backdrop-blur-2xl border border-white/20 text-white px-10 py-4 rounded-2xl font-bold text-xl hover:bg-gradient-to-r hover:from-blue-600/30 hover:via-purple-600/30 hover:to-cyan-600/30 hover:border-white/30 transform hover:-translate-y-2 hover:scale-105 transition-all duration-500 flex items-center justify-center gap-4 shadow-2xl"
              >
                
                <span>Hire Me</span>
              
              </Link>
            </div>

            {/* Mobile button */}
            <div className="lg:hidden">
              <button
                onClick={toggleMobileMenu}
                className="text-white/80 hover:text-white p-3 rounded-xl hover:bg-white/10 transition-all duration-200 backdrop-blur-sm"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {isMobileMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Nav */}
        <div
          className={`lg:hidden transition-all duration-500 ease-in-out ${isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
            }`}
        >
          <div className="px-4 pt-4 pb-8 bg-slate-900/95 backdrop-blur-xl border-t border-white/10">
            <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-4 space-y-2 border border-white/20">
              {navLinks}
            </div>
            <div className="pt-6 space-y-4">



              <button className="w-full bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-cyan-600/20 backdrop-blur-2xl border border-white/20 text-white px-12 py-5 rounded-2xl font-bold text-xl hover:bg-gradient-to-r hover:from-blue-600/30 hover:via-purple-600/30 hover:to-cyan-600/30 hover:border-white/30 transform hover:-translate-y-3 hover:scale-105 transition-all duration-500 flex items-center justify-center gap-4 shadow-2xl">
                Hire Me
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>

              
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
