const btn = document.getElementById("menu-btn");
const overlay = document.getElementById("overlay");
const mobileMenu = document.getElementById("mobile-menu");
const scrollArrow = document.querySelectorAll(".scroll-arrow");
const counters = document.querySelectorAll(".counter");
let scrollStarted = false;

btn.addEventListener("click", navToggle);
document.addEventListener("scroll", scrollPage);

function navToggle() {
  btn.classList.toggle("open");
  overlay.classList.toggle("overlay-show");
  mobileMenu.classList.toggle("show-menu");
  document.body.classList.toggle("stop-scroll");

  scrollArrow.forEach((arrow) => {
    arrow.classList.toggle("hide-arrow");
  });
}

overlay.addEventListener("click", backToMainPage);

function backToMainPage() {
  btn.classList.toggle("open");
  overlay.classList.toggle("overlay-show");
  mobileMenu.classList.toggle("show-menu");
  document.body.classList.toggle("stop-scroll");
  scrollArrow.forEach((arrow) => {
    arrow.classList.toggle("hide-arrow");
  });
}

function scrollPage() {
  const scrollPos = window.scrollY;
  if (scrollPos > 100 && !scrollStarted) {
    countUp();
    scrollStarted = true;
  } else if (scrollPos < 100 && scrollStarted) {
    reset();
    scrollStarted = false;
  }
}

function countUp() {
  counters.forEach((counter) => {
    counter.innerHTML = "0";

    const updateCounter = () => {
      const target = +counter.getAttribute("data-target");
      // Get current counter
      const c = +counter.innerText;

      // Create increment
      const increment = target / 100;

      // If counter is less than the target, add increment
      if (c < target) {
        // Round up and set counter value
        counter.innerText = `${Math.ceil(c + increment)}`;

        setTimeout(updateCounter, 55);
      } else {
        counter.innerText = target;
      }
    };

    updateCounter();
  });
}

function reset() {
  counters.forEach((counter) => {
    counter.innerHTML = "0";
  });
}
