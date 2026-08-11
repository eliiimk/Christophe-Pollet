/* ================================================================
   CHRISTOPHE POLLET – script.js (Pro Edition)
   SPA · Parallax · Counter · Tilt 3D · Testimonials · FAB · Scroll
   ================================================================ */

'use strict';

/* ────────────────────────────────────────────────────────────────
   DONNÉES
──────────────────────────────────────────────────────────────── */
const DEFAULT_PROJECTS = [
  { id:'p1', titre:'Aménagement Cour & Parking en Béton Désactivé', categorie:'terrasse', ville:'Plaisir (78370)', date:'2024-03', desc:'Transformation d\'une cour brute en terre/gravier en un espace parking structuré avec bordures et béton désactivé.', avant:'assets/avantparking.jpg', apres:'assets/apresparking.jpg' },
  { id:'p2', titre:'Création de Terrasse & Aménagement Extérieur', categorie:'terrasse', ville:'Versailles (78000)', date:'2024-05', desc:'Pose de dalles et pavage de terrasse extérieure avec bordures de finition.', avant:'assets/avantterasse.jpg', apres:'assets/apresterasse.jpg' },
  { id:'p3', titre:'Réfection & Restauration de Mur Exterior', categorie:'maconnerie', ville:'Élancourt (78990)', date:'2023-10', desc:'Reprise de maçonnerie sur mur d\'enceinte et finition enduit/jointoiement.', avant:'assets/avantmur.jpg', apres:'assets/apresmur.jpg' },
  { id:'p4', titre:'Réparation et Scellement de Caniveau', categorie:'maconnerie', ville:'Saint-Germain-en-Laye (78100)', date:'2024-01', desc:'Remplacement du caniveau d\'évacuation des eaux de pluie et raccordement enrobé.', avant:'assets/avantcaniveau.jpg', apres:'assets/aprescaniveau.jpg' },
  { id:'p5', titre:'Restauration de Barrière & Clôture Béton', categorie:'maconnerie', ville:'Poissy (78300)', date:'2023-08', desc:'Reconstitution des éléments en béton et scellement d\'étanchéité.', avant:'assets/avantbarriere.jpg', apres:'assets/apresbarriere.jpg' },
  { id:'p6', titre:'Réfection Poteau de Clôture & Muret', categorie:'maconnerie', ville:'Trappes (78190)', date:'2024-07', desc:'Reprise de muret béton fissuré et consolidation du poteau d\'angle.', avant:'assets/avantpoteau.jpg', apres:'assets/aprespoteau.jpg' },
  { id:'p7', titre:'Pose et Scellement de Grille de Voirie', categorie:'maconnerie', ville:'Versailles (78000)', date:'2024-04', desc:'Réfection d\'enrobé dégradé autour du regard et pose d\'une grille de drainage neuve.', avant:'assets/avantgrille.jpg', apres:'assets/apresgrille.jpg' },
  { id:'p8', titre:'Caniveau de Sol & Finition Enrobé', categorie:'maconnerie', ville:'Plaisir (78370)', date:'2024-02', desc:'Pose d\'un caniveau de voirie et raccordement d\'enrobé noir à chaud.', avant:'assets/avantligne.jpg', apres:'assets/apresligne.jpg' },
  { id:'p9', titre:'Drainage & Surfaçage Sol en Béton', categorie:'renovation', ville:'Élancourt (78990)', date:'2023-11', desc:'Ouverture de tranchée, pose de réseau d\'évacuation et dalle béton avec siphon inox.', avant:'assets/avantcave.jpg', apres:'assets/aprescave.jpg' },
  { id:'p10', titre:'Raccordement Réseau Évacuation & Égout', categorie:'renovation', ville:'Poissy (78300)', date:'2023-09', desc:'Mise en conformité du réseau d\'évacuation d\'eau et scellement du sol.', avant:'assets/avantegout.jpg', apres:'assets/apresegout.jpg' },
  { id:'p11', titre:'Restauration Enduit Façade & Coffret', categorie:'ravalement', ville:'Trappes (78190)', date:'2024-06', desc:'Reprise d\'enduit lissé traditionnel sur façade autour du coffret technique.', avant:'assets/avantboitelettres.jpg', apres:'assets/apresboitelettres.jpg' },
  { id:'p12', titre:'Terrasse en Pierre Naturelle & Muret', categorie:'terrasse', ville:'Versailles (78000)', date:'2024-08', desc:'Réalisation d\'une terrasse d\'exception en pierre naturelle avec muret et palissade alu.', avant:'', apres:'assets/IMG_2890.jpg' },
  { id:'p13', titre:'Dallage de Cour & Finition Pierre', categorie:'terrasse', ville:'Plaisir (78370)', date:'2024-08', desc:'Finition soignée d\'un espace extérieur dallé sous auvent en bois traditionnel.', avant:'', apres:'assets/IMG_2895.jpg' }
];

const DEFAULT_DEVIS = [
  { id:'d1', date:'2024-08-01', prenom:'Marie', nom:'Lambert', tel:'06 12 34 56 78', email:'marie.lambert@email.fr', ville:'Plaisir', type:'Terrasse / Dallage', message:'Je voudrais créer une terrasse de 60m² en pierre naturelle.', statut:'new' },
  { id:'d2', date:'2024-07-28', prenom:'Pierre', nom:'Martin', tel:'06 98 76 54 32', email:'p.martin@email.fr', ville:'Versailles', type:'Ravalement de pierres', message:'Façade en pierre à ravaler, environ 120m².', statut:'contacted' },
  { id:'d3', date:'2024-07-15', prenom:'Sophie', nom:'Dubois', tel:'07 11 22 33 44', email:'', ville:'Élancourt', type:'Maçonnerie générale', message:'Mur de clôture fissuré à refaire sur 15 mètres.', statut:'done' }
];

