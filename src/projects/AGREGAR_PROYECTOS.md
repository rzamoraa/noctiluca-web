# Instrucciones para Agregar Proyectos

## Estructura de Carpetas

Cada proyecto debe estar en su propia carpeta dentro de `src/projects/`:

```
src/projects/
├── concierto-neon-2024/
│   ├── images/
│   │   ├── main.jpg              # Imagen principal (600x400px recomendado)
│   │   ├── gallery-1.jpg
│   │   ├── gallery-2.jpg
│   │   ├── gallery-3.jpg
│   │   └── gallery-4.jpg
│   └── videos/
│       └── video-principal.mp4
│
├── festival-verano-2024/
│   ├── images/
│   │   ├── main.jpg
│   │   ├── gallery-1.jpg
│   │   └── gallery-2.jpg
│   └── videos/
│       └── evento.mp4
│
└── projects.config.js            # Configuración principal
```

## Paso a Paso para Crear un Nuevo Proyecto

### 1. Crear la carpeta del proyecto
```bash
mkdir src/projects/mi-nuevo-proyecto
mkdir src/projects/mi-nuevo-proyecto/images
mkdir src/projects/mi-nuevo-proyecto/videos
```

### 2. Agregar imágenes y videos
- Coloca la imagen principal en `images/main.jpg`
- Coloca imágenes de galería en `images/gallery-1.jpg`, etc.
- Coloca videos en `videos/video-principal.mp4`, etc.

**Recomendaciones:**
- Imagen principal: 600x400px, optimizada para web (JPEG, WebP)
- Imágenes galería: Mínimo 400x400px
- Videos: MP4 H.264, máximo 10MB por archivo

### 3. Actualizar `projects.config.js`

Abre el archivo `src/projects/projects.config.js` y agrega tu proyecto al array:

```javascript
{
  id: 'mi-nuevo-proyecto',                    # ID único (sin espacios, en minúsculas)
  title: 'Título del Proyecto',               # Título que se muestra
  description: 'Descripción completa...',     # Descripción larga para la página de detalle
  shortDescription: 'Desc. corta',            # Descripción corta para el grid (opcional)
  image: 'https://via.placeholder.com/600x400?text=Mi+Proyecto', # URL de imagen principal
  category: 'Concierto',                      # Categoría: Concierto, Festival, Artista, Otro
  year: 2024,                                 # Año del proyecto
  gallery: [
    'https://via.placeholder.com/400x400?text=Imagen+1',
    'https://via.placeholder.com/400x400?text=Imagen+2',
    // ...
  ],
  videos: [
    // URLs de videos (opcional)
  ],
  details: {
    role: 'Nuestro rol en el proyecto',
    tools: ['Herramienta 1', 'Herramienta 2', 'Herramienta 3'],
    team: 'Descripción del equipo',
    duration: 'X meses'
  }
}
```

## Ejemplos de Valores

### Categorías
```
'Concierto'
'Festival'
'Artista'
'Otro'
```

### Tools (Herramientas) - Ejemplos
```javascript
tools: [
  'Motion Design',
  '3D Mapping',
  'Sincronización Audiovisual',
  'Proyeccionismo',
  'Iluminación Interactiva',
  'VFX en Tiempo Real',
  'Escenografía Digital'
]
```

## Usando Imágenes Locales vs URLs

### Opción 1: URLs Externas (Más Simple)
```javascript
image: 'https://mi-servidor.com/imagen.jpg',
gallery: [
  'https://mi-servidor.com/galeria-1.jpg',
  'https://mi-servidor.com/galeria-2.jpg',
]
```

### Opción 2: Archivos Locales (Mejor Rendimiento)
1. Coloca las imágenes en `src/projects/mi-proyecto/images/`
2. Importa en el proyecto (requiere cambios en el build config)

**Nota:** Por ahora, recomendamos usar URLs externas o servicios como:
- Cloudinary
- Firebase Storage
- AWS S3
- Imgbb (gratis)

## Verificar que el Proyecto Aparece

1. Asegúrate de haber agregado el objeto a `projects.config.js`
2. Recarga la página en el navegador
3. El proyecto debe aparecer en la sección "Proyectos"
4. Haz clic en él para ver los detalles

## Eliminación de un Proyecto

Simplemente:
1. Elimina o comenta el objeto en `projects.config.js`
2. (Opcional) Mantén la carpeta con archivos para referencia

## Cambiar Orden de Proyectos

Los proyectos se muestran en el orden del array en `projects.config.js`. Cambia el orden de los objetos para reordenarlos en la galería.

## Problemas Comunes

### La imagen no aparece
- Verifica que la URL sea correcta
- Asegúrate de que el servidor esté funcionando
- Abre la consola (F12) para ver errores

### El proyecto no aparece en la galería
- Comprueba que el objeto esté correctamente agregado al array
- Verifica que no haya errores de sintaxis (comas, comillas)
- Recarga la página (Ctrl+Shift+R)

### Los videos no se reproducen
- Asegúrate de que el URL sea accesible
- Comprueba el formato del video (MP4 H.264 recomendado)
- Verifica el tamaño del archivo (< 10MB recomendado)

## Plantilla Rápida

Copia y pega esto como punto de partida:

```javascript
{
  id: 'nuevo-proyecto-id',
  title: 'Nuevo Proyecto',
  description: 'Descripción del proyecto...',
  shortDescription: 'Desc. corta',
  image: 'https://via.placeholder.com/600x400?text=Mi+Proyecto',
  category: 'Concierto',
  year: 2024,
  gallery: [
    'https://via.placeholder.com/400x400?text=Galeria+1',
    'https://via.placeholder.com/400x400?text=Galeria+2',
  ],
  videos: [],
  details: {
    role: 'Tu rol aquí',
    tools: ['Herramienta 1', 'Herramienta 2'],
    team: 'Descripción del equipo',
    duration: 'Duración'
  }
}
```

---

¡Listo! Tu proyecto ahora es parte del portafolio de NOCTILUCA.
