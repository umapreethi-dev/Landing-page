// Define Global Variables

const sections = document.querySelectorAll("section");
const navBar = document.querySelector("#navbar__list");
const fragment = document.createDocumentFragment();
let activeSection = document.getElementById("section-1");
const scrollButton = document.getElementById("scrollTop");

// Build navBar

sections.forEach(function (section) {
  const navElement = document.createElement("a");
  navElement.textContent = section.getAttribute("data-nav");
  navElement.classList.add("nav_style");
  navElement.href = "#" + section.id;
  navElement.addEventListener("click", function (e) {
    e.preventDefault();
    let destination = document.querySelector(this.getAttribute("href"));
    destination.scrollIntoView({
      block: "start",
      behaviour: "smooth",
    });
    activeSection.classList.remove("active-section");
    destination.classList.add("active-section");
    activeSection = destination;
  });

  fragment.appendChild(navElement);
});
navBar.appendChild(fragment);

//Set Nav active while clicking
let activeNav = document.querySelector(".nav_style");
activeNav.classList.add("active");
const newnav = document
  .querySelectorAll(".nav_style")
  .forEach((menuItemElement) => {
    menuItemElement.addEventListener("click", function (evt) {
      activeNav.classList.remove("active");
      menuItemElement.classList.add("active");
      activeNav = menuItemElement;
    });
  });

//Set sections active while scrolling
window.addEventListener("scroll", function (e) {
  let navLink = document
    .querySelectorAll(".nav_style")
    .forEach(function (link) {
      let viewSection = document.querySelector(link.getAttribute("href"));
      if (
        viewSection.offsetTop <= window.scrollY + 55 &&
        viewSection.offsetTop + viewSection.offsetHeight > window.scrollY + 55
      ) {
        link.classList.add("active");
        viewSection.classList.add("active-section");
      } else {
        link.classList.remove("active");
        viewSection.classList.remove("active-section");
      }
    });
});

//Scroll Top Button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (window.scrollY > 0) {
    scrollButton.style.visibility = "visible";
  } else {
    scrollButton.style.visibility = "hidden";
  }
}

function topFunction() {
  window.scrollTo({
    top: 0,
    behaviour: "smooth",
  });
}
