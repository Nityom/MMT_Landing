import React from 'react'
import { Link } from 'react-router-dom'
import { CONTACT_INFO } from '../constants/contact'

export const Footer: React.FC = () => {
  const serviceLinks = [
    'Rickshaw Branding',
    'E-Rickshaw Campaigns',
    'Audio PA Systems',
    'Banner Printing',
    'Calendars & Aarti Sangrah',
    'Custom Campaigns'
  ]

  return (
    <footer className="bg-[#1B2A4A] text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-14">

          {/* Brand Info (2 cols on large) */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-5 inline-block group" aria-label="MMT Agency Homepage">
              <div className="bg-white p-2 rounded-lg inline-block group-hover:opacity-90 transition-opacity">
                <img src="/logo.png" alt="MMT Agency" className="h-10 w-auto object-contain" />
              </div>
              <div>
                <div className="font-outfit font-extrabold text-lg text-white group-hover:text-[#D4580A] transition-colors">MMT Agency</div>
                <div className="text-[10px] text-white/60 tracking-wider uppercase">
                  Mrunal Multi Task Agency
                </div>
              </div>
            </Link>
            <p className="text-sm text-white/60 leading-relaxed max-w-sm mb-6">
              India's premier mobile outdoor advertising network. Taking brands directly to every colony, market, and household across 50+ cities.
            </p>
          </div>

          {/* Services (1 col) */}
          <div>
            <h4 className="font-outfit font-bold text-xs uppercase tracking-widest text-white/50 mb-5">
              Services
            </h4>
            <ul className="flex flex-col gap-2.5 text-sm text-white/70">
              {serviceLinks.map((s) => (
                <li key={s}>
                  <Link to="/#services" className="hover:text-white transition-colors">
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact (1 col) */}
          <div>
            <h4 className="font-outfit font-bold text-xs uppercase tracking-widest text-white/50 mb-5">
              Contact
            </h4>
            <ul className="flex flex-col gap-3 text-sm text-white/70">
              <li className="flex items-start gap-2.5">
                <span>📍</span>
                <span className="text-xs leading-relaxed text-white/70">
                  {CONTACT_INFO.address}
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <span>📞</span>
                <a href={`tel:${CONTACT_INFO.callPhoneRaw}`} className="hover:text-white transition-colors">
                  {CONTACT_INFO.callPhone}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <span>💬</span>
                <a
                  href={CONTACT_INFO.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  {CONTACT_INFO.whatsappPhone} (WhatsApp)
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <span>✉️</span>
                <a href={`mailto:${CONTACT_INFO.email}`} className="hover:text-white transition-colors">
                  {CONTACT_INFO.email}
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/40">
          <p>© 2026 MMT Advertising Agency. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/privacy-policy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>

      </div>
    </footer>
  )
}
