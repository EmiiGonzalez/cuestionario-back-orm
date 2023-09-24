import { Router } from "express";
import { getRUnicas, createRUnicas, updateRUnicas } from "../controllers/form.controller.js";
const RouterUnicas = Router();

RouterUnicas
    .get('/rUnicas', getRUnicas)
    .post('/rUnicas', createRUnicas)
    .put('/rUnicas/:id', updateRUnicas)
    .delete('/rUnicas/:id')
    .get('/rUnicas/:id')

export default RouterUnicas