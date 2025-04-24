const imagens = [
  {
      id: 0,
      nome: "Combo Gaming",
      img: "img/Slide-principal.png",
  },
  {
      id: 1,
      nome: "Combo Gaming",
      img: "img/PUZZLE.png",
  },
  {
    id: 2,
    nome: "Combo Gaming",
    img: "img/gif/PUZZLE.gif",
  },
  {
    id: 3,
    nome: "Combo Gaming",
    img: "img/capa.png",
  },
];

function iniciarSite() {
  const slideContainer = document.querySelector('.slideshow-container');
  imagens.forEach((val) => {
    slideContainer.innerHTML += `
    <div class="mySlides fade">
      <center><img src="${val.img}" alt="${val.nome}" style="width:100%">
      </center>
    </div>`;
  });
}

document.addEventListener("DOMContentLoaded", () => {
  iniciarSite();
  showSlides(slideIndex);
});

let slideIndex = 1;

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  const slides = document.getElementsByClassName("mySlides");
  const dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1;}
  if (n < 1) {slideIndex = slides.length;}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

// Slide automático
setInterval(() => {
  plusSlides(1);
}, 5000); // Altere o tempo aqui, por exemplo, 2000 para 2 segundos.
