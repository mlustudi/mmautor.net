/* Responsive Menü */
function toggleMenu() {
  console.log("toggleMenu");
    var menu = document.getElementsByClassName("menu");
    var menuBurger = document.getElementsByClassName("menuBurger");
    console.log(menu);
    console.log(menu[0]);
    menu[0].classList.toggle("menu-opened");
    menuBurger[0].classList.toggle("menu-opened");
}