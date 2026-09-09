// Mobile nav toggle
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');
navToggle.addEventListener('click', () => {
  navMenu.classList.toggle('open');
});
navMenu.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => navMenu.classList.remove('open'));
});

// Reservation form (no backend — demo confirmation only)
const reserveForm = document.getElementById('reserveForm');
const formNote = document.getElementById('formNote');
reserveForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = reserveForm.name.value.trim();
  formNote.textContent = `Thanks, ${name || 'there'}! Your reservation request has been noted — we'll confirm shortly by phone. For urgent bookings, please call 081301 07523.`;
  reserveForm.reset();
});

// Sticky header shadow on scroll
const header = document.querySelector('.site-header');
window.addEventListener('scroll', () => {
  if (window.scrollY > 10) {
    header.style.boxShadow = '0 4px 20px rgba(0,0,0,0.35)';
  } else {
    header.style.boxShadow = 'none';
  }
});
