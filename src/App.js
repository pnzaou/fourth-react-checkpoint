import React, { useState } from 'react';
import MovieList from './components/MovieList';
import Filter from './components/Filter';
import './App.css';

const App = () => {
  const [movies, setMovies] = useState([
    { title: 'Inception', description: 'A mind-bending thriller', posterURL: 'https://via.placeholder.com/150', rating: 5 },
    { title: 'Interstellar', description: 'A journey through space and time', posterURL: 'https://via.placeholder.com/150', rating: 4 },
  ]);

  const [filteredMovies, setFilteredMovies] = useState(movies);

  const addMovie = () => {
    const newMovie = { title: 'New Movie', description: 'New Description', posterURL: 'https://via.placeholder.com/150', rating: 3 };
    setMovies([...movies, newMovie]);
    setFilteredMovies([...movies, newMovie]);
  };

  const filterMovies = (title, rating) => {
    const filtered = movies.filter(movie => {
      return movie.title.toLowerCase().includes(title.toLowerCase()) && (rating ? movie.rating >= rating : true);
    });
    setFilteredMovies(filtered);
  };

  return (
    <div className="App">
      <h1>My Movie App</h1>
      <button onClick={addMovie}>Add Movie</button>
      <Filter onFilter={filterMovies} />
      <MovieList movies={filteredMovies} />
    </div>
  );
};

export default App;
