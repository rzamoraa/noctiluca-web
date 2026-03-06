import React, { useState, useEffect } from 'react'
import Divider from './Divider'


const Footer = () => {
  const [scrolled, setScrolled] = useState(false)
  const socialLinks = [
    { name: 'Instagram', icon: '📷', url: 'https://instagram.com' },
    { name: 'YouTube', icon: '▶️', url: 'https://youtube.com' },
    { name: 'TikTok', icon: '🎵', url: 'https://tiktok.com' },
    { name: 'LinkedIn', icon: '💼', url: 'https://linkedin.com' },
  ]
 

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



  
  return (
    <footer className={`fixed bottom-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-noctiluca-dark/80 backdrop-blur-md py-4' : 'bg-transparent py-6'}`}>
      {/* Decorative top glow */}


  
  <div className="overflow-hidden h-2 relative pointer-events-none">
    <div className="absolute -bottom-4 w-full">
      <Divider />
    </div>
  

</div>
      
     
      
      <div className="w-full flex justify-center items-center px-4 bg-noctiluca-dark/30  ">
        <div className="w-full max-w-7xl flex flex-col items-center justify-center gap-10 backdrop-blur-3xl">
       
        {/* Brand Identity */}
        <div className="text-center space-y-3">
          <h2 className="h-5">
          </h2>
          <h3 className="text-sm md:text-base font-light tracking-[0.5em] text-noctiluca-secondary uppercase border-b border-noctiluca-primary/20 pb-4 px-12 inline-block hover:text-noctiluca-accent transition-colors duration-500 cursor-default">
            NOCTILUCA
          </h3>
          <p className="text-gray-500 text-xs md:text-sm tracking-[0.15em] font-light uppercase">
            Visual Experiences & Stage Design
          </p>
        </div>

        {/* Social Links - Minimalist & Glowy */}
        <div className="flex gap-6">
          {socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex items-center justify-center w-12 h-12 rounded-full border border-noctiluca-primary/20 bg-noctiluca-primary/5 hover:border-noctiluca-accent/50 transition-all duration-300"
              title={social.name}
            >
              {/* Internal Glow */}
              <div className="absolute inset-0 rounded-full bg-noctiluca-accent/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              {/* Icon */}
              <span className="text-lg relative z-10 opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300 grayscale group-hover:grayscale-0">
                {social.icon}
              </span>
            </a>
          ))}
        </div>

        {/* Footer Bottom */}
        <div className="flex flex-col items-center gap-3 pt-8 border-t border-white/5 w-full max-w-lg mt-2 mx-auto">
          <p className="text-gray-600 text-xs tracking-widest text-center">
            © {new Date().getFullYear()} NOCTILUCA STUDIOS. ALL RIGHTS RESERVED.
          </p>
          <p className="text-gray-700 text-[10px] tracking-[0.2em] uppercase opacity-50 hover:opacity-80 transition-opacity">
            Made with light • Buenos Aires
          </p>
        </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
