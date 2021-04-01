import { MovieDetailsElem } from "./types";

const movieApiBaseUrl = "https://api.themoviedb.org/3";
const posterBaseUrl = "https://image.tmdb.org/t/p/w300";

export const getMovieDetails = async (
  movieId: string
): Promise<MovieDetailsElem | null> => {
  try {
    const response = await fetch(
      `${movieApiBaseUrl}/movie/${movieId}?api_key=${process.env.REACT_APP_MOVIEDB_API_KEY}`
    );
    const data = await response.json();
    console.log(data);
    return {
      id: data.id,
      title: data.title,
      poster: data.poster_path
        ? `${posterBaseUrl}${data.poster_path}`
        : undefined,
      description: data.overview ? data.overview : "",
      rating: data.vote_average ? data.vote_average : null,
    };
  } catch (e) {
    console.error(e);
    return null;
  }
};
