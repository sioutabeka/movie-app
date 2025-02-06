import { useState } from "react";
import axios from "axios";

function AddMovieForm({ addMovie }) {
  const [title, setTitle] = useState(""); 
  const [rating, setRating] = useState(""); 
  const [description, setDescription] = useState(""); 
  const [posterURL, setPosterURL] = useState(""); 

  // Fonction pour gérer la soumission du formulaire
  const handleSubmit = (e) => {
    e.preventDefault(); // Empêche le rechargement de la page lors de la soumission du formulaire

    // Vérification que les champs obligatoires (titre et note) sont remplis
    if (!title || !rating) {
      alert("Le titre et la note sont obligatoires");
      return;
    }

    // Créer un objet avec les données du film
    const newMovie = {
      title: title,
      rating: rating,
      description: description,
      posterURL: posterURL
    };

    // Envoi des données du film à l'API pour les ajouter à la base de données
    axios
      .post("http://localhost:5001/movies", newMovie) // URL de l'API backend
      .then((response) => {
        console.log("✅ Film ajouté :", response.data); // Vérifie ce qui est renvoyé par l'API
        addMovie(response.data); // Ajoute le film à la liste dans MovieList.jsx
      })
      .catch((error) => {
        console.error("❌ Erreur à l'ajout du film", error); // En cas d'erreur lors de l'ajout
      });

    // Réinitialiser les champs du formulaire après l'envoi
    setTitle("");
    setRating("");
    setDescription("");
    setPosterURL("");
  };

  // Le formulaire pour saisir les informations du film
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Titre :</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)} // Met à jour le titre
        />
      </div>

      <div>
        <label>Note :</label>
        <input
          type="number"
          value={rating}
          onChange={(e) => setRating(e.target.value)} // Met à jour la note
        />
      </div>

      <div>
        <label>Description :</label>
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)} // Met à jour la description
        />
      </div>

      <div>
        <label>URL du Poster :</label>
        <input
          type="text"
          value={posterURL}
          onChange={(e) => setPosterURL(e.target.value)} // Met à jour l'URL du poster
        />
      </div>

      <button type="submit">Ajouter le film</button>
    </form>
  );
}

export default AddMovieForm;
