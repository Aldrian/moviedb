import { useState } from "react";
import { ThemeProvider } from "@emotion/react";
import styled from "@emotion/styled";
import { lightTheme, darkTheme } from "./utils/themes";

const Button = styled.button`
  color: ${(props) => props.theme.colors.text};
  background: ${(props) => props.theme.colors.background};
  padding: 5px 10px;
`;

const App = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(
    window.matchMedia("(prefers-color-scheme: dark)").matches
  );

  const theme = isDarkTheme ? darkTheme : lightTheme;

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
