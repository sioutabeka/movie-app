// Ici le composant App.jsx appelle le composant MovieList.jsx pr afficher la liste des films et il va aussi envoyer des requetes API 

import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MovieDescription from './components/MovieDescription';
import MovieList from "./components/MovieList";


function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios
    .get("https://api.themoviedb.org/3/movie/popular?api_key=9e2e1f7004a1de3300f221ce5865e4af&language=fr-FR&page=1") // API JSON de test avec des films
    .then((response) => {

        console.log("Les données recues :", response.data);

        const results = response.data.results.map((movie) => ({
          id: movie.id, 
          title: movie.title,
          rating: movie.vote_average,
          description: movie.overview,
          posterURL: `https://image.tmdb.org/t/p/w300${movie.poster_path}`,
          trailerLink: "https://www.youtube.com/embed/dQw4w9WgXcQ" // temporairement fixe
        }));
        // console.log("✅ Données reçues :", response.data);
        setMovies(results);
      })
      .catch((error) => console.error("❌ Erreur TMBd:", error));
  }, []);

  return (
    <Router>
      <div>
        <h1>On fait un app de films</h1>
        <Routes>
          <Route path="/" element={<MovieList movies={movies} />} />
          <Route path="/movies/:title" element={<MovieDescription movies={movies} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

