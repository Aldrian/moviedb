import styled from "@emotion/styled";
import { Icon } from "./Icon";
import { LightDarkToggleSwitch } from "./LightDarkToggleSwitch";

const NavbarElem = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  background-color: ${(props) => props.theme.colors.header};
  color: ${(props) => props.theme.colors.text};

  transition: color 0.3s ease, background-color 0.3s ease;

  h1 {
    margin: 0;
  }
`;

type NavbarProps = {
  isMovie: boolean;
  isDarkTheme: boolean;
  setIsDarkTheme: Function;
};

export const Navbar = ({
  isMovie,
  isDarkTheme,
  setIsDarkTheme,
}: NavbarProps) => (
  <NavbarElem>
    {isMovie ? <Icon name="keyboard_arrow_left" /> : <span />}
    <h1>Movies</h1>
    <LightDarkToggleSwitch checked={isDarkTheme} setChecked={setIsDarkTheme} />
  </NavbarElem>
);
