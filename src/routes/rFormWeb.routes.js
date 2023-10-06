import { Router } from "express";
const RouterWeb = Router();
import { getRForms, getRForm, createRForm, updateRForm, deleteRForm } from "../controllers/form.controller.js";

RouterWeb
    .get('/rFormWeb', getRForms)
    .get('/rFormWeb/:id', getRForm)
    .post('/rFormWeb/create', createRForm)
    .put('/rFormWeb/edit/:id', updateRForm)
    .delete('/rFormWeb/delete/:id', deleteRForm);

export default RouterWeb;