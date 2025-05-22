const video = document.getElementById("myVideo");
let currentSecond = 0;

function playTo(targetSecond) {
  if (targetSecond === currentSecond) {
    return; // Se o usuário clicar no mesmo botão, não faz nada
  }

  // Define a direção da reprodução (1 para frente, -1 para trás)
  let direction = (targetSecond > currentSecond) ? 1 : -1;

  // Se estivermos indo para trás, vamos para o final e depois reproduzimos de trás para frente
  if (direction === -1) {
    video.currentTime = video.duration; // Vai para o final
    video.play();

    // Espera o vídeo chegar ao final antes de ir para o segundo desejado
    video.onended = () => {
      video.currentTime = targetSecond;
      currentSecond = targetSecond;
      video.pause();
      video.onended = null; // Remove o evento onended
    };
  } else {
    // Se estamos indo para frente, simplesmente reproduzimos normalmente
    video.currentTime = currentSecond;
    video.play();

    video.ontimeupdate = () => {
      if (video.currentTime >= targetSecond) {
        video.pause();
        video.ontimeupdate = null;
        currentSecond = targetSecond;
      }
    };
  }
}