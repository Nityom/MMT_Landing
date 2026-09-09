import React, { useState, useEffect } from 'react'

export const BackToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Scroll to top"
      title="Back to top"
      className={`fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full bg-[#1B2A4A] hover:bg-[#D4580A] text-white shadow-xl hover:shadow-2xl border-2 border-white flex items-center justify-center transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#D4580A] focus:ring-offset-2 cursor-pointer group ${
        isVisible
          ? 'opacity-100 translate-y-0 pointer-events-auto hover:-translate-y-1'
          : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
    >
      <svg
        className="w-5 h-5 transition-transform duration-200 group-hover:-translate-y-0.5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2.5}
          d="M5 10l7-7m0 0l7 7m-7-7v18"
        />
      </svg>
    </button>
  )
}
