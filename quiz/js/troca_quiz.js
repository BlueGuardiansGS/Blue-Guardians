var quiz_inicio = document.querySelectorAll('.quiz_inicio');
var quiz_1 = document.querySelectorAll('.quiz_1');
var quiz_2 = document.querySelectorAll('.quiz_2');
var quiz_3 = document.querySelectorAll('.quiz_3');
var quiz_4 = document.querySelectorAll('.quiz_4');
var quiz_5 = document.querySelectorAll('.quiz_5');
var quiz_fim = document.querySelectorAll('.quiz_fim');
var fundo_vinheta = document.querySelectorAll('.fundo_vinheta');


const btn_inicio = document.querySelectorAll(".inicio");
const btn1 = document.querySelectorAll(".btn_1, .inicio_btn");
const btn2 = document.querySelectorAll(".btn_2, .alternativa1");
const btn3 = document.querySelectorAll(".btn_3, .alternativa2");
const btn4 = document.querySelectorAll(".btn_4, .alternativa3");
const btn5 = document.querySelectorAll(".btn_5, .alternativa4");
const btn_fim = document.querySelectorAll(".fim, .alternativa5");


function clickEvent() {
    btn_inicio.forEach(function(element) {
        element.classList.add('ativo');
        element.classList.remove('desativado');
    });
    btn1.forEach(function(element) {
        element.classList.add('desativado');
        element.classList.remove('ativo');
    });
    btn2.forEach(function(element) {
        element.classList.add('desativado');
        element.classList.remove('ativo');
    });
    btn3.forEach(function(element) {
        element.classList.add('desativado');
        element.classList.remove('ativo');
    });
    btn4.forEach(function(element) {
        element.classList.add('desativado');
        element.classList.remove('ativo');
    });
    btn5.forEach(function(element) {
        element.classList.add('desativado');
        element.classList.remove('ativo');
    });
    btn_fim.forEach(function(element) {
        element.classList.add('desativado');
        element.classList.remove('ativo');
    });

    quiz_inicio.forEach(function(element) {
        element.classList.add('ani_entra');
        element.classList.remove('ani_sai');
    });
    quiz_1.forEach(function(element) {
        element.classList.add('ani_sai');
        element.classList.remove('ani_entra');
    });
    quiz_2.forEach(function(element) {
        element.classList.add('ani_sai');
        element.classList.remove('ani_entra');
    });
    quiz_3.forEach(function(element) {
        element.classList.add('ani_sai');
        element.classList.remove('ani_entra');
    });
    quiz_4.forEach(function(element) {
        element.classList.add('ani_sai');
        element.classList.remove('ani_entra');
    });
    quiz_5.forEach(function(element) {
        element.classList.add('ani_sai');
        element.classList.remove('ani_entra');
    });
    quiz_fim.forEach(function(element) {
        element.classList.add('ani_sai');
        element.classList.remove('ani_entra');
    });
        fundo_vinheta.forEach(function(element) {
        element.classList.add('claro');
        element.classList.remove('escuro');
    });
}
function clickEvent2() {
    btn_inicio.forEach(function(element) {
        element.classList.add('desativado');
        element.classList.remove('ativo');
    });
    btn1.forEach(function(element) {
        element.classList.add('ativo');
        element.classList.remove('desativado');
    });
    btn2.forEach(function(element) {
        element.classList.add('desativado');
        element.classList.remove('ativo');
    });
    btn3.forEach(function(element) {
        element.classList.add('desativado');
        element.classList.remove('ativo');
    });
    btn4.forEach(function(element) {
        element.classList.add('desativado');
        element.classList.remove('ativo');
    });
    btn5.forEach(function(element) {
        element.classList.add('desativado');
        element.classList.remove('ativo');
    });
    btn_fim.forEach(function(element) {
        element.classList.add('desativado');
        element.classList.remove('ativo');
    });

    quiz_inicio.forEach(function(element) {
        element.classList.add('ani_sai');
        element.classList.remove('ani_entra');
    });
    quiz_1.forEach(function(element) {
        element.classList.add('ani_entra');
        element.classList.remove('ani_sai');
    });
    quiz_2.forEach(function(element) {
        element.classList.add('ani_sai');
        element.classList.remove('ani_entra');
    });
    quiz_3.forEach(function(element) {
        element.classList.add('ani_sai');
        element.classList.remove('ani_entra');
    });
    quiz_4.forEach(function(element) {
        element.classList.add('ani_sai');
        element.classList.remove('ani_entra');
    });
    quiz_5.forEach(function(element) {
        element.classList.add('ani_sai');
        element.classList.remove('ani_entra');
    });
    quiz_fim.forEach(function(element) {
        element.classList.add('ani_sai');
        element.classList.remove('ani_entra');
    });
        fundo_vinheta.forEach(function(element) {
        element.classList.add('claro');
        element.classList.remove('escuro');
    });
}
function clickEvent3() {
    btn_inicio.forEach(function(element) {
        element.classList.add('desativado');
        element.classList.remove('ativo');
    });
    btn1.forEach(function(element) {
        element.classList.add('desativado');
        element.classList.remove('ativo');
    });
    btn2.forEach(function(element) {
        element.classList.add('ativo');
        element.classList.remove('desativado');
    });
    btn3.forEach(function(element) {
        element.classList.add('desativado');
        element.classList.remove('ativo');
    });
    btn4.forEach(function(element) {
        element.classList.add('desativado');
        element.classList.remove('ativo');
    });
    btn5.forEach(function(element) {
        element.classList.add('desativado');
        element.classList.remove('ativo');
    });
    btn_fim.forEach(function(element) {
        element.classList.add('desativado');
        element.classList.remove('ativo');
    });

    quiz_inicio.forEach(function(element) {
        element.classList.add('ani_sai');
        element.classList.remove('ani_entra');
    });
    quiz_1.forEach(function(element) {
        element.classList.add('ani_sai');
        element.classList.remove('ani_entra');
    });
    quiz_2.forEach(function(element) {
        element.classList.add('ani_entra');
        element.classList.remove('ani_sai');
    });
    quiz_3.forEach(function(element) {
        element.classList.add('ani_sai');
        element.classList.remove('ani_entra');
    });
    quiz_4.forEach(function(element) {
        element.classList.add('ani_sai');
        element.classList.remove('ani_entra');
    });
    quiz_5.forEach(function(element) {
        element.classList.add('ani_sai');
        element.classList.remove('ani_entra');
    });
    quiz_fim.forEach(function(element) {
        element.classList.add('ani_sai');
        element.classList.remove('ani_entra');
    });
        fundo_vinheta.forEach(function(element) {
        element.classList.add('claro');
        element.classList.remove('escuro');
    });
}
function clickEvent4() {
    btn_inicio.forEach(function(element) {
        element.classList.add('desativado');
        element.classList.remove('ativo');
    });
    btn1.forEach(function(element) {
        element.classList.add('desativado');
        element.classList.remove('ativo');
    });
    btn2.forEach(function(element) {
        element.classList.add('desativado');
        element.classList.remove('ativo');
    });
    btn3.forEach(function(element) {
        element.classList.add('ativo');
        element.classList.remove('desativado');
    });
    btn4.forEach(function(element) {
        element.classList.add('desativado');
        element.classList.remove('ativo');
    });
    btn5.forEach(function(element) {
        element.classList.add('desativado');
        element.classList.remove('ativo');
    });
    btn_fim.forEach(function(element) {
        element.classList.add('desativado');
        element.classList.remove('ativo');
    });

    quiz_inicio.forEach(function(element) {
        element.classList.add('ani_sai');
        element.classList.remove('ani_entra');
    });
    quiz_1.forEach(function(element) {
        element.classList.add('ani_sai');
        element.classList.remove('ani_entra');
    });
    quiz_2.forEach(function(element) {
        element.classList.add('ani_sai');
        element.classList.remove('ani_entra');
    });
    quiz_3.forEach(function(element) {
        element.classList.add('ani_entra');
        element.classList.remove('ani_sai');
    });
    quiz_4.forEach(function(element) {
        element.classList.add('ani_sai');
        element.classList.remove('ani_entra');
    });
    quiz_5.forEach(function(element) {
        element.classList.add('ani_sai');
        element.classList.remove('ani_entra');
    });
    quiz_fim.forEach(function(element) {
        element.classList.add('ani_sai');
        element.classList.remove('ani_entra');
    });
        fundo_vinheta.forEach(function(element) {
        element.classList.add('claro');
        element.classList.remove('escuro');
    });
}
function clickEvent5() {
    btn_inicio.forEach(function(element) {
        element.classList.add('desativado');
        element.classList.remove('ativo');
    });
    btn1.forEach(function(element) {
        element.classList.add('desativado');
        element.classList.remove('ativo');
    });
    btn2.forEach(function(element) {
        element.classList.add('desativado');
        element.classList.remove('ativo');
    });
    btn3.forEach(function(element) {
        element.classList.add('desativado');
        element.classList.remove('ativo');
    });
    btn4.forEach(function(element) {
        element.classList.add('ativo');
        element.classList.remove('desativado');
    });
    btn5.forEach(function(element) {
        element.classList.add('desativado');
        element.classList.remove('ativo');
    });
    btn_fim.forEach(function(element) {
        element.classList.add('desativado');
        element.classList.remove('ativo');
    });

    quiz_inicio.forEach(function(element) {
        element.classList.add('ani_sai');
        element.classList.remove('ani_entra');
    });
    quiz_1.forEach(function(element) {
        element.classList.add('ani_sai');
        element.classList.remove('ani_entra');
    });
    quiz_2.forEach(function(element) {
        element.classList.add('ani_sai');
        element.classList.remove('ani_entra');
    });
    quiz_3.forEach(function(element) {
        element.classList.add('ani_sai');
        element.classList.remove('ani_entra');
    });
    quiz_4.forEach(function(element) {
        element.classList.add('ani_entra');
        element.classList.remove('ani_sai');
    });
    quiz_5.forEach(function(element) {
        element.classList.add('ani_sai');
        element.classList.remove('ani_entra');
    });
    quiz_fim.forEach(function(element) {
        element.classList.add('ani_sai');
        element.classList.remove('ani_entra');
    });
        fundo_vinheta.forEach(function(element) {
        element.classList.add('claro');
        element.classList.remove('escuro');
    });
}
function clickEvent6() {
    btn_inicio.forEach(function(element) {
        element.classList.add('desativado');
        element.classList.remove('ativo');
    });
    btn1.forEach(function(element) {
        element.classList.add('desativado');
        element.classList.remove('ativo');
    });
    btn2.forEach(function(element) {
        element.classList.add('desativado');
        element.classList.remove('ativo');
    });
    btn3.forEach(function(element) {
        element.classList.add('desativado');
        element.classList.remove('ativo');
    });
    btn4.forEach(function(element) {
        element.classList.add('desativado');
        element.classList.remove('ativo');
    });
    btn5.forEach(function(element) {
        element.classList.add('ativo');
        element.classList.remove('desativado');
    });
    btn_fim.forEach(function(element) {
        element.classList.add('desativado');
        element.classList.remove('ativo');
    });

    quiz_inicio.forEach(function(element) {
        element.classList.add('ani_sai');
        element.classList.remove('ani_entra');
    });
    quiz_1.forEach(function(element) {
        element.classList.add('ani_sai');
        element.classList.remove('ani_entra');
    });
    quiz_2.forEach(function(element) {
        element.classList.add('ani_sai');
        element.classList.remove('ani_entra');
    });
    quiz_3.forEach(function(element) {
        element.classList.add('ani_sai');
        element.classList.remove('ani_entra');
    });
    quiz_4.forEach(function(element) {
        element.classList.add('ani_sai');
        element.classList.remove('ani_entra');
    });
    quiz_5.forEach(function(element) {
        element.classList.add('ani_entra');
        element.classList.remove('ani_sai');
    });
    quiz_fim.forEach(function(element) {
        element.classList.add('ani_sai');
        element.classList.remove('ani_entra');
    });
    fundo_vinheta.forEach(function(element) {
        element.classList.add('claro');
        element.classList.remove('escuro');
    });
}
function clickEvent7() {
    btn_inicio.forEach(function(element) {
        element.classList.add('desativado');
        element.classList.remove('ativo');
    });
    btn1.forEach(function(element) {
        element.classList.add('desativado');
        element.classList.remove('ativo');
    });
    btn2.forEach(function(element) {
        element.classList.add('desativado');
        element.classList.remove('ativo');
    });
    btn3.forEach(function(element) {
        element.classList.add('desativado');
        element.classList.remove('ativo');
    });
    btn4.forEach(function(element) {
        element.classList.add('desativado');
        element.classList.remove('ativo');
    });
    btn5.forEach(function(element) {
        element.classList.add('desativado');
        element.classList.remove('ativo');
    });
    btn_fim.forEach(function(element) {
        element.classList.add('ativo');
        element.classList.remove('desativado');
    });

    quiz_inicio.forEach(function(element) {
        element.classList.add('ani_sai');
        element.classList.remove('ani_entra');
    });
    quiz_1.forEach(function(element) {
        element.classList.add('ani_sai');
        element.classList.remove('ani_entra');
    });
    quiz_2.forEach(function(element) {
        element.classList.add('ani_sai');
        element.classList.remove('ani_entra');
    });
    quiz_3.forEach(function(element) {
        element.classList.add('ani_sai');
        element.classList.remove('ani_entra');
    });
    quiz_4.forEach(function(element) {
        element.classList.add('ani_sai');
        element.classList.remove('ani_entra');
    });
    quiz_5.forEach(function(element) {
        element.classList.add('ani_sai');
        element.classList.remove('ani_entra');
    });
    quiz_fim.forEach(function(element) {
        element.classList.add('ani_entra');
        element.classList.remove('ani_sai');
    });
    fundo_vinheta.forEach(function(element) {
        element.classList.add('escuro');
        element.classList.remove('claro');
    });
}



btn_inicio.forEach((button) => {
    button.addEventListener("click", clickEvent);
});
btn1.forEach((button) => {
    button.addEventListener("click", clickEvent2);
});
btn2.forEach((button) => {
    button.addEventListener("click", clickEvent3);
});
btn3.forEach((button) => {
    button.addEventListener("click", clickEvent4);
});
btn4.forEach((button) => {
    button.addEventListener("click", clickEvent5);
});
btn5.forEach((button) => {
    button.addEventListener("click", clickEvent6);
});
btn_fim.forEach((button) => {
    button.addEventListener("click", clickEvent7);
});