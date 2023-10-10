import express from "express";
import RouterWeb from "./routes/rFormWeb.routes.js";
import cors from "cors";
import { fileURLToPath } from 'url'; // Importa la función fileURLToPath para obtener la ruta del archivo
import path from "path";

const __filename = fileURLToPath(import.meta.url); // Obtiene la ruta del archivo actual (__filename)
const __dirname = path.dirname(__filename); // Obtiene el directorio actual (__dirname)

const app = express();
app.use('/', express.static(path.join(__dirname, 'public')))
app.use(
  cors({
    origin: "*",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true,
  })
);

app.use(express.json());
app.use(RouterWeb);

export default app;
