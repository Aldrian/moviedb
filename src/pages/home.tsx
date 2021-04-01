import { useState, useEffect } from "react";
import styled from "@emotion/styled";
import { getPopularMovies } from "../model/movies/movies";
import { Movie } from "../model/movies/types";

const Button = styled.button`
  color: ${(props) => props.theme.colors.text};
  background: ${(props) => props.theme.colors.background};
  padding: 5px 10px;
`;

const Home = () => {
  const [popularMovies, setPopularMovies] = useState<Movie[]>([]);

  useEffect(() => {
    getPopularMovies()
      .then((movies) => setPopularMovies(movies))
      .catch((_) => setPopularMovies([]));
  }, []);

  return <Button>Test</Button>;
};

export default Home;
