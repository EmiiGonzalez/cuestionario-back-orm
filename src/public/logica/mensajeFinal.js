import { mensajeFinalTituloEsp, mensajeFinalTituloEng, mensajeFinal2 } from "./textosTraducidos.js"
export const mensajeFinal = (idcuest, boolean, msj) => {
  let idiomaEspanol = (navigator.language.startsWith("es")) && !["et", "et-EE"].includes(navigator.language.toLowerCase())

  if (boolean) {
    const divPadre = document.createElement("div");
    divPadre.classList.add("mensajeFinal");

    const mensajeTitulo = document.createElement("p");
    const divSuccess = document.createElement("div");
    const mensaje2 = document.createElement("p");

    divPadre.appendChild(mensajeTitulo);
    idiomaEspanol ? mensajeTitulo.innerText = mensajeFinalTituloEsp : mensajeTitulo.innerText = mensajeFinalTituloEng;
      
    mensajeTitulo.classList.add("mensajeTitulo");

    divPadre.appendChild(divSuccess);
    divSuccess.classList.add("success-animation");
    divSuccess.innerHTML = `<svg class="checkmark" xmlns="http://www.w3.org/2000/svg" viewbox="0 0 52 52">
  <circle class="checkmark__circle" cx="26" cy="26" r="25" fill="none" />
  <path class="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8" />
    </svg>`;

    divSuccess.appendChild(mensaje2);
    mensaje2.classList.add("mensaje2");
    idiomaEspanol ? mensaje2.innerText = `${mensajeFinal2.esp} ${idcuest}`: mensaje2.innerText = `${mensajeFinal2.eng} ${idcuest}`;

    return divPadre;
  }
  else {
    const divPadre = document.createElement("div");
    divPadre.classList.add("mensajeFinal");

    const mensajeTitulo = document.createElement("p");

    divPadre.appendChild(mensajeTitulo);
    mensajeTitulo.innerText =msj;
    mensajeTitulo.classList.add("mensajeTitulo");
    mensajeTitulo.style.color = "red";

    return divPadre;
  }

};
