let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slide");
  let line = document.getElementsByClassName("line");

    //LOOP
  if (n > slides.length) {slideIndex = 1} //para voltar ao primeiro slide
  if (n < 1) {slideIndex = slides.length} //para ir do primeiro slide ao ultimo slide
  
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < line.length; i++) {
      line[i].className = line[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "flex";
  line[slideIndex-1].className += " active";
}

window.sr = ScrollReveal({reset: true})
sr.reveal('.grid-container, .imgPerfil', {
  rotate: {x:0, y:0, z:0},
  duration: 3000
})
sr.reveal('.intro-nome, .sobreTexto', {duration: 5000})