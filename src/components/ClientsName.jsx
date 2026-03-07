import React from 'react'

const ClientsName = () => {
  // Array estructurado con los clientes confiables para hacer el componente escalable
  const clients = [
    { name: 'Festival de Viña', text: '| VIÑA DEL MAR |' },
    { name: 'Teletón', text: '| TELETÓN |' },
    { name: 'Latin Grammy', text: '| LATIN GRAMMY |' },
    { name: 'Ana Gabriel', text: '| ANA GABRIEL |' },
    { name: 'Maná', text: '| MANÁ |' },
    { name: 'Humbe', text: '| HUMBE |' },
    { name: 'Ricardo Arjona', text: '| RICARDO ARJONA |' },
    { name: 'Julión Álvarez', text: '| JULIÓN ÁLVAREZ |' },
    { name: 'Super Bowl Halftime', text: '| BAD BUNNY | SUPER BOWL HALFTIME |' },
    { name: 'Yeison Jimenez', text: '| YEISON JIMENEZ |' },
    { name: 'Marco Antonio Solís', text: '| MARCO A. SOLÍS |' },
    { name: 'Kid Voodoo', text: '| KID VOODOO |' },
    { name: 'Cris MJ', text: '| CRIS MJ |' }
  ]

  // Duplicamos el array para crear un loop infinito continuo (Marquee/Ticker effect)
  const duplicatedClients = [...clients, ...clients]

  return (
    <div className="w-full bg-noctiluca-dark  border-y border-white/5 relative overflow-hidden flex flex-col items-center">
      {/* Decorative glows */}
      <div className="absolute left-0 top-0 w-32 h-full bg-linear-to-r from-noctiluca-dark to-transparent z-10 point-events-none"></div>
      <div className="absolute right-0 top-0 w-32 h-full bg-linear-to-l from-noctiluca-dark to-transparent z-10 point-events-none"></div>

      {/* Header title */}
      <div className="mb-2 text-center z-20 relative">

      </div>

      {/* Ticker Container */}
      <div className="w-full relative flex overflow-hidden group">
        <div className="flex w-max animate-[scroll_40s_linear_infinite] group-hover:[animation-play-state:paused]">
          {duplicatedClients.map((client, index) => (
            <div 
              key={index} 
              className="px-1 flex items-center justify-center  grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-500 cursor-default"
            >
              {/* Aquí luego puedes intercambiar la etiqueta <p> por un <img src={client.logo} /> si consigues los PNGs */}
              <p className="uppercase  font-light tracking-widest text-noctiluca-primary whitespace-nowrap">
                {client.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ClientsName
