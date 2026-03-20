import mongoose from 'mongoose';
import dns from 'dns';

dns.setServers(["8.8.8.8", "1.1.1.1"]);

export async function connectDB() {
    try {
        await mongoose.connect('mongodb+srv://grupo-07:grupo-07@cluster0.blryo.mongodb.net/NodeMod3Cohorte5');
        console.log('Conexión exitosa a MongoDB');
    }
    catch (error) {
        console.error('Error al conectar a la base de datos:', error);
        process.exit(1);
    }
}