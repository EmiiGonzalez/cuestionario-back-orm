import { mensajeFinal } from "./mensajeFinal.js";

export const controladorDePeticiones = (resultados, formularioDiv) => {
    const direccion = `${window.location.protocol}//${window.location.hostname}:${window.location.port}`;
    const datosAEnviar = JSON.stringify(resultados);
    const url = `${direccion}/rFormWeb/create`;

    formularioDiv.children[0].remove();

    fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"  // Especifica el tipo de contenido JSON
        },
        body: datosAEnviar
    })
    .then(response => response.json())
    .then(data => {
        const idFormulario = data.cuestn;
        formularioDiv.appendChild(mensajeFinal(idFormulario, true));
    })
    .catch(error => {
        console.log(error);
        formularioDiv.appendChild(mensajeFinal(null, false));
    })

}
