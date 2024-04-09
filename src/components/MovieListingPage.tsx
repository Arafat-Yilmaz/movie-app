import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetchMovies } from '../service/api';
import { MovieListingPageContainer, SearchContainer, Input, Select, MovieList, MovieItem, Poster, MovieTitle, Year, IMDbRating, PaginationContainer, PaginationButton, LoadingIndicator } from '../styles/style';

const MovieListingPage: React.FC = () => {
  const [movies, setMovies] = useState<any[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>('Pokemon');
  const [mediaType, setMediaType] = useState<string>('series');
  const [loading, setLoading] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);
  const [year, setYear] = useState<string>('');

  useEffect(() => {
    fetchData();
  }, [searchTerm, mediaType, year, page]);

  const fetchData = async () => {
    try {
      setLoading(true);
      const result = await fetchMovies(searchTerm, page, year, mediaType);
      setMovies(result.Search);
      console.log("list Result",result)
    } catch (error) {
      console.error('Error fetching movies:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setPage(1);
    fetchData();
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleMediaTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setMediaType(e.target.value);
  };

  const handleYearChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setYear(e.target.value);
  };

  return (
    <MovieListingPageContainer>
      <SearchContainer>
        <form onSubmit={handleSearch}>
          <Input
            type="text"
            value={searchTerm}
            onChange={handleInputChange}
            placeholder="Search for movies..."
          />
          <Select value={mediaType} onChange={handleMediaTypeChange}>
            <option value="movie">Movie</option>
            <option value="series">Series</option>
            <option value="episodes">Episode</option>
          </Select>
          <Input
            type="text"
            value={year}
            onChange={handleYearChange}
            placeholder="Year"
          />
        </form>
      </SearchContainer>
      {loading && <LoadingIndicator>Loading...</LoadingIndicator>}
      <MovieList>
        {movies?.map((movie, index) => (
          <Link key={movie.imdbID} to={`/movie-details/${movie.imdbID}`}>
            <MovieItem>
              <Poster src={movie.Poster} alt={movie.Title} />
              <MovieTitle>{movie.Title}</MovieTitle>
              <Year>Year: {movie.Year}</Year>
              <IMDbRating>IMDb ID: {movie.imdbID}</IMDbRating>
            </MovieItem>
          </Link>
        ))}
      </MovieList>
      <PaginationContainer>
        <PaginationButton
          onClick={() => setPage((prevPage) => Math.max(prevPage - 1, 1))}
          disabled={page === 1}
        >
          Previous Page
        </PaginationButton>
        <PaginationButton onClick={() => setPage((prevPage) => prevPage + 1)}>Next Page</PaginationButton>
      </PaginationContainer>
    </MovieListingPageContainer>
  );
};

export default MovieListingPage;
