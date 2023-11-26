const notificationBtn = document.querySelector(".shopify__notification");
const progressBar = document.querySelector(".progress__bar");
const progressCompleted = document.querySelector(".progress__completed");
const trialInfoExitBtn = document.querySelector(".trial__exit");
const shopify__store = document.querySelector(".shopify__links");
const searchMain = document.querySelector(".shopify__search-container");
const searchInput = document.querySelector(".shopify__search");
const notifcation__dropDwon = document.querySelector(".notifcation__dropdown");
const myStore__dropDown = document.querySelector(".store__dropdown");
const allLink = document.querySelectorAll(".scrollable__link");

const mainExitBtn = document.querySelector(".setup__collapse");
const innerRotateExitBtn = document.querySelector(".inner_collpase");
const mainListItemBox = document.querySelector(".main__listItem-container");
const get_AllMainChildHeader__Button = document.querySelectorAll(
  ".main__list__item__header"
);
const allMainChildBox = document.querySelectorAll(".main__list__child__box");
let inActive = [1, 2, 3, 4, 5];
let shopifyCounter = 0;

mainExitBtn.addEventListener("click", (e) => {
  // inner main exiut button
  const btnExpanded = mainExitBtn.getAttribute("aria-expanded") === "true";
  innerRotateExitBtn.classList.toggle("rotate__arrow");
  innerRotateExitBtn.classList.toggle("rotate__default");
  mainListItemBox.classList.toggle("item__hidden");
  mainExitBtn.setAttribute("aria-expanded", !btnExpanded);
  if (!btnExpanded) {
    setTimeout(() => {
      focusOnTopPrioprity(true);
    }, 100);
  }
});

// -------- usage for child main box -----------------------
// get all button on main list item
// const allMainChild
const resetAllMainChildBox = () => {
  [...allMainChildBox].forEach((parentItem) => {
    parentItem.classList.remove("bolden__header");
    parentItem.querySelector(".main__list__sub").classList.add("item__hidden");
    parentItem
      .querySelector(".main__list__image")
      .classList.add("item__hidden");
    // reset all aria tag in it
    parentItem.querySelector(".main__list__item__header").ariaExpanded = false;
    parentItem.querySelector(".main__list__sub").ariaHidden = true;
    parentItem.querySelector(".main__list__item__button").tabIndex = "-1";
    if (parentItem.querySelector(".import__button")) {
      parentItem.querySelector(".import__button").tabIndex = "-1";
    }
  });
};
