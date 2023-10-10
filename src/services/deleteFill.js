export const deleteFill = (datosNoFiltrados, caracter) => {
  const data = [];
  datosNoFiltrados.forEach((element) => {
    data.push({
      cuestn: element.cuestn,
      edad: element.edad.toString().replaceAll(caracter, ""),
      sexo: element.sexo.toString().replaceAll(caracter, ""),
      p1: element.p1.toString().replaceAll(caracter, ""),
      p2: element.p2.toString().replaceAll(caracter, ""),
      p3: element.p3.toString().replaceAll(caracter, ""),
      p4: element.p4.toString().replaceAll(caracter, ""),
      p5: element.p5.toString().replaceAll(caracter, ""),
      p6: element.p6.toString().replaceAll(caracter, ""),
      p7: element.p7.toString().replaceAll(caracter, ""),
      p8: element.p8.toString().replaceAll(caracter, ""),
      p9: element.p9.toString().replaceAll(caracter, ""),
      p10: element.p10.toString().replaceAll(caracter, ""),
      p11: element.p11.toString().replaceAll(caracter, ""),
      p12: element.p12.toString().replaceAll(caracter, ""),
      p13: element.p13.toString().replaceAll(caracter, ""),
      p14: element.p14.toString().replaceAll(caracter, ""),
      p15: element.p15.toString().replaceAll(caracter, ""),
      p16: element.p16.toString().replaceAll(caracter, ""),
      p17: element.p17.toString().replaceAll(caracter, ""),
      p17_o: element.p17_o.toString().replaceAll(caracter, ""),
      p4_o: element.p4_o.toString().replaceAll(caracter, ""),
      p5_o: element.p5_o.toString().replaceAll(caracter, ""),
      p6_o: element.p6_o.toString().replaceAll(caracter, ""),
      p7_o: element.p7_o.toString().replaceAll(caracter, ""),
      p11_o: element.p11_o.toString().replaceAll(caracter, ""),
      p12_o: element.p12_o.toString().replaceAll(caracter, ""),
      p14_o: element.p14_o.toString().replaceAll(caracter, ""),
      
    })
  })
  return data
};


export const deleteFillUnico = (datosNoFiltrados, caracter) => {
  const data = {};
  for(const clave in datosNoFiltrados.dataValues){
    if(datosNoFiltrados[clave].toString().includes(caracter)){
      data[clave] = datosNoFiltrados[clave].toString().replaceAll(caracter, "");
      //agregar filtro
    }
    else{
      data[clave] = datosNoFiltrados[clave];
    }
  }
  return data
}
