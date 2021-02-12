---
layout: none
---
/* Teaser: Slider */
document.addEventListener( 'DOMContentLoaded', function () {
	new Splide( '#card-slider', {
		perPage    : 1,
        type   : 'loop',
        lazyLoad: 'nearby'
	} ).mount();
} );

/* Main: a:hover */
var projects = {{ site.posts | jsonify }};
var imageurl = "{{ site.url | append: site.imageurl }}";
console.log(projects);

/* Wenn die Seite geladen ist ... */
window.onload = function() {
    /* get Elements */
    var main = document.getElementsByTagName("A");
    console.log(main);
    var anchors = document.getElementById("showroom");
    console.log(anchors);
    var slider = document.getElementById("card-slider");
    var storefront = document.getElementById("storefront");

    function test (el) {
        console.log(el)
    }
    /* listen for :hover & :focus */
    anchors.addEventListener("mouseenter", function() {
        test("in");
        test(this);

        /* get data-attribute */
        /* var dataslug = this.getAttribute("data-slug"); */
        var dataslug = "showroom/grauwert-303.png"
        var imagesrc = imageurl + dataslug;

        /* Verstecke den Slider */
        slider.style.display = 'none';

        /* Zeige das passende Bild zu dem ge:hoverten Projekt */
        var node = document.createElement("img");
        node.src = imagesrc;
        storefront.appendChild(node);
        var project = projects.filter(project => project.image == dataslug)[0];
        node = document.createElement("p");
        node.appendChild(document.createTextNode(project.title));
        storefront.appendChild(node);
        node = document.createElement("p");
        node.appendChild(document.createTextNode(project.description));
        storefront.appendChild(node);
        storefront.style.display = 'block';
    });
    anchors.addEventListener("mouseleave", function() {
        test("out");
        storefront.style.display = 'none';
        slider.style.display = 'block';
    });
}