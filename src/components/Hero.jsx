import myImg from '../assets/myImg.svg'
function Hero() {
  return (
    <div className="min-h-screen ">
         <div className="absolute inset-0">
          <div className="absolute -top-40 -left-40 w-96 h-96 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-cyan-500/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -top-20 -right-40 w-80 h-80 bg-gradient-to-r from-purple-500/5 via-pink-500/5 to-blue-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute -bottom-40 left-1/2 w-96 h-96 bg-gradient-to-r from-cyan-500/5 via-blue-500/5 to-purple-500/5 rounded-full blur-3xl animate-pulse delay-2000"></div>

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
      {/* Background decorative elements */}
      

      <div className="relative z-10 pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1600px] mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[80vh]">
            {/* Content Section */}
            <div className="text-center lg:text-left space-y-8">
              <div className="space-y-4">
                <div className="inline-block">
                  <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent text-sm font-medium tracking-wider uppercase">
                    Portfolio
                  </span>
                </div>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight">
                  Hi, <br /> I am Tawhidul Islam
                  <span className="block text-5xl mt-2 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                    Frontend Developer
                  </span>
                </h1>

                <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                  I'm a passionate developer with a knack for creating stunning web applications that combine beautiful
                  design with powerful functionality.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white font-semibold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25">
                  View My Work
                </button>
                <button className="border-2 border-gray-600 hover:border-purple-400 text-gray-300 hover:text-white font-semibold py-4 px-8 rounded-full transition-all duration-300 hover:bg-purple-500/10">
                  Get In Touch
                </button>
              </div>

              {/* Stats or highlights */}
              <div className="grid grid-cols-6 gap-8 pt-8 ">
                <div className="text-center lg:text-left">
                  <div className="text-2xl sm:text-3xl font-bold text-white">12+</div>
                  <div className="text-sm text-gray-400">Projects</div>
                </div>
               
                <div className="text-center lg:text-left">
                  <div className="text-2xl sm:text-3xl font-bold text-white">100%</div>
                  <div className="text-sm text-gray-400">Satisfaction</div>
                </div>
              </div>
            </div>

            {/* Image Section */}
            <div className="relative flex justify-center lg:justify-end">
              <div className="relative">
                {/* Glowing background effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 to-blue-600/20 rounded-full blur-2xl scale-110"></div>

                {/* Image container */}
                <div className="relative  p-8 rounded-2xl  ">

                      <img
                  src={myImg}
                  alt="Professional Developer Portrait"
                  className="w-[600px] max-w-[750px] object-cover rounded-xl"
                />
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gradient-to-b from-purple-400 to-blue-400 rounded-full mt-2"></div>
        </div>
      </div>
    </div>
  )
}

export default function Home() {
  return <Hero />
}
