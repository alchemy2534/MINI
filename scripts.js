 // Intersection Observer for scroll animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    // Observe all process steps
    document.querySelectorAll('.process-step').forEach((step) => {
        observer.observe(step);
    }
  );
    document.addEventListener("DOMContentLoaded", function() {
  const cards = document.querySelectorAll('.feature-card');

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry, index) => {
      if(entry.isIntersecting){
        setTimeout(() => {
          entry.target.classList.add('visible');

          // Count animation
          const counters = entry.target.querySelectorAll('.count');
          counters.forEach(counter => {
            const target = +counter.getAttribute('data-target');
            let current = 0;
            const increment = target / 50;

            const interval = setInterval(() => {
              current += increment;
              if(current >= target){
                counter.textContent = target;
                clearInterval(interval);
              } else {
                counter.textContent = Math.ceil(current);
              }
            }, 30);
          });

        }, index * 200); // stagger effect: 200ms delay between cards

        observer.unobserve(entry.target); // Stop observing after animation
      }
    });
  }, { threshold: 0.3 });

  cards.forEach(card => observer.observe(card));
});

