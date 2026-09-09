import React from 'react'
import { CONTACT_INFO } from '../constants/contact'

export const Team: React.FC = () => {
  const teamMembers = [
    {
      name: 'Madhav Bhalerao',
      role: 'Managing Director',
      badge: 'Managing Director',
      image: '/team/madhav.jpeg',
      desc: 'Visionary founder steering MMT’s nationwide expansion, high-impact outdoor mobility campaigns, and strategic enterprise client partnerships across India.',
      tag: 'Leadership & Vision',
      contact: `mailto:${CONTACT_INFO.email}`
    },
    {
      name: 'Mandar Bhalerao',
      role: 'CEO',
      badge: 'Chief Executive Officer',
      image: '/team/mandar.jpeg',
      desc: 'Oversees operational execution, fleet deployment, technological innovations, and day-to-day business expansion across multi-city hubs.',
      tag: 'Operations & Growth',
      contact: '#contact'
    },
    {
      name: 'Advocate Mrunal Bhalerao',
      role: 'Group Legal Advisor',
      badge: 'Group Legal Advisor',
      image: '/team/mrunal.jpeg',
      desc: 'Directs regulatory affairs, municipal permissions, contract structuring, and legal compliance across all state and municipal jurisdictions.',
      tag: 'Legal & Regulatory',
      contact: '#contact'
    },
    {
      name: 'Manisha Bhalerao',
      role: 'Group Advisor',
      badge: 'Group Advisor',
      image: '/team/manisha.jpeg',
      desc: 'Guides institutional governance, stakeholder engagement, community outreach programs, and organizational culture stewardship.',
      tag: 'Strategy & Advisory',
      contact: '#contact'
    }
  ]

  return (
    <section id="team" className="py-24 bg-white border-t border-[#E5E2DA]">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-block bg-[#F5E4D8] text-[#D4580A] font-outfit font-bold text-xs tracking-wider uppercase px-3 py-1.5 rounded-full mb-4">
            Executive Leadership
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1B2A4A] leading-tight mb-4">
            Meet Our Leadership Team
          </h2>
          <p className="text-base text-[#8A8680] leading-relaxed">
            The experienced strategists, legal counsel, and operational leaders driving MMT Advertising Agency's nationwide network and client success.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7">
          {teamMembers.map((m, idx) => (
            <div
              key={idx}
              className="bg-white border border-[#E5E2DA] rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-2 hover:border-[#D4580A] transition-all duration-300 flex flex-col group"
            >
              {/* Photo Wrapper */}
              <div className="relative w-full h-[320px] overflow-hidden bg-[#F8F7F4]">
                <img
                  src={m.image}
                  alt={`${m.name} - ${m.role} at MMT Agency`}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-sm px-2.5 py-1 rounded-full border border-[#E5E2DA] flex items-center gap-1.5 shadow-sm">
                  <img src="/logo.png" alt="MMT" className="h-3.5 w-auto object-contain" />
                  <span className="font-outfit text-[10px] font-bold text-[#1B2A4A]">MMT</span>
                </div>
              </div>

              {/* Info Body */}
              <div className="p-6 flex-1 flex flex-col">
                <div className="inline-block self-start bg-[#F5E4D8] text-[#D4580A] font-outfit font-bold text-[11px] uppercase tracking-wider px-3 py-1 rounded-full mb-3">
                  {m.badge}
                </div>
                <h3 className="font-serif font-bold text-xl text-[#1B2A4A] mb-1 leading-snug">
                  {m.name}
                </h3>
                <div className="font-outfit font-bold text-xs text-[#E8701F] tracking-wide uppercase mb-3">
                  {m.role}
                </div>
                <p className="text-xs sm:text-sm text-[#8A8680] leading-relaxed mb-5 flex-1">
                  {m.desc}
                </p>
                <div className="pt-3.5 border-t border-[#E5E2DA] flex items-center justify-between text-xs font-semibold">
                  <span className="text-[#8A8680]">{m.tag}</span>
                  <a
                    href={m.contact}
                    className="text-[#D4580A] hover:underline flex items-center gap-1 font-bold"
                  >
                    Connect ↗
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Leadership Trust Banner */}
        <div className="mt-16 bg-gradient-to-r from-[#1B2A4A] to-[#22355c] rounded-3xl p-8 sm:p-11 text-white flex flex-col lg:flex-row items-center justify-between gap-8 shadow-xl relative overflow-hidden">
          <div className="absolute -right-12 -top-12 w-64 h-64 rounded-full bg-[radial-gradient(circle,rgba(212,88,10,0.25),transparent_70%)] pointer-events-none" />
          
          <div className="relative z-10 max-w-2xl">
            <div className="flex items-center gap-2 mb-2 text-[#D4580A] font-outfit font-bold text-xs uppercase tracking-widest">
              <span>🏛️</span> Direct Leadership Accountability
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold mb-3 leading-snug">
              Partner Directly with MMT’s Executive Decision Makers
            </h3>
            <p className="text-sm text-white/80 leading-relaxed">
              From state-level elections and government rollouts to high-velocity brand blitzes, our executive team personally oversees campaign planning, compliance clearances, and ground deployment.
            </p>
          </div>

          <div className="relative z-10 shrink-0">
            <a
              href="#contact"
              className="inline-block bg-[#D4580A] hover:bg-[#E8701F] text-white font-outfit font-bold text-sm px-7 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all whitespace-nowrap"
            >
              Speak With Leadership →
            </a>
          </div>
        </div>

      </div>
    </section>
  )
}