const TESTIMONIALS = [
  { name:'Marc Tessier', ville:'Plaisir (78)', note:5, text:"Christophe a réalisé notre aménagement extérieur avec un soin remarquable. Travail propre, dans les délais, et un résultat vraiment magnifique. Je recommande sans hésitation !" },
  { name:'Isabelle Moulin', ville:'Versailles (78)', note:5, text:"Notre grille de voirie et sol extérieur étaient détériorés. Après l'intervention de Christophe, le travail est d'une propreté exemplaire !" },
  { name:'Patrick Garnier', ville:'Élancourt (78)', note:5, text:"Devis clair et transparent, respect total des délais, travail soigné. Christophe est un vrai professionnel de confiance." },
  { name:'Sophie Renaud', ville:'Saint-Germain-en-Laye (78)', note:5, text:"Réparation de notre clôture béton et travaux de terrassement réalisés avec soin. Excellent rapport qualité-prix." },
  { name:'Jean-Claude Morel', ville:'Maurepas (78)', note:5, text:"Très bon contact, ponctuel et rigoureux. Les finitions de maçonnerie et le drainage sont parfaits." }
];

/* ────────────────────────────────────────────────────────────────
   ÉTAT LOCAL
──────────────────────────────────────────────────────────────── */
let currentPage = 'accueil';
let currentFilter = 'all';
let editingDevisId = null;
let projects = [];
let devisEntries = [];
let testimonialIndex = 0;
let testimonialTimer = null;
let heroParallaxEnabled = true;

/* ────────────────────────────────────────────────────────────────
   INIT
──────────────────────────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  loadData();
  renderProjectsGrid();
  renderAdminProjects();
  renderDevisTable();
  updateAdminStats();
  setupDevisForm();
  setupAddProjectForm();
  setupScrollProgress();
  setupParallax();
  setupScrollButtons();
  setupCardTilt();
  setupIntersectionObserver();
  setupCounterAnimation();
  renderTestimonials();
  renderFaq();
  setupCharCounter();
  setupDarkMode();
  setupTimeline();
  setupLightbox();
  if (window._lucideRefresh) window._lucideRefresh();
});

/* ────────────────────────────────────────────────────────────────
   LOCALSTORAGE
──────────────────────────────────────────────────────────────── */
function loadData() {
  const dataVer = localStorage.getItem('cp_v6_force_clear');
  if (!dataVer) {
    localStorage.removeItem('cp_projects');
    localStorage.setItem('cp_v6_force_clear', 'true');
  }
  const savedProjects = localStorage.getItem('cp_projects');
  const savedDevis = localStorage.getItem('cp_devis');
  if (!savedProjects || savedProjects.includes('IMG_0426') || savedProjects.includes('before_')) {
    projects = [...DEFAULT_PROJECTS];
    localStorage.setItem('cp_projects', JSON.stringify(projects));
  } else {
    projects = JSON.parse(savedProjects);
  }
  devisEntries = savedDevis ? JSON.parse(savedDevis) : [...DEFAULT_DEVIS];
}

function saveData() {
  localStorage.setItem('cp_projects', JSON.stringify(projects));
  localStorage.setItem('cp_devis', JSON.stringify(devisEntries));
}

let isAdminLoggedIn = false;

function showPage(pageName) {
  if (pageName === 'admin' && !isAdminLoggedIn && sessionStorage.getItem('cp_admin_auth') !== 'true') {
    openAdminAuthModal();
    return;
  }

  if (pageName === currentPage) { window.scrollTo({ top: 0, behavior: 'smooth' }); return; }

  // Flash overlay
  const overlay = document.getElementById('page-overlay');
  if (overlay) {
    overlay.classList.add('flash');
    setTimeout(() => overlay.classList.remove('flash'), 250);
  }

  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));

  const page = document.getElementById('page-' + pageName);
  const navLink = document.getElementById('nav-' + pageName);
  if (page) page.classList.add('active');
  if (navLink) navLink.classList.add('active');

  closeBurger();
  window.scrollTo({ top: 0, behavior: 'smooth' });

  currentPage = pageName;
  heroParallaxEnabled = (pageName === 'accueil');

  if (window._lucideRefresh) window._lucideRefresh();

  if (pageName === 'realisations') {
    setTimeout(() => { renderProjectsGrid(); setupComparators(); setupIntersectionObserver(); }, 60);
  }
  if (pageName === 'admin') {
    renderAdminProjects();
    renderDevisTable();
    updateAdminStats();
  }
  if (pageName === 'accueil') {
    setTimeout(() => { setupCardTilt(); setupIntersectionObserver(); }, 100);
  }

  // Update scroll progress for new page
  updateScrollProgress();
}

/* ────────────────────────────────────────────────────────────────
   AUTHENTIFICATION ADMIN (CADENAS)
──────────────────────────────────────────────────────────────── */
function openAdminAuthModal() {
  const modal = document.getElementById('admin-auth-modal');
  const input = document.getElementById('admin-pass-input');
  const err = document.getElementById('admin-auth-error');
  if (!modal) return;
  if (err) err.style.display = 'none';
  if (input) { input.value = ''; input.classList.remove('error'); }
  modal.classList.add('open');
  if (window._lucideRefresh) window._lucideRefresh();
  setTimeout(() => { if (input) input.focus(); }, 120);
}

function closeAdminAuthModal() {
  const modal = document.getElementById('admin-auth-modal');
  if (modal) modal.classList.remove('open');
}

function handleAdminAuth(e) {
  if (e) e.preventDefault();
  const input = document.getElementById('admin-pass-input');
  const err = document.getElementById('admin-auth-error');
  const pass = input ? input.value.trim().toLowerCase() : '';

  if (pass === 'pollet') {
    isAdminLoggedIn = true;
    sessionStorage.setItem('cp_admin_auth', 'true');
    closeAdminAuthModal();
    if (typeof showToast === 'function') showToast('Connexion administrateur réussie !', 'success');

    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));

    const page = document.getElementById('page-admin');
    const navLink = document.getElementById('nav-admin');
    if (page) page.classList.add('active');
    if (navLink) navLink.classList.add('active');

    closeBurger();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    currentPage = 'admin';
    heroParallaxEnabled = false;

    renderAdminProjects();
    renderDevisTable();
    updateAdminStats();
    if (window._lucideRefresh) window._lucideRefresh();
  } else {
    if (err) err.style.display = 'block';
    if (input) { input.classList.add('error'); input.focus(); }
  }
}

function logoutAdmin() {
  isAdminLoggedIn = false;
  sessionStorage.removeItem('cp_admin_auth');
  if (typeof showToast === 'function') showToast('Déconnexion effectuée', 'info');
  showPage('accueil');
}

