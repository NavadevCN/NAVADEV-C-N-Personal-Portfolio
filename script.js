/* ==========================================================================
   NAVADEV C N — CLIENT ENGINE
   High-performance, dependency-free vanilla JS
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  initCustomCursor();
  initScrollProgress();
  initSmoothScroll();
  initHeroParallax();
});

/* --------------------------------------------------------------------------
   1. Custom Minimal Circle Cursor (from Reference Image)
   -------------------------------------------------------------------------- */
function initCustomCursor() {
  const cursor = document.getElementById('customCursor');
  if (!cursor || window.matchMedia('(pointer: coarse)').matches) return;

  let mouseX = window.innerWidth / 2;
  let mouseY = window.innerHeight / 2;
  let currentX = mouseX;
  let currentY = mouseY;

  window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  }, { passive: true });

  function renderCursor() {
    // Smooth trailing physics
    currentX += (mouseX - currentX) * 0.2;
    currentY += (mouseY - currentY) * 0.2;
    cursor.style.transform = `translate3d(${currentX}px, ${currentY}px, 0) translate(-50%, -50%)`;
    requestAnimationFrame(renderCursor);
  }
  requestAnimationFrame(renderCursor);

  // Hover state on interactive elements
  const interactives = document.querySelectorAll('a, button, input, textarea, .work-visual-frame');
  interactives.forEach(el => {
    el.addEventListener('mouseenter', () => cursor.classList.add('hovered'));
    el.addEventListener('mouseleave', () => cursor.classList.remove('hovered'));
  });
}

/* --------------------------------------------------------------------------
   2. Reading Progress Indicator Line
   -------------------------------------------------------------------------- */
function initScrollProgress() {
  const progressBar = document.getElementById('scrollProgressLine');
  if (!progressBar) return;

  window.addEventListener('scroll', () => {
    const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = totalHeight > 0 ? (window.scrollY / totalHeight) * 100 : 0;
    progressBar.style.width = `${Math.min(100, Math.max(0, progress))}%`;
  }, { passive: true });
}



/* --------------------------------------------------------------------------
   4. Smooth Anchor Link Scrolling
   -------------------------------------------------------------------------- */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
}

/* --------------------------------------------------------------------------
   5. Subtle Hero Portrait Parallax on Scroll
   -------------------------------------------------------------------------- */
function initHeroParallax() {
  const portrait = document.getElementById('heroPortrait');
  if (!portrait) return;

  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    if (scrollY < window.innerHeight) {
      portrait.style.transform = `translate3d(0, ${scrollY * 0.12}px, 0)`;
    }
  }, { passive: true });
}

/* --------------------------------------------------------------------------
   6. Contact Form Transmission & Toast
   -------------------------------------------------------------------------- */
window.handleFormSubmit = function(e) {
  e.preventDefault();
  const name = document.getElementById('formSenderName').value.trim();
  const email = document.getElementById('formSenderEmail').value.trim();
  const message = document.getElementById('formMessage').value.trim();

  if (!name || !email || !message) return;

  const subject = encodeURIComponent(`[Portfolio Inquiry] From ${name}`);
  const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);

  showToast('Opening transmission client...');
  setTimeout(() => {
    window.location.href = `mailto:navadevcn@gmail.com?subject=${subject}&body=${body}`;
  }, 400);

  e.target.reset();
};

function showToast(message) {
  const toast = document.getElementById('editorialToast');
  const text = document.getElementById('toastFeedbackMessage');
  if (!toast || !text) return;

  text.textContent = message;
  toast.classList.add('show');
  setTimeout(() => {
    toast.classList.remove('show');
  }, 3200);
}
