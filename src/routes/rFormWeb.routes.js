import { Router } from "express";
const RouterWeb = Router();
import { createRForm } from "../controllers/form.controller.js";

RouterWeb
    .post('/rFormWeb', createRForm);

export default RouterWeb;