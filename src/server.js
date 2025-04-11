import express from 'express';

import connectDB from './database/DbContext.js';
import router from './routes/routes.js';

const app = express();
const PORT = 3000;

connectDB();

app.use(express.json());
app.use(router);

app.listen (PORT, () => console.log(`server rodando na porta ${PORT}...`));

