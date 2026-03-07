import React from 'react'

const TechPartners = () => {
  return (
    <div className="w-full bg-noctiluca-dark py-48 border-b border-white/5 relative overflow-hidden flex flex-col items-center">
      {/* Background Ambience */}
      <div className="absolute top-0 left-0 w-full h-full bg-noctiluca-primary/5 opacity-20 pointer-events-none"></div>

      <div className="w-full max-w-6xl mx-auto flex flex-col items-center text-center z-10 px-6">
        
        {/* 1. Small Header */}
        <h3 className="text-[10px] md:text-sm tracking-[0.5em] uppercase text-gray-500 font-light mb-24 border-b border-white/10 pb-8">
          OFFICIAL TECHNOLOGY PARTNERS
        </h3>

        {/* 2. Main Statement */}
        <h2 className="text-2xl md:text-5xl font-medium text-white leading-tight tracking-wide mb-20">
          Empowered by <span className="text-noctiluca-primary">industry leaders</span> <br className="hidden md:block"/>
          to deliver <span className="italic font-light text-noctiluca-accent">limitless creativity</span>.
        </h2>

        {/* 3. Description of Support */}
        <p className="text-xs md:text-sm text-gray-400 font-light tracking-widest max-w-3xl leading-relaxed mb-32">
           We are honored to have the official support and sponsorship of the world's most advanced graphics engines and hardware manufacturers. This strategic alliance ensures our productions are built on the bedrock of stability, granting us access to cutting-edge tools that define the future of live entertainment.
        </p>

        {/* 4. Attributes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-32 w-full mb-40 max-w-4xl border-t border-white/5 pt-24">
             <div className="flex flex-col items-center">
                <span className="text-noctiluca-primary text-lg md:text-2xl font-bold mb-6">STABILITY</span>
                <span className="text-[10px] tracking-[0.2em] uppercase text-gray-500">Mission Critical Certified</span>
             </div>
             <div className="flex flex-col items-center">
                <span className="text-noctiluca-accent text-lg md:text-2xl font-bold mb-6">INNOVATION</span>
                <span className="text-[10px] tracking-[0.2em] uppercase text-gray-500">Alpha/Beta Access</span>
             </div>
             <div className="flex flex-col items-center">
                <span className="text-white text-lg md:text-2xl font-bold mb-6">PERFORMANCE</span>
                <span className="text-[10px] tracking-[0.2em] uppercase text-gray-500">High-End Optimization</span>
             </div>
        </div>

        {/* 5. Powered By Label */}
         <div className="flex items-center gap-8 mb-24 opacity-60">
            <div className="h-[1px] w-24 bg-white/20"></div>
            <span className="text-[10px] tracking-[0.3em] uppercase text-white">POWERED BY</span>
            <div className="h-[1px] w-24 bg-white/20"></div>
         </div>

        {/* 6. Logos */}
        <div className="flex flex-wrap justify-center items-center gap-24 md:gap-40 opacity-80 z-10 max-w-5xl mx-auto px-6">
          
          {/* Blackmagic Design */}
          <div className="group flex flex-col items-center justify-center transition-all duration-300 hover:opacity-100 hover:scale-105">
             <svg role="img" viewBox="0 0 24 24" className="w-12 h-12 md:w-16 md:h-16 fill-current text-white/40 group-hover:text-white transition-colors duration-300" xmlns="http://www.w3.org/2000/svg">
               <title>Blackmagic Design</title>
               <path d="M10.385 0c-1.15 0-2.076.93-2.076 2.076V5.31c0 1.148.929 2.076 2.076 2.076h3.23c1.15 0 2.076-.93 2.076-2.076V2.076A2.074 2.074 0 0 0 13.615 0h-3.23zm0 .924h3.23c.638 0 1.155.514 1.155 1.152V5.31c0 .638-.516 1.152-1.155 1.152h-3.23A1.152 1.152 0 0 1 9.23 5.309V2.076c0-.638.516-1.152 1.155-1.152zm0 7.385c-1.15 0-2.076.929-2.076 2.076v3.23c0 1.15.929 2.076 2.076 2.076h3.23c1.15 0 2.076-.929 2.076-2.076v-3.23c0-1.15-.929-2.076-2.076-2.076h-3.23zm0 .921h3.23c.638 0 1.155.516 1.155 1.155v3.23c0 .638-.516 1.155-1.155 1.155h-3.23a1.154 1.154 0 0 1-1.155-1.155v-3.23c0-.638.516-1.155 1.155-1.155zm0 7.385c-1.15 0-2.076.93-2.076 2.076v3.233c0 1.149.929 2.076 2.076 2.076h3.23c1.15 0 2.076-.93 2.076-2.076V18.69a2.075 2.075 0 0 0-2.076-2.076h-3.23zm0 .924h3.23c.638 0 1.155.514 1.155 1.152v3.233c0 .638-.516 1.152-1.155 1.152h-3.23a1.152 1.152 0 0 1-1.155-1.152V18.69c0-.638.516-1.152 1.155-1.152Z"/>
             </svg>
             <span className="mt-2 text-[10px] tracking-[0.2em] uppercase text-white/30 group-hover:text-white/80 transition-colors duration-300 hidden md:block">Blackmagic Design</span>
          </div>

          {/* Blender */}
          <div className="group flex flex-col items-center justify-center transition-all duration-300 hover:opacity-100 hover:scale-105">
             <svg role="img" viewBox="0 0 24 24" className="w-12 h-12 md:w-16 md:h-16 fill-current text-white/40 group-hover:text-white transition-colors duration-300" xmlns="http://www.w3.org/2000/svg">
               <title>Blender</title>
               <path d="M12.51 13.214c.046-.8.438-1.506 1.03-2.006a3.424 3.424 0 0 1 2.212-.79c.85 0 1.631.3 2.211.79.592.5.983 1.206 1.028 2.005.045.823-.285 1.586-.865 2.153a3.389 3.389 0 0 1-2.374.938 3.393 3.393 0 0 1-2.376-.938c-.58-.567-.91-1.33-.865-2.152M7.35 14.831c.006.314.106.922.256 1.398a7.372 7.372 0 0 0 1.593 2.757 8.227 8.227 0 0 0 2.787 2.001 8.947 8.947 0 0 0 3.66.76 8.964 8.964 0 0 0 3.657-.772 8.285 8.285 0 0 0 2.785-2.01 7.428 7.428 0 0 0 1.592-2.762 6.964 6.964 0 0 0 .25-3.074 7.123 7.123 0 0 0-1.016-2.779 7.764 7.764 0 0 0-1.852-2.043h.002L13.566 2.55l-.02-.015c-.492-.378-1.319-.376-1.86.002-.547.382-.609 1.015-.123 1.415l-.001.001 3.126 2.543-9.53.01h-.013c-.788.001-1.545.518-1.695 1.172-.154.665.38 1.217 1.2 1.22V8.9l4.83-.01-8.62 6.617-.034.025c-.813.622-1.075 1.658-.563 2.313.52.667 1.625.668 2.447.004L7.414 14s-.069.52-.063.831zm12.09 1.741c-.97.988-2.326 1.548-3.795 1.55-1.47.004-2.827-.552-3.797-1.538a4.51 4.51 0 0 1-1.036-1.622 4.282 4.282 0 0 1 .282-3.519 4.702 4.702 0 0 1 1.153-1.371c.942-.768 2.141-1.183 3.396-1.185 1.256-.002 2.455.41 3.398 1.175.48.391.87.854 1.152 1.367a4.28 4.28 0 0 1 .522 1.706 4.236 4.236 0 0 1-.239 1.811 4.54 4.54 0 0 1-1.035 1.626"/>
             </svg>
             <span className="mt-2 text-[10px] tracking-[0.2em] uppercase text-white/30 group-hover:text-white/80 transition-colors duration-300 hidden md:block">Blender</span>
          </div>

          {/* Unreal Engine */}
          <div className="group flex flex-col items-center justify-center transition-all duration-300 hover:opacity-100 hover:scale-105">
             <svg role="img" viewBox="0 0 24 24" className="w-12 h-12 md:w-16 md:h-16 fill-current text-white/40 group-hover:text-white transition-colors duration-300" xmlns="http://www.w3.org/2000/svg">
               <title>Unreal Engine</title>
               <path d="M12 0a12 12 0 1012 12A12 12 0 0012 0zm0 23.52A11.52 11.52 0 1123.52 12 11.52 11.52 0 0112 23.52zm7.13-9.791c-.206.997-1.126 3.557-4.06 4.942l-1.179-1.325-1.988 2a7.338 7.338 0 01-5.804-2.978 2.859 2.859 0 00.65.123c.326.006.678-.114.678-.66v-5.394a.89.89 0 00-1.116-.89c-.92.212-1.656 2.509-1.656 2.509a7.304 7.304 0 012.528-5.597 7.408 7.408 0 013.73-1.721c-1.006.573-1.57 1.507-1.57 2.29 0 1.262.76 1.109.984.923v7.28a1.157 1.157 0 00.148.256 1.075 1.075 0 00.88.445c.76 0 1.747-.868 1.747-.868V9.172c0-.6-.452-1.324-.905-1.572 0 0 .838-.149 1.484.346a5.537 5.537 0 01.387-.425c1.508-1.48 2.929-1.902 4.112-2.112 0 0-2.151 1.69-2.151 3.96 0 1.687.043 5.801.043 5.801.799.771 1.986-.342 3.059-1.441Z"/>
             </svg>
             <span className="mt-2 text-[10px] tracking-[0.2em] uppercase text-white/30 group-hover:text-white/80 transition-colors duration-300 hidden md:block">Unreal Engine</span>
          </div>

        </div>
      </div>
    </div>
  )
}

export default TechPartners