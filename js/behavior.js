// Start Scroll-To-Top
const btnScrollTop = document?.querySelector(".scroll-top");

const aboutSection = document.querySelector(".about");

const landingSection = document.querySelector(".landing");

const navigatingBullets = document.querySelector(".navigation-bullets");
const navigatingBullet = document.querySelectorAll(
  ".navigation-bullets .bullet"
);

window.addEventListener("scroll", showBulletsAndScrollTop);

function showBulletsAndScrollTop() {
  window.scrollY >= aboutSection?.offsetTop
    ? (btnScrollTop.style.display = "block")
    : (btnScrollTop.style.display = "none");
  window.scrollY >= landingSection.offsetTop
    ? (navigatingBullets.style.display = "block")
    : (navigatingBullets.style.display = "none");
}

btnScrollTop?.addEventListener("click", (e) => {
  scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

navigatingBullet.forEach((bullet) => {
  bullet.addEventListener("click", (e) => {
    document.querySelector(e.target.dataset.section).scrollIntoView({
      behavior: "smooth",
    });
  });
});
