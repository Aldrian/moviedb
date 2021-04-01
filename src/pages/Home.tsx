import { useState, useEffect } from "react";
import styled from "@emotion/styled";
import { getPopularMovies, searchMovies } from "../model/movies/movies";
import { Movie } from "../model/movies/types";
import { Poster } from "../components/Poster";
import { SearchBar } from "../components/SearchBar";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const PosterList = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;

  margin-top: 2rem;
`;

const Home = () => {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    getPopularMovies()
      .then((elems) => setMovies(elems))
      .catch((_) => setMovies([]));
  }, []);

  return (
    <Wrapper>
      <SearchBar
        onActionCalled={(searchValue: string) => {
          searchMovies(searchValue)
            .then((elems) => setMovies(elems))
            .catch((_) => setMovies([]));
        }}
        onCleared={() => {
          getPopularMovies()
            .then((elems) => setMovies(elems))
            .catch((_) => setMovies([]));
        }}
      />
      <PosterList>
        {movies.map((movie) => (
          <Poster movie={movie} key={`movie${movie.id}`} />
        ))}
      </PosterList>
    </Wrapper>
  );
};

export default Home;
