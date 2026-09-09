import React from 'react'

export const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: 'Rajesh Kumar',
      role: 'Owner – RK Electronics, Karol Bagh',
      quote: 'MMT\'s e-rickshaw campaign in Karol Bagh brought 3x more walk-ins than our previous digital campaign. The whole colony started recognizing our brand within a week.'
    },
    {
      name: 'Priya Sharma',
      role: 'Marketing Manager – EduFirst Institute',
      quote: 'The audio jingle campaign covered all our target school zones with perfect precision. Enrollment inquiries jumped 40% in the campaign week alone. Incredible ROI.'
    },
    {
      name: 'Anil Verma',
      role: 'Director – Verma Sweets & Dairy',
      quote: 'Festival season was huge for us thanks to MMT. 15 cycle rickshaws with bright banners and horn announcements blanketed our entire city zone. Footfall was unbelievable.'
    }
  ]

  const avatarColors = ['bg-[#1B2A4A]', 'bg-[#D4580A]', 'bg-[#2D4270]', 'bg-[#C8950A]', 'bg-[#E8701F]']
  const initials = ['R', 'P', 'M', 'S', 'A']

  return (
    <section className="py-24 bg-[#F8F7F4] border-t border-[#E5E2DA]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16 items-start">
          
          {/* Left Summary */}
          <div>
            <div className="inline-block bg-[#F5E4D8] text-[#D4580A] font-outfit font-bold text-xs tracking-wider uppercase px-3 py-1.5 rounded-full mb-4">
              Client Stories
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-[#1B2A4A] leading-tight mb-4">
              What Our Clients Say
            </h2>
            <p className="text-base text-[#8A8680] leading-relaxed mb-8">
              Real results from businesses and brands across India.
            </p>

            <div className="flex items-center gap-3">
              <div className="flex -space-x-2">
                {initials.map((init, i) => (
                  <div
                    key={i}
                    className={`w-9 h-9 rounded-full ${avatarColors[i]} border-2 border-white flex items-center justify-center text-xs font-bold text-white`}
                  >
                    {init}
                  </div>
                ))}
              </div>
              <div className="text-xs font-semibold text-[#8A8680]">500+ happy clients</div>
            </div>
          </div>

          {/* Right Reviews */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            {testimonials.map((t, idx) => (
              <div
                key={idx}
                className="bg-white border border-[#E5E2DA] rounded-2xl p-7 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="text-[#C8950A] text-sm mb-3">★★★★★</div>
                <p className="text-sm sm:text-base text-[#3D3A35] leading-relaxed italic mb-4">
                  "{t.quote}"
                </p>
                <div>
                  <div className="font-outfit font-bold text-sm text-[#1B2A4A]">{t.name}</div>
                  <div className="text-xs text-[#8A8680] mt-0.5">{t.role}</div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