/* ────────────────────────────────────────────────────────────────
   SCROLL PROGRESS BAR
──────────────────────────────────────────────────────────────── */
function setupScrollProgress() {
  window.addEventListener('scroll', updateScrollProgress, { passive: true });
}

function updateScrollProgress() {
  const bar = document.getElementById('scroll-progress');
  if (!bar) return;
  const scrollTop = window.scrollY || document.documentElement.scrollTop;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
  bar.style.width = Math.min(pct, 100) + '%';
}

/* ────────────────────────────────────────────────────────────────
   PARALLAX HERO
──────────────────────────────────────────────────────────────── */
function setupParallax() {
  const heroBg = document.getElementById('hero-bg');
  if (!heroBg) return;

  // Disable on mobile (performance)
  if (window.innerWidth < 768) return;

  window.addEventListener('scroll', () => {
    if (!heroParallaxEnabled) return;
    const scrollY = window.scrollY;
    const maxScroll = window.innerHeight;
    if (scrollY <= maxScroll) {
      const offset = scrollY * 0.35;
      heroBg.style.transform = `translateY(${offset}px) scale(1.05)`;
    }
  }, { passive: true });

  // Initialize scale
  heroBg.style.transform = 'translateY(0px) scale(1.05)';
  heroBg.style.transformOrigin = 'center top';
}

/* ────────────────────────────────────────────────────────────────
   SCROLL BUTTONS (Back to top + FAB)
──────────────────────────────────────────────────────────────── */
function setupScrollButtons() {
  const fab = document.getElementById('fab-phone');
  const btt = document.getElementById('back-to-top');
  const navbar = document.getElementById('navbar');

  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;

    // Navbar scroll style
    if (navbar) navbar.classList.toggle('scrolled', scrollY > 50);

    // Show/hide FAB and back-to-top
    const show = scrollY > 400;
    if (fab) fab.classList.toggle('visible', show);
    if (btt) btt.classList.toggle('visible', show);
  }, { passive: true });
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

/* ────────────────────────────────────────────────────────────────
   BURGER MOBILE
──────────────────────────────────────────────────────────────── */
function toggleBurger() {
  const navLinks = document.getElementById('nav-links');
  const burger = document.getElementById('nav-burger');
  const isOpen = navLinks.classList.toggle('open');
  burger.classList.toggle('open', isOpen);
  burger.setAttribute('aria-expanded', isOpen);
}
function closeBurger() {
  const navLinks = document.getElementById('nav-links');
  const burger = document.getElementById('nav-burger');
  navLinks.classList.remove('open');
  burger.classList.remove('open');
  burger.setAttribute('aria-expanded', 'false');
}

/* ────────────────────────────────────────────────────────────────
   CARD 3D TILT EFFECT
──────────────────────────────────────────────────────────────── */
function setupCardTilt() {
  document.querySelectorAll('.service-card').forEach(card => {
    if (card.dataset.tiltInit) return;
    card.dataset.tiltInit = '1';

    const glow = card.querySelector('.card-glow');

    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = (e.clientX - cx) / (rect.width / 2);
      const dy = (e.clientY - cy) / (rect.height / 2);

      const tiltX = dy * -8;
      const tiltY = dx * 8;

      card.style.transform = `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) translateZ(8px)`;
      card.style.transition = 'transform 0.1s ease';

      if (glow) {
        const relX = e.clientX - rect.left;
        const relY = e.clientY - rect.top;
        glow.style.left = relX + 'px';
        glow.style.top = relY + 'px';
      }
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateZ(0)';
      card.style.transition = 'transform 0.4s ease, box-shadow 0.3s ease, border-color 0.3s ease';
    });

    // Keyboard accessibility: keep flat on focus
    card.addEventListener('focus', () => {
      card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateZ(4px)';
    });
    card.addEventListener('blur', () => {
      card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateZ(0)';
    });
  });
}

