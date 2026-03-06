# 🌙 NOCTILUCA Portfolio - Inicio Rápido

¡Bienvenido al portafolio web de NOCTILUCA! Este documento te guiará en los primeros pasos.

## 📌 Lo Primero: Lee Esto

Tu sitio web está funcionando. Para acceder:
- **En desarrollo**: [http://localhost:5173](http://localhost:5173)
- **Tras publicar**: Tu dominio personalizado

## 🚀 Primeros 30 Minutos

### 1. Ver el sitio funcionando
```bash
npm run dev
```
Se abrirá automáticamente en http://localhost:5173

### 2. Cambiar el logo (2 minutos)
Abre: `src/components/Home.jsx`
Busca la línea con "Logo" y reemplázala con tu imagen.

Más detalles en: [GUIA_RAPIDA.md](GUIA_RAPIDA.md)

### 3. Agregar tu primer proyecto (10 minutos)
Abre: `src/projects/projects.config.js`
Agrega tu proyecto siguiendo la plantilla.

Instrucciones detalladas: [src/projects/AGREGAR_PROYECTOS.md](src/projects/AGREGAR_PROYECTOS.md)

## 📚 Documentación Principal

### Para Empezar
- **👉 [GUIA_RAPIDA.md](GUIA_RAPIDA.md)** - Referencia rápida de comandos y cambios
- **[README.md](README.md)** - Documentación técnica completa

### Para Personalizar
- **[PERSONALIZACION.md](PERSONALIZACION.md)** - Cómo cambiar colores, textos, formularios
- **[src/projects/AGREGAR_PROYECTOS.md](src/projects/AGREGAR_PROYECTOS.md)** - Cómo agregar proyectos

### Para Publicar
- **[DEPLOYMENT.md](DEPLOYMENT.md)** - Cómo poner el sitio en vivo

## 🎯 Tareas Prioritarias

- [ ] **Logo**: Reemplazar placeholder con tu logotipo
- [ ] **Video**: Cambiar video principal del home
- [ ] **Redes Sociales**: Actualizar enlaces en footer
- [ ] **Primer Proyecto**: Agregar un proyecto real
- [ ] **Crear 3-5 más**: Completa tu portafolio
- [ ] **Formulario**: Conectar con EmailJS o Formspree
- [ ] **Publicar**: Deploy en Vercel o tu servidor

## 📂 Estructura Rápida

```
src/
├── components/          ← Edita estos archivos
│   ├── Home.jsx         ← Logo y video aquí
│   ├── Footer.jsx       ← Redes sociales aquí
│   └── Contact.jsx      ← Formulario
├── projects/            ← Agrega proyectos aquí
│   └── projects.config.js
└── App.jsx
```

## ⌨️ Comandos Importantes

```bash
npm run dev        # Ver cambios en tiempo real
npm run build      # Compilar para producción
npm run preview    # Ver cómo se vería publicado
```

## 🎨 Personalizaciones Comunes

| Cambio | Archivo | Línea |
|--------|---------|-------|
| Logo | `src/components/Home.jsx` | ~30 |
| Video | `src/components/Home.jsx` | ~20 |
| Colores | `tailwind.config.js` | ~8 |
| Redes | `src/components/Footer.jsx` | ~10 |
| Proyectos | `src/projects/projects.config.js` | Cualquiera |

## 🆘 Necesito Ayuda Con...

**Logo/Video no se ve**: [PERSONALIZACION.md](PERSONALIZACION.md#1-logo-de-noctiluca-prioritario)

**¿Cómo agrego un proyecto?**: [src/projects/AGREGAR_PROYECTOS.md](src/projects/AGREGAR_PROYECTOS.md)

**Cambiar colores**: [PERSONALIZACION.md#cambiar-colores](PERSONALIZACION.md#cambiar-colores)

**Publicar el sitio**: [DEPLOYMENT.md](DEPLOYMENT.md)

**Fórmula de contacto funcional**: [PERSONALIZACION.md#4-formula rio-de-contacto---backend](PERSONALIZACION.md)

## 🎬 Próximas Acciones Recomendadas

1. **Ahora (5 min)**: Lee [GUIA_RAPIDA.md](GUIA_RAPIDA.md)
2. **Hoy (30 min)**: Cambia logo, video y redes sociales
3. **Esta semana (2-3 horas)**: Agrega tus 3-5 proyectos mejores
4. **Próximo**: Integra formulario y publica

## ✅ Checklist Antes de Publicar

- [ ] Logo real agregado
- [ ] Video principal funcional
- [ ] Redes sociales correctas
- [ ] Mínimo 3 proyectos
- [ ] Formulario funcional
- [ ] Colores ajustados (opcional)
- [ ] Responsivo en mobile ✅ Ya está
- [ ] Sin errores en consola

## 📞 Soporte

Si encuentras problemas:
1. Busca en [GUIA_RAPIDA.md](GUIA_RAPIDA.md) → Errores Comunes
2. Revisa [README.md](README.md) → Troubleshooting
3. Abre la consola (F12) y busca mensajes de error
4. Compara tu código con los ejemplos

## 🎉 ¡Listo!

Tu portafolio profesional está configurado y listo para brillar.

**Siguiente paso**: Abre [GUIA_RAPIDA.md](GUIA_RAPIDA.md) 👉

---

**© 2024 NOCTILUCA** - Transformando visiones en experiencias visuales inmersivas
