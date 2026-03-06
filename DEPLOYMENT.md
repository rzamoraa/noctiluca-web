# 🚀 Guía de Deployment del Portafolio NOCTILUCA

## Opciones de Alojamiento Recomendadas

### 1. **Vercel** (Recomendado para Vite + React) ⭐
Muy rápido, fácil de usar, dominio gratis.

**Pasos:**
1. Crea cuenta en https://vercel.com
2. Conecta tu repositorio GitHub
3. Vercel detecta automáticamente que es un proyecto Vite
4. Click en "Deploy"
5. Tu sitio estará en vivo en segundos

Configuración automática: ✅ Sin configuración necesaria

### 2. **Netlify**
Alternativa excelente a Vercel, muy similar.

**Pasos:**
1. Ve a https://netlify.com
2. Conecta tu repositorio
3. Build command: `npm run build`
4. Publish directory: `dist`
5. Deploy

### 3. **GitHub Pages** (Gratis)
Si tu repositorio es público.

**Pasos:**
1. En `vite.config.js`, agrega:
```javascript
export default {
  base: '/nombre-repo/',
  // ... resto de config
}
```

2. En `package.json`, agrega script:
```json
"deploy": "npm run build && gh-pages -d dist"
```

3. Instala gh-pages:
```bash
npm install -D gh-pages
```

4. Ejecuta:
```bash
npm run deploy
```

### 4. **Servidor Propio / VPS**
Para máximo control (DigitalOcean, Linode, AWS)

**Pasos:**
1. `npm run build` (crea carpeta `dist/`)
2. Sube solo la carpeta `dist/` a tu servidor
3. Configura tu servidor web (Nginx/Apache)

Ejemplo con Nginx:
```nginx
server {
    listen 80;
    server_name noctiluca.com;
    
    root /var/www/noctiluca/dist;
    index index.html;
    
    location / {
        try_files $uri $uri/ /index.html;
    }
}
```

## Dominio Personalizado

### Apuntar dominio a Vercel/Netlify:
1. Compra dominio (Namecheap, GoDaddy, Google Domains)
2. En el control DNS del dominio, agrega records CNAME:
   - `www` → `cname.vercel.com` (o similar)
   - `@` → IP proporcionada por Vercel
3. En Vercel/Netlify, agrega el dominio en settings
4. Espera 24-48 horas para propagación DNS

### Certificado SSL (HTTPS):
- **Vercel/Netlify**: Automático ✅
- **Servidor propio**: Let's Encrypt (certbot) - Gratis

## Pre-Deploy Checklist

- [ ] Agregado logo real
- [ ] Video principal funcional
- [ ] Todos los proyectos agregados
- [ ] Redes sociales actualizadas
- [ ] Formulario de contacto funcional
- [ ] Enlaces internos funcionan
- [ ] Responsive responsive (mobile, tablet, desktop)
- [ ] Images optimizadas
- [ ] `npm run build` sin errores
- [ ] `npm run preview` se ve bien
- [ ] Performancia testada (PageSpeed Insights)

## Build y Deploy Manual

### 1. Build para Producción
```bash
npm run build
```

Esto crea la carpeta `dist/` con todos los archivos optimizados.

### 2. Preview (Simula servidor)
```bash
npm run preview
```

Abre http://localhost:4173 para ver cómo se verá en producción.

### 3. Verificar Tamaño
```bash
npm run build
# Ver tamaño en dist/
```

Objetivo: < 500KB (sin media)

## Variables de Entorno

Si necesitas URLs de APIs o claves:

**Crea archivo `.env`:**
```
VITE_API_URL=https://api.noctiluca.com
VITE_EMAIL_SERVICE_KEY=tu_llave_aqui
```

**En componentes:**
```javascript
const apiUrl = import.meta.env.VITE_API_URL
```

**IMPORTANTE:** No commits `.env` a GitHub si tiene datos sensibles.

## Monitoreo y Analytics

### Google Analytics
1. Ve a https://analytics.google.com
2. Crea una propiedad
3. Copia el ID
4. Instala: `npm install web-vitals`
5. En `main.jsx`:
```javascript
import { getCLS, getFID, getFCP, getLCP, getTTFB } from 'web-vitals'

getCLS(console.log)
getFID(console.log)
// etc...
```

### Alternativas
- **Vercel Analytics**: Incluido automáticamente en Vercel
- **Plausible**: https://plausible.io (Privacy-first)
- **Fathom**: https://usefathom.com (Alternativa privada)

## Performance Optimization

### Antes de Deploy

1. **Optimizar Imágenes**
```bash
npm install -D @vitejs/plugin-basic-ssl
```

2. **Lazy Loading de Imágenes**
```jsx
<img src="..." loading="lazy" />
```

3. **Code Splitting** (Automático con Vite)

4. **Comprimir Assets**
Vercel/Netlify lo hacen automáticamente.

### Medir Rendimiento
- Google PageSpeed Insights: https://pagespeed.web.dev
- WebPageTest: https://www.webpagetest.org

Objetivo: Score > 90

## Troubleshooting

### Error: "Cannot find module"
```bash
rm -rf node_modules package-lock.json
npm install
```

### Build falla
```bash
npm run build 2>&1  # Ver errores completos
npm run preview     # Probar localmente
```

### Sitio ve mal en producción
- Verifica rutas relativas vs absolutas
- Mira en Dev Tools (F12) errores de consola
- Prueba `npm run preview`

### Dominio no apunta correctamente
- Espera propagación DNS (24-48 horas)
- Verifica registros A/CNAME correctos
- Limpia cache: Ctrl+Shift+Del

## Actualizaciones Futuras

Después de deployer:

```bash
# Pull cambios
git pull

# Reinstalar si hay nuevas dependencias
npm install

# Deploy automático (si usas Vercel/Netlify)
git push  # Se detecta automáticamente y redeploya
```

## Contacto y Soporte

Para problemas de deployment:
1. Verifica la documentación oficial
2. Contacta al equipo de soporte de tu plataforma
3. Consulta con el equipo de desarrollo

---

¡Tu portafolio está listo para el mundo! 🌍