/* ────────────────────────────────────────────────────────────────
   COUNTER ANIMATION (count-up on scroll into view)
──────────────────────────────────────────────────────────────── */
function setupCounterAnimation() {
  const counters = document.querySelectorAll('.stat-number[data-target]');
  if (!counters.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !entry.target.dataset.animated) {
        entry.target.dataset.animated = '1';
        animateCounter(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  counters.forEach(c => observer.observe(c));
}

function animateCounter(el) {
  const target = parseInt(el.dataset.target, 10);
  const suffix = el.dataset.suffix || '';
  const duration = 1800;
  const startTime = performance.now();
  const startVal = 0;

  function ease(t) { return 1 - Math.pow(1 - t, 4); }

  function update(now) {
    const elapsed = now - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const current = Math.round(startVal + (target - startVal) * ease(progress));
    el.textContent = current.toLocaleString('fr-FR') + suffix;
    if (progress < 1) requestAnimationFrame(update);
  }

  requestAnimationFrame(update);
}

/* ────────────────────────────────────────────────────────────────
   TESTIMONIALS CAROUSEL
──────────────────────────────────────────────────────────────── */
function renderTestimonials() {
  const track = document.getElementById('testimonials-track');
  const dotsEl = document.getElementById('testimonials-dots');
  if (!track || !dotsEl) return;

  const starsSVG = (n) => Array.from({length: n}, () =>
    `<svg class="star" viewBox="0 0 24 24" fill="#FACC15" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
    </svg>`
  ).join('');

  track.innerHTML = TESTIMONIALS.map((t, i) => {
    const initials = t.name.split(' ').map(w => w[0]).join('').slice(0, 2);
    return `
    <div class="testimonial-card" role="group" aria-label="Témoignage de ${escapeHTML(t.name)}">
      <div class="testimonial-quote">"</div>
      <div class="testimonial-stars" aria-label="${t.note} étoiles sur 5">
        ${starsSVG(t.note)}
      </div>
      <p class="testimonial-text">"${escapeHTML(t.text)}"</p>
      <div class="testimonial-author">
        <div class="testimonial-avatar" aria-hidden="true">${escapeHTML(initials)}</div>
        <div class="testimonial-author-info">
          <strong>${escapeHTML(t.name)}</strong>
          <span>${escapeHTML(t.ville)}</span>
        </div>
      </div>
    </div>`;
  }).join('');

  // Dots
  dotsEl.innerHTML = TESTIMONIALS.map((_, i) =>
    `<button class="t-dot ${i === 0 ? 'active' : ''}" onclick="goToTestimonial(${i})" aria-label="Aller au témoignage ${i + 1}"></button>`
  ).join('');

  // Buttons
  document.getElementById('t-prev').onclick = () => goToTestimonial((testimonialIndex - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  document.getElementById('t-next').onclick = () => goToTestimonial((testimonialIndex + 1) % TESTIMONIALS.length);

  // Auto-play
  startTestimonialTimer();

  // Pause on hover
  const wrapper = document.querySelector('.testimonials-track-wrapper');
  if (wrapper) {
    wrapper.addEventListener('mouseenter', () => clearInterval(testimonialTimer));
    wrapper.addEventListener('mouseleave', startTestimonialTimer);
  }

  // Touch swipe
  let touchStartX = 0;
  track.addEventListener('touchstart', e => { touchStartX = e.touches[0].clientX; }, { passive: true });
  track.addEventListener('touchend', e => {
    const diff = touchStartX - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) {
      goToTestimonial(diff > 0
        ? (testimonialIndex + 1) % TESTIMONIALS.length
        : (testimonialIndex - 1 + TESTIMONIALS.length) % TESTIMONIALS.length
      );
    }
  }, { passive: true });
}

function getCardsPerView() {
  if (window.innerWidth < 768) return 1;
  if (window.innerWidth < 1024) return 2;
  return 3;
}

function goToTestimonial(idx) {
  testimonialIndex = idx;
  const track = document.getElementById('testimonials-track');
  const dots = document.querySelectorAll('.t-dot');
  if (!track) return;

  const perView = getCardsPerView();
  const maxIndex = Math.max(0, TESTIMONIALS.length - perView);
  const clampedIdx = Math.min(idx, maxIndex);
  const cardWidth = track.querySelector('.testimonial-card')?.offsetWidth || 0;
  const gap = 24;
  const offset = clampedIdx * (cardWidth + gap);
  track.style.transform = `translateX(-${offset}px)`;

  dots.forEach((d, i) => d.classList.toggle('active', i === idx));
}

function startTestimonialTimer() {
  clearInterval(testimonialTimer);
  testimonialTimer = setInterval(() => {
    goToTestimonial((testimonialIndex + 1) % TESTIMONIALS.length);
  }, 5000);
}

/* ────────────────────────────────────────────────────────────────
   CHAR COUNTER FOR TEXTAREA
──────────────────────────────────────────────────────────────── */
function setupCharCounter() {
  const textarea = document.getElementById('f-message');
  const counter = document.getElementById('char-count');
  if (!textarea || !counter) return;

  textarea.addEventListener('input', () => {
    const len = textarea.value.length;
    counter.textContent = len;
    counter.style.color = len > 450 ? 'var(--rouge)' : 'var(--gris-clair)';
  });
}

/* ────────────────────────────────────────────────────────────────
   PROJETS AVANT/APRÈS
──────────────────────────────────────────────────────────────── */
function renderProjectsGrid() {
  const grid = document.getElementById('projects-grid');
  if (!grid) return;

  const filtered = currentFilter === 'all'
    ? projects
    : projects.filter(p => p.categorie === currentFilter);

  if (filtered.length === 0) {
    grid.innerHTML = `<div style="grid-column:1/-1; text-align:center; padding:3rem; color:var(--gris-mid);">
      <p style="font-size:1.1rem;">Aucun chantier dans cette catégorie pour le moment.</p>
    </div>`;
    return;
  }

  grid.innerHTML = filtered.map(p => createProjectCardHTML(p)).join('');
}

function createProjectCardHTML(p) {
  const catLabels = {
    maconnerie: 'Maçonnerie',
    terrasse: 'Terrasse',
    ravalement: 'Ravalement',
    renovation: 'Rénovation'
  };

  const isSingle = !p.avant || p.avant.trim() === '' || p.avant === p.apres;

  const mediaHTML = isSingle ? `
    <div class="single-project-image" onclick="openLightbox('${p.apres}', '${escapeHTML(p.titre)}')" style="position:relative; width:100%; height:260px; overflow:hidden; cursor:zoom-in; border-radius:8px 8px 0 0;">
      <img src="${p.apres}" alt="${escapeHTML(p.titre)}" loading="lazy" style="width:100%; height:100%; object-fit:cover; display:block; transition:transform 0.4s ease;"/>
      <div style="position:absolute; bottom:12px; right:12px; background:rgba(0,0,0,0.65); color:#fff; font-size:0.75rem; font-weight:600; padding:4px 10px; border-radius:20px; backdrop-filter:blur(4px);">
        Réalisation
      </div>
    </div>` : `
    <div class="comparison-container" data-active="false">
      <img class="comparison-img after-img-bg" src="${p.apres}" alt="Après – ${escapeHTML(p.titre)}" loading="lazy"/>
      <img class="comparison-img before-img-top" src="${p.avant}" alt="Avant – ${escapeHTML(p.titre)}" loading="lazy"/>
      <div class="comparison-handle">
        <div class="comparison-handle-btn">⟺</div>
      </div>
      <span class="comparison-badge badge-avant">Avant</span>
      <span class="comparison-badge badge-apres">Après</span>
    </div>`;

  return `
  <div class="project-card fade-in" data-id="${p.id}" data-categorie="${p.categorie}">
    <div class="project-card-header">
      <span class="project-badge">${catLabels[p.categorie] || p.categorie}</span>
      <h3>${escapeHTML(p.titre)}</h3>
      <span class="project-location">${escapeHTML(p.ville)}</span>
    </div>
    ${mediaHTML}
    <div class="project-card-footer">
      <p class="project-desc">${escapeHTML(p.desc)}</p>
    </div>
  </div>`;
}

function filterProjects(filter) {
  currentFilter = filter;
  document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.toggle('active', btn.dataset.filter === filter));
  renderProjectsGrid();
  setTimeout(() => { setupComparators(); setupIntersectionObserver(); }, 60);
}

/* ────────────────────────────────────────────────────────────────
   COMPARATEUR AVANT/APRÈS
──────────────────────────────────────────────────────────────── */
function setupComparators() {
  document.querySelectorAll('.comparison-container').forEach(container => {
    if (container.dataset.initialized === 'true') return;
    container.dataset.initialized = 'true';

    const topImg = container.querySelector('.before-img-top') || container.querySelector('.before-img');
    const handle = container.querySelector('.comparison-handle');
    let isDragging = false;

    function setPosition(clientX) {
      const rect = container.getBoundingClientRect();
      let pos = (clientX - rect.left) / rect.width;
      pos = Math.max(0.02, Math.min(0.98, pos));
      const pct = pos * 100;
      if (topImg) topImg.style.clipPath = `inset(0 ${100 - pct}% 0 0)`;
      if (handle) handle.style.left = pct + '%';
    }

    container.addEventListener('mousedown', e => { isDragging = true; setPosition(e.clientX); e.preventDefault(); });
    document.addEventListener('mousemove', e => { if (isDragging) setPosition(e.clientX); });
    document.addEventListener('mouseup', () => { isDragging = false; });
    container.addEventListener('touchstart', e => { isDragging = true; setPosition(e.touches[0].clientX); }, { passive: true });
    document.addEventListener('touchmove', e => { if (isDragging) setPosition(e.touches[0].clientX); }, { passive: true });
    document.addEventListener('touchend', () => { isDragging = false; });

    if (topImg) topImg.style.clipPath = 'inset(0 50% 0 0)';
    if (handle) handle.style.left = '50%';
  });
}

/* ────────────────────────────────────────────────────────────────
   FORMULAIRE DEVIS
──────────────────────────────────────────────────────────────── */
function setupDevisForm() {
  const form = document.getElementById('devis-form');
  if (!form) return;

  form.addEventListener('submit', e => {
    e.preventDefault();

    const fields = [
      document.getElementById('f-prenom'),
      document.getElementById('f-nom'),
      document.getElementById('f-tel'),
      document.getElementById('f-ville'),
      document.getElementById('f-type'),
      document.getElementById('f-message')
    ];

    let valid = true;
    fields.forEach(el => {
      el.classList.remove('error');
      if (!el.value.trim()) { el.classList.add('error'); valid = false; }
    });

    if (!valid) { showToast('Veuillez remplir tous les champs obligatoires.', true); return; }

    const newDevis = {
      id: 'd' + Date.now(),
      date: new Date().toISOString().split('T')[0],
      prenom: fields[0].value.trim(),
      nom: fields[1].value.trim(),
      tel: fields[2].value.trim(),
      email: document.getElementById('f-email').value.trim(),
      ville: fields[3].value.trim(),
      type: fields[4].value,
      message: fields[5].value.trim(),
      statut: 'new'
    };

    devisEntries.unshift(newDevis);
    saveData();
    form.reset();
    document.getElementById('char-count').textContent = '0';
    fields.forEach(el => el.classList.remove('error'));
    showToast('Votre demande a bien été envoyée ! Nous vous répondrons sous 48h.', false);
  });
}

/* ────────────────────────────────────────────────────────────────
   ADMIN – DEVIS TABLE
──────────────────────────────────────────────────────────────── */
function renderDevisTable() {
  const tbody = document.getElementById('devis-tbody');
  if (!tbody) return;

  if (devisEntries.length === 0) {
    tbody.innerHTML = `<tr><td colspan="7" style="text-align:center;padding:2rem;color:var(--gris-mid);">Aucune demande de devis pour le moment.</td></tr>`;
    return;
  }

  const statusLabels = {
    new:       '<span class="status-badge new">Nouveau</span>',
    contacted: '<span class="status-badge contacted">Contacté</span>',
    done:      '<span class="status-badge done">Traité</span>',
    closed:    '<span class="status-badge closed">Clôturé</span>'
  };

  tbody.innerHTML = devisEntries.map(d => `
    <tr>
      <td>${formatDate(d.date)}</td>
      <td><strong>${escapeHTML(d.prenom)} ${escapeHTML(d.nom)}</strong></td>
      <td><a href="tel:${d.tel.replace(/\s/g,'')}">${escapeHTML(d.tel)}</a></td>
      <td>${escapeHTML(d.ville)}</td>
      <td>${escapeHTML(d.type)}</td>
      <td>${statusLabels[d.statut] || d.statut}</td>
      <td>
        <button class="action-btn edit" onclick="openEditModal('${d.id}')">Modifier</button>
        <button class="action-btn delete" onclick="deleteDevis('${d.id}')">Supprimer</button>
      </td>
    </tr>
  `).join('');
}

function deleteDevis(id) {
  if (!confirm('Supprimer cette demande de devis ?')) return;
  devisEntries = devisEntries.filter(d => d.id !== id);
  saveData();
  renderDevisTable();
  updateAdminStats();
  showToast('Demande supprimée.', false);
}

/* ────────────────────────────────────────────────────────────────
   MODAL STATUT
──────────────────────────────────────────────────────────────── */
function openEditModal(id) {
  editingDevisId = id;
  const devis = devisEntries.find(d => d.id === id);
  if (!devis) return;
  document.getElementById('modal-statut').value = devis.statut;
  document.getElementById('modal-overlay').classList.add('open');
}
function closeModal() {
  document.getElementById('modal-overlay').classList.remove('open');
  editingDevisId = null;
}
function saveStatus() {
  if (!editingDevisId) return;
  const newStatus = document.getElementById('modal-statut').value;
  const devis = devisEntries.find(d => d.id === editingDevisId);
  if (devis) {
    devis.statut = newStatus;
    saveData();
    renderDevisTable();
    updateAdminStats();
    showToast('Statut mis à jour.', false);
  }
  closeModal();
}
document.addEventListener('click', e => {
  const overlay = document.getElementById('modal-overlay');
  if (e.target === overlay) closeModal();
});

/* ────────────────────────────────────────────────────────────────
   ADMIN – CHANTIERS
──────────────────────────────────────────────────────────────── */
function renderAdminProjects() {
  const grid = document.getElementById('admin-projects-grid');
  if (!grid) return;

  if (projects.length === 0) {
    grid.innerHTML = `<p style="color:var(--gris-mid);">Aucun chantier enregistré.</p>`;
    return;
  }

  grid.innerHTML = projects.map(p => `
    <div class="admin-project-card" id="apc-${p.id}">
      <img class="admin-project-thumb" src="${p.apres}" alt="${escapeHTML(p.titre)}" loading="lazy"/>
      <div class="admin-project-body">
        <h3>${escapeHTML(p.titre)}</h3>
        <p>${escapeHTML(p.ville)} · ${formatMonth(p.date)}</p>
        <div class="admin-project-actions">
          <button class="action-btn delete" onclick="deleteProject('${p.id}')">Supprimer</button>
        </div>
      </div>
    </div>
  `).join('');
}

function deleteProject(id) {
  if (!confirm('Supprimer ce chantier du portefeuille ?')) return;
  projects = projects.filter(p => p.id !== id);
  saveData();
  renderAdminProjects();
  renderProjectsGrid();
  updateAdminStats();
  showToast('Chantier supprimé.', false);
}

/* ────────────────────────────────────────────────────────────────
   AJOUTER CHANTIER
──────────────────────────────────────────────────────────────── */
function setupAddProjectForm() {
  const form = document.getElementById('add-project-form');
  if (!form) return;

  form.addEventListener('submit', e => {
    e.preventDefault();
    const titre    = document.getElementById('ap-titre').value.trim();
    const categorie= document.getElementById('ap-categorie').value;
    const ville    = document.getElementById('ap-ville').value.trim();
    const date     = document.getElementById('ap-date').value;
    const desc     = document.getElementById('ap-desc').value.trim();
    const avant    = document.getElementById('ap-avant-url').value.trim() || 'assets/before_mur.png';
    const apres    = document.getElementById('ap-apres-url').value.trim() || 'assets/after_mur.png';

    if (!titre || !categorie) { showToast('Veuillez renseigner le titre et la catégorie.', true); return; }

    projects.unshift({ id: 'p' + Date.now(), titre, categorie, ville: ville || 'Yvelines (78)', date: date || new Date().toISOString().substring(0, 7), desc, avant, apres });
    saveData();
    form.reset();
    renderAdminProjects();
    renderProjectsGrid();
    updateAdminStats();
    showToast('Chantier ajouté avec succès !', false);
    switchAdminTab('chantiers');
  });
}

/* ────────────────────────────────────────────────────────────────
   ADMIN STATS
──────────────────────────────────────────────────────────────── */
function updateAdminStats() {
  animateAdminNumber('stat-nb-projets', projects.length);
  animateAdminNumber('stat-nb-devis', devisEntries.length);
  animateAdminNumber('stat-nb-traite', devisEntries.filter(d => d.statut === 'done').length);
  animateAdminNumber('stat-nb-new', devisEntries.filter(d => d.statut === 'new').length);
}

function animateAdminNumber(id, target) {
  const el = document.getElementById(id);
  if (!el) return;
  const start = parseInt(el.textContent) || 0;
  const duration = 500;
  const startTime = performance.now();
  function update(now) {
    const t = Math.min((now - startTime) / duration, 1);
    el.textContent = Math.round(start + (target - start) * (1 - Math.pow(1 - t, 3)));
    if (t < 1) requestAnimationFrame(update);
  }
  requestAnimationFrame(update);
}

/* ────────────────────────────────────────────────────────────────
   ADMIN TABS
──────────────────────────────────────────────────────────────── */
function switchAdminTab(tab) {
  document.querySelectorAll('.admin-tab').forEach(t => t.classList.remove('active'));
  document.querySelectorAll('.admin-panel').forEach(p => p.classList.remove('active'));
  const tabEl = document.getElementById('tab-' + tab);
  const panelEl = document.getElementById('panel-' + tab);
  if (tabEl) tabEl.classList.add('active');
  if (panelEl) panelEl.classList.add('active');
}

/* ────────────────────────────────────────────────────────────────
   TOAST
──────────────────────────────────────────────────────────────── */
let toastTimeout;
function showToast(msg, isError = false) {
  const toast = document.getElementById('toast');
  const toastMsg = document.getElementById('toast-msg');
  if (!toast || !toastMsg) return;

  toastMsg.textContent = msg;
  toast.classList.toggle('error', isError);

  clearTimeout(toastTimeout);
  toast.classList.add('show');
  if (window._lucideRefresh) window._lucideRefresh();

  toastTimeout = setTimeout(() => toast.classList.remove('show'), 4000);
}

/* ────────────────────────────────────────────────────────────────
   INTERSECTION OBSERVER (scroll reveal)
──────────────────────────────────────────────────────────────── */
function setupIntersectionObserver() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        // Stagger delay based on position in parent
        const siblings = Array.from(entry.target.parentElement?.children || []);
        const idx = siblings.indexOf(entry.target);
        entry.target.style.transitionDelay = `${Math.min(idx * 0.08, 0.32)}s`;
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.fade-in:not(.visible)').forEach(el => observer.observe(el));
}

/* ────────────────────────────────────────────────────────────────
   UTILITIES
──────────────────────────────────────────────────────────────── */
function escapeHTML(str) {
  if (!str) return '';
  return str.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&#039;');
}

function formatDate(dateStr) {
  if (!dateStr) return '—';
  try { return new Date(dateStr).toLocaleDateString('fr-FR'); } catch { return dateStr; }
}

function formatMonth(monthStr) {
  if (!monthStr) return '—';
  try {
    const [year, month] = monthStr.split('-');
    return new Date(parseInt(year), parseInt(month) - 1, 1)
      .toLocaleDateString('fr-FR', { month: 'long', year: 'numeric' });
  } catch { return monthStr; }
}

/* ────────────────────────────────────────────────────────────────
   KEYBOARD SHORTCUTS (pro touch)
──────────────────────────────────────────────────────────────── */
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    const overlay = document.getElementById('modal-overlay');
    if (overlay?.classList.contains('open')) closeModal();
    closeBurger();
  }
});

