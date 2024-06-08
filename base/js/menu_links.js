var menu_links = document.querySelectorAll('.menu_links');
var ani_menu_link = document.querySelectorAll('.menu_link');
var nav_quiz = document.querySelectorAll('.nav_quiz');
var menu_icone_abrir = document.querySelectorAll('.menu_icone_abrir');

const menu_link_btn = document.querySelectorAll(".nav_menu_btn");

function clickEvent_menu() {
    menu_links.forEach(function(element) {
        element.classList.toggle('fechado');
    });
    ani_menu_link.forEach(function(element) {
        element.classList.toggle('ani_menu_link');
    });
    nav_quiz.forEach(function(element) {
        element.classList.toggle('nav_quiz_fechado');
    });
    menu_icone_abrir.forEach(function(element) {
        element.classList.toggle('menu_icone_fechar');
    });
}

menu_link_btn.forEach((button) => {
    button.addEventListener("click", clickEvent_menu);
});