// Hamburger menu toggle for mobile navigation
document.getElementById('hamburger').addEventListener('click', function() {
  this.classList.toggle('active');
  document.getElementById('navLinks').classList.toggle('active');
});

// Close mobile menu when clicking on a navigation link
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    document.getElementById('hamburger').classList.remove('active');
    document.getElementById('navLinks').classList.remove('active');
  });
});

// Filter buttons active state management
document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', function() {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    this.classList.add('active');
    // Placeholder for actual filtering logic
    console.log('Filter applied:', this.textContent);
  });
});

// Search input functionality to filter restaurant cards
const searchInput = document.getElementById('searchInput');
const restaurantCards = document.querySelectorAll('.restaurant-card');

searchInput.addEventListener('input', function() {
  const query = this.value.toLowerCase();
  restaurantCards.forEach(card => {
    const name = card.querySelector('.restaurant-name').textContent.toLowerCase();
    const cuisine = card.querySelector('.cuisine').textContent.toLowerCase();
    if (name.includes(query) || cuisine.includes(query)) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
});

// Sort select change event (placeholder for sorting)
document.querySelector('.sort-select').addEventListener('change', function() {
  console.log('Sort by:', this.value);
  // Implement actual sorting of grid items here if needed
});

// Scroll to top button visibility and functionality
const scrollTopBtn = document.getElementById('scrollTop');
window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    scrollTopBtn.style.display = 'block';
  } else {
    scrollTopBtn.style.display = 'none';
  }
});

scrollTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});