import React, { useState, useEffect } from 'react'
import { Hero } from '../components/Hero'
import { Services } from '../components/Services'
import { Stats } from '../components/Stats'
import { Coverage } from '../components/Coverage'
import { Gallery, type GalleryItem } from '../components/Gallery'
import { WhyMMT } from '../components/WhyMMT'
import { Testimonials } from '../components/Testimonials'
import { Team } from '../components/Team'
import { Contact } from '../components/Contact'
import { LightboxModal } from '../components/LightboxModal'

export const Home: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null)

  useEffect(() => {
    // Scroll reveal observer
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('visible')
            io.unobserve(e.target)
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    )

    document.querySelectorAll('.animate-on-scroll').forEach((el, i) => {
      ;(el as HTMLElement).style.transitionDelay = `${(i % 6) * 80}ms`
      io.observe(el)
    })

    return () => io.disconnect()
  }, [])

  return (
    <>
      <Hero />
      <Services />
      <Stats />
      <Coverage />
      <Gallery onSelectImage={(item) => setSelectedImage(item)} />
      <WhyMMT />
      <Testimonials />
      <Team />
      <Contact />
      <LightboxModal item={selectedImage} onClose={() => setSelectedImage(null)} />
    </>
  )
}
