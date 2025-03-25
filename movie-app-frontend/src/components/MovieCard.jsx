import { Link } from "react-router-dom";

function MovieCard({ title, rating, description, posterURL }) {
  return (
    <Link to={`/movies/${title}`} style={{ textDecoration: "none", color: "inherit" }}>
      <div className="movie-card" style={{ cursor: "pointer" }}>
        <img src={posterURL} alt={`Affiche du film ${title}`} width="200" />
        <h2>{title}</h2>
        <p>Note : {rating}</p>
        <p>Description : {description}</p>
      </div>
    </Link>
  );
}

export default MovieCard;

// import { Link } from 'react-router-dom';


// function MovieCard({ title, rating, description, posterURL }) {
//   return (
//     <div className="movie-card">
     
//       <img 
//       src="{posterURL}"
//       style={{width: "200px"}} />

//       <h2>{title}</h2>
//       <p>Note : {rating}</p>
//       <p>Description : {description}</p>
//       <Link to={`/movies/${title}`}>Voir les détails</Link>
//     </div>
//   );
// }

// export default MovieCard;