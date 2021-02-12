/* Responsive Menü */
function toggleMenu() {
  console.log("toggleMenu");
    var menu = document.getElementsByClassName("menu");
    console.log(menu);
    console.log(menu[0]);
    menu[0].classList.toggle("menu-opened");
}