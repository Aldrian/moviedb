import { useState, useEffect, ReactElement } from "react";
import styled from "@emotion/styled";
import { getPopularMovies, searchMovies } from "../model/movies/movies";
import { MovieListElem } from "../model/movies/types";
import { Poster } from "../components/Poster";
import { SearchBar } from "../components/SearchBar";
import { PosterSkeleton } from "../components/PosterSkeleton";

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

const duplicate = (x: ReactElement, n: number) =>
  Array.from(new Array(n), () => x);

const Home = () => {
  const [movies, setMovies] = useState<MovieListElem[]>([]);
  const [loading, setLoading] = useState(true);
  const skeletonElems = duplicate(<PosterSkeleton />, 8);

  useEffect(() => {
    getPopularMovies()
      .then((elems) => {
        setMovies(elems);
        setLoading(false);
      })
      .catch((_) => setMovies([]));
  }, []);

  return (
    <Wrapper>
      <SearchBar
        onActionCalled={(searchValue: string) => {
          setLoading(true);
          searchMovies(searchValue)
            .then((elems) => {
              setMovies(elems);
              setLoading(false);
            })
            .catch((_) => setMovies([]));
        }}
        onCleared={() => {
          setLoading(true);
          getPopularMovies()
            .then((elems) => {
              setMovies(elems);
              setLoading(false);
            })
            .catch((_) => setMovies([]));
          setLoading(false);
        }}
      />
      <PosterList>
        {loading
          ? skeletonElems.map((elem) => elem)
          : movies.map((movie) => (
              <Poster movie={movie} key={`movie${movie.id}`} />
            ))}
      </PosterList>
    </Wrapper>
  );
};

export default Home;
