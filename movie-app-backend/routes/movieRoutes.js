// Importer express pr gerer les routes 
import express from "express";
import Movie from "../models/Movie.js";

// Créer un mini routeur pr nos films
const router = express.Router();



// Recuperer les films 
router.get("/", async (req, res) => {
    try {

        // Recup les films stockés dans la DB   
        const movies = await Movie.find(); 
        
        // On renvoit les films en format JSON
        res.json(movies);

    } catch (error) {
        res.status(500).json({message: "Erreur Serveur", error: error.message });
    }
});


        // Recup les films via leurs ID

        router.get("/:id", async (req, res) => {

            try {

                // On recup l'ID du film en question (genre sur lequel le USER a clické pr exemple)
                const movie = await Movie.findById(req.params.id);

                // Si film pas trouvé 404
                if(!movie){
                    return res.status(400).json({message: "Film non trouvé"})
                }

                // Si le film existe : on le send (200 = succes)
                res.status(200).json(movie);

            } catch (error) {
                res.status(500).json({message: "Erreur Serveur", error: error.message })
            }
        })



        // Ajouter un nouveau film dans la DB 

router.post("/", async (req, res) => {

    console.log(req.body)

    
    try {
        const { title, rating, description, posterURL, trailerLink } = req.body; 

        // Check si les champs obligatoire sont présents 
        if(!title || rating === undefined ) {
            return res.status(400).json({ message: "Titre et note sont obligatoires wsh"})
        }


        

        // La on crée le nouvel obj avec les infos fournis 
        const newMovie = new Movie({ title, rating, description, posterURL, trailerLink });

        // Save dans la DB 
        await newMovie.save();

        // Reponse Client 
        // 201 pr created 
        return res.status(201).json({ message: "Film ajouté dans la DB", movie: newMovie});


    } catch (error) {
        res.status(500).json({message: "Erreur Serveur", error: error.message });
    }
});


    // Modifier un film existant

    router.put("/:id", async (req, res) => {
        try {

            //Extraire les valeurs ajoutées par le client
            const { title, rating, description, posterURL, trailerLink } = req.body; 

            // Trouver le film via l'ID et MAJ les valeurs 
            const updatedMovie = await Movie.findByIdAndUpdate(
                (req.params.id), // ID du film à modif
                { title, rating, description, posterURL, trailerLink }, // Nouvelles valeurs 
                { new: true, runValidators: true}
            );

            if (!updatedMovie) {
                return res.status(404).json({ message: "Film non trouvé" });
            }
            
            // Succès : 
            res.status(200).json({ message: "Film mis à jour", movie: updatedMovie })

        } catch (error) {
            res.status(500).json({message: "Erreur Serveur", error: error.message });
        }
    })


// Supprimer un film 


router.delete("/:id", async (req, res) => {
    try {
        // On trouve le film et on supp
        const deletedMovie = await Movie.findByIdAndDelete(req.params.id);

        // Si on trouve pas le film 
        if (!deletedMovie) {
            return res.status(404).json({ message: "Film non trouvé" });
        }

        // Succés
        res.status(200).json({ message: "Film Supprimé", movie: deletedMovie })



    } catch (error) {
        res.status(500).json({message: "Erreur Serveur", error: error.message });
    }
})



export default router; 