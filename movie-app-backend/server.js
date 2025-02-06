// Importer les modules necessaires 
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { json } from 'express';

import connectDB from './config/db.js';
import movieRoutes from "./routes/movieRoutes.js";


// import Movie from './models/movie.js'; 
//👉 Toutes les requêtes liées aux films sont déjà centralisées dans movieRoutes.js, qui importe Movie et l’utilise pour récupérer, ajouter, modifier et supprimer des films.



// Charger les variables d'environnement 
dotenv.config();

// Initialiser l'app Express
const app = express();

app.use(json()); // Traiter les données JSON
app.use(cors()); // Le Cors permet de faire des requetes via le frontend


// Connexion à MongoDB
connectDB();


app.use("/movies", movieRoutes);

// Les routes de test pr check si le serveur fonctionne 
app.get("/", (req, res)=> {
    res.send("API EN LIGNE : STAR")
})

// Lancer le serveur et def les erreurs 
const PORT = process.env.PORT || 5001;
const server = app.listen(PORT, () => {
    console.log(`✅ Serveur démarré sur le port ${PORT}`);
});

// Catch les erreurs 
server.on("error", (error) => {
    console.error("❌ Erreur du serveur :", error.message);

    // Cas spécial : Port déjà utilisé
    if (error.code === "EADDRINUSE") {
        console.error(`❌ Le port ${PORT} est déjà utilisé. Essayez un autre.`);
        process.exit(1);
    }
});

