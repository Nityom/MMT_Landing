import React from 'react'

export const Stats: React.FC = () => {
  const stats = [
    { val: '10M+', label: 'Daily Impressions', sub: 'across all campaigns' },
    { val: '50+', label: 'Cities & Towns', sub: 'nationwide coverage' },
    { val: '200+', label: 'Active Vehicles', sub: 'rickshaw & e-rickshaw' },
    { val: '98%', label: 'Client Retention', sub: 'satisfaction guaranteed' }
  ]

  return (
    <section className="py-16 bg-[#F8F7F4] border-y border-[#E5E2DA]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((s, idx) => (
            <div
              key={idx}
              className="bg-white border border-[#E5E2DA] rounded-2xl p-6 text-center shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="font-outfit text-3xl sm:text-4xl font-extrabold text-[#D4580A]">
                {s.val}
              </div>
              <div className="font-outfit font-bold text-sm sm:text-base text-[#1B2A4A] mt-2">
                {s.label}
              </div>
              <div className="text-xs text-[#8A8680] mt-1">{s.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
