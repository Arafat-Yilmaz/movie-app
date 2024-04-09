import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MovieListingPage from './components/MovieListingPage';
import MovieDetailsPage from './components/MovieDetailsPage';
import { AppTitle as Title } from './styles/style';

const App: React.FC = () => {
  return (
    <div>
      <Title>Movie Application</Title>
      <Router>
        <Routes>
          <Route path="/" element={<MovieListingPage />} />
          <Route path="/movie-details/:imdbID" element={<MovieDetailsPage />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
