import { extraerValores } from "../logica/extraerValores.js";
import { extraerValoresTexto } from "../logica/extraerValoresTexto.js";
import { filtrarPorTipoR } from "../logica/filtrarPorTipoR.js";
import { rUnicas } from "../models/rUnicas.js";
import { rOtros } from "../models/rOtros.js";
import { rMultiples } from "../models/rMultiples.js";
import { sequelize } from "../database/database.js";
import { extraerValoresMultiples } from "../logica/extraerValoresMultiples.js";

export const setRWeb = async (req, res) => {
  const datos = req.body;
  const arrayUnicos = filtrarPorTipoR(datos, "unica");
  const arrayMultiples = filtrarPorTipoR(datos, "multiple");
  const datosExtraidos = extraerValores(arrayUnicos);
  let valoresTextoOtros = [];
  let valoresMultiples = [];

  try {
    await sequelize.transaction(async (t) => {
      const newRUnica = await rUnicas.create(datosExtraidos, { transaction: t });
      const idcuestn = newRUnica.cuestn;

      valoresTextoOtros = extraerValoresTexto(datos, idcuestn);
      valoresMultiples = extraerValoresMultiples(arrayMultiples, idcuestn);

      const insertarTexto = valoresTextoOtros.map(async (item) => await rOtros.create(item, { transaction: t }));
      const insertarMultiples = valoresMultiples.map(async (item) => await rMultiples.create(item, { transaction: t }));

      await Promise.all(insertarTexto);
      await Promise.all(insertarMultiples);

      res.json(idcuestn);
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }

};
