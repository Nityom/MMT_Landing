import React from 'react'

export const FloatingContact: React.FC = () => {
  return (
    <div
      id="floating-contact"
      className="fixed bottom-6 right-6 z-40 flex flex-col gap-3 items-end"
    >
      {/* WhatsApp Action */}
      {/* <a
        href={CONTACT_INFO.whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="flex items-center gap-2.5 bg-[#25D366] hover:bg-[#20bd5a] text-white px-4 py-3 sm:py-3.5 sm:px-5 rounded-full shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-200 border-2 border-white font-outfit font-bold text-xs sm:text-sm"
      >
        <span className="text-xl leading-none">💬</span>
        <span className="hidden sm:inline">WhatsApp Chat</span>
      </a> */}

      {/* Call Action */}
      {/* <a
        href={`tel:${CONTACT_INFO.callPhoneRaw}`}
        aria-label="Call MMT Agency"
        className="flex items-center gap-2.5 bg-[#1B2A4A] hover:bg-[#D4580A] text-white px-4 py-3 sm:py-3.5 sm:px-5 rounded-full shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-200 border-2 border-white font-outfit font-bold text-xs sm:text-sm"
      >
        <span className="text-lg leading-none">📞</span>
        <span className="hidden sm:inline">Call: {CONTACT_INFO.callPhone}</span>
      </a> */}
    </div>
  )
}
