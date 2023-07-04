const mobileMenuIcon = document.querySelector('.mobile-menu-icon');
const mobileMenu = document.querySelector('.mobile-menu');
const mobileMenuClose = document.querySelector('.mobile-menu-close');
const mobileMenuItems = document.querySelectorAll('.mobile-menu-items li');

mobileMenuIcon.addEventListener('click', function() {
  mobileMenu.classList.add('active');
});

mobileMenuClose.addEventListener('click', function() {
  mobileMenu.classList.remove('active');
});

mobileMenuItems.forEach(item => {
  item.addEventListener('click', function() {
    mobileMenu.classList.remove('active');
  });
});