import express from 'express';
import smithRoutes from './routes/index.routes';

const app = express();

app.use(express.json());

app.use(smithRoutes);

export default app;
