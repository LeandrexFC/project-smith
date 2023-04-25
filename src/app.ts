import express from 'express';
import smithRouter from './routes/smithRouter';

const app = express();

app.use(express.json());
app.use('/', smithRouter);

export default app;
