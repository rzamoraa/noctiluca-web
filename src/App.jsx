import { useState } from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './App.css'
import Divider from './components/Divider'
import Separador from './components/separador.jsx'
import ClientsTicker from './components/ClientsTicker.jsx'
import LoopGif from './components/LoopGif.jsx'


function App() {
  const [selectedProject, setSelectedProject] = useState(null)

  if (selectedProject) {
    return (
      <div className="relative w-full h-full">
       
        <div className=""></div>
        <button
          onClick={() => setSelectedProject(null)}
          className="fixed top-6 left-6 md:top-10 md:left-10 z-40 btn-noctiluca text-sm md:text-base px-4 md:px-6 py-2 md:py-3 transition-transform hover:scale-105"
        > <Separador />
          ← Volver
        </button>
        {selectedProject}
      </div>
    )
  }

  return (
    <div className="scroll-container bg-noctiluca-dark">
     

      <Footer />
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
        <Portfolio setSelectedProject={setSelectedProject} />
       
      </section>

      

      {/* Contact y Footer juntos en una sección snap */}
      <section className="snap-section">
        
        <Contact />
        
      </section>
    </div>
  )
}

export default App
