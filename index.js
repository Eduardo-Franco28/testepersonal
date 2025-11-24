window.addEventListener("scroll", function () {
  let header = document.querySelector("#header");
  header.classList.toggle("rolagem", window.scrollY > 0);
});
window.addEventListener("scroll", () => {
  let h2 = document.querySelector("#h2");
  if (h2) {
    h2.classList.add("traço-baixo", window.scrollY > 2800);
  }
});

document.addEventListener("touchstart", function () {}, true);

document.getElementById("bronze").addEventListener("click", function () {
  setTimeout(() => {
    window.location.href =
      "https://wa.me/5519971316301?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20os%20seus%20serviços!";
  }, 400);
});
document.getElementById("prata").addEventListener("click", function () {
  setTimeout(() => {
    window.location.href =
      "https://wa.me/5519971316301?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20os%20seus%20serviços!";
  }, 400);
});
document.getElementById("ouro").addEventListener("click", function () {
  setTimeout(() => {
    window.location.href =
      "https://wa.me/5519971316301?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20os%20seus%20serviços!";
  }, 400);
});

let btnMenu = document.getElementById("abrir-menu");
let menu = document.getElementById("menu-mobile");
let over = document.getElementById("overlay");

btnMenu.addEventListener("click", () => {
  menu.classList.add("abrir-menu");
});
menu.addEventListener("click", () => {
  menu.classList.remove("abrir-menu");
});
over.addEventListener("click", () => {
  menu.classList.remove("abrir-menu");
});

new SplitType(".frase-missao", { types: "chars" });

gsap.registerPlugin(ScrollTrigger);

gsap.fromTo(
  ".char",
  { opacity: 0.3 },
  {
    opacity: 1,
    stagger: 0.009,
    ease: "power1.out",
    scrollTrigger: {
      trigger: ".frase",
      start: "630% 100%",
      end: "700% 80%",
      scrub: 1.5,
      markers: false,
    },
  }
);
