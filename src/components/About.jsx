import React from 'react'

const About = () => {
  return (
    <section
      id="about"
      className="w-full bg-noctiluca-dark flex flex-col items-center h-[20vh] md:h-[50vh] justify-center py-20 px-8 relative overflow-hidden"
    >
      {/* Background Ambience */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-noctiluca-primary/5 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-noctiluca-accent/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="w-full max-w-5xl mx-auto flex flex-col items-center text-center z-10 space-y-[4vw] md:space-y-16 px-2 md:px-0 mt-8 md:mt-0">
        
        {/* Header */}
        <h2 className="text-[2.5vw] sm:text-[2vw] md:text-base font-light tracking-[0.5em] text-noctiluca-secondary uppercase mb-[2vw] md:mb-4 border-b border-noctiluca-primary/20 pb-[1.5vw] md:pb-4 px-[6vw] md:px-12 whitespace-nowrap">
          Who We Are
        </h2>
        
        {/* Main Statement - Saltos de línea forzados y tamaños escalables */}
        <h1 className="text-[6vw] sm:text-[4.5vw] md:text-5xl lg:text-6xl font-medium text-white leading-[1.3] md:leading-tight tracking-wide whitespace-nowrap">
          <span className="text-noctiluca-primary opacity-80">We craft</span> visual experiences that<br />
          transform events into <span className="italic font-light text-noctiluca-accent/90">memorable</span><br />
          <span className="italic font-light text-noctiluca-accent/90">moments</span>.
        </h1>

        {/* Core Pillars */}
        <div className="grid grid-cols-3 gap-[2vw] md:gap-24 w-full pt-[4vw] md:pt-12 border-t border-white/5 mx-auto">
           {[
             { title: 'Development', desc: 'Technical Precision', color: 'text-noctiluca-primary' },
             { title: 'Design', desc: 'Creative Vision', color: 'text-noctiluca-accent' },
             { title: 'Visuals', desc: 'Immersive Impact', color: 'text-noctiluca-secondary' }
           ].map((item) => (
             <div key={item.title} className="flex flex-col items-center group cursor-default text-center">
               <h3 className={`text-[3.8vw] sm:text-[3vw] md:text-3xl font-bold tracking-[0.05em] md:tracking-[0.15em] mb-[1vw] md:mb-2 transition-all duration-500 group-hover:scale-110 whitespace-nowrap ${item.color}`}>
                 {item.title}
               </h3>
               <p className="text-gray-500 text-[1.6vw] sm:text-[1.2vw] md:text-xs tracking-[0.1em] md:tracking-[0.2em] uppercase opacity-60 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                 {item.desc}
               </p>
             </div>
           ))}
        </div>

        {/* Secondary Text */}
        <p className="text-[2vw] sm:text-[1.5vw] md:text-base text-gray-400 font-light tracking-widest text-center leading-relaxed md:leading-relaxed opacity-80 whitespace-nowrap">
          From conceptualization to execution, we elevate your vision to the highest level,<br />
          creating atmospheres that resonate with every beat.
        </p>
      </div>
    </section>
  )
}

export default About
