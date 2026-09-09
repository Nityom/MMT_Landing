import React, { useState } from 'react'
import { CONTACT_INFO } from '../constants/contact'

export const Coverage: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const features = [
    { icon: '🏘️', title: 'Tier-2 & Tier-3 City Focus', desc: 'Deep market penetration across emerging, high-growth towns in Vidarbha' },
    { icon: '🎯', title: 'Colony & Ward-Level Targeting', desc: 'Pinpoint specific mohallas, main bazars, schools, mandis, or hospitals' },
    { icon: '📡', title: 'GPS Route Tracking & Photo Logs', desc: 'Real-time vehicle tracking & daily verification proof for every street covered' }
  ]

  const localDistricts = ['Wardha (HQ)', 'Hinganghat', 'Pulgaon', 'Arvi', 'Deoli', 'Seloo', 'Samudrapur']
  const regionalCities = ['Nagpur', 'Amravati', 'Yavatmal', 'Chandrapur', 'Akola']

  const faqs = [
    {
      q: 'Which areas does MMT Advertising Agency serve?',
      a: 'MMT Advertising Agency is headquartered in Wardha, Maharashtra and delivers outdoor advertising campaigns across Wardha, Hinganghat, Pulgaon, Arvi, Deoli, Seloo, as well as nearby regional hubs including Nagpur, Amravati, Yavatmal, Chandrapur, Akola, and the entire Vidarbha region.'
    },
    {
      q: 'What advertising agency services are available in nearby areas?',
      a: 'We provide end-to-end advertising agency services: auto rickshaw branding, e-rickshaw transit campaigns, audio loudspeaker announcements, jingle production, flex banner printing, calendar/aarti sangrah publishing, and colony-level paste promotions.'
    },
    {
      q: 'How can I book an advertising campaign in Wardha or nearby cities?',
      a: 'Call us directly at +91 9850545111 or reach out via WhatsApp at +91 94058 48968. You can also visit our office at Malgujari Pura, Near Namdev Math, Wardha, Maharashtra 442001.'
    },
    {
      q: 'Do you offer verified GPS tracking for campaign vehicles?',
      a: 'Yes, our fleet routes are monitored with GPS tracking, and we supply daily photo and video verification logs so you know exactly which streets and colonies your campaign covered.'
    }
  ]

  return (
    <section id="coverage" className="py-24 bg-white border-t border-[#E5E2DA]/60">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">

          {/* Left Text */}
          <div>
            <div className="inline-block bg-[#F5E4D8] text-[#D4580A] font-outfit font-bold text-xs tracking-wider uppercase px-3 py-1.5 rounded-full mb-4">
              Local & Regional Coverage
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1B2A4A] leading-tight mb-5">
              Top Advertising Agency in Wardha & Nearby Areas
            </h2>
            <p className="text-base text-[#8A8680] leading-relaxed mb-8">
              Whether you need street-level auto rickshaw branding in Wardha, loudspeaker announcements in Hinganghat & Pulgaon, or a high-impact transit fleet across Nagpur and Amravati, MMT Advertising Agency ensures your brand dominates every street corner.
            </p>

            <div className="flex flex-col gap-4 mb-8">
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

            <div className="flex flex-wrap gap-4 items-center">
              <a
                href="#contact"
                className="inline-block bg-[#1B2A4A] hover:bg-[#2D4270] text-white font-outfit font-bold text-sm px-7 py-3.5 rounded-lg shadow-md hover:shadow-lg transition-all"
              >
                Book Area Campaign →
              </a>
              <a
                href={CONTACT_INFO.mapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-[#E5E2DA] hover:border-[#D4580A] text-[#1B2A4A] font-outfit font-semibold text-sm px-5 py-3.5 rounded-lg hover:bg-[#F5E4D8]/20 transition-all"
              >
                <span>📍</span>
                <span>Directions on Google Maps</span>
              </a>
            </div>
          </div>

          {/* Right Visual Card */}
          <div className="relative">
            <div className="h-[460px] sm:h-[520px] rounded-3xl overflow-hidden shadow-2xl border border-[#E5E2DA] bg-[#0f172a] relative">
              <img
                src="/8image.jpeg"
                alt="MMT Advertising Agency Auto Rickshaw and E-Rickshaw Network in Wardha and Nearby Cities"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1B2A4A] via-[#1B2A4A]/50 to-transparent" />

              <div className="absolute bottom-6 left-6 right-6 text-white">
                <div className="flex items-center gap-2 mb-2">
                  <span className="bg-[#D4580A] text-white text-[11px] font-bold tracking-wider uppercase px-2.5 py-1 rounded">
                    Wardha & Vidarbha Network
                  </span>
                  <span className="text-xs text-white/80 font-medium">GPS Tracked Transit Fleets</span>
                </div>
                <h3 className="font-outfit font-bold text-xl sm:text-2xl text-white mb-4 drop-shadow-md">
                  Active in Key Cities & Towns
                </h3>

                {/* Primary District Hubs */}
                <div className="mb-3">
                  <div className="text-[11px] uppercase tracking-wider text-[#F5E4D8] font-bold mb-1.5">
                    Local Towns & Talukas
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {localDistricts.map((city, idx) => (
                      <span
                        key={idx}
                        className="text-xs font-semibold font-outfit text-white bg-white/20 backdrop-blur-md px-2.5 py-1 rounded-md border border-white/30"
                      >
                        {city}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Regional Cities */}
                <div>
                  <div className="text-[11px] uppercase tracking-wider text-[#F5E4D8] font-bold mb-1.5">
                    Regional Network
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {regionalCities.map((city, idx) => (
                      <span
                        key={idx}
                        className="text-xs font-semibold font-outfit text-white bg-white/20 backdrop-blur-md px-2.5 py-1 rounded-md border border-white/30"
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

        {/* Local FAQ Section (Indexed for Google Local SEO Rich Snippets) */}
        <div className="pt-12 border-t border-[#E5E2DA] max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <div className="inline-block bg-[#F5E4D8] text-[#D4580A] font-outfit font-bold text-xs tracking-wider uppercase px-3 py-1.5 rounded-full mb-3">
              Local SEO & Frequently Asked Questions
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl font-extrabold text-[#1B2A4A]">
              Frequently Asked Questions About Our Local Advertising
            </h3>
            <p className="text-sm text-[#8A8680] mt-2">
              Everything you need to know about outdoor campaigns with MMT Advertising Agency in Wardha and nearby cities.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index
              return (
                <div
                  key={index}
                  className="border border-[#E5E2DA] rounded-xl overflow-hidden bg-[#F8F7F4] transition-colors"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="w-full text-left px-6 py-4 flex items-center justify-between gap-4 font-outfit font-bold text-[#1B2A4A] text-sm sm:text-base hover:text-[#D4580A] transition-colors cursor-pointer"
                    aria-expanded={isOpen}
                  >
                    <span>{faq.q}</span>
                    <span className="text-[#D4580A] text-xl font-mono shrink-0">
                      {isOpen ? '−' : '+'}
                    </span>
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-5 pt-1 text-xs sm:text-sm text-[#3D3A35] leading-relaxed border-t border-[#E5E2DA]/60 bg-white">
                      {faq.a}
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>

      </div>
    </section>
  )
}
