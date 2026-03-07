import React from 'react'
import ClientsName from './ClientsName'
import noctilucaLogo from '../assets/noctiluca_logo.png'

const Home = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <section
      id="home"
      className=" mt-16 bg-noctiluca-dark  flex flex-col items-center justify-center relative overflow-hidden"
    >
      {/* Video de fondo */}
      <div className="absolute inset-0 w-full h-full z-0">
        <div className="w-full h-full bg-noctiluca-dark/30 flex items-center justify-center">
          {/* Placeholder para video - reemplazar con video real */}
          <div className="w-full h-full bg-black/40 flex items-center justify-center">
             <div className="absolute inset-0 bg-linear-to-b from-noctiluca-dark/80 via-transparent to-noctiluca-dark/80"></div>
          </div>
        </div>
      </div>

      {/* Contenido principal */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full gap-8 md:gap-12 px-6 w-full max-w-7xl mx-auto">
        
        {/* Brand Main */}
        <div className="flex flex-col items-center gap-4 animate-fade-in-up mt-auto">
          <img src={noctilucaLogo} alt="Noctiluca Logo" className="  object-contain" />
        
          <p className="text-noctiluca-primary text-xs md:text-sm tracking-[0.5em] md:tracking-[0.8em] uppercase text-center font-light">
            Visual Production & Design
          </p>
        </div>

        {/* Navigation - Minimalist */}
        <div className="hidden md:flex flex-col md:flex-row gap-8 md:gap-16 items-center pt-8">
          {['About', 'Portfolio', 'Contact'].map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item.toLowerCase())}
              className="text-gray-400 hover:text-noctiluca-accent text-sm tracking-[0.2em] uppercase transition-all duration-500 hover:scale-110 relative group"
            >
              {item}
              <span className="absolute -bottom-2 left-1/2 w-0 h-px bg-noctiluca-accent group-hover:w-full group-hover:left-0 transition-all duration-500"></span>
            </button>
          ))}
        </div>
        
        {/* Ticker de Clientes */}
        <div className=" mx-52 w-full ">
          <ClientsName />
        </div>
      </div>

      
    </section>
  )
}

export default Home
