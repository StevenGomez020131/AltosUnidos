# Sitio Web Altos Unidos

Este es el sitio web completo para la Fundación Altos Unidos, A.C.

## 📁 Archivos Incluidos

- `index.html` - Página principal del sitio web
- `styles.css` - Estilos CSS con los colores de tu logo
- `script.js` - JavaScript para interactividad
- `logo.jpeg` - Tu logo oficial

## 🎨 Características

✅ **Diseño Responsive** - Se adapta a móviles, tablets y computadoras
✅ **Colores del Logo** - Paleta basada en tu logo (rosa/coral #E84A5F y azul #2A4494)
✅ **Navegación Fluida** - Menú fijo y navegación suave entre secciones
✅ **Sistema de Donaciones** - Formularios para donaciones únicas y recurrentes
✅ **Secciones Completas**:
   - Hero con llamado a la acción
   - Misión y visión
   - Problema y solución
   - Detalles del proyecto
   - Objetivo de recaudación con desglose visual
   - Impacto esperado con métricas animadas
   - Sección de donaciones
   - Transparencia y rendición de cuentas
   - Formulario de contacto
   - Footer completo

## 🚀 Cómo Publicar tu Sitio

### Opción 1: Hosting Gratis (Netlify - Recomendado)

1. Ve a https://www.netlify.com
2. Crea una cuenta gratis
3. Arrastra estos 4 archivos (index.html, styles.css, script.js, logo.jpeg) a Netlify
4. ¡Listo! Tu sitio estará en línea en segundos
5. Puedes conectar tu dominio altosunidos.com en la configuración

### Opción 2: GitHub Pages (Gratis)

1. Crea una cuenta en https://github.com
2. Crea un nuevo repositorio llamado "altosunidos"
3. Sube los 4 archivos al repositorio
4. En Settings > Pages, activa GitHub Pages
5. Tu sitio estará en https://tuusuario.github.io/altosunidos

### Opción 3: Vercel (Gratis)

1. Ve a https://vercel.com
2. Crea una cuenta gratis
3. Importa tu proyecto
4. Conecta tu dominio altosunidos.com

### Opción 4: Hosting Tradicional

Si ya tienes un hosting (como GoDaddy, Hostinger, etc.):
1. Accede a tu cPanel o panel de control
2. Ve al File Manager
3. Sube los 4 archivos a la carpeta public_html
4. Apunta tu dominio a tu servidor

## 🔧 Próximos Pasos - Integraciones Necesarias

### 1. Sistema de Donaciones
Actualmente hay botones pero necesitas integrar un procesador de pagos:

**Opciones Recomendadas para México:**
- **Stripe** (acepta tarjetas internacionales) - https://stripe.com/mx
- **Conekta** (mexicano, muy fácil) - https://conekta.com
- **PayPal** - https://paypal.com/mx
- **Mercado Pago** - https://mercadopago.com.mx

**Implementación Básica:**
```javascript
// En script.js, línea ~85
// Reemplaza el alert con tu integración real
// Ejemplo con Stripe:
stripe.redirectToCheckout({
  lineItems: [{price: 'price_xxx', quantity: 1}],
  mode: 'payment',
  successUrl: 'https://altosunidos.com/gracias',
  cancelUrl: 'https://altosunidos.com/donar',
});
```

### 2. Formulario de Contacto
El formulario necesita un backend para enviar emails:

**Opciones Gratuitas:**
- **Formspree** - https://formspree.io (muy fácil)
- **Web3Forms** - https://web3forms.com (gratis)
- **EmailJS** - https://emailjs.com

**Implementación con Formspree:**
```html
<!-- En index.html, actualiza el form -->
<form action="https://formspree.io/f/tu-id-aqui" method="POST">
```

### 3. Analytics (Opcional pero Recomendado)
Para ver cuántas personas visitan tu sitio:
- **Google Analytics** - https://analytics.google.com
- **Plausible** (más simple) - https://plausible.io

Agrega este código antes de `</head>` en index.html:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
```

## 📝 Personalización

### Cambiar Contenido
Todos los textos están en `index.html`. Puedes editarlos directamente.

### Cambiar Colores
Los colores están en `styles.css` en la sección `:root` (líneas 11-20).
Actualmente usa los colores de tu logo:
- Rosa/Coral: #E84A5F
- Azul: #2A4494

### Agregar Redes Sociales
En el footer (línea ~550 de index.html), actualiza los links:
```html
<a href="https://facebook.com/altosunidos">Facebook</a>
<a href="https://instagram.com/altosunidos">Instagram</a>
```

## 🔒 SSL/HTTPS
Netlify, Vercel y GitHub Pages incluyen HTTPS gratis automáticamente.
Para hosting tradicional, usa Let's Encrypt (gratis).

## 📧 Email Profesional
Recomiendo configurar emails con tu dominio:
- contacto@altosunidos.com
- donaciones@altosunidos.com
- info@altosunidos.com

Opciones:
- Google Workspace ($6/mes por usuario)
- Zoho Mail (gratis para 5 usuarios)
- Incluido en muchos hostings

## 🎯 SEO Básico (Ya Incluido)
El sitio ya tiene:
- Meta tags descriptivos
- Títulos optimizados
- Estructura semántica HTML5
- Enlaces internos

Para mejorar más:
1. Agrega Google Search Console
2. Crea un sitemap.xml
3. Registra tu sitio en directorios de ONGs

## 💡 Sugerencias Adicionales

1. **Blog**: Considera agregar un blog para compartir historias de impacto
2. **Dashboard de Transparencia**: Muestra en tiempo real el progreso de recaudación
3. **Testimonios**: Agrega una sección con testimonios de beneficiarios
4. **Galería**: Fotos del proyecto, eventos, comunidad
5. **Newsletter**: Captura emails para actualizaciones mensuales

## 🆘 Soporte

Si necesitas ayuda:
1. Revisa la documentación de tu hosting
2. Para Netlify/Vercel, tienen excelente documentación
3. Busca tutoriales en YouTube sobre "cómo publicar sitio HTML"

## 📞 Información de Contacto en el Sitio

Actualiza estos datos en el código (línea ~475):
- Email: contacto@altosunidos.com
- Ubicación: Los Altos de Jalisco, México

---

**¡Tu sitio está listo! 🎉**

Solo necesitas:
1. Subirlo a un hosting (recomiendo Netlify)
2. Integrar el sistema de pagos
3. Conectar el formulario de contacto
4. Conectar tu dominio altosunidos.com

Todo el diseño, estructura y funcionalidad ya están completos y listos para usar.