/* ────────────────────────────────────────────────────────────────
   DARK MODE
──────────────────────────────────────────────────────────────── */
function setupDarkMode() {
  if (localStorage.getItem('cp_dark') === '1') applyDark(true);
}
function toggleDark() {
  const isDark = document.documentElement.classList.toggle('dark-mode');
  localStorage.setItem('cp_dark', isDark ? '1' : '0');
  applyDark(isDark);
}
function applyDark(isDark) {
  document.documentElement.classList.toggle('dark-mode', isDark);
  const icon = document.getElementById('dark-icon');
  if (icon) icon.setAttribute('data-lucide', isDark ? 'sun' : 'moon');
  if (window._lucideRefresh) window._lucideRefresh();
}

/* ────────────────────────────────────────────────────────────────
   FAQ ACCORDION
──────────────────────────────────────────────────────────────── */
const FAQ_DATA = [
  { q: "Intervenez-vous uniquement à Plaisir ?", a: "Non, nous intervenons dans toute la zone des Yvelines (78), notamment à Versailles, Saint-Germain-en-Laye, Trappes, Élancourt, Maurepas, Poissy, Mantes-la-Jolie et Rambouillet, dans un rayon de 30 km autour de Plaisir." },
  { q: "Le devis est-il vraiment gratuit et sans engagement ?", a: "Oui, totalement. Nous nous déplaçons sur votre chantier, évaluons les travaux et vous remettons un devis détaillé sous 48h, sans aucun frais et sans obligation de signature." },
  { q: "Avez-vous une assurance décennale ?", a: "Absolument. Nous disposons d'une assurance décennale en bonne et due forme, qui couvre l'ensemble de nos travaux pendant 10 ans après réception du chantier." },
  { q: "Quels sont vos délais d'intervention habituels ?", a: "Nous réalisons la visite et le devis sous 48 à 72h. Pour les travaux, les délais dépendent de leur ampleur. En général, nous démarrons dans les 2 à 4 semaines suivant la signature du devis." },
  { q: "Réalisez-vous les petits travaux ou seulement les gros chantiers ?", a: "Nous intervenons sur tous types de travaux, des petites réparations (rejointoiement, petite maçonnerie) aux chantiers de rénovation complète." },
  { q: "Puis-je suivre l'avancement de mon chantier ?", a: "Oui, nous maintenons un contact régulier avec nos clients tout au long du chantier. Vous pouvez nous appeler ou envoyer un message WhatsApp à tout moment. Une visite de réception est réalisée à la livraison." }
];

