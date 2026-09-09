import React from 'react'

export const Coverage: React.FC = () => {
  const features = [
   
    { icon: '🏘️', title: 'Tier-2 & Tier-3 Cities', desc: 'Deep market penetration in emerging, high-growth towns' },
    { icon: '🎯', title: 'Colony-Level Targeting', desc: 'Pinpoint specific mohallas, markets, schools, or hospitals' },
    { icon: '📡', title: 'GPS Route Tracking', desc: 'Real-time vehicle tracking & coverage verification reports' }
  ]

  const cities = ['Wardha', 'Nagpur', 'Amravati', 'Yavatmal', 'Chandrapur', 'Akola', 'Hinganghat', 'Pulgaon']

  return (
    <section id="coverage" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left Text */}
          <div>
            <div className="inline-block bg-[#F5E4D8] text-[#D4580A] font-outfit font-bold text-xs tracking-wider uppercase px-3 py-1.5 rounded-full mb-4">
              Network Coverage
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1B2A4A] leading-tight mb-5">
              Reach Every Corner<br />of Your Market
            </h2>
            <p className="text-base text-[#8A8680] leading-relaxed mb-8">
              Our strategic fleet network covers metros, Tier-2, and Tier-3 cities. Define your exact target zone and we'll saturate it with your campaign.
            </p>

            <div className="flex flex-col gap-4 mb-10">
              {features.map((f, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-4 p-4 rounded-xl border border-[#E5E2DA] bg-[#F8F7F4] hover:bg-[#F5E4D8]/30 hover:border-[#D4580A]/40 transition-colors"
                >
                  <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center text-xl shrink-0 shadow-sm">
                    {f.icon}
                  </div>
                  <div>
                    <h3 className="font-outfit font-bold text-sm text-[#1B2A4A] mb-1">
                      {f.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#8A8680] leading-normal">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <a
              href="#contact"
              className="inline-block bg-[#1B2A4A] hover:bg-[#2D4270] text-white font-outfit font-bold text-sm px-7 py-3.5 rounded-lg shadow-md hover:shadow-lg transition-all"
            >
              Request Coverage Map →
            </a>
          </div>

          {/* Right Visual Card */}
          <div className="relative">
            <div className="h-[420px] sm:h-[480px] rounded-3xl overflow-hidden shadow-2xl border border-[#E5E2DA] bg-[#0f172a] relative">
              <img
                src="/8image.jpeg"
                alt="MMT On Street Fleet Network"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1B2A4A] via-[#1B2A4A]/40 to-transparent" />

              <div className="absolute bottom-6 left-6 right-6 text-white">
                <div className="flex items-center gap-2 mb-2">
                  <span className="bg-[#D4580A] text-white text-[11px] font-bold tracking-wider uppercase px-2.5 py-1 rounded">
                    Active Deployment
                  </span>
                  <span className="text-xs text-white/80 font-medium">GPS Tracked Routes</span>
                </div>
                <h4 className="font-outfit font-bold text-xl sm:text-2xl text-white mb-4 drop-shadow-md">
                  Street-Level Saturation In Action
                </h4>

                {/* City Chips */}
                <div className="flex flex-wrap gap-2">
                  {cities.map((city, idx) => (
                    <span
                      key={idx}
                      className="text-xs font-semibold font-outfit text-white bg-white/20 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/30"
                    >
                      {city}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
