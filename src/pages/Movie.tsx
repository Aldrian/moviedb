import { useState, useEffect, ReactElement } from "react";
import styled from "@emotion/styled";
import { useParams } from "react-router-dom";
import { getPopularMovies } from "../model/movies/movies";
import { MovieDetailsElem } from "../model/movies/types";
import { getMovieDetails } from "../model/movies/movie";
import { PosterSkeleton } from "../components/PosterSkeleton";

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  margin-top: 20px;

  img {
    margin: auto;
  }
`;

const Content = styled.div`
  max-width: 100%;
  margin-right: 0;

  @media (min-width: 700px) {
    max-width: 60%;
    margin-right: 2rem;
  }

  p,
  h2,
  span {
    color: ${(props) => props.theme.colors.text};

    transition: color 0.3s ease;
  }
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
      setMovieData(elem);
      setLoading(false);
    });
  }, [id]);

  if (!loading && !movieData) {
    return (
      <Wrapper>
        <p>No results</p>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <Content>
        {loading && <span />}
        {!loading && movieData?.title && <h2>{movieData.title}</h2>}
        {loading && <span />}
        {!loading && movieData?.description && <p>{movieData.description}</p>}
        {loading && <span />}
        {!loading && movieData?.rating && <p>{movieData.rating} / 10</p>}
      </Content>
      {loading && <PosterSkeleton />}
      {!loading && movieData?.poster && (
        <img src={movieData.poster} alt="movie poster" />
      )}
    </Wrapper>
  );
};

export default Movie;