function renderFaq() {
  const list = document.getElementById('faq-list');
  if (!list) return;
  list.innerHTML = FAQ_DATA.map((item, i) => `
    <div class="faq-item fade-in" id="faq-${i}">
      <button class="faq-question" onclick="toggleFaq(${i})" aria-expanded="false">
        <span>${escapeHTML(item.q)}</span>
        <svg class="faq-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
      </button>
      <div class="faq-answer" id="faq-ans-${i}">
        <div class="faq-answer-inner">${escapeHTML(item.a)}</div>
      </div>
    </div>
  `).join('');
  setTimeout(setupIntersectionObserver, 60);
}

function toggleFaq(idx) {
  const item = document.getElementById('faq-' + idx);
  const btn = item ? item.querySelector('.faq-question') : null;
  const isOpen = item ? item.classList.toggle('open') : false;
  if (btn) btn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
}

/* ────────────────────────────────────────────────────────────────
   LIGHTBOX
──────────────────────────────────────────────────────────────── */
var lightboxImages = [];
var lightboxCurrent = 0;

function setupLightbox() {
  var overlay = document.getElementById('lightbox-overlay');
  if (overlay) {
    overlay.addEventListener('click', function(e) {
      if (e.target === overlay) closeLightbox();
    });
  }
  document.addEventListener('click', function(e) {
    var img = e.target.closest ? e.target.closest('.comparison-img') : null;
    if (!img) return;
    var allImgs = Array.prototype.slice.call(document.querySelectorAll('.project-card .comparison-img'));
    lightboxImages = allImgs.map(function(el) { return { src: el.src, caption: el.alt }; });
    lightboxCurrent = lightboxImages.findIndex(function(i) { return i.src === img.src; });
    if (lightboxCurrent < 0) lightboxCurrent = 0;
    _showLightboxImage();
    var ov = document.getElementById('lightbox-overlay');
    if (ov) ov.classList.add('open');
    document.body.style.overflow = 'hidden';
    if (window._lucideRefresh) window._lucideRefresh();
  });
}

