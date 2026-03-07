import React, { useState } from 'react'
import LoopGif from './LoopGif'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Aquí irá la lógica para enviar el formulario
    console.log('Formulario enviado:', formData)
    // Resetear el formulario
    setSubmitted(true)
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      })
      setSubmitted(false)
    }, 3000)
  }

  return (
    <div
      id="contact"
      className="w-full grow bg-noctiluca-dark h-[50vh]  flex flex-col items-center justify-center  relative overflow-hidden"
    >
      <div className="max-w-xl w-full flex flex-col items-center  z-10  justify-center ">
        <LoopGif />
        {/* Header */}
        <div className="text-center space-y-4">
          <h2 className="text-sm md:text-base font-light tracking-[0.5em] text-noctiluca-secondary uppercase border-b border-noctiluca-primary/20 pb-4 px-12 inline-block">
            Get in Touch
          </h2>
          <p className="text-gray-500 text-xs tracking-widest text-center opacity-70 uppercase max-w-xs mx-auto">
            Ready to start a project?
          </p>
        </div>

        {submitted ? (
          <div className="text-center py-16 animate-fade-in">
            <div className="text-noctiluca-accent text-5xl mb-6 opacity-80">✓</div>
            <h3 className="text-xl font-light text-white tracking-widest uppercase mb-2">
              Message Sent
            </h3>
            <p className="text-gray-500 text-sm tracking-wide font-light">
              We will be in touch shortly.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="w-full space-y-8 px-6 md:px-0">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Name */}
              <div className="group">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="NAME"
                  className="w-full bg-transparent border-b border-white/10 focus:border-noctiluca-accent outline-none py-3 text-white placeholder-gray-600 text-sm md:text-xs tracking-[0.2em] transition-all duration-300 text-center md:text-left"
                />
              </div>

              {/* Email */}
              <div className="group">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="EMAIL"
                  className="w-full bg-transparent border-b border-white/10 focus:border-noctiluca-accent outline-none py-3 text-white placeholder-gray-600 text-sm md:text-xs tracking-[0.2em] transition-all duration-300 text-center md:text-left"
                />
              </div>
            </div>

            {/* Subject */}
            <div className="group">
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                placeholder="SUBJECT"
                className="w-full bg-transparent border-b border-white/10 focus:border-noctiluca-accent outline-none py-3 text-white placeholder-gray-600 text-sm md:text-xs tracking-[0.2em] transition-all duration-300 text-center md:text-left"
              />
            </div>

            {/* Message */}
            <div className="group">
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                placeholder="MESSAGE"
                className="w-full bg-transparent border-b border-white/10 focus:border-noctiluca-accent outline-none py-3 text-white placeholder-gray-600 text-sm md:text-xs tracking-[0.2em] transition-all duration-300 resize-none text-center md:text-left"
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="flex justify-center pt-8">
              <button
                type="submit"
                className="group relative px-12 py-3 overflow-hidden rounded-full border border-noctiluca-primary/30 hover:border-noctiluca-accent/50 transition-all duration-500"
              >
                <div className="absolute inset-0 bg-noctiluca-accent/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
                <span className="relative text-noctiluca-primary group-hover:text-white text-xs tracking-[0.3em] font-light transition-colors duration-500 uppercase">
                  Send Message
                </span>
              </button>
            </div>
          </form>
        )}
        
      </div>
      
    </div>
  )
}

export default Contact
