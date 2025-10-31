// ========================================
// INTERACTIONS - Lógica de interacciones
// ========================================

// Estado global de la aplicación
const appState = {
  currentSection: 'hero',
  activeModal: null,
  selectedCategory: null
};

// ========================================
// INICIALIZACIÓN
// ========================================
document.addEventListener('DOMContentLoaded', () => {
  initNavigation();
  initScrollAnimations();
  initQuestionCards();
  initModalHandlers();
  initTypewriterEffects();
});

// ========================================
// NAVEGACIÓN
// ========================================
function initNavigation() {
  const navbar = document.querySelector('.navbar');
  let lastScroll = 0;

  window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > lastScroll && currentScroll > 100) {
      navbar.classList.add('hidden');
    } else {
      navbar.classList.remove('hidden');
    }

    lastScroll = currentScroll;
  });

  // Smooth scroll para enlaces internos
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
}

// ========================================
// ANIMACIONES DE SCROLL
// ========================================
function initScrollAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });

  document.querySelectorAll('.scroll-reveal').forEach(el => {
    observer.observe(el);
  });
}

// ========================================
// TARJETAS DE PREGUNTAS
// ========================================
function initQuestionCards() {
  const questionCards = document.querySelectorAll('.question-card');

  questionCards.forEach(card => {
    card.addEventListener('click', (e) => {
      if (e.target.classList.contains('btn')) return;

      const category = card.dataset.category;
      showMangaList(category);
    });
  });
}

// Mostrar lista de mangas por categoría
function showMangaList(category) {
  const container = document.getElementById(`${category}-content`);
  
  if (!container) return;

  // Toggle visibility
  if (container.classList.contains('hidden')) {
    // Ocultar otros contenedores abiertos
    document.querySelectorAll('.manga-content').forEach(c => {
      if (c !== container) {
        c.classList.add('hidden');
        c.innerHTML = '';
      }
    });

    // Generar contenido
    const mangas = window.mangaData.database[category];
    if (!mangas) return;

    container.innerHTML = mangas.map(manga => createMangaCard(manga)).join('');
    container.classList.remove('hidden');

    // Agregar animación
    setTimeout(() => {
      container.querySelectorAll('.manga-card').forEach((card, index) => {
        setTimeout(() => {
          card.classList.add('fade-in');
        }, index * 100);
      });
    }, 10);

  } else {
    container.classList.add('hidden');
    setTimeout(() => {
      container.innerHTML = '';
    }, 300);
  }
}

// Crear tarjeta de manga
function createMangaCard(manga) {
  return `
    <div class="manga-card card" data-manga-id="${manga.id}">
      <img src="${manga.image}" alt="${manga.title}" class="manga-card-image" 
           onerror="this.src='data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 400 600%27%3E%3Crect width=%27400%27 height=%27600%27 fill=%27%231a1a1a%27/%3E%3Ctext x=%2750%25%27 y=%2750%25%27 text-anchor=%27middle%27 fill=%27%23666%27 font-size=%2720%27 font-family=%27Arial%27%3E${manga.title}%3C/text%3E%3C/svg%3E'">
      <div class="manga-card-content">
        <h3 class="manga-card-title">${manga.title}</h3>
        <div class="manga-card-meta">
          <span>📖 ${manga.author}</span>
          <span>📅 ${manga.year}</span>
        </div>
        <p class="manga-card-description">${manga.shortDesc}</p>
        <div style="margin-top: 0.5rem;">
          ${manga.tags.slice(0, 3).map(tag => `<span class="tag">${tag}</span>`).join('')}
        </div>
      </div>
    </div>
  `;
}

// ========================================
// MODAL DE MANGA
// ========================================
function initModalHandlers() {
  // Cerrar modal al hacer clic fuera
  document.addEventListener('click', (e) => {
    if (e.target.classList.contains('modal-overlay')) {
      closeModal();
    }
  });

  // Cerrar modal con ESC
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && appState.activeModal) {
      closeModal();
    }
  });
}

