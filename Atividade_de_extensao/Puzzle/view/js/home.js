document.addEventListener("DOMContentLoaded", function() {
    const imagens = [
        {
            img: "img/logo-2.png",
            nome: "logo 2"
        }
    ];

    var navbar = document.querySelector(".header-inner-content");
    imagens.forEach((val) => {
        navbar.innerHTML += `<img src="${val.img}" alt="${val.nome}" class="logoFoto">`;
    });
});

var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}