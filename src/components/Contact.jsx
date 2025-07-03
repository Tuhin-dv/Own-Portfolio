
import { useState, useEffect } from "react"
import { Send, Mail, Phone, MapPin, Github, Linkedin, Twitter, Star, Sparkles, Facebook, SendIcon } from "lucide-react"
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
      value: "tuhin@example.com",
      href: "mailto:tuhin@example.com",
      color: "text-blue-400",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+880 123 456 789",
      href: "tel:+880123456789",
      color: "text-green-400",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Dhaka, Bangladesh",
      href: "#",
      color: "text-purple-400",
    },
  ]

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/Tuhin-dv?tab=repositories",
      color: "hover:bg-gray-600 hover:border-gray-400",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://linkedin.com/in/tuhin",
      color: "hover:bg-blue-600 hover:border-blue-400",
    },
    {
      icon: Facebook,
      label: "Facebook",
      href: "https://www.facebook.com/Tawhidul.NOT.Axid",
      color: "hover:bg-cyan-600 hover:border-cyan-400",
    },
  ]

  return (
    <div className="min-h-screen pt-8 bg-black relative overflow-hidden">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -top-20 -right-40 w-80 h-80 bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute -bottom-40 left-1/2 w-96 h-96 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>

        {/* Floating particles */}
        {[...Array(25)].map((_, i) => (
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

      <div className="relative z-10 px-4 py-20">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div
            className={`text-center mb-20 transform transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              }`}
          >
            {/* Glass Status Badge */}
            {/* <div className="inline-flex items-center gap-3 bg-white/5 backdrop-blur-2xl border border-white/10 px-8 py-4 rounded-full mb-8 group hover:bg-white/10 hover:border-white/20 transition-all duration-500 shadow-2xl">
              <Star className="w-5 h-5 text-yellow-400 animate-pulse" />
              <span className="text-gray-200 font-medium text-lg">Let's Connect</span>
              <div className="w-3 h-3 bg-green-400 rounded-full animate-ping"></div>
              <Sparkles className="w-5 h-5 text-purple-400 animate-pulse" />
            </div> */}

            <h2 className="text-5xl md:text-6xl font-bold mb-8 group relative">
              <span className="bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent group-hover:from-blue-200 group-hover:via-purple-200 group-hover:to-cyan-200 transition-all duration-700 drop-shadow-2xl">
                Contact Me
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-cyan-500/20 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            </h2>

            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Ready to bring your ideas to life? Let's discuss your next project and create something amazing together.
            </p>
          </div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left Column - Contact Form */}
            <div
              className={`transform transition-all duration-1000 delay-300 ${isVisible ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"
                }`}
            >
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-cyan-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

                <div className="relative bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl p-10 shadow-2xl hover:bg-white/10 hover:border-white/20 transition-all duration-700">
                  {/* Form Header */}
                  <div className="flex items-center gap-5 mb-10">
                    <div className="relative">
                      <div className="w-14 h-14 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-xl border border-white/20 rounded-2xl flex items-center justify-center">
                        <Send className="w-7 h-7 text-white" />
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl blur-lg opacity-30 group-hover:opacity-60 transition-opacity duration-500"></div>
                    </div>
                    <h3 className="text-3xl font-bold text-white">Send Message</h3>
                  </div>

                  {/* Contact Form */}
                  <form onSubmit={handleSubmit} className="space-y-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {/* Name Field */}
                      <div className="group/field">
                        <label htmlFor="name" className="block mb-3 text-sm text-gray-300 font-semibold">
                          Your Name *
                        </label>
                        <div className="relative">
                          <input
                            id="name"
                            name="name"
                            type="text"
                            required
                            placeholder="Your Name"
                            className="w-full px-5 py-4 rounded-xl bg-white/5 backdrop-blur-xl text-white placeholder-gray-400 border border-white/20 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all duration-300 hover:bg-white/10"
                          />
                          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl opacity-0 group-focus-within/field:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                        </div>
                      </div>

                      {/* Email Field */}
                      <div className="group/field">
                        <label htmlFor="email" className="block mb-3 text-sm text-gray-300 font-semibold">
                          Your Email *
                        </label>
                        <div className="relative">
                          <input
                            id="email"
                            name="email"
                            type="email"
                            required
                            placeholder="Your Email"
                            className="w-full px-5 py-4 rounded-xl bg-white/5 backdrop-blur-xl text-white placeholder-gray-400 border border-white/20 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all duration-300 hover:bg-white/10"
                          />
                          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl opacity-0 group-focus-within/field:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                        </div>
                      </div>
                    </div>

                    {/* Subject Field */}
                    <div className="group/field">
                      <label htmlFor="subject" className="block mb-3 text-sm text-gray-300 font-semibold">
                        Subject
                      </label>
                      <div className="relative">
                        <input
                          id="subject"
                          name="subject"
                          type="text"
                          placeholder="Project Discussion"
                          className="w-full px-5 py-4 rounded-xl bg-white/5 backdrop-blur-xl text-white placeholder-gray-400 border border-white/20 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all duration-300 hover:bg-white/10"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl opacity-0 group-focus-within/field:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                      </div>
                    </div>

                    {/* Message Field */}
                    <div className="group/field">
                      <label htmlFor="message" className="block mb-3 text-sm text-gray-300 font-semibold">
                        Message *
                      </label>
                      <div className="relative">
                        <textarea
                          id="message"
                          name="message"
                          rows={6}
                          required
                          placeholder="Tell me about your project, ideas, or just say hello..."
                          className="w-full px-5 py-4 rounded-xl bg-white/5 backdrop-blur-xl text-white placeholder-gray-400 border border-white/20 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all duration-300 hover:bg-white/10 resize-none"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl opacity-0 group-focus-within/field:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                      </div>
                    </div>

                    {/* Submit Button */}
                    <div className="relative group/btn">
                      <div className="absolute inset-0 rounded-2xl blur-xl opacity-50 group-hover/btn:opacity-100 transition-opacity duration-500"></div>

                      <button
                        type="submit"
                        disabled={loading}
                        className={`relative w-full py-2  rounded-2xl font-bold text-xl transition-all duration-500 flex items-center justify-center gap-4 shadow-2xl ${loading
                          ? "bg-white/10 backdrop-blur-xl border border-white/20 text-gray-400 cursor-not-allowed"
                          : "bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-cyan-600/20 backdrop-blur-2xl border border-white/20 text-white hover:bg-gradient-to-r hover:from-blue-600/30 hover:via-purple-600/30 hover:to-cyan-600/30 hover:border-white/30 transform hover:-translate-y-2 hover:scale-105"
                          }`}
                      >
                        {loading ? (
                          <>
                            <div className="w-6 h-6 border-2 border-gray-400 border-t-transparent rounded-full animate-spin"></div>
                            <span>Sending...</span>
                          </>
                        ) : (
                          <>
                            <div className="relative group inline-block">
                              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 rounded-2xl blur-xl opacity-50 group-hover:opacity-100 transition-opacity duration-500"></div>

                              <a
                                href="/Tuhin-Ahmed-Resume.pdf"
                                download
                                className="relative bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-cyan-600/20 backdrop-blur-2xl border border-white/20 text-white px-12 py-5 rounded-2xl font-bold text-xl hover:bg-gradient-to-r hover:from-blue-600/30 hover:via-purple-600/30 hover:to-cyan-600/30 hover:border-white/30 transform hover:-translate-y-3 hover:scale-105 transition-all duration-500 flex items-center justify-center gap-4 shadow-2xl"
                              >

                                <div className="flex items-center gap-3">
                                  <SendIcon></SendIcon>
                                  <span>Send Message</span>
                                </div>

                              </a>
                            </div>
                          </>
                        )}
                      </button>
                    </div>
                  </form>

                  {status && (
                    <div className="mt-8 p-4 bg-red-500/20 backdrop-blur-xl border border-red-500/30 rounded-xl">
                      <p className="text-center text-red-300 font-medium">{status}</p>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Right Column - Contact Info */}
            <div
              className={`transform transition-all duration-1000 delay-500 ${isVisible ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"
                }`}
            >
              {/* Contact Information */}
              <div className="relative group mb-8">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-cyan-500/20 to-blue-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

                <div className="relative bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl p-10 shadow-2xl hover:bg-white/10 hover:border-white/20 transition-all duration-700">
                  <div className="flex items-center gap-5 mb-10">
                    <div className="relative">
                      <div className="w-14 h-14 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 backdrop-blur-xl border border-white/20 rounded-2xl flex items-center justify-center">
                        <Mail className="w-7 h-7 text-white" />
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-2xl blur-lg opacity-30 group-hover:opacity-60 transition-opacity duration-500"></div>
                    </div>
                    <h3 className="text-3xl font-bold text-white">Get In Touch</h3>
                  </div>

                  <div className="space-y-8">
                    {contactInfo.map((info, index) => (
                      <a
                        key={index}
                        href={info.href}
                        className="flex items-center gap-5 p-5 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl hover:bg-white/10 hover:border-white/20 transition-all duration-500 group/info hover:scale-105"
                      >
                        <div className="relative">
                          <div
                            className={`w-12 h-12 bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl flex items-center justify-center`}
                          >
                            <info.icon className={`w-6 h-6 ${info.color} group-hover/info:animate-bounce`} />
                          </div>
                          <div
                            className={`absolute inset-0 ${info.color.replace("text-", "bg-")}/20 rounded-xl blur-lg opacity-0 group-hover/info:opacity-100 transition-opacity duration-300`}
                          ></div>
                        </div>
                        <div>
                          <div className="text-sm text-gray-400 font-medium">{info.label}</div>
                          <div className="text-lg text-white font-semibold">{info.value}</div>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-purple-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

                <div className="relative bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl p-10 shadow-2xl hover:bg-white/10 hover:border-white/20 transition-all duration-700">
                  <h4 className="text-2xl font-bold text-white mb-8 text-center">Follow Me</h4>

                  <div className="flex justify-center gap-6">
                    {socialLinks.map((social, index) => (
                      <a
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`w-16 h-16 bg-white/5 backdrop-blur-xl border border-white/20 rounded-2xl flex items-center justify-center text-gray-300 hover:text-white ${social.color} transition-all duration-500 hover:scale-125 hover:-translate-y-3 shadow-2xl group/social`}
                      >
                        <social.icon className="w-7 h-7 group-hover/social:rotate-12 transition-transform duration-300" />
                      </a>
                    ))}
                  </div>

                  <div className="mt-8 text-center">
                    <p className="text-gray-300 leading-relaxed">
                      I'm always excited to connect with fellow developers, potential clients, and anyone interested in
                      creating amazing digital experiences. Don't hesitate to reach out!
                    </p>
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

export default Contact
