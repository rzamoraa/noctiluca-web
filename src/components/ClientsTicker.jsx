import React from 'react'
import loopISO from '../assets/LoopISO_1.gif'
import LATIN_GRAMMY from '../assets/logos/LATIN_GRAMMY.svg' 
import TELETON from '../assets/logos/TELETON.svg'
import VINA23 from '../assets/logos/VINA23.svg'
import VINA25 from '../assets/logos/VINA25.svg'


const ClientsTicker = () => {
  // Array estructurado con los clientes confiables para hacer el componente escalable
  const clients = [
    { name: 'Festival de Viña', logo: LATIN_GRAMMY, text: 'VIÑA DEL MAR' },
    { name: 'Teleton', logo: TELETON, text: 'CHILE' },
    { name: 'Viña 23', logo: VINA23, text: 'VIÑA DEL MAR' },
    { name: 'Viña 25', logo: VINA25, text: 'VIÑA DEL MAR' },

    
   
  ]

  // Duplicamos el array para crear un loop infinito continuo (Marquee/Ticker effect)
  const duplicatedClients = [...clients, ...clients]

  return (
    
    <div className="w-full bg-noctiluca-dark  border-y border-white/5 relative overflow-hidden flex flex-col items-center">
      {/* Decorative glows */}


    


      
      
  
        <h3 className="text-[10px] md:text-xs tracking-[0.4em] uppercase text-gray-500 font-light">
          CONFÍAN EN <span className="text-noctiluca-primary">NOSTROS</span>
        </h3>
   

      {/* Ticker Container */}
      <div className="w-full relative flex group ">
        <div className="flex animate-[scroll_40s_linear_infinite] group-hover:[animation-play-state:paused]">
          {duplicatedClients.map((client, index) => (
            <div 
              key={index} 
              className="w-32 h-32 md:w-60 md:h-60 relative flex items-center justify-center grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-500 cursor-default"
            >
              <div className="rounded-md w-20 h-20 md:w-48 md:h-48 flex items-center justify-center"> 
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
