import { cuestionarioEsp, cuestionarioEng } from "./logica/Cuestionario.js";
import { tiposFormulario } from "./logica/generarFormulario.js";
import { procesarFormulario } from "./logica/procesarPreguntas.js";
import {tituloEspanol, tituloIngles, bntTextEspanol, bntTextIngles} from "./logica/textosTraducidos.js";



const formulario = document.getElementById("form");
const btnInicio = document.querySelector(".btnIniciar");

//Seleccion del idioma a renderizar
//corroboro el idioma
let idiomaEspanol = (navigator.language.startsWith("es")) && !["et", "et-EE"].includes(navigator.language.toLowerCase())
//aplico el idioma al cuestionario global, el mensaje de bienvenida y los botones
let cuestionario = idiomaEspanol ? cuestionarioEsp : cuestionarioEng;

idiomaEspanol ? btnInicio.textContent= bntTextEspanol : btnInicio.textContent= bntTextIngles

idiomaEspanol ? document.querySelector(".titulo").textContent = tituloEspanol : document.querySelector(".titulo").textContent = tituloIngles

//fin de seleccion del idioma a renderizar



btnInicio.addEventListener("click", () => {
  const cajaInicio = btnInicio.parentNode.parentNode;

  //se esconde la caja de inicio, se genera toda la estructura para el formulario y luego se elimina dicha caja para liberar memoria
  setTimeout(() => {
    cajaInicio.classList.add("fade-out");
    cajaInicio.classList.remove("disabled");
    let footer = document.querySelector(".footer");
    footer.style.display = "none";
    footer.classList.add("fade-out");

    iniciarCuestionario(formulario);


    setTimeout(() => {
      cajaInicio.remove();
    } , 1000);
  } , 500);
})


const iniciarCuestionario = (formulario) => {


  for (const preguntaNumero in cuestionario) {
    let tipo = cuestionario[preguntaNumero].tipo;
    const divGenerar = tiposFormulario[tipo](cuestionario[preguntaNumero]);
    divGenerar.id = preguntaNumero;
    divGenerar.setAttribute("data-preguntatipo", tipo);
    formulario.appendChild(divGenerar);
  
    divGenerar.classList.add("disabled", "transicion-difuminado");
    
  }
  
  procesarFormulario(formulario);
}
