// Filter est le composant qui va gérer le champs de recherche pour filtrer les films dans MovieList 
// Il envoit au parent pr appliquer le filtre

import { useState } from "react";

function Filter({ onFilterChange }) {
  const [searchTerm, setSearchTerm] = useState("");  // L'état pour la recherche

  const handleChange = (e) => {
    const value = e.target.value; // Récupère la valeur tapée par l'utilisateur
    setSearchTerm(value); // Met à jour le terme de recherche
    onFilterChange(value); // Envoie cette valeur au parent (MovieList)
  };

  return (
    <div>
      <input 
        type="text" 
        placeholder="Rechercher un film..."
        value={searchTerm} // Affiche la valeur actuelle
        onChange={handleChange} // Chaque modification appelle handleChange
      />
    </div>
  );
}

export default Filter;
