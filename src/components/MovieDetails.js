import React from 'react';
import { useParams, Link } from 'react-router-dom';

const MovieDetails = ({ movies }) => {
  const { title } = useParams();
  const movie = movies.find(movie => movie.title === title);

  if (!movie) {
    return <div>Movie not found</div>;
  }

  return (
    <div>
      <h2>{movie.title}</h2>
      <p>{movie.description}</p>
      <iframe 
        width="560" 
        height="315" 
        src={movie.trailerURL} 
        title={movie.title} 
        frameBorder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowFullScreen>
      </iframe>
      <Link to="/">Accueil</Link>
    </div>
  );
}

export default MovieDetails;
