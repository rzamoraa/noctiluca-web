import React, { useEffect, useRef } from 'react'

const ProjectDetail = ({ project, onClose }) => {
  const scrollRef = useRef(null)

  // Reset scroll to top when mounting
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo(0, 0)
    }
  }, [])

  if (!project) return null

  return (
    <div 
      ref={scrollRef}
      className="fixed inset-0 z-30 h-dvh w-full overflow-y-auto overflow-x-hidden bg-noctiluca-dark flex flex-col items-center pb-12"
    >
      {/* Immersive Background Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-200 h-150 bg-cyan-900/10 rounded-full blur-[150px] pointer-events-none -z-10"></div>
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-200 h-150 bg-noctiluca-primary/5 rounded-full blur-[150px] pointer-events-none -z-10"></div>

      {/* Hero Section */}
      <div className="w-full max-w-5xl mx-auto px-6 md:px-12 pt-40 lg:pt-48 flex flex-col items-center justify-center text-center animate-fade-in-up">
        
        {/* Metadata */}
        <div className="flex flex-wrap justify-center items-center gap-4 text-[10px] md:text-xs tracking-[0.4em] uppercase text-noctiluca-primary/80 mb-6">
          <span>{project.category}</span>
          <span className="w-1 h-1 rounded-full bg-noctiluca-accent/50"></span>
          <span>{project.year}</span>
        </div>

        {/* Title */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-widest text-transparent bg-clip-text bg-linear-to-b from-white via-gray-200 to-gray-500 mb-12 uppercase drop-shadow-sm">
          {project.title}
        </h1>
        
        {/* Decorative separator */}
        <div className="w-24 h-px bg-linear-to-r from-transparent via-noctiluca-accent/50 to-transparent mb-16"></div>
      </div>

      {/* Main Hero Image */}
      <div className="w-full max-w-6xl mx-auto px-4 md:px-8 mb-24 flex justify-center">
        <div className="relative w-full aspect-video md:aspect-21/9 rounded-none overflow-hidden border-y border-white/5 bg-noctiluca-dark shadow-2xl">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover opacity-90 scale-105 animate-[kenburns_20s_ease-out_forwards] mix-blend-lighten"
          />
          {/* Vignette Overlay */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,#020B0F_120%)] mix-blend-multiply pointer-events-none"></div>
          {/* Scanline overlay for that premium feel */}
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none mix-blend-overlay"></div>
        </div>
      </div>

      {/* Description & Details Sub-Grid */}
      <div className="w-full max-w-5xl mx-auto px-6 md:px-12 mb-32 flex flex-col items-center justify-center relative">
        
        {/* Catchphrase Hero text */}
        {project.catchphrase && (
          <div className="w-full max-w-4xl mx-auto text-center mb-16 md:mb-24 mt-4 px-6 border-y border-white/5 py-12 bg-white/[0.01]">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-medium text-white leading-tight tracking-wide">
              <span className="text-noctiluca-primary opacity-80">{project.catchphrase.prefix} </span>
              {project.catchphrase.highlight + " "}
              <span className="italic font-light text-noctiluca-accent/90">{project.catchphrase.suffix}</span>
            </h2>
          </div>
        )}

        {/* Description */}
        <div className="w-full max-w-3xl mx-auto text-center mb-20 flex flex-col items-center">
          <h3 className="text-xs tracking-[0.5em] uppercase text-noctiluca-secondary mb-8 border-b border-noctiluca-primary/20 pb-4 inline-block px-8">
            The Concept
          </h3>
          <p className="text-base md:text-xl text-gray-300 leading-loose font-light text-center balance-text">
            {project.description}
          </p>
        </div>

        {/* Details Row */}
        <div className="w-full flex justify-center mt-8">
          <div className="flex flex-wrap justify-center items-start gap-x-16 gap-y-12 p-10 md:p-14 border border-white/5 bg-white/5 backdrop-blur-md text-center w-full shadow-[0_0_40px_rgba(0,0,0,0.5)] rounded-sm">
          {project.client && (
            <div className="flex flex-col items-center max-w-36">
              <p className="text-[9px] tracking-[0.3em] uppercase text-noctiluca-primary mb-3">Client</p>
              <p className="text-xs tracking-widest text-gray-200 font-light">{project.client}</p>
            </div>
          )}
          {project.details?.role && (
            <div className="flex flex-col items-center max-w-36">
              <p className="text-[9px] tracking-[0.3em] uppercase text-noctiluca-primary mb-3">Role</p>
              <p className="text-xs tracking-widest text-gray-200 font-light">{project.details.role}</p>
            </div>
          )}
          {project.details?.scale && (
            <div className="flex flex-col items-center max-w-36">
              <p className="text-[9px] tracking-[0.3em] uppercase text-noctiluca-primary mb-3">Scale</p>
              <p className="text-xs tracking-widest text-gray-200 font-light">{project.details.scale}</p>
            </div>
          )}
          {project.details?.tools && project.details.tools.length > 0 && (
            <div className="flex flex-col items-center max-w-48">
              <p className="text-[9px] tracking-[0.3em] uppercase text-noctiluca-primary mb-3">Tools</p>
              <div className="flex flex-wrap justify-center gap-x-2 gap-y-1">
                {project.details.tools.map((tool, index) => (
                  <span key={index} className="text-[10px] tracking-[0.2em] uppercase text-gray-400 font-light">
                    {tool}{index < project.details.tools.length - 1 ? ',' : ''}
                  </span>
                ))}
              </div>
            </div>
          )}
          </div>
        </div>
      </div>

      {/* Gallery Section */}
      {project.gallery && project.gallery.length > 0 && (
        <div className="w-full max-w-5xl mx-auto px-4 md:px-8 mb-16 flex flex-col items-center justify-center">
          <h3 className="text-xs tracking-[0.5em] uppercase text-center text-noctiluca-secondary mb-12 border-b border-noctiluca-primary/20 pb-4 inline-block px-8">
            Visual Documentation
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 w-full">
            {project.gallery.map((image, index) => (
               <div 
               key={index} 
               className={`group relative overflow-hidden bg-noctiluca-dark ${index === 0 && project.gallery.length % 2 !== 0 ? 'md:col-span-2 aspect-video md:aspect-21/9' : 'aspect-square md:aspect-video'} border border-white/5 shadow-lg rounded-sm`}
             >
                <img
                  src={image}
                  alt={`${project.title} - Image ${index + 1}`}
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000 ease-out"
                />
                <div className="absolute inset-0 bg-transparent group-hover:bg-noctiluca-accent/10 transition-colors duration-1000 mix-blend-overlay"></div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Videos Section */}
      {project.videos && project.videos.length > 0 && (
        <div className="w-full max-w-4xl mx-auto px-6 mb-16 flex flex-col items-center justify-center">
          <h3 className="text-xs tracking-[0.5em] uppercase text-center text-noctiluca-secondary mb-12 border-b border-noctiluca-primary/20 pb-4 inline-block px-8">
            Motion
          </h3>
          <div className="space-y-12 w-full">
            {project.videos.map((video, index) => (
              <div key={index} className="w-full aspect-video border border-white/5 bg-black/60 p-1 md:p-2 shadow-[0_0_50px_rgba(0,0,0,0.5)] rounded-sm overflow-hidden">
                <video src={video} controls className="w-full h-full object-cover rounded-sm" />
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Footer Element for Space */}
      <div className="w-full flex flex-col justify-center items-center py-2 gap-4">
        <div className="w-full h-px max-w-sm mx-auto bg-linear-to-r from-transparent via-cyan-900/50 to-transparent mb-4"></div>
        
        <button
          onClick={onClose}
          className=" h-[10vh] md:h-[10vh] text-gray-400 hover:text-noctiluca-accent text-sm md:text-base tracking-[0.3em] uppercase transition-all duration-500 relative group flex items-center gap-2 mb-6"
        >
          <span>← BACK</span>
          <span className="absolute -bottom-2 left-1/2 w-0 h-px bg-noctiluca-accent group-hover:w-full group-hover:left-0 transition-all duration-500"></span>
        </button>
      </div>
    </div>
  )
}

export default ProjectDetail
