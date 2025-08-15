import { Code2 } from "lucide-react";
import { useState } from "react";
import { NavLink, Link } from "react-router-dom";

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const navLinks = (
    <div className="flex flex-col md:flex-row gap-3 text-center md:text-left">
      {["/", "/about", "/projects", "/resume", "/contact"].map((path, index) => {
        const labels = ["Home", "About", "Projects", "Resume", "Contact"];
        return (
          <NavLink
            key={path}
            to={path}
            className={({ isActive }) =>
              `relative px-6 py-2 rounded-full font-medium transition-all duration-300 group ${
                isActive
                  ? "bg-gradient-to-r from-red-500 to-purple-500 text-white shadow-lg shadow-blue-500/30"
                  : "text-gray-400 hover:text-gray-900 hover:bg-gray-100/80"
              }`
            }
          >
            <span className="relative z-10">{labels[index]}</span>
          </NavLink>
        );
      })}
    </div>
  );

  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-slate-900/80 backdrop-blur-lg border-b border-white/10">
      <nav className="px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1600px] mx-auto flex items-center justify-between h-20">
          
          {/* Logo + Name */}
          <Link to="/" className="flex items-center gap-4">
            <div className="relative">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-cyan-500/20 backdrop-blur-xl border border-white/20 rounded-2xl flex items-center justify-center">
                <Code2 className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 rounded-2xl blur-lg opacity-30"></div>
            </div>
            <div className="hidden xs:block text-left">
              <h3 className="text-lg sm:text-2xl font-bold text-white">Tawhidul Islam</h3>
              <p className="text-gray-400 text-xs sm:text-sm">Frontend Developer</p>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center justify-center flex-1">
            <div className="backdrop-blur-xl rounded-full px-3 py-3 border border-white/10">
              {navLinks}
            </div>
          </div>

          {/* Right Side Buttons */}
          <div className="flex items-center gap-4">
            {/* CTA Button (hidden on mobile) */}
            <div className="relative group hidden sm:inline-block">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 rounded-2xl blur-xl opacity-50 group-hover:opacity-100 transition-opacity duration-500"></div>
              <Link
                to="/contact"
                className="relative bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-cyan-600/20 backdrop-blur-2xl border border-white/20 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-2xl font-bold hover:scale-105 transition-all duration-500"
              >
                Hire Me
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className="lg:hidden text-white/80 hover:text-white p-3 rounded-xl hover:bg-white/10 transition-all duration-200"
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

        {/* Mobile Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-[max-height,opacity] duration-500 ease-in-out ${
            isMobileMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="px-4 pt-4 pb-6 space-y-4 bg-gradient-to-b from-slate-900/95 to-slate-800/90 backdrop-blur-xl border-t border-white/10">
            {navLinks}
            {/* Mobile CTA */}
            <Link
              to="/contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block w-full text-center bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-cyan-600/20 backdrop-blur-2xl border border-white/20 text-white px-6 py-3 rounded-2xl font-bold hover:scale-105 transition-all duration-500"
            >
              Hire Me
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
