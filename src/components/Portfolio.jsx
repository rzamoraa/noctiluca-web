import React, { useState, useEffect } from 'react'
import ProjectDetail from './ProjectDetail'
import { projects as projectsConfig } from '../projects/projects.config'

const Portfolio = ({ setSelectedProject }) => {
  const [projects, setProjects] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    loadProjects()
  }, [])

  const loadProjects = async () => {
    try {
      // Cargar proyectos desde la configuración
      setProjects(projectsConfig)
      setLoading(false)
    } catch (error) {
      console.error('Error cargando proyectos:', error)
      setLoading(false)
    }
  }

  const handleProjectClick = (project) => {
    setSelectedProject(<ProjectDetail project={project} onClose={() => setSelectedProject(null)} />)
  }

  return (
    <section
      id="portfolio"
      className="w-full bg-noctiluca-dark py-4 px-4 md:px-8 relative overflow-hidden"
    >
      {/* Background Ambience */}
      <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-noctiluca-secondary/5 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="w-full flex justify-center items-center h-full pt-12 px-4">
        <div className="w-full max-w-7xl flex flex-col items-center">
          {/* Header */}
        <div className="flex flex-col items-center mb-16 space-y-4">
          <h2 className="text-sm md:text-base font-light tracking-[0.5em] text-noctiluca-secondary uppercase border-b border-noctiluca-primary/20 pb-4 px-12">
            Selected Works
          </h2>
          <p className="text-gray-500 text-xs tracking-widest text-center opacity-70">
            A CURATED SELECTION OF OUR RECENT PRODUCTIONS
          </p>
        </div>

        {/* Content */}
        {loading ? (
          <div className="flex items-center justify-center grow h-64">
             <div className="w-12 h-12 border-t-2 border-l-2 border-noctiluca-primary rounded-full animate-spin"></div>
          </div>
        ) : projects.length === 0 ? (
          <div className="flex items-center justify-center grow h-64">
            <p className="text-gray-500 text-sm tracking-widest uppercase opacity-50">
              Coming Soon
            </p>
          </div>
        ) : (
            <div className="flex justify-center w-full pb-12">
              <div className="grid grid-cols-2 md:grid-cols-4 grid-flow-row-dense gap-2 md:gap-4 auto-rows-auto md:auto-rows-[300px] max-w-7xl w-full mx-auto">
                {projects.map((project) => {
                  const gridMap = {
                    '1x1': 'col-span-1 row-span-1',
                    '1x2': 'col-span-1 md:row-span-2',
                    '2x1': 'col-span-2 md:col-span-2 md:row-span-1',
                    '2x2': 'col-span-2 md:col-span-2 md:row-span-2',
                    '3x1': 'col-span-2 md:col-span-3 md:row-span-1',
                    '1x3': 'col-span-1 md:row-span-3',
                    '3x2': 'col-span-2 md:col-span-3 md:row-span-2',
                    '2x3': 'col-span-2 md:col-span-2 md:row-span-3',
                    '3x3': 'col-span-2 md:col-span-3 md:row-span-3',
                    '4x1': 'col-span-2 md:col-span-4 md:row-span-1',
                    '1x4': 'col-span-1 md:row-span-4',
                    '4x2': 'col-span-2 md:col-span-4 md:row-span-2',
                    '2x4': 'col-span-2 md:row-span-4',
                    '4x3': 'col-span-2 md:col-span-4 md:row-span-3',
                    '3x4': 'col-span-2 md:col-span-3 md:row-span-4',
                    '4x4': 'col-span-2 md:col-span-4 md:row-span-4',
                  };
                  
                  let spanClasses = gridMap[project.gridSize] || gridMap['1x1'];

                  return (
              <div
                key={project.id}
                onClick={() => handleProjectClick(project)}
                className={`cursor-pointer group relative overflow-hidden rounded-sm bg-noctiluca-dark border border-white/10 transition-all duration-500 hover:border-noctiluca-primary/30 h-full w-full aspect-square md:aspect-auto ${spanClasses}`}
              >
                {/* Image */}
                <div className="w-full h-full overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 opacity-50 md:opacity-80 md:group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-transparent md:bg-noctiluca-dark/40 group-hover:bg-transparent transition-colors duration-500"></div>
                </div>
                
                {/* Overlay Content */}
                <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/40 md:via-transparent to-transparent opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end items-center p-3 md:p-8 text-center">
                  <div className="transform translate-y-0 md:translate-y-4 md:group-hover:translate-y-0 transition-transform duration-500 flex flex-col items-center w-full">
                    <span className="text-noctiluca-accent/80 text-[6px] md:text-xs tracking-widest uppercase mb-1 md:mb-2 block line-clamp-1">
                      {project.category} — {project.year}
                    </span>
                    <h3 className="text-white text-[10px] md:text-2xl font-light tracking-wide md:tracking-wide mb-1 md:mb-3 h-auto md:h-18 break-words text-center line-clamp-2">
                      {project.title}
                    </h3>
                    <div className="w-4 md:w-8 h-px bg-noctiluca-primary mb-2 md:mb-10 flex items-center justify-center"></div>
                    <span className="text-[6px] md:text-[10px] text-gray-400 tracking-[0.2em] uppercase transition-colors h-auto md:h-12 flex items-center justify-center">
                      View Project
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
            </div>
          </div>
        )}
      </div>
    </div>
  </section>
)
}

export default Portfolio
