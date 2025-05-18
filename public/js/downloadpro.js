 document.addEventListener('DOMContentLoaded', function() {
      // Fade in sections as they come into view
      const sections = document.querySelectorAll('.section-fade-in');
      
      const fadeInOnScroll = function() {
        sections.forEach(section => {
          const sectionTop = section.getBoundingClientRect().top;
          const windowHeight = window.innerHeight;
          
          if (sectionTop < windowHeight * 0.85) {
            section.classList.add('fade-in');
          }
        });
      };
      
      // Initial check on page load
      fadeInOnScroll();
      
      // Check on scroll
      window.addEventListener('scroll', fadeInOnScroll);
    });

    const accordionToggles = document.querySelectorAll('.accordion-toggle');
      
      accordionToggles.forEach(toggle => {
        toggle.addEventListener('click', () => {
          const content = toggle.nextElementSibling;
          const icon = toggle.querySelector('i');
          
          // Close all accordion items
          document.querySelectorAll('.accordion-content').forEach(c => {
            if (c !== content) {
              c.style.maxHeight = null;
            }
          });
          
          document.querySelectorAll('.accordion-toggle i').forEach(i => {
            if (i !== icon) {
              i.classList.remove('rotate-180');
            }
          });
          
          // Toggle current item
          if (content.style.maxHeight) {
            content.style.maxHeight = null;
            icon.classList.remove('rotate-180');
          } else {
            content.style.maxHeight = content.scrollHeight + 'px';
            icon.classList.add('rotate-180');
          }
        });
      });