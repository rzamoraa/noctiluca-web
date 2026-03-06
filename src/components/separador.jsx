import React from 'react'
import { motion } from 'framer-motion'
import lightA from '../assets/light_a.jpg'
import lightB from '../assets/light_b.png'
import glow from '../assets/GLOW.jpg'
import line from '../assets/line.png'





const Separador = () => {
  return (
    <section id="divider" className="  fixed bottom-0 z-50 pointer-events-none w-full flex flex-col items-center justify-end overflow-hidden mix-blend-screen">
      {/*
        ========================================================================

        siempre se mantiene abajo del footer, pero al ser parte del mismo bloque de contenido, se mezcla con el fondo del footer y genera un efecto de glow mucho más orgánico y natural que un simple gradiente lineal. Además, al ser una imagen con textura real, aporta riqueza visual y profundidad al diseño, evitando que el efecto se vea plano o artificial.
        Framer Motion mask animation configuration
        Puedes cambiar estos parámetros para ajustar la velocidad, curva, etc:  
        - duration: tiempo que tarda en ir de un borde al otro
        - width: tamaño del spot de luz (actualmente 40%)
        - opacity / stops en la mascara lineal, etc.
        ========================================================================
      */}

      <motion.img
        src={lightB}
        alt="Light Horizon A"
        className="absolute bottom-0 w-full object-cover mix-blend-screen saturate-50 pointer-events-none"
        style={{
          // Configuramos el estilo base de la máscara
          // Expandimos los stops intermedios para generar un difuminado mucho más orgánico y curvo (menos lineal)
          maskImage: 'linear-gradient(to right, transparent 0%, rgba(0,0,0,0.1) 20%, rgba(0,0,0,0.5) 40%, black 50%, rgba(0,0,0,0.5) 60%, rgba(0,0,0,0.1) 80%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to right, transparent 0%, rgba(0,0,0,0.1) 20%, rgba(0,0,0,0.5) 40%, black 50%, rgba(0,0,0,0.5) 60%, rgba(0,0,0,0.1) 80%, transparent 100%)',
          maskSize: '70% 100%',
          WebkitMaskSize: '70% 100%',
          maskRepeat: 'no-repeat',
          WebkitMaskRepeat: 'no-repeat',
          position: 'relative',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%'
        }}

        // Framer motion properties para mover la máscara (mask-position)       
        animate={{
          WebkitMaskPosition: ['-100% 0%', '150% 0%'],
          maskPosition: ['-100% 0%', '150% 0%']
        }}
        transition={{
         
          repeat: Infinity,        // Repetir siempre
          repeatDelay: 0,
          repeatType: "mirror",    // IMPORTANTE: Loop hace que siempre corra en un solo sentido sin devolverse
          duration: 6,             // SEGUNDOS de viaje de un borde a otro      
          ease: "easeInOut"         // IMPORTANTE: Linear hace que la velocidad sea constante y no se frene al desaparecer
        }}
      />






<div className="absolute bottom-0 w-full object-cover mix-blend-screen pointer-events-none">



<div className="absolute bottom-0 w-full object-cover mix-blend-screen pointer-events-none">  

           <motion.img
        src={lightB}
        alt="Light Horizon A"
        className="absolute bottom-0 w-full object-cover  pointer-events-none"      
          style={{
          // Configuramos el estilo base de la máscara
          // Expandimos los stops intermedios para generar un difuminado mucho más orgánico y curvo (menos lineal)
          maskImage: 'linear-gradient(to right, transparent 0%, rgba(0,0,0,0.1) 20%, rgba(0,0,0,0.5) 40%, black 50%, rgba(0,0,0,0.5) 60%, rgba(0,0,0,0.1) 80%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to right, transparent 0%, rgba(0,0,0,0.1) 20%, rgba(0,0,0,0.5) 40%, black 50%, rgba(0,0,0,0.5) 60%, rgba(0,0,0,0.1) 80%, transparent 100%)',
          maskSize: '70% 100%',
          WebkitMaskSize: '70% 100%',
          maskRepeat: 'no-repeat',
          WebkitMaskRepeat: 'no-repeat',
          position: 'relative',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%'
        }}

        // Framer motion properties para mover la máscara (mask-position)       
        animate={{
          WebkitMaskPosition: ['0% 0%', '100% 0%'],
          maskPosition: ['0% 0%', '100% 0%']
        }}
        transition={{
         
          repeat: Infinity,        // Repetir siempre
          repeatDelay: 0,
          repeatType: "mirror",    // IMPORTANTE: Loop hace que siempre corra en un solo sentido sin devolverse
          duration: 4,             // SEGUNDOS de viaje de un borde a otro      
          ease: "easeInOut"         // IMPORTANTE: Linear hace que la velocidad sea constante y no se frene al desaparecer
        }}
      />


           

</div>

 
<div className="absolute bottom-0 w-full object-cover mix-blend-screen pointer-events-none">  

           <motion.img
        src={lightB}
        alt="Light Horizon A"
        className="absolute bottom-0 w-full object-cover  pointer-events-none"      
          style={{
          // Configuramos el estilo base de la máscara
          // Expandimos los stops intermedios para generar un difuminado mucho más orgánico y curvo (menos lineal)
          maskImage: 'linear-gradient(to right, transparent 0%, rgba(0,0,0,0.1) 20%, rgba(0,0,0,0.5) 40%, black 50%, rgba(0,0,0,0.5) 60%, rgba(0,0,0,0.1) 80%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to right, transparent 0%, rgba(0,0,0,0.1) 20%, rgba(0,0,0,0.5) 40%, black 50%, rgba(0,0,0,0.5) 60%, rgba(0,0,0,0.1) 80%, transparent 100%)',
          maskSize: '70% 100%',
          WebkitMaskSize: '70% 100%',
          maskRepeat: 'no-repeat',
          WebkitMaskRepeat: 'no-repeat',
          position: 'relative',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%'
        }}

        // Framer motion properties para mover la máscara (mask-position)       
        animate={{
          WebkitMaskPosition: ['0% 0%', '100% 0%'],
          maskPosition: ['0% 0%', '100% 0%']
        }}
        transition={{
         
          repeat: Infinity,        // Repetir siempre
          repeatDelay: 0,
          repeatType: "mirror",    // IMPORTANTE: Loop hace que siempre corra en un solo sentido sin devolverse
          duration: 4,             // SEGUNDOS de viaje de un borde a otro      
          ease: "easeInOut",   
          delay: 2      // IMPORTANTE: Linear hace que la velocidad sea constante y no se frene al desaparecer
        }}
      />


           

</div>

      <img
        src={line}
        alt="Light Horizon A"
        className="absolute bottom-0 w-full object-cover mix-blend-screen pointer-events-none"
      />

</div>

     
   
    </section>
  )
}

export default Separador
