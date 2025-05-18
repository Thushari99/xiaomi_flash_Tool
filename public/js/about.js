document.addEventListener('DOMContentLoaded', function() {
            const sections = document.querySelectorAll('.fade-in-section');
            
            const fadeInOptions = {
                threshold: 0.1
            };
            
            const fadeInObserver = new IntersectionObserver(function(entries, observer) {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-visible');
                        fadeInObserver.unobserve(entry.target);
                    }
                });
            }, fadeInOptions);
            
            sections.forEach(section => {
                fadeInObserver.observe(section);
            });
        });
