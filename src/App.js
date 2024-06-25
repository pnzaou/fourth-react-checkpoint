import React, { useState } from 'react';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MovieList from './components/MovieList';
import Filter from './components/Filter';
import './App.css';
import MovieDetails from './components/MovieDetails';

const App = () => {
  const [movies, setMovies] = useState([
    { 
      title: 'Inception', 
      description: 'A mind-bending thriller', 
      posterURL: 'https://via.placeholder.com/150', 
      rating: 5,
      trailerURL: 'https://www.youtube.com/embed/YoHD9XEInc0'
    },
    { 
      title: 'Interstellar', 
      description: 'A journey through space and time', 
      posterURL: 'https://via.placeholder.com/150', 
      rating: 4,
      trailerURL: 'https://www.youtube.com/embed/zSWdZVtXT7E'
    },
  ]);

  const [filteredMovies, setFilteredMovies] = useState(movies);

  const addMovie = () => {
    const newMovie = { 
      title: 'New Movie', 
      description: 'New Description', 
      posterURL: 'https://via.placeholder.com/150', 
      rating: 3,
      trailerURL: 'https://www.youtube.com/embed/new_trailer_url'
    };
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
    <Router>
    <div className="App">
      <h1>My Movie App</h1>
      <button onClick={addMovie}>Add Movie</button>
      <Filter onFilter={filterMovies} />
      <Routes>
        <Route path="/" element={<MovieList movies={filteredMovies} />} />
        <Route path="/movies/:title" element={<MovieDetails movies={movies} />} />
      </Routes>
    </div>
  </Router>
  );
};

export default App;
