// Ici le composant App.jsx appelle le composant MovieList.jsx pr afficher la liste des films et il va aussi envoyer des requetes API 

import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

import MovieList from "./components/MovieList";

function App() {
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts/1") // API de test
      .then((response) => console.log("✅ Données reçues :", response.data))
      .catch((error) => console.error("❌ Erreur :", error));
  }, []);

  return (
    <div>
      <h1>On fait un app de films</h1>
      <MovieList/> 
    </div>
  );
}

export default App;
