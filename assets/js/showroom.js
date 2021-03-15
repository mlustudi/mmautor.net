---
layout: none
---
/* Teaser: Slider (Splide.js) */
document.addEventListener( 'DOMContentLoaded', function () {
	new Splide( '#card-slider', {
		perPage    : 1,
        type   : 'loop',
        lazyLoad: 'sequential'
	} ).mount();
} );

/* Main: .storefront-anchor:hover */

/* Wenn die Seite geladen ist, mache die Projekttitel interaktiv. */
document.addEventListener("DOMContentLoaded", function() {
    /* get Elements */
    var anchors = document.querySelectorAll(".storefront-anchor");
    var slider = document.getElementById("card-slider");
    var storefront = document.getElementById("storefront");

    function hideSlider() {
        slider.style.visibility = '';
        slider.style.display = 'none';
    }
    function showSlider() {
        slider.style.display = 'block';
        slider.style.visibility = 'visible';
    }
    function getDataAttributes(el) {
        var dataImage = "{{ site.url | append: site.imageurl }}" + el.getAttribute("data-storefront-image");
        var dataTitle = el.getAttribute("data-storefront-title");
        var dataDescription = el.getAttribute("data-storefront-description");
        return [dataTitle, dataDescription, dataImage]
    }
    function setStorefront([title, description, imageSrc]) {
        document.getElementById("storefront-img").src = imageSrc;
        document.getElementById("storefront-title").innerText = title;
        document.getElementById("storefront-description").innerText = description;
    }
    function showStorefront() {
        storefront.classList.toggle("storefront-appear", true);
    }
    function hideStorefront() {
        storefront.classList.toggle("storefront-appear", false);
        document.getElementById("storefront-img").src = '';
        document.getElementById("storefront-title").innerText = '';
        document.getElementById("storefront-description").innerText = '';
    }

    /* listen for :hover (& :focus) */
    anchors.forEach(function(el) {
        el.addEventListener("mouseover", function() {
            /* Suche die passenden Werte für die Kinderlemente von #storefront und füge sie enstprechend ein */
            setStorefront(getDataAttributes(this));
            hideSlider();
            showStorefront();
        });
        el.addEventListener("focusin", function() {
            setStorefront(getDataAttributes(this));
            hideSlider();
            showStorefront();
        });
        el.addEventListener("mouseleave", function() {
            hideStorefront();
            showSlider();
        });
        el.addEventListener("blur", function() {
            hideStorefront()
            showSlider();
        });
        el.addEventListener("click", function() {
            hideStorefront();
            showSlider();
            this.blur();
        });
    });
})