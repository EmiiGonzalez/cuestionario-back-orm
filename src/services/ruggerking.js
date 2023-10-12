export const rellenarVacios = (formData, caracter) => {
  const camposAProcesar = {
    edad: 2,
    sexo: 1,
    p1: 1,
    p2: 1,
    p3: 2,
    p4: 1,
    p5: 1,
    p6: 1,
    p7: 3,
    p8: 1,
    p9: 1,
    p10: 1,
    p11: 2,
    p12: 5,
    p13: 1,
    p14: 1,
    p15: 1,
    p16: 1,
    p17: 8,
    p17_o: 180,
    p4_o: 50,
    p5_o: 50,
    p6_o: 50,
    p7_o: 80,
    p11_o: 80,
    p12_o: 80,
    p14_o: 80,
  };

  for (const campo in camposAProcesar) {
    if (
      formData[campo] === undefined ||
      formData[campo] === null ||
      formData[campo].trim() === ""
    ) {
      formData[campo] = caracter; // Rellenar el campo con "x" si está vacío o no tiene longitud
    }
    const modeloDeLongitud = camposAProcesar[campo];
    if (formData[campo].length < modeloDeLongitud) {
      // Rellenar el campo con "x" si no cumple con la longitud deseada
      while (formData[campo].length < modeloDeLongitud) {
        formData[campo] += caracter;
      }
    }
  }
  return formData;
};
