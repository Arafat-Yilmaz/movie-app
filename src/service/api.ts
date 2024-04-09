import axios from 'axios';

const API_KEY = '9c174628';

export const fetchMovies = async (
  searchTerm: string,
  page: number,
  year: string,
  type: string
): Promise<any> => {
  try {
    const response = await axios.get(
      `http://www.omdbapi.com/?apikey=${API_KEY}&s=${searchTerm}&page=${page}&y=${year}&type=${type}`
    );
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch movies');
  }
};

export const fetchMovieDetails = async (imdbID: any): Promise<any> => {
  try {
    const response = await axios.get(
      `http://www.omdbapi.com/?apikey=${API_KEY}&i=${imdbID}`
    );
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch movie details');
  }
};
