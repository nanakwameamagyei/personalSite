// Get the button
const backToTopButton = document.getElementById('back-to-top');
      
// When the user scrolls down 300px from the top, show the button
window.onscroll = function() {
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    backToTopButton.style.opacity = '1';
    backToTopButton.style.visibility = 'visible';
    backToTopButton.style.transform = 'translateY(0)';
  } else {
    backToTopButton.style.opacity = '0';
    backToTopButton.style.visibility = 'hidden';
    backToTopButton.style.transform = 'translateY(10px)';
  }
};
      
// Smooth scroll to top
backToTopButton.addEventListener('click', function(e) {
  e.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});