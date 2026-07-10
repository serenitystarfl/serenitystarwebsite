/* =====================================================================
   Serenity Star — Site Interactions
   ===================================================================== */

(function () {
  'use strict';

  /* ---------- Header: scrolled state ---------- */
  const header = document.querySelector('.site-header');
  const onScroll = () => {
    if (!header) return;
    if (window.scrollY > 24) header.classList.add('is-scrolled');
    else header.classList.remove('is-scrolled');
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ---------- Mobile nav ---------- */
  const toggle = document.querySelector('.nav-toggle');
  const mobileNav = document.querySelector('.mobile-nav');
  const closeBtn = document.querySelector('.mobile-nav-close');

  const openMenu = () => {
    if (!mobileNav) return;
    mobileNav.classList.add('is-open');
    toggle && toggle.classList.add('is-open');
    document.body.style.overflow = 'hidden';
  };
  const closeMenu = () => {
    if (!mobileNav) return;
    mobileNav.classList.remove('is-open');
    toggle && toggle.classList.remove('is-open');
    document.body.style.overflow = '';
  };

  if (toggle && mobileNav) {
    toggle.addEventListener('click', () => {
      if (mobileNav.classList.contains('is-open')) closeMenu();
      else openMenu();
    });
  }
  if (closeBtn) closeBtn.addEventListener('click', closeMenu);

  document.querySelectorAll('.mobile-nav a').forEach(a => {
    a.addEventListener('click', closeMenu);
  });

  /* ---------- Reveal-on-scroll ---------- */
  const reveals = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && reveals.length) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.01, rootMargin: '0px 0px -40px 0px' });
    reveals.forEach(el => io.observe(el));
  } else {
    reveals.forEach(el => el.classList.add('is-visible'));
  }

  /* ---------- Events: toggle calendar / weekly ---------- */
  const toggleBtns = document.querySelectorAll('.event-toggle button[data-view]');
  const views = document.querySelectorAll('[data-view-pane]');
  toggleBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const target = btn.dataset.view;
      toggleBtns.forEach(b => b.classList.toggle('active', b === btn));
      views.forEach(v => {
        v.style.display = v.dataset.viewPane === target ? '' : 'none';
      });
    });
  });

  /* ---------- Placeholder booking buttons ---------- */
  document.querySelectorAll('[data-book]').forEach(el => {
    el.addEventListener('click', (e) => {
      e.preventDefault();
      const type = el.dataset.book;
      const title = el.dataset.title || 'this offering';
      const msg = type === 'pay'
        ? `Pay Now flow for "${title}" — connect Stripe/Calendly to enable real checkout.`
        : `RSVP recorded for "${title}" — connect a form handler or email integration to capture details.`;
      // Soft toast (replace with real booking later)
      showToast(msg);
    });
  });

  /* ---------- Soft toast ---------- */
  function showToast(message) {
    let t = document.querySelector('.toast');
    if (!t) {
      t = document.createElement('div');
      t.className = 'toast';
      document.body.appendChild(t);
      Object.assign(t.style, {
        position: 'fixed',
        bottom: '24px',
        left: '50%',
        transform: 'translateX(-50%) translateY(20px)',
        background: 'var(--ink)',
        color: 'var(--cream-soft)',
        padding: '14px 22px',
        borderRadius: '999px',
        fontFamily: 'var(--font-body)',
        fontSize: '13px',
        letterSpacing: '0.04em',
        maxWidth: '90vw',
        textAlign: 'center',
        boxShadow: '0 12px 30px -10px rgba(0,0,0,0.4)',
        opacity: '0',
        transition: 'opacity .4s, transform .4s',
        zIndex: '999'
      });
    }
    t.textContent = message;
    requestAnimationFrame(() => {
      t.style.opacity = '1';
      t.style.transform = 'translateX(-50%) translateY(0)';
    });
    clearTimeout(t._timer);
    t._timer = setTimeout(() => {
      t.style.opacity = '0';
      t.style.transform = 'translateX(-50%) translateY(20px)';
    }, 3600);
  }

  /* ---------- Contact form (Formspree) ---------- */
  const contactForm = document.querySelector('.contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', async function(e) {
      e.preventDefault();
      const submitBtn = document.getElementById('form-submit');
      const successMsg = document.getElementById('form-success');
      submitBtn.textContent = 'Sending...';
      submitBtn.disabled = true;
      const data = new FormData(contactForm);
      try {
        const response = await fetch('https://formspree.io/f/xbdekpky', {
          method: 'POST',
          body: data,
          headers: { 'Accept': 'application/json' }
        });
        if (response.ok) {
          contactForm.reset();
          contactForm.style.display = 'none';
          successMsg.style.display = 'block';
        } else {
          submitBtn.textContent = 'Send the note';
          submitBtn.disabled = false;
          alert('Something went wrong. Please email us directly at serenitystarfl@gmail.com');
        }
      } catch (error) {
        submitBtn.textContent = 'Send the note';
        submitBtn.disabled = false;
        alert('Something went wrong. Please email us directly at serenitystarfl@gmail.com');
      }
    });
  }

  /* ---------- WhatsApp Community floating widget ---------- */
  (function injectWhatsAppWidget() {
    if (document.querySelector('.wa-widget')) return;
    const link = document.createElement('a');
    link.className = 'wa-widget';
    link.href = 'https://chat.whatsapp.com/LCV1WsL05Qp3bKisuwAA6p';
    link.target = '_blank';
    link.rel = 'noopener';
    link.setAttribute('aria-label', 'Join the Serenity Star Community on WhatsApp');
    link.title = 'Connect with our community and stay updated on events, retreats, and wellness offerings.';
    link.innerHTML =
      '<span class="wa-icon" aria-hidden="true">' +
      '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M19.05 4.91A9.82 9.82 0 0 0 12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.91-7.01zm-7.01 15.24c-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.26 8.26 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24 2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.41 5.83c.02 4.54-3.68 8.23-8.22 8.23zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.12-.16.25-.64.81-.78.97-.14.17-.29.18-.54.06-.25-.12-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.02-.38.11-.5.11-.11.25-.29.37-.43.12-.14.16-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.41-.42-.56-.43-.14-.01-.31-.01-.48-.01-.17 0-.43.06-.66.31-.22.25-.86.84-.86 2.05 0 1.21.88 2.38 1 2.54.12.17 1.74 2.65 4.22 3.72.59.25 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.67-1.18.21-.58.21-1.07.15-1.18-.06-.1-.23-.16-.48-.28z"/></svg>' +
      '</span>' +
      '<span class="wa-label">Join the Serenity Star Community<span class="wa-sub">Events · Retreats · Updates</span></span>';
    document.body.appendChild(link);
  })();

  /* ---------- Gallery lightbox ---------- */
  (function initLightbox() {
    const items = document.querySelectorAll('.gallery-item');
    const lb = document.getElementById('lightbox');
    if (!items.length || !lb) return;
    const lbImg = lb.querySelector('.lightbox-img');
    const lbCap = lb.querySelector('.lightbox-caption');
    const btnClose = lb.querySelector('.lightbox-close');
    const btnPrev = lb.querySelector('.lightbox-prev');
    const btnNext = lb.querySelector('.lightbox-next');
    let idx = 0;
    const photos = Array.from(items).map(fig => {
      const img = fig.querySelector('img');
      return { src: img.getAttribute('src'), alt: img.getAttribute('alt') || '',
               caption: fig.getAttribute('data-caption') || img.getAttribute('alt') || '' };
    });

    function open(i) {
      idx = (i + photos.length) % photos.length;
      const p = photos[idx];
      lbImg.src = p.src;
      lbImg.alt = p.alt;
      lbCap.textContent = p.caption;
      lb.classList.add('is-open');
      lb.setAttribute('aria-hidden', 'false');
      document.body.classList.add('lightbox-open');
    }
    function close() {
      lb.classList.remove('is-open');
      lb.setAttribute('aria-hidden', 'true');
      document.body.classList.remove('lightbox-open');
      lbImg.src = '';
    }
    items.forEach((fig, i) => fig.addEventListener('click', () => open(i)));
    btnClose && btnClose.addEventListener('click', close);
    btnPrev && btnPrev.addEventListener('click', (e) => { e.stopPropagation(); open(idx - 1); });
    btnNext && btnNext.addEventListener('click', (e) => { e.stopPropagation(); open(idx + 1); });
    lb.addEventListener('click', (e) => { if (e.target === lb || e.target === lbImg) close(); });
    document.addEventListener('keydown', (e) => {
      if (!lb.classList.contains('is-open')) return;
      if (e.key === 'Escape') close();
      else if (e.key === 'ArrowRight') open(idx + 1);
      else if (e.key === 'ArrowLeft') open(idx - 1);
    });
  })();

  /* ---------- Active nav link ---------- */
  const here = (window.location.pathname.split('/').pop() || 'index.html').toLowerCase();
  document.querySelectorAll('.nav-list a, .mobile-nav a').forEach(a => {
    const href = (a.getAttribute('href') || '').toLowerCase();
    if (href === here || (here === '' && href === 'index.html')) a.classList.add('active');
  });
})();