function _showLightboxImage() {
  var imgEl = document.getElementById('lightbox-img');
  var cap = document.getElementById('lightbox-caption');
  var current = lightboxImages[lightboxCurrent];
  if (!current || !imgEl) return;
  imgEl.style.opacity = '0';
  imgEl.style.transform = 'scale(0.92)';
  setTimeout(function() {
    imgEl.src = current.src;
    imgEl.alt = current.caption || '';
    if (cap) cap.textContent = current.caption || '';
    imgEl.style.opacity = '';
    imgEl.style.transform = '';
  }, 120);
}

function lightboxNav(dir) {
  if (!lightboxImages.length) return;
  var overlay = document.getElementById('lightbox-overlay');
  if (!overlay || !overlay.classList.contains('open')) return;
  lightboxCurrent = (lightboxCurrent + dir + lightboxImages.length) % lightboxImages.length;
  _showLightboxImage();
}

function closeLightbox() {
  var overlay = document.getElementById('lightbox-overlay');
  if (overlay) overlay.classList.remove('open');
  document.body.style.overflow = '';
}

/* ────────────────────────────────────────────────────────────────
   TIMELINE ANIMATION
──────────────────────────────────────────────────────────────── */
function setupTimeline() {
  var fill = document.getElementById('timeline-fill');
  var timeline = document.getElementById('timeline');
  if (!fill || !timeline) return;
  var obs = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) { fill.classList.add('animated'); }
    });
  }, { threshold: 0.15 });
  obs.observe(timeline);
}

/* ────────────────────────────────────────────────────────────────
   WHATSAPP FAB VISIBILITY
──────────────────────────────────────────────────────────────── */
window.addEventListener('scroll', function() {
  var wa = document.getElementById('fab-whatsapp');
  if (wa) wa.classList.toggle('visible', window.scrollY > 400);
}, { passive: true });

/* ────────────────────────────────────────────────────────────────
   KEYBOARD (extended)
──────────────────────────────────────────────────────────────── */
document.addEventListener('keydown', function(e) {
  if (e.key === 'ArrowLeft') lightboxNav(-1);
  if (e.key === 'ArrowRight') lightboxNav(1);
  if (e.key === 'Escape') closeLightbox();
});

