import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { CONTACT_INFO } from '../constants/contact'

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { label: 'Services', href: '/#services' },
    { label: 'Coverage', href: '/#coverage' },
    { label: 'Our Work', href: '/#work' },
    { label: 'Why MMT', href: '/#about' },
    { label: 'Our Team', href: '/#team' },
    { label: 'Contact', href: '/#contact' },
  ]

  return (
    <header
      id="navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || location.pathname !== '/'
          ? 'bg-white/95 backdrop-blur-md border-b border-[#E5E2DA] shadow-sm py-2'
          : 'bg-transparent py-3'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between min-h-[82px]">
        {/* Brand Logo */}
        <Link to="/" className="flex items-center" aria-label="Mrunal Multi Task Agency">
          <img
            src="/logo.png"
            alt="Mrunal Multi Task Agency"
            className={`w-auto object-contain transition-all duration-300 ${
              isScrolled || location.pathname !== '/' ? 'h-16 md:h-[68px]' : 'h-16 md:h-[76px]'
            }`}
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className="font-outfit font-semibold text-sm text-[#3D3A35] hover:text-[#D4580A] transition-colors relative py-1 group"
            >
              {link.label}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#D4580A] rounded transition-all duration-200 group-hover:w-full" />
            </Link>
          ))}
        </nav>

        {/* CTA Buttons */}
        <div className="hidden sm:flex items-center gap-4">
          <a
            href={`tel:${CONTACT_INFO.callPhoneRaw}`}
            className="font-outfit font-semibold text-sm text-[#1B2A4A] hover:text-[#D4580A] transition-colors flex items-center gap-2"
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.24h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.84a16 16 0 0 0 6 6l1.06-.94a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 21.73 16.92z" />
            </svg>
            <span>{CONTACT_INFO.callPhone}</span>
          </a>

          <Link
            to="/#contact"
            className="bg-[#D4580A] hover:bg-[#E8701F] text-white font-outfit font-bold text-sm px-5 py-2.5 rounded-lg shadow-sm hover:shadow-md transition-all duration-200"
          >
            Get Free Quote
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-[#1B2A4A] focus:outline-none"
          aria-label="Toggle Navigation Menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            {mobileMenuOpen ? (
              <path d="M18 6L6 18M6 6l12 12" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-[#E5E2DA] px-6 py-5 shadow-lg">
          <nav className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="font-outfit font-semibold text-base text-[#1B2A4A] py-2 border-b border-[#F2F0EB]"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="flex flex-col gap-3 mt-5">
            <a
              href={`tel:${CONTACT_INFO.callPhoneRaw}`}
              className="flex items-center justify-center gap-2 border border-[#E5E2DA] font-outfit font-bold text-sm text-[#1B2A4A] py-3 rounded-lg"
            >
              📞 Call {CONTACT_INFO.callPhone}
            </a>
            <a
              href={CONTACT_INFO.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-[#25D366] text-white font-outfit font-bold text-sm py-3 rounded-lg"
            >
              💬 WhatsApp Us
            </a>
            <Link
              to="/#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="text-center bg-[#D4580A] text-white font-outfit font-bold text-sm py-3 rounded-lg"
            >
              Get Free Quote
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
