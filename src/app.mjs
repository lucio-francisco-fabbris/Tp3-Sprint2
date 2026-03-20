import express from 'express';
import { connectDB } from './config/dbConfig.mjs';
import superHeroRouter from './routes/superHeroRoutes.mjs';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

connectDB();

app.use('/api', superHeroRouter);

app.use((req, res) => {
    res.status(404).send({ mensaje: 'Ruta no encontrada' });
});

app.listen(PORT, () => {
    console.log(`Servidor funcionando en http://localhost:${PORT}`);
});