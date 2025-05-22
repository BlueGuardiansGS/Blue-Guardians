let pontuacao = 0;

function calcularPontos(alternativa) {
  if (alternativa.value === 'alternativa_C') {
    pontuacao += 2;
  } else if (alternativa.value === 'alternativa_E') {
    pontuacao += 0;
  }
  document.querySelector('.pontuacao').innerHTML = pontuacao;
}