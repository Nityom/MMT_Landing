import React from 'react'

export const Hero: React.FC = () => {
  const tickerItems = [
    '🛺 Rickshaw Branding',
    '⚡ E-Rickshaw Campaigns',
    '🔊 Audio PA Systems',
    '🎨 Banner Design & Print',
    '📅 Calendars & Aarti Sangrah Publishing',
    '🗺️ Custom Area Targeting',
    '📣 Jingle Recording',
    '🏙️ City-Wide Coverage',
    '🎯 Hyperlocal Advertising'
  ]

  return (
    <section className="hero-section pt-24 min-h-screen flex flex-col relative overflow-hidden bg-white">
      {/* Grid background */}
      <div className="hero-grid absolute inset-0 pointer-events-none" />

      {/* Decorative radial gradients */}
      <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-[radial-gradient(circle,rgba(212,88,10,0.08),transparent_70%)] pointer-events-none" />
      <div className="absolute -bottom-20 -left-16 w-80 h-80 rounded-full bg-[radial-gradient(circle,rgba(27,42,74,0.06),transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 py-16 md:py-24 w-full flex-1 flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center w-full">
          
          {/* Left Content */}
          <div>
            <div className="inline-block bg-[#F5E4D8] text-[#D4580A] font-outfit font-bold text-xs tracking-wider uppercase px-3 py-1.5 rounded-full mb-6">
              India's Mobile Outdoor Network
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#1B2A4A] leading-[1.12] mb-6">
              Your Brand.<br />
              Every Street.<br />
              <span className="text-[#D4580A]">Every City.</span>
            </h1>

            <p className="text-base sm:text-lg text-[#3D3A35] leading-relaxed max-w-lg mb-8">
              MMT Advertising Agency runs a premium fleet of <strong>rickshaws & e-rickshaws</strong> across cities and custom localities — delivering audio, visual, and paste campaigns with unmatched reach.
            </p>

            <div className="flex flex-wrap gap-4 mb-12">
              <a
                href="#contact"
                className="bg-[#D4580A] hover:bg-[#E8701F] text-white font-outfit font-bold text-sm px-6 py-3.5 rounded-lg shadow-md hover:shadow-lg transition-all duration-200"
              >
                Start Your Campaign →
              </a>
              <a
                href="#services"
                className="border border-[#E5E2DA] hover:border-[#1B2A4A] text-[#1B2A4A] font-outfit font-bold text-sm px-6 py-3.5 rounded-lg transition-colors"
              >
                Explore Services
              </a>
            </div>

            {/* Trust Badges */}
            <div className="flex items-center gap-6 sm:gap-10 pt-8 border-t border-[#E5E2DA]">
              <div>
                <div className="font-outfit text-3xl font-extrabold text-[#1B2A4A]">
                  200<span className="text-[#D4580A]">+</span>
                </div>
                <div className="text-xs text-[#8A8680] font-medium mt-1">Vehicles Active</div>
              </div>
              <div className="w-px h-10 bg-[#E5E2DA]" />
              <div>
                <div className="font-outfit text-3xl font-extrabold text-[#1B2A4A]">
                  50<span className="text-[#D4580A]">+</span>
                </div>
                <div className="text-xs text-[#8A8680] font-medium mt-1">Cities Covered</div>
              </div>
              <div className="w-px h-10 bg-[#E5E2DA]" />
              <div>
                <div className="font-outfit text-3xl font-extrabold text-[#1B2A4A]">
                  500<span className="text-[#D4580A]">+</span>
                </div>
                <div className="text-xs text-[#8A8680] font-medium mt-1">Campaigns Done</div>
              </div>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative float-anim">
            <div className="h-[360px] sm:h-[460px] rounded-2xl overflow-hidden shadow-xl border border-[#E5E2DA] bg-white relative">
              <img
                src="/hero_image.png"
                alt="MMT Agency E-Rickshaw Fleet"
                className="w-full h-full object-cover object-center"
              />
            </div>

            {/* Floating Tags */}
            <div className="absolute -bottom-4 -left-4 sm:-left-6 bg-white border border-[#E5E2DA] rounded-xl p-3 shadow-lg flex items-center gap-3 z-10">
              <div className="w-10 h-10 bg-[#F5E4D8] rounded-lg flex items-center justify-center text-xl">⚡</div>
              <div>
                <div className="font-outfit font-bold text-xs sm:text-sm text-[#1B2A4A]">E-Rickshaw Fleet</div>
                <div className="text-[11px] text-[#8A8680]">Eco-friendly & Impactful</div>
              </div>
            </div>

            <div className="absolute -top-4 -right-4 sm:-right-6 bg-white border border-[#E5E2DA] rounded-xl p-3 shadow-lg flex items-center gap-3 z-10">
              <div className="w-10 h-10 bg-[#E8F4FD] rounded-lg flex items-center justify-center text-xl">📍</div>
              <div>
                <div className="font-outfit font-bold text-xs sm:text-sm text-[#1B2A4A]">Street Coverage</div>
                <div className="text-[11px] text-[#8A8680]">Target any locality</div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Brand Capability Ticker */}
      <div className="border-t border-[#E5E2DA] bg-white py-4 overflow-hidden">
        <div className="flex items-center gap-4">
          <span className="px-6 font-outfit font-bold text-xs tracking-wider uppercase text-[#8A8680] whitespace-nowrap shrink-0">
            Trusted by brands
          </span>
          <div className="flex-1 overflow-hidden">
            <div className="ticker-inner flex gap-8 whitespace-nowrap">
              {[...tickerItems, ...tickerItems].map((item, idx) => (
                <span key={idx} className="font-outfit font-semibold text-sm text-[#3D3A35] flex items-center gap-2">
                  {item}
                  <span className="text-[#E5E2DA] ml-6">|</span>
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
