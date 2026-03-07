import React from 'react'
import loopISO from '../assets/LoopISO_1.gif'

// Logos importados directamente de assets/logos/
import ARJONA from '../assets/logos/ARJONA.svg'
import CRISMJ from '../assets/logos/CRISMJ.svg'
import HUMBE from '../assets/logos/HUMBE.svg'
import JULION from '../assets/logos/JULION ALVAREZ.svg'
import LATIN_GRAMMY from '../assets/logos/LATIN_GRAMMY.svg'
import LUISMIGUEL from '../assets/logos/LUISMIGUEL.svg'
import MANA from '../assets/logos/MANA.svg'
import MARCO_ANTONIO from '../assets/logos/MARCO ANTONIO SOLIS.svg'
import PAULINA_RUBIO from '../assets/logos/PAULINA RUBIO.svg'
import SUPERBOWL from '../assets/logos/SUPERBOWL.svg'
import VINA23 from '../assets/logos/VINA23.svg'
import VINA24 from '../assets/logos/VINA24.svg'
import VINA25 from '../assets/logos/VINA25.svg'
import VINA26 from '../assets/logos/VINA26.svg'
import YEISON from '../assets/logos/YEISON JIMENEZ.svg'
import CHAYANNE from '../assets/logos/CHAYANNE.svg'

import SUPERPERBOWL2 from '../assets/logos/SUPERBOWL2.svg'
import PABLOCHILLE from '../assets/logos/PABLOCHILLE.svg'
import KIDVOODOO from '../assets/logos/KIDDVOODOO.svg'
import ANAGABRIEL from '../assets/logos/ANAGABRIEL.svg'
import TELETONV2 from '../assets/logos/TELETONV2.svg'




const ClientsTicker = () => {
  // Array estructurado con los clientes confiables para hacer el componente escalable
  const clients = [
    { name: 'Latin Grammy', logo: LATIN_GRAMMY, text: 'AWARDS' },
    { name: 'Viña 23', logo: VINA23, text: 'VIÑA DEL MAR' },
    { name: 'Viña 24', logo: VINA24, text: 'VIÑA DEL MAR' },
    { name: 'Viña 25', logo: VINA25, text: 'VIÑA DEL MAR' },
    { name: 'Viña 26', logo: VINA26, text: 'VIÑA DEL MAR' },
    { name: 'Arjona', logo: ARJONA, text: 'TOUR' },
    { name: 'Chayanne', logo: CHAYANNE, text: 'TOUR' },
    { name: 'Cris MJ', logo: CRISMJ, text: 'ARTIST' },
    { name: 'Humbe', logo: HUMBE, text: 'TOUR' },
    { name: 'Julion Alvarez', logo: JULION, text: 'TOUR' },
    { name: 'Luis Miguel', logo: LUISMIGUEL, text: 'TOUR' },
    { name: 'Mana', logo: MANA, text: 'TOUR' },
    { name: 'Marco Antonio Solis', logo: MARCO_ANTONIO, text: 'TOUR' },
    { name: 'Paulina Rubio', logo: PAULINA_RUBIO, text: 'TOUR' },
    { name: 'Superbowl', logo: SUPERBOWL, text: 'EVENT' },
    { name: 'Yeison Jimenez', logo: YEISON, text: 'ARTIST' },
    { name: 'Pablo Chill-E', logo: PABLOCHILLE, text: 'ARTIST' },
    { name: 'Kidd Voodoo', logo: KIDVOODOO, text: 'ARTIST' },
    { name: 'Ana Gabriel', logo: ANAGABRIEL, text: 'ARTIST' },
    { name: 'Superbowl 2', logo: SUPERPERBOWL2, text: 'EVENT' },
    { name: 'Teleton V2', logo: TELETONV2, text: 'CHILE' },
  ] 


  // Duplicamos el array para crear un loop infinito continuo (Marquee/Ticker effect)
  const duplicatedClients = [...clients, ...clients]

  return (
    
    <div className="w-full bg-noctiluca-dark  border-y border-white/5 relative overflow-hidden flex flex-col items-center">
      {/* Decorative glows */}
  
        <h3 className="text-[10px] md:text-xs tracking-[0.4em] uppercase text-gray-500 font-light">
          SELECTED <span className="text-noctiluca-primary"> CLIENTS</span>
        </h3>
   

      {/* Ticker Container */}
      <div className="w-full relative flex group ">
        <div className="flex animate-[scroll_40s_linear_infinite] group-hover:[animation-play-state:paused]">
          {duplicatedClients.map((client, index) => (
            <div 
              key={index} 
              className="w-32 h-32 md:w-50 md:h-50 relative flex items-center justify-center grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-500 cursor-default"
            >
              <div className="rounded-md w-20 h-20 md:w-30 md:h-30 flex items-center justify-center"> 
                {client.logo && (
                  <img src={client.logo} alt={`${client.name} Logo`} className="w-full h-full object-contain" />
                )}
             </div>
              
            </div>
            
          ))}
          
        </div>
        
      </div>




    </div>
  )
}

export default ClientsTicker
