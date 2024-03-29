import { mensajesEsp, mensajesEng } from "../textosTraducidos.js";

let idiomaEspanol = (navigator.language.startsWith("es")) && !["et", "et-EE"].includes(navigator.language.toLowerCase())


export const editarMensaje = (mensaje, tipoDeError) => {
  const divPadre = mensaje.closest(".cajaPregunta");
  mensaje.classList.remove("disabled");
  mensaje.innerText = mensajes[tipoDeError];
  if (tipoDeError === 3) {
    let textArea = divPadre.querySelector(".textoArea");
    textArea.classList.add("error-elemento");
  } else {
    divPadre.classList.add("error-elemento");
  }
  setTimeout(() => {
    mensaje.classList.add("disabled");
    mensaje.innerText = "";
    divPadre.classList.remove("error-elemento");
  }, 3500); // 5000 milisegundos = 5 segundos
};

const mensajes = idiomaEspanol ? mensajesEsp : mensajesEng;

