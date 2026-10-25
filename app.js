const scroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
});

var elem = document.querySelector(".imges-elem");
var fixed = document.querySelector(".fixed-img");
elem.addEventListener("mouseenter", function () {
  fixed.style.display = "block";
});
elem.addEventListener("mouseleave", function () {
  fixed.style.display = "none";
});

var card = document.querySelectorAll(".imge-card");
card.forEach(function (e) {
  e.addEventListener("mouseenter", function () {
    var imges = e.getAttribute("data-imge");
    fixed.style.backgroundImage = `url(${imges})`;
  });
});

function swiperAnimation() {
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    centeredSlides: true,
    spaceBetween: 60,
  });
}

var swiperBox = document.querySelector(".swiper-box");
var courser = document.querySelector(".courser");

swiperBox.addEventListener("mousemove", function (dets) {
  var rect = swiperBox.getBoundingClientRect();

  gsap.to(courser, {
    x: dets.clientX - rect.left,
    y: dets.clientY - rect.top,
    duration: 0.4,
    ease: "power2.out",
  });
});

swiperBox.addEventListener("mouseenter", function () {
  gsap.to(courser, {
    scale: 1,
    opacity: 1,
    duration: 0.3,
  });
});

swiperBox.addEventListener("mouseleave", function () {
  gsap.to(courser, {
    scale: 0,
    opacity: 0,
    duration: 0.3,
  });
});
swiperAnimation();





 let loder = document.querySelector(".loder");

window.addEventListener("load", function () {
  setTimeout(function () {
    loder.style.top = "-100%";
  }, 3800);
});





