import { useState, useEffect } from "react"
import {
  Send,
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Facebook,
  SendIcon
} from "lucide-react"
import Swal from "sweetalert2"

function Contact() {
  const [status, setStatus] = useState("")
  const [loading, setLoading] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setStatus("")

    const formData = new FormData(e.target)

    try {
      const response = await fetch("https://formspree.io/f/mdkzbvwy", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      })

      if (response.ok) {
        Swal.fire({
          icon: "success",
          title: "Thank you!",
          text: "🎉 Thanks for your message! I'll get back to you soon.",
          timer: 3000,
          timerProgressBar: true,
          showConfirmButton: false,
          background: "#1e293b",
          color: "#ffffff",
          customClass: {
            popup: "backdrop-blur-xl border border-white/20",
          },
        })
        e.target.reset()
      } else {
        const data = await response.json()
        let errorMsg = "Oops! Something went wrong."
        if (data.errors) {
          errorMsg = data.errors.map((error) => error.message).join(", ")
        }
        Swal.fire({
          icon: "error",
          title: "Error",
          text: errorMsg,
          showConfirmButton: true,
          background: "#1e293b",
          color: "#ffffff",
          customClass: {
            popup: "backdrop-blur-xl border border-white/20",
          },
        })
      }
    } catch (error) {
      setStatus("Oops! Network error. Please try again later.")
    } finally {
      setLoading(false)
    }
  }

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "tawhidul.dev@gmail.com",
      href: "mailto:tawhidul.dev@gmail.com",
      color: "text-blue-400",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+880 01762923526",
      href: "tel:+88001762923526",
      color: "text-green-400",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Sirajganj, Belkuchi",
      href: "#",
      color: "text-purple-400",
    },
  ]

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/Tuhin-dv",
      color: "hover:bg-gray-600 hover:border-gray-400",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/tawhidul-islam-dev/",
      color: "hover:bg-blue-600 hover:border-blue-400",
    },
    {
      icon: Facebook,
      label: "Facebook",
      href: "https://www.facebook.com/Tawhidul.dev",
      color: "hover:bg-cyan-600 hover:border-cyan-400",
    },
  ]

  return (
    <div className="min-h-screen pt-8 bg-gradient-to-r from-black/25 to-black/50 via-transparent relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute -top-40 -left-40 w-72 md:w-96 h-72 md:h-96 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -top-20 -right-40 w-64 md:w-80 h-64 md:h-80 bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute -bottom-40 left-1/2 w-72 md:w-96 h-72 md:h-96 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>

        {/* Floating particles */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full animate-ping"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 px-4 py-12 sm:py-20">
        <div className="max-w-[1600px] mx-auto">
          {/* Header */}
          <div
            className={`text-center mb-12 sm:mb-20 transform transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              }`}
          >
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold mb-6 sm:mb-8 group relative">
              <span className="bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent group-hover:from-blue-200 group-hover:via-purple-200 group-hover:to-cyan-200 transition-all duration-700 drop-shadow-2xl">
                Contact Me
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-cyan-500/20 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Ready to bring your ideas to life? Let's discuss your next project and create something amazing together.
            </p>
          </div>

          {/* Main Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-16 items-start">
            {/* Form */}
            <div
              className={`transform transition-all duration-1000 delay-300 ${isVisible ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"
                }`}
            >
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-cyan-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                <div className="relative bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl p-6 sm:p-8 md:p-10 shadow-2xl hover:bg-white/10 hover:border-white/20 transition-all duration-700">
                  <div className="flex items-center gap-4 sm:gap-5 mb-8 md:mb-10">
                    <div className="relative">
                      <div className="w-12 sm:w-14 h-12 sm:h-14 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-xl border border-white/20 rounded-2xl flex items-center justify-center">
                        <Send className="w-6 sm:w-7 h-6 sm:h-7 text-white" />
                      </div>
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-white">Send Message</h3>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="group/field">
                        <label className="block mb-2 sm:mb-3 text-sm text-gray-300 font-semibold">
                          Your Name *
                        </label>
                        <input
                          name="name"
                          type="text"
                          required
                          placeholder="Your Name"
                          className="w-full px-4 py-3 sm:px-5 sm:py-4 rounded-xl bg-white/5 text-white border border-white/20 focus:ring-2 focus:ring-blue-500/50"
                        />
                      </div>
                      <div className="group/field">
                        <label className="block mb-2 sm:mb-3 text-sm text-gray-300 font-semibold">
                          Your Email *
                        </label>
                        <input
                          name="email"
                          type="email"
                          required
                          placeholder="Your Email"
                          className="w-full px-4 py-3 sm:px-5 sm:py-4 rounded-xl bg-white/5 text-white border border-white/20 focus:ring-2 focus:ring-blue-500/50"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block mb-2 sm:mb-3 text-sm text-gray-300 font-semibold">
                        Subject
                      </label>
                      <input
                        name="subject"
                        type="text"
                        placeholder="Project Discussion"
                        className="w-full px-4 py-3 sm:px-5 sm:py-4 rounded-xl bg-white/5 text-white border border-white/20 focus:ring-2 focus:ring-blue-500/50"
                      />
                    </div>

                    <div>
                      <label className="block mb-2 sm:mb-3 text-sm text-gray-300 font-semibold">
                        Message *
                      </label>
                      <textarea
                        name="message"
                        rows={5}
                        required
                        placeholder="Tell me about your project..."
                        className="w-full px-4 py-3 sm:px-5 sm:py-4 rounded-xl bg-white/5 text-white border border-white/20 focus:ring-2 focus:ring-blue-500/50 resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full py-3 sm:py-4 rounded-2xl font-bold text-lg sm:text-xl bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-cyan-600/20 text-white border border-white/20 hover:scale-105 transition-all duration-300"
                    >
                      {loading ? "Sending..." : (
                        <div className="flex items-center justify-center gap-3">
                          <SendIcon />
                          <span>Send Message</span>
                        </div>
                      )}
                    </button>
                  </form>
                  {status && (
                    <div className="mt-6 p-4 bg-red-500/20 border border-red-500/30 rounded-xl text-center text-red-300">
                      {status}
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Contact Info */}
            <div
              className={`transform transition-all duration-1000 delay-500 ${isVisible ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"
                }`}
            >
              <div className="relative group mb-8">
                <div className="relative bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl p-6 sm:p-8 md:p-10 shadow-2xl">
                  <div className="flex items-center gap-4 sm:gap-5 mb-8">
                    <div className="w-12 sm:w-14 h-12 sm:h-14 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 flex items-center justify-center rounded-2xl">
                      <Mail className="w-6 sm:w-7 h-6 sm:h-7 text-white" />
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-white">Get In Touch</h3>
                  </div>
                  <div className="space-y-6">
                    {contactInfo.map((info, index) => (
                      <a
                        key={index}
                        href={info.href}
                        className="flex items-center gap-4 p-4 bg-white/5 rounded-2xl hover:bg-white/10 transition-all"
                      >
                        <div className="w-12 h-12 bg-white/10 flex items-center justify-center rounded-xl">
                          <info.icon className={`w-6 h-6 ${info.color}`} />
                        </div>
                        <div>
                          <div className="text-sm text-gray-400">{info.label}</div>
                          <div className="text-lg text-white">{info.value}</div>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="relative group">
                <div className="relative bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl p-6 sm:p-8 md:p-10 shadow-2xl">
                  <h4 className="text-xl sm:text-2xl font-bold text-white mb-6 text-center">
                    Follow Me
                  </h4>
                  <div className="flex justify-center gap-4 sm:gap-6 flex-wrap">
                    {socialLinks.map((social, index) => (
                      <a
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`w-14 h-14 sm:w-16 sm:h-16 bg-white/5 border border-white/20 flex items-center justify-center text-gray-300 rounded-2xl ${social.color} hover:scale-110 transition-all`}
                      >
                        <social.icon className="w-6 sm:w-7 h-6 sm:h-7" />
                      </a>
                    ))}
                  </div>
                  <p className="mt-6 text-gray-300 text-sm sm:text-base text-center">
                    I'm always excited to connect with fellow developers and potential clients. Let's build something amazing!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
