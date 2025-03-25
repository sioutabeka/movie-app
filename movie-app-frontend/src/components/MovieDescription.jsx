import React from 'react';
import { useParams, Link } from 'react-router-dom';

function MovieDescription({ movies }) {
  const { title } = useParams();
  const movie = movies.find(m => m.title === title);

  if (!movie) {
    return <p>Film non trouvé</p>;
  }

  return (
    <div className="movie-description">
      <h1>{movie.title}</h1>
      <p>{movie.description}</p>
      <iframe
        width="560"
        height="315"
        src={movie.trailerLink}
        title="Bande-annonce"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
{/* ✅ Lien pour revenir à l’accueil */}
<br />
      <Link to="/" style={{ display: "inline-block", marginTop: "20px", fontWeight: "bold" }}>
        ⬅️ Retour à l’accueil
      </Link>
      
          </div>
  );
}

export default MovieDescription; 