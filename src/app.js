import express from "express";
import RouterWeb from "./routes/rFormWeb.routes.js";
import RouterUsers from "./routes/users.router.js";
import cors from "cors";
import { fileURLToPath } from 'url'; // Importa la función fileURLToPath para obtener la ruta del archivo
import path from "path";

const __filename = fileURLToPath(import.meta.url); // Obtiene la ruta del archivo actual (__filename)
const __dirname = path.dirname(__filename); // Obtiene el directorio actual (__dirname)

const app = express();

app.use(
  cors({
    origin: "*",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true,
  })
);


app.use(express.json());

app.use('/api', RouterWeb); // Manjar las rutas relacionadas con la API en /api
app.use('/users', RouterUsers); // Manejar las rutas relacionadas con los usuarios en /users
app.use('/', express.static(path.join(__dirname, 'public')))
app.use("/admin", express.static(path.join(__dirname, "public", "admin")));



export default app;