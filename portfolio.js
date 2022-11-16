$(document).ready(function () {
  $(window).scroll(function () {
    if (this.scrollY > 20) {
      $(".navbar").addClass("sticky");
    } else {
      $(".navbar").removeClass("sticky");
    }
  });
});
// // toggle menu/navbar
$(".menu-btn").click(function () {
  $(".navbar .menu").toggleClass("active");
  $(".menu-btn i").toggleClass("active");
});

// typing animation

var typingEffect = new Typed(".typing", {
  strings: ["Developer", "Designer", "Photo Editor", "Video Editor"],
  typeSpeed: 100,
  backSpeed: 60,
  loop: true,
});
// // var typed = new Typed(".typing", {
// //   strings: ["Developer", "Designer", "Photo Editor", "Video Editor"],
// //   typeSpeed: 100,
// //   backSpeed: 60,
// //   loop: true,
// // });

// About

var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
  for (tablink of tablinks) {
    tablink.classList.remove("skills-link");
  }
  for (tabcontent of tabcontents) {
    tabcontent.classList.remove("skill-tab");
  }
  event.currentTarget.classList.add("skills-link");
  document.getElementById(tabname).classList.add("skill-tab");
}
