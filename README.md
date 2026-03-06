# NOCTILUCA Portfolio

Página de portafolio moderna y minimalista para NOCTILUCA, una productora especializada en visuales y diseño escenográfico para artistas, conciertos y festivales.

## Características

### 🎨 Diseño
- **Paleta de colores personalizada**: Colores corporativos de NOCTILUCA integrados en Tailwind CSS
  - Fondo oscuro: `#020B0F`
  - Color principal: `#4AB2D4`
  - Color secundario: `#8FC1CF`
  - Acentos: `#00D5FF`
- Diseño minimalista y moderno
- Gradiente suave en la parte superior
- Scroll snap para navegación fluida entre secciones

### 📁 Estructura de Páginas

1. **Home** - Página inicial con video principal y botones de navegación
2. **Nosotros** - Descripción de la empresa con palabras clave destacadas
3. **Proyectos** - Grid dinámico de proyectos que crecen conforme se agregan nuevos
4. **Detalle de Proyecto** - Página completa con descripción, galería, videos y detalles técnicos
5. **Contacto** - Formulario minimalista de contacto
6. **Footer** - Derechos y enlaces a redes sociales

### ⚙️ Stack Tecnológico

- **React 18.x** - Librería de UI
- **Vite** - Build tool y dev server
- **Tailwind CSS** - Sistema de estilos
- **JavaScript ES6+** - Lenguaje de programación

## Instalación y Setup

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# Compilar para producción
npm run build

# Vista previa de producción
npm run preview
```

## Cómo Agregar un Nuevo Proyecto

### 1. Estructura de Carpeta
Crea una carpeta para tu proyecto:
```
src/projects/nombre-del-proyecto/
├── images/
│   ├── main.jpg (imagen principal)
│   ├── gallery-1.jpg
│   ├── gallery-2.jpg
│   └── ...
└── videos/
    └── video.mp4 (opcional)
```

### 2. Actualizar Configuración de Proyectos
Edita el archivo `src/projects/projects.config.js` y agrega un nuevo objeto al array `projects`:

```javascript
{
  id: 'proyecto-unico-id',
  title: 'Título del Proyecto',
  description: 'Descripción detallada del proyecto. Puede ser tan larga como necesites.',
  shortDescription: 'Descripción corta para mostrar en el grid',
  image: 'src/projects/nombre-del-proyecto/images/main.jpg',
  category: 'Concierto', // Concierto, Festival, Artista, Otro
  year: 2024,
  gallery: [
    'src/projects/nombre-del-proyecto/images/gallery-1.jpg',
    'src/projects/nombre-del-proyecto/images/gallery-2.jpg',
    // ...
  ],
  videos: [
    'src/projects/nombre-del-proyecto/videos/video.mp4',
    // ...
  ],
  details: {
    role: 'Descripción de tu rol en el proyecto',
    tools: ['Motion Design', '3D Mapping', 'Sincronización Audiovisual'],
    team: 'Descripción del equipo involucrado',
    duration: 'Duración del proyecto'
  }
}
```

## Configuración de Colores en Tailwind

Los colores están configurados en `tailwind.config.js`:

```javascript
colors: {
  noctiluca: {
    dark: '#020B0F',      // Fondo
    primary: '#4AB2D4',   // Principal
    secondary: '#8FC1CF', // Secundario
    accent: '#00D5FF',    // Acentos
  }
}
```

Úsalos en componentes:
```jsx
<div className="bg-noctiluca-dark text-noctiluca-accent">
  Contenido
</div>
```

## Personalización

### Video Home
En el componente `src/components/Home.jsx`, reemplaza el placeholder del video:
```jsx
<video autoPlay muted loop className="...">
  <source src="tu-video.mp4" type="video/mp4" />
</video>
```

### Formulario de Contacto
El formulario en `src/components/Contact.jsx` necesita integración con un servicio backend. Actualiza la función `handleSubmit`:
```javascript
const handleSubmit = (e) => {
  e.preventDefault()
  // Integra con tu backend aquí
  fetch('/api/contact', {
    method: 'POST',
    body: JSON.stringify(formData)
  })
}
```

### Redes Sociales
Edita el array `socialLinks` en `src/components/Footer.jsx`:
```javascript
const socialLinks = [
  { name: 'Instagram', icon: '📷', url: 'https://instagram.com/noctiluca' },
  // ...
]
```

## Comandos Disponibles

- `npm run dev` - Inicia el servidor de desarrollo
- `npm run build` - Compila el proyecto para producción
- `npm run preview` - Vista previa local de la compilación
- `npm run lint` - (Opcional) Ejecuta linting

## Estructura de Carpetas

```
src/
├── components/
│   ├── Home.jsx          # Página inicial
│   ├── About.jsx         # Sección "Nosotros"
│   ├── Portfolio.jsx     # Grid de proyectos
│   ├── ProjectDetail.jsx # Detalle de proyecto
│   ├── Contact.jsx       # Formulario de contacto
│   └── Footer.jsx        # Footer
├── projects/
│   ├── projects.config.js # Configuración de proyectos
│   └── [proyecto-carpetas]
├── App.jsx               # App principal
├── index.css             # Estilos globales (Tailwind)
└── main.jsx              # Punto de entrada
```

## Scroll Snap

El sitio utiliza CSS Scroll Snap para una navegación suave entre secciones. Cada sección ocupa 100vh (la altura completa de la pantalla) y el scroll automáticamente se alinea al inicio de cada sección.

## Responsive Design

El sitio es completamente responsive:
- Mobile (< 640px)
- Tablet (640px - 1024px)
- Desktop (> 1024px)

## Rendimiento

- 🚀 Build ultra rápido con Vite
- 📦 Chunking automático
- 🎯 Optimización de imágenes
- ✨ CSS purificado solo con clases usadas

## Soporte

Para agregar funcionalidades adicionales o reportar problemas, contacta al equipo de desarrollo.

---

© 2024 NOCTILUCA. Todos los derechos creativos reservados.
