import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_DB_URI);
        console.log('conectado ao mongoDB com sucesso!');
    } catch (error) {
        console.error('erro ao conectar com o mongoDB:', error.message);
    }
}

export default connectDB;