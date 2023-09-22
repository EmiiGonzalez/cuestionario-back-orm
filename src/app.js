import express from 'express';
import rUnicasRoutes from './routes/rUnicas.routes.js';

const app = express();

app.use(express.json());
app.use(rUnicasRoutes);

export default app;