/* ────────────────────────────────────────────────────────────────
   CUSTOM CURSOR
──────────────────────────────────────────────────────────────── */
(function() {
  var cursor = document.getElementById('custom-cursor');
  var dot = document.getElementById('custom-cursor-dot');
  if (!cursor || !dot) return;
  if (window.matchMedia('(pointer: coarse)').matches) return;

  var cx = -100, cy = -100;
  var dx = cx, dy = cy;

  document.addEventListener('mousemove', function(e) {
    cx = e.clientX; cy = e.clientY;
    dot.style.left = cx + 'px';
    dot.style.top  = cy + 'px';
    document.body.classList.add('cursor-ready');
  });

  var INTERACTIVE = 'a,button,[role="button"],select,input,textarea,.filter-btn,.calc-chip,.faq-question,.service-card,.partner-card';
  document.addEventListener('mouseover', function(e) {
    if (e.target.closest(INTERACTIVE)) document.body.classList.add('cursor-hover');
  });
  document.addEventListener('mouseout', function(e) {
    if (e.target.closest(INTERACTIVE)) document.body.classList.remove('cursor-hover');
  });

  (function animate() {
    dx += (cx - dx) * 0.12;
    dy += (cy - dy) * 0.12;
    cursor.style.left = dx + 'px';
    cursor.style.top  = dy + 'px';
    requestAnimationFrame(animate);
  })();
})();

/* ────────────────────────────────────────────────────────────────
   ADMIN NOTIFICATION BADGE
──────────────────────────────────────────────────────────────── */
function updateAdminBadge() {
  var badge = document.getElementById('admin-badge');
  if (!badge) return;
  var newCount = devisEntries.filter(function(d) { return d.statut === 'new'; }).length;
  if (newCount > 0) {
    badge.textContent = newCount;
    badge.style.display = 'flex';
  } else {
    badge.style.display = 'none';
  }
}

/* ────────────────────────────────────────────────────────────────
   CALCULATOR
──────────────────────────────────────────────────────────────── */
var calcQuality = 'eco';

var CALC_RATES = {
  terrasse:   { eco: [45, 70],  mid: [70, 110],  lux: [110, 180] },
  maconnerie: { eco: [50, 80],  mid: [80, 130],  lux: [130, 220] },
  ravalement: { eco: [40, 65],  mid: [65, 100],  lux: [100, 160] },
  renovation: { eco: [60, 90],  mid: [90, 140],  lux: [140, 230] }
};

function calcUpdate() {
  var type = document.getElementById('calc-type').value;
  var surface = parseInt(document.getElementById('calc-surface').value, 10);
  var valEl = document.getElementById('calc-surface-val');
  var resultEl = document.getElementById('calc-result');
  if (valEl) valEl.textContent = surface + ' m\u00b2';
  var rates = CALC_RATES[type] && CALC_RATES[type][calcQuality];
  if (!rates || !resultEl) return;
  var low  = Math.round(surface * rates[0] / 100) * 100;
  var high = Math.round(surface * rates[1] / 100) * 100;
  resultEl.textContent = low.toLocaleString('fr-FR') + ' \u2013 ' + high.toLocaleString('fr-FR') + ' \u20ac';
  resultEl.style.transform = 'scale(1.05)';
  setTimeout(function() { resultEl.style.transform = ''; }, 150);
}

function setChip(quality) {
  calcQuality = quality;
  document.querySelectorAll('.calc-chip').forEach(function(c) { c.classList.remove('active'); });
  var chip = document.getElementById('chip-' + quality);
  if (chip) chip.classList.add('active');
  calcUpdate();
}

/* ────────────────────────────────────────────────────────────────
   CONFETTI (envoi formulaire)
──────────────────────────────────────────────────────────────── */
function launchConfetti() {
  var canvas = document.getElementById('confetti-canvas');
  if (!canvas) return;
  var ctx = canvas.getContext('2d');
  canvas.width  = window.innerWidth;
  canvas.height = window.innerHeight;
  canvas.style.display = 'block';

  var COLORS = ['#D42B27','#1B6CA8','#F5EFE4','#FACC15','#16a34a','#F97316'];
  var particles = [];
  for (var i = 0; i < 120; i++) {
    particles.push({
      x: Math.random() * canvas.width,
      y: -10 - Math.random() * 60,
      w: 8 + Math.random() * 10,
      h: 5 + Math.random() * 6,
      r: Math.random() * Math.PI * 2,
      dr: (Math.random() - 0.5) * 0.2,
      vx: (Math.random() - 0.5) * 4,
      vy: 2 + Math.random() * 4,
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
      life: 1
    });
  }

  var frame;
  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    var alive = false;
    particles.forEach(function(p) {
      p.x  += p.vx;
      p.y  += p.vy;
      p.r  += p.dr;
      p.vy += 0.08; // gravity
      p.life -= 0.008;
      if (p.life > 0) { alive = true; }
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate(p.r);
      ctx.globalAlpha = Math.max(0, p.life);
      ctx.fillStyle = p.color;
      ctx.fillRect(-p.w/2, -p.h/2, p.w, p.h);
      ctx.restore();
    });
    if (alive) { frame = requestAnimationFrame(draw); }
    else { canvas.style.display = 'none'; cancelAnimationFrame(frame); }
  }
  draw();
}

/* ────────────────────────────────────────────────────────────────
   HOOK: extend existing showToast + devis submit for badge/confetti
──────────────────────────────────────────────────────────────── */
var _origShowToast = showToast;
window.showToast = function(msg, isError) {
  _origShowToast(msg, isError);
  // After devis form submit (success), launch confetti
  if (!isError && msg.indexOf('devis') !== -1 && msg.indexOf('envoy') !== -1) {
    setTimeout(launchConfetti, 200);
  }
  updateAdminBadge();
};

// Also call badge on load
document.addEventListener('DOMContentLoaded', function() {
  setTimeout(updateAdminBadge, 500);
});

/* ────────────────────────────────────────────────────────────────
   INIT CALCULATOR
──────────────────────────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', function() {
  calcUpdate();
});
