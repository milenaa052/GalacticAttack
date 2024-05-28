const botao = document.getElementById("botao")
const menu = document.getElementById("nav")
const links = document.getElementsByClassName("link");

botao.addEventListener("click", () => {
    menu.classList.toggle("mostrar")
    botao.classList.toggle("fa-xmark")
})

for (let link of links) {
    link.addEventListener("click", () => {
        menu.classList.remove("mostrar");
        botao.classList.remove("fa-xmark");
    });
}

const swiper = new Swiper('.swiper', {
    speed: 10,
    spaceBetween: 100,
    cssMode: true,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
    },
    keyboard: true,
    autoplay: {
        delay: 5000,
    },
});