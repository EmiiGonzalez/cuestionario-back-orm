import { rFormWeb } from "../models/rFormWeb.js";
import { rellenarVacios } from "../services/ruggerking.js";
import { deleteFill, deleteFillUnico } from "../services/deleteFill.js";
import dotenv from "dotenv";

export const getRForms = async (req, res) => {
  try {
    const rForm = await rFormWeb.findAll();
    const datos = deleteFill(rForm, process.env.CHAR);
    res.json(datos);
  } catch (error) {
    console.error("No se puede conectar con la base de datos:", error);
    res.status(500).json({
      error: error,
    });
  }
};

export const getRForm = async (req, res) => {
  try {
    const rForm = await rFormWeb.findByPk(req.params.id);
    const datos = deleteFillUnico(rForm, process.env.CHAR);
    res.json(datos);
  } catch (error) {
    console.error("No se puede conectar con la base de datos:", error);
    res.status(500).json({
      error: error,
    });
  }
};

export const createRForm = async (req, res) => {
  dotenv.config({ path: ".env" });
  try {
    if (process.env.FILL) {
      const formData = rellenarVacios(req.body, process.env.CHAR);
      const rForm = await rFormWeb.create(formData);
      res.json(rForm);
    } else {
      const rForm = await rFormWeb.create(req.body);
      res.json(rForm);
    }
  } catch (error) {
    console.error("No se puede conectar con la base de datos:", error);
    res.status(500).json({
      error: error,
    });
  }
};

export const updateRForm = async (req, res) => {
  try {
    const rForm = await rFormWeb.update(req.body, {
      where: {
        cuestn: req.params.id,
      },
    });
    res.json(rForm);
  } catch (error) {
    console.error("No se puede conectar con la base de datos:", error);
    res.status(500).json({
      error: error,
    });
  }
};

export const deleteRForm = async (req, res) => {
  try {
    const rForm = await rFormWeb.destroy({
      where: {
        cuestn: req.params.id,
      },
    });
    res.json(rForm);
  } catch (error) {
    console.error("No se puede conectar con la base de datos:", error);
    res.status(500).json({
      error: error,
    });
  }
};