function openMangaModal(mangaId) {
  const manga = window.mangaData.getById(mangaId);
  if (!manga) return;

  const modalHTML = `
    <div class="modal-overlay active" id="manga-modal">
      <div class="modal">
        <div class="modal-header">
          <h2 class="modal-title">${manga.title}</h2>
          <button class="modal-close" onclick="closeModal()">✕</button>
        </div>
        <div class="modal-body">
          <div style="display: grid; grid-template-columns: 200px 1fr; gap: 2rem; margin-bottom: 2rem;">
            <img src="${manga.image}" alt="${manga.title}" 
                 style="width: 100%; border-radius: var(--radius-md); box-shadow: var(--shadow-lg);"
                 onerror="this.src='data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 300 450%27%3E%3Crect width=%27300%27 height=%27450%27 fill=%27%231a1a1a%27/%3E%3Ctext x=%2750%25%27 y=%2750%25%27 text-anchor=%27middle%27 fill=%27%23666%27 font-size=%2720%27 font-family=%27Arial%27%3E${manga.title}%3C/text%3E%3C/svg%3E'">
            <div>
              <div style="margin-bottom: 1rem;">
                <span style="color: var(--text-muted); font-size: 0.875rem;">Autor:</span>
                <strong style="color: var(--text-primary); margin-left: 0.5rem;">${manga.author}</strong>
              </div>
              <div style="margin-bottom: 1rem;">
                <span style="color: var(--text-muted); font-size: 0.875rem;">Año:</span>
                <strong style="color: var(--text-primary); margin-left: 0.5rem;">${manga.year}</strong>
              </div>
              <div style="margin-bottom: 1rem;">
                <span style="color: var(--text-muted); font-size: 0.875rem;">Género:</span>
                <div style="margin-top: 0.5rem;">
                  ${manga.genre.map(g => `<span class="tag tag-blue">${g}</span>`).join('')}
                </div>
              </div>
              <div style="margin-top: 1.5rem;">
                ${manga.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
              </div>
            </div>
          </div>

          <div class="quote-box">
            <p class="quote-text">${manga.quote}</p>
            <p class="quote-author">— ${manga.title}</p>
          </div>

          <div style="margin: 2rem 0;">
            <h3 style="color: var(--text-primary); margin-bottom: 1rem;">📖 Sinopsis</h3>
            <p style="color: var(--text-secondary); line-height: 1.8;">${manga.fullDesc}</p>
          </div>

          <div style="margin: 2rem 0;">
            <h3 style="color: var(--color-primary); margin-bottom: 1rem;">💭 Crítica Social y Política</h3>
            <p style="color: var(--text-secondary); line-height: 1.8; background: var(--bg-darker); padding: 1.5rem; border-radius: var(--radius-md); border-left: 3px solid var(--color-primary);">
              ${manga.critique}
            </p>
          </div>

          ${createRelatedMangasSection(manga)}
        </div>
      </div>
    </div>
  `;

  document.body.insertAdjacentHTML('beforeend', modalHTML);
  document.body.style.overflow = 'hidden';
  appState.activeModal = 'manga-modal';
}

function createRelatedMangasSection(manga) {
  const related = window.mangaData.getRelated(manga.id);
  if (related.length === 0) return '';

  return `
    <div style="margin: 2rem 0;">
      <h3 style="color: var(--text-primary); margin-bottom: 1rem;">🔗 Temas relacionados</h3>
      <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(150px, 1fr)); gap: 1rem;">
        ${related.map(m => `
          <div class="card scale-hover" style="padding: 1rem; cursor: pointer; text-align: center;" onclick="switchManga('${m.id}')">
            <img src="${m.image}" alt="${m.title}" 
                 style="width: 100%; height: 200px; object-fit: cover; border-radius: var(--radius-sm); margin-bottom: 0.5rem;"
                 onerror="this.src='data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 200 200%27%3E%3Crect width=%27200%27 height=%27200%27 fill=%27%231a1a1a%27/%3E%3Ctext x=%2750%25%27 y=%2750%25%27 text-anchor=%27middle%27 fill=%27%23666%27 font-size=%2716%27 font-family=%27Arial%27%3E${m.title}%3C/text%3E%3C/svg%3E'">
            <h4 style="font-size: 0.875rem; color: var(--color-primary);">${m.title}</h4>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

function switchManga(mangaId) {
  closeModal();
  setTimeout(() => {
    openMangaModal(mangaId);
  }, 300);
}

function closeModal() {
  const modal = document.getElementById('manga-modal');
  if (modal) {
    modal.classList.remove('active');
    setTimeout(() => {
      modal.remove();
      document.body.style.overflow = '';
      appState.activeModal = null;
    }, 300);
  }
}

// ========================================
// EFECTOS DE TEXTO
// ========================================
function initTypewriterEffects() {
  const typewriterElements = document.querySelectorAll('.typewriter');
  
  typewriterElements.forEach(element => {
    const text = element.textContent;
    element.textContent = '';
    element.style.display = 'inline-block';
    
    let i = 0;
    const interval = setInterval(() => {
      if (i < text.length) {
        element.textContent += text.charAt(i);
        i++;
      } else {
        clearInterval(interval);
      }
    }, 50);
  });
}

// ========================================
// UTILIDADES
// ========================================

// Debounce function para optimizar scroll
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Exponer funciones globalmente
window.appFunctions = {
  showMangaList,
  openMangaModal,
  closeModal,
  switchManga
};
