document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.slide');
    const prevBtns = document.querySelectorAll('.prev');
    const nextBtns = document.querySelectorAll('.next');
    let index = 0;
  
    function showSlide(n) {
      index = (n + slides.length) % slides.length;
      slides.forEach((slide, i) => {
        if (i === index) {
          slide.style.display = 'block';
        } else {
          slide.style.display = 'none';
        }
      });
    }
  
    prevBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        showSlide(index - 1);
      });
    });
  
    nextBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        showSlide(index + 1);
      });
    });
  
    // Mostrar el primer slide al cargar la página
    showSlide(index);
  });
  