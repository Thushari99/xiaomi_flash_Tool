// Lucide Icons Initialization
lucide.createIcons();

// Prevent FOUC
document.addEventListener('DOMContentLoaded', function() {
  document.body.classList.add('fouc-ready');
});

// Prevent content jumping
window.addEventListener('load', function() {
  document.body.classList.add('loaded');
});

// Smooth scroll handling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Responsive image loading
document.addEventListener('DOMContentLoaded', function() {
  const images = document.querySelectorAll('img[data-src]');
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        img.removeAttribute('data-src');
        observer.unobserve(img);
      }
    });
  });

  images.forEach(img => imageObserver.observe(img));
});

// Accordion functionality for FAQ
const accordionToggles = document.querySelectorAll('.accordion-toggle');

accordionToggles.forEach(toggle => {
  toggle.addEventListener('click', () => {
    const content = toggle.nextElementSibling;
    const icon = toggle.querySelector('i');

    // Close all others
    document.querySelectorAll('.accordion-content').forEach(content => {
      if (content !== toggle.nextElementSibling) {
        content.style.maxHeight = null;
      }
    });

    document.querySelectorAll('.accordion-toggle i').forEach(i => {
      if (i !== icon) {
        i.classList.remove('rotate-180');
      }
    });

    // Toggle current
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
      icon.classList.remove('rotate-180');
    } else {
      content.style.maxHeight = content.scrollHeight + 'px';
      icon.classList.add('rotate-180');
    }
  });
});

// Fade-in animation with IntersectionObserver
const fadeElements = document.querySelectorAll('.fade-in-up');

const fadeObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
      fadeObserver.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.1
});

fadeElements.forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
  fadeObserver.observe(el);
});

// Device detection
if (window.screen && window.screen.availWidth <= 300) {
  document.documentElement.classList.add('ultra-small-device');
}
