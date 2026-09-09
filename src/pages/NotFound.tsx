import React from 'react'
import { Link } from 'react-router-dom'
import { CONTACT_INFO } from '../constants/contact'

export const NotFound: React.FC = () => {
  return (
    <div className="min-h-[85vh] pt-32 pb-20 bg-[#FAF9F5] flex items-center justify-center">
      <div className="max-w-2xl mx-auto px-6 text-center">
        
        {/* Animated Badge & Icon */}
        <div className="relative inline-block mb-6">
          <div className="w-24 h-24 sm:w-28 sm:h-28 mx-auto rounded-3xl bg-gradient-to-br from-[#FFF5EE] to-[#FFE0CC] border border-[#D4580A]/20 flex items-center justify-center shadow-lg relative z-10">
            <span className="text-5xl sm:text-6xl animate-bounce">🛺</span>
          </div>
          <div className="absolute -inset-2 bg-[#D4580A]/10 rounded-full blur-xl -z-0" />
        </div>

        {/* 404 Headline */}
        <div className="font-outfit font-black text-6xl sm:text-8xl text-[#1B2A4A] tracking-tight leading-none mb-4">
          4<span className="text-[#D4580A]">0</span>4
        </div>

        <div className="inline-flex items-center gap-2 bg-[#D4580A]/10 text-[#D4580A] text-xs font-outfit font-bold uppercase tracking-wider px-4 py-1.5 rounded-full mb-5">
          📍 Route Not Found
        </div>

        <h1 className="font-outfit font-extrabold text-2xl sm:text-3xl text-[#1B2A4A] mb-4">
          Looks Like This Campaign Vehicle Took a Wrong Turn!
        </h1>

        <p className="text-sm sm:text-base text-[#3D3A35]/80 leading-relaxed max-w-lg mx-auto mb-8">
          The page or route you were looking for doesn't exist, has been rescheduled, or was moved to another location on our network.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 mb-12">
          <Link
            to="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 font-outfit font-bold text-sm bg-[#D4580A] hover:bg-[#E8701F] text-white px-7 py-3.5 rounded-xl shadow-md hover:shadow-lg transition-all"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
              <polyline points="9 22 9 12 15 12 15 22" />
            </svg>
            Return to Homepage
          </Link>
          <Link
            to="/#services"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 font-outfit font-semibold text-sm bg-white hover:bg-[#FAF9F5] text-[#1B2A4A] border border-[#E5E2DA] px-6 py-3.5 rounded-xl shadow-sm transition-all"
          >
            Explore Services
          </Link>
        </div>

        {/* Quick Help Card */}
        <div className="bg-white border border-[#E5E2DA] rounded-2xl p-6 shadow-sm text-left">
          <div className="font-outfit font-bold text-sm text-[#1B2A4A] mb-3 flex items-center justify-between">
            <span>Popular Destinations</span>
            <span className="text-xs text-[#3D3A35]/50 font-normal">Need assistance?</span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 text-xs font-semibold text-[#1B2A4A]">
            <Link to="/#services" className="p-3 bg-[#FAF9F5] rounded-xl hover:bg-[#FFF5EE] hover:text-[#D4580A] transition-colors border border-[#E5E2DA]/60 text-center">
              🛺 Rickshaw Ads
            </Link>
            <Link to="/#services" className="p-3 bg-[#FAF9F5] rounded-xl hover:bg-[#FFF5EE] hover:text-[#D4580A] transition-colors border border-[#E5E2DA]/60 text-center">
              📖 Aarti Sangrah
            </Link>
            <Link to="/#coverage" className="p-3 bg-[#FAF9F5] rounded-xl hover:bg-[#FFF5EE] hover:text-[#D4580A] transition-colors border border-[#E5E2DA]/60 text-center">
              📍 Fleet Network
            </Link>
            <Link to="/#team" className="p-3 bg-[#FAF9F5] rounded-xl hover:bg-[#FFF5EE] hover:text-[#D4580A] transition-colors border border-[#E5E2DA]/60 text-center">
              👥 Leadership
            </Link>
          </div>

          <div className="mt-4 pt-4 border-t border-[#E5E2DA] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#3D3A35]/70">
            <span>Direct Coordinator Helpline:</span>
            <div className="flex items-center gap-4">
              <a href={`tel:${CONTACT_INFO.callPhoneRaw}`} className="font-bold text-[#1B2A4A] hover:text-[#D4580A] transition-colors">
                📞 {CONTACT_INFO.callPhone}
              </a>
              <span>•</span>
              <a href={CONTACT_INFO.whatsappLink} target="_blank" rel="noopener noreferrer" className="font-bold text-[#25D366] hover:underline">
                💬 WhatsApp
              </a>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
