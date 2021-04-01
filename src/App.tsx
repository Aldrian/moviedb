import { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ThemeProvider } from "@emotion/react";
import { lightTheme, darkTheme } from "./utils/themes";
import Home from "./pages/Home";
import { Navbar } from "./components/Navbar";

const App = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(
    window.matchMedia("(prefers-color-scheme: dark)").matches
  );

  const theme = isDarkTheme ? darkTheme : lightTheme;

  return (
    <ThemeProvider theme={theme}>
      <Navbar
        isMovie={false}
        isDarkTheme={isDarkTheme}
        setIsDarkTheme={setIsDarkTheme}
      />
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
};

export default App;
