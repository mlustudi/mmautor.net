function toggleMenu() {
    var menu = document.getElementById("menu");
    if (menu.style.display === "block") {
      menu.style.display = "none";
    } else {
      menu.style.display = "block";
    }
}

function simple(log) {
    console.log(log);
}
var showroomElements = document.getElementsByClassName("teaser_slider-dots");
for (el in showroomElements) {
    el.addEventListener("mouseover", simple(this));
}

function toggleSliderView(el) {
    var active = document.getElementsByClassName("teaser_slider-active");
    active.classList.toggle("teaser_slider-active");
    el.classList.toggle("teaser_slider-active");
}