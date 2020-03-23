let menuElem = document.querySelector(".user-in__menu");
let titleElem = menuElem.querySelector(".user-in__title");

titleElem.onclick = function() {
  console.log("fuck");
  menuElem.classList.toggle("open");
};
