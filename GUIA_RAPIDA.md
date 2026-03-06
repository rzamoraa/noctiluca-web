# ⚡ Guía Rápida de Referencia - NOCTILUCA

## 🎯 Lo Más Importante

### Para Cambiar el Logo
📝 **Archivo**: `src/components/Home.jsx` (línea ~30)
```jsx
// Busca esto:
<span className="text-noctiluca-accent font-bold text-xl">Logo</span>

// Cambia por:
<img src="ruta/a/tu/logo.svg" alt="Logo" className="w-24 h-24" />
```

### Para Agregar Mi Primer Proyecto
📝 **Archivo**: `src/projects/projects.config.js`

1. Abre el archivo
2. Copia la plantilla al final del array:
```javascript
{
  id: 'mi-proyecto',
  title: 'Mi Primer Proyecto',
  description: 'Descripción detallada...',
  image: 'https://enlace-a-imagen.jpg',
  category: 'Concierto',
  year: 2024,
  gallery: ['https://imagen1.jpg', 'https://imagen2.jpg'],
  videos: [],
  details: {
    role: 'Desarrollo & Diseño',
    tools: ['Herramienta 1', 'Herramienta 2'],
    team: 'Mi equipo',
    duration: '3 meses'
  }
}
```

3. Recarga el navegador
4. ¡Tu proyecto aparece en "Proyectos"!

### Para Cambiar el Video del Home
📝 **Archivo**: `src/components/Home.jsx` (línea ~20)
```jsx
// Busca:
<span className="text-noctiluca-primary text-xl">Video Placeholder</span>

// Cambia por:
<video autoPlay muted loop className="...">
  <source src="tu-video.mp4" type="video/mp4" />
</video>
```

### Para Actualizar Redes Sociales
📝 **Archivo**: `src/components/Footer.jsx` (línea ~10)
```javascript
const socialLinks = [
  { name: 'Instagram', icon: '📷', url: 'https://instagram.com/noctiluca' },
  // ... actualiza las URLs aquí
]
```

## 🔴 Errores Comunes y Soluciones

| Problema | Solución |
|----------|----------|
| **El proyecto no aparece** | Verifica comas y comillas en `projects.config.js` |
| **La página se ve rota** | Ejecuta `npm run dev` y recarga (Ctrl+Shift+R) |
| **Imágenes no cargan** | Verifica que la URL sea correcta y accesible |
| **El formulario no funciona** | Configura integración con EmailJS o Formspree |
| **Estilos no aplican** | Limpia caché (Ctrl+Shift+Del) e instala Tailwind |

## 📁 Estructura en Un Vistazo

```
📦 webpage/
├── 📄 package.json
├── 📄 tailwind.config.js (Colores aquí)
├── 📄 vite.config.js
├── 📁 src/
│   ├── 📁 components/
│   │   ├── Home.jsx (✂️ Logo y video aquí)
│   │   ├── About.jsx (Sección Nosotros)
│   │   ├── Portfolio.jsx (Grid de proyectos)
│   │   ├── ProjectDetail.jsx (Detalles proyecto)
│   │   ├── Contact.jsx (Formulario)
│   │   └── Footer.jsx (🔗 Redes aquí)
│   ├── 📁 projects/
│   │   └── projects.config.js (➕ Proyectos aquí)
│   ├── App.jsx
│   ├── index.css (Estilos globales)
│   └── main.jsx
├── 📄 README.md (Documentación completa)
├── 📄 PERSONALIZACION.md (Guía de cambios)
└── 📄 DEPLOYMENT.md (Cómo publicar)
```

## 🚀 Comandos Principales

```bash
# Iniciar desarrollo (ver cambios en tiempo real)
npm run dev

# Compilar para producción
npm run build

# Ver cómo se vería en producción
npm run preview

# Instalar nuevas dependencias
npm install nombre-paquete
```

## 🎨 Colores Personalizados

Cambiar en `tailwind.config.js`:
```javascript
colors: {
  noctiluca: {
    dark: '#020B0F',      // Fondo Negro
    primary: '#4AB2D4',   // Azul Principal
    secondary: '#8FC1CF', // Azul Suave
    accent: '#00D5FF',    // Azul Brillante
  }
}
```

Usar en HTML:
```jsx
<div className="bg-noctiluca-dark text-noctiluca-accent">
```

## 📞 Hacer Funcionar el Formulario de Contacto (Sin Backend)

### Opción 1: Email Simple (2 minutos)
En `src/components/Contact.jsx`, función `handleSubmit`:
```javascript
window.location.href = `mailto:contacto@noctiluca.com?subject=${formData.subject}`
```

### Opción 2: EmailJS (10 minutos)
```bash
npm install @emailjs/browser
```

En `Contact.jsx`:
```javascript
import emailjs from '@emailjs/browser'

const handleSubmit = (e) => {
  e.preventDefault()
  emailjs.send('SERVICE_ID', 'TEMPLATE_ID', formData, 'PUBLIC_KEY')
    .then(() => alert('¡Enviado!'))
}
```

Obtén las claves gratis en https://www.emailjs.com/

## 📸 Dónde Obtener Imágenes

**Gratis:**
- Unsplash: https://unsplash.com
- Pexels: https://pexels.com
- Pixabay: https://pixabay.com

**Alojamiento de Imágenes:**
- Imgbb: https://imgbb.com (Gratis, sin límite)
- Cloudinary: https://cloudinary.com (Gratis hasta 25GB)
- Firebase: https://firebase.google.com (Gratis)

## 🌍 Publicar el Sitio (Más Fácil)

### Con Vercel (Recomendado)
1. Ve a https://vercel.com
2. Conecta tu repositorio GitHub
3. Click "Deploy"
4. ¡Listo! Tu sitio está en vivo

### Con Netlify
Similar a Vercel, también muy fácil.

Ver `DEPLOYMENT.md` para más opciones.

## 🔧 Personalización de Textos

### Cambiar Título del Home
`Home.jsx` línea ~10

### Cambiar Descripción en "Nosotros"
`About.jsx` línea ~15

### Cambiar Frase de Copyright
`Footer.jsx` línea ~40

## ⏱️ Tiempo Estimado de Cambios

| Tarea | Tiempo |
|-------|--------|
| Cambiar logo | 2 min |
| Cambiar video | 5 min |
| Actualizar redes sociales | 3 min |
| Agregar 1 proyecto | 10 min |
| Hacer formulario funcional | 15 min |
| Cambiar colores | 5 min |
| Publicar en Vercel | 5 min |

## 📚 Documentación Completa

- **README.md**: Guía técnica completa
- **PERSONALIZACION.md**: Cómo cambiar todo
- **DEPLOYMENT.md**: Cómo publicar
- **src/projects/AGREGAR_PROYECTOS.md**: Detalles de proyectos

## 🆘 Necesito Ayuda Con...

| Problema | Archivo/Ubicación |
|----------|------------------|
| Logo/Video | `src/components/Home.jsx` |
| Proyectos | `src/projects/projects.config.js` |
| Formulario | `src/components/Contact.jsx` |
| Redes Sociales | `src/components/Footer.jsx` |
| Colores | `tailwind.config.js` |
| Todos los textos | Ver en cada componente |
| Publicar | `DEPLOYMENT.md` |

---

**💡 Consejo:** Comienza con cambiar el logo y el video, luego agrega tus proyectos. ¡Lo demás se construye desde ahí!

**🎉 ¡Éxito con tu portafolio NOCTILUCA!**
