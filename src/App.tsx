import { useState, useEffect } from "react";
import { ThemeProvider } from "@emotion/react";
import styled from "@emotion/styled";
import { lightTheme, darkTheme } from "./utils/themes";
import { getPopularMovies } from "./model/movies/movies";
import { Movie } from "./model/movies/types";

const Button = styled.button`
  color: ${(props) => props.theme.colors.text};
  background: ${(props) => props.theme.colors.background};
  padding: 5px 10px;
`;

const App = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(
    window.matchMedia("(prefers-color-scheme: dark)").matches
  );
  const [popularMovies, setPopularMovies] = useState<Movie[]>([]);

  const theme = isDarkTheme ? darkTheme : lightTheme;

  useEffect(() => {
    getPopularMovies()
      .then((movies) => setPopularMovies(movies))
      .catch((_) => setPopularMovies([]));
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Button
        onClick={() => {
          setIsDarkTheme(!isDarkTheme);
        }}
      >
        Test
      </Button>
    </ThemeProvider>
  );
};

export default App;
