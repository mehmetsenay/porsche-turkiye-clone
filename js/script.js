
// Navbar scroll efekti
const header = document.querySelector('header');

window.addEventListener('scroll', () => {
  if (window.scrollY > 80) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

// Scroll-to-top buton görünürlüğü
const scrollBtn = document.getElementById('sabitbuton');

window.addEventListener('scroll', () => {
  if (window.scrollY > 500) {
    scrollBtn.classList.add('visible');
  } else {
    scrollBtn.classList.remove('visible');
  }
});