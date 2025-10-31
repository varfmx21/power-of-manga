# 📖 Manga & Sociedad

> Explora la sociedad a través del manga. Análisis crítico de obras que cuestionan el poder, la identidad y la justicia.

## 🎯 Descripción

Este proyecto es una plataforma web interactiva que explora cómo el manga japonés aborda temas críticos de nuestra sociedad contemporánea. Desde la vigilancia tecnológica hasta la crisis de identidad, cada obra seleccionada plantea preguntas profundas sobre el mundo en el que vivimos.

## ✨ Características

- 🎨 **Diseño minimalista y profesional** con paleta oscura y acentos vibrantes
- 💭 **Preguntas filosóficas interactivas** que guían la exploración
- 📚 **Base de datos curada** de mangas con análisis crítico social
- 🎭 **Animaciones suaves** con p5.js y CSS
- 📱 **Diseño totalmente responsive**
- 🔍 **Sistema de tags y búsqueda** por temas relacionados
- 📄 **Páginas de detalle individuales** para cada manga

## 🛠️ Tecnologías Utilizadas

- **HTML5** - Estructura semántica
- **CSS3** - Estilos modernos con variables CSS y animaciones
- **JavaScript (Vanilla)** - Sin frameworks, código puro y eficiente
- **p5.js** - Animaciones interactivas de fondo
- **Responsive Design** - Mobile-first approach

## 📁 Estructura del Proyecto

```
power-of-manga/
├── index.html              # Página principal
├── manga-detail.html       # Página de detalle de manga
├── src/
│   ├── css/
│   │   ├── main.css       # Estilos base y variables
│   │   ├── components.css # Componentes reutilizables
│   │   └── animations.css # Animaciones y transiciones
│   ├── js/
│   │   ├── data.js        # Base de datos de mangas
│   │   ├── interactions.js # Lógica de interacciones
│   │   └── sketch.js      # Animaciones p5.js
│   └── assets/
│       ├── images/
│       │   └── covers/    # Imágenes de portadas
│       ├── fonts/         # Fuentes personalizadas
│       └── data/          # Datos adicionales
├── .gitignore
└── README.md
```

## 🚀 Cómo Usar

### Opción 1: Abrir Directamente

1. Clona el repositorio:
   ```bash
   git clone https://github.com/varfmx21/power-of-manga.git
   cd power-of-manga
   ```

2. Abre `index.html` en tu navegador favorito.

### Opción 2: Servidor Local (Recomendado)

Para mejor experiencia con recursos locales:

```bash
# Con Python 3
python -m http.server 8000

# O con Node.js (si tienes npx instalado)
npx serve

# O con PHP
php -S localhost:8000
```

Luego visita: `http://localhost:8000`

## 🎨 Personalización

### Colores

Edita las variables CSS en `src/css/main.css`:

```css
:root {
  --accent-primary: #8b5cf6;    /* Púrpura */
  --accent-secondary: #ec4899;  /* Rosa */
  --accent-tertiary: #3b82f6;   /* Azul */
}
```

### Agregar Nuevos Mangas

Edita `src/js/data.js` y agrega tu manga a la categoría correspondiente:

```javascript
{
  id: 'tu-manga',
  title: 'Nombre del Manga',
  author: 'Autor',
  year: 2024,
  genre: ['Género 1', 'Género 2'],
  image: 'src/assets/images/covers/tu-manga.jpg',
  shortDesc: 'Descripción corta...',
  fullDesc: 'Descripción completa...',
  critique: 'Temas críticos...',
  quote: '"Cita memorable..."',
  relatedMangas: ['otro-manga-id'],
  tags: ['Tag1', 'Tag2']
}
```

## 📚 Mangas Incluidos

### Control
- Psycho-Pass
- Death Note
- Erased

### Verdad
- Monster
- Akira
- Paranoia Agent

### Justicia
- Vinland Saga
- Attack on Titan
- Tokyo Ghoul

### Identidad
- Neon Genesis Evangelion
- Perfect Blue
- Goodnight Punpun

## 🤝 Contribuciones

Las contribuciones son bienvenidas! Si quieres agregar más mangas, mejorar el diseño o añadir funcionalidades:

1. Fork el proyecto
2. Crea tu rama de feature (`git checkout -b feature/NuevoManga`)
3. Commit tus cambios (`git commit -m 'Add: nuevo manga'`)
4. Push a la rama (`git push origin feature/NuevoManga`)
5. Abre un Pull Request

## 📝 Notas Importantes

- **Uso Educativo**: Este proyecto tiene fines educativos y de análisis cultural.
- **Derechos de Autor**: Todas las obras mencionadas son propiedad de sus respectivos autores y editoriales.
- **Imágenes**: Por defecto, el proyecto usa placeholders. Asegúrate de tener los derechos para usar cualquier imagen.

## 📄 Licencia

Este proyecto es de código abierto y está disponible bajo la licencia MIT.

## 👤 Autor

Creado con 💭 por un amante del manga y la crítica social.

## 🌟 Agradecimientos

- A todos los mangakas cuyas obras inspiraron este proyecto
- A la comunidad de desarrolladores web
- A los usuarios que exploran y reflexionan sobre estas narrativas

---

**¿Tienes sugerencias o encontraste un bug?** Abre un issue o contáctame.

**¿Te gustó el proyecto?** Dale una ⭐ en GitHub!