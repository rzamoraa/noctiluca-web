import React from 'react'

const About = () => {
  return (
    <section
      id="about"
      className="w-full bg-noctiluca-dark flex flex-col items-center h-[50vh] justify-center py-20 px-8 relative overflow-hidden"
    >
      {/* Background Ambience */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-noctiluca-primary/5 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-noctiluca-accent/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-5xl mx-auto flex flex-col items-center text-center z-10 space-y-6 md:space-y-16">
        
        {/* Header */}
        <h2 className="text-xs md:text-base font-light tracking-[0.3em] md:tracking-[0.5em] text-noctiluca-secondary uppercase mb-2 md:mb-4 border-b border-noctiluca-primary/20 pb-2 md:pb-4 px-6 md:px-12">
          Who We Are
        </h2>
        
        {/* Main Statement */}
        <h1 className="text-lg sm:text-2xl md:text-5xl lg:text-6xl font-medium text-white leading-tight max-w-4xl tracking-wide px-4 md:px-0">
          <span className="text-noctiluca-primary opacity-80">We craft</span> visual experiences that transform events into <span className="italic font-light text-noctiluca-accent/90">memorable moments</span>.
        </h1>

        {/* Core Pillars */}
        <div className="grid grid-cols-3 gap-2 md:gap-24 w-full pt-6 md:pt-12 border-t border-white/5 mx-auto px-2 md:px-0">
           {[
             { title: 'Development', desc: 'Technical Precision', color: 'text-noctiluca-primary' },
             { title: 'Design', desc: 'Creative Vision', color: 'text-noctiluca-accent' },
             { title: 'Visuals', desc: 'Immersive Impact', color: 'text-noctiluca-secondary' }
           ].map((item) => (
             <div key={item.title} className="flex flex-col items-center group cursor-default text-center">
               <h3 className={`text-[10px] sm:text-sm md:text-3xl font-bold tracking-wider md:tracking-[0.15em] mb-1 md:mb-2 transition-all duration-500 group-hover:scale-110 ${item.color}`}>
                 {item.title}
               </h3>
               <p className="text-gray-500 text-[6px] sm:text-[8px] md:text-xs tracking-wider md:tracking-[0.2em] uppercase opacity-60 group-hover:opacity-100 transition-opacity">
                 {item.desc}
               </p>
             </div>
           ))}
        </div>

        {/* Secondary Text */}
        <p className="text-[10px] md:text-base text-gray-400 font-light tracking-widest max-w-2xl text-center leading-relaxed opacity-80 px-4 md:px-0">
          From conceptualization to execution, we elevate your vision to the highest level, creating atmospheres that resonate with every beat.
        </p>
      </div>
    </section>
  )
}

export default About
