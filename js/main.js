let buttonmain = document.querySelector(".carousel-control-next");
setInterval(function () {
  buttonmain.click();
}, 5000);
/////////////////////////////////////////////////////////////
let centerIcon = document.querySelector(".centerIcon");
centerIcon.onclick = function () {
  window.scrollTo(0, 0);
};
/////////////////////////////////////////////////////////////
let gears = document.querySelector("#gears");
let floatDiv = document.querySelector(".floatDiv");
gears.onclick = function () {
  floatDiv.classList.toggle("showDiv");
};
/////////////////////////////////////////////////////////////
let nav = document.querySelector("#nav");
let navbarBrand = document.querySelector(".navbar-brand img");
function showNav() {
  if (scrollY > 200) {
    nav.classList.add("shownav");
  } else {
    nav.classList.remove("shownav");
  }
}
showNav();
/////////////////////////////////////////////////////////////
let sections = document.querySelectorAll("section");
let navItem = document.querySelectorAll(".nav-item");
let progressBar = document.querySelectorAll(".progress-bar");
window.onscroll = function () {
  let scrollTop = document.documentElement.scrollTop;
  showNav();
  /////////////////////////////////////////////////////////////
  let label = document.querySelectorAll("label");
  let About = document.querySelector("#About");
  if (window.scrollY >= About.offsetTop - 250) {
    progressBar.forEach((item) => {
      let value = item.dataset.width;
      item.style.width = `${value}%`;
    });
    label.forEach((item) => {
      item.style.opacity = "1";
    });
  } else {
    progressBar.forEach((item) => {
      item.style.width = "0%";
    });
    label.forEach((item) => {
      item.style.opacity = "0";
    });
  }
  /////////////////////////////////////////////////////////////
  sections.forEach((section) => {
    if (
      scrollTop > section.offsetTop * 0.9 &&
      scrollTop < section.offsetTop + section.offsetHeight * 0.9
    ) {
      let thisSection = section.id;
      navItem.forEach(() => {
        removeClassActive();
        document
          .querySelector(`[data-dir='${thisSection}']`)
          .classList.add("active");
      });
    }
  });
};
function removeClassActive() {
  navItem.forEach((item) => {
    item.classList.remove("active");
  });
}
/////////////////////////////////////////////////////////////////////////////
function setMode(e) {
  document.documentElement.style.setProperty("--mainColor", e);
  document.documentElement.style.setProperty("--mainColor90", `${e}e6`);
}
let allcolors = document.querySelectorAll(".allcolors span");
allcolors.forEach((span) => {
  span.addEventListener("click", () => {
    let thisColor = span.dataset.color;
    setMode(thisColor);
    localStorage.setItem("thisColor", thisColor);
  });
});
////////////////////////////////////////////////////////////////////////////
let lightMode = document.querySelector(".mode .light");
let darkMode = document.querySelector(".mode .dark");
function setMode2(a, b, c) {
  document.documentElement.style.setProperty("--black", a);
  document.documentElement.style.setProperty("--black90", a);
  document.documentElement.style.setProperty("--gray", a);
  document.documentElement.style.setProperty("--white", b);
  document.documentElement.style.setProperty("--secBg", c);
  localStorage.setItem("grayColor", a);
  localStorage.setItem("blackColor", a);
  localStorage.setItem("black90Color", a);
  localStorage.setItem("whiteColor", b);
  localStorage.setItem("secBgColor", c);
}
darkMode.addEventListener("click", () => {
  setMode2("#aaa", "#232323", "#1b1b1b");
});
lightMode.addEventListener("click", () => {
  setMode2("#000", "#fff", "#fafafa");
});
////////////////////////////////////////////////////////////////////////////
window.onload = function () {
  if (localStorage.getItem("thisColor") != null) {
    let LthisColor = localStorage.getItem("thisColor");
    setMode(LthisColor);
  } else {
    document.documentElement.style.setProperty("--mainColor", "#f25454");
    document.documentElement.style.setProperty("--mainColor90", `#f25454e6`);
  }
  if (localStorage.getItem("grayColor") != null) {
    let color1 = localStorage.getItem("blackColor");
    let color2 = localStorage.getItem("whiteColor");
    let color3 = localStorage.getItem("secBgColor");
    setMode2(color1, color2, color3);
  }

  let body = document.body
  let Allloader = document.querySelector(".Allloader")
  body.style.maxHeight = "auto";
  body.style.overflow = "auto";
  Allloader.style.display = "none";
};
