export const extraerValoresMultiples = (datos, idcuestn) => {
  const arrayResultante = [];
  for (const dato of datos) {
    const preguntaNumero = dato.preguntaNumero;
    let resp = dato.respuesta;
    resp.forEach((item) => {
      let objeto = {};
      if (typeof item === "string") {
        objeto.respuesta = item;
        objeto.cuestnId = idcuestn;
        objeto.pNumero = preguntaNumero;
        arrayResultante.push(objeto);
      }
      if (typeof item === "object" && item.respuestaAbierta) {
        objeto = {};
        objeto.respuesta = item.respuestaAbierta;
        objeto.cuestnId = idcuestn;
        objeto.pNumero = preguntaNumero;
        arrayResultante.push(objeto);
      }
    });
  }
  return arrayResultante;
};
