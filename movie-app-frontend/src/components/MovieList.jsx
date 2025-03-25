import { useState, useEffect } from "react";
import MovieCard from "./MovieCard";
import Filter from "./Filter";

function MovieList({ movies }) {
  const [filteredMovies, setFilteredMovies] = useState(movies);
  const [searchTerm, setSearchTerm] = useState("");

  // Met à jour la liste filtrée quand les films changent
  useEffect(() => {
    setFilteredMovies(movies);
  }, [movies]);

  // Filtrage en fonction du titre ou de la note
  const handleFilterChange = (value) => {
    setSearchTerm(value);

    const filtered = movies.filter((movie) => {
      const matchTitle = movie.title.toLowerCase().includes(value.toLowerCase());
      const matchRating = movie.rating.toString().startsWith(value);
      return matchTitle || matchRating;
    });

    setFilteredMovies(filtered);
  };

  return (
    <div>
      <h2>Liste de films à voir</h2>

      {/* Champ de recherche */}
      <Filter onFilterChange={handleFilterChange} />

      <ul>
        {filteredMovies.length === 0 ? (
          <p>Aucun film trouvé !</p>
        ) : (
          filteredMovies.map((movie) => (
            <li key={movie.id}>
              <MovieCard
                title={movie.title}
                rating={movie.rating}
                description={movie.description}
                posterURL={movie.posterURL}
              />
            </li>
          ))
        )}
      </ul>
    </div>
  );
}

export default MovieList;


// import { useState, useEffect } from "react";
// import axios from "axios";
// import MovieCard from "./MovieCard";
// import Filter from "./Filter";
// import AddMovieForm from "./AddMovieForm";

// function MovieList() {
//   const [filteredMovies, setFilteredMovies] = useState([]); // Liste filtrée
//   const [searchTerm, setSearchTerm] = useState(""); // Terme de recherche

//   // Récupérer les films depuis le backend
//   // useEffect(() => {
//   //   const url = "http://localhost:5001/movies"; // L'URL utilisée
//   //   console.log("✅ URL de la requête :", url);

//   //   axios
//   //     .get(url)
//   //     .then((response) => {
//   //       console.log("✅ Réponse reçue :", response);
//   //       if (response.data && Array.isArray(response.data)) {
//   //         setMovies(response.data);
//   //         setFilteredMovies(response.data); // Par défaut, on affiche tous les films
//   //       } else {
//   //         console.error("❌ Aucune donnée valide reçue !");
//   //       }
//   //     })
//   //     .catch((error) => {
//   //       console.error("❌ Echec de récupération des films", error);
//   //     });
//   // }, []);

//   // Ajouter un nouveau film
//   const addMovie = () => {
//     axios.get("http://localhost:5001/movies")
//       .then((response) => {
//         if (response.data && Array.isArray(response.data)) {
//           setMovies(response.data);
//           setFilteredMovies(response.data);
//         }
//       })
//       .catch((error) => {
//         console.error("❌ Erreur lors de la récupération des films après ajout", error);
//       });
//   };

//   // Filtrer les films en fonction du titre ou de la note
//   const handleFilterChange = (value) => {
//     setSearchTerm(value);

//     const filtered = movies.filter((movie) => {
//       // Vérifier si la recherche correspond au titre
//       const matchTitle = movie.title.toLowerCase().includes(value.toLowerCase());

//       // Vérifier si la recherche correspond à la note (ex : "8" trouve "8.5", "8.3", etc.)
//       const matchRating = movie.rating.toString().startsWith(value);

//       return matchTitle || matchRating;
//     });

//     setFilteredMovies(filtered);
//   };

//   return (
//     <div>
//       <h2>Liste de films à voir</h2>
//       <AddMovieForm addMovie={addMovie} /> {/* Formulaire d'ajout */}
//       <Filter onFilterChange={handleFilterChange} /> {/* Champ de recherche */}

//       <ul>
//         {filteredMovies.length === 0 ? (
//           <p>Aucun film trouvé !</p>
//         ) : (
//           filteredMovies.map((movie) => (
//             <li key={movie._id}>
//               <MovieCard
//                 title={movie.title}
//                 rating={movie.rating}
//                 description={movie.description}
//               />
//             </li>
//           ))
//         )}
//       </ul>
//     </div>
//   );
// }

// export default MovieList;
