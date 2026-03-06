import React, { useState, useEffect } from 'react'

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled)
      }
    }

    // Add scroll listener to the scroll container if possible, or window
    // Since we are using snap scroll on a container, we might need to listen to that container
    const scrollContainer = document.querySelector('.scroll-container')
    if (scrollContainer) {
      scrollContainer.addEventListener('scroll', handleScroll)
    } else {
      window.addEventListener('scroll', handleScroll)
    }

    return () => {
      if (scrollContainer) {
        scrollContainer.removeEventListener('scroll', handleScroll)
      } else {
        window.removeEventListener('scroll', handleScroll)
      }
    }
  }, [scrolled])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-noctiluca-dark/80 backdrop-blur-md py-4' : 'bg-transparent py-6'}`}>
      <div className="w-full flex justify-center items-center">
        <div className="flex flex-row justify-center items-center gap-8 md:gap-16 w-full max-w-7xl px-4">
          {['About', 'Portfolio', 'Contact'].map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item.toLowerCase())}
              className="text-gray-300 hover:text-white text-xs md:text-sm tracking-[0.2em] uppercase transition-colors duration-300 font-light hover:drop-shadow-[0_0_8px_rgba(0,213,255,0.8)]"
            >
              {item}
            </button>
          ))}
        </div>
        
      </div>
      
      {/* Bottom gradient line for navbar when scrolled */}
      <div className={`absolute bottom-0 left-0 w-full h-px bg-linear-to-r from-transparent via-noctiluca-primary/50 to-transparent transition-opacity duration-300 ${scrolled ? 'opacity-100' : 'opacity-0'}`}></div>
    </nav>
  )
}

export default Navbar
