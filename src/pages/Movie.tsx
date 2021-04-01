import { useState, useEffect, ReactElement } from "react";
import styled from "@emotion/styled";
import { useParams } from "react-router-dom";
import { getPopularMovies } from "../model/movies/movies";
import { MovieDetailsElem } from "../model/movies/types";
import { getMovieDetails } from "../model/movies/movie";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

interface ParamTypes {
  id: string;
}

const Movie = () => {
  let { id } = useParams<ParamTypes>();

  const [movieData, setMovieData] = useState<MovieDetailsElem | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getMovieDetails(id).then((elem) => {
      setLoading(false);
    });
  }, [id]);

  return <Wrapper></Wrapper>;
};

export default Movie;
