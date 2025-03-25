import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config();

const connectDB = async () => {
    try {
        // on vérifie que la variable d'environnement est bien présente
        console.log(process.env.MONGODB_URI);

        // on se connecte à la base de données
        const conn = await mongoose.connect(process.env.MONGODB_URI, {});
        console.log(`MongoDB connecté : ${conn.connection.host}`);


    } catch (error) {
        console.error(`Erreur de connexion MongoDB : ${error.message}`);
        process.exit(1);
    }
}

export default connectDB;