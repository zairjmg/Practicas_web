//@ts-check
let width_lg: Number = document.getElementById("logo").clientWidth;
let width_txt_lg = document.getElementById("txt_logo");
let heigth_menu = document.getElementById("menu");

let width_screen: Number = screen.width;
let height_screen: Number = screen.height;

width_txt_lg.style.width = `${width_lg}px`;
alert(`tamaño de la pantalla es: alto ${height_screen}, ancho ${width_screen}`);
heigth_menu.style.height = `${height_screen}px`;

console.log(width_screen);
console.log(height_screen);
console.log(width_lg);