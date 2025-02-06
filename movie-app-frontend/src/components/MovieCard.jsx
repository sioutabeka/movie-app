// Le composant MovieCard affiche les infos de chq film 

function MovieCard({ title, rating, description }) {
  return (
    <div className="movie-card">
      <h2>{title}</h2>
      <p>Note : {rating}</p>
      <p>Description : {description}</p>
    </div>
  );
}

export default MovieCard