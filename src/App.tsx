import { useState } from "react";
import styled from "@emotion/styled";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation,
} from "react-router-dom";
import { ThemeProvider } from "@emotion/react";
import { lightTheme, darkTheme } from "./utils/themes";
import Home from "./pages/Home";
import { Navbar } from "./components/Navbar";
import { Container } from "./components/Container";
import Movie from "./pages/Movie";

const Wrapper = styled.div`
  height: auto;
  min-height: 100%;
  margin: 0px auto;
  padding: 0px auto;
  background-color: ${(props) => props.theme.colors.background};

  transition: background-color 0.3s ease;
`;

const App = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(
    window.matchMedia("(prefers-color-scheme: dark)").matches
  );

  const theme = isDarkTheme ? darkTheme : lightTheme;

  return (
    <ThemeProvider theme={theme}>
      <Wrapper>
        <Router>
          <Navbar isDarkTheme={isDarkTheme} setIsDarkTheme={setIsDarkTheme} />
          <Container>
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/movie/:id" children={<Movie />} />
            </Switch>
          </Container>
        </Router>
      </Wrapper>
    </ThemeProvider>
  );
};

export default App;
