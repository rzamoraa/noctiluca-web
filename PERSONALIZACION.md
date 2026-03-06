# ✨ Guía de Personalización de NOCTILUCA

## 🎯 Próximos Pasos para Completar el Sitio

### 1. Logo de NOCTILUCA (PRIORITARIO)
**Ubicación**: Componente `Home.jsx`

En el archivo `src/components/Home.jsx`, línea ~30, reemplaza:
```jsx
<div className="w-24 h-24 rounded-full border-2 border-noctiluca-accent flex items-center justify-center bg-noctiluca-dark">
  <span className="text-noctiluca-accent font-bold text-xl">Logo</span>
</div>
```

Con una imagen real:
```jsx
<img 
  src="ruta/a/tu/logo.svg" 
  alt="NOCTILUCA Logo" 
  className="w-24 h-24"
/>
```

Opciones para el logo:
- Colócalo en `public/logo.svg` (mejor para SVG)
- Usa una URL externa: `https://...`

### 2. Video Principal de Home
**Ubicación**: `src/components/Home.jsx`

Reemplaza el placeholder del video (líneas 20-25):
```jsx
{/* Placeholder para video - reemplazar con video real */}
<div className="w-3/4 h-3/4 bg-gray-800 rounded-lg flex items-center justify-center border-2 border-noctiluca-primary">
  <span className="text-noctiluca-primary text-xl">Video Placeholder</span>
</div>
```

Con un video real:
```jsx
<video 
  autoPlay 
  muted 
  loop 
  className="w-3/4 h-3/4 rounded-lg object-cover"
>
  <source src="ruta/a/tu/video.mp4" type="video/mp4" />
  Tu navegador no soporta videos HTML5
</video>
```

### 3. Links de Redes Sociales
**Ubicación**: `src/components/Footer.jsx`

Actualiza el array `socialLinks` con tus URLs reales:
```javascript
const socialLinks = [
  { name: 'Instagram', icon: '📷', url: 'https://instagram.com/noctiluca' },
  { name: 'YouTube', icon: '▶️', url: 'https://youtube.com/@noctiluca' },
  { name: 'TikTok', icon: '🎵', url: 'https://tiktok.com/@noctiluca' },
  { name: 'LinkedIn', icon: '💼', url: 'https://linkedin.com/company/noctiluca' },
]
```

Puedes agregar más redes o cambiar los íconos por SVGs.

### 4. Formula rio de Contacto - Backend
**Ubicación**: `src/components/Contact.jsx`

El formulario actualmente solo guarda datos localmente. Para activarlo:

#### Opción A: Email directo (Simple)
```javascript
const handleSubmit = (e) => {
  e.preventDefault()
  window.location.href = `mailto:contacto@noctiluca.com?subject=${formData.subject}&body=${formData.message}`
}
```

#### Opción B: Servicio Externo (Recomendado)
Usa servicios como:
- **EmailJS**: https://www.emailjs.com/ (Gratis, sin backend)
- **Formspree**: https://formspree.io/ (Muy simple)
- **Web3Forms**: https://web3forms.com/ (Web3, gratis)

Ejemplo con EmailJS:
```javascript
import emailjs from '@emailjs/browser'

const handleSubmit = (e) => {
  e.preventDefault()
  
  emailjs.send(
    'SERVICE_ID',
    'TEMPLATE_ID',
    formData,
    'PUBLIC_KEY'
  ).then(() => {
    alert('¡Mensaje enviado! Nos contactaremos pronto.')
    setFormData({ name: '', email: '', subject: '', message: '' })
  })
}
```

### 5. Texto de Derechos - Footer
**Ubicación**: `src/components/Footer.jsx`

Personaliza el texto de derechos (línea ~30):
```jsx
<p className="text-gray-500 text-sm">
  © 2024 NOCTILUCA. Todos los derechos creativos reservados.
</p>
```

### 6. Información de Empresa - About
**Ubicación**: `src/components/About.jsx`

Personaliza la descripción larga para hacerla más específica a NOCTILUCA. Actualmente es genérica.

### 7. Proyectos Iniciales
1. Abre `src/projects/projects.config.js`
2. Reemplaza el proyecto de ejemplo con tus proyectos reales
3. Sigue las instrucciones en `src/projects/AGREGAR_PROYECTOS.md`

## 🎨 Personalizaciones Avanzadas

### Cambiar Colores
En `tailwind.config.js`:
```javascript
colors: {
  noctiluca: {
    dark: '#020B0F',      // Cambiar color de fondo
    primary: '#4AB2D4',   // Cambiar color principal
    secondary: '#8FC1CF', // Cambiar color secundario
    accent: '#00D5FF',    // Cambiar color de acentos
  }
}
```

### Cambiar Tipografía
En `tailwind.config.js`, sección `theme.extend`:
```javascript
fontFamily: {
  sans: ['Inter', 'sans-serif'],
  display: ['Poppins', 'sans-serif'],
}
```

### Agregar Animaciones Personalizadas
En `tailwind.config.js`:
```javascript
keyframes: {
  glow: {
    '0%, 100%': { opacity: '1' },
    '50%': { opacity: '.5' },
  }
},
animation: {
  glow: 'glow 2s ease-in-out infinite',
}
```

## 📞 Información de Contacto
Actualiza estos lugares con tu información:

1. **Email**: `src/components/Contact.jsx` y `src/components/Footer.jsx`
2. **Teléfono**: Puedes agregar en Contact.jsx
3. **Dirección**: Puedes agregar en Footer.jsx

## 🚀 Antes de Publicar

- [ ] Agregado el logo real
- [ ] Agregado video principal
- [ ] Actualizado los links de redes sociales
- [ ] Formulario de contacto funcional
- [ ] Proyectos reales en el portafolio
- [ ] Textos personalizados
- [ ] Colores finales confirmados
- [ ] Probado en mobile, tablet y desktop
- [ ] Speed test (Google PageSpeed)

## 💾 Guardar Cambios

```bash
# Ver cambios
git status

# Agregar archivos
git add .

# Hacer commit
git commit -m "Personalización de NOCTILUCA"

# Publicar
git push
```

## 📱 Testing
```bash
# Ver en el navegador local
npm run dev

# Probar la build de producción
npm run build
npm run preview
```

---

¿Necesitas ayuda? Contacta al equipo de desarrollo.
