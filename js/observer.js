let allGalleryImg = document.querySelectorAll(".gallery .project img");

const optionImg = {
  root: null,
  threshold: "0",
  rootMargin: "0px 0px -50px 0px",
};

const observerImg = new IntersectionObserver(function (entries, observer) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const img = entry.target;
      img.setAttribute("src", img.getAttribute("data-src"));
    }
  });
}, optionImg);
allGalleryImg.forEach((img) => {
  observerImg.observe(img);
});
