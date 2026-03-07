import { useState, useEffect } from 'react'
import { useLocation, useNavigate, matchPath } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ProjectDetail from './components/ProjectDetail'
import { projects } from './projects/projects.config'
import './App.css'
import Divider from './components/Divider'
import Separador from './components/separador.jsx'
import ClientsTicker from './components/ClientsTicker.jsx'
import LoopGif from './components/LoopGif.jsx'
import ComingSoon from './components/ComingSoon.jsx'


function App() {
  const [isUnlocked, setIsUnlocked] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  // Revisar si ya habíamos puesto la contraseña antes
  useEffect(() => {
    const unlocked = localStorage.getItem('noctiluca_unlocked') === 'true'
    setIsUnlocked(unlocked)
  }, [])

  // Si no está desbloqueado, mostrar la pantalla de construcción
  if (!isUnlocked) {
    return <ComingSoon onUnlock={() => setIsUnlocked(true)} />
  }

  // Detectar si estamos viendo un proyecto
  const match = matchPath("/project/:id", location.pathname)
  const projectId = match?.params.id
  const selectedProject = projectId ? projects.find(p => p.id === projectId) : null

  const handleCloseProject = () => {
    navigate('/')
  }

  return (
    <div className="relative w-full h-full">
      {/* Si hay un proyecto seleccionado, mostrarlo encima */}
      {selectedProject && (
        <ProjectDetail project={selectedProject} onClose={handleCloseProject} />
      )}
      
      {/* Contenido principal - Si hay un proyecto abierto, podemos ocultarlo visualmente o dejarlo debajo */}
      <div className={`scroll-container bg-noctiluca-dark ${selectedProject ? 'hidden' : ''}`}>
     

     
      <Navbar />
     
      <section className="snap-section">
        <Home />
      </section>
      
  
      <section className="snap-section">
        <About />
        
      </section>
   
          <section className="snap-section">
        <ClientsTicker />
      </section>
 
      <section className="snap-section">
        <Portfolio />
       
      </section>

      

      {/* Contact y Footer juntos en una sección snap */}
      <section className="snap-section">
        
        <Contact />
         <Footer />
      </section>

      
    </div>
    </div>
  )
}

export default App
