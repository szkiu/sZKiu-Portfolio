"use strict";
const d = document,
  $body = d.body,
  $footer = d.querySelector("footer"),
  $form = d.querySelector(".contact__form");
const themeB = d.getElementById("theme-button");

// SCROLL HEADER
addEventListener("scroll", () => {
  const $header = d.getElementById("header");
  if (scrollY >= 70) $header.classList.add("scroll-header");
  else $header.classList.remove("scroll-header");
});

//SCROLL ACTIVE LINK
const sections = document.querySelectorAll("section[id]");

const scrollActive = () => {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 58,
      sectionId = current.getAttribute("id"),
      sectionsClass = document.querySelector(
        ".nav__menu a[href*=" + sectionId + "]"
      );

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      sectionsClass.classList.add("active-link");
    } else {
      sectionsClass.classList.remove("active-link");
    }
  });
};

window.addEventListener("scroll", scrollActive);

//Dark Theme
const setTheme = () => {
  const dataDB = JSON.parse(localStorage.getItem("themes"));
  if (!dataDB) {
    localStorage.setItem(
      "themes",
      JSON.stringify({ theme: themeB.classList[1].split("-")[1] })
    );
    d.querySelector(`[data-${themeB.classList[1].split("-")[1]}]`);
  } else if (JSON.stringify(dataDB).split('"')[3] === "sun") {
    changeColors();
  }
};

d.addEventListener("DOMContentLoaded", setTheme);

d.addEventListener("click", (e) => {
  if (e.target.matches("#theme-button")) {
    const valueTheme = localStorage.getItem("themes").split('"')[3];
    if (valueTheme === "moon") {
      changeColors();
    } else {
      localStorage.setItem("themes", JSON.stringify({ theme: "moon" }));

      d.querySelectorAll("a").forEach((el) =>
        el.classList.remove("white-text")
      );

      $body.classList.remove("light-theme-background");

      $body.classList.remove("light-theme-text-black");

      d.querySelector(".nav__menu").style.backgroundColor =
        "hsla(219, 32%, 16%, 0.8)";

      d.querySelectorAll(".theme-color-sun").forEach((el) =>
        el.classList.remove("light-theme-text-black")
      );

      d.querySelectorAll(".bx").forEach((el) =>
        el.classList.remove("light-theme-text-black")
      );

      d.querySelector("header").classList.remove("light-theme-background");

      d.querySelector(".button--ghost").classList.remove(
        "light-theme-text-black"
      );

      d.querySelector("nav").classList.remove("light-theme-background");

      d.querySelector(".home__handle").classList.remove(
        "light-theme-background_gradient"
      );

      d.querySelectorAll(".contact__form-input").forEach((el) =>
        el.classList.remove("border-theme")
      );

      d.querySelectorAll(".light__theme-box").forEach((el) =>
        el.classList.remove("white")
      );

      d.querySelectorAll(".contact__form-tag").forEach(
        (el) => (el.style.backgroundColor = "hsl(219, 48%, 8%)")
      );

      d.querySelectorAll(".contact__form-input").forEach(
        (el) => (el.style.color = "#babec4")
      );

      $footer.querySelectorAll("*").forEach((el) => {
        el.classList.remove("light-theme-text-black");

        el.classList.remove("white-text");
      });

      const $i = d.querySelector(`[data-theme]`);

      $i.classList.remove("bxs-sun");

      $i.classList.add("bxs-moon");

      $i.dataset.theme = "moon";
    }
  }
});

function changeColors() {
  localStorage.setItem("themes", JSON.stringify({ theme: "sun" }));

  d.querySelectorAll("a").forEach((el) => el.classList.add("white-text"));

  d.querySelector(".button--ghost").classList.add("light-theme-text-black");

  d.querySelectorAll(".light__theme-box").forEach((el) =>
    el.classList.add("white")
  );

  d.querySelectorAll(".theme-color-sun").forEach((el) =>
    el.classList.add("light-theme-text-black")
  );

  d.querySelectorAll(".contact__form-input").forEach((el) =>
    el.classList.add("border-theme")
  );

  $body.classList.add("light-theme-background", "light-theme-text-black");

  d.querySelector("header").classList.add("light-theme-background");

  d.querySelector(".home__handle").classList.add(
    "light-theme-background_gradient"
  );

  d.querySelectorAll(".bx").forEach((el) =>
    el.classList.add("light-theme-text-black")
  );

  $footer.querySelectorAll("*").forEach((el) => {
    el.classList.remove("light-theme-text-black");

    el.classList.add("white-text");
  });

  d.querySelector(".nav__menu").style.backgroundColor = "#dbd7d7";

  d.querySelectorAll(".contact__form-tag").forEach(
    (el) => (el.style.backgroundColor = "rgb(235, 233, 233)")
  );

  d.querySelectorAll(".contact__form-input").forEach(
    (el) => (el.style.color = "#000")
  );

  d.querySelector(".nav__logo").classList.remove("white-text");

  const $i = d.querySelector(`[data-theme]`);

  d.querySelector(".home__scroll-name").style.color = "#9d8cf2";

  $i.classList.remove("bxs-moon");

  $i.classList.add("bxs-sun");

  $i.dataset.theme = "sun";
}




// Form
$form.addEventListener("submit", handleSubmit);

function handleSubmit(e) {
  e.preventDefault();
  const form = new FormData(e.target);
  const $anchorFalseClick = d.getElementById("false-click-form");
  $anchorFalseClick.setAttribute(
    "href",
    `mailto:augustomendez544@gmail.com?subject=${
      (form.get("name"), form.get("mail"))
    }&body=${form.get("text")}`
  );
  
  d.querySelectorAll(".contact__form-input").forEach(el=>{
    el.value = ""
  })
  $anchorFalseClick.click();
}

// Scroll Reveal
const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: "2500",
  delay: 400,
  // reset: true,
});

sr.reveal(`.home__data`);
sr.reveal(`.home__social, .home__scroll`, {origin: "bottom" });
