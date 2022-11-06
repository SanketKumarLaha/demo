const allCards = document.querySelector(".allCards");
const cards = Array.from(allCards.children);
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");

const cardWidth = cards[0].getBoundingClientRect().width;

cards.forEach((card, index) => {
  card.style.left = cardWidth * index + "px";
});

const clickToSlide = (allCards, activePage, targetPage) => {
  allCards.style.transform = `translateX(-` + targetPage.style.left + `)`;
  activePage.classList.remove("active");
  targetPage.classList.add("active");
};
next.addEventListener("click", (e) => {
  const activePage = allCards.querySelector(".active");
  const nextPage = activePage.nextElementSibling;
  clickToSlide(allCards, activePage, nextPage);
});
prev.addEventListener("click", (e) => {
  const activePage = allCards.querySelector(".active");
  const prevPage = activePage.previousElementSibling;
  clickToSlide(allCards, activePage, prevPage);
});
