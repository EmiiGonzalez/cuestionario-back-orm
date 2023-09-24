export const extraerValoresTexto = (datos, id) => {
  const arrayResultante = [];

  for (const dato of datos) {
    let objetoCreado = {};
    const preguntaNumero = dato.preguntaNumero;
    let respuesta = dato.respuesta;
    if (dato.tipoR === "unica" && respuesta.texto) {
      objetoCreado.texto = respuesta.texto;
      objetoCreado.cuestnId = id;
      objetoCreado.pNumero = preguntaNumero;
      arrayResultante.push(objetoCreado);
    }
    if (dato.tipoR === "multiple") {
      respuesta.forEach((item) => {
        objetoCreado = {};
        if (typeof item === "object" && item.texto) {
          objetoCreado.texto = item.texto;
          objetoCreado.cuestnId = id;
          objetoCreado.pNumero = preguntaNumero;
          arrayResultante.push(objetoCreado);
        }
      });
    }
    if (dato.tipoR === "final" && dato.respuesta.length > 0) {
      objetoCreado = {};
      objetoCreado.texto = dato.respuesta;
      objetoCreado.cuestnId = id;
      objetoCreado.pNumero = preguntaNumero;
      arrayResultante.push(objetoCreado);
    }
  }
  return arrayResultante;
};
