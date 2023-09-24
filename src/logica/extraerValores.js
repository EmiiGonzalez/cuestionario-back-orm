export const extraerValores = (datos) => {
    let objetoResultante = {};
    for (const dato of datos) {
      const preguntaNumero = dato.preguntaNumero;
      let respuesta = dato.respuesta;
  
      if (typeof respuesta === "object" && respuesta.respuestaAbierta) {
        respuesta = respuesta.respuestaAbierta;
      }
      objetoResultante[preguntaNumero] = respuesta;
    }
    return objetoResultante;
  };