import styled from "@emotion/styled";
import { useHistory, useLocation } from "react-router-dom";

import { Icon } from "./Icon";
import { LightDarkToggleSwitch } from "./LightDarkToggleSwitch";

const NavbarElem = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;

  background-color: ${(props) => props.theme.colors.header};
  color: ${(props) => props.theme.colors.text};

  padding: 0.5rem 1rem;

  transition: color 0.3s ease, background-color 0.3s ease;

  h1 {
    margin: 0;
  }

  .back-icon {
    cursor: pointer;
  }
`;

type NavbarProps = {
  isDarkTheme: boolean;
  setIsDarkTheme: Function;
};

export const Navbar = ({ isDarkTheme, setIsDarkTheme }: NavbarProps) => {
  const history = useHistory();
  const location = useLocation();
  return (
    <NavbarElem>
      {location.pathname.includes("/movie") ? (
        <Icon
          className="back-icon"
          name="keyboard_arrow_left"
          onClick={() => {
            history.push("/");
          }}
        />
      ) : (
        <span />
      )}
      <h1>Movies</h1>
      <LightDarkToggleSwitch
        checked={isDarkTheme}
        setChecked={setIsDarkTheme}
      />
    </NavbarElem>
  );
};
