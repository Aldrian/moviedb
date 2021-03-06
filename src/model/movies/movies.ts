import { MovieListElem } from "./types";

const movieApiBaseUrl = "https://api.themoviedb.org/3";
const posterBaseUrl = "https://image.tmdb.org/t/p/w300";

export const getPopularMovies = async (): Promise<MovieListElem[]> => {
  try {
    const response = await fetch(
      `${movieApiBaseUrl}/movie/popular?api_key=${process.env.REACT_APP_MOVIEDB_API_KEY}`
    );
    const data = await response.json();
    if (data.results) {
      return data.results.map((movie: any) => {
        const { id, title, poster_path } = movie;

        return {
          id,
          title,
          poster: poster_path ? `${posterBaseUrl}${poster_path}` : undefined,
        };
      });
    }
    return [];
  } catch (e) {
    console.error(e);
    return [];
  }
};

export const searchMovies = async (query: string): Promise<MovieListElem[]> => {
  try {
    const response = await fetch(
      `${movieApiBaseUrl}/search/movie?api_key=${
        process.env.REACT_APP_MOVIEDB_API_KEY
      }&query=${encodeURI(query)}`
    );
    const data = await response.json();
    if (data.results) {
      return data.results.map((movie: any) => {
        const { id, title, poster_path } = movie;

        return {
          id,
          title,
          poster: poster_path ? `${posterBaseUrl}${poster_path}` : undefined,
        };
      });
    }
    return [];
  } catch (e) {
    console.error(e);
    return [];
  }
};
