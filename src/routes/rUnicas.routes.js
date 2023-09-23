import { Router } from "express";
import { getRUnicas, createRUnicas, updateRUnicas } from "../controllers/form.controller.js";
const router = Router();

router
    .get('/formulario', getRUnicas)
    .post('/formulario', createRUnicas)
    .put('/formulario/:id', updateRUnicas)
    .delete('/formulario/:id')
    .get('/formulario/:id')

export default router