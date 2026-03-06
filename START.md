# ⚡ Comenzar Aquí - NOCTILUCA

## 🚀 En 30 Segundos

```bash
# 1. Si npm run dev no está ejecutándose:
npm run dev

# 2. Abre en el navegador:
http://localhost:5173

# 3. ¡Listo! Tu sitio está funcionando
```

## 📋 Orden Recomendado de Lectura

1. **Este archivo** (Ya lo estás leyendo ✅)
2. **[RESUMEN.md](RESUMEN.md)** - Visión general (5 min)
3. **[GUIA_RAPIDA.md](GUIA_RAPIDA.md)** - Cómo cambiar cosas (10 min)
4. **Personaliza tu sitio** (20-30 min)
5. **[CHECKLIST.md](CHECKLIST.md)** - Antes de publicar

## 🎯 Lo Primero que Debes Hacer

### Opción A: Lectura Rápida (5 min)
```
1. Lee GUIA_RAPIDA.md por completo
2. Identifica los 3 cambios más importantes
3. Hazlos inmediatamente
```

### Opción B: Ver Primero (2 min)
```
1. npm run dev (si no está corriendo)
2. Abre http://localhost:5173
3. Haz scroll y ve cómo se ve
4. Luego lee GUIA_RAPIDA.md
```

### Opción C: Sumergirse (el que recomendamos)
```
1. Lee RESUMEN.md (entiendes la estructura)
2. Lee GUIA_RAPIDA.md (sabes qué cambiar)
3. Comienza: npm run dev
4. Personaliza mientras ves los cambios en vivo
```

## 📂 Archivos Más Importantes

```
Para CAMBIAR LOGO:
  → src/components/Home.jsx línea 30

Para CAMBIAR VIDEO:
  → src/components/Home.jsx línea 20

Para AGREGAR PROYECTO:
  → src/projects/projects.config.js

Para CAMBIAR COLORES:
  → tailwind.config.js línea 8

Para ACTUALIZAR REDES:
  → src/components/Footer.jsx línea 10
```

## 🎬 Mi Primer Cambio (5 minutos)

### Paso 1: Abre Home.jsx
```
Ruta: src/components/Home.jsx
```

### Paso 2: Busca "Logo" (línea ~30)
```jsx
// Busca esta línea:
<span className="text-noctiluca-accent font-bold text-xl">Logo</span>

// Cámbiala por:
<img src="tu-logo.svg" alt="Logo" className="w-24 h-24" />
```

### Paso 3: Guarda (Ctrl+S)
El navegador se actualizará automáticamente ✨

## 📚 Documentación Disponible

| Archivo | Para... | Tiempo |
|---------|---------|--------|
| [RESUMEN.md](RESUMEN.md) | Entender la estructura | 5 min |
| [GUIA_RAPIDA.md](GUIA_RAPIDA.md) | Hacer cambios rápidos | 10 min |
| [README.md](README.md) | Detalles técnicos | 15 min |
| [PERSONALIZACION.md](PERSONALIZACION.md) | Cambios avanzados | 20 min |
| [DEPLOYMENT.md](DEPLOYMENT.md) | Publicar el sitio | 15 min |
| [CHECKLIST.md](CHECKLIST.md) | Pre-lanzamiento | 10 min |
| [src/projects/AGREGAR_PROYECTOS.md](src/projects/AGREGAR_PROYECTOS.md) | Agregar proyectos | 10 min |

## ✅ Checklist de Inicio

- [ ] Leo este archivo (ahora)
- [ ] Tengo `npm run dev` ejecutándose
- [ ] Puedo acceder a http://localhost:5173
- [ ] Veo el sitio funcionando
- [ ] Leo GUIA_RAPIDA.md o RESUMEN.md
- [ ] Hago mi primer cambio (logo o video)

## 🆘 Si Algo No Funciona

```bash
# Problema: "npm run dev" no funciona
# Solución:
npm install          # Instala dependencias
npm run dev         # Intenta de nuevo

# Problema: Errores en consola (F12)
# Solución:
Ctrl+Shift+Del      # Limpia caché
Ctrl+Shift+R        # Recarga forzada

# Problema: Cambios no se ven
# Solución:
# Espera 2-3 segundos (Vite compila)
# Si persiste, recarga la página (F5)
```

## 🎨 Estructura Visual

```
┌─────────────────────────────────────────┐
│            HOME - Video  + Botones       │ ← Personaliza logo/video aquí
├─────────────────────────────────────────┤
│         NOSOTROS - Descripción           │
├─────────────────────────────────────────┤
│        PROYECTOS - Grid de tarjetas      │ ← Agrega proyectos aquí
├─────────────────────────────────────────┤
│         CONTACTO - Formulario            │
├─────────────────────────────────────────┤
│  FOOTER - Derechos + Redes Sociales      │ ← Actualiza redes aquí
└─────────────────────────────────────────┘
```

## 💡 Tips Rápidos

**Tip 1**: Cuando edites JS/JSX, Vite recarga automáticamente
**Tip 2**: Los cambios en .css se aplican sin recargar
**Tip 3**: Guarda con Ctrl+S y luego F5 si algo no actualiza
**Tip 4**: La consola (F12) te muestra errores detallados

## 🚀 Roadmap (Próximos Pasos)

```
Hoy:
├─ npm run dev
├─ Ver el sitio en 5173
└─ Leer este archivo

Esta semana:
├─ Cambiar logo
├─ Cambiar video
├─ Actualizar redes
└─ Agregar 1-2 proyectos

Próxima semana:
├─ Agregar más proyectos
├─ Integrar formulario
├─ Pasar el CHECKLIST
└─ Publicar en Vercel/Netlify
```

## 📞 Preguntas Frecuentes

**¿Por dónde empiezo?**
→ Lee [RESUMEN.md](RESUMEN.md)

**¿Cómo cambio el logo?**
→ Busca en [GUIA_RAPIDA.md](GUIA_RAPIDA.md)

**¿Cómo agrego un proyecto?**
→ Lee [src/projects/AGREGAR_PROYECTOS.md](src/projects/AGREGAR_PROYECTOS.md)

**¿Cómo publico el sitio?**
→ Consulta [DEPLOYMENT.md](DEPLOYMENT.md)

**¿Qué cambios son prioritarios?**
→ Lee la sección "Tareas Prioritarias" en [GUIA_RAPIDA.md](GUIA_RAPIDA.md)

## 🎉 ¡Estás Listo!

Tu portafolio está 100% configurado y listo para brillar. 

**Siguiente paso**: 
1. Ejecuta `npm run dev` si no lo has hecho
2. Abre [RESUMEN.md](RESUMEN.md) o [GUIA_RAPIDA.md](GUIA_RAPIDA.md)
3. Comienza a personalizar

---

**¿Tienes una pregunta?** La respuesta probablemente esté en uno de estos archivos.

**¿Necesitas más ayuda?** Abre la consola (F12) y busca mensajes de error específicos.

¡A diseñar! 🚀
