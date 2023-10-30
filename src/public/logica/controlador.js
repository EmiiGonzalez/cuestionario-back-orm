import { mensajeFinal } from "./mensajeFinal.js";

export const controladorDePeticiones = async (resultados, formularioDiv) => {
  const direccion = `${window.location.protocol}//${window.location.hostname}:${window.location.port}`;
  const datosAEnviar = JSON.stringify(resultados);
  const url = `${direccion}/api/rFormWeb/create`;

  formularioDiv.children[0].remove();

  const response = await postCuestionario(datosAEnviar, url, formularioDiv);
  while (!response) {
    let time = 5000;
    setInterval(async () => {
      response = await postCuestionario(datosAEnviar, url, formularioDiv);
    }, time);
  }
};

const postCuestionario = async (datos, url, formularioDiv) => {
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: datos,
    });
    if (response.ok) {
      const data = await response.json();
      const idFormulario = data.cuestn;
      formularioDiv.appendChild(mensajeFinal(idFormulario, true));
      return true;
    }
    if (response.status >= 400 && response.status < 500) {
      const mensajeError =
        "Error 400 no se pudo crear el cuestionario \n se reintentara automaticamente en 5 segundos";
      formularioDiv.appendChild(mensajeFinal(null, false, mensajeError));
      return false;
    }
    if (response.status >= 500 && response.status < 600) {
      const mensajeError =
        "Error 500 no se pudo crear el cuestionario \n se reintentara automaticamente en 5 segundos";
      formularioDiv.appendChild(mensajeFinal(null, false, mensajeError));
      return false;
    }
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};
