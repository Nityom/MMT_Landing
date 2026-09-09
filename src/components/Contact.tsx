import React, { useState } from 'react'
import { CONTACT_INFO } from '../constants/contact'

export const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    business: '',
    city: '',
    service: '',
    budget: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({
        name: '',
        phone: '',
        business: '',
        city: '',
        service: '',
        budget: '',
        message: ''
      })
    }, 6000)
  }

  const contactCards = [
    {
      icon: '📞',
      label: 'Call Us Directly',
      val: CONTACT_INFO.callPhone,
      sub: 'Mon-Sun: 9 AM - 9 PM',
      href: `tel:${CONTACT_INFO.callPhoneRaw}`,
      target: '_self'
    },
    {
      icon: '💬',
      label: 'WhatsApp Chat',
      val: CONTACT_INFO.whatsappPhone,
      sub: 'Instant quotes & route availability',
      href: CONTACT_INFO.whatsappLink,
      target: '_blank'
    },
    {
      icon: '✉️',
      label: 'Email Enquiries',
      val: CONTACT_INFO.email,
      sub: 'Fast response within 24 hours',
      href: `mailto:${CONTACT_INFO.email}`,
      target: '_self'
    },
    {
      icon: '📍',
      label: 'Head Office',
      val: CONTACT_INFO.address,
      sub: 'Get Directions on Google Maps ↗',
      href: CONTACT_INFO.mapsLink,
      target: '_blank'
    }
  ]

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Info Column (5 cols) */}
          <div className="lg:col-span-5">
            <div className="inline-block bg-[#F5E4D8] text-[#D4580A] font-outfit font-bold text-xs tracking-wider uppercase px-3 py-1.5 rounded-full mb-4">
              Get In Touch
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1B2A4A] leading-tight mb-5">
              Start Your Campaign<br />Today
            </h2>
            <p className="text-base text-[#8A8680] leading-relaxed mb-8">
              Tell us your target area, service type, and campaign goals. Our team will get back with a custom proposal within 24 hours.
            </p>

            {/* Channels List */}
            <div className="flex flex-col gap-4 mb-8">
              {contactCards.map((c, idx) => (
                <a
                  key={idx}
                  href={c.href}
                  target={c.target}
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 p-4 rounded-xl border border-[#E5E2DA] bg-[#F8F7F4] hover:border-[#D4580A] hover:bg-[#F5E4D8]/30 transition-all duration-200 group"
                >
                  <div className="w-11 h-11 bg-white rounded-lg flex items-center justify-center text-xl shrink-0 shadow-sm group-hover:scale-105 transition-transform mt-0.5">
                    {c.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-[11px] font-bold text-[#8A8680] uppercase tracking-wider mb-0.5">
                      {c.label}
                    </div>
                    <div className="font-outfit font-bold text-sm sm:text-base text-[#1B2A4A] leading-snug break-words">
                      {c.val}
                    </div>
                    {c.sub && <div className="text-xs text-[#8A8680] mt-1">{c.sub}</div>}
                  </div>
                </a>
              ))}
            </div>

            {/* Quick Response Box */}
            <div className="p-6 rounded-2xl bg-[#1B2A4A] text-white relative overflow-hidden shadow-md">
              <div className="absolute -right-6 -top-6 w-24 h-24 rounded-full bg-[#D4580A]/20 pointer-events-none" />
              <div className="font-outfit font-bold text-sm mb-1.5 flex items-center gap-2">
                <span>⚡</span> Quick Response Guaranteed
              </div>
              <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
                We respond to all enquiries within 24 hours. Campaigns can go live within 48 hours of final approval.
              </p>
            </div>
          </div>

          {/* Right Form Column (7 cols) */}
          <div className="lg:col-span-7 bg-[#F8F7F4] border border-[#E5E2DA] rounded-3xl p-8 sm:p-12 shadow-sm">
            <h3 className="font-outfit font-bold text-2xl text-[#1B2A4A] mb-8">
              Campaign Enquiry Form
            </h3>

            {submitted ? (
              <div className="p-8 rounded-2xl bg-[#16a34a]/10 border border-[#16a34a]/30 text-center animate-on-scroll visible">
                <div className="text-4xl mb-3">✅</div>
                <h4 className="font-outfit font-bold text-xl text-[#16a34a] mb-2">
                  Enquiry Received Successfully!
                </h4>
                <p className="text-sm text-[#3D3A35] max-w-md mx-auto">
                  Thank you for reaching out to MMT Advertising Agency. Our campaign director will contact you within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold font-outfit text-[#1B2A4A] uppercase tracking-wider mb-2">
                      Full Name <span className="text-[#D4580A]">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Ramesh Gupta"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 bg-white border border-[#E5E2DA] rounded-xl text-sm focus:outline-none focus:border-[#D4580A] focus:ring-1 focus:ring-[#D4580A]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold font-outfit text-[#1B2A4A] uppercase tracking-wider mb-2">
                      Phone Number <span className="text-[#D4580A]">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 bg-white border border-[#E5E2DA] rounded-xl text-sm focus:outline-none focus:border-[#D4580A] focus:ring-1 focus:ring-[#D4580A]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold font-outfit text-[#1B2A4A] uppercase tracking-wider mb-2">
                      Business / Brand Name
                    </label>
                    <input
                      type="text"
                      placeholder="Your Company Name"
                      value={formData.business}
                      onChange={(e) => setFormData({ ...formData, business: e.target.value })}
                      className="w-full px-4 py-3 bg-white border border-[#E5E2DA] rounded-xl text-sm focus:outline-none focus:border-[#D4580A] focus:ring-1 focus:ring-[#D4580A]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold font-outfit text-[#1B2A4A] uppercase tracking-wider mb-2">
                      Target City / Area <span className="text-[#D4580A]">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Wardha, Nagpur..."
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      className="w-full px-4 py-3 bg-white border border-[#E5E2DA] rounded-xl text-sm focus:outline-none focus:border-[#D4580A] focus:ring-1 focus:ring-[#D4580A]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold font-outfit text-[#1B2A4A] uppercase tracking-wider mb-2">
                      Service Required <span className="text-[#D4580A]">*</span>
                    </label>
                    <select
                      required
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-4 py-3 bg-white border border-[#E5E2DA] rounded-xl text-sm focus:outline-none focus:border-[#D4580A] focus:ring-1 focus:ring-[#D4580A]"
                    >
                      <option value="">Select a service</option>
                      <option>Rickshaw Branding</option>
                      <option>E-Rickshaw Campaign</option>
                      <option>Audio Recording & PA System</option>
                      <option>Banner Design & Print</option>
                      <option>Calendars & Aarti Sangrah Publishing</option>
                      <option>Custom Area Saturation</option>
                      <option>Combo Package (Multiple Services)</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-bold font-outfit text-[#1B2A4A] uppercase tracking-wider mb-2">
                      Approx. Budget
                    </label>
                    <select
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      className="w-full px-4 py-3 bg-white border border-[#E5E2DA] rounded-xl text-sm focus:outline-none focus:border-[#D4580A] focus:ring-1 focus:ring-[#D4580A]"
                    >
                      <option value="">Select budget range</option>
                      <option>Under ₹10,000</option>
                      <option>₹10,000 – ₹25,000</option>
                      <option>₹25,000 – ₹50,000</option>
                      <option>₹50,000 – ₹1,00,000</option>
                      <option>₹1,00,000+</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold font-outfit text-[#1B2A4A] uppercase tracking-wider mb-2">
                    Campaign Details
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Tell us about your campaign goals, timeline, specific target localities..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 bg-white border border-[#E5E2DA] rounded-xl text-sm focus:outline-none focus:border-[#D4580A] focus:ring-1 focus:ring-[#D4580A] resize-y min-h-[100px]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#D4580A] hover:bg-[#E8701F] text-white font-outfit font-bold text-base py-4 rounded-xl shadow-md hover:shadow-lg transition-all"
                >
                  Submit Campaign Request →
                </button>

                <p className="text-xs text-[#8A8680] text-center">
                  By submitting, you agree to our Privacy Policy. We keep your information strictly confidential.
                </p>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  )
}
