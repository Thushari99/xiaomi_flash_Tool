 
    // Tab Functionality
    document.addEventListener('DOMContentLoaded', () => {
      const tabButtons = document.querySelectorAll('.tab-button');
      const tabContents = document.querySelectorAll('.tab-content');

      if (tabButtons.length > 0 && tabContents.length > 0) {
        tabButtons.forEach(button => {
          button.addEventListener('click', () => {
            // Remove active class from all buttons and contents
            tabButtons.forEach(btn => {
              btn.classList.remove('active');
              btn.classList.remove('text-orange');
              btn.classList.add('text-darkGray');
            });
            
            tabContents.forEach(content => {
              content.classList.remove('active');
            });

            // Add active class to clicked button and corresponding content
            button.classList.add('active');
            button.classList.add('text-orange');
            button.classList.remove('text-darkGray');
            
            const target = button.getAttribute('data-tab');
            document.getElementById(target).classList.add('active');
          });
        });
        
        // Add styling to active tab if it exists
        const activeTab = document.querySelector('.tab-button.active');
        if (activeTab) {
          activeTab.classList.add('text-orange');
          activeTab.classList.remove('text-darkGray');
        }
      }

      // Smooth scroll for anchor links
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
          e.preventDefault();
          
          const targetId = this.getAttribute('href');
          if (targetId === '#') return;
          
          const targetElement = document.querySelector(targetId);
          if (targetElement) {
            window.scrollTo({
              top: targetElement.offsetTop - 80,
              behavior: 'smooth'
            });
          }
        });
      });
      
      // Add scroll animation for download cards
      const animateOnScroll = () => {
        const cards = document.querySelectorAll('.download-card');
        
        cards.forEach(card => {
          const cardTop = card.getBoundingClientRect().top;
          const triggerBottom = window.innerHeight * 0.8;
          
          if (cardTop < triggerBottom) {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }
        });
        
        // Add fade-in effect for sections
        document.querySelectorAll('.fade-in-section').forEach(section => {
          const sectionTop = section.getBoundingClientRect().top;
          if (sectionTop < window.innerHeight * 0.8) {
            section.classList.add('fade-in');
          }
        });
      };
      
      // Set initial styles for animation
      document.querySelectorAll('.download-card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
      });
      
      // Run once on load
      window.addEventListener('load', animateOnScroll);
      
      // Run on scroll
      window.addEventListener('scroll', animateOnScroll);

      // Accordion functionality for FAQ section
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
    });
