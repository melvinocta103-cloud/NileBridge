/**
 * NileBridge Institutional Digital Platform
 * Main Public Website Interactions & UI Logic
 */

document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initHeroSlider();
  initVideoModal();
  initAccordions();
  initTabs();
  initCounters();
  initTestimonialSlider();
  initBackToTop();
  initSearchFinder();
});

/* ── 1. Navbar & Mobile Menu ── */
function initNavbar() {
  const navbar = document.querySelector('.navbar');
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');
  const navOverlay = document.querySelector('.nav-overlay');

  // Sticky navbar shadow on scroll
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      navbar?.classList.add('scrolled');
    } else {
      navbar?.classList.remove('scrolled');
    }
  });

  // Mobile menu toggle
  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      navLinks.classList.toggle('open');
      navOverlay?.classList.toggle('active');
      document.body.classList.toggle('no-scroll');
    });

    navOverlay?.addEventListener('click', () => {
      hamburger.classList.remove('active');
      navLinks.classList.remove('open');
      navOverlay.classList.remove('active');
      document.body.classList.remove('no-scroll');
    });
  }

  // Mobile dropdown accordion in nav
  const dropdownItems = document.querySelectorAll('.nav-item.has-dropdown');
  dropdownItems.forEach(item => {
    const link = item.querySelector('.nav-link');
    link?.addEventListener('click', (e) => {
      if (window.innerWidth <= 991) {
        e.preventDefault();
        item.classList.toggle('dropdown-open');
      }
    });
  });
}

/* ── 2. Hero Slider ── */
function initHeroSlider() {
  const slides = document.querySelectorAll('.hero-slide');
  const dots = document.querySelectorAll('.hero-dot');
  const prevBtn = document.querySelector('.hero-nav-prev');
  const nextBtn = document.querySelector('.hero-nav-next');
  let currentSlide = 0;
  let slideInterval = null;

  if (!slides.length) return;

  function showSlide(index) {
    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));

    currentSlide = (index + slides.length) % slides.length;
    slides[currentSlide].classList.add('active');
    if (dots[currentSlide]) {
      dots[currentSlide].classList.add('active');
    }
  }

  function startAutoSlide() {
    slideInterval = setInterval(() => {
      showSlide(currentSlide + 1);
    }, 6500);
  }

  function stopAutoSlide() {
    clearInterval(slideInterval);
  }

  prevBtn?.addEventListener('click', () => {
    stopAutoSlide();
    showSlide(currentSlide - 1);
    startAutoSlide();
  });

  nextBtn?.addEventListener('click', () => {
    stopAutoSlide();
    showSlide(currentSlide + 1);
    startAutoSlide();
  });

  dots.forEach((dot, idx) => {
    dot.addEventListener('click', () => {
      stopAutoSlide();
      showSlide(idx);
      startAutoSlide();
    });
  });

  startAutoSlide();
}

/* ── 3. Video Modal ── */
function initVideoModal() {
  const videoTriggers = document.querySelectorAll('[data-video-modal]');
  
  videoTriggers.forEach(trigger => {
    trigger.addEventListener('click', (e) => {
      e.preventDefault();
      const videoSrc = trigger.getAttribute('data-video-url') || 'https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ?autoplay=1';
      openVideoModal(videoSrc);
    });
  });
}

function openVideoModal(videoUrl) {
  let modal = document.getElementById('videoModal');
  if (!modal) {
    modal = document.createElement('div');
    modal.id = 'videoModal';
    modal.className = 'video-modal-overlay';
    modal.innerHTML = `
      <div class="video-modal-container">
        <button class="video-modal-close" aria-label="Close video">&times;</button>
        <div class="video-responsive-frame">
          <iframe id="videoIframe" src="" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
      </div>
    `;
    document.body.appendChild(modal);

    const closeBtn = modal.querySelector('.video-modal-close');
    closeBtn.addEventListener('click', closeVideoModal);
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeVideoModal();
    });
  }

  const iframe = modal.querySelector('#videoIframe');
  iframe.src = videoUrl;
  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeVideoModal() {
  const modal = document.getElementById('videoModal');
  if (modal) {
    const iframe = modal.querySelector('#videoIframe');
    iframe.src = '';
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }
}

/* ── 4. Accordions (FAQs & Details) ── */
function initAccordions() {
  const accordionHeaders = document.querySelectorAll('.accordion-header');
  accordionHeaders.forEach(header => {
    header.addEventListener('click', () => {
      const item = header.closest('.accordion-item');
      const body = item.querySelector('.accordion-body');
      const isActive = item.classList.contains('active');

      // Optional: Close siblings if accordion has .single-open
      const parent = item.closest('.accordion');
      if (parent && parent.classList.contains('single-open')) {
        parent.querySelectorAll('.accordion-item').forEach(sibling => {
          if (sibling !== item) {
            sibling.classList.remove('active');
            const sibBody = sibling.querySelector('.accordion-body');
            if (sibBody) sibBody.style.maxHeight = null;
          }
        });
      }

      if (isActive) {
        item.classList.remove('active');
        body.style.maxHeight = null;
      } else {
        item.classList.add('active');
        body.style.maxHeight = body.scrollHeight + 'px';
      }
    });
  });
}

