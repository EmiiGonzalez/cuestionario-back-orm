import express from "express";
import RouterWeb from "./routes/rFormWeb.routes.js";
import cors from "cors";
import { fileURLToPath } from 'url';
import path from "path";
import https from "https";
import fs from "fs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use('/', express.static(path.join(__dirname, 'public')));
app.use('/pages', express.static(path.join(__dirname, 'pages')));

app.use(
  cors({
    origin: "*",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true,
  })
);

const httpsOptions = {
  key: fs.readFileSync(path.join(__dirname, 'certificados', 'key.pem')),
  cert: fs.readFileSync(path.join(__dirname, 'certificados', 'cert.pem')),
};

app.use(express.json());
app.use(RouterWeb);

app.use((req, res) => {
  res.redirect('/');
});

const server = https.createServer(httpsOptions, app);





export default server;
