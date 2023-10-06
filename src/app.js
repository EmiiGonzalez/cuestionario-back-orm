import express from "express";
import RouterWeb from "./routes/rFormWeb.routes.js";
import cors from "cors";

const app = express();
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
