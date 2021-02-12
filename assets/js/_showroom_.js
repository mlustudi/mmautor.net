---
layout: none
---
/* Showroom */
var projects = {{ site.posts | jsonify }}.filter((post) => post.highlight == true);
console.log(projects);
window.onload = function() {
    var teaserslider = document.getElementById("teaser_slider");
    var highlightlist = document.getElementById("showroomHandle");

    for (let i of projects) {
        /* Füge ein Bild hinzu + alt="" */
        var imgnode = document.createElement("img");
        imgnode.src = "{{ site.url | append: site.imageurl }}" + i.image;
        teaserslider.appendChild(document.createElement("section")).appendChild(imgnode);

        /* Füge ein Bedienelement hinzu */
        console.log(highlightlist);
        var el = highlightlist.appendChild(document.createElement("li")).classList.add("teaser_slider-dots");

        /* Füge ein Eventlistener hinzu */
        /* on hover toggle class */
    }
};

/* function simple(log) {
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
} */