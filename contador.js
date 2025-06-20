
const fechaFinal = new Date("2025-07-09T16:30:00").getTime();

function actualizarContador() {
  const ahora = new Date().getTime();
  const diferencia = fechaFinal - ahora;

  const contador = document.getElementById("contador");

  if (diferencia <= 0) {
    contador.innerText = "¡Disfrutemos nuestro tiempo juntos ❤!";
    clearInterval(intervalo);
    return;
  }

  const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
  const horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
  const segundos = Math.floor((diferencia % (1000 * 60)) / 1000);

  contador.innerText = `${dias}d ${horas}h ${minutos}m ${segundos}s`;
}

const intervalo = setInterval(actualizarContador, 1000);
