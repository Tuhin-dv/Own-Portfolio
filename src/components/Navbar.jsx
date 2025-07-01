"use client"

import { useState } from "react"
import { NavLink } from "react-router"

function NavbarUltraModern() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const navLinks = (
    <div className="flex flex-col lg:flex-row gap-0.5">
      <NavLink
        to="/"
        className={({ isActive }) =>
          `relative px-6 py-3 rounded-full font-medium transition-all duration-300 group ${
            isActive
              ? "bg-gradient-to-r from-red-500 to-purple-500 text-white shadow-lg shadow-blue-500/30"
              : "text-gray-400 hover:text-gray-900 hover:bg-gray-100/80"
          }`
        }
      >
        <span className="relative z-10">Home</span>
        {({ isActive }) =>
          !isActive && (
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/0 via-blue-600/5 to-indigo-600/0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          )
        }
      </NavLink>
      <NavLink
        to="/about"
        className={({ isActive }) =>
          `relative px-6 py-3 rounded-full font-medium transition-all duration-300 group ${
            isActive
              ? "bg-gradient-to-r from-red-500 to-purple-500 text-white shadow-lg shadow-blue-500/30"
              : "text-gray-400 hover:text-gray-900 hover:bg-gray-100/80"
          }`
        }
      >
        <span className="relative z-10">About</span>
      </NavLink>
      <NavLink
        to="/projects"
        className={({ isActive }) =>
          `relative px-6 py-3 rounded-full font-medium transition-all duration-300 group ${
            isActive
              ? "bg-gradient-to-r from-red-500 to-purple-500 text-white shadow-lg shadow-blue-500/30"
              : "text-gray-400 hover:text-gray-900 hover:bg-gray-100/80"
          }`
        }
      >
        <span className="relative z-10">Projects</span>
      </NavLink>
      <NavLink
        to="/resume"
        className={({ isActive }) =>
          `relative px-6 py-3 rounded-full font-medium transition-all duration-300 group ${
            isActive
              ? "bg-gradient-to-r from-red-500 to-purple-500 text-white shadow-lg shadow-blue-500/30"
              : "text-gray-400 hover:text-gray-900 hover:bg-gray-100/80"
          }`
        }
      >
        <span className="relative z-10">Resume</span>
      </NavLink>
      <NavLink
        to="/contact"
        className={({ isActive }) =>
          `relative px-6 py-3 rounded-full font-medium transition-all duration-300 group ${
            isActive
              ? "bg-gradient-to-r from-red-500 to-purple-500 text-white shadow-lg shadow-blue-500/30"
              : "text-gray-400 hover:text-gray-900 hover:bg-gray-100/80"
          }`
        }
      >
        <span className="relative z-10">Contact</span>
      </NavLink>
    </div>
  )

  return (
    <div className="pt-2">
      <nav className=" shadow-2xl relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo/Brand */}
            <div className="flex-shrink-0">
              <a className="text-2xl font-bold text-white hover:text-blue-400 transition-colors duration-200 cursor-pointer flex items-center gap-3">
                <div className="relative">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg">
                    <span className="text-white font-bold">T</span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-600 rounded-xl blur-lg opacity-50 -z-10"></div>
                </div>
                <span className="bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">Tuhin-Dev</span>
              </a>
            </div>

            {/* Desktop Navigation - Glass Pill Container */}
            <div className="hidden lg:flex items-center justify-center flex-1">
              <div className="relative">
                <div className="bg-white/10 backdrop-blur-xl rounded-full px-3 py-3 shadow-2xl border border-white/20 ring-1 ring-white/10">
                  {navLinks}
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-indigo-500/10 rounded-full blur-xl -z-10"></div>
              </div>
            </div>

            {/* Right Side Actions */}
            <div className="hidden lg:flex items-center gap-6">
            
              {/* CTA Button */}
              <button className="relative group bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-700 text-white px-8 py-3 rounded-full font-semibold hover:from-blue-700 hover:via-blue-800 hover:to-indigo-800 transform hover:-translate-y-1 transition-all duration-300 flex items-center gap-2 shadow-xl hover:shadow-2xl hover:shadow-blue-500/25">
                <span>Hire Me</span>
                <svg
                  className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-700 rounded-full blur-lg opacity-50 -z-10 group-hover:opacity-75 transition-opacity duration-300"></div>
              </button>
            </div>

            {/* Mobile menu button */}
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

        {/* Mobile Navigation Menu */}
        <div
          className={`lg:hidden transition-all duration-500 ease-in-out ${
            isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
          }`}
        >
          <div className="px-4 pt-4 pb-8 bg-slate-900/95 backdrop-blur-xl border-t border-white/10">
            <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-4 space-y-2 border border-white/20">
              {navLinks}
            </div>

            {/* Mobile Actions */}
            <div className="pt-6 space-y-4">
             

              <button className="w-full bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 flex items-center justify-center gap-2 shadow-xl">
                Hire Me
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl animate-pulse"></div>
          <div
            className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>
          <div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-500/3 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "2s" }}
          ></div>
        </div>
      </nav>
    </div>
  )
}

export default NavbarUltraModern
