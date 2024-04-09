import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieDetails } from '../service/api';
import { MovieDetailsContainer, Poster as MoviePoster, MovieTitle } from '../styles/style';



const MovieDetailsPage: React.FC = () => {
  const { imdbID } = useParams<{ imdbID: string }>();
  const [movieDetails, setMovieDetails] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fetchMovieDetails(imdbID);
        setMovieDetails(result);
        console.log("Detail Result",result)
      } catch (error) {
        console.error('Error fetching movie details:', error);
      }
    };

    fetchData();
  }, [imdbID]);

  return (
    <MovieDetailsContainer>
      {movieDetails && (
        <>
          <MovieTitle>{movieDetails.Title}</MovieTitle>
          <MoviePoster src={movieDetails.Poster} alt={movieDetails.Title} />
          <p>Year: {movieDetails.Year}</p>
          <p>Type: {movieDetails.Type}</p>
          <p>Duration: {movieDetails.Runtime}</p>
        <p>Genre: {movieDetails.Genre}</p>
        <p>Director: {movieDetails.Director}</p>
        <p>Cast: {movieDetails.Actors}</p>
        <p>IMDb Rating: {movieDetails.imdbRating}</p>
        </>
      )}
    </MovieDetailsContainer>
  );
};

export default MovieDetailsPage;