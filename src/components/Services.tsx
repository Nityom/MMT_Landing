import React from 'react'

export const Services: React.FC = () => {
  const services = [
    {
      emoji: '🛺',
      title: 'Rickshaw Branding',
      img: '/2image.jpeg',
      badge: 'Vehicle Branding',
      desc: 'Full-body wrap or canopy panel advertising on traditional auto & cycle rickshaws traversing busy residential and market zones. Maximum dwell time, zero skip rate.',
      tags: ['Canopy Wrap', 'Side Panels', 'Back Display', 'High Footfall']
    },
    {
      emoji: '⚡',
      title: 'E-Rickshaw Campaigns',
      img: '/18image.jpeg',
      badge: 'Electric Fleet',
      desc: 'Modern electric rickshaws with vivid high-resolution vinyl wraps and street displays. Eco-friendly, tech-forward, and ideal for powerful brand presence.',
      tags: ['Full Box Wrap', 'Eco Fleet', 'Day & Night', 'Colony Routes']
    },
    {
      emoji: '🔊',
      title: 'Audio Recording & PA',
      img: '/17image.jpeg',
      badge: 'Sound & Loudspeaker',
      desc: 'Professional studio-quality jingle production and loud PA horn sound systems deployed directly on moving campaign vehicles across colonies.',
      tags: ['Loudspeaker Horn', 'Studio Jingles', 'Multi-language', 'Moving Audio']
    },
    {
      emoji: '🎨',
      title: 'Banner Design & Print',
      img: '/10image.jpeg',
      badge: 'High-Def Flex',
      desc: 'Creative design and high-definition flex, vinyl banner and poster printing. Our in-house creative team crafts visuals that demand attention on the road.',
      tags: ['Flex Print', 'Vinyl Banners', 'Festive Editions', 'Design Included']
    },
    {
      emoji: '📅',
      title: 'Publishing — Calendars & Aarti Sangrah',
      img: '/11image.jpeg',
      badge: 'Print Publishing',
      desc: 'Publishing and distribution of prestigious annual Marathi Calendars (दिनदर्शिका), Diwali special editions, and festive Aarti Sangrah (आरती संग्रह) booklets. Maximum household dwell time and 365-day brand presence.',
      tags: ['Marathi Calendars', 'Aarti Sangrah', 'Diwali Ank', 'Household Reach']
    },
    {
      emoji: '🗺️',
      title: 'Custom Area Campaigns',
      img: '/4image.jpeg',
      badge: 'Mobile Fleet Vans',
      desc: 'Hyper-local saturation in your chosen colony, market, or zone using dedicated vans and multi-vehicle convoys for total market dominance.',
      tags: ['Mobile Vans', 'Geo-fenced', 'Market Saturation', 'Custom Route']
    }
  ]

  const processSteps = [
    { n: '01', title: 'Brief Us', desc: 'Share your target area, campaign type, and budget.' },
    { n: '02', title: 'We Design', desc: 'Creative team crafts your visuals, wraps, and audio.' },
    { n: '03', title: 'We Deploy', desc: 'Fleet hits the streets with GPS-tracked routes.' },
    { n: '04', title: 'You Track', desc: 'Receive daily reports and impression analytics.' }
  ]

  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <div className="inline-block bg-[#F5E4D8] text-[#D4580A] font-outfit font-bold text-xs tracking-wider uppercase px-3 py-1.5 rounded-full mb-4">
            What We Do
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1B2A4A] leading-tight mb-4">
            Advertising Services<br />Built for Real Impact
          </h2>
          <p className="text-base text-[#8A8680] leading-relaxed">
            From rickshaw wraps to audio jingles — every service is designed to saturate your target market with maximum visibility.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, idx) => (
            <div
              key={idx}
              className="bg-white border border-[#E5E2DA] rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col group"
            >
              {/* Image Container */}
              <div className="h-48 relative overflow-hidden bg-[#F2F0EB]">
                <img
                  src={s.img}
                  alt={s.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute bottom-2.5 left-3 bg-[#1B2A4A]/85 backdrop-blur-sm text-white text-[11px] font-semibold px-2.5 py-1 rounded-md">
                  {s.badge}
                </div>
              </div>

              {/* Body */}
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl">{s.emoji}</span>
                  <h3 className="font-outfit font-bold text-lg text-[#1B2A4A] leading-snug">
                    {s.title}
                  </h3>
                </div>
                <p className="text-sm text-[#8A8680] leading-relaxed mb-5 flex-1">
                  {s.desc}
                </p>
                <div className="flex flex-wrap gap-1.5 pt-2 border-t border-[#F2F0EB]">
                  {s.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="inline-block bg-[#F8F7F4] text-[#3D3A35] text-[11px] font-medium px-2.5 py-1 rounded border border-[#E5E2DA]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 4-Step Process Strip */}
        <div className="mt-20 p-8 sm:p-12 bg-[#1B2A4A] rounded-3xl text-white shadow-xl">
          <div className="text-center mb-10">
            <span className="inline-block bg-white/10 text-white/80 font-outfit font-bold text-xs tracking-wider uppercase px-4 py-1.5 rounded-full mb-3">
              How It Works
            </span>
            <h3 className="font-outfit text-2xl sm:text-3xl font-extrabold text-white">
              Campaign Live in 48 Hours
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {processSteps.map((p, idx) => (
              <div key={idx} className="flex flex-col items-center">
                <div className="w-12 h-12 bg-[#D4580A] rounded-xl flex items-center justify-center font-outfit font-extrabold text-lg text-white mb-4 shadow-md">
                  {p.n}
                </div>
                <h4 className="font-outfit font-bold text-base text-white mb-2">{p.title}</h4>
                <p className="text-xs sm:text-sm text-white/60 leading-relaxed max-w-[220px]">
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
