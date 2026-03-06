import React from 'react'
import loopGif from '../assets/LoopISO_1.gif'

const LoopGif = () => {
  return (
    <section className="w-screen bg-noctiluca-dark py-16 flex flex-col items-center justify-center relative overflow-hidden">

      
      {/* GIF Container */}
    
        <img 
          src={loopGif} 
          alt="Noctiluca Loop" 
          className="w-full h-40 object-contain mix-blend-screen opacity-90"
        />
  
    </section>
  )
}

export default LoopGif
