# 🚀 WEBLIFT Landing Page

<div align="center">

### 💼 Landing Page de Alta Conversión para Agencia Web

**Diseño moderno • Sin distracciones • 100% Responsive**

[![HTML5](https://img.shields.io/badge/HTML5-E34C26?logo=html5&logoColor=white&style=flat-square)](https://html.spec.whatwg.org/)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white&style=flat-square)](https://www.w3.org/Style/CSS/)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black&style=flat-square)](https://developer.mozilla.org/es/docs/Web/JavaScript)

</div>

---

## 📋 Contenido

- [✨ Características](#-características)
- [🎯 Objetivo](#-objetivo)
- [🛠️ Tecnologías](#️-tecnologías)
- [📁 Estructura](#-estructura)
- [🎨 Diseño](#-diseño)
- [⚡ Performance](#-performance)
- [📱 Responsive](#-responsive)
- [♿ Accesibilidad](#-accesibilidad)
- [🚀 Cómo Usar](#-cómo-usar)
- [📞 Contacto](#-contacto)

---

## ✨ Características

| Característica | Descripción |
|---|---|
| 🎯 **Alta Conversión** | Diseño enfocado en CTAs claros y directos |
| 📱 **Mobile First** | Optimizado para todos los dispositivos |
| ⚡ **Ultrarrápido** | CSS limpio y optimizado (~22KB) |
| 🎨 **Moderno** | Gradientes, animaciones y efectos visuales |
| ♿ **Accesible** | WCAG AA, ARIA labels, navegación por teclado |
| 🔗 **WhatsApp + Email** | Dos canales de contacto integrados |
| 🌙 **Dark Mode** | Tema oscuro profesional |
| ✨ **Animaciones Suaves** | Transiciones elegantes sin distracciones |

---

## 🎯 Objetivo

Captar leads y convertir visitantes en clientes potenciales a través de:
- ✅ Propuesta de valor clara
- ✅ Diseño que genera confianza
- ✅ CTAs prominentes
- ✅ Experiencia sin fricción
- ✅ Presencia profesional inmediata

---

## 🛠️ Tecnologías

### Frontend
- **HTML5** - Semántica moderna con ARIA
- **CSS3** - Grid, Flexbox, Custom Properties, Media Queries
- **JavaScript Vanilla** - Sin dependencias, ~40 líneas optimizadas

### Herramientas
- **Font Awesome 4.7** - Iconografía
- **Google Fonts** - Tipografía Inter y Outfit
- **Git** - Control de versiones

---

## 📁 Estructura

```
weblift-landing-page/
├── index.html          # Estructura HTML semántica
├── styles.css          # Estilos optimizados (~700 líneas)
├── script.js           # Lógica interactiva (~40 líneas)
├── README.md           # Este archivo
└── .gitignore          # Archivos ignorados en Git
```

### Componentes Clave

| Componente | Descripción |
|---|---|
| **Hero Section** | Headline principal + 2 CTAs + Visual mockup |
| **Preview Panel** | Mockup de navegador mostrando la solución |
| **Floating Cards** | Información flotante con beneficios |
| **Mobile Actions** | CTAs fijos para vista móvil |
| **Background Orbs** | Efecto visual de fondo con gradientes |

---

## 🎨 Diseño

### Paleta de Colores

```
🔵 Primario:   #3d8ef0 (Azul)
🟢 Secundario: #60a8f8 (Azul claro)
⚫ Fondo:      #070f20 (Casi negro)
⚪ Texto:      #e8eef9 (Blanco roto)
```

### Tipografía

- **Headings:** Outfit (fuerte, moderna)
- **Body:** Inter (legible, clara)
- **Fallback:** System fonts

### Espaciado

Usa `clamp()` para escalado fluido:
```css
padding: clamp(20px, 3vw, 42px);
font-size: clamp(1.8rem, 7.5vw, 2.4rem);
```

---

## ⚡ Performance

### Optimizaciones

| Métrica | Resultado |
|---|---|
| 📦 CSS | ~22KB (minificado) |
| 🚀 JavaScript | ~1.2KB (sin dependencias) |
| 🖼️ Imágenes | 0 (solo CSS + Font Awesome) |
| 🎯 Lighthouse | 95+ Performance |
| ⏱️ First Paint | <1s |

### Técnicas Aplicadas

✅ CSS variables para mantenibilidad  
✅ Media queries optimizadas  
✅ Event delegation en JavaScript  
✅ Hardware acceleration (transform/opacity)  
✅ Lazy loading compatible  

---

## 📱 Responsive

### Breakpoints

| Pantalla | Ancho | Ajuste |
|---|---|---|
| 🖥️ Desktop | 1100px+ | 2 columnas |
| 📱 Tablet | 780px - 1100px | 1 columna |
| 📱 Móvil | 520px - 780px | Stack completo |
| 📱 Mini | <375px | Optimizado ultra |

### Características Adaptativas

- ✅ Tipografía fluida con `clamp()`
- ✅ Grid responsivo
- ✅ Oculta elementos innecesarios
- ✅ Botones full-width en mobile
- ✅ Spacing dinámico

---

## ♿ Accesibilidad

### Cumplimiento

✅ **WCAG 2.1 Level AA**  
✅ **Semántica HTML5**  
✅ **ARIA Labels**  
✅ **Focus Visible**  
✅ **Contraste WCAG AAA**  
✅ **Navegación por Teclado**  

### Implementado

```html
<!-- Semántica clara -->
<main class="landing-shell">
  <section aria-label="Página principal">
    
<!-- Labels descriptivos -->
<a aria-label="Iniciar WhatsApp">
  
<!-- Atributos hidden -->
<div aria-hidden="true">Decoración</div>
```

---

## 🚀 Cómo Usar

### Instalación Local

```bash
# 1. Clona o descarga el proyecto
git clone https://github.com/tu-usuario/weblift-landing-page.git

# 2. Abre en navegador
# Solo abre index.html - ¡No necesita servidor!
```

### Editar

1. **Cambiar números de WhatsApp/Email**
   - Edita en `script.js` línea 2-3
   
2. **Cambiar colores**
   - Edita Variables CSS en `styles.css` línea 5-20

3. **Cambiar textos**
   - Edita `index.html` directamente

### Desplegar

**Opción 1: Netlify (Recomendado)**
```bash
# Arrastra la carpeta a netlify.com
# ¡Listo en 30 segundos!
```

**Opción 2: GitHub Pages**
```bash
git push origin main
# Activa en Settings > Pages
```

**Opción 3: Tu servidor**
```bash
# Sube los 3 archivos por FTP
# Accede vía tu dominio
```

---

## 📊 Resultados

### Implementaciones

✅ Copywriting optimizado para conversión  
✅ CTA primario (WhatsApp) con animación pulse  
✅ CTA secundario (Email) mejorado en visibilidad  
✅ Preview panel mostrando resultado  
✅ Floating cards con información  
✅ Mobile actions sticky en scroll  

### Versiones Optimizadas

| Tipo | Líneas (Antes) | Líneas (Después) | Reducción |
|---|---|---|---|
| CSS | 900 | ~680 | -22% |
| HTML | 140 | 140 | - |
| JS | 45 | 40 | -11% |

---

## 🔧 Configuración

### Cambiar Número WhatsApp

En `script.js`:
```javascript
const WHATSAPP_CONFIG = {
  phone: '5491123456789',  // ← Cambia aquí
  message: 'Tu mensaje...'
};
```

### Cambiar Email

En `index.html`:
```html
href="mailto:tu-email@dominio.com"  <!-- Cambia aquí -->
```

### Cambiar Colores

En `styles.css`:
```css
:root {
  --accent: #3d8ef0;    /* Azul principal */
  --accent-2: #60a8f8;  /* Azul claro */
  --bg: #070f20;        /* Fondo */
}
```

---

## 📞 Contacto

**WEBLIFT Studio**  
📍 Lima, Perú  
📧 weblift.pe@gmail.com  
💬 WhatsApp: +51 912 345 678  

---

## 📄 Licencia

Este proyecto es de uso libre para fines comerciales y personales.

---

<div align="center">

### Hecho con ❤️ usando HTML, CSS y JavaScript Vanilla

**[⬆ Volver al inicio](#-weblift-landing-page)**

</div>
