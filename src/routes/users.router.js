import { Router } from "express";
const RouterUsers = Router();
import {authMiddleware} from "../middleware/authMiddleware.js";
import { postLogin } from "../controllers/users.controller.js";

RouterUsers
.post("/usuario/login", authMiddleware , postLogin);

export default RouterUsers