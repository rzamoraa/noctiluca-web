# 🚢 Pre-Launch Checklist - NOCTILUCA

Usa esta lista para asegurarte de que todo está listo antes de publicar tu sitio.

## ✋ Antes de Empezar

- [ ] El servidor de Vite se está ejecutando (`npm run dev`)
- [ ] Puedes acceder a http://localhost:5173
- [ ] No hay errores en la consola (F12)

## 🎨 Contenido Visual

### Logo
- [ ] Reemplazaste el placeholder "Logo" con tu imagen real
- [ ] El logo se ve bien en desktop
- [ ] El logo se ve bien en mobile
- [ ] El logo está en la ubicación correcta (`src/components/Home.jsx`)

### Video Principal
- [ ] Reemplazaste el placeholder "Video Placeholder"
- [ ] El video se carga correctamente
- [ ] El video se reproduce automáticamente
- [ ] El video tiene loop y mute activados
- [ ] El video se ve bien en desktop y mobile

### Imágenes de Proyectos
- [ ] Tienes imágenes para cada proyecto
- [ ] Las imágenes están optimizadas (< 200KB es ideal)
- [ ] Las URLs de imágenes son válidas y accesibles
- [ ] Las imágenes se ven bien en el grid

## 📝 Contenido Textual

### Sección "Nosotros"
- [ ] Actualizaste la descripción
- [ ] Las palabras clave tienen los colores correctos
- [ ] El texto describe adecuadamente tu empresa

### Formulario de Contacto
- [ ] El formulario se envía sin errores
- [ ] Recibiste un email de prueba (si lo integraste)
- [ ] Los campos son validados correctamente
- [ ] El formulario se ve bien en mobile

### Footer
- [ ] Los links de redes sociales son correctos
- [ ] Los links abren en nueva pestaña
- [ ] El texto de derechos está actualizado
- [ ] Los iconos se ven claros

## 🎯 Proyectos

### Número de Proyectos
- [ ] Tienes al menos 3 proyectos agregados
- [ ] Idealmente tienes 5-10 proyectos

### Información de Cada Proyecto
- [ ] Título descriptivo
- [ ] Descripción detallada
- [ ] Imagen principal (600x400px es ideal)
- [ ] Mínimo 2 imágenes de galería
- [ ] Año del proyecto
- [ ] Categoría correcta
- [ ] Detalles técnicos completos

### Estructura de Proyectos
- [ ] Todos los proyectos están en `projects.config.js`
- [ ] No hay errores de sintaxis en JSON
- [ ] Las URLs de imágenes están correctas
- [ ] Los IDs son únicos

## 🎨 Diseño y Estilos

### Colores
- [ ] Los colores de NOCTILUCA están en `tailwind.config.js`
- [ ] Los colores se ven como esperado
- [ ] El contraste es suficiente para legibilidad

### Responsive (Revisado en Mobile)
- [ ] El logo se vea bien en móvil
- [ ] Los botones sean clickeables
- [ ] El formulario sea usable
- [ ] El grid de proyectos responda correctamente
- [ ] El footer está bien formateado

### Gradiente Superior
- [ ] El gradiente es visible en todas las páginas
- [ ] Se devanece suavemente hacia el fondo
- [ ] No interfiere con el contenido

## 🔗 Enlaces y Navegación

### Scroll Snap
- [ ] Al hacer scroll, el sitio se alinea a las secciones
- [ ] No quedan secciones cortadas a la mitad
- [ ] La navegación es suave

### Botones de Navegación
- [ ] Los botones "Nosotros", "Proyectos", "Contacto" funcionan
- [ ] El scroll es suave al hacer click
- [ ] El botón "Volver" funciona correctamente

### Enlaces de Redes Sociales
- [ ] Todos los enlaces son válidos
- [ ] Se abren en nueva pestaña
- [ ] Apuntan a las redes correctas de NOCTILUCA

## ⚡ Rendimiento

### Velocidad de Carga
- [ ] El sitio carga en < 3 segundos
- [ ] Las imágenes cargan sin problemas
- [ ] No hay delays perceptibles

### Pruebas de Rendimiento
- [ ] Pasaste Google PageSpeed Insights (score > 70)
- [ ] No hay mensajes de error en consola
- [ ] La página responde bien interactuando

### Tamaño de Build
```bash
npm run build
# Verifica que el tamaño sea razonable
```

## 🌐 Antes de Publicar

### Dominio
- [ ] Compraste o tienes un dominio listo
- [ ] El dominio apunta al servidor correcto (si es VPS)
- [ ] HTTPS está habilitado

### Hosting
- [ ] Elegiste una plataforma (Vercel, Netlify, etc.)
- [ ] Creaste una cuenta
- [ ] Conectaste tu repositorio GitHub

### Build Final
```bash
npm run build      # Sin errores
npm run preview    # Se ve igual que en dev
```

- [ ] El build se ejecuta sin errores
- [ ] El preview se ve idéntico a dev
- [ ] No hay archivos faltantes

## 🔐 Seguridad y SEO

### Meta Tags
- [ ] El título de la página sea correcto
- [ ] La descripción sea clara

En `index.html`:
```html
<meta name="description" content="NOCTILUCA...">
<title>NOCTILUCA - Visuales y Diseño Escenográfico</title>
```

### SSL/HTTPS
- [ ] El sitio tiene certificado SSL
- [ ] Usa HTTPS en todas las páginas
- [ ] No hay advertencias de navegador

## 📱 Testing Final

### Desktop (Chrome, Firefox, Safari)
- [ ] Página carga correctamente
- [ ] Todos los estilos aplican
- [ ] Formulario funciona
- [ ] Videos reproducen

### Tablet (iPad)
- [ ] Responsive layout funciona
- [ ] Scroll snap responde bien
- [ ] Botones son clickeables

### Mobile (iPhone, Android)
- [ ] Texto es legible sin zoom
- [ ] Imágenes cargan rápido
- [ ] Formulario es usable
- [ ] Redes sociales son accesibles

### Navegadores Antiguos
- [ ] El sitio funciona en navegadores más viejos
- [ ] Al menos IE11 o versiones similares

## 📊 Después de Publicar

### Monitoreo
- [ ] Configuraste Google Analytics (opcional)
- [ ] Tienes forma de ver errores de usuarios
- [ ] Monitoreas el uptime del servidor

### Mantenimiento
- [ ] Anotaste la contraseña/acceso del hosting
- [ ] Tienes backups automáticos
- [ ] Sabes cómo actualizar el sitio

## 🎯 Objetivos de Publicación

Marca esta completada cuando:
- [ ] El sitio está accesible en tu dominio
- [ ] Los usuarios pueden ver todos tus proyectos
- [ ] El formulario de contacto funciona
- [ ] Se ve bien en todos los dispositivos

## 🎉 Después de Publicar

- [ ] Comparte el URL con tu equipo
- [ ] Solicita feedback
- [ ] Evalúa si hay cambios necesarios
- [ ] Planifica agregar más proyectos

## 📞 Si Algo Falla

| Error | Solución |
|-------|----------|
| Sitio no carga | Verifica conexión, recarga (Ctrl+Shift+R) |
| Imágenes no se ven | Verifica que las URLs sean correctas |
| Formulario no envía | Revisa credenciales de EmailJS/servicio |
| Scroll snap no funciona | Comprueba que sea un navegador moderno |
| Dominio no apunta | Espera 24-48h para propagación DNS |

## 🏁 Checklist Final (Antes de Cualquier URL Público)

- [ ] INICIO.md leído
- [ ] GUIA_RAPIDA.md revisado
- [ ] Todos los cambios visuales completados
- [ ] Todos los proyectos agregados
- [ ] Formulario funcional
- [ ] Testing completado en 3+ dispositivos
- [ ] No hay errores en consola
- [ ] Build sin errores
- [ ] Preview se ve perfecto
- [ ] Listo para publicar ✅

---

**Cuando hayas completado todos los puntos, tu sitio está listo para el mundo.**

¡Buena suerte! 🚀
