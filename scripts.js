document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.querySelector('.hamburger');
  const navMenu = document.querySelector('nav ul');
  
  hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('show');
    hamburger.classList.toggle('active');
  });

  // Close menu when clicking a nav link on mobile
  const navLinks = document.querySelectorAll('nav ul li a');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (window.innerWidth <= 768) {
        navMenu.classList.remove('show');
        hamburger.classList.remove('active');
      }
    });
  });

  // Close menu when clicking outside
  document.addEventListener('click', (event) => {
    if (!navMenu.contains(event.target) && !hamburger.contains(event.target)) {
      navMenu.classList.remove('show');
      hamburger.classList.remove('active');
    }
  });
});
// Smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
        });
      });
    });

    // Form submission
    document.querySelector('#contact form').addEventListener('submit', function (e) {
      e.preventDefault();
      alert('Thank you for your message! I will get back to you soon.');
      this.reset();
    });

    // Filtering for Publications and Projects
    document.querySelectorAll('.filter-btn').forEach(button => {
  button.addEventListener('click', () => {
    const filter = button.getAttribute('data-filter');
    const section = button.closest('.section').id;

    // Remove active class from other filter buttons
    document.querySelectorAll(`#${section} .filter-btn`).forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');

    // Get all content items
    const items = document.querySelectorAll(`#${section} .content-item, #${section} .project-card`);
    let visibleCount = 0;

    items.forEach(item => {
      item.classList.remove('active');
      if (filter === 'all' || item.getAttribute('data-status') === filter) {
        item.classList.add('active');
        visibleCount++;
      }
    });

    // Handle "No Data Found" message
    let noDataMsg = document.querySelector(`#${section} .no-data-message`);
    if (!noDataMsg) {
      noDataMsg = document.createElement('div');
      noDataMsg.className = 'no-data-message';
      noDataMsg.textContent = 'No data available for this filter.';
      noDataMsg.style.display = 'none';
      noDataMsg.style.textAlign = 'center';
      noDataMsg.style.padding = '10px';
      document.querySelector(`#${section}`).appendChild(noDataMsg);
    }

    if (visibleCount === 0) {
      noDataMsg.style.display = 'block';
    } else {
      noDataMsg.style.display = 'none';
    }
  });
});