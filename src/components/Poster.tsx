import styled from "@emotion/styled";
import { MovieListElem } from "../model/movies/types";

const Overlay = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  background-color: ${(props) => props.theme.colors.background};

  opacity: 0;

  transition: opacity 0.3s ease;
`;

const PosterElem = styled.div`
  display: block;
  position: relative;

  cursor: pointer;

  width: 210px;

  margin: 0.2rem 0.5rem;

  img {
    width: 100%;
    height: auto;
  }

  h3 {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    opacity: 0;

    margin: 0;
    text-align: center;
    color: ${(props) => props.theme.colors.text};

    transition: color 0.3s ease, bottom 0.3s ease, opacity 0.3s ease;
  }

  &:hover,
  &:focus {
    span {
      opacity: 0.4;
    }
    h3 {
      bottom: 1rem;
      opacity: 1;
    }
  }
`;

type PosterProps = {
  movie: MovieListElem;
};

export const Poster = ({ movie }: PosterProps) => (
  <PosterElem>
    <Overlay />
    <img src={movie.poster} alt="movie poster" />
    <h3>{movie.title}</h3>
  </PosterElem>
);
