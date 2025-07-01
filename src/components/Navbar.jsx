import { useState } from "react"
import { NavLink } from "react-router"

function NavbarOrange() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const navLinks = (
    <div className="flex flex-col lg:flex-row gap-1 lg:gap-8">
      <NavLink
        to="/"
        className={({ isActive }) =>
          `px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
            isActive ? "bg-white/20 text-white shadow-lg" : "text-orange-100 hover:text-white hover:bg-white/10"
          }`
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/about"
        className={({ isActive }) =>
          `px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
            isActive ? "bg-white/20 text-white shadow-lg" : "text-orange-100 hover:text-white hover:bg-white/10"
          }`
        }
      >
        About
      </NavLink>
      <NavLink
        to="/projects"
        className={({ isActive }) =>
          `px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
            isActive ? "bg-white/20 text-white shadow-lg" : "text-orange-100 hover:text-white hover:bg-white/10"
          }`
        }
      >
        Projects
      </NavLink>
      <NavLink
        to="/resume"
        className={({ isActive }) =>
          `px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
            isActive ? "bg-white/20 text-white shadow-lg" : "text-orange-100 hover:text-white hover:bg-white/10"
          }`
        }
      >
        Resume
      </NavLink>
      <NavLink
        to="/contact"
        className={({ isActive }) =>
          `px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
            isActive ? "bg-white/20 text-white shadow-lg" : "text-orange-100 hover:text-white hover:bg-white/10"
          }`
        }
      >
        Contact
      </NavLink>
    </div>
  )

  return (
    <div>
      <nav className="bg-gradient-to-r from-purple-800 via-pink-500 to-orange-500 shadow-2xl relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo/Brand */}
            <div className="flex-shrink-0">
              <a className="text-2xl font-bold text-white hover:text-orange-200 transition-colors duration-200 cursor-pointer">
                Tuhin-Dev
              </a>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center justify-center flex-1">{navLinks}</div>

            {/* CTA Button */}
            <div className="hidden lg:flex">
              <button className="bg-white text-orange-700 px-6 py-2 rounded-lg font-semibold hover:bg-orange-50 hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200">
                Get In Touch
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <button
                onClick={toggleMobileMenu}
                className="text-orange-200 hover:text-white p-2 rounded-lg hover:bg-white/10 transition-all duration-200"
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

        {/* Mobile Navigation Menu */}
        <div
          className={`lg:hidden transition-all duration-300 ease-in-out ${
            isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
          }`}
        >
          <div className="px-4 pt-2 pb-6 space-y-2 bg-orange-700/50 backdrop-blur-sm">
            {navLinks}

            {/* Mobile CTA Button */}
            <div className="pt-4">
              <button className="w-full bg-white text-orange-700 px-6 py-3 rounded-lg font-semibold hover:bg-orange-50 transition-colors duration-200">
                Get In Touch
              </button>
            </div>
          </div>
        </div>

        {/* Decorative gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 via-transparent to-red-600/20 pointer-events-none"></div>
      </nav>
    </div>
  )
}

export default NavbarOrange
