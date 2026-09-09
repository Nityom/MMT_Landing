import React, { useState } from 'react'

export interface GalleryItem {
  img: string
  cat: string
  badge: string
  title: string
  desc: string
}

interface GalleryProps {
  onSelectImage: (item: GalleryItem) => void
}

export const Gallery: React.FC<GalleryProps> = ({ onSelectImage }) => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'erickshaw' | 'night' | 'fleet' | 'publishing'>('all')

  const galleryItems: GalleryItem[] = [
    { img: '/19image.jpeg', cat: 'erickshaw', badge: 'Govt. Campaign', title: 'Swachhata Hi Seva — MGIRI', desc: 'E-rickshaw fleet with loudspeaker PA for Mahatma Gandhi Institute' },
    { img: '/18image.jpeg', cat: 'erickshaw', badge: 'Real Estate', title: 'Dream Park CREDAI', desc: 'Prime plot booking saturation e-rickshaw across highway routes' },
    { img: '/16image.jpeg', cat: 'erickshaw', badge: 'Gold Loan', title: 'Shriram Finance Limited', desc: 'Financial service brand display and audio announcement setup' },
    { img: '/15image.jpeg', cat: 'erickshaw', badge: 'Real Estate', title: 'Royal Estate CREDAI', desc: 'VIP area residential layout e-rickshaw mobile branding' },
    { img: '/17image.jpeg', cat: 'erickshaw', badge: 'Consumer Durables', title: 'IFB FastCool HD AC', desc: 'Home appliance brand e-rickshaw street campaign with audio PA' },
    { img: '/5image.jpeg', cat: 'night', badge: 'Backlit Cart', title: 'FirstCry.com Night Campaign', desc: 'Illuminated battery-powered mobile display on busy evening markets' },
    { img: '/6image.jpeg', cat: 'night', badge: 'Diwali Offer', title: 'Fabsignatures Festive Display', desc: 'Nighttime glowing mobile rickshaw banner during festive shopping peak' },
    { img: '/7image.jpeg', cat: 'night', badge: 'Solar Energy', title: 'S&S Future Energy (Kirloskar)', desc: 'Illuminated cycle rickshaw promoting rooftop solar subsidies at night' },
    { img: '/3image.jpeg', cat: 'night', badge: 'EV Launch', title: 'Krishnam Sales Ezyride', desc: 'Electric scooter launch at night with high-output PA loudspeaker' },
    { img: '/8image.jpeg', cat: 'fleet', badge: 'Cycle Rickshaw', title: 'Manappuram Finance Ltd.', desc: 'High-dwell mohalla & street cycle rickshaw banner with rooftop horn' },
    { img: '/2image.jpeg', cat: 'fleet', badge: 'Automobile', title: 'TVS & AK Gandhi Auto Promo', desc: 'Canopy wrap & mobile showcase for festive two-wheeler schemes' },
    { img: '/4image.jpeg', cat: 'fleet', badge: 'Promo Vans', title: 'Adaa & Kalakshetra Vans', desc: 'Twin custom mobile advertising mini-trucks for retail store grand opening' },
    { img: '/9image.jpeg', cat: 'fleet', badge: 'Retail Mini-Truck', title: 'FirstCry Store Launch Van', desc: 'Dedicated branding truck positioned at premier high-footfall location' },
    { img: '/1image.jpeg', cat: 'publishing', badge: 'Aarti Sangrah', title: 'Ganesh Aarti Sangrah Edition', desc: 'Devotional festive Aarti Sangrah booklet publishing for local businesses' },
    { img: '/10image.jpeg', cat: 'publishing', badge: 'Diwali Special Ank', title: 'Education News Diwali Ank', desc: 'Annual festival special edition magazine published for households' },
    { img: '/11image.jpeg', cat: 'publishing', badge: 'Annual Calendar', title: 'MMT Annual Marathi Calendar (दिनदर्शिका)', desc: '12-month business directory wall calendar published across Wardha & Vidarbha' },
    { img: '/12image.jpeg', cat: 'publishing', badge: 'Aarti Sangrah', title: 'Navratri & Ganpati Aarti Sangrah', desc: 'Devotional publication booklet distributed with prominent sponsor ads' },
    { img: '/13image.jpeg', cat: 'publishing', badge: 'Aarti Sangrah', title: 'Shri Ganesh Aarti Sangrah', desc: 'Annual household devotional publication featuring top brands' },
    { img: '/14image.jpeg', cat: 'publishing', badge: 'Aarti Sangrah', title: 'Durga Utsav Aarti Sangrah', desc: 'Festival edition Aarti booklet with electronics & retail sponsor feature' },
  ]

  const filteredItems = galleryItems.filter(
    (item) => activeFilter === 'all' || item.cat === activeFilter
  )

  const filterButtons = [
    { key: 'all', label: `All Campaigns (${galleryItems.length})` },
    { key: 'erickshaw', label: '⚡ E-Rickshaw Fleet (5)' },
    { key: 'night', label: '🌙 Night & Backlit (4)' },
    { key: 'fleet', label: '🛺 Rickshaws & Vans (4)' },
    { key: 'publishing', label: '📅 Calendars & Aarti Sangrah (6)' },
  ]

  return (
    <section id="work" className="py-24 bg-[#F8F7F4]">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-block bg-[#F5E4D8] text-[#D4580A] font-outfit font-bold text-xs tracking-wider uppercase px-3 py-1.5 rounded-full mb-4">
              Campaign Gallery
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1B2A4A] leading-tight">
              Our Work, On the Streets
            </h2>
          </div>
          <a
            href="#contact"
            className="border border-[#E5E2DA] hover:border-[#1B2A4A] text-[#1B2A4A] font-outfit font-bold text-sm px-6 py-3 rounded-lg transition-colors self-start md:self-end"
          >
            View All Cases →
          </a>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
          <div className="flex flex-wrap gap-2">
            {filterButtons.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveFilter(tab.key as any)}
                className={`font-outfit text-xs sm:text-sm font-semibold px-4 py-2 rounded-lg border transition-all ${
                  activeFilter === tab.key
                    ? 'bg-[#1B2A4A] text-white border-[#1B2A4A] shadow-sm'
                    : 'bg-white text-[#3D3A35] border-[#E5E2DA] hover:border-[#D4580A] hover:text-[#D4580A]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
          <span className="text-xs text-[#8A8680] font-medium hidden md:inline">
            Click any photo to enlarge
          </span>
        </div>

        {/* Gallery Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredItems.map((item, idx) => (
            <div
              key={idx}
              onClick={() => onSelectImage(item)}
              className="group bg-white border border-[#E5E2DA] rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer flex flex-col h-[320px]"
            >
              <div className="relative flex-1 overflow-hidden bg-[#0f172a]">
                <img
                  src={item.img}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 bg-[#1B2A4A]/85 backdrop-blur-sm text-white text-[10px] font-semibold px-2.5 py-1 rounded">
                  {item.badge}
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-[#1B2A4A]/70 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex flex-col justify-end p-4 text-white">
                  <div className="text-xs font-bold text-[#D4580A] flex items-center gap-1.5 mb-1">
                    <span>🔍</span> Click to Enlarge
                  </div>
                  <div className="font-outfit font-bold text-sm leading-snug mb-1">
                    {item.title}
                  </div>
                  <div className="text-[11px] text-white/80 line-clamp-2">
                    {item.desc}
                  </div>
                </div>
              </div>

              <div className="p-3.5 bg-white border-t border-[#E5E2DA]">
                <h4 className="font-outfit font-bold text-sm text-[#1B2A4A] truncate">
                  {item.title}
                </h4>
                <p className="text-xs text-[#8A8680] truncate mt-0.5">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
