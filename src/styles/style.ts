import styled from 'styled-components';

// MovieListingPage styles
export const MovieListingPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SearchContainer = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

export const Input = styled.input`
  padding: 10px;
  border: 2px solid #007bff;
  border-radius: 5px;
  font-size: 16px;
  width: 300px;
  outline: none;
  margin-left: 10px;
`;

export const Select = styled.select`
  padding: 10px;
  border: 2px solid #007bff;
  border-radius: 5px;
  font-size: 16px;
  width: 150px;
  margin-left: 10px;
  outline: none;
`;

export const MovieList = styled.div`
  display: grid;
  grid-template-columns: repeat(5, minmax(200px, 1fr));
  grid-gap: 20px;
`;

export const MovieItem = styled.div`
  border: 1px solid #ddd;
  padding: 10px;
  text-align: center;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s;
  width: 250px;
  height: 450px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  }
`;

export const Poster = styled.img`
  width: 100%;
  max-height: 250px;
  height: auto;
  margin-bottom: 10px;
`;


export const Year = styled.p`
  font-size: 14px;
  color: #666;
`;

export const IMDbRating = styled.p`
  font-size: 14px;
  color: #666;
`;

export const PaginationContainer = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: center;
`;

export const PaginationButton = styled.button`
  padding: 10px;
  margin: 0 5px;
  border: none;
  border-radius: 5px;
  background-color: #007bff;
  color: #fff;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

export const LoadingIndicator = styled.div`
  margin-top: 20px;
  font-size: 20px;
  color: #007bff;
`;

// MovieDetailsPage styles
export const MovieDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid #ddd;
  text-align: center;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s;
  width: 400px;
  height: auto;
  margin: auto;
  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  }
`;

export const MoviePoster = styled.img`
  width: 100%;
  max-height: 300px;
  height: auto;
  margin-bottom: 20px;
`;

export const MovieTitle = styled.h3`
  margin-bottom: 10px;
  font-size: 24px;
`;

// App styles
export const AppTitle = styled.h1`
  font-size: 2rem;
  color: #007bff;
  text-align: center;
  margin-bottom: 20px;
`;
