import React, { useEffect } from 'react'
import type { GalleryItem } from './Gallery'

interface LightboxModalProps {
  item: GalleryItem | null
  onClose: () => void
}

export const LightboxModal: React.FC<LightboxModalProps> = ({ item, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    if (item) {
      document.body.style.overflow = 'hidden'
      window.addEventListener('keydown', handleKeyDown)
    }
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [item, onClose])

  if (!item) return null

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 transition-all"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative bg-[#111a2e] rounded-2xl overflow-hidden max-w-4xl w-full border border-white/10 shadow-2xl flex flex-col max-h-[90vh]"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close Preview"
          className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-black/60 hover:bg-[#D4580A] text-white flex items-center justify-center text-xl font-bold transition-colors"
        >
          &times;
        </button>

        {/* Image Display */}
        <div className="flex-1 bg-black flex items-center justify-center overflow-hidden min-h-[300px]">
          <img
            src={item.img}
            alt={item.title}
            className="max-h-[70vh] w-auto max-w-full object-contain"
          />
        </div>

        {/* Caption & Quick CTA */}
        <div className="p-5 bg-[#1B2A4A] border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <h3 className="font-outfit font-bold text-base text-white">{item.title}</h3>
            <p className="text-xs text-white/70 mt-0.5">{item.desc}</p>
          </div>
          <a
            href="#contact"
            onClick={onClose}
            className="bg-[#D4580A] hover:bg-[#E8701F] text-white font-outfit font-bold text-xs px-5 py-2.5 rounded-lg whitespace-nowrap transition-colors"
          >
            Enquire for Similar Campaign →
          </a>
        </div>
      </div>
    </div>
  )
}