/* ── 5. Tabs ── */
function initTabs() {
  const tabContainers = document.querySelectorAll('[data-tabs]');
  tabContainers.forEach(container => {
    const buttons = container.querySelectorAll('.tab-btn');
    const panels = container.querySelectorAll('.tab-panel');

    buttons.forEach((btn, idx) => {
      btn.addEventListener('click', () => {
        buttons.forEach(b => b.classList.remove('active'));
        panels.forEach(p => p.classList.remove('active'));

        btn.classList.add('active');
        const targetId = btn.getAttribute('data-tab-target');
        const targetPanel = container.querySelector(targetId) || panels[idx];
        targetPanel?.classList.add('active');
      });
    });
  });
}

/* ── 6. Animated Statistics Counters ── */
function initCounters() {
  const statNumbers = document.querySelectorAll('.stat-number');
  if (!statNumbers.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const rawText = el.innerText.trim();
        const targetNumber = parseInt(rawText.replace(/[^0-9]/g, ''), 10);
        const suffix = rawText.replace(/[0-9]/g, '');
        let start = 0;
        const duration = 1800;
        const stepTime = 30;
        const totalSteps = duration / stepTime;
        const increment = targetNumber / totalSteps;

        const counterInterval = setInterval(() => {
          start += increment;
          if (start >= targetNumber) {
            el.innerText = targetNumber.toLocaleString() + suffix;
            clearInterval(counterInterval);
          } else {
            el.innerText = Math.floor(start).toLocaleString() + suffix;
          }
        }, stepTime);

        observer.unobserve(el);
      }
    });
  }, { threshold: 0.5 });

  statNumbers.forEach(stat => observer.observe(stat));
}

/* ── 7. Testimonial Carousel ── */
function initTestimonialSlider() {
  const slides = document.querySelectorAll('.testimonial-slide');
  const dots = document.querySelectorAll('.testimonial-dot');
  let currentIdx = 0;
  if (!slides.length) return;

  function showTestimonial(idx) {
    slides.forEach(s => s.classList.remove('active'));
    dots.forEach(d => d.classList.remove('active'));

    currentIdx = (idx + slides.length) % slides.length;
    slides[currentIdx].classList.add('active');
    if (dots[currentIdx]) dots[currentIdx].classList.add('active');
  }

  dots.forEach((dot, idx) => {
    dot.addEventListener('click', () => showTestimonial(idx));
  });

  setInterval(() => {
    showTestimonial(currentIdx + 1);
  }, 6000);
}

/* ── 8. Back to Top ── */
function initBackToTop() {
  let btn = document.querySelector('.back-to-top');
  if (!btn) {
    btn = document.createElement('div');
    btn.className = 'back-to-top';
    btn.innerHTML = '<i class="fas fa-arrow-up"></i>';
    btn.setAttribute('title', 'Scroll to top');
    document.body.appendChild(btn);
  }

  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
      btn.classList.add('visible');
    } else {
      btn.classList.remove('visible');
    }
  });

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

/* ── 9. Search Bar Quick Finder ── */
function initSearchFinder() {
  const finderForm = document.getElementById('programmeFinderForm');
  if (!finderForm) return;

  finderForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const keyword = finderForm.querySelector('[name="keyword"]')?.value.trim() || '';
    const faculty = finderForm.querySelector('[name="faculty"]')?.value || '';
    const level = finderForm.querySelector('[name="level"]')?.value || '';

    const params = new URLSearchParams();
    if (keyword) params.set('q', keyword);
    if (faculty) params.set('faculty', faculty);
    if (level) params.set('level', level);

    window.location.href = `programmes.html?${params.toString()}`;
  });
}

/* ── Global Toast Helper ── */
function showToast(message, type = 'info') {
  let toastContainer = document.getElementById('toastContainer');
  if (!toastContainer) {
    toastContainer = document.createElement('div');
    toastContainer.id = 'toastContainer';
    toastContainer.className = 'toast-container';
    document.body.appendChild(toastContainer);
  }

  const toast = document.createElement('div');
  toast.className = `toast-item toast-${type}`;
  toast.innerHTML = `
    <div class="toast-content">${message}</div>
    <button class="toast-close" onclick="this.parentElement.remove()">&times;</button>
  `;

  toastContainer.appendChild(toast);
  setTimeout(() => {
    toast.classList.add('fade-out');
    setTimeout(() => toast.remove(), 400);
  }, 4000);
}

window.showToast = showToast;
