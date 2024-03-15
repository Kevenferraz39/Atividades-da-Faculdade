const imagens = [
  {
      id: 0,
      nome: "Combo Gaming",
      img: "img/Slide-principal.png",
      numero: "1 / 4"
  },
  {
      id: 1,
      nome: "Combo Gaming",
      img: "img/capa.png",
      numero: "2 / 4"
  },
  {
    id: 2,
    nome: "Combo Gaming",
    img: "img/capa.png",
    numero: "3 / 4"
  },
  {
    id: 3,
    nome: "Combo Gaming",
    img: "img/capa.png",
    numero: "4 / 4"
  },
];

function iniciarSite() {
  const slideContainer = document.querySelector('.slideshow-container');
  imagens.forEach((val) => {
    slideContainer.innerHTML += `
    <div class="mySlides fade">
      <div class="numbertext">${val.numero}</div>
      <center><img src="${val.img}" alt="${val.nome}" style="width:100%"></center>
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
}, 15000); // Altere o tempo aqui, por exemplo, 2000 para 2 segundos.
