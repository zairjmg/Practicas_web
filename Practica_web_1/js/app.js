//@ts-check
var width_lg = document.getElementById("logo").clientWidth;
var width_txt_lg = document.getElementById("txt_logo");
var heigth_menu = document.getElementById("menu");
var width_screen = screen.width;
var height_screen = screen.height;
width_txt_lg.style.width = "".concat(width_lg, "px");
alert("tama\u00F1o de la pantalla es: alto ".concat(height_screen, ", ancho ").concat(width_screen));
heigth_menu.style.height = "".concat(height_screen, "px");
console.log(width_screen);
console.log(height_screen);
console.log(width_lg);
