// copyright update
const copyright = document.querySelector(".copyright");
const currentYear = new Date().getFullYear();
copyright.innerHTML = `<span class="border-right">Copyright &copy; ${currentYear} </span> Sva prava zadrzana`;

// progress bar on scroll

window.addEventListener("scroll", () => {
  const progressBar = document.querySelector(".progress-bar");
  const windowHeight = window.innerHeight;
  const documentHeight = document.documentElement.scrollHeight;
  const maxScroll = documentHeight - windowHeight;
  let scrollY = window.scrollY;
  let progress = Math.round((scrollY / maxScroll) * 100);
  progressBar.style.width = `${progress}%`;
});

// carousel - landing page

const slides = document.querySelectorAll(".carousel__slide");
const next = document.querySelector("#nextSlide");
const prev = document.querySelector("#previous");
const auto = true;
const intervalTime = 6000;
let slideInterval;

const nextSlide = () => {
  const current = document.querySelector(".current");
  current.classList.remove("current");
  if (current.nextElementSibling) {
    current.nextElementSibling.classList.add("current");
  } else {
    slides[0].classList.add("current");
  }
  setTimeout(() => current.classList.remove("current"));
};

const prevSlide = () => {
  const current = document.querySelector(".current");
  current.classList.remove("current");
  if (current.previousElementSibling) {
    current.previousElementSibling.classList.add("current");
  } else {
    slides[slides.length - 1].classList.add("current");
  }
  setTimeout(() => current.classList.remove("current"));
};

next.addEventListener("click", (e) => {
  nextSlide();
  if (auto) {
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, intervalTime);
  }
});
prev.addEventListener("click", (e) => {
  prevSlide();
  if (auto) {
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, intervalTime);
  }
});

if (auto) {
  slideInterval = setInterval(nextSlide, intervalTime);
}

// lightbox gallery

const previousImage = document.querySelector(".prev");
const nextImage = document.querySelector(".next");

function openModal() {
  document.getElementById("myModal").style.display = "flex";
  document.body.style.overflow = "hidden";
}

function closeModal() {
  document.getElementById("myModal").style.display = "none";
  document.body.style.overflow = "auto";
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[slideIndex - 1].style.display = "block";
}

previousImage.addEventListener("click", (e) => {
  plusSlides(-1);
});
nextImage.addEventListener("click", (e) => {
  plusSlides(1);
});

// burger menu for responsive screens
const navigation = document.querySelector(".nav");
const nav = document.querySelector(".nav__menu");
const burger = document.querySelector(".burger");
const navLi = document.querySelectorAll(".nav__item");

navigation.addEventListener("click", (e) => {
  if (e.target.tagName === "A") {
    nav.classList.toggle("nav-active");
    burger.classList.toggle("toggle");
  }
});

burger.addEventListener("click", () => {
  nav.style.visibility = "visible";
  nav.classList.toggle("nav-active");

  // link animation
  navLi.forEach((link, index) => {
    if (link.style.animation) {
      link.style.animation = "";
    } else {
      link.style.animation = `navFade 0.5s ease forwards ${index / 7 + 0.5}s`;
    }
  });

  //burger animation
  burger.classList.toggle("toggle");
  navigation.classList.toggle("overflow");
});

// show button toTop button on scroll

const logoTop = document.querySelector(".toTop");

window.addEventListener("scroll", () => {
  let scrollVert = window.scrollY;

  if (scrollVert > 300) {
    logoTop.style.transform = "translatex(0)";
  } else {
    logoTop.style.transform = "rotate(90deg) translateY(-20rem)";
  }
});

logoTop.addEventListener("click", () => {
  window.scrollTo(0, 0);
});

//
