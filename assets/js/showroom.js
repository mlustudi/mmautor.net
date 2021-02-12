---
layout: none
---
/* Teaser: Slider (Splide.js) */
document.addEventListener( 'DOMContentLoaded', function () {
	new Splide( '#card-slider', {
		perPage    : 1,
        type   : 'loop',
        lazyLoad: 'nearby'
	} ).mount();
} );

/* Main: .storefront-anchor:hover */

/* Wenn die Seite geladen ist, mache die Projekttitel interaktiv. */
document.addEventListener("DOMContentLoaded", function() {
    /* get Elements */
    var anchors = document.querySelectorAll(".storefront-anchor");
    console.log(anchors);
    var slider = document.getElementById("card-slider");
    var storefront = document.getElementById("storefront");

    function test (el) {
        console.log(el)
    }
    /* listen for :hover (& :focus) */
    console.log(typeof anchors)
    anchors.forEach(function(el) {
        el.addEventListener("mouseenter", function() {
            /* get data-attributes */
            var dataImage = "{{ site.url | append: site.imageurl }}" + this.getAttribute("data-storefront-image");
            var dataTitle = this.getAttribute("data-storefront-title");
            var dataDescription = this.getAttribute("data-storefront-description");

            /* Verstecke den Slider */
            slider.style.display = 'none';

            /* Zeige das passende Bild zu dem ge:hoverten Projekt */
            var img = document.getElementById("storefront-img");
            img.src = dataImage;
            var title = document.getElementById("storefront-title");
            title.innerText = dataTitle;
            var description = document.getElementById("storefront-description");
            description.innerText = dataDescription;
            storefront.classList.toggle("storefront-appear");
        });
        el.addEventListener("mouseleave", function() {
            storefront.classList.toggle("storefront-appear");
            slider.style.display = 'block';
        });
    });
})