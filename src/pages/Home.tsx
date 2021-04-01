import { useState, useEffect } from "react";
import styled from "@emotion/styled";
import { getPopularMovies } from "../model/movies/movies";
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
  const [popularMovies, setPopularMovies] = useState<Movie[]>([]);

  useEffect(() => {
    getPopularMovies()
      .then((movies) => setPopularMovies(movies))
      .catch((_) => setPopularMovies([]));
  }, []);

  return (
    <Wrapper>
      <SearchBar
        onActionCalled={(searchValue: string) => {
          console.log(searchValue);
        }}
      />
      <PosterList>
        {popularMovies.map((movie) => (
          <Poster movie={movie} key={`movie${movie.id}`} />
        ))}
      </PosterList>
    </Wrapper>
  );
};

export default Home;
