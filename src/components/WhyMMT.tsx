import React from 'react'

export const WhyMMT: React.FC = () => {
  const advantages = [
    { icon: '🎯', title: 'Hyperlocal Precision', desc: 'Choose any colony, market, or institution. Our routes are planned to maximize reach within your exact target geography.' },
    { icon: '📊', title: 'Real-Time Reporting', desc: 'GPS-verified fleet tracking, daily coverage reports, and impression estimates. Full transparency on every campaign.' },
    { icon: '⚡', title: '48-Hour Launch', desc: 'Campaign briefed today, vehicles on the streets in 48 hours. We execute at the speed your business demands.' },
    { icon: '🎨', title: 'End-to-End Creative', desc: 'In-house designers handle your banner artwork, jingle scripting, and vehicle wrap graphics. One vendor, zero hassle.' },
    { icon: '🌿', title: 'Eco-Friendly Options', desc: 'Our e-rickshaw fleet cuts emissions while cutting through the noise. Sustainable advertising for modern brands.' },
    { icon: '💰', title: 'Budget Flexibility', desc: 'Daily, weekly, or monthly packages. Combo deals for multi-medium campaigns. We work with every budget size.' }
  ]

  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-block bg-[#F5E4D8] text-[#D4580A] font-outfit font-bold text-xs tracking-wider uppercase px-3 py-1.5 rounded-full mb-4">
            The MMT Advantage
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1B2A4A] leading-tight mb-4">
            Why Brands Choose MMT
          </h2>
          <p className="text-base text-[#8A8680] leading-relaxed">
            We don't just run ads. We build brand presence in the communities where your customers live.
          </p>
        </div>

        {/* Advantage Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {advantages.map((w, idx) => (
            <div
              key={idx}
              className="bg-[#F8F7F4] border border-[#E5E2DA] rounded-2xl p-7 hover:border-[#D4580A]/50 hover:shadow-md transition-all"
            >
              <div className="w-12 h-12 bg-[#F5E4D8] rounded-xl text-2xl flex items-center justify-center mb-5">
                {w.icon}
              </div>
              <h3 className="font-outfit font-bold text-lg text-[#1B2A4A] mb-2.5">
                {w.title}
              </h3>
              <p className="text-sm text-[#8A8680] leading-relaxed">
                {w.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Consultation CTA Strip */}
        <div className="mt-16 p-8 sm:p-12 bg-[#F5E4D8] border border-[#D4580A]/20 rounded-3xl flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#1B2A4A] mb-2">
              Ready to take your brand to the streets?
            </h3>
            <p className="text-sm sm:text-base text-[#3D3A35]">
              Get a free campaign consultation and custom quote within 24 hours.
            </p>
          </div>
          <a
            href="#contact"
            className="bg-[#1B2A4A] hover:bg-[#2D4270] text-white font-outfit font-bold text-sm px-7 py-3.5 rounded-lg shadow-md hover:shadow-lg transition-all whitespace-nowrap"
          >
            Get Free Quote →
          </a>
        </div>

      </div>
    </section>
  )
}
