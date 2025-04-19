// Toggle Dark/Light Mode
function toggleTheme() {
    document.body.classList.toggle('dark-mode');
  }
  
  // Toggle Menu for Small Screens
  function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
  }
  
  // Show Sign In Modal
  document.querySelector('.sign-in').addEventListener('click', function(e) {
    e.preventDefault();
    document.getElementById('sign-in-modal').style.display = 'flex';
  });
  
  // Show Login Modal
  document.querySelector('.login').addEventListener('click', function(e) {
    e.preventDefault();
    document.getElementById('login-modal').style.display = 'flex';
  });
  
  // Close Modals
  function closeModal() {
    const modals = document.querySelectorAll('.modal');
    modals.forEach(modal => modal.style.display = 'none');
  }
  
  window.onclick = function(event) {
    if (event.target === document.getElementById('sign-in-modal') || event.target === document.getElementById('login-modal')) {
      closeModal();
    }
  }
  
  // Activate Hamburger Menu
  const hamburger = document.querySelector('.hamburger');
  hamburger.addEventListener('click', function() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
  });
  