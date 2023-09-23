const extraerValores = (datos) => {
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

const extraerValoresTexto = (datos, id) => {
  const arrayResultante = [];

  for (const dato of datos) {
    let objetoCreado = {};
    const preguntaNumero = dato.preguntaNumero;
    let respuesta = dato.respuesta;
    if (dato.tipoR === "unica" && respuesta.texto) {
      objetoCreado.texto = respuesta.texto;
      objetoCreado.idcuestn = id;
      objetoCreado.pNumero = preguntaNumero;
      arrayResultante.push(objetoCreado);
    }
    if (dato.tipoR === "multiple") {
      respuesta.forEach((item) => {
        objetoCreado = {};
        if (typeof item === "object" && item.texto) {
          objetoCreado.texto = item.texto;
          objetoCreado.idcuestn = id;
          objetoCreado.pNumero = preguntaNumero;
          arrayResultante.push(objetoCreado);
        }
      });
    }
    if (dato.tipoR === "final" && dato.respuesta.length > 0) {
      objetoCreado = {};
      objetoCreado.texto = dato.respuesta;
      objetoCreado.idcuestn = id;
      objetoCreado.pNumero = preguntaNumero;
      arrayResultante.push(objetoCreado);
    }
  }
  return arrayResultante;
};
