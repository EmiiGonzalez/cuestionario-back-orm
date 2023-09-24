import { Router } from "express";
const RouterWeb = Router();
import { setRWeb } from "../controllers/formWebController.js";

RouterWeb
    .post('/rFormWeb', setRWeb);

export default RouterWeb